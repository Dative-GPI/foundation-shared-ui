import { type CreateDashboardShallowEntityPresetDTO, DashboardShallowEntityPresetInfos, type DashboardShallowEntityPresetInfosDTO } from "../dashboardShallowEntityPresets";
import { type CreateDashboardShallowDatePresetDTO, DashboardShallowDatePresetInfos, type DashboardShallowDatePresetInfosDTO } from "../dashboardShallowDatePresets";
import { type CreateDashboardShallowVariableDTO, DashboardShallowVariableInfos, type DashboardShallowVariableInfosDTO } from "../dashboardShallowVariables";
import { type CreateDashboardShallowWidgetDTO, DashboardShallowWidgetInfos, type DashboardShallowWidgetInfosDTO } from "../dashboardShallowWidgets";
import { DashboardEntityPresetInfos, type DashboardEntityPresetInfosDTO } from "../dashboardEntityPresets";
import { DashboardDatePresetInfos, type DashboardDatePresetInfosDTO } from "../dashboardDatePresets";
import { DashboardVariableInfos, type DashboardVariableInfosDTO } from "../dashboardVariables";
import { DashboardShallowInfos, type DashboardShallowInfosDTO } from "./dashboardShallowInfos";
import { DashboardTranslation, type DashboardTranslationDTO } from "../dashboards";
import { WidgetInfos, type WidgetInfosDTO } from "../widgets/widgetInfos";
import { PathCrumb, type PathCrumbDTO } from "../shared/pathCrumb";

export class DashboardShallowDetails extends DashboardShallowInfos {
  labelDefault: string;
  translations: DashboardTranslation[];
  path: PathCrumb[];
  
  entityPresetCode: string | null;
  datePresetCode: string | null;
  variableCode: string | null;
  defaultDatePresets: DashboardDatePresetInfos[];
  defaultEntityPresets: DashboardEntityPresetInfos[];
  defaultVariables: DashboardVariableInfos[];
  defaultWidgets: WidgetInfos[];
  
  overrideDatePresets: DashboardShallowDatePresetInfos[];
  overrideEntityPresets: DashboardShallowEntityPresetInfos[];
  overrideVariables: DashboardShallowVariableInfos[];
  overrideWidgets: DashboardShallowWidgetInfos[];

  get datePresets() : DashboardDatePresetInfos[] {
    return this.defaultDatePresets.map(d => {
      const override = this.overrideDatePresets.find(od => od.hiddenCode === d.hiddenCode);
      return override ? new DashboardDatePresetInfos({ ...d, ...override }) : d;
    });
  }

  get entityPresets() {
    return this.defaultEntityPresets.map(d => {
      const override = this.overrideEntityPresets.find(od => od.hiddenCode === d.hiddenCode);
      return override ? new DashboardEntityPresetInfos({ ...d, ...override }) : d;
    });
  }

  get variables() {
    return this.defaultVariables.map(d => {
      const override = this.overrideVariables.find(od => od.hiddenCode === d.hiddenCode);
      return override ? new DashboardVariableInfos({ ...d, ...override }) : d;
    });
  }

  get widgets() {
    return this.defaultWidgets.map(d => {
      const override = this.overrideWidgets.find(od => od.widgetId === d.id);
      return override ? new WidgetInfos({
        ...d,
        ...override,
        overridedMetas: d.meta
      }) : d;
    });
  }

  constructor(params: DashboardShallowDetailsDTO) {
    super(params);
    
    this.labelDefault = params.labelDefault;
    this.path = params.path.map(dto => new PathCrumb(dto)).sort((a, b) => b.index - a.index);
    this.translations = params.translations.map(t => new DashboardTranslation(t));
    
    this.overrideDatePresets = params.overrideDatePresets.map(dto => new DashboardShallowDatePresetInfos(dto));
    this.overrideEntityPresets = params.overrideEntityPresets.map(dto => new DashboardShallowEntityPresetInfos(dto));
    this.overrideVariables = params.overrideVariables.map(dto => new DashboardShallowVariableInfos(dto));
    this.overrideWidgets = params.overrideWidgets.map(dto => new DashboardShallowWidgetInfos(dto));

    this.entityPresetCode = params.entityPresetCode;
    this.datePresetCode = params.datePresetCode;
    this.variableCode = params.variableCode;
    this.defaultDatePresets = params.defaultDatePresets.map(dto => new DashboardDatePresetInfos(dto));
    this.defaultEntityPresets = params.defaultEntityPresets.map(dto => new DashboardEntityPresetInfos(dto));
    this.defaultVariables = params.defaultVariables.map(dto => new DashboardVariableInfos(dto));
    this.defaultWidgets = params.defaultWidgets.map(dto => new WidgetInfos(dto));
  }
}

export interface DashboardShallowDetailsDTO extends DashboardShallowInfosDTO {
  labelDefault: string;
  path: PathCrumbDTO[];
  overrideDatePresets: DashboardShallowDatePresetInfosDTO[];
  overrideEntityPresets: DashboardShallowEntityPresetInfosDTO[];
  overrideVariables: DashboardShallowVariableInfosDTO[];
  overrideWidgets: DashboardShallowWidgetInfosDTO[];
  translations: DashboardTranslationDTO[];
  dashboardId: string;
  scope: number;
  entityPresetCode: string | null;
  datePresetCode: string | null;
  variableCode: string | null;
  defaultDatePresets: DashboardDatePresetInfosDTO[];
  defaultEntityPresets: DashboardEntityPresetInfosDTO[];
  defaultVariables: DashboardVariableInfosDTO[];
  defaultWidgets: WidgetInfosDTO[];
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
  colors: string[];
  icon: string;
  tags: string[];
  overrideDatePresets: CreateDashboardShallowDatePresetDTO[];
  overrideEntityPresets: CreateDashboardShallowEntityPresetDTO[];
  overrideVariables: CreateDashboardShallowVariableDTO[];
  overrideWidgets: CreateDashboardShallowWidgetDTO[];
  translations: DashboardTranslationDTO[];
}

export interface ChangeDashboardShallowFolderDTO {
  folderId: string | null;
}