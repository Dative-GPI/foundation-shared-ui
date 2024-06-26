import type { ChartPresetFilterDTO, CreateChartPresetFilterDTO } from "../charts/chartPresetFilter";
import { ChartPresetFilter } from "../charts/chartPresetFilter";
import type { ChartVariableDTO, CreateChartVariableDTO } from "../charts/chartVariable";
import { ChartVariable } from "../charts/chartVariable";
import type { ChartOrganisationInfosDTO } from "./chartOrganisationInfos";
import { ChartOrganisationInfos } from "./chartOrganisationInfos";
import type { ChartPresetDTO, CreateChartPresetDTO } from "../charts/chartPreset";
import { ChartPreset } from "../charts/chartPreset";
import type { ChartTranslationDTO } from "../charts/chartTranslation";
import { ChartTranslation } from "../charts/chartTranslation";
import type { ChartAxisDTO, CreateChartAxisDTO } from "../charts/chartAxis";
import { ChartAxis } from "../charts/chartAxis";
import type { ChartPlotDTO, CreateChartPlotDTO } from "../charts/chartPlot";
import { ChartPlot } from "../charts/chartPlot";
import type { ColorSets } from "../enums/chartEnums";

export class ChartOrganisationDetails extends ChartOrganisationInfos {
  labelDefault: string;
  titleDefault: string;
  colorSet: ColorSets;
  colorSeed: string;
  xAxis: ChartAxis | null;
  aggregates: boolean | null;
  dynamicVariables: boolean | null;
  chartVariables: ChartVariable[];
  chartPresets: ChartPreset[];
  chartPresetFilters: ChartPresetFilter[];
  chartPlots: ChartPlot[];
  translations: ChartTranslation[];

  constructor(params: ChartOrganisationDetailsDTO) {
    super(params);

    this.labelDefault = params.labelDefault;
    this.titleDefault = params.titleDefault;
    this.colorSet = params.colorSet as ColorSets;
    this.colorSeed = params.colorSeed;
    this.xAxis = params.xAxis ?
        new ChartAxis(params.xAxis) : null;
    this.aggregates = params.aggregates;
    this.dynamicVariables = params.dynamicVariables;
    this.chartVariables = params.chartVariables.map(cv => new ChartVariable(cv));
    this.chartPresets = params.chartPresets.map(cp => new ChartPreset(cp));
    this.chartPresetFilters = params.chartPresetFilters.map(cpf => new ChartPresetFilter(cpf));
    this.chartPlots = params.chartPlots.map(cp => new ChartPlot(cp));
    this.translations = params.translations.map(t => new ChartTranslation(t));
  }
}

export interface ChartOrganisationDetailsDTO extends ChartOrganisationInfosDTO {
  labelDefault: string;
  titleDefault: string;
  colorSet: number;
  colorSeed: string;
  xAxis: ChartAxisDTO | null;
  aggregates: boolean | null;
  dynamicVariables: boolean | null;
  chartVariables: ChartVariableDTO[];
  chartPresets: ChartPresetDTO[];
  chartPresetFilters: ChartPresetFilterDTO[];
  chartPlots: ChartPlotDTO[];
  translations: ChartTranslationDTO[];
}

export interface CreateChartOrganisationDTO {
  chartCategoryId: string | null;
  imageId: string | null;
  image: string | null;
  labelDefault: string;
  titleDefault: string;
  code: string;
  icon: string;
  tags: string[];
  translations: ChartTranslationDTO[];
}

export interface UpdateChartOrganisationDTO {
  chartCategoryId: string | null;
  imageId: string | null;
  image: string | null;
  labelDefault: string;
  titleDefault: string;
  code: string;
  icon: string;
  tags: string[];
  multiple: boolean;
  chartType: number;
  colorSet: number;
  colorSeed: string;
  xAxis: CreateChartAxisDTO | null;
  aggregates: boolean | null;
  dynamicVariables: boolean | null;
  chartVariables: CreateChartVariableDTO[];
  chartPresets: CreateChartPresetDTO[];
  chartPresetFilters: CreateChartPresetFilterDTO[];
  chartPlots: CreateChartPlotDTO[];
  translations: ChartTranslationDTO[];
}