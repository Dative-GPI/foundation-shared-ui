import type { AlertStatus, Criticity } from "@dative-gpi/foundation-shared-domain/enums";
import { isoToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

export class DeviceOrganisationAlert {
    id: string;
    label: string;
    status: AlertStatus;
    criticity: Criticity;
    sourceTimestamp?: number;
    enqueuedTimestamp?: number;
    actualTimestamp: number;

  constructor(params: DeviceOrganisationAlertDTO) {
    this.id = params.id;
    this.label = params.label;
    this.status = params.status;
    this.criticity = params.criticity;
    this.sourceTimestamp = params.sourceTimestamp ? isoToEpoch(params.sourceTimestamp) : undefined;
    this.enqueuedTimestamp = params.enqueuedTimestamp ? isoToEpoch(params.enqueuedTimestamp) : undefined;
    this.actualTimestamp =  isoToEpoch(params.actualTimestamp);
  }
}

export interface DeviceOrganisationAlertDTO {
  id: string;
  label: string;
  status: AlertStatus;
  criticity: Criticity;
  sourceTimestamp?: string;
  enqueuedTimestamp?: string;
  actualTimestamp: string;
}