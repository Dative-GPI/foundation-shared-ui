
export class SceneInfos {
  id: string;
  label: string;
  icon: string;
  description: string;
  color: string;
  sceneTargets: SceneTarget[];
  defferedCount: number;
  actionGroup: ActionGroup;
}

export class SceneTarget {
  id: string;
  value: string|number|boolean;
  deviceId: string;
}