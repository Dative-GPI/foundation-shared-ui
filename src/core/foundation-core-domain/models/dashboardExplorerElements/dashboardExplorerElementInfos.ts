import type { ApplicationScope, DashboardExplorerElementType } from "@dative-gpi/foundation-shared-domain/enums";
import { DashboardExplorerElementType as DashboardExplorerElementTypeEnum } from "@dative-gpi/foundation-shared-domain/enums";

import { PathCrumb, type PathCrumbDTO } from "../shared/pathCrumb";
import type { DashboardOrganisationInfos } from "../dashboardOrganisations/dashboardOrganisationInfos";
import type { DashboardShallowInfos } from "../dashboardShallows/dashboardShallowInfos";
import type { DashboardOrganisationTypeInfos } from "../dashboardOrganisationTypes/dashboardOrganisationTypeInfos";
import type { FolderInfos } from "../folders/folderInfos";

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
  // Dashboard
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

    this.scope = params.scope ?? null;
    this.locked = params.locked ?? null;
  }

  static fromDashboardOrganisation = (d: DashboardOrganisationInfos): DashboardExplorerElementInfos => ({
    ...d,
    type: DashboardExplorerElementTypeEnum.DashboardOrganisation,
    parentId: d.folderId,
    parentLabel: d.folderLabel,
    parentIcon: d.folderIcon,
    recursiveFoldersIds: null,
    recursiveDashboardOrganisationsIds: null,
    recursiveDashboardShallowsIds: null,
    path: [],
    scope: d.scope,
    locked: d.locked
  });

  static fromDashboardShallow = (d: DashboardShallowInfos): DashboardExplorerElementInfos => ({
    ...d,
    type: DashboardExplorerElementTypeEnum.DashboardShallow,
    parentId: d.folderId,
    parentLabel: d.folderLabel,
    parentIcon: d.folderIcon,
    recursiveFoldersIds: null,
    recursiveDashboardOrganisationsIds: null,
    recursiveDashboardShallowsIds: null,
    path: [],
    locked: null
  });

  static fromDashboardOrganisationType = (d: DashboardOrganisationTypeInfos): DashboardExplorerElementInfos => ({
    ...d,
    type: DashboardExplorerElementTypeEnum.DashboardOrganisationType,
    parentId: null,
    parentLabel: null,
    parentIcon: null,
    recursiveFoldersIds: null,
    recursiveDashboardOrganisationsIds: null,
    recursiveDashboardShallowsIds: null,
    path: [],
    scope: d.scope,
    locked: d.locked
  });

  static fromFolder = (f: FolderInfos): DashboardExplorerElementInfos => ({
    ...f,
    type: DashboardExplorerElementTypeEnum.Folder,
    scope: null,
    locked: null
  });
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

  scope?: ApplicationScope | null;
  locked?: boolean | null;
}

export interface DashboardExplorerElementFilters {
  dashboardExplorerElementsIds?: string[] | null;
  ancestorId?: string | null;
  parentId?: string | null;
  root?: boolean | null;
  search?: string | null;
  types?: DashboardExplorerElementType[] | null;
}
