export class SubgroupingDeviceOrganisationInfos {
  id: string;
  groupingId: string;
  deviceOrganisationId: string;
  subgroupingId: string;

  constructor(params: SubgroupingDeviceOrganisationInfosDTO) {
    this.id = params.id;
    this.groupingId = params.groupingId;
    this.deviceOrganisationId = params.deviceOrganisationId;
    this.subgroupingId = params.subgroupingId;
  }
}

export interface SubgroupingDeviceOrganisationInfosDTO {
  id: string;
  groupingId: string;
  deviceOrganisationId: string;
  subgroupingId: string;
}

export interface SubgroupingDeviceOrganisationFilters {
  groupingIds?: string[] | null;
  subgroupingIds?: string[] | null;
  search?: string | null;
}
