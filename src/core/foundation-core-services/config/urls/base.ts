import { urlFactory } from "./urlFactory";

export const CORE_URL = urlFactory(organisationId => `/api/foundation/core/v1/organisations/${encodeURIComponent(organisationId)}`);
// Le gateway forwarde `/api/nlp/{**catch-all}` tel quel vers le service NLP : pas de segment `foundation`.
export const NLP_URL = urlFactory(organisationId => `/api/nlp/v1/organisations/${encodeURIComponent(organisationId)}`);
export const HUBS_URL = urlFactory(organisationId => `/api/foundation/hubs/v1/organisations/${encodeURIComponent(organisationId)}`);
export const DATA_URL = "/api/foundation/data";