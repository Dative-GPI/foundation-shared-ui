import { type MessageType } from "../../enums/messages";
import { isoToEpoch } from "../../tools/datesTools";
import type { Criticity } from "../../enums/alerts";
import { NotificationAudience } from "./notificationAudience";

export class NotificationInfos {
  id: string;
  title: string;
  body: string;
  pageUrl: string;
  audiences: NotificationAudience[];
  organisationId?: string;
  type: MessageType;
  criticity: Criticity;
  imageId: string | null;
  icon: string;
  color: string;
  timestamp: number;
  acknowledged: boolean | null;
  acknowledgingTimestamp: number | null;

  constructor(params: NotificationInfosDTO) {
    this.id = params.id;
    this.title = params.title;
    this.body = params.body;
    this.pageUrl = params.pageUrl;
    this.imageId = params.imageId;
    this.icon = params.icon;
    this.color = params.color;
    this.audiences = params.audiences.map((a: NotificationAudience) => new NotificationAudience(a));
    this.organisationId = params.organisationId;
    this.type = params.type as MessageType;
    this.criticity = params.criticity as Criticity;
    this.timestamp = isoToEpoch(params.timestamp);
    this.acknowledged = params.acknowledged;
    this.acknowledgingTimestamp = params.acknowledgingTimestamp ?
      isoToEpoch(params.acknowledgingTimestamp) : null;
  }
}

export interface NotificationInfosDTO {
  id: string;
  title: string;
  body: string;
  pageUrl: string;
  audiences: NotificationAudience[];
  organisationId?: string;
  imageId: string | null;
  icon: string;
  color: string;
  type: number;
  criticity: number;
  timestamp: string;
  acknowledged: boolean | null;
  acknowledgingTimestamp: string | null;
}

export interface NotificationFilters {
  type?: MessageType | null;
  criticity?: Criticity | null;
}