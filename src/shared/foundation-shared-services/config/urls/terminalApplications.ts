import { GATEWAY_URL } from "./base";

export const TERMINAL_APPLICATIONS_URL = () => `${GATEWAY_URL()}/terminal-applications`;
export const TERMINAL_APPLICATION_URL = (terminalApplicationId: string) => `${TERMINAL_APPLICATIONS_URL()}/${encodeURIComponent(terminalApplicationId)}`;