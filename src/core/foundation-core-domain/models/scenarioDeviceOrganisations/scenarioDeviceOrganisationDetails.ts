
import type { ApplicationScope } from "@dative-gpi/foundation-shared-domain/enums";
import { ScenarioDeviceOrganisationInfos } from "./scenarioDeviceOrganisationInfos";
import type { ScenarioDeviceOrganisationInfosDTO } from "./scenarioDeviceOrganisationInfos";
import type { CreateScenarioParameterOverrideDTO } from "../scenarios/scenarioParameterOverride";
import type { CreateScenarioTimeRangeDTO } from '../scenarios/scenarioTimeRange';


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
  timeRanges: CreateScenarioTimeRangeDTO[];
  overrideDelay: boolean;
  delay: number | null;
  warnDeviceManager: boolean;
  userOrganisationsIds: string[];
  overrideParameters: boolean;
  parameters: CreateScenarioParameterOverrideDTO[];
}

export interface UpsertScenarioDeviceOrganisationDTO {
  scenarioId: string;
  scenarioScope: ApplicationScope;
  deviceOrganisationsIds: string[];
  overrideTimeRanges: boolean;
  timeRanges: CreateScenarioTimeRangeDTO[];
  overrideDelay: boolean;
  delay: number | null;
  warnDeviceManager: boolean;
  userOrganisationsIds: string[];
  overrideParameters: boolean;
  parameters: CreateScenarioParameterOverrideDTO[];
}

export interface UpdateScenarioDeviceOrganisationDTO {
  overrideTimeRanges: boolean;
  timeRanges: CreateScenarioTimeRangeDTO[];
  warnDeviceManager: boolean;
  overrideDelay: boolean;
  delay: number | null;
  userOrganisationsIds: string[];
  overrideParameters: boolean;
  parameters: CreateScenarioParameterOverrideDTO[];
}