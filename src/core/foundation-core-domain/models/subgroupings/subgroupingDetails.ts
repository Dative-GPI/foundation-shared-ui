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
  code: string;
  icon: string;
}

export interface UpdateSubgroupingDTO {
  label: string;
  code: string;
  icon: string;
}