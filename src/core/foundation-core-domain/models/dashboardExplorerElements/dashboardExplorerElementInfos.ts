import type { ApplicationScope, DashboardExplorerElementType } from "@dative-gpi/foundation-shared-domain/enums";

import { PathCrumb, type PathCrumbDTO } from "../shared/pathCrumb";

export class DashboardExplorerElementInfos {
  id: string;
  imageId: string | null;
  label: string;
  code: string;
  icon: string;
  tags: string[];
  colors: string[];
  type: DashboardExplorerElementType;

  // Folder
  parentId: string | null;
  parentLabel: string | null;
  parentIcon: string | null;
  recursiveFoldersIds: string[] | null;
  recursiveDashboardOrganisationsIds: string[] | null;
  recursiveDashboardShallowsIds: string[] | null;
  path: PathCrumb[];

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
  scope: ApplicationScope | null;
  locked: boolean | null;

  constructor(params: DashboardExplorerElementInfosDTO) {
    this.id = params.id;
    this.imageId = params.imageId;
    this.label = params.label;
    this.code = params.code;
    this.icon = params.icon;
    this.tags = params.tags?.slice() ?? [];
    this.colors = params.colors?.slice() ?? [];
    this.type = params.type;

    this.parentId = params.parentId ?? null;
    this.parentLabel = params.parentLabel ?? null;
    this.parentIcon = params.parentIcon ?? null;
    this.recursiveFoldersIds = params.recursiveFoldersIds?.slice() ?? null;
    this.recursiveDashboardOrganisationsIds = params.recursiveDashboardOrganisationsIds?.slice() ?? null;
    this.recursiveDashboardShallowsIds = params.recursiveDashboardShallowsIds?.slice() ?? null;
    this.path = params.path?.map(dto => new PathCrumb({ ...dto })).sort((a, b) => b.index - a.index) ?? [];

    this.folderId = params.folderId ?? null;
    this.folderLabel = params.folderLabel ?? null;
    this.folderIcon = params.folderIcon ?? null;

    this.dashboardOrganisationTypeId = params.dashboardOrganisationTypeId ?? null;
    this.dashboardOrganisationTypeLabel = params.dashboardOrganisationTypeLabel ?? null;

    this.organisationTypeId = params.organisationTypeId ?? null;
    this.organisationTypeLabel = params.organisationTypeLabel ?? null;

    this.dashboardId = params.dashboardId ?? null;
    this.scope = params.scope ?? null;
    this.locked = params.locked ?? null;
  }
}

export interface DashboardExplorerElementInfosDTO {
  id: string;
  imageId: string | null;
  label: string;
  code: string;
  icon: string;
  tags: string[];
  colors: string[];
  type: DashboardExplorerElementType;

  parentId?: string | null;
  parentLabel?: string | null;
  parentIcon?: string | null;
  recursiveFoldersIds?: string[] | null;
  recursiveDashboardOrganisationsIds?: string[] | null;
  recursiveDashboardShallowsIds?: string[] | null;
  path?: PathCrumbDTO[];

  folderId?: string | null;
  folderLabel?: string | null;
  folderIcon?: string | null;

  dashboardOrganisationTypeId?: string | null;
  dashboardOrganisationTypeLabel?: string | null;

  organisationTypeId?: string | null;
  organisationTypeLabel?: string | null;

  dashboardId?: string | null;
  scope?: ApplicationScope | null;
  locked?: boolean | null;
}

export interface DashboardExplorerElementFilters {
  parentId?: string | null;
  root?: boolean | null;
  search?: string | null;
  types?: DashboardExplorerElementType[] | null;
}
