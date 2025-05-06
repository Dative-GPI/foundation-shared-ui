export class RoleTranslation {
  languageCode: string;
  label: string;
  description: string;

  constructor(params: RoleTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
    this.description = params.description;
  }
}

export interface RoleTranslationDTO {
  languageCode: string;
  label: string;
  description: string;
}