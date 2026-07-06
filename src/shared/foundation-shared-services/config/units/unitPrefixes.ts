import { UnitPrefix } from "@dative-gpi/foundation-shared-domain/enums/units";

export const SI_PREFIXES = [
    { prefix: UnitPrefix.Nano, factor: 1e-9 },
    { prefix: UnitPrefix.Micro, factor: 1e-6 },
    { prefix: UnitPrefix.Milli, factor: 1e-3 },
    { prefix: UnitPrefix.None, factor: 1 },
    { prefix: UnitPrefix.Kilo, factor: 1e3 },
    { prefix: UnitPrefix.Mega, factor: 1e6 },
    { prefix: UnitPrefix.Giga, factor: 1e9 },
    { prefix: UnitPrefix.Tera, factor: 1e12 },
    { prefix: UnitPrefix.Peta, factor: 1e15 },
];

export const NO_VALUE = "-";

export const DECADES_PER_PREFIX = 3;
export const SMALLEST_PREFIX_EXPONENT = Math.round(Math.log10(SI_PREFIXES[0].factor));
export const BASE_PREFIX_INDEX = -SMALLEST_PREFIX_EXPONENT / DECADES_PER_PREFIX;