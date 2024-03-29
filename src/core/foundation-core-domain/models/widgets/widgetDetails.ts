import { WidgetInfos, WidgetInfosDTO } from "./widgetInfos";

export class WidgetDetails extends WidgetInfos {
    constructor(params: WidgetDetailsDTO) {
        super(params);
    }
}

export interface WidgetDetailsDTO extends WidgetInfosDTO {
}

export interface CreateWidgetDTO {
    templateId: string;
    hideBorders: boolean;
    width: number;
    height: number;
    x: number;
    y: number;
    meta: { [key: string]: string };
}