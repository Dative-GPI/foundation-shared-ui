import { NLP_URL } from "./base";

export const DASHBOARD_BUILDERS_URL = () => `${NLP_URL()}/dashboard-builders`;
export const DASHBOARD_BUILDER_URL = (builderId: string) => `${DASHBOARD_BUILDERS_URL()}/${encodeURIComponent(builderId)}`;
export const DASHBOARD_BUILDER_MESSAGES_URL = (builderId: string) => `${DASHBOARD_BUILDER_URL(builderId)}/messages`;
export const DASHBOARD_BUILDER_HUB_URL = (builderId: string) => `${DASHBOARD_BUILDER_URL(builderId)}/stream`;
