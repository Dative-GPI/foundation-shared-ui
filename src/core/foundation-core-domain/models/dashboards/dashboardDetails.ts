import { DashboardInfos, DashboardInfosDTO } from "./dashboardInfos";
import { WidgetInfos, WidgetInfosDTO } from "../widgets/widgetInfos";
import { SelectedEntities } from "../enums/sharedEnums";
import { AutoRefresh } from "../enums/dashboardEnums";

export class DashboardDetails extends DashboardInfos {
    singleEntity: boolean;
    dynamicEntities: boolean;
    globalSelectedEntities: SelectedEntities;
    globalEntitiesIds: string[];
    dynamicDates: boolean;
    globalStartDate: string;
    globalEndDate: string;
    useAutoRefresh: boolean;
    autoRefresh: AutoRefresh;
    widgets: WidgetInfos[];

    constructor(params: DashboardDetailsDTO) {
        super(params);

        this.singleEntity = params.singleEntity;
        this.dynamicEntities = params.dynamicEntities;
        this.globalSelectedEntities = params.globalSelectedEntities as SelectedEntities;
        this.globalEntitiesIds = params.globalEntitiesIds.slice();
        this.dynamicDates = params.dynamicDates;
        this.globalStartDate = params.globalStartDate;
        this.globalEndDate = params.globalEndDate;
        this.useAutoRefresh = params.useAutoRefresh;
        this.autoRefresh = params.autoRefresh;
        this.widgets = params.widgets.map(dto => new WidgetInfos(dto));
    }
}

export interface DashboardDetailsDTO extends DashboardInfosDTO {
    singleEntity: boolean;
    dynamicEntities: boolean;
    globalSelectedEntities: number;
    globalEntitiesIds: string[];
    dynamicDates: boolean;
    globalStartDate: string;
    globalEndDate: string;
    useAutoRefresh: boolean;
    autoRefresh: number;
    widgets: WidgetInfosDTO[];
}