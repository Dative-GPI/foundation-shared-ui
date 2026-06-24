import type { DataCategoryInfosDTO } from "@dative-gpi/foundation-core-domain/models";

import { MODELS } from "./models.mock";

export const DATACATEGORIES: DataCategoryInfosDTO[] = [{
    id: "1",
    code: "power",
    label: "Power",
    correlated: false,
    models: [MODELS[0]]
}, {
    id: "2",
    code: "temperatures",
    label: "Temperatures",
    correlated: true,
    models: [MODELS[1]]
}, {
    id: "3",
    code: "energies",
    label: "Energies",
    correlated: true,
    models: [MODELS[1], MODELS[0]]
}];