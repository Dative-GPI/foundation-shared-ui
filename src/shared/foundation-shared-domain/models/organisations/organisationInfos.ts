import { Address, type AddressDTO } from '@/shared/foundation-shared-domain/models/locations';

export class OrganisationInfos {
  id: string;
  organisationTypeId: string;
  imageId: string | null;
  label: string;
  address: Address | null;
  userOrganisationsCount: number;
  adminId: string | null;
  adminName: string | null;
  currentUserOrganisationId: string | null;

  constructor(params: OrganisationInfosDTO) {
    this.id = params.id;
    this.organisationTypeId = params.organisationTypeId;
    this.imageId = params.imageId;
    this.label = params.label;
    this.address = params.address ? new Address(params.address) : null;
    this.userOrganisationsCount = params.userOrganisationsCount;
    this.adminId = params.adminId;
    this.adminName = params.adminName;
    this.currentUserOrganisationId = params.currentUserOrganisationId;
  }
}

export interface OrganisationInfosDTO {
  id: string;
  organisationTypeId: string;
  imageId: string | null;
  label: string;
  address?: AddressDTO;
  userOrganisationsCount: number;
  adminId: string | null;
  adminName: string | null;
  currentUserOrganisationId: string | null;
}

export interface OrganisationFilters {
  search?: string | null;
}