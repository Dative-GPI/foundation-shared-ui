import { Address, AddressDTO } from "./address";

export class LocationInfos {
    id: string;
    organisationId: string;
    icon: string;
    code: string;
    label: string;
    tags: string[];
    address: Address;
    modelsIds: string[];
    deviceOrganisationsIds: string[];
    deviceOrganisationsCount: number;

    constructor(params: LocationInfosDTO) {
        this.id = params.id;
        this.organisationId = params.organisationId;
        this.icon = params.icon;
        this.code = params.code;
        this.label = params.label;
        this.tags = params.tags.slice();
        this.address = new Address(params.address);
        this.modelsIds = params.modelsIds.slice();
        this.deviceOrganisationsIds = params.deviceOrganisationsIds.slice();
        this.deviceOrganisationsCount = params.deviceOrganisationsCount;
    }
}

export class LocationInfosDTO {
    id: string;
    organisationId: string;
    icon: string;
    code: string;
    label: string;
    tags: string[];
    address: AddressDTO;
    modelsIds: string[];
    deviceOrganisationsIds: string[];
    deviceOrganisationsCount: number;
}

export interface LocationFilters {
    locationsIds?: string[];
    modelsIds?: string[];
    search?: string;
}