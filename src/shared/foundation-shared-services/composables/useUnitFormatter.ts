import { useAppLanguageCode } from "@dative-gpi/foundation-shared-services/composables";
import { SI_PREFIXES } from "@dative-gpi/foundation-shared-services/config/units";
import { unitRegistry, unitFamilies, type UnitDefinition } from "@dative-gpi/foundation-shared-domain/models";

export function useUnitFormatter() {
  const { languageCode } = useAppLanguageCode();

  function findBestSIPrefix(value: number): { prefix: string; factor: number } {
    if (value === 0) {
      return SI_PREFIXES[3];
    }
    
    const absValue = Math.abs(value);
    const magnitude = Math.floor(Math.log10(absValue) / 3) * 3;
    
    const prefixIndex = Math.floor((magnitude + 9) / 3);
    
    return SI_PREFIXES[Math.max(0, Math.min(prefixIndex, SI_PREFIXES.length - 1))];
  }

  function parseUnitWithPrefix(unitString: string): { prefix: string; baseUnit: string } {
    const s = unitString.trim();

    if (unitRegistry[s]) {
      return { prefix: "", baseUnit: s };
    }
    const prefixes = SI_PREFIXES
      .map(p => p.prefix)
      .filter(p => p !== "")
      .sort((a, b) => b.length - a.length);

    for (const prefix of prefixes) {
      if (!s.startsWith(prefix)) {
        continue;
      }

      const baseUnit = s.slice(prefix.length);
      if (!baseUnit) {
        continue;
      }

      if (unitRegistry[baseUnit]) {
        return { prefix, baseUnit };
      }
    }

    return { prefix: "", baseUnit: s };
  }


  function findPrefixByName(prefixName: string): { prefix: string; factor: number } | null {
    const found = SI_PREFIXES.find(p => p.prefix === prefixName);
    return found || null;
  }

  function convertWithinFamily(value: number, fromUnit: string, toUnit: string): number {
    const from = unitRegistry[fromUnit];
    const to = unitRegistry[toUnit];
    
    if (!from || !to) {
      throw new Error(`Unknown units: ${fromUnit} or ${toUnit}`);
    }
    
    if (from.family !== to.family) {
      throw new Error(`Different families: ${from.family} vs ${to.family}`);
    }
    
    return (value * from.toPivot) / to.toPivot;
  }


  function applySpecialConversions(value: number, unit: string, unitDefinition: UnitDefinition ): { value: number; unit: string } {
    if (!unitDefinition.specialConversions?.length) {
      return { value, unit };
    }
    
    for (const conversion of unitDefinition.specialConversions) {
      if (Math.abs(value) >= conversion.threshold) {
        const convertedValue = convertWithinFamily(value, unit, conversion.toUnit);

        return { value: convertedValue, unit: conversion.toUnit };
      }
    }
    
    return { value, unit };
  }

  function selectBestUnit(value: number, unit: string, unitPrecision?: string): { value: number; unit: string; symbol: string; } {
    const unitSourceDefinition = unitRegistry[unit];
    
    // Unknown unit : apply SI prefixes only
    if (!unitSourceDefinition) {
      const prefix = findBestSIPrefix(value);
      const scaledValue = value / prefix.factor;
      return {
        value: scaledValue,
        unit: `${prefix.prefix}${unit}`,
        symbol: `${prefix.prefix}${unit}`
      };
    }
    
    // if unitPrecision is specified and valid
    if (unitPrecision) {
      const parsed = parseUnitWithPrefix(unitPrecision);
      const precisionUnitDefinition = unitRegistry[parsed.baseUnit];
      
      if (precisionUnitDefinition && precisionUnitDefinition.family === unitSourceDefinition.family) {
        // Convert value to the precision unit
        const valueInPrecision = convertWithinFamily(value, unit, parsed.baseUnit);
        
        // If a prefix is specified in unitPrecision, apply it EXACTLY
        if (parsed.prefix) {
          const forcedPrefix = findPrefixByName(parsed.prefix);
          if (forcedPrefix) {
            const scaledValue = valueInPrecision / forcedPrefix.factor;
            return {
              value: scaledValue,
              unit: parsed.baseUnit,
              symbol: `${forcedPrefix.prefix}${precisionUnitDefinition.symbol}`,
            };
          }
        }
        
        // No prefix specified in unitPrecision: return WITHOUT any SI prefix
        return {
          value: valueInPrecision,
          unit: parsed.baseUnit,
          symbol: precisionUnitDefinition.symbol,
        };
      }
    }
    
    // Apply special conversions
    const afterSpecial = applySpecialConversions(value, unit, unitSourceDefinition);
    if (afterSpecial.unit !== unit) {
      return selectBestUnit(afterSpecial.value, afterSpecial.unit, unitPrecision);
    }
    
    // if the unit support SI prefix
    if (unitSourceDefinition.usesSIPrefixes) {
      const prefix = findBestSIPrefix(value);
      const scaledValue = value / prefix.factor;
      return {
        value: scaledValue,
        unit,
        symbol: `${prefix.prefix}${unitSourceDefinition.symbol}`,
      };
    }
    
    return {
      value,
      unit,
      symbol: unitSourceDefinition.symbol,
    };
  }

  function formatNumber(value: number, precision: number, locale?: string): string {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: precision,
    }).format(value);
  }

  /**
   * take a value with its source unit, convert it to targetUnit (if specified),
   * find the best SI prefix (unless unitPrecision is specified),
   * and format it as a string.
   */
  function formatQuantity(valueToConvert: number, sourceUnit: string, options?: { targetUnit?: string; unitPrecision?: string; decimalPrecision?: number; }): 
  { formatted: string;
    value: string;
    unit: string;
  } {
    if (!isFinite(valueToConvert)) {
      return {
        formatted: "—",
        value: "—",
        unit: ""
      };
    }
    
    const sourceUnitDef = unitRegistry[sourceUnit];
    let finalValue = valueToConvert;
    let finalUnit = sourceUnit;
    
    if (options?.targetUnit && options.targetUnit !== sourceUnit) {
      const targetUnitDef = unitRegistry[options.targetUnit];
      
      if (!sourceUnitDef || !targetUnitDef) {
        throw new Error(`Unknown unit: ${sourceUnit} or ${options.targetUnit}`);
      }
      
      // Conversion with custom function (temperatures)
      const family = unitFamilies[sourceUnitDef.family];
      if (family.customConverter) {
        finalValue = family.customConverter(valueToConvert, sourceUnit, options.targetUnit);
        finalUnit = options.targetUnit;
      }
      // Conversion between units of the same family
      else if (sourceUnitDef.family === targetUnitDef.family) {
        finalValue = convertWithinFamily(valueToConvert, sourceUnit, options.targetUnit);
        finalUnit = options.targetUnit;
      }
      // Different families: error
      else {
        throw new Error(`Cannot convert between ${sourceUnitDef.family} and ${targetUnitDef.family}`);
      }
    }
    
    // Find the best prefix
    const result = selectBestUnit(finalValue, finalUnit, options?.unitPrecision);
    
    const decimalPrecision = options?.decimalPrecision ?? 2;

    const localLanguageCode = languageCode.value ?? "fr-FR";
    const formattedValue = formatNumber(result.value, decimalPrecision, localLanguageCode);
    const formatted = `${formattedValue} ${result.symbol}`;
    
    return {
      formatted,
      value: formattedValue,
      unit: result.symbol
    };
  }

  return {
    formatQuantity
  };
}