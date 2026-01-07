import type { AggregationType, DataTable, DatePart, DurationType, EntityType, ExecutionMode, FilterType, MergeMode, PlotPer, RootMode, SortDirection, TimeUnit } from "@dative-gpi/foundation-shared-domain/enums";
import type { DateVariableDTO } from "@dative-gpi/foundation-core-domain/models";

export interface DataFiltersDTO {
  startDate: string;
  endDate: string;
  timeOffset: number;
  dateVariables: DateVariableDTO[];
  mode: RootMode;
  node?: DataNodeDTO;
  leaf?: DataLeafDTO;
  rawLeaf?: DataLeafRawDTO;
}

export interface DataNodeDTO {
  label: string;
  aggregation: AggregationType;
  aggregateByEntity: PlotPer;
  aggregationTimeStep?: TimeStepDTO;
  nodeMode: MergeMode;
  formula: string;
  unit: string;
  take: number;
  executionMode: ExecutionMode;
  executionIndex: number;
  nodes: DataNodeDTO[];
  leaves: DataLeafDTO[];
  rawLeaves: DataLeafRawDTO[];
  codeTemplate: string;
  labelTemplate: string;
  correlationId: string;
  filters: string[];
  formulaResults: DataNodeFormulaResultDTO[];
  mergeMode: MergeMode;
}

export interface DataLeafDTO {
  correlationId: string;
  entitiesIds: string[];
  entityType: EntityType;
  labelTemplate?: string;
  aggregateByEntity: PlotPer;
  aggregationTimeStep?: TimeStepDTO;
  duration: DurationType;
  durationTimeStep?: TimeStepDTO;
  durationDataDefinitionId?: string;
  durationDataScale: number;
  dataDefinitions: DataLeafDataItemDTO[];
  groupByDataDefinitionIds: string[];
  take: number;
  removeRedundants: boolean;
  dataCriterias: DataCriteriaDTO[];
  timeCriterias: TimeCriteriaDTO[];
  executionIndex: number;
}

export interface DataLeafRawDTO {
  correlationId: string;
  entitiesIds: string[];
  entityType: EntityType;
  labelTemplate: string;
  duration: DurationType;
  durationDataDefinitionId: string;
  durationDataScale: number;
  dataDefinitions: DataLeafRawDataItemDTO[];
  take: number;
  removeRedundants: boolean;
  dataCriterias: DataCriteriaDTO[];
  timeCriterias: TimeCriteriaDTO[];
  executionIndex: number;
}

export interface TimeStepDTO {
  value: number;
  unit: TimeUnit
}

export interface DataNodeFormulaResultDTO {
  code: string;
  unit: string;
  label: string;
  dataType: DataTable;
  sort: SortDirection;
}

export interface DataLeafDataItemDTO {
  dataDefinitionId: string;
  codeTemplate: string;
  label: string;
  unit: string;
  sort: SortDirection;
  aggregation: AggregationType;
  code: string;
}

export interface DataCriteriaDTO {
  dataDefinitionId: string;
  operator: FilterType;
  values: string[];
}

export interface TimeCriteriaDTO {
  datePart: DatePart;
  operator: FilterType;
  values: number[];
}

export interface DataLeafRawDataItemDTO {
  dataDefinitionId: string;
  codeTemplate: string;
  label: string;
  unit: string;
  sort: SortDirection;
  code: string;
}

export interface DataSerieDTO {
  label: string;
  code: string;
  correlationId: string;
  meta: SerieDTO;
  datas: DataPointsDTO[];
}

export interface SerieDTO {
  entityId: string;
  entityLabel: string;
  valueUnits: string[];
  valueLabel: string[];
  valueCodes: string[];
  groupByValues: object[];
}

export interface DataPointsDTO {
  timestamp: number;
  closeTimeStamp: number;
  values: object[];
}