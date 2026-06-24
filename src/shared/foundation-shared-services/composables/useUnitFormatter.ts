import { useAppLanguageCode } from "@dative-gpi/foundation-shared-services/composables";
import { SI_PREFIXES } from "@dative-gpi/foundation-shared-services/config/units";

export interface FormatOptions {
  precision?: number;
}

export interface FormattedQuantity {
  formatted: string;
  value: string;
  unit: string;
}

export function useUnitFormatter() {
  const { languageCode } = useAppLanguageCode();

  function findBestPrefix(value: number) {
    if (value === 0) {
      return SI_PREFIXES[3]; // None
    }
    const magnitude = Math.floor(Math.log10(Math.abs(value)) / 3) * 3;
    const index = Math.floor((magnitude + 9) / 3);
    return SI_PREFIXES[Math.max(0, Math.min(index, SI_PREFIXES.length - 1))];
  }

  function formatQuantity(value: number, unit: string, options: FormatOptions = {}): FormattedQuantity {
    if (!isFinite(value)) {
      return { formatted: "—", value: "—", unit: "" };
    }

    const prefix = findBestPrefix(value);
    const scaledValue = value / prefix.factor;
    const symbol = `${prefix.prefix}${unit}`;

    const precision = options.precision ?? 2;
    const locale = languageCode.value ?? "fr-FR";
    const formattedValue = new Intl.NumberFormat(locale, {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    }).format(scaledValue);

    return {
      formatted: `${formattedValue} ${symbol}`,
      value: formattedValue,
      unit: symbol,
    };
  }

  return { formatQuantity };
}
