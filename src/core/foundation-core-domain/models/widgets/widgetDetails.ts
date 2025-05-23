import type { WidgetTemplateType } from '@dative-gpi/foundation-shared-domain/enums/widgetTemplates';
import type { WidgetInfosDTO } from "./widgetInfos";
import { WidgetInfos } from "./widgetInfos";

export class WidgetDetails extends WidgetInfos {
    constructor(params: WidgetDetailsDTO) {
        super(params);
    }
}

export interface WidgetDetailsDTO extends WidgetInfosDTO {
}

export interface CreateWidgetDTO {
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