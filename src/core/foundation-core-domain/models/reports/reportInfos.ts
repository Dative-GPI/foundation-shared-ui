import type { DashboardType } from "@dative-gpi/foundation-shared-domain/enums";
import { isoToEpoch } from "@dative-gpi/foundation-shared-domain/tools";
import { TranslationReport } from "./translationReport";

export class ReportInfos {

  id: string;
  labelDefault: string;
  bodyDefault: string;
  label: string;
  body: string;
  cron: string;
  icon: string;
  users: string[];
  dashboardId: string;
  dashboardScope: DashboardType;
  dashboardLabel: string;
  startDate: string;
  endDate: string;
  createdAt: number | null;
  nextExecution: number | null;
  lastExecution: number | null;
  translations: TranslationReport[];

  constructor(params: ReportInfosDTO) {
    this.id = params.id;
    this.labelDefault = params.labelDefault;
    this.bodyDefault = params.bodyDefault;
    this.label = params.label;
    this.body = params.body;
    this.cron = params.cron;
    this.icon = params.icon;
    this.dashboardId = params.dashboardId;
    this.dashboardScope = params.dashboardScope;
    this.dashboardLabel = params.dashboardLabel;
    this.startDate = params.startDate;
    this.endDate = params.endDate;
    this.users = params.users;
    this.createdAt = params.createdAt ? isoToEpoch(params.createdAt) : null;
    this.nextExecution = params.nextExecution ? isoToEpoch(params.nextExecution) : null;
    this.lastExecution = params.lastExecution ? isoToEpoch(params.lastExecution) : null;
    this.translations = params.translations.map((translation) => new TranslationReport(translation));
  }
}


export interface ReportInfosDTO {
  id: string;
  labelDefault: string;
  bodyDefault: string;
  label: string;
  body: string;
  cron: string;
  icon: string;
  dashboardId: string;
  dashboardScope: DashboardType;
  dashboardLabel: string;
  startDate: string;
  endDate: string;
  users: string[];
  createdAt: string | null;
  nextExecution: string | null;
  lastExecution: string | null;
  translations: TranslationReport[];
}

export interface ReportFilters {
  search?: string | null;
  startDate?: string | null;
  endDate?: string | null;
}