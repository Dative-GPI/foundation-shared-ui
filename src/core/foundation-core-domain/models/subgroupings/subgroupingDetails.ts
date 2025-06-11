import type { SubgroupingInfosDTO } from './subgroupingInfos';
import { SubgroupingInfos } from './subgroupingInfos';

export class SubgroupingDetails extends SubgroupingInfos {
  constructor(params: SubgroupingDetailsDTO) {
    super(params);
  }
}

export interface SubgroupingDetailsDTO extends SubgroupingInfosDTO {}

export interface CreateSubgroupingDTO {
  groupingId: string;
  label: string;
  icon: string;
}

export interface UpdateSubgroupingDTO {
  id: string;
  label: string;
  icon: string;
}