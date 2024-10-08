import { type AlertStatus } from "@dative-gpi/foundation-shared-domain/enums";
import { isoToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

import { AlertDataDefinition, type AlertDataDefinitionDTO } from "./alertDataDefinition";

export class AlertState {
  id: string;
  status: AlertStatus;
  sourceTimestamp: number;
  enqueuedTimestamp: number;
  processedTimestamp: number;
  metadataValues?: AlertDataDefinition[];

  constructor(params: AlertStateDTO) {
    this.id = params.id;
    this.status = params.status;
    this.sourceTimestamp = isoToEpoch(params.sourceTimestamp);
    this.enqueuedTimestamp = isoToEpoch(params.enqueuedTimestamp);
    this.processedTimestamp = isoToEpoch(params.processedTimestamp);
    this.metadataValues = params.metadataValues?.map(dto => new AlertDataDefinition(dto));
  }
}

export interface AlertStateDTO {
  id: string;
  status: AlertStatus;
  sourceTimestamp: string;
  enqueuedTimestamp: string;
  processedTimestamp: string;
  metadataValues?: AlertDataDefinitionDTO[];
}