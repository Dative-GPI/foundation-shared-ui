import type { PlotPer, ResolveOn, TriggerOn } from "@dative-gpi/foundation-shared-domain/enums";

import type { ScenarioOrganisationInfosDTO } from "./scenarioOrganisationInfos";
import { ScenarioOrganisationInfos } from "./scenarioOrganisationInfos";
import type { CreateTimeRangeDTO, TimeRangeDTO } from "../shared/timeRange";
import { TimeRange } from "../shared/timeRange";
import {
  ScenarioParameter,
  ScenarioTranslation,
  type CreateScenarioChartDTO,
  type CreateScenarioParameterDTO,
  type ScenarioParameterDTO,
  type ScenarioTranslationDTO
} from "../scenarios";
import type { CreateChartTimeStepDTO } from "../charts/chartTimeStep";

export class ScenarioOrganisationDetails extends ScenarioOrganisationInfos {
  groupByIds: string[];
  metadataIds: string[];
  labelDefault: string;
  description: string;
  descriptionDefault: string;
  alertLabel: string;
  alertLabelDefault: string;
  alertDescription: string;
  alertDescriptionDefault: string;
  alertCode: string;
  alertIcon: string;
  alertTags: string[];
  timeRanges: TimeRange[];
  triggerOn: TriggerOn;
  triggerCondition: string;
  triggerMin: number | null;
  autoResolveOn: ResolveOn;
  autoResolveCondition: string;
  autoResolveMin: number | null;
  timeout: number | null;
  lock: number | null;
  waitResolved: boolean;
  parameters: ScenarioParameter[];
  translations: ScenarioTranslation[];

  constructor(params: ScenarioOrganisationDetailsDTO) {
    super(params);

    this.groupByIds = params.groupByIds.slice();
    this.metadataIds = params.metadataIds.slice();
    this.labelDefault = params.labelDefault;
    this.description = params.description;
    this.descriptionDefault = params.descriptionDefault;
    this.alertLabel = params.alertLabel;
    this.alertLabelDefault = params.alertLabelDefault;
    this.alertDescription = params.alertDescription;
    this.alertDescriptionDefault = params.alertDescriptionDefault;
    this.alertCode = params.alertCode;
    this.alertIcon = params.alertIcon;
    this.alertTags = params.alertTags.slice();
    this.timeRanges = params.timeRanges.map(dto => new TimeRange(dto));
    this.triggerOn = params.triggerOn as TriggerOn;
    this.triggerCondition = params.triggerCondition;
    this.triggerMin = params.triggerMin;
    this.autoResolveOn = params.autoResolveOn as ResolveOn;
    this.autoResolveCondition = params.autoResolveCondition;
    this.autoResolveMin = params.autoResolveMin;
    this.timeout = params.timeout;
    this.lock = params.lock;
    this.waitResolved = params.waitResolved;
    this.parameters = params.parameters.map(p => new ScenarioParameter(p));
    this.translations = params.translations.map(t => new ScenarioTranslation(t));
  }
}

export interface ScenarioOrganisationDetailsDTO extends ScenarioOrganisationInfosDTO {
  groupByIds: string[];
  metadataIds: string[];
  labelDefault: string;
  description: string;
  descriptionDefault: string;
  alertLabel: string;
  alertLabelDefault: string;
  alertDescription: string;
  alertDescriptionDefault: string;
  alertCode: string;
  alertIcon: string;
  alertTags: string[];
  timeRanges: TimeRangeDTO[];
  triggerOn: number;
  triggerCondition: string;
  triggerMin: number | null;
  autoResolveOn: number;
  autoResolveCondition: string;
  autoResolveMin: number | null;
  timeout: number | null;
  lock: number | null;
  waitResolved: boolean;
  parameters: ScenarioParameterDTO[];
  translations: ScenarioTranslationDTO[];
}

export interface CreateScenarioOrganisationDTO {
  modelId: string | null;
  dataCategoryId: string | null;
  dataDefinitionId: string | null;
  groupByIds: string[];
  metadataIds: string[];
  criticity: number;
  labelDefault: string;
  descriptionDefault: string;
  code: string;
  icon: string;
  tags: string[];
  alertLabelDefault: string;
  alertDescriptionDefault: string;
  alertCode: string;
  alertIcon: string;
  alertTags: string[];
  chartStartDate: string;
  chartEndDate: string;
  chartPlotPer: PlotPer | null;
  chartStep: CreateChartTimeStepDTO | null;
  timeRanges: CreateTimeRangeDTO[];
  triggerOn: number;
  triggerCondition: string;
  triggerMin: number | null;
  autoResolveOn: number;
  autoResolveCondition: string;
  autoResolveMin: number | null;
  timeout: number | null;
  lock: number | null;
  waitResolved: boolean;
  charts: CreateScenarioChartDTO[];
  parameters: CreateScenarioParameterDTO[];
  translations: ScenarioTranslationDTO[];
}

export interface UpdateScenarioOrganisationDTO {
  modelId: string;
  dataCategoryId: string;
  dataDefinitionId: string | null;
  groupByIds: string[];
  metadataIds: string[];
  criticity: number;
  labelDefault: string;
  descriptionDefault: string;
  code: string;
  icon: string;
  tags: string[];
  chartStartDate: string;
  chartEndDate: string;
  chartPlotPer: PlotPer | null;
  chartStep: CreateChartTimeStepDTO | null;
  alertLabelDefault: string;
  alertDescriptionDefault: string;
  alertCode: string;
  alertIcon: string;
  alertTags: string[];
  timeRanges: CreateTimeRangeDTO[];
  triggerOn: number;
  triggerCondition: string;
  triggerMin: number | null;
  autoResolveOn: number;
  autoResolveCondition: string;
  autoResolveMin: number | null;
  timeout: number | null;
  lock: number | null;
  waitResolved: boolean;
  charts: CreateScenarioChartDTO[];
  parameters: CreateScenarioParameterDTO[];
  translations: ScenarioTranslationDTO[];
}