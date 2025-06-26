export class OrganisationInfos {
  id: string;
  organisationTypeId: string;
  imageId: string | null;
  label: string;
  userOrganisationsCount: number;
  adminId: string | null;
  adminName: string | null;
  currentOrganisationId?: string | null; // Optional, used in the context of the current organisation

  constructor(params: OrganisationInfosDTO) {
    this.id = params.id;
    this.organisationTypeId = params.organisationTypeId;
    this.imageId = params.imageId;
    this.label = params.label;
    this.userOrganisationsCount = params.userOrganisationsCount;
    this.adminId = params.adminId;
    this.adminName = params.adminName;
    this.currentOrganisationId = params.currentOrganisationId || null; // Default to null if not provided
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
  currentOrganisationId?: string | null; // Optional, used in the context of the current organisation
}

export interface OrganisationFilters {
  search?: string | null;
}