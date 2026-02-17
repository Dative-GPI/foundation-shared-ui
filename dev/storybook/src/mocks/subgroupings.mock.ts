import type { SubgroupingInfosDTO } from "@dative-gpi/foundation-core-domain/models";

import { ORGANISATIONS } from "./organisations.mock";

export const SUBGROUPINGS: SubgroupingInfosDTO[] = [
    {
        id: "subgrouping1",
        label: "Subgrouping 1",
        code: "code 1",
        groupingColor: "#FF0000",
        groupingIcon: "mdi-folder-outline",
        groupingId: "grouping1",
        groupingLabel: "Grouping 1",
        icon: "mdi-folder-outline",
    },
    {
        id: "subgrouping3",
        label: "Subgrouping 3",
        code: "code 3",
        groupingColor: "#00FF00",
        groupingIcon: "mdi-folder-outline",
        groupingId: "grouping2",
        groupingLabel: "Grouping 2",
        icon: "mdi-flash-outline"
    },
    {
        id: "subgrouping2",
        label: "Subgrouping 2",
        code: "code 2",
        groupingColor: "#FF0000",
        groupingIcon: "mdi-folder-outline",
        groupingId: "grouping1",
        groupingLabel: "Grouping 1",
        icon: "mdi-folder-outline"
    }
];