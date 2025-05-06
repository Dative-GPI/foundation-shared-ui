import { RoleTranslation, type RoleTranslationDTO } from '@dative-gpi/foundation-core-domain/models';
import { RoleOrganisationInfos, type RoleOrganisationInfosDTO } from "./roleOrganisationInfos";
import { type RoleType } from "@dative-gpi/foundation-shared-domain/enums";

export class RoleOrganisationDetails extends RoleOrganisationInfos {
  labelDefault: string;
  description: string;
  descriptionDefault: string;
  translations: RoleTranslation[];

  constructor(params: RoleOrganisationDetailsDTO) {
    super(params);

    this.labelDefault = params.labelDefault;
    this.description = params.description;
    this.descriptionDefault = params.descriptionDefault;
    this.translations = params.translations.map(t => new RoleTranslation(t));
  }
}

export interface RoleOrganisationDetailsDTO extends RoleOrganisationInfosDTO {
  labelDefault: string;
  description: string;
  descriptionDefault: string;
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