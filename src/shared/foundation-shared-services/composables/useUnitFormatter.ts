import { useAppLanguageCode } from "@dative-gpi/foundation-shared-services/composables";
import { unitRegistry, type UnitDefinition } from "@dative-gpi/foundation-shared-domain/models";
import { convertUnits, selectBestUnit } from "@dative-gpi/foundation-shared-domain/tools";

export interface FormatOptions {
  targetUnit?: string;
  unitPrecision?: string;
  decimalPrecision?: number;
  conversionThreshold?: number;
}

export interface FormattedQuantity {
  formatted: string;
  value: string;
  unit: string;
}

export function useUnitFormatter() {
  const { languageCode } = useAppLanguageCode();

  function applySpecialConversions(value: number, unit: string, unitDef: UnitDefinition, customThreshold?: number): { value: number; unit: string } {
    if (!unitDef.specialConversions?.length) {
      return { value, unit };
    }
    
    for (const conversion of unitDef.specialConversions) {
      if (Math.abs(value) >= (customThreshold ?? conversion.threshold)) {
        const convertedValue = convertUnits(value, unit, conversion.toUnit);
        return { value: convertedValue, unit: conversion.toUnit };
      }
    }
    
    return { value, unit };
  }

  function formatNumber(value: number, precision: number, locale?: string): string {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    }).format(value);
  }

  function formatQuantity(valueToConvert: number, sourceUnit: string, options: FormatOptions = {}): FormattedQuantity {
    // Edge case: non-finite values
    if (!isFinite(valueToConvert)) {
      return { formatted: "—", value: "—", unit: "" };
    }
    
    let finalValue = valueToConvert;
    let finalUnit = sourceUnit;
    
    // Step 1: Convert to target unit if specified
    if (options.targetUnit && options.targetUnit !== sourceUnit) {
      try {
        finalValue = convertUnits(valueToConvert, sourceUnit, options.targetUnit);
        finalUnit = options.targetUnit;
      } catch {
        throw new Error(`Unknown unit: ${sourceUnit} or ${options.targetUnit}`);
      }
    }
    
    // Step 2: Apply special conversions (L → m3, Pa → bar, etc.)
    const unitDef = unitRegistry[finalUnit];
    if (unitDef) {
      const afterSpecial = applySpecialConversions(
        finalValue, 
        finalUnit, 
        unitDef, 
        options.conversionThreshold
      );
      
      if (afterSpecial.unit !== finalUnit) {
        return formatQuantity(afterSpecial.value, afterSpecial.unit, {
          ...options,
          targetUnit: undefined // Avoid infinite loop
        });
      }
    }
    
    // Step 3: Select best prefix (kilo, mega, etc.)
    const result = selectBestUnit(finalValue, finalUnit, {
      unitPrecision: options.unitPrecision,
      conversionThreshold: options.conversionThreshold
    });
    
    // Step 4: Format the number
    const decimalPrecision = options.decimalPrecision ?? 2;
    const locale = languageCode.value ?? "fr-FR";
    const formattedValue = formatNumber(result.value, decimalPrecision, locale);
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