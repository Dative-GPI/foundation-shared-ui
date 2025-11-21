import { MessageType } from "@/shared/foundation-shared-domain/enums";


export const NotificationIconByMessageType = (messageType: MessageType): string => {
  switch (messageType) {
    case MessageType.AccountInvitation:
      return "mdi-account-clock-outline";
    case MessageType.AccountValidation:
      return "mdi-account-check-outline";
    case MessageType.AlertCreation:
      return "mdi-alert-outline";
    case MessageType.AlertResolution:
      return "mdi-alert-circle-check-outline";
    case MessageType.ConnectivityAlertCreation:
      return "mdi-wifi-strength-alert-outline";
    case MessageType.ConnectivityAlertResolution:
      return "mdi-wifi-check";
    case MessageType.OrganisationAdminElevation:
      return "mdi-account-edit-outline";
    case MessageType.OrganisationCreation:
      return "mdi-office-building-plus-outline";
    case MessageType.PasswordReinitialisation:
      return "mdi-lock-reset";

    case MessageType.UserApplicationAffectation:
    case MessageType.UserApplicationCreation:
    case MessageType.UserOrganisationAffectation:
    case MessageType.UserOrganisationCreation:
      return "mdi-account-plus-outline";

    case MessageType.Custom:
      return "mdi-bell-outline";
    default:
      return "mdi-information-outline";
  }
};