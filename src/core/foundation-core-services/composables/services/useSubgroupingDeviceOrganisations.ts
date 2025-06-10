import { SubgroupingDeviceOrganisationDetails, type SubgroupingDeviceOrganisationDetailsDTO, type SubgroupingDeviceOrganisationFilters, SubgroupingDeviceOrganisationInfos, type SubgroupingDeviceOrganisationInfosDTO, type CreateSubgroupingDeviceOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { SUBGROUPING_DEVICE_ORGANISATIONS_URL, SUBGROUPING_DEVICE_ORGANISATION_URL } from "../../config/urls";

const SubgroupingDeviceOrganisationServiceFactory = new ServiceFactory<SubgroupingDeviceOrganisationDetailsDTO, SubgroupingDeviceOrganisationDetails>("subgroupingDeviceOrganisation", SubgroupingDeviceOrganisationDetails).create(factory => factory.build(
  factory.addGet(SUBGROUPING_DEVICE_ORGANISATION_URL),
  factory.addGetMany<SubgroupingDeviceOrganisationInfosDTO, SubgroupingDeviceOrganisationInfos, SubgroupingDeviceOrganisationFilters>(SUBGROUPING_DEVICE_ORGANISATIONS_URL, SubgroupingDeviceOrganisationInfos),
  factory.addCreate<CreateSubgroupingDeviceOrganisationDTO>(SUBGROUPING_DEVICE_ORGANISATIONS_URL),
  factory.addRemove(SUBGROUPING_DEVICE_ORGANISATION_URL),
  factory.addNotify()
));

export const useSubgroupingDeviceOrganisation = ComposableFactory.get(SubgroupingDeviceOrganisationServiceFactory);
export const useSubgroupingDeviceOrganisations = ComposableFactory.getMany(SubgroupingDeviceOrganisationServiceFactory);
export const useCreateSubgroupingDeviceOrganisation = ComposableFactory.create(SubgroupingDeviceOrganisationServiceFactory);
export const useRemoveSubgroupingDeviceOrganisation = ComposableFactory.remove(SubgroupingDeviceOrganisationServiceFactory);
