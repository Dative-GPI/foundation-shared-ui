import { unitRegistry } from "@dative-gpi/foundation-shared-domain/models";
import { SI_PREFIXES } from "@dative-gpi/foundation-shared-services/config/units";

import { convertWithinFamily } from "./unitConverter";
import { parseUnitWithExponent, findPrefixByName, parseUnitWithPrefix } from "./unitParser";

export interface UnitWithPrefix {
  value: number;
  unit: string;
  symbol: string;
}

export function findBestSIPrefix(value: number) {
  if (value === 0) {
    return SI_PREFIXES[3]; // Base unit (no prefix)
  }
  
  const absValue = Math.abs(value);
  const magnitude = Math.floor(Math.log10(absValue) / 3) * 3;
  const prefixIndex = Math.floor((magnitude + 9) / 3);
  
  return SI_PREFIXES[Math.max(0, Math.min(prefixIndex, SI_PREFIXES.length - 1))];
}

function applyPrefixToUnknownUnit(value: number, unit: string): UnitWithPrefix {
  const prefix = findBestSIPrefix(value);
  const scaledValue = value / prefix.factor;
  
  return {
    value: scaledValue,
    unit: `${prefix.prefix}${unit}`,
    symbol: `${prefix.prefix}${unit}`
  };
}

function applyPrefixToExponentUnit(value: number, unit: string, unitDef: any): UnitWithPrefix {
  const parsed = parseUnitWithExponent(unit);
  
  if (parsed.exponent <= 1) {
    // No exponent, use standard prefix
    const prefix = findBestSIPrefix(value);
    const scaledValue = value / prefix.factor;
    
    return {
      value: scaledValue,
      unit,
      symbol: `${prefix.prefix}${unitDef.symbol}`,
    };
  }
  
  // For units with exponents, calculate prefix based on the root
  const linearValue = Math.pow(Math.abs(value), 1 / parsed.exponent);
  const prefix = findBestSIPrefix(linearValue);
  const volumeFactor = Math.pow(prefix.factor, parsed.exponent);
  const scaledValue = value / volumeFactor;
  
  return {
    value: scaledValue,
    unit,
    symbol: `${prefix.prefix}${unitDef.symbol}`,
  };
}

function applyForcedPrecision(value: number,unit: string,unitPrecision: string,unitSourceDef: any): UnitWithPrefix | null {
  const parsed = parseUnitWithPrefix(unitPrecision);
  const precisionUnitDef = unitRegistry[parsed.baseUnit];
  
  if (!precisionUnitDef || precisionUnitDef.family !== unitSourceDef.family) {
    return null;
  }
  
  // Convert to precision unit
  const valueInPrecision = convertWithinFamily(value, unit, parsed.baseUnit);
  
  // Apply forced prefix if specified
  if (parsed.prefix) {
    const forcedPrefix = findPrefixByName(parsed.prefix);
    if (forcedPrefix) {
      return {
        value: valueInPrecision / forcedPrefix.factor,
        unit: parsed.baseUnit,
        symbol: `${forcedPrefix.prefix}${precisionUnitDef.symbol}`,
      };
    }
  }
  
  // No prefix specified → return without SI prefix
  return {
    value: valueInPrecision,
    unit: parsed.baseUnit,
    symbol: precisionUnitDef.symbol,
  };
}

export function selectBestUnit(value: number, unit: string, options: { unitPrecision?: string; conversionThreshold?: number; } = {}): UnitWithPrefix {
  const unitDef = unitRegistry[unit];
  
  // Unknown unit → apply SI prefixes only
  if (!unitDef) {
    return applyPrefixToUnknownUnit(value, unit);
  }
  
  // Forced precision
  if (options.unitPrecision) {
    const result = applyForcedPrecision(value, unit, options.unitPrecision, unitDef);
    if (result) {return result;}
  }
  
  // conversionThreshold disables automatic SI prefixes
  const disableSIPrefixes = options.conversionThreshold !== undefined;
  
  if (unitDef.usesSIPrefixes && !disableSIPrefixes) {
    if (unitDef.supportsExponents) {
      return applyPrefixToExponentUnit(value, unit, unitDef);
    }
    
    const prefix = findBestSIPrefix(value);
    return {
      value: value / prefix.factor,
      unit,
      symbol: `${prefix.prefix}${unitDef.symbol}`,
    };
  }
  
  return {
    value,
    unit,
    symbol: unitDef.symbol,
  };
}