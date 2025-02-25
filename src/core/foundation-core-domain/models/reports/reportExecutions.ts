import { DashboardTranslation, type DashboardTranslationDTO } from "../dashboards";
import type { DashboardType, JobHangfireState } from "@dative-gpi/foundation-shared-domain/enums";
import { isoToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

export class ReportExecution {
  id: string | null;
  reportId: string;
  jobId: string;
  fileId: string | null;
  fileLabel: string | null;
  state: JobHangfireState;
  startDate: string;
  endDate: string;
  users: string[];
  dashboardLabel: string;
  dashboardId: string;
  dashboardScope: DashboardType;
  executedAt: number;
  error: string;
  cron: string;
  translationDashboards: DashboardTranslation[];


  constructor(params: ReportExecutionDTO) {
    this.id = params.id;
    this.reportId = params.reportId;
    this.jobId = params.jobId;
    this.fileId = params.fileId;
    this.fileLabel = params.fileLabel;
    this.state = params.state;
    this.startDate = params.startDate;
    this.endDate = params.endDate;
    this.users = params.users;
    this.dashboardLabel = params.dashboardLabel;
    this.dashboardId = params.dashboardId;
    this.dashboardScope = params.dashboardScope;
    this.executedAt = isoToEpoch(params.executedAt);
    this.error = params.error;
    this.cron = params.cron;
    this.translationDashboards = params.translationDashboards.map((translation) => new DashboardTranslation(translation));
  }
}


export interface ReportExecutionDTO {
  id: string | null;
  reportId: string;
  jobId: string;
  fileId: string | null;
  fileLabel: string | null;
  state: JobHangfireState;
  success: boolean;
  startDate: string;
  endDate: string;
  users: string[];
  dashboardLabel: string;
  dashboardId: string;
  dashboardScope: DashboardType;
  executedAt: string;
  error: string;
  cron: string;
  translationDashboards: DashboardTranslationDTO[];
}

export interface ReportExecutionFilters {
  reportId?: string | null;
  startDate?: string | null;
  endDate?: string | null;
}