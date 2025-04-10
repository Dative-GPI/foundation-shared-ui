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
  hiddenCode: string;
  meta: { [key: string]: string };

  constructor(params: DashboardShallowWidgetInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.meta = clean(params.meta);
  }
}
  
export interface DashboardShallowWidgetInfosDTO {
  hiddenCode: string;
  meta: { [key: string]: string };
}