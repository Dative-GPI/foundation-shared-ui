import { CORE_URL } from "./base";

export const SUB_GROUPING_DEVICE_ORGANISATIONS_URL = () => `${CORE_URL()}/sub-grouping-device-organisations`;
export const SUB_GROUPING_DEVICE_ORGANISATION_URL = (id: string) => `${SUB_GROUPING_DEVICE_ORGANISATIONS_URL()}/${encodeURIComponent(id)}`;
