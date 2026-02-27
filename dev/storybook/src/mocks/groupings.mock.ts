import type { GroupingInfosDTO } from "@dative-gpi/foundation-core-domain/models";

import { ORGANISATIONS } from "./organisations.mock";

export const GROUPINGS: GroupingInfosDTO[] = Array.from(Array(80).keys()).map(i => ({
    id: `${(i + 1)}`,
    organisationId: ORGANISATIONS[0].id,
    icon: `mdi-numeric-${(i + 1)%10}-circle`,
    code: `number.${(i + 1)}`,
    label: `Grouping ${(i + 1)}`,
    color: i % 2 === 0 ? "primary" : "warning",
    description: `Description for grouping ${(i + 1)}`,
    subgroupingCount: i % 5,
}));