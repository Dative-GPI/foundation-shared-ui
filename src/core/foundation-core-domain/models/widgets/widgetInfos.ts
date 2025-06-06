import type { WidgetTemplateType } from '@dative-gpi/foundation-shared-domain/enums/widgetTemplates';
import _ from "lodash";

const clean = <T>(meta: T): T => {
  const newMeta = _.cloneDeepWith(meta, (value) => {
    if (typeof value === "string") {
      try {
        return JSON.parse(value as string);
      } catch {
        return value
      }
    }
  });
  return newMeta;
}

export class WidgetInfos {
    id: string;
    hiddenCode: string;
    templateType: WidgetTemplateType;
    templateId: string;
    hideBorders: boolean;
    width: number;
    height: number;
    x: number;
    y: number;
    targetScreenSize: "s" | "m" | "l" | "xl";
    meta: { [key: string]: string };

    constructor(params: WidgetInfosDTO) {
        this.id = params.id;
        this.hiddenCode = params.hiddenCode;
        this.templateType = params.templateType;
        this.templateId = params.templateId;
        this.hideBorders = params.hideBorders;
        this.width = params.width;
        this.height = params.height;
        this.x = params.x;
        this.y = params.y;
        this.targetScreenSize = params.targetScreenSize;
        this.meta = clean(params.meta);
    }
}
  
export interface WidgetInfosDTO {
    id: string;
    hiddenCode: string;
    templateType: WidgetTemplateType;
    templateId: string;
    hideBorders: boolean;
    width: number;
    height: number;
    x: number;
    y: number;
    targetScreenSize: "s" | "m" | "l" | "xl";
    meta: { [key: string]: string };
}