import type { DataCategoryInfosDTO } from "@dative-gpi/foundation-core-domain/models";

import { MODELS } from "./models.mock";

export const DATACATEGORIES: DataCategoryInfosDTO[] = [{
    id: "1",
    applicationId: "1",
    code: "power",
    label: "Power",
    correlated: false,
    models: [MODELS[0]]
}, {
    id: "2",
    applicationId: "1",
    code: "temperatures",
    label: "Temperatures",
    correlated: true,
    models: [MODELS[0]]
}, {
    id: "3",
    applicationId: "1",
    code: "energies",
    label: "Energies",
    correlated: true,
    models: [MODELS[0]]
}];