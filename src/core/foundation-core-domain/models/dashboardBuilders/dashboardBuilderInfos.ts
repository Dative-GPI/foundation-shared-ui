import { isoToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

export class DashboardBuilderInfos {
  id: string;
  createdByUserId: string | null;
  createdAt: number;
  alive: boolean;

  constructor(params: DashboardBuilderInfosDTO) {
    this.id = params.id;
    this.createdByUserId = params.createdByUserId;
    this.createdAt = isoToEpoch(params.createdAt);
    this.alive = params.alive;
  }
}

export interface DashboardBuilderInfosDTO {
  id: string;
  createdByUserId: string | null;
  createdAt: string;
  alive: boolean;
}

export interface DashboardBuilderFilters {
  createdByUserId?: string | null;
}
