import type { UnitFamily } from "@dative-gpi/foundation-shared-domain/enums";

export type UnitScaleStep = { unit: string; ratioToParent: number }; 

export type UnitConversion = {
  sourceUnit: string;
  targetUnit: string;
  conversionRate: number;
  minThreshold?: number;
};

export interface UnitDefinition {
  symbol: string;
  precision: number;
  family?: UnitFamily;
  factor?: number;
  conversions?: Array<{
    targetUnit: string;
    conversionRate: number;
    minThreshold?: number;
  }>;
}
