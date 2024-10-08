import { isoToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

export class CustomPropertyValueInfos {
  value: string;
  timestamp: number | null;

  constructor(params: CustomPropertyValueInfosDTO) {
    this.value = params.value;
    this.timestamp = params.timestamp ?
      isoToEpoch(params.timestamp) : null;
  }
}

export interface CustomPropertyValueInfosDTO {
  value: string;
  timestamp: string | null;
}