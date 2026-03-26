import { ref } from "vue";

import { DashboardExplorerElementDetails, type DashboardExplorerElementDetailsDTO, type DashboardExplorerElementFilters, DashboardExplorerElementInfos, type DashboardExplorerElementInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { onCollectionChanged } from "@dative-gpi/bones-ui";
import { ServiceFactory } from "@dative-gpi/bones-ui/core";
import { createCollectionHandler } from "@dative-gpi/foundation-shared-services/tools";
import { containsSearchTerm } from "@dative-gpi/foundation-shared-components/utils";

import { DASHBOARD_EXPLORER_ELEMENTS_URL } from "../../config/urls";

import { useSubscribeToDashboardOrganisations } from "./useDashboardOrganisations";
import { useSubscribeToDashboardShallows } from "./useDashboardShallows";
import { useSubscribeToDashboardOrganisationTypes } from "./useDashboardOrganisationTypes";
import { useSubscribeToFolders } from "./useFolders";

const DashboardExplorerElementServiceFactory = new ServiceFactory<DashboardExplorerElementDetailsDTO, DashboardExplorerElementDetails>("dashboardExplorerElement", DashboardExplorerElementDetails).create(factory => factory.build(
  factory.addGetMany<DashboardExplorerElementInfosDTO, DashboardExplorerElementInfos, DashboardExplorerElementFilters>(DASHBOARD_EXPLORER_ELEMENTS_URL, DashboardExplorerElementInfos),
  factory.addNotify()
));

export const useDashboardExplorerElements = () => {
  const { subscribe: subscribeToDashboardOrganisations } = useSubscribeToDashboardOrganisations();
  const { subscribe: subscribeToDashboardShallows } = useSubscribeToDashboardShallows();
  const { subscribe: subscribeToDashboardOrganisationTypes } = useSubscribeToDashboardOrganisationTypes();
  const { subscribe: subscribeToFolders } = useSubscribeToFolders();

  const fetching = ref(false);
  const entities = ref<DashboardExplorerElementInfos[]>([]);
  const filters = ref<DashboardExplorerElementFilters>();

  const getMany = async (filter?: DashboardExplorerElementFilters) => {
    fetching.value = true;
    filters.value = filter;

    const filterMethod = (el: DashboardExplorerElementInfos): boolean => {
      if (!filters.value) {
        return true;
      }
      if (filters.value.types && !filters.value.types.includes(el.type)) {
        return false;
      }
      if (filters.value.dashboardExplorerElementsIds) {
        return filters.value.dashboardExplorerElementsIds.includes(el.id);
      }
      if (!filters.value.search) {
        return (!!filters.value.root && !el.parentId) || (!!filters.value.parentId && filters.value.parentId === el.parentId);
      }
      return (!filters.value.parentId || el.path.some(p => p.id === filters.value!.parentId)) &&
        containsSearchTerm({ label: el.label, code: el.code, tags: el.tags }, filters.value.search);
    };

    const onCollectionChangedCustom = onCollectionChanged(entities, filterMethod);

    try {
      entities.value = await DashboardExplorerElementServiceFactory.getMany(filters.value);

      subscribeToDashboardOrganisations("all", 
        createCollectionHandler(
          onCollectionChangedCustom, 
          DashboardExplorerElementInfos.fromDashboardOrganisation
        )
      );
      subscribeToDashboardShallows("all", 
        createCollectionHandler(
          onCollectionChangedCustom, 
          DashboardExplorerElementInfos.fromDashboardShallow
        )
      );
      subscribeToDashboardOrganisationTypes("all", 
        createCollectionHandler(
          onCollectionChangedCustom, 
          DashboardExplorerElementInfos.fromDashboardOrganisationType
        )
      );
      subscribeToFolders("all", 
        createCollectionHandler(
          onCollectionChangedCustom, 
          DashboardExplorerElementInfos.fromFolder
        )
      );
    }
    finally {
      fetching.value = false;
    }
  };

  return {
    fetching,
    getMany,
    entities
  };
};
