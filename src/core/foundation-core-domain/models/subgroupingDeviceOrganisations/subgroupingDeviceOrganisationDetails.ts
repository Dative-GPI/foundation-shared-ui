import type { SubgroupingDeviceOrganisationInfosDTO } from './subgroupingDeviceOrganisationInfos';
import { SubgroupingDeviceOrganisationInfos } from './subgroupingDeviceOrganisationInfos';

export class SubgroupingDeviceOrganisationDetails extends SubgroupingDeviceOrganisationInfos {
  constructor(params: SubgroupingDeviceOrganisationDetailsDTO) {
    super(params);
  }
}

export interface SubgroupingDeviceOrganisationDetailsDTO extends SubgroupingDeviceOrganisationInfosDTO {}

export interface CreateSubgroupingDeviceOrganisationDTO {
  groupingId: string;
  subgroupingId: string;
  deviceOrganisationId: string;
}
