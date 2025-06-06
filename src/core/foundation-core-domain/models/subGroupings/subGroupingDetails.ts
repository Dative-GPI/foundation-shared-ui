import type { SubGroupingInfosDTO } from './subGroupingInfos';
import { SubGroupingInfos } from './subGroupingInfos';

export class SubGroupingDetails extends SubGroupingInfos {
  constructor(params: SubGroupingDetailsDTO) {
    super(params);
  }
}

export interface SubGroupingDetailsDTO extends SubGroupingInfosDTO {}

export interface CreateSubGroupingDTO {
  groupingId: string;
  label: string;
  icon: string;
}

export interface UpdateSubGroupingDTO {
  id: string;
  label: string;
  icon: string;
}