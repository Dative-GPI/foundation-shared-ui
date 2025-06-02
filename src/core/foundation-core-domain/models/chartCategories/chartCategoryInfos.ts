export class ChartCategoryInfos {
  id: string;
  label: string;
  code: string;
  index: number;

  constructor(params: ChartCategoryInfosDTO) {
    this.id = params.id;
    this.label = params.label;
    this.code = params.code;
    this.index = params.index;
  }
}

export interface ChartCategoryInfosDTO {
  id: string;
  label: string;
  code: string;
  index: number;
}

export interface ChartCategoryFilters {
  search?: string | null;
}