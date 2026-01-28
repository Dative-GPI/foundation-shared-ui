import type { UnitFamily } from "@dative-gpi/foundation-shared-domain/enums";

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
