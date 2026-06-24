import { computed, toValue, type ComputedRef, type MaybeRefOrGetter } from "vue";
import { SI_PREFIXES } from "@dative-gpi/foundation-shared-services/config/units";

import { useAppLanguageCode } from "./app";

const NO_VALUE = "-";

const DECADES_PER_PREFIX = 3;
const SMALLEST_PREFIX_EXPONENT = Math.round(Math.log10(SI_PREFIXES[0].factor));
const BASE_PREFIX_INDEX = -SMALLEST_PREFIX_EXPONENT / DECADES_PER_PREFIX;

export interface FormattedQuantity {
  value: ComputedRef<string>;
  unit: ComputedRef<string>;
  formatted: ComputedRef<string>;
}

export const useUnitFormat = () => {
  const { languageCode } = useAppLanguageCode();

  const findBestPrefix = (numericValue: number) => {
    if (numericValue === 0) {
      return SI_PREFIXES[BASE_PREFIX_INDEX];
    }
    const magnitude = Math.floor(Math.log10(Math.abs(numericValue)) / DECADES_PER_PREFIX) * DECADES_PER_PREFIX;
    const index = Math.floor((magnitude - SMALLEST_PREFIX_EXPONENT) / DECADES_PER_PREFIX);
    return SI_PREFIXES[Math.max(0, Math.min(index, SI_PREFIXES.length - 1))];
  };

  const format = (rawValue: MaybeRefOrGetter<number>,baseUnit: MaybeRefOrGetter<string>,precision?: MaybeRefOrGetter<number | undefined>): FormattedQuantity => {

    const prefixed = computed(() => {
      const numericValue = toValue(rawValue);
      if (!isFinite(numericValue)) {
        return null;
      }
      const prefix = findBestPrefix(numericValue);
      return {
        scaledValue: numericValue / prefix.factor,
        unitSymbol: `${prefix.prefix}${toValue(baseUnit)}`,
      };
    });

    const value = computed(() => {
      if (prefixed.value === null) {
        return NO_VALUE;
      }
      const decimals = toValue(precision);
      const locale = languageCode.value ?? "fr-FR";
      return new Intl.NumberFormat(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(prefixed.value.scaledValue);
    });

    const unit = computed(() => prefixed.value?.unitSymbol ?? "");

    const formatted = computed(() =>
      prefixed.value === null ? NO_VALUE : `${value.value} ${unit.value}`
    );

    return { value, unit, formatted };
  };

  return { format };
};
