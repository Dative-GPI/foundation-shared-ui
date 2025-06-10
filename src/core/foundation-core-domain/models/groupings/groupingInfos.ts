export class GroupingInfos {
  id: string;
  label: string;
  description: string;
  icon: string;
  iconColor: string;
  code: string;
  subgroupingCount: number;

  constructor(params: GroupingInfosDTO) {
    this.id = params.id;
    this.label = params.label;
    this.description = params.description;
    this.icon = params.icon;
    this.iconColor = params.iconColor;
    this.code = params.code;
    this.subgroupingCount = params.subgroupingCount;
  }
}

export interface GroupingInfosDTO {
  id: string;
  label: string;
  description: string;
  icon: string;
  iconColor: string;
  code: string;
  subgroupingCount: number;
}

export interface GroupingFilters {
  search: string;
}
