import { CORE_REPORT_URL } from "./base";

export const REPORTS_URL = () => `${CORE_REPORT_URL()}/reports`;
export const REPORT_EXECUTIONS_URL = () => `${CORE_REPORT_URL()}/report-executions`;
export const REPORT_URL = (reportId: string) => `${REPORTS_URL()}/${reportId}`;