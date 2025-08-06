import { CORE_URL } from "./base";

export const SUBGROUPINGS_URL = () => `${CORE_URL()}/subgroupings`;
export const SUBGROUPING_URL = (subgroupingId: string) => `${SUBGROUPINGS_URL()}/${encodeURIComponent(subgroupingId)}`;
