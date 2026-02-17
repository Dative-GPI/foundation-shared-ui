export class SubgroupingInfos {
  id: string;
  groupingId: string;
  groupingLabel: string;
  groupingColor: string;
  groupingIcon: string;
  label: string;
  code: string;
  icon: string;
  deviceOrganisationsCount?: number;

  constructor(params: SubgroupingInfosDTO) {
    this.id = params.id;
    this.groupingId = params.groupingId;
    this.groupingLabel = params.groupingLabel;
    this.groupingColor = params.groupingColor;
    this.groupingIcon = params.groupingIcon;
    this.label = params.label;
    this.code = params.code;
    this.icon = params.icon;
    this.deviceOrganisationsCount = params.deviceOrganisationsCount;
  }
}

export interface SubgroupingInfosDTO {
  id: string;
  groupingId: string;
  groupingLabel: string;
  groupingColor: string;
  groupingIcon: string;
  label: string;
  code: string;
  icon: string;
  deviceOrganisationsCount?: number;
}

export interface SubgroupingFilters {
  subgroupingsIds?: string[] | null;
  groupingIds?: string[] | null;
  search?: string | null;
}
