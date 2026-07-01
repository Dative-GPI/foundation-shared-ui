import { SI_PREFIXES } from "@/shared/foundation-shared-services/config";
import type { ComputedRef } from "vue";

export interface FormattedQuantity {
  displayValue: ComputedRef<string>;
  unit: ComputedRef<string>;
  displayText: ComputedRef<string>;
}

export const NO_VALUE = "-";

export const DECADES_PER_PREFIX = 3;
export const SMALLEST_PREFIX_EXPONENT = Math.round(Math.log10(SI_PREFIXES[0].factor));
export const BASE_PREFIX_INDEX = -SMALLEST_PREFIX_EXPONENT / DECADES_PER_PREFIX;