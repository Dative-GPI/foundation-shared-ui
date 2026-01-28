import { useAppLanguageCode } from "@dative-gpi/foundation-shared-services/composables";
import { SI_PREFIXES } from "@dative-gpi/foundation-shared-services/config/units";
import { type UnitDefinition, unitRegistry } from "@dative-gpi/foundation-shared-domain/models";

export function useUnitFormatter() {
  const { languageCode } = useAppLanguageCode();

  /**
   * Converts a value from one unit to another of the same family
   */
  function convert(value: number, fromUnit: string, toUnit: string): number {
    const sourceUnitDefinition = unitRegistry[fromUnit];
    const targetUnitDefinition = unitRegistry[toUnit];
    
    if (!sourceUnitDefinition?.family || !targetUnitDefinition?.family) {
      throw new Error(`Cannot convert between ${fromUnit} and ${toUnit}: missing family`);
    }
    
    if (sourceUnitDefinition.family !== targetUnitDefinition.family) {
      throw new Error(`Cannot convert between different families: ${sourceUnitDefinition.family} vs ${targetUnitDefinition.family}`);
    }
    
    // Conversion via the pivot: pivot_value = sourceUnitDefinition_value * sourceUnitDefinition_factor
    // targetUnitDefinition_value = pivot_value / targetUnitDefinition_factor
    return (value * (sourceUnitDefinition.factor ?? 1)) / (targetUnitDefinition.factor ?? 1);
  }

  /**
   * Finds the best unit in a family to display a value
   * (the one that gives a result between 1 and 999)
   */
  function findBestUnit(value: number, currentUnit: string, fixedUnit?: string): string {
    const unitDef = unitRegistry[currentUnit];
    
    if (!unitDef?.family) {
      return currentUnit;
    }

    // Convert the value to the pivot (in absolute value)
    const absoluteValueInPivot = Math.abs(value * (unitDef.factor ?? 1));
    
    // Find all units in the same family
    const unitsInSameFamily = Object.entries(unitRegistry)
      .filter(([, def]) => def.family === unitDef.family)
      .map(([unit, def]) => ({
        unit,
        factor: def.factor ?? 1,
        precision: def.precision,
      }))
      .sort((a, b) => a.factor - b.factor); // Sort by ascending factor

    // Determine the maximum allowed factor
    const maxFactor = fixedUnit && unitRegistry[fixedUnit]?.family === unitDef.family
      ? unitRegistry[fixedUnit]?.factor ?? Infinity
      : Infinity;

    // Find the unit that gives a result >= 1 and < 1000
    let bestUnit = unitsInSameFamily[0]?.unit ?? currentUnit; // Default: the smallest unit
    
    for (let i = unitsInSameFamily.length - 1; i >= 0; i--) {
      const candidateUnit = unitsInSameFamily[i];
      
      // Do not exceed fixedUnit
      if (candidateUnit.factor > maxFactor) {
        continue;
      }
      
      const valueInCandidateUnit = absoluteValueInPivot / candidateUnit.factor;
      
      // Find the unit that gives a result >= 1
      if (valueInCandidateUnit >= 1) {
        bestUnit = candidateUnit.unit;
        break;
      }
    }
    
    return bestUnit;
  }

  /**
   * Applies alternative conversions (non-family)
   * These conversions take priority over the family system
   */
  function applyAlternativeConversions(value: number, unit: string, unitDefinition: UnitDefinition) {
    if (!unitDefinition.conversions?.length) {
      return { value, unit };
    }

    for (const conversion of unitDefinition.conversions) {
      if (conversion.minThreshold != null && Math.abs(value) < conversion.minThreshold) {
        continue;
      }
      
      return { 
        value: value * conversion.conversionRate, 
        unit: conversion.targetUnit 
      };
    }

    return { value, unit };
  }

  /**
   * Applies SI prefixes for unknown units
   */
  function applySIScale(value: number, unit: string) {
    const absoluteValue = Math.abs(value);
    
    let selectedPrefix = SI_PREFIXES[3]; // None
    
    for (let i = SI_PREFIXES.length - 1; i >= 0; i--) {
      const currentPrefix = SI_PREFIXES[i];
      
      if (absoluteValue >= currentPrefix.factor) {
        selectedPrefix = currentPrefix;
        break;
      }
    }

    return {
      value: value / selectedPrefix.factor,
      unit: `${selectedPrefix.prefix}${unit}`,
    };
  }

  function formatNumber(value: number, decimalPrecision: number, locale?: string) {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimalPrecision,
    }).format(value);
  }

  const formatQuantity = (value: number, unit: string, options?: { decimalPrecision?: number; fixedUnit?: string; } ): string => {
    if (!isFinite(value)) {
      return "—";
    }

    const originalUnitDefinition = unitRegistry[unit];
    let convertedResult: { value: number; unit: string };
    let decimalPrecision: number;

    if (originalUnitDefinition) {
      convertedResult = applyAlternativeConversions(value, unit, originalUnitDefinition);
      
      const convertedUnitDefinition = unitRegistry[convertedResult.unit];
      if (convertedUnitDefinition?.family) {
        const bestUnit = findBestUnit(convertedResult.value, convertedResult.unit, options?.fixedUnit);
        
        if (bestUnit !== convertedResult.unit) {
          convertedResult.value = convert(convertedResult.value, convertedResult.unit, bestUnit);
          convertedResult.unit = bestUnit;
        }
      }
      
      decimalPrecision = options?.decimalPrecision ?? (unitRegistry[convertedResult.unit]?.precision ?? 2);
    } else {
      convertedResult = applySIScale(value, unit);
      decimalPrecision = options?.decimalPrecision ?? 2;
    }

    const finalUnitSymbol = unitRegistry[convertedResult.unit]?.symbol ?? convertedResult.unit;
    const formattedValue = formatNumber(convertedResult.value, decimalPrecision, languageCode.value);
    
    return `${formattedValue} ${finalUnitSymbol}`;
  };

  const formatQuantityParts = (value: number, unit: string, options?: { decimalPrecision?: number; fixedUnit?: string; } ): { value: string; unit: string } => {
    
    const fullFormattedQuantity = formatQuantity(value, unit, { decimalPrecision: options?.decimalPrecision, fixedUnit: options?.fixedUnit });
    
    if (fullFormattedQuantity === "—") {
      return { 
        value: "—", 
        unit: "" 
      };
    }
    
    const indexOfLastSpace = fullFormattedQuantity.lastIndexOf(" ");
    
    if (indexOfLastSpace === -1) {
      return { 
        value: fullFormattedQuantity, 
        unit: "" 
      };
    }

    const valueWithoutUnit = fullFormattedQuantity.slice(0, indexOfLastSpace);
    const unitOnly = fullFormattedQuantity.slice(indexOfLastSpace + 1);

    return { 
      value: valueWithoutUnit, 
      unit: unitOnly 
    };
  };

  return {
    formatQuantity,
    formatQuantityParts,
    convert
  };
}