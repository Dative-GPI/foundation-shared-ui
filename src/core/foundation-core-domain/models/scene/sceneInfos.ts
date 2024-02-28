
export class SceneInfos {
  id: string;
  label: string;
  icon: string;
  description: string;
  color: string;
  sceneTargets: SceneTarget[];
  sceneSchedules: SceneSchedule[];

  constructor(params: SceneInfosDTO) {
    this.id = params.id;
    this.label = params.label;
    this.icon = params.icon;
    this.description = params.description;
    this.color = params.color;
    this.sceneTargets = params.sceneTargets;
  }
}

export interface SceneInfosDTO {
  id: string;
  label: string;
  icon: string;
  description: string;
  color: string;
  sceneTargets: SceneTarget[];
}

export class SceneDetails extends SceneInfos {
  constructor(params: SceneDetailsDTO){
    super(params);
  }
}

export interface SceneDetailsDTO extends SceneInfosDTO {
}

export interface CreateSceneDTO {
  label: string;
  icon: string;
  description: string;
  color: string;
  sceneTargets: SceneTarget[];
}

export interface UpdateSceneDTO {
  id: string;
  label: string;
  icon: string;
  description: string;
  color: string;
  sceneTargets: SceneTarget[];
}

export class SceneTarget {
  id: string;
  value: string | number | boolean;
  deviceId: string;
}

export class SceneSchedule {
  id: string;
  timestamp: number;
}