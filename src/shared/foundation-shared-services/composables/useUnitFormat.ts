import { computed, toValue, type MaybeRefOrGetter } from "vue";
import { SI_PREFIXES, DECADES_PER_PREFIX, NO_VALUE, SMALLEST_PREFIX_EXPONENT } from "@dative-gpi/foundation-shared-services/config";
import { type FormattedQuantity } from "@dative-gpi/foundation-shared-domain/models";

import { useAppLanguageCode } from "./app";

export const useUnitFormat = (precision?: MaybeRefOrGetter<number | undefined>) => {
  const { languageCode } = useAppLanguageCode();

  const numberFormatter = computed(() => {
    const decimals = toValue(precision);
    const locale = languageCode.value ?? "fr-FR";

    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  });

  const format = (rawValue: MaybeRefOrGetter<number>, baseUnit: MaybeRefOrGetter<string>): FormattedQuantity => {

    const quantityWithPrefix = computed(() => {
      const numericValue = toValue(rawValue);
      if (!Number.isFinite(numericValue)) {
        return null;
      }
      const valueExponent = numericValue === 0 ? 0 : Math.floor(Math.log10(Math.abs(numericValue)));

      const prefixExponent = Math.floor(valueExponent / DECADES_PER_PREFIX) * DECADES_PER_PREFIX;

      const prefixIndex = (prefixExponent - SMALLEST_PREFIX_EXPONENT) / DECADES_PER_PREFIX;

      const clampedPrefixIndex = Math.max(0, Math.min(prefixIndex, SI_PREFIXES.length - 1));

      const prefix = SI_PREFIXES[clampedPrefixIndex];

      return {
        scaledValue: numericValue / prefix.factor,
        unitSymbol: `${prefix.prefix}${toValue(baseUnit)}`,
      };
    });

    const formattedValue = computed(() => {
      if (quantityWithPrefix.value === null) {
        return NO_VALUE;
      }

      return numberFormatter.value.format(quantityWithPrefix.value.scaledValue);
    });

    const unit = computed(() => quantityWithPrefix.value?.unitSymbol ?? "");

    const formattedText = computed(() =>
      quantityWithPrefix.value === null
        ? NO_VALUE
        : `${formattedValue.value} ${unit.value}`
    );

    return { formattedValue, unit, formattedText };
  };

  return { format };
};
