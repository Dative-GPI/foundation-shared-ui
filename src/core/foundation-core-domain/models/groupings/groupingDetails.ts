import type { GroupingInfosDTO } from "./groupingInfos";
import { GroupingInfos } from "./groupingInfos";

export class GroupingDetails extends GroupingInfos {
  constructor(params: GroupingDetailsDTO) {
    super(params);
  }
}

export interface GroupingDetailsDTO extends GroupingInfosDTO {}

export interface CreateGroupingDTO {
  label: string;
  description: string;
  icon: string;
  iconColor: string;
  code: string;
}

export interface UpdateGroupingDTO {
  id: string;
  label: string;
  description: string;
  code: string;
  icon: string;
  iconColor: string;
}
