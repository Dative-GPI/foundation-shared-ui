import type { ApplicationScope } from "@dative-gpi/foundation-shared-domain/enums";
import type { CreateDashboardDatePresetDTO, CreateDashboardEntityPresetDTO, CreateDashboardVariableDTO, DashboardTranslationDTO } from "@dative-gpi/foundation-core-domain/models";

export interface DashboardSettings {
  folderId: string | null;
  imageId: string | null;
  image: string | null;
  labelDefault: string;
  locked: boolean;
  code: string;
  colors: string[];
  icon: string;
  tags: string[];
  translations: DashboardTranslationDTO[];
  entityPresetCode: string | null;
  datePresetCode: string | null;
  variableCode: string | null;
  datePresets: CreateDashboardDatePresetDTO[];
  entityPresets: CreateDashboardEntityPresetDTO[];
  variables: CreateDashboardVariableDTO[];
  scope: ApplicationScope;
}