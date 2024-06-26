import type { ManufacturerInfosDTO } from "./manufacturerInfos";
import { ManufacturerInfos } from "./manufacturerInfos";

export class ManufacturerDetails extends ManufacturerInfos {
    description: string;

    constructor(params: ManufacturerDetailsDTO) {
        super(params);

        this.description = params.description;
    }
}

export interface ManufacturerDetailsDTO extends ManufacturerInfosDTO {
    description: string;
}