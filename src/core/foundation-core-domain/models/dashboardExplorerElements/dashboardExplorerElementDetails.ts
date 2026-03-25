import { DashboardExplorerElementInfos, type DashboardExplorerElementInfosDTO } from "./dashboardExplorerElementInfos";

export class DashboardExplorerElementDetails extends DashboardExplorerElementInfos {  
    // DashboardOrganisation & DashboardShallow
    folderId: string | null;
    folderLabel: string | null;
    folderIcon: string | null;
  
    // DashboardShallow
    dashboardOrganisationTypeId: string | null;
    dashboardOrganisationTypeLabel: string | null;
  
    // DashboardOrganisationType
    organisationTypeId: string | null;
    organisationTypeLabel: string | null;

    // Dashboard
    dashboardId: string | null;
  

  constructor(params: DashboardExplorerElementDetailsDTO) {
    super(params);
    this.folderId = params.folderId ?? null;
    this.folderLabel = params.folderLabel ?? null;
    this.folderIcon = params.folderIcon ?? null;
    this.dashboardOrganisationTypeId = params.dashboardOrganisationTypeId ?? null;
    this.dashboardOrganisationTypeLabel = params.dashboardOrganisationTypeLabel ?? null;
    this.organisationTypeId = params.organisationTypeId ?? null;
    this.organisationTypeLabel = params.organisationTypeLabel ?? null;
    this.dashboardId = params.dashboardId ?? null;
  }
}

export interface DashboardExplorerElementDetailsDTO extends DashboardExplorerElementInfosDTO {  
    // DashboardOrganisation & DashboardShallow
    folderId: string | null;
    folderLabel: string | null;
    folderIcon: string | null;
  
    // DashboardShallow
    dashboardOrganisationTypeId: string | null;
    dashboardOrganisationTypeLabel: string | null;
  
    // DashboardOrganisationType
    organisationTypeId: string | null;
    organisationTypeLabel: string | null;

    // Dashboard
    dashboardId: string | null;  
}
