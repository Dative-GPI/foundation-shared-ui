import type { CreateDashboardShallowEntityPresetDTO, DashboardShallowEntityPresetInfosDTO } from "../dashboardShallowEntityPresets";
import { DashboardShallowEntityPresetInfos } from "../dashboardShallowEntityPresets";
import type { CreateDashboardShallowDatePresetDTO, DashboardShallowDatePresetInfosDTO } from "../dashboardShallowDatePresets";
import { DashboardShallowDatePresetInfos } from "../dashboardShallowDatePresets";
import type { CreateDashboardShallowVariableDTO, DashboardShallowVariableInfosDTO } from "../dashboardShallowVariables";
import { DashboardShallowVariableInfos } from "../dashboardShallowVariables";
import type { DashboardEntityPresetInfosDTO } from "../dashboardEntityPresets";
import { DashboardEntityPresetInfos } from "../dashboardEntityPresets";
import type { DashboardDatePresetInfosDTO } from "../dashboardDatePresets";
import { DashboardDatePresetInfos } from "../dashboardDatePresets";
import type { DashboardVariableInfosDTO } from "../dashboardVariables";
import { DashboardVariableInfos } from "../dashboardVariables";
import type { DashboardShallowInfosDTO } from "./dashboardShallowInfos";
import { DashboardShallowInfos } from "./dashboardShallowInfos";
import type { DashboardTranslationDTO } from "../dashboards";
import { DashboardTranslation } from "../dashboards";
import type { WidgetInfosDTO } from "../widgets/widgetInfos";
import { WidgetInfos } from "../widgets/widgetInfos";
import type { PathCrumbDTO } from "../shared/pathCrumb";
import { PathCrumb } from "../shared/pathCrumb";

export class DashboardShallowDetails extends DashboardShallowInfos {
  labelDefault: string;
  path: PathCrumb[];
  overrideEntityPresetCode: string | null;
  overrideDatePresetCode: string | null;
  overrideVariableCode: string | null;
  overrideDatePresets: DashboardShallowDatePresetInfos[];
  overrideEntityPresets: DashboardShallowEntityPresetInfos[];
  overrideVariables: DashboardShallowVariableInfos[];
  translations: DashboardTranslation[];
  entityPresetCode: string | null;
  datePresetCode: string | null;
  variableCode: string | null;
  datePresets: DashboardDatePresetInfos[];
  entityPresets: DashboardEntityPresetInfos[];
  variables: DashboardVariableInfos[];
  widgets: WidgetInfos[];

  constructor(params: DashboardShallowDetailsDTO) {
    super(params);

    this.labelDefault = params.labelDefault;
    this.path = params.path.map(dto => new PathCrumb(dto)).sort((a, b) => b.index - a.index);
    this.overrideEntityPresetCode = params.overrideEntityPresetCode;
    this.overrideDatePresetCode = params.overrideDatePresetCode;
    this.overrideVariableCode = params.overrideVariableCode;
    this.overrideDatePresets = params.overrideDatePresets.map(dto => new DashboardShallowDatePresetInfos(dto));
    this.overrideEntityPresets = params.overrideEntityPresets.map(dto => new DashboardShallowEntityPresetInfos(dto));
    this.overrideVariables = params.overrideVariables.map(dto => new DashboardShallowVariableInfos(dto));
    this.translations = params.translations.map(t => new DashboardTranslation(t));
    this.entityPresetCode = params.entityPresetCode;
    this.datePresetCode = params.datePresetCode;
    this.variableCode = params.variableCode;
    this.datePresets = params.datePresets.map(dto => new DashboardDatePresetInfos(dto));
    this.entityPresets = params.entityPresets.map(dto => new DashboardEntityPresetInfos(dto));
    this.variables = params.variables.map(dto => new DashboardVariableInfos(dto));
    this.widgets = params.widgets.map(dto => new WidgetInfos(dto));
  }
}

export interface DashboardShallowDetailsDTO extends DashboardShallowInfosDTO {
  labelDefault: string;
  path: PathCrumbDTO[];
  overrideEntityPresetCode: string | null;
  overrideDatePresetCode: string | null;
  overrideVariableCode: string | null;
  overrideDatePresets: DashboardShallowDatePresetInfosDTO[];
  overrideEntityPresets: DashboardShallowEntityPresetInfosDTO[];
  overrideVariables: DashboardShallowVariableInfosDTO[];
  translations: DashboardTranslationDTO[];
  dashboardId: string;
  scope: number;
  entityPresetCode: string | null;
  datePresetCode: string | null;
  variableCode: string | null;
  datePresets: DashboardDatePresetInfosDTO[];
  entityPresets: DashboardEntityPresetInfosDTO[];
  variables: DashboardVariableInfosDTO[];
  widgets: WidgetInfosDTO[];
}

export interface CreateDashboardShallowDTO {
  dashboardOrganisationTypeId: string;
}

export interface UpdateDashboardShallowDTO {
  folderId: string | null;
  imageId: string | null;
  image: string | null;
  labelDefault: string;
  code: string;
  icon: string;
  tags: string[];
  overrideEntityPresetCode: string | null;
  overrideDatePresetCode: string | null;
  overrideVariableCode: string | null;
  overrideDatePresets: CreateDashboardShallowDatePresetDTO[];
  overrideEntityPresets: CreateDashboardShallowEntityPresetDTO[];
  overrideVariables: CreateDashboardShallowVariableDTO[];
  translations: DashboardTranslationDTO[];
}

export interface ChangeDashboardShallowFolderDTO {
  folderId: string | null;
}