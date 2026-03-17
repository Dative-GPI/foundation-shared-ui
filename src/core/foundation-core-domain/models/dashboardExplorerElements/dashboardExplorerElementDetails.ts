import { DashboardExplorerElementInfos, type DashboardExplorerElementInfosDTO } from "./dashboardExplorerElementInfos";

export class DashboardExplorerElementDetails extends DashboardExplorerElementInfos {

  constructor(params: DashboardExplorerElementDetailsDTO) {
    super(params);
  }
}

export interface DashboardExplorerElementDetailsDTO extends DashboardExplorerElementInfosDTO {
}
