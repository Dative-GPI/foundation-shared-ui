import { isoToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

export class DeviceDataDefinitionInfos {
  id: string;
  deviceId: string;
  dataDefinitionId: string;
  dataDefinitionCode: string;
  dataDefinitionLabel: string;
  dataCategoryCode: string;
  dataCategoryLabel: string;
  timestamp: number;

  constructor(params: DeviceDataDefinitionInfosDTO) {
    this.id = params.id;
    this.deviceId = params.deviceId;
    this.dataDefinitionId = params.dataDefinitionId;
    this.dataDefinitionCode = params.dataDefinitionCode;
    this.dataDefinitionLabel = params.dataDefinitionLabel;
    this.dataCategoryCode = params.dataCategoryCode;
    this.dataCategoryLabel = params.dataCategoryLabel;
    this.timestamp = isoToEpoch(params.timestamp);
  }
}

export interface DeviceDataDefinitionInfosDTO {
  id: string;
  deviceId: string;
  dataDefinitionId: string;
  dataDefinitionCode: string;
  dataDefinitionLabel: string;
  dataCategoryCode: string;
  dataCategoryLabel: string;
  timestamp: string;
}

export interface DeviceDataDefinitionFilters {
  devicesIds?: string[];
  deviceId?: string;
}