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
  description: string | null;
  icon: string;
  color: string | null;
  code: string | null;
}

export interface UpdateGroupingDTO {
  label: string;
  description: string | null;
  code: string | null;
  icon: string;
  color: string | null;
}
