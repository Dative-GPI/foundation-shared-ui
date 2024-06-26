import type { ChartSerieTranslationDTO, CreateChartSerieTranslationDTO } from "./chartSerieTranslation";
import { ChartSerieTranslation } from "./chartSerieTranslation";
import type { ChartValueRangeDTO, CreateChartValueRangeDTO } from "./chartValueRange";
import { ChartValueRange } from "./chartValueRange";
import type { ChartTimeStepDTO, CreateChartTimeStepDTO } from "./chartTimeStep";
import { ChartTimeStep } from "./chartTimeStep";
import type { ChartOperandDTO, CreateChartOperandDTO } from "./chartOperand";
import { ChartOperand } from "./chartOperand";

export class ChartSerie {
  id: string;
  chartPlotId: string;
  serieType: number;
  plotPer?: number;
  shift?: ChartTimeStep;
  step?: ChartTimeStep;
  stacked?: boolean;
  offsets?: number[];
  useOperation?: boolean;
  operation?: string;
  operationUnit?: string;
  operationGrouped?: number;
  useTrendLine?: boolean;
  planningType?: number;
  timeInterval?: number;
  useLimit?: boolean;
  limit?: number;
  heatRule?: number;
  minColor?: string;
  minValue?: number;
  maxColor?: string;
  maxValue?: number;
  heatRanges?: ChartValueRange[];
  fixedColor?: string;
  icon?: string;
  decimalPlaces?: number;
  displayAs?: number;
  hideLabels?: boolean;
  useOther?: boolean;
  otherThreshold?: number;
  baseBreakdown?: number;
  chartOperands: ChartOperand[];
  label?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  labelDefault?: string;
  xAxisLabelDefault?: string;
  yAxisLabelDefault?: string;
  translations?: ChartSerieTranslation[];

  constructor(params: ChartSerieDTO) {
    this.id = params.id;
    this.chartPlotId = params.chartPlotId;
    this.serieType = params.serieType;
    this.plotPer = params.plotPer;
    this.shift = params.shift ? new ChartTimeStep(params.shift) : undefined;
    this.step = params.step ? new ChartTimeStep(params.step) : undefined;
    this.stacked = params.stacked;
    this.offsets = params.offsets;
    this.useOperation = params.useOperation;
    this.operation = params.operation;
    this.operationUnit = params.operationUnit;
    this.operationGrouped = params.operationGrouped;
    this.useTrendLine = params.useTrendLine;
    this.planningType = params.planningType;
    this.timeInterval = params.timeInterval;
    this.useLimit = params.useLimit;
    this.limit = params.limit;
    this.heatRule = params.heatRule;
    this.minColor = params.minColor;
    this.minValue = params.minValue;
    this.maxColor = params.maxColor;
    this.maxValue = params.maxValue;
    this.heatRanges = params.heatRanges?.map(r => new ChartValueRange(r));
    this.fixedColor = params.fixedColor;
    this.icon = params.icon;
    this.decimalPlaces = params.decimalPlaces;
    this.displayAs = params.displayAs;
    this.hideLabels = params.hideLabels;
    this.useOther = params.useOther;
    this.otherThreshold = params.otherThreshold;
    this.baseBreakdown = params.baseBreakdown;
    this.chartOperands = params.chartOperands.map(o => new ChartOperand(o));
    this.label = params.label;
    this.xAxisLabel = params.xAxisLabel;
    this.yAxisLabel = params.yAxisLabel;
    this.labelDefault = params.labelDefault;
    this.xAxisLabelDefault = params.xAxisLabelDefault;
    this.yAxisLabelDefault = params.yAxisLabelDefault;
    this.translations = params.translations?.map(t => new ChartSerieTranslation(t));
  }
}

export interface ChartSerieDTO {
  id: string;
  chartPlotId: string;
  serieType: number;
  plotPer?: number;
  shift?: ChartTimeStepDTO;
  step?: ChartTimeStepDTO;
  stacked?: boolean;
  offsets?: number[];
  useOperation?: boolean;
  operation?: string;
  operationUnit?: string;
  operationGrouped?: number;
  useTrendLine?: boolean;
  planningType?: number;
  timeInterval?: number;
  useLimit?: boolean;
  limit?: number;
  heatRule?: number;
  minColor?: string;
  minValue?: number;
  maxColor?: string;
  maxValue?: number;
  heatRanges?: ChartValueRangeDTO[];
  fixedColor?: string;
  icon?: string;
  decimalPlaces?: number;
  displayAs?: number;
  hideLabels?: boolean;
  useOther?: boolean;
  otherThreshold?: number;
  baseBreakdown?: number;
  chartOperands: ChartOperandDTO[];
  label?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  labelDefault?: string;
  xAxisLabelDefault?: string;
  yAxisLabelDefault?: string;
  translations?: ChartSerieTranslationDTO[];
}

export interface CreateChartSerieDTO {
  serieType: number;
  plotPer?: number;
  shift?: CreateChartTimeStepDTO;
  step?: CreateChartTimeStepDTO;
  stacked?: boolean;
  offsets?: number[];
  useOperation?: boolean;
  operation?: string;
  operationUnit?: string;
  operationGrouped?: number;
  useTrendLine?: boolean;
  planningType?: number;
  timeInterval?: number;
  useLimit?: boolean;
  limit?: number;
  heatRule?: number;
  minColor?: string;
  maxColor?: string;
  heatRanges?: CreateChartValueRangeDTO[];
  icon?: string;
  decimalPlaces?: number;
  displayAs?: number;
  useOther?: boolean;
  otherThreshold?: number;
  chartOperands: CreateChartOperandDTO[];
  labelDefault?: string;
  xAxisLabelDefault?: string;
  yAxisLabelDefault?: string;
  translations?: CreateChartSerieTranslationDTO[];
}