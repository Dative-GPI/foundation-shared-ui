import type { SubGroupingDeviceOrganisationInfosDTO } from './subGroupingDeviceOrganisationInfos';
import { SubGroupingDeviceOrganisationInfos } from './subGroupingDeviceOrganisationInfos';

export class SubGroupingDeviceOrganisationDetails extends SubGroupingDeviceOrganisationInfos {
  constructor(params: SubGroupingDeviceOrganisationDetailsDTO) {
    super(params);
  }
}

export interface SubGroupingDeviceOrganisationDetailsDTO extends SubGroupingDeviceOrganisationInfosDTO {}

export interface CreateSubGroupingDeviceOrganisationDTO {
  groupingId: string;
  subGroupingId: string;
  deviceOrganisationId: string;
}
