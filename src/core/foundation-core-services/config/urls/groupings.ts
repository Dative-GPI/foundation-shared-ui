import { CORE_URL } from "./base";

export const GROUPINGS_URL = () => `${CORE_URL()}/groupings`;
export const GROUPING_URL = (groupingId: string) => `${GROUPINGS_URL()}/${encodeURIComponent(groupingId)}`;
