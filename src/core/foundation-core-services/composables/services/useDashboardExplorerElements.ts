import { DashboardExplorerElementDetails, type DashboardExplorerElementDetailsDTO, type DashboardExplorerElementFilters, DashboardExplorerElementInfos, type DashboardExplorerElementInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { DASHBOARD_EXPLORER_ELEMENTS_URL } from "../../config/urls";

const DashboardExplorerElementServiceFactory = new ServiceFactory<DashboardExplorerElementDetailsDTO, DashboardExplorerElementDetails>("dashboardExplorerElement", DashboardExplorerElementDetails).create(factory => factory.build(
  factory.addGetMany<DashboardExplorerElementInfosDTO, DashboardExplorerElementInfos, DashboardExplorerElementFilters>(DASHBOARD_EXPLORER_ELEMENTS_URL, DashboardExplorerElementInfos),
  factory.addNotify()
));

export const useDashboardExplorerElements = ComposableFactory.getMany(DashboardExplorerElementServiceFactory);
