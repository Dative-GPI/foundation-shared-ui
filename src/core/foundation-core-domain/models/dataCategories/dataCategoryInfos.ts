import type { ModelInfosDTO } from "../models/modelInfos";
import { ModelInfos } from "../models/modelInfos";

export class DataCategoryInfos {
  id: string;
  code: string;
  label: string;
  correlated: boolean;
  models: ModelInfos[];

  constructor(params: DataCategoryInfosDTO) {
    this.id = params.id;
    this.code = params.code;
    this.label = params.label;
    this.correlated = params.correlated;
    this.models = params.models?.map((m) => new ModelInfos(m)) ?? [];
  }
}

export interface DataCategoryInfosDTO {
  id: string;
  code: string;
  label: string;
  correlated: boolean;
  models?: ModelInfosDTO[];
}

export interface DataCategoryFilters {
  modelsIds?: string[] | null;
  correlated?: boolean | null;
  search?: string | null;
}