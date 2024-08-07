import { type Criticity } from "@dative-gpi/foundation-shared-domain/models";
import { utcToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

import { type NotificationType } from "../enums/notificationEnums";

export class NotificationInfos {
  id: string;
  title: string;
  body: string;
  pageUrl: string;
  timestamp: number;
  criticity: Criticity;
  acknowledged: boolean | null;
  acknowledgingTimestamp: number | null;

  constructor(params: NotificationInfosDTO) {
    this.id = params.id;
    this.title = params.title;
    this.body = params.body;
    this.pageUrl = params.pageUrl;
    this.timestamp = utcToEpoch(params.timestamp);
    this.criticity = params.criticity as Criticity;
    this.acknowledged = params.acknowledged;
    this.acknowledgingTimestamp = params.acknowledgingTimestamp ?
      utcToEpoch(params.acknowledgingTimestamp) : null;
  }
}

export interface NotificationInfosDTO {
  id: string;
  title: string;
  body: string;
  pageUrl: string;
  timestamp: string;
  criticity: number;
  acknowledged: boolean | null;
  acknowledgingTimestamp: string | null;
}

export interface NotificationFilters {
  type?: NotificationType | null;
  acknowledged?: boolean | null;
}