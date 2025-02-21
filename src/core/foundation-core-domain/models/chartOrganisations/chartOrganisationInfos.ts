import type { ChartModelLabelDTO } from "../charts/chartModelLabel";
import { ChartModelLabel } from "../charts/chartModelLabel";
import type { ApplicationScope } from "@dative-gpi/foundation-shared-domain/enums";
import type { ChartType, PlotPer } from "@dative-gpi/foundation-shared-domain/enums";

export class ChartOrganisationInfos {
  id: string;
  imageId: string | null;
  chartId: string;
  organisationId: string;
  chartCategoryId: string | null;
  chartCategoryLabel: string | null;
  scope: ApplicationScope;
  label: string;
  title: string;
  code: string;
  icon: string;
  draft: boolean;
  tags: string[];
  multiple: boolean;
  chartType: ChartType;
  modelsLabels: ChartModelLabel[];
  dataDefinitionsIds: string[];

  constructor(params: ChartOrganisationInfosDTO) {
    this.id = params.id;
    this.imageId = params.imageId;
    this.chartId = params.chartId;
    this.organisationId = params.organisationId;
    this.chartCategoryId = params.chartCategoryId;
    this.chartCategoryLabel = params.chartCategoryLabel;
    this.scope = params.scope;
    this.label = params.label;
    this.title = params.title;
    this.code = params.code;
    this.icon = params.icon;
    this.draft = params.draft;
    this.tags = params.tags.slice();
    this.multiple = params.multiple;
    this.chartType = params.chartType;
    this.modelsLabels = params.modelsLabels.map((modelLabel) => new ChartModelLabel(modelLabel));
    this.dataDefinitionsIds = params.dataDefinitionsIds.slice();
  }
}

export interface ChartOrganisationInfosDTO {
  id: string;
  imageId: string | null;
  chartId: string;
  organisationId: string;
  chartCategoryId: string | null;
  chartCategoryLabel: string | null;
  scope: ApplicationScope;
  label: string;
  title: string;
  code: string;
  icon: string;
  draft: boolean;
  tags: string[];
  multiple: boolean;
  chartType: ChartType;
  modelsLabels: ChartModelLabelDTO[];
  dataDefinitionsIds: string[];
}

export interface ChartOrganisationFilters {
  modelsIds?: string[] | null;
  plotPers?: PlotPer[] | null;
  search?: string | null;
  draft?: boolean | null;
  deprecatedChartId?: string | null;
  deviceOrganisationsIds?: string[] | null
}