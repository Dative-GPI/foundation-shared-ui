
export class ScenarioParameterOverride {
  scenarioParameterHiddenCode: string;
  overrideValue: string | null;

  constructor(params: ScenarioParameterOverrideDTO) {
    this.scenarioParameterHiddenCode = params.scenarioParameterHiddenCode;
    this.overrideValue = params.overrideValue;

  }
}

export interface ScenarioParameterOverrideDTO {
  scenarioParameterHiddenCode: string;
  overrideValue: string | null;
}
export interface CreateScenarioParameterOverrideDTO {
  scenarioParameterHiddenCode: string;
  overrideValue: string | null;
}