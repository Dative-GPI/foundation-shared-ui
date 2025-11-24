import _ from "lodash";

export class DashboardShallowWidgetInfos {
  hiddenCode: string;
  meta: { [key: string]: string };

  constructor(params: DashboardShallowWidgetInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.meta = _.cloneDeep(params.meta);
  }
}

export interface DashboardShallowWidgetInfosDTO {
  hiddenCode: string;
  meta: { [key: string]: string };
}