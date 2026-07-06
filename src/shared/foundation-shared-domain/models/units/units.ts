import type { ComputedRef } from "vue";

export interface FormattedQuantity {
  formattedValue: ComputedRef<string>;
  unit: ComputedRef<string>;
  formattedText: ComputedRef<string>;
}