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
  iconColor: string | null;
  code: string | null;
}

export interface UpdateGroupingDTO {
  id: string;
  label: string;
  description: string | null;
  cod: string | null;
  icon: string;
  iconColor: string | null;
}
