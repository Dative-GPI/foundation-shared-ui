import type { UnitFamily } from "@dative-gpi/foundation-shared-domain/enums";

export interface UnitDefinition {
  symbol: string;
  family: UnitFamily;
  toPivot: number;
  usesSIPrefixes: boolean;
  specialConversions?: Array<{
    toUnit: string;
    threshold: number;
  }>;
}

export interface UnitFamilyDefinition {
  name: string;
  pivotUnit: string;
  customConverter?: (value: number, fromUnit: string, toUnit: string) => number;
}