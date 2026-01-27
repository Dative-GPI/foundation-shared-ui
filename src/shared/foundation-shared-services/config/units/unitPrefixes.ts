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