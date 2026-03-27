import { ref } from "vue";

import { DeviceExplorerElementDetails, type DeviceExplorerElementDetailsDTO, type DeviceExplorerElementFilters, DeviceExplorerElementInfos, type DeviceExplorerElementInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { onCollectionChanged } from "@dative-gpi/bones-ui";
import { ServiceFactory } from "@dative-gpi/bones-ui/core";

import { createCollectionHandler } from "@dative-gpi/foundation-shared-services/tools";
import { containsSearchTerm } from "@dative-gpi/foundation-shared-components/utils";

import { DEVICE_EXPLORER_ELEMENTS_URL } from "../../config/urls";

import { useTrackDeviceConnectivity, useWatchDeviceConnectivity } from "./useDeviceConnectivities";
import { useTrackDeviceStatuses, useWatchDeviceStatuses } from "./useDeviceStatuses";
import { useSubscribeToDeviceOrganisations } from "./useDeviceOrganisations";
import { useSubscribeToGroups } from "./useGroups";

const DeviceExplorerElementServiceFactory = new ServiceFactory<DeviceExplorerElementDetailsDTO, DeviceExplorerElementDetails>("deviceExplorerElement", DeviceExplorerElementDetails).create(factory => factory.build(
  factory.addGetMany<DeviceExplorerElementInfosDTO, DeviceExplorerElementInfos, DeviceExplorerElementFilters>(DEVICE_EXPLORER_ELEMENTS_URL, DeviceExplorerElementInfos),
  factory.addNotify()
));

export const useDeviceExplorerElements = () => {
  const { watchMany: watchDevicesConnectivity } = useWatchDeviceConnectivity();
  const { watchMany: watchDevicesStatuses } = useWatchDeviceStatuses();

  const { track: trackDeviceConnectivity } = useTrackDeviceConnectivity();
  const { track: trackDeviceStatuses } = useTrackDeviceStatuses();

  const { subscribe: subscribeToDeviceOrganisations } = useSubscribeToDeviceOrganisations();
  const { subscribe: subscribeToGroups } = useSubscribeToGroups();

  const fetching = ref(false);
  const entities = ref<DeviceExplorerElementInfos[]>([]);
  const filters = ref<DeviceExplorerElementFilters>();

  const getMany = async (filter?: DeviceExplorerElementFilters) => {
    fetching.value = true;
    filters.value = filter;

    const filterMethod = (el: DeviceExplorerElementInfos): boolean => {
      if (!filters.value) {
        return true;
      }
      if (!filters.value.search) {
        return (filters.value.root && !el.parentId) || (!!filters.value.parentId && filters.value.parentId == el.parentId);
      }
    
      return (!filters.value.parentId || el.path.some(p => p.id === filters.value!.parentId)) &&
                containsSearchTerm({ label: el.label, code: el.code, tags: el.tags }, filters.value.search.toLowerCase());
    };

    const onCollectionChangedCustom = onCollectionChanged(entities, filterMethod);

    try {
      entities.value = await DeviceExplorerElementServiceFactory.getMany(filters.value);

      subscribeToDeviceOrganisations("all", 
        createCollectionHandler(
          onCollectionChangedCustom, 
          DeviceExplorerElementInfos.fromDeviceOrganisation
        )
      );

      subscribeToGroups("all", 
        createCollectionHandler(
          onCollectionChangedCustom, 
          DeviceExplorerElementInfos.fromGroup
        )
      );

      watchDevicesStatuses();
      watchDevicesConnectivity();

      for (const deviceExplorerElement of entities.value) {
        trackDeviceStatuses(deviceExplorerElement.status!, s => deviceExplorerElement.status = s);
        trackDeviceConnectivity(deviceExplorerElement.connectivity!, c => deviceExplorerElement.connectivity = c);
      }
    }
    finally {
      fetching.value = false;
    }
  }

  return {
    fetching,
    getMany,
    entities
  }
};