import { RoleTranslation, type RoleTranslationDTO } from '@/core/foundation-core-domain/models';
import { RoleOrganisationInfos, type RoleOrganisationInfosDTO } from "./roleOrganisationInfos";
import { type RoleType } from "@dative-gpi/foundation-shared-domain/enums";

export class RoleOrganisationDetails extends RoleOrganisationInfos {
  description: string;
  translations: RoleTranslation[];

  constructor(params: RoleOrganisationDetailsDTO) {
    super(params);

    this.description = params.description;
    this.translations = params.translations.map(t => new RoleTranslation(t));
  }
}

export interface RoleOrganisationDetailsDTO extends RoleOrganisationInfosDTO {
  description: string;
  translations: RoleTranslationDTO[];
}

export interface CreateRoleOrganisationDTO {
  roleTemplateType: RoleType;
  roleTemplateId: string | null;
  icon: string;
  code: string;
  label: string;
  description: string;
  tags: string[];
  translations: RoleTranslationDTO[];
}

export interface UpdateRoleOrganisationDTO {
  icon: string;
  code: string;
  label: string;
  description: string;
  tags: string[];
  permissionsIds: string[];
  translations: RoleTranslationDTO[];
}