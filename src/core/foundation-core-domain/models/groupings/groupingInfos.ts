export class GroupingInfos {
  id: string;
  label: string;
  description?: string | null;
  icon: string;
  iconColor?: string | null;
  code?: string | null;
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
  description?: string | null;
  icon: string;
  iconColor?: string | null;
  code?: string | null;
  subgroupingCount: number;
}

export interface GroupingFilters {
  search?: string | null;
}
