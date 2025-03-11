import type { EntityType } from '@dative-gpi/foundation-shared-domain/enums';
import { Address, type AddressDTO } from "@dative-gpi/foundation-shared-domain/models";

export class LocationInfos {
  id: string;
  organisationId: string;
  icon: string;
  code: string;
  color: string;
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
    this.color = params.color;
    this.label = params.label;
    this.tags = params.tags.slice();
    this.address = new Address(params.address);
    this.modelsIds = params.modelsIds.slice();
    this.deviceOrganisationsIds = params.deviceOrganisationsIds.slice();
    this.deviceOrganisationsCount = params.deviceOrganisationsCount;
  }
}

export interface LocationInfosDTO {
  id: string;
  organisationId: string;
  icon: string;
  code: string;
  color: string;
  label: string;
  tags: string[];
  address: AddressDTO;
  modelsIds: string[];
  deviceOrganisationsIds: string[];
  deviceOrganisationsCount: number;
}

export interface LocationFilters {
  locationsIds?: string[] | null;
  modelsIds?: string[] | null;
  search?: string | null;
  entityType?: EntityType | null;
  entitiesIds?: string[] | null;
}