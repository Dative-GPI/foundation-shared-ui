import { ref } from "vue";

import { DashboardExplorerElementDetails, type DashboardExplorerElementDetailsDTO, type DashboardExplorerElementFilters, DashboardExplorerElementInfos, type DashboardExplorerElementInfosDTO, type DashboardOrganisationDetails, type DashboardOrganisationTypeDetails, type DashboardShallowDetails, type FolderDetails } from "@dative-gpi/foundation-core-domain/models";
import { type AddOrUpdateCallback, type DeleteCallback, type NotifyEvent, onCollectionChanged } from "@dative-gpi/bones-ui";
import { ServiceFactory } from "@dative-gpi/bones-ui/core";

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
      const fullText = `${el.label} ${el.code} ${el.tags.join(" ")}`;
      return (!filters.value.parentId || el.path.some(p => p.id === filters.value!.parentId)) &&
        fullText.toLowerCase().includes(filters.value.search!.toLowerCase());
    };

    const onCollectionChangedCustom = onCollectionChanged(entities, filterMethod);

    try {
      entities.value = await DashboardExplorerElementServiceFactory.getMany(filters.value);

      subscribeToDashboardOrganisations("all", (ev: NotifyEvent, el: DashboardOrganisationDetails | any) => {
        switch (ev) {
          case "add":
          case "update":
            (onCollectionChangedCustom as AddOrUpdateCallback<DashboardExplorerElementInfos>)(ev, DashboardExplorerElementInfos.fromDashboardOrganisation(el));
            break;
          case "delete":
            (onCollectionChangedCustom as DeleteCallback)(ev, el);
            break;
        }
      });

      subscribeToDashboardShallows("all", (ev: NotifyEvent, el: DashboardShallowDetails | any) => {
        switch (ev) {
          case "add":
          case "update":
            (onCollectionChangedCustom as AddOrUpdateCallback<DashboardExplorerElementInfos>)(ev, DashboardExplorerElementInfos.fromDashboardShallow(el));
            break;
          case "delete":
            (onCollectionChangedCustom as DeleteCallback)(ev, el);
            break;
        }
      });

      subscribeToDashboardOrganisationTypes("all", (ev: NotifyEvent, el: DashboardOrganisationTypeDetails | any) => {
        switch (ev) {
          case "add":
          case "update":
            (onCollectionChangedCustom as AddOrUpdateCallback<DashboardExplorerElementInfos>)(ev, DashboardExplorerElementInfos.fromDashboardOrganisationType(el));
            break;
          case "delete":
            (onCollectionChangedCustom as DeleteCallback)(ev, el);
            break;
        }
      });

      subscribeToFolders("all", (ev: NotifyEvent, el: FolderDetails | any) => {
        switch (ev) {
          case "add":
          case "update":
            (onCollectionChangedCustom as AddOrUpdateCallback<DashboardExplorerElementInfos>)(ev, DashboardExplorerElementInfos.fromFolder(el));
            break;
          case "delete":
            (onCollectionChangedCustom as DeleteCallback)(ev, el);
            break;
        }
      });
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
