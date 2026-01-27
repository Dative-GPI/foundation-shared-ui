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
  parent?: string;
  conversions?: Array<{
    targetUnit: string;
    conversionRate: number;
    minThreshold?: number;
  }>;
}
