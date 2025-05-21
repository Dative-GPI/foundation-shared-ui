import type { CreateTimeRangeDTO } from "../shared/timeRange";
import type { ScenarioDeviceOrganisationInfosDTO } from "./scenarioDeviceOrganisationInfos";
import { ScenarioDeviceOrganisationInfos } from "./scenarioDeviceOrganisationInfos";
import type { CreateScenarioParameterOverrideDTO } from "../scenarios/scenarioParameterOverride";
import type { ApplicationScope } from "@dative-gpi/foundation-shared-domain/enums";


export class ScenarioDeviceOrganisationDetails extends ScenarioDeviceOrganisationInfos {

  constructor(params: ScenarioDeviceOrganisationDetailsDTO) {
    super(params);
  }
}

export interface ScenarioDeviceOrganisationDetailsDTO extends ScenarioDeviceOrganisationInfosDTO {

}

export interface CreateScenarioDeviceOrganisationDTO {
  scenarioId: string;
  scenarioScope: ApplicationScope;
  deviceOrganisationId: string;
  overrideTimeRanges: boolean;
  timeRanges: CreateTimeRangeDTO[];
  overrideDelay: boolean;
  delay: number | null;
  warnDeviceManager: boolean;
  userOrganisationsIds: string[];
  overrideParameters: boolean;
  parameters: CreateScenarioParameterOverrideDTO[];
}

export interface CreateManyScenarioDeviceOrganisationDTO {
  scenarioId: string;
  scenarioScope: ApplicationScope;
  deviceOrganisationsIds: string[];
  overrideTimeRanges: boolean;
  timeRanges: CreateTimeRangeDTO[];
  overrideDelay: boolean;
  delay: number | null;
  warnDeviceManager: boolean;
  userOrganisationsIds: string[];
  overrideParameters: boolean;
  parameters: CreateScenarioParameterOverrideDTO[];
}

export interface UpdateScenarioDeviceOrganisationDTO {
  overrideTimeRanges: boolean;
  timeRanges: CreateTimeRangeDTO[];
  warnDeviceManager: boolean;
  overrideDelay: boolean;
  delay: number | null;
  userOrganisationsIds: string[];
  overrideParameters: boolean;
  parameters: CreateScenarioParameterOverrideDTO[];
}