import { type UserType, type UserValidityState } from "@dative-gpi/foundation-shared-domain/enums";

export class ServiceAccountOrganisationInfos {
  id: string;
  userId: string;
  organisationId: string;
  languageCode: string;
  timeZoneId: string;
  roleId: string | null;
  roleLabel: string;
  roleIcon: string;
  imageId: string | null;
  userType: UserType;
  validity: UserValidityState;
  label: string;
  description: string;
  tags: string[];

  constructor(params: ServiceAccountOrganisationInfosDTO) {
    this.id = params.id;
    this.userId = params.userId;
    this.organisationId = params.organisationId;
    this.languageCode = params.languageCode;
    this.timeZoneId = params.timeZoneId;
    this.roleId = params.roleId;
    this.roleLabel = params.roleLabel;
    this.roleIcon = params.roleIcon;
    this.imageId = params.imageId;
    this.userType = params.userType;
    this.validity = params.validity;
    this.label = params.label;
    this.description = params.description;
    this.tags = params.tags && params.tags.slice() || [];
  }
}

export interface ServiceAccountOrganisationInfosDTO {
  id: string;
  userId: string;
  organisationId: string;
  languageCode: string;
  timeZoneId: string;
  roleId: string | null;
  roleLabel: string;
  roleIcon: string;
  imageId: string | null;
  userType: UserType;
  validity: UserValidityState;
  label: string;
  description: string;
  tags: string[] | null;
}

export interface ServiceAccountOrganisationFilters {
  search?: string | null;
}