import { parseUnitWithExponent, findPrefixByName } from "./unitParser";
import { unitRegistry, unitFamilies } from "@dative-gpi/foundation-shared-domain/models";

export function convertWithinFamily(value: number, fromUnit: string, toUnit: string): number {
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

export function convertWithExponents(value: number, fromUnit: string, toUnit: string): number {
  const from = parseUnitWithExponent(fromUnit);
  const to = parseUnitWithExponent(toUnit);
  
  if (from.baseUnit !== to.baseUnit) {
    throw new Error(`Different base units: ${from.baseUnit} vs ${to.baseUnit}`);
  }
  
  if (from.exponent !== to.exponent) {
    throw new Error(`Different exponents: ${from.exponent} vs ${to.exponent}`);
  }
  
  const fromDef = unitRegistry[from.baseUnit];
  if (!fromDef?.supportsExponents) {
    throw new Error(`Unit ${from.baseUnit} does not support exponents`);
  }
  
  const fromPrefix = findPrefixByName(from.prefix);
  const toPrefix = findPrefixByName(to.prefix);
  
  const fromFactor = fromPrefix ? Math.pow(fromPrefix.factor, from.exponent) : 1;
  const toFactor = toPrefix ? Math.pow(toPrefix.factor, to.exponent) : 1;
  
  return value * fromFactor / toFactor;
}

export function convertUnits(value: number, fromUnit: string, toUnit: string): number {
  const sourceUnitDef = unitRegistry[fromUnit];
  const targetUnitDef = unitRegistry[toUnit];
  
  // Unknown units → try exponent conversion
  if (!sourceUnitDef || !targetUnitDef) {
    return convertWithExponents(value, fromUnit, toUnit);
  }
  
  // Custom converter (temperatures)
  const family = unitFamilies[sourceUnitDef.family];
  if (family.customConverter) {
    return family.customConverter(value, fromUnit, toUnit);
  }
  
  // Same family → standard conversion
  if (sourceUnitDef.family === targetUnitDef.family) {
    return convertWithinFamily(value, fromUnit, toUnit);
  }
  
  throw new Error(`Cannot convert between ${sourceUnitDef.family} and ${targetUnitDef.family}`);
}