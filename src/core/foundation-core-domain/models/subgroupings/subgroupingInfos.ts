export class SubgroupingInfos {
  id: string;
  groupingId: string;
  label: string;
  code: string;
  icon: string;

  constructor(params: SubgroupingInfosDTO) {
    this.id = params.id;
    this.groupingId = params.groupingId;
    this.label = params.label;
    this.code = params.code;
    this.icon = params.icon;
  }
}

export interface SubgroupingInfosDTO {
  id: string;
  groupingId: string;
  label: string;
  code: string;
  icon: string;
}

export interface SubgroupingFilters {
  groupingIds?: string[] | null;
  search?: string | null;
}
