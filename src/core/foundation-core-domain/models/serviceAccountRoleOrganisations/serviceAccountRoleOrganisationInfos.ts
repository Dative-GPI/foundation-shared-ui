import { PermissionInfos, type PermissionInfosDTO } from "@dative-gpi/foundation-shared-domain/models";
import { type UserType } from "@dative-gpi/foundation-shared-domain/enums";

export class ServiceAccountRoleOrganisationInfos {
  id: string;
  roleId: string;
  organisationId: string;
  userType: UserType
  icon: string;
  code: string;
  label: string;
  tags: string[];
  permissions: PermissionInfos[];

  constructor(params: ServiceAccountRoleOrganisationInfosDTO) {
    this.id = params.id;
    this.roleId = params.roleId;
    this.organisationId = params.organisationId;
    this.userType = params.userType;
    this.icon = params.icon;
    this.code = params.code;
    this.label = params.label;
    this.tags = params.tags.slice();
    this.permissions = params.permissions.map(dto => new PermissionInfos(dto));
  }
}

export interface ServiceAccountRoleOrganisationInfosDTO {
  id: string;
  roleId: string;
  organisationId: string;
  userType: UserType
  icon: string;
  code: string;
  label: string;
  tags: string[];
  permissions: PermissionInfosDTO[];
}

export interface ServiceAccountRoleOrganisationFilters {
  search?: string | null;
}