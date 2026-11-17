export class ModelStatusInfos {
  id: string;
  modelId: string;
  dataCategoryId: string;
  dataCategoryLabel: string;
  dataDefinitionId: string;
  dataDefinitionLabel: string;
  groupById: string | null;
  groupByLabel: string | null;
  label: string;
  index: number;
  lifetime: number;
  timeToLive: number;
  showDefault: boolean;
  iconDefault: string | null;
  colorDefault: string | null;
  visible: boolean;

  constructor(params: ModelStatusInfosDTO) {
    this.id = params.id;
    this.modelId = params.modelId;
    this.dataCategoryId = params.dataCategoryId;
    this.dataCategoryLabel = params.dataCategoryLabel;
    this.dataDefinitionId = params.dataDefinitionId;
    this.dataDefinitionLabel = params.dataDefinitionLabel;
    this.groupById = params.groupById;
    this.groupByLabel = params.groupByLabel;
    this.label = params.label;
    this.index = params.index;
    this.lifetime = params.lifetime;
    this.timeToLive = params.timeToLive;
    this.showDefault = params.showDefault;
    this.iconDefault = params.iconDefault;
    this.colorDefault = params.colorDefault;
    this.visible = params.visible;
  }
}

export interface ModelStatusInfosDTO {
  id: string;
  modelId: string;
  dataCategoryId: string;
  dataCategoryLabel: string;
  dataDefinitionId: string;
  dataDefinitionLabel: string;
  groupById: string | null;
  groupByLabel: string | null;
  label: string;
  index: number;
  lifetime: number;
  timeToLive: number;
  showDefault: boolean;
  iconDefault: string | null;
  colorDefault: string | null;
  visible: boolean;
}

export interface ModelStatusFilters {
  modelId?: string | null;
  search?: string | null;
}
