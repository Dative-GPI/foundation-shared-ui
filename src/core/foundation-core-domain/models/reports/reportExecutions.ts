import type { DashboardType, JobState } from "@dative-gpi/foundation-shared-domain/enums";
import { isoToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";

const { epochToLongDateFormat } = useDateFormat();

export class ReportExecution {
  id: string | null;
  reportId: string;
  jobId: string;
  fileId: string | null;
  fileLabel: string | null;
  reportLabel: string | null;
  mailBody: string | null;
  state: JobState;
  startDate: string;
  endDate: string;
  users: string[];
  dashboardLabel: string;
  dashboardId: string;
  dashboardScope: DashboardType;
  executedAt: number;
  error: string;
  cron: string;

  get executedAtGroup(): string {
    return epochToLongDateFormat(this.executedAt);
  }


  constructor(params: ReportExecutionDTO) {
    this.id = params.id;
    this.reportId = params.reportId;
    this.jobId = params.jobId;
    this.fileId = params.fileId;
    this.fileLabel = params.fileLabel;
    this.reportLabel = params.reportLabel;
    this.mailBody = params.mailBody
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
  }
}


export interface ReportExecutionDTO {
  id: string | null;
  reportId: string;
  jobId: string;
  fileId: string | null;
  fileLabel: string | null;
  reportLabel: string | null;
  mailBody: string | null;
  state: JobState;
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
}

export interface ReportExecutionFilters {
  reportId?: string | null;
  startDate?: string | null;
  endDate?: string | null;
}