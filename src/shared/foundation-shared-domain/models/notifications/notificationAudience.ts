import type { Scope } from "../../enums";

export class NotificationAudience {
  id: string;
  notificationId: string;
  targetId: string;
  targetScope: Scope;


  constructor(params: NotificationAudienceDTO) {
    this.id = params.id;
    this.notificationId = params.notificationId;
    this.targetId = params.targetId;
    this.targetScope = params.targetScope as Scope;
  }
}

export interface NotificationAudienceDTO {
  id: string;
  notificationId: string;
  targetId: string;
  targetScope: number;
}