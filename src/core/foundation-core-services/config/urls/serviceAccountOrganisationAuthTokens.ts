import { CORE_URL } from "./base";

export const SERVICE_ACCOUNT_ORGANISATION_AUTH_TOKENS_URL = () => `${CORE_URL()}/service-account-organisation-auth-tokens`;
export const SERVICE_ACCOUNT_ORGANISATION_AUTH_TOKEN_URL = (authTokenId: string) => `${SERVICE_ACCOUNT_ORGANISATION_AUTH_TOKENS_URL()}/${encodeURIComponent(authTokenId)}`;