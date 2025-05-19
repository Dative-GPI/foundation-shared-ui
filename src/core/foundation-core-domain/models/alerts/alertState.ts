import { type AlertStatus } from "@dative-gpi/foundation-shared-domain/enums";
import { isoToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

import { AlertDataDefinition, type AlertDataDefinitionDTO } from "./alertDataDefinition";

export class AlertState {
  id: string;
  status: AlertStatus;
  sourceTimestamp: number | null;
  enqueuedTimestamp: number | null;
  processedTimestamp: number;
  actualTimestamp: number;
  metadataValues?: AlertDataDefinition[];

  constructor(params: AlertStateDTO) {
    this.id = params.id;
    this.status = params.status;
    this.sourceTimestamp = params.sourceTimestamp ? isoToEpoch(params.sourceTimestamp) : null;
    this.enqueuedTimestamp = params.enqueuedTimestamp ? isoToEpoch(params.enqueuedTimestamp) : null;
    this.processedTimestamp = isoToEpoch(params.processedTimestamp);
    this.actualTimestamp = isoToEpoch(params.actualTimestamp);
    this.metadataValues = params.metadataValues?.map(dto => new AlertDataDefinition(dto));
  }
}

export interface AlertStateDTO {
  id: string;
  status: AlertStatus;
  sourceTimestamp: string | null;
  enqueuedTimestamp: string | null;
  processedTimestamp: string;
  actualTimestamp: string;
  metadataValues?: AlertDataDefinitionDTO[];
}