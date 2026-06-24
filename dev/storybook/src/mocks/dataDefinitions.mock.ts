import type { DataDefinitionInfosDTO } from "@dative-gpi/foundation-core-domain/models";

import { DATACATEGORIES } from "./dataCategories.mock";

export const DATADEFINITIONS: DataDefinitionInfosDTO[] = [{
    id: "1",
    dataCategoryId: DATACATEGORIES[0].id,
    dataCategoryCode: DATACATEGORIES[0].code,
    dataCategoryLabel: DATACATEGORIES[0].label,
    code: "power.power",
    label: "Power",
    description: "Device's power status",
    dataTable: 1,
    useOnlyMappings: false,
    unit: "",
    codes: ["power.power", "pp"],
    mappings: []
}, {
    id: "2",
    dataCategoryId: DATACATEGORIES[1].id,
    dataCategoryCode: DATACATEGORIES[1].code,
    dataCategoryLabel: DATACATEGORIES[1].label,
    code: "temperatures.level",
    label: "Level",
    description: "Device's temperature level",
    dataTable: 2,
    useOnlyMappings: false,
    unit: "",
    codes: ["temperatures.level", "tl"],
    mappings: []
}, {
    id: "3",
    dataCategoryId: DATACATEGORIES[1].id,
    dataCategoryCode: DATACATEGORIES[1].code,
    dataCategoryLabel: DATACATEGORIES[1].label,
    code: "temperatures.value",
    label: "Value",
    description: "Device's temperature value",
    dataTable: 1,
    useOnlyMappings: false,
    unit: "°C",
    codes: ["temperatures.value", "tv"],
    mappings: []
}, {
    id: "4",
    dataCategoryId: DATACATEGORIES[2].id,
    dataCategoryCode: DATACATEGORIES[2].code,
    dataCategoryLabel: DATACATEGORIES[2].label,
    code: "energies.level",
    label: "Value",
    description: "Device's energy level",
    dataTable: 2,
    useOnlyMappings: false,
    unit: "",
    codes: ["energies.level", "tl"],
    mappings: []
}, {
    id: "5",
    dataCategoryId: DATACATEGORIES[2].id,
    dataCategoryCode: DATACATEGORIES[2].code,
    dataCategoryLabel: DATACATEGORIES[2].label,
    code: "energies.value",
    label: "Value",
    description: "Device's energy value",
    dataTable: 1,
    useOnlyMappings: false,
    unit: "kWh",
    codes: ["energies.value", "tv"],
    mappings: []
}];