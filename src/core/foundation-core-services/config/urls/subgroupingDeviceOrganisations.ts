import { CORE_URL } from "./base";

export const SUBGROUPING_DEVICE_ORGANISATIONS_URL = () => `${CORE_URL()}/subgrouping-device-organisations`;
export const SUBGROUPING_DEVICE_ORGANISATION_URL = (id: string) => `${SUBGROUPING_DEVICE_ORGANISATIONS_URL()}/${encodeURIComponent(id)}`;
