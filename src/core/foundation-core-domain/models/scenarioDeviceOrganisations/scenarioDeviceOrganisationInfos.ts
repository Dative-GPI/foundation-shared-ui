import type { ScenarioParameterOverrideDTO } from "../scenarios/scenarioParameterOverride";
import { ScenarioParameterOverride } from "../scenarios/scenarioParameterOverride";
import { ScenarioParameter } from "../scenarios/scenarioParameter";
import type { ScenarioParameterDTO } from "../scenarios/scenarioParameter";
import type { TimeRangeDTO } from "../shared/timeRange";
import { TimeRange } from "../shared/timeRange";
import type { ApplicationScope } from "@/shared/foundation-shared-domain/enums";

export class ScenarioDeviceOrganisationInfos {
  id: string;
  scenarioLabel: string;
  deviceOrganisationId: string;
  deviceOrganisationImageId: string | null;
  deviceOrganisationCode: string;
  deviceOrganisationLabel: string;
  overrideTimeRanges: boolean;
  timeRanges: TimeRange[] | null;
  overrideDelay: boolean;
  delay: number | null;
  scenarioIcon: string;
  warnDeviceManager: boolean;
  userOrganisationsIds: string[];
  modelId: string;
  overrideParameters: boolean;
  parameters: ScenarioParameterOverride[] | null;
  defaultParameters: ScenarioParameter[];
  scenarioId: string;
  scenarioScope: ApplicationScope;

  constructor(params: ScenarioDeviceOrganisationInfosDTO) {
    this.id = params.id;
    this.scenarioLabel = params.scenarioLabel;
    this.deviceOrganisationId = params.deviceOrganisationId;
    this.deviceOrganisationImageId = params.deviceOrganisationImageId;
    this.deviceOrganisationCode = params.deviceOrganisationCode;
    this.deviceOrganisationLabel = params.deviceOrganisationLabel;
    this.overrideTimeRanges = params.overrideTimeRanges;
    this.timeRanges = params.timeRanges ?
      params.timeRanges.map(dto => new TimeRange(dto)) : null;
    this.warnDeviceManager = params.warnDeviceManager;
    this.overrideDelay = params.overrideDelay;
    this.delay = params.delay;
    this.scenarioIcon = params.scenarioIcon;
    this.userOrganisationsIds = params.userOrganisationsIds;
    this.modelId = params.modelId;
    this.overrideParameters = params.overrideParameters;
    this.parameters = params.parameters ? params.parameters.map(dto => new ScenarioParameterOverride(dto)) : null;
    this.defaultParameters = params.defaultParameters.map(dto => new ScenarioParameter(dto));
    this.scenarioId = params.scenarioId;
    this.scenarioScope = params.scenarioScope;
  }
}

export interface ScenarioDeviceOrganisationInfosDTO {
  id: string;
  scenarioLabel: string;
  deviceOrganisationId: string;
  deviceOrganisationImageId: string | null;
  deviceOrganisationCode: string;
  deviceOrganisationLabel: string;
  overrideTimeRanges: boolean;
  timeRanges: TimeRangeDTO[] | null;
  overrideDelay: boolean;
  delay: number | null;
  scenarioIcon: string;
  modelId: string;
  warnDeviceManager: boolean;
  userOrganisationsIds: string[];
  overrideParameters: boolean;
  parameters: ScenarioParameterOverrideDTO[] | null;
  defaultParameters: ScenarioParameterDTO[];
  scenarioId: string;
  scenarioScope: ApplicationScope;
}

export interface ScenarioDeviceOrganisationFilters {
  scenarioId?: string | null;
  scenarioScope?: ApplicationScope | null;
  deviceOrganisationId?: string | null;
  deviceOrganisationsIds?: string[] | null;
}