import { GATEWAY_URL } from "./base";

export const TERMINAL_APPLICATIONS_URL = () => `${GATEWAY_URL()}/terminal-applications`;
export const TERMINAL_APPLICATION_URL = (terminalId: string) => `${TERMINAL_APPLICATIONS_URL()}/${encodeURIComponent(terminalId)}`;