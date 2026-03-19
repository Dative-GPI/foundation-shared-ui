import type { ModelInfosDTO } from "../models/modelInfos";
import { ModelInfos } from "../models/modelInfos";

export class DataCategoryInfos {
  id: string;
  applicationId: string;
  code: string;
  label: string;
  correlated: boolean;
  models: ModelInfos[];

  constructor(params: DataCategoryInfosDTO) {
    this.id = params.id;
    this.applicationId = params.applicationId;
    this.code = params.code;
    this.label = params.label;
    this.correlated = params.correlated;
    this.models = params.models?.map((m) => new ModelInfos(m)) ?? [];
  }
}

export interface DataCategoryInfosDTO {
  id: string;
  applicationId: string;
  code: string;
  label: string;
  correlated: boolean;
  models?: ModelInfosDTO[];
}

export interface DataCategoryFilters {
  modelId?: string | null;
  correlated?: boolean | null;
  search?: string | null;
}