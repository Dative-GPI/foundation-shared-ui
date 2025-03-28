import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { UserType, UserValidityState } from "@dative-gpi/foundation-shared-domain/enums";

const { $tr } = useTranslationsProvider();

export const userTypeLabel = (type: UserType): string => {
  switch (type) {
    case UserType.User:           return $tr("ui.common.user", "User");
    case UserType.ServiceAccount: return $tr("ui.common.service-account", "Service account");
    case UserType.Extension:      return $tr("ui.common.extension", "Extension");
    default:                      return "";
  }
};

export const userTypeIcon = (type: UserType): string => {
  switch (type) {
    case UserType.User:           return "mdi-account-multiple-outline";
    case UserType.ServiceAccount: return "mdi-puzzle-outline";
    case UserType.Extension:      return "mdi-cog-outline";
    default:                      return "";
  }
};

export const userValidityLabel = (validity: UserValidityState): string => {
  switch (validity) {
    case UserValidityState.InvitationNotSent: return $tr("ui.user-validity.invitation-not-sent", "Invitation not sent");
    case UserValidityState.InvitationSent:    return $tr("ui.user-validity.invitation-sent", "Invitation sent");
    case UserValidityState.AccountCreated:    return $tr("ui.user-validity.account-created", "Not validated");
    case UserValidityState.AccountValidated:  return $tr("ui.user-validity.account-validated", "Validated");
    default:                                  return "";
  }
}