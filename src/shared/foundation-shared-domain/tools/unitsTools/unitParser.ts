import { unitRegistry } from "@dative-gpi/foundation-shared-domain/models";
import { SI_PREFIXES } from "@dative-gpi/foundation-shared-services/config/units";

export interface ParsedUnit {
  prefix: string;
  baseUnit: string;
  exponent: number;
}

export function parseUnitWithPrefix(unitString: string): { prefix: string; baseUnit: string } {
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
    if (baseUnit && unitRegistry[baseUnit]) {
      return { prefix, baseUnit };
    }
  }

  return { prefix: "", baseUnit: s };
}

export function parseUnitWithExponent(unitString: string): ParsedUnit {
  const s = unitString.trim();
  
  const exponentMatch = s.match(/^(.+?)(2|3|²|³)$/);
  
  if (!exponentMatch) {
    const parsed = parseUnitWithPrefix(s);
    return { ...parsed, exponent: 1 };
  }
  
  const baseWithPrefix = exponentMatch[1];
  const exponentStr = exponentMatch[2];
  const exponent = exponentStr === '²' ? 2 : exponentStr === '³' ? 3 : parseInt(exponentStr);
  
  const parsed = parseUnitWithPrefix(baseWithPrefix);
  
  return { ...parsed, exponent };
}

export function findPrefixByName(prefixName: string) {
  return SI_PREFIXES.find(p => p.prefix === prefixName) || null;
}