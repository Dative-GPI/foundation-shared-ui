import { SubGroupingDeviceOrganisationDetails, type SubGroupingDeviceOrganisationDetailsDTO, type SubGroupingDeviceOrganisationFilters, SubGroupingDeviceOrganisationInfos, type SubGroupingDeviceOrganisationInfosDTO, type CreateSubGroupingDeviceOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { SUB_GROUPING_DEVICE_ORGANISATIONS_URL, SUB_GROUPING_DEVICE_ORGANISATION_URL } from "../../config/urls";

const SubGroupingDeviceOrganisationServiceFactory = new ServiceFactory<SubGroupingDeviceOrganisationDetailsDTO, SubGroupingDeviceOrganisationDetails>("subGroupingDeviceOrganisation", SubGroupingDeviceOrganisationDetails).create(factory => factory.build(
  factory.addGet(SUB_GROUPING_DEVICE_ORGANISATION_URL),
  factory.addGetMany<SubGroupingDeviceOrganisationInfosDTO, SubGroupingDeviceOrganisationInfos, SubGroupingDeviceOrganisationFilters>(SUB_GROUPING_DEVICE_ORGANISATIONS_URL, SubGroupingDeviceOrganisationInfos),
  factory.addCreate<CreateSubGroupingDeviceOrganisationDTO>(SUB_GROUPING_DEVICE_ORGANISATIONS_URL),
  factory.addRemove(SUB_GROUPING_DEVICE_ORGANISATION_URL),
  factory.addNotify()
));

export const useSubGroupingDeviceOrganisation = ComposableFactory.get(SubGroupingDeviceOrganisationServiceFactory);
export const useSubGroupingDeviceOrganisations = ComposableFactory.getMany(SubGroupingDeviceOrganisationServiceFactory);
export const useCreateSubGroupingDeviceOrganisation = ComposableFactory.create(SubGroupingDeviceOrganisationServiceFactory);
export const useRemoveSubGroupingDeviceOrganisation = ComposableFactory.remove(SubGroupingDeviceOrganisationServiceFactory);
