import type { DashboardEntityPresetTranslationDTO } from "./dashboardEntityPresetTranslation";
import { DashboardEntityPresetTranslation } from "./dashboardEntityPresetTranslation";
import type { SelectedEntities } from "../enums/sharedEnums";

export class DashboardEntityPresetInfos {
  hiddenCode: string;
  label: string;
  labelDefault: string;
  globalSelectedEntities: SelectedEntities;
  globalEntitiesFilters: string;
  globalEntitiesIds: string[];
  translations: DashboardEntityPresetTranslation[];

  constructor(params: DashboardEntityPresetInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.label = params.label;
    this.labelDefault = params.labelDefault;
    this.globalSelectedEntities = params.globalSelectedEntities;
    this.globalEntitiesFilters = params.globalEntitiesFilters;
    this.globalEntitiesIds = params.globalEntitiesIds.slice();
    this.translations = params.translations.map(t => new DashboardEntityPresetTranslation(t));
  }
}

export interface DashboardEntityPresetInfosDTO {
  hiddenCode: string;
  label: string;
  labelDefault: string;
  globalSelectedEntities: SelectedEntities;
  globalEntitiesFilters: string;
  globalEntitiesIds: string[];
  translations: DashboardEntityPresetTranslationDTO[];
}