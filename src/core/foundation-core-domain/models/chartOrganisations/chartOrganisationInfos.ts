import type { ModelInfosDTO } from "../models/modelInfos";
import { ModelInfos } from "../models/modelInfos";
import type { ApplicationScope } from "@dative-gpi/foundation-shared-domain/enums";
import type { ChartType, PlotPer } from "@dative-gpi/foundation-shared-domain/enums";

export class ChartOrganisationInfos {
  id: string;
  imageId: string | null;
  chartId: string;
  organisationId: string;
  chartCategoryId: string | null;
  chartCategoryLabel: string | null;
  chartCategoryIndex: number | null;
  scope: ApplicationScope;
  label: string;
  title: string;
  code: string;
  icon: string;
  draft: boolean;
  tags: string[];
  multiple: boolean;
  chartType: ChartType;
  models: ModelInfos[];

  constructor(params: ChartOrganisationInfosDTO) {
    this.id = params.id;
    this.imageId = params.imageId;
    this.chartId = params.chartId;
    this.organisationId = params.organisationId;
    this.chartCategoryId = params.chartCategoryId;
    this.chartCategoryLabel = params.chartCategoryLabel;
    this.chartCategoryIndex = params.chartCategoryIndex;
    this.scope = params.scope;
    this.label = params.label;
    this.title = params.title;
    this.code = params.code;
    this.icon = params.icon;
    this.draft = params.draft;
    this.tags = params.tags.slice();
    this.multiple = params.multiple;
    this.chartType = params.chartType;
    this.models = params.models?.map((m) => new ModelInfos(m)) ?? [];
  }
}

export interface ChartOrganisationInfosDTO {
  id: string;
  imageId: string | null;
  chartId: string;
  organisationId: string;
  chartCategoryId: string | null;
  chartCategoryLabel: string | null;
  chartCategoryIndex: number | null;
  scope: ApplicationScope;
  label: string;
  title: string;
  code: string;
  icon: string;
  draft: boolean;
  tags: string[];
  multiple: boolean;
  chartType: ChartType;
  models?: ModelInfosDTO[];
}

export interface ChartOrganisationFilters {
  modelsIds?: string[] | null;
  plotPers?: PlotPer[] | null;
  search?: string | null;
  draft?: boolean | null;
  deprecatedChartId?: string | null;
  deviceOrganisationsIds?: string[] | null;
  dataDefinitionsIds?: string[] | null;
}