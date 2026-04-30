export class ModelInfos {
    id: string;
    imageId: string | null;
    code: string;
    label: string;
    connectable: boolean;

    constructor(params: ModelInfosDTO) {
        this.id = params.id;
        this.imageId = params.imageId ?? null;
        this.code = params.code;
        this.label = params.label;
        this.connectable = params.connectable;
    }
}

export interface ModelInfosDTO {
    id: string;
    imageId?: string | null;
    imageBlurHash?: string | null;
    imageHeight?: number | null;
    imageWidth?: number | null;
    code: string;
    label: string;
    connectable: boolean;
}

export interface ModelFilters {
    modelsIds?: string[] | null;
    codes?: string[] | null;
    search?: string | null;
}