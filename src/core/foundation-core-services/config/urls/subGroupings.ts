import { CORE_URL } from "./base";

export const SUB_GROUPINGS_URL = () => `${CORE_URL()}/sub-groupings`;
export const SUB_GROUPING_URL = (subGroupingId: string) => `${SUB_GROUPINGS_URL()}/${encodeURIComponent(subGroupingId)}`;
