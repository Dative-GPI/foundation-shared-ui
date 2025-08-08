import { computed } from "vue";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { SubgroupingDeviceOrganisationDetails, CompleteSubgroupingDeviceOrganisation, type SubgroupingDeviceOrganisationDetailsDTO, type SubgroupingDeviceOrganisationFilters, SubgroupingDeviceOrganisationInfos, type SubgroupingDeviceOrganisationInfosDTO, type CreateSubgroupingDeviceOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";
import { SUBGROUPING_DEVICE_ORGANISATIONS_URL, SUBGROUPING_DEVICE_ORGANISATION_URL } from "../../config/urls";
import { useDeviceOrganisations } from "./useDeviceOrganisations";

const SubgroupingDeviceOrganisationServiceFactory = new ServiceFactory<SubgroupingDeviceOrganisationDetailsDTO, SubgroupingDeviceOrganisationDetails>("subgroupingDeviceOrganisation", SubgroupingDeviceOrganisationDetails)
  .createComplete<SubgroupingDeviceOrganisationInfos, SubgroupingDeviceOrganisationInfosDTO, CreateSubgroupingDeviceOrganisationDTO, null, SubgroupingDeviceOrganisationFilters>(SUBGROUPING_DEVICE_ORGANISATIONS_URL, SUBGROUPING_DEVICE_ORGANISATION_URL, SubgroupingDeviceOrganisationInfos);

export const useSubgroupingDeviceOrganisation = ComposableFactory.get(SubgroupingDeviceOrganisationServiceFactory);
export const useCreateSubgroupingDeviceOrganisation = ComposableFactory.create(SubgroupingDeviceOrganisationServiceFactory);
export const useRemoveSubgroupingDeviceOrganisation = ComposableFactory.remove(SubgroupingDeviceOrganisationServiceFactory);

export const useSubgroupingDeviceOrganisations = ComposableFactory.getMany(SubgroupingDeviceOrganisationServiceFactory);

export const useCompleteSubgroupingDeviceOrganisations = () => {
  const { 
    entities: subgroupingDeviceOrganisations, 
    getMany: getManySubgroupingDeviceOrganisations, 
    fetching: fetchingSubgroupingDeviceOrganisations 
  } = useSubgroupingDeviceOrganisations();

  const { entities: deviceOrganisations, getMany: getManyDeviceOrganisations, fetching: fetchingDeviceOrganisations }
    = useDeviceOrganisations();

  const completeFetching = computed(() => fetchingDeviceOrganisations.value || fetchingSubgroupingDeviceOrganisations.value);

  const completeEntities = computed(() => {
    const subgroupingDeviceOrganisationsList = subgroupingDeviceOrganisations.value;
    const deviceOrganisationsList = deviceOrganisations.value;

    return subgroupingDeviceOrganisationsList.map(subgroupingDeviceOrganisation => {
      const deviceOrganisation = deviceOrganisationsList.find(
        deviceOrganisation => deviceOrganisation.id === subgroupingDeviceOrganisation.deviceOrganisationId
      );

      return new CompleteSubgroupingDeviceOrganisation({
        subgroupingDeviceOrganisation: subgroupingDeviceOrganisation,
        deviceOrganisation: deviceOrganisation!
      });
    });
  });

  const completeGetMany = (...params: Parameters<typeof getManySubgroupingDeviceOrganisations>) => {
    return Promise.all([
      getManySubgroupingDeviceOrganisations(...params),
      getManyDeviceOrganisations(),
    ]).then(() => completeEntities.value);
  }

  return {
    entities: completeEntities,
    getMany: completeGetMany,
    fetching: completeFetching
  }
}