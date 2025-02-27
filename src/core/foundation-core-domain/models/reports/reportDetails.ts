import type { DashboardType } from "@dative-gpi/foundation-shared-domain/enums";
import { ReportInfos, type ReportInfosDTO } from "./reportInfos";
import type { TranslationReportDTO } from "./translationReport";

export class ReportDetails extends ReportInfos {

  constructor(params: ReportDetailsDTO) {
    super(params);
  }
}

export interface ReportDetailsDTO extends ReportInfosDTO {
}

export interface CreateReportDTO {
  labelDefault: string;
  bodyDefault: string;
  dashboardId: string;
  startDate: string;
  endDate: string;
  dashboardScope: DashboardType;
  icon: string;
  cron: string;
  users: string[];
  translations: TranslationReportDTO[];
}

export interface UpdateReportDTO {
  labelDefault: string;
  bodyDefault: string;
  dashboardId: string;
  startDate: string;
  endDate: string;
  dashboardScope: DashboardType;
  icon: string;
  cron: string;
  users: string[];
  translations: TranslationReportDTO[];
}
