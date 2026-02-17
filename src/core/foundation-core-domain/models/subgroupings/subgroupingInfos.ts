export class SubgroupingInfos {
  id: string;
  groupingId: string;
  groupingLabel: string;
  groupingColor: string;
  groupingIcon: string;
  label: string;
  code: string;
  icon: string;

  constructor(params: SubgroupingInfosDTO) {
    this.id = params.id;
    this.groupingId = params.groupingId;
    this.groupingLabel = params.groupingLabel;
    this.groupingColor = params.groupingColor;
    this.groupingIcon = params.groupingIcon;
    this.label = params.label;
    this.code = params.code;
    this.icon = params.icon;
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
}

export interface SubgroupingFilters {
  groupingIds?: string[] | null;
  search?: string | null;
}
