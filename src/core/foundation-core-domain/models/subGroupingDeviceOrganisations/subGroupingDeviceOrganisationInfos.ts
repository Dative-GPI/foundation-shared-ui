export class SubGroupingDeviceOrganisationInfos {
  id: string;
  groupingId: string;
  deviceOrganisationId: string;
  subGroupingId: string;

  constructor(params: SubGroupingDeviceOrganisationInfosDTO) {
    this.id = params.id;
    this.groupingId = params.groupingId;
    this.deviceOrganisationId = params.deviceOrganisationId;
    this.subGroupingId = params.subGroupingId;
  }
}

export interface SubGroupingDeviceOrganisationInfosDTO {
  id: string;
  groupingId: string;
  deviceOrganisationId: string;
  subGroupingId: string;
}

export interface SubGroupingDeviceOrganisationFilters {
  groupingIds: string[];
  subGroupingIds: string[];
  search: string;
}
