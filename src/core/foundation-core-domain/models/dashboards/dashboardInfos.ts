import type { ApplicationScope } from "@dative-gpi/foundation-shared-domain/enums";

export class DashboardInfos {
  id: string;
  scope: ApplicationScope;

  constructor(params: DashboardInfosDTO) {
    this.id = params.id;
    this.scope = params.scope as ApplicationScope;
  }
}

export interface DashboardInfosDTO {
  id: string;
  scope: number;
}