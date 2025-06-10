export class SubgroupingInfos {
  id: string;
  groupingId: string;
  label: string;
  icon: string;

  constructor(params: SubgroupingInfosDTO) {
    this.id = params.id;
    this.groupingId = params.groupingId;
    this.label = params.label;
    this.icon = params.icon;
  }
}

export interface SubgroupingInfosDTO {
  id: string;
  groupingId: string;
  label: string;
  icon: string;
}

export interface SubgroupingFilters {
  groupingId?: string;
  search: string;
}
