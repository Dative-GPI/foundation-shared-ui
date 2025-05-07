import type { ActionType } from "@dative-gpi/foundation-shared-domain/enums";

export class ActionInfos {
    extensionId: string | null;
    actionType: ActionType;
    path: string;
    uri: string;
    label: string;
    icon: string;
    color: string | null;
    
    constructor(params: ActionInfosDTO) {
        this.extensionId = params.extensionId;
        this.actionType = params.actionType;
        this.path = params.path;
        this.uri = params.uri;
        this.label = params.label;
        this.icon = params.icon;
        this.color = params.color ?? null;
    }
}

export interface ActionInfosDTO {
    extensionId: string | null;
    actionType: ActionType;
    path: string;
    uri: string;
    label: string;
    icon: string;
    color?: string | null;
}

export interface ActionFilters {
    path: string;
}