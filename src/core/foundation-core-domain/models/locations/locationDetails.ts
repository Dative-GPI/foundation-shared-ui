import type { AddressDTO } from "@dative-gpi/foundation-shared-domain/models";

import type { LocationInfosDTO } from "./locationInfos";
import { LocationInfos } from "./locationInfos";

export class LocationDetails extends LocationInfos {
    description: string;

    constructor(params: LocationDetailsDTO) {
        super(params);

        this.description = params.description;
    }
}

export interface LocationDetailsDTO extends LocationInfosDTO {
    description: string;
}

export interface CreateLocationDTO {
    icon: string;
    code: string;
    label: string;
    description: string;
    tags: string[];
    address: AddressDTO | null;
}

export interface UpdateLocationDTO {
    icon: string;
    code: string;
    label: string;
    description: string;
    tags: string[];
    address: AddressDTO | null;
}