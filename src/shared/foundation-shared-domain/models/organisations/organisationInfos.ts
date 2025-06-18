export class OrganisationInfos {
    id: string;
    organisationTypeId: string;
    imageId: string | null;
    label: string;
    userOrganisationsCount: number;
    adminId: string | null;
    adminName: string | null;

    constructor(params: OrganisationInfosDTO) {
        this.id = params.id;
        this.organisationTypeId = params.organisationTypeId;
        this.imageId = params.imageId;
        this.label = params.label;
        this.userOrganisationsCount = params.userOrganisationsCount;
        this.adminId = params.adminId;
        this.adminName = params.adminName;
    }
}

export interface OrganisationInfosDTO {
    id: string;
    organisationTypeId: string;
    imageId: string | null;
    label: string;
    userOrganisationsCount: number;
    adminId: string | null;
    adminName: string | null;
}

export interface OrganisationFilters {
    search?: string | null;
}