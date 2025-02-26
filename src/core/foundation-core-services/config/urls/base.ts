import { urlFactory } from "./urlFactory";

export const CORE_URL = urlFactory(organisationId => `/api/foundation/core/v1/organisations/${encodeURIComponent(organisationId)}`);
export const CORE_REPORT_URL = urlFactory((organisationId) => `/api/foundation/report/v1/organisations/${organisationId}`);
export const HUBS_URL = urlFactory(organisationId => `/api/foundation/hubs/v1/organisations/${encodeURIComponent(organisationId)}`);