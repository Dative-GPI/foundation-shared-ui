import { type MessageType } from "../../enums/messages";
import { isoToEpoch } from "../../tools/datesTools";
import { Scope } from "../../enums/applications";
import { Criticity } from "../../enums/alerts";
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
  timestamp: number;
  acknowledged: boolean | null;
  acknowledgingTimestamp: number | null;

  constructor(params: NotificationInfosDTO) {
    this.id = params.id;
    this.title = params.title;
    this.body = params.body;
    this.pageUrl = params.pageUrl;
    this.audiences = params.audiences.map((a: NotificationAudience) => new NotificationAudience(a));
    this.organisationId = params.organisationId;
    this.type = params.type as MessageType;
    this.criticity = params.criticity as Criticity;
    this.timestamp = isoToEpoch(params.timestamp);
    this.acknowledged = params.acknowledged;
    this.acknowledgingTimestamp = params.acknowledgingTimestamp ?
      isoToEpoch(params.acknowledgingTimestamp) : null;
  }

  static getFromAudience = (
    notifications: NotificationInfos[],
    showPublic: boolean,
    criticity: Criticity,
    organisationId?: string | null,
    userId?: string | null,
    organisationTypeId?: string | null
  ): NotificationInfos[] => notifications.filter((n: NotificationInfos) => {
    if (n.acknowledged) {
      return false;
    }
    if (![Criticity.None, n.criticity].includes(criticity)) {
      return false;
    }

    return n.audiences.some(a => {
      switch (a.targetScope) {
        case Scope.OrganisationType:
          return organisationTypeId && a.targetId === organisationTypeId;
        case Scope.Organisation:
        case Scope.UserOrganisation:
          return organisationId && n.organisationId && n.organisationId === organisationId;
        case Scope.User:
          return userId && a.targetId === userId;
        case Scope.Application:
        case Scope.Public:
          return showPublic;
        default:
          return false;
      }
    });
  });

  static getForDrawer = (
    notifications: NotificationInfos[],
    organisationId: string,
    userId: string,
    criticity: Criticity = Criticity.None,
    organisationTypeId?: string | null
  ): NotificationInfos[] => NotificationInfos.getFromAudience(notifications, true, criticity, organisationId, userId, organisationTypeId);

  static getForCard = (
    notifications: NotificationInfos[],
    organisationId: string,
    criticity: Criticity = Criticity.None,
    organisationTypeId?: string | null
  ): NotificationInfos[] => NotificationInfos.getFromAudience(notifications, false, criticity, organisationId, null, organisationTypeId);
}

export interface NotificationInfosDTO {
  id: string;
  title: string;
  body: string;
  pageUrl: string;
  audiences: NotificationAudience[];
  organisationId?: string;
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