import { type CreateServiceAccountRoleOrganisationDTO, ServiceAccountRoleOrganisationDetails, type ServiceAccountRoleOrganisationDetailsDTO, type ServiceAccountRoleOrganisationFilters, ServiceAccountRoleOrganisationInfos, type ServiceAccountRoleOrganisationInfosDTO, type UpdateServiceAccountRoleOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { SERVICE_ACCOUNT_ROLE_ORGANISATIONS_URL, SERVICE_ACCOUNT_ROLE_ORGANISATION_URL } from "../../config/urls";

const ServiceAccountRoleOrganisationServiceFactory = new ServiceFactory<ServiceAccountRoleOrganisationDetailsDTO, ServiceAccountRoleOrganisationDetails>("serviceAccountRoleOrganisation", ServiceAccountRoleOrganisationDetails)
  .createComplete<ServiceAccountRoleOrganisationInfos, ServiceAccountRoleOrganisationInfosDTO, CreateServiceAccountRoleOrganisationDTO, UpdateServiceAccountRoleOrganisationDTO, ServiceAccountRoleOrganisationFilters>(SERVICE_ACCOUNT_ROLE_ORGANISATIONS_URL, SERVICE_ACCOUNT_ROLE_ORGANISATION_URL, ServiceAccountRoleOrganisationInfos);

export const useServiceAccountRoleOrganisation = ComposableFactory.get(ServiceAccountRoleOrganisationServiceFactory);
export const useServiceAccountRoleOrganisations = ComposableFactory.getMany(ServiceAccountRoleOrganisationServiceFactory);
export const useCreateServiceAccountRoleOrganisation = ComposableFactory.create(ServiceAccountRoleOrganisationServiceFactory);
export const useUpdateServiceAccountRoleOrganisation = ComposableFactory.update(ServiceAccountRoleOrganisationServiceFactory);
export const useRemoveServiceAccountRoleOrganisation = ComposableFactory.remove(ServiceAccountRoleOrganisationServiceFactory);