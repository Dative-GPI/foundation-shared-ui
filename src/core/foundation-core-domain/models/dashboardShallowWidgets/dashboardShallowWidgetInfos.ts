import _ from "lodash";

const clean = <T>(meta: T): T => {
  const newMeta = _.cloneDeepWith(meta, (value) => {
    if (typeof value === "string") {
      try {
        return JSON.parse(value as string);
      }
      catch {
        return value
      }
    }
  });
  return newMeta;
}

export class DashboardShallowWidgetInfos {
  widgetId: string;
  meta: { [key: string]: string };

  constructor(params: DashboardShallowWidgetInfosDTO) {
    this.widgetId = params.widgetId;
    this.meta = clean(params.meta);
  }
}
  
export interface DashboardShallowWidgetInfosDTO {
  widgetId: string;
  meta: { [key: string]: string };
}