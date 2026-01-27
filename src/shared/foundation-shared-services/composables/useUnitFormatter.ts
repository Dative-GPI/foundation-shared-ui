import { useAppLanguageCode } from "@dative-gpi/foundation-shared-services/composables";
import { SI_PREFIXES } from "@dative-gpi/foundation-shared-services/config/units";
import { type UnitDefinition, unitRegistry } from "@dative-gpi/foundation-shared-domain/models";

export function useUnitFormatter() {
  const { languageCode } = useAppLanguageCode();

  function scaleUpByParent(value: number, unit: string, fixedUnit?: string): { value: number; unit: string } {
    let currentValue = value;
    let currentUnit = unit;
    const SCALE_FACTOR = 1000;

    while (true) {
      const unitDefinition = unitRegistry[currentUnit];
      
      if (!unitDefinition?.parent) {
        break;
      }

      if (fixedUnit && currentUnit === fixedUnit) {
        break;
      }

      const scaledValue = currentValue / SCALE_FACTOR;
      
      if (Math.abs(scaledValue) >= 1) {
        currentValue = scaledValue;
        currentUnit = unitDefinition.parent;
      } else {
        break;
      }
    }

    return { value: currentValue, unit: currentUnit };
  }

  function applySIScale(value: number, unit: string) {
    const absoluteValue = Math.abs(value);
    
    let selectedPrefix = SI_PREFIXES[3];
    
    for (let i = SI_PREFIXES.length - 1; i >= 0; i--) {
      const prefix = SI_PREFIXES[i];
      
      if (absoluteValue >= prefix.factor) {
        selectedPrefix = prefix;
        break;
      }
    }

    return {
      value: value / selectedPrefix.factor,
      unit: `${selectedPrefix.prefix}${unit}`,
    };
  }

  function applyConversions(value: number, unit: string, unitDefinition: UnitDefinition) {
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

  function formatNumber(value: number, decimalPrecision: number, locale?: string) {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimalPrecision,
    }).format(value);
  }

  const formatQuantity = (value: number, unit: string, options?: { decimalPrecision?: number; fixedUnit?: string;} ): string => {
    if (!isFinite(value)) {
      return "—";
    }

    const unitDefinition = unitRegistry[unit];
    let result: { value: number; unit: string };
    let decimalPrecision: number;

    if (unitDefinition) {
      result = applyConversions(value, unit, unitDefinition);
      
      result = scaleUpByParent(result.value, result.unit, options?.fixedUnit);
      
      decimalPrecision = options?.decimalPrecision ?? (unitRegistry[result.unit]?.precision ?? 2);
    } else {
      result = applySIScale(value, unit);
      decimalPrecision = options?.decimalPrecision ?? 2;
    }

    const unitSymbol = unitRegistry[result.unit]?.symbol ?? result.unit;
    return `${formatNumber(result.value, decimalPrecision, languageCode.value)} ${unitSymbol}`;
  };

  const formatQuantityParts = (value: number, unit: string, options?: { decimalPrecision?: number;fixedUnit?: string;} ): { value: string; unit: string } => {
    
    const formattedQuantity = formatQuantity(value, unit, { 
      decimalPrecision: options?.decimalPrecision,
      fixedUnit: options?.fixedUnit
    });
    
    if (formattedQuantity === "—") {
      return { 
        value: "—", 
        unit: "" 
      };
    }
    
    const lastSpaceIndex = formattedQuantity.lastIndexOf(" ");
    
    if (lastSpaceIndex === -1) {
      return { 
        value: formattedQuantity, 
        unit: "" 
      };
    }

    return { 
      value: formattedQuantity.slice(0, lastSpaceIndex), 
      unit: formattedQuantity.slice(lastSpaceIndex + 1) 
    };
  };

  return {
    formatQuantity,
    formatQuantityParts,
  };
}