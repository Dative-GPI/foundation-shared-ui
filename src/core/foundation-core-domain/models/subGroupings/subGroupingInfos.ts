export class SubGroupingInfos {
  id: string;
  groupingId: string;
  label: string;
  icon: string;

  constructor(params: SubGroupingInfosDTO) {
    this.id = params.id;
    this.groupingId = params.groupingId;
    this.label = params.label;
    this.icon = params.icon;
  }
}

export interface SubGroupingInfosDTO {
  id: string;
  groupingId: string;
  label: string;
  icon: string;
}

export interface SubGroupingFilters {
  groupingId?: string;
  search: string;
}
