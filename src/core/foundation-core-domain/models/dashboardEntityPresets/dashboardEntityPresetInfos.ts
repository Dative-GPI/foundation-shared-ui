import { translate } from "@dative-gpi/foundation-shared-services/tools/translate";

import type { DashboardEntityPresetTranslationDTO } from "./dashboardEntityPresetTranslation";
import { DashboardEntityPresetTranslation } from "./dashboardEntityPresetTranslation";
import type { EntityType } from "@dative-gpi/foundation-shared-domain/enums";

export class DashboardEntityPresetInfos {
  hiddenCode: string;
  labelDefault: string;
  showInOptions: boolean;
  singleEntity: boolean;
  entityType: EntityType;
  entitiesFilters: string;
  entitiesIds: string[];
  translations: DashboardEntityPresetTranslation[];

  get label() { 
    return translate(this.translations, t => t.label, this.labelDefault) 
  };

  constructor(params: DashboardEntityPresetInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.labelDefault = params.labelDefault;
    this.showInOptions = params.showInOptions;
    this.singleEntity = params.singleEntity;
    this.entityType = params.entityType;
    this.entitiesFilters = params.entitiesFilters;
    this.entitiesIds = params.entitiesIds.slice();
    this.translations = params.translations.map(t => new DashboardEntityPresetTranslation(t));
  }
}

export interface DashboardEntityPresetInfosDTO {
  hiddenCode: string;
  labelDefault: string;
  showInOptions: boolean;
  singleEntity: boolean;
  entityType: EntityType;
  entitiesFilters: string;
  entitiesIds: string[];
  translations: DashboardEntityPresetTranslationDTO[];
}