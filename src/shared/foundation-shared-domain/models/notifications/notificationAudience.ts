import type { Scope } from "../../enums";

export class NotificationAudience {
  id: string;
  targetId: string;
  targetScope: Scope;


  constructor(params: NotificationAudienceDTO) {
    this.id = params.id;
    this.targetId = params.targetId;
    this.targetScope = params.targetScope as Scope;
  }
}

export interface NotificationAudienceDTO {
  id: string;
  targetId: string;
  targetScope: number;
}

export interface NotificationAudienceFilters {
  targetScope?: Scope | null;
  targetId?: string | null;
}