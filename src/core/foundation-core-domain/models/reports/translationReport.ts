export class TranslationReport {
  languageCode: string;
  label: string;
  body: string;

  constructor(params: TranslationReportDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
    this.body = params.body;
  }
}

export interface TranslationReportDTO {
  languageCode: string;
  label: string;
  body: string;
}