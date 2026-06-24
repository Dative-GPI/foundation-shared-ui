export class GroupingInfos {
  id: string;
  label: string;
  description: string | null;
  icon: string;
  color: string | null;
  code: string | null;
  subgroupingCount: number;

  constructor(params: GroupingInfosDTO) {
    this.id = params.id;
    this.label = params.label;
    this.description = params.description;
    this.icon = params.icon;
    this.color = params.color;
    this.code = params.code;
    this.subgroupingCount = params.subgroupingCount;
  }
}

export interface GroupingInfosDTO {
  id: string;
  label: string;
  description: string | null;
  icon: string;
  color: string | null;
  code: string | null;
  subgroupingCount: number;
}

export interface GroupingFilters {
  groupingsIds?: string[] | null;
  search?: string | null;
}
