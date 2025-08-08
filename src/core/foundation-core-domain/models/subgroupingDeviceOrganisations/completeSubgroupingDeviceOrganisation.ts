import type { DeviceOrganisationInfos } from "../deviceOrganisations";
import type { SubgroupingDeviceOrganisationInfos } from "./subgroupingDeviceOrganisationInfos";

export class CompleteSubgroupingDeviceOrganisation {
  subgroupingDeviceOrganisation: SubgroupingDeviceOrganisationInfos;
  deviceOrganisation: DeviceOrganisationInfos;

  constructor(params: {
    subgroupingDeviceOrganisation: SubgroupingDeviceOrganisationInfos;
    deviceOrganisation: DeviceOrganisationInfos;
  }) {
    this.subgroupingDeviceOrganisation = params.subgroupingDeviceOrganisation;
    this.deviceOrganisation = params.deviceOrganisation;
  }
}
