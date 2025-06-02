import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { AlertStatus, Criticity } from "@dative-gpi/foundation-shared-domain/enums";
import { ColorEnum } from "../models"
import { getTimeBestString } from "../utils";

const { $tr } = useTranslationsProvider();

export const AlertTools = {
  statusIcon(value: AlertStatus): string {
    switch (value) {
      case AlertStatus.Pending: return "mdi-timer-outline";
      case AlertStatus.Untriggered: return "mdi-timer-off-outline";
      case AlertStatus.Unresolved: return "mdi-alert-circle-outline";
      case AlertStatus.Resolved: return "mdi-check-circle-outline";
      case AlertStatus.Expired: return "mdi-clock-outline";
      case AlertStatus.Triggered: return "mdi-alert-circle-outline";
      case AlertStatus.Abandoned: return "mdi-cancel"
      default: return "";
    }
  },
  statusLabel(value: AlertStatus): string {
    switch (value) {
      case AlertStatus.Pending:
        return $tr('ui.alert-status.pending', 'Pending');
      case AlertStatus.Untriggered:
        return $tr('ui.alert-status.untriggered', 'Untriggered');
      case AlertStatus.Unresolved:
        return $tr('ui.alert-status.unresolved', 'Unresolved');
      case AlertStatus.Resolved:
        return $tr('ui.alert-status.resolved', 'Resolved');
      case AlertStatus.Expired:
        return $tr('ui.alert-status.expired', 'Expired');
      case AlertStatus.Triggered:
        return $tr('ui.alert-status.triggered', 'Triggered');
      case AlertStatus.Abandoned:
        return $tr('ui.alert-status.abandoned', 'Abandoned');
      default: return "";
    }
  },
  statusAlternativeColor(value: AlertStatus): string {
    switch (value) {
      case AlertStatus.Pending:
      case AlertStatus.Unresolved:
      case AlertStatus.Triggered: return "#da2d2d";
      default: return "#1e56e5";
    }
  },
  statusAlternativeIcon(value: AlertStatus): string {
    switch (value) {
      case AlertStatus.Pending: return "timer";
      case AlertStatus.Untriggered: return "timer_off";
      case AlertStatus.Unresolved: return "error_outline";
      case AlertStatus.Resolved: return "check_circle_outline";
      case AlertStatus.Expired: return "schedule";
      case AlertStatus.Triggered: return "error_outline";
      case AlertStatus.Abandoned: return "block"
      default: return "";
    }
  },
  criticityColor(value: Criticity): ColorEnum {
    switch (value) {
      case Criticity.Warning: return ColorEnum.Warning;
      case Criticity.Error: return ColorEnum.Error;
      case Criticity.Information: return ColorEnum.Primary;
      default: return ColorEnum.Light;
    }
  },
  criticityIcon(value: Criticity): string {
    switch (value) {
      case Criticity.Warning: return "mdi-alert-outline";
      case Criticity.Error: return "mdi-alert-circle-outline";
      default: return "mdi-information-outline";
    }
  },
  criticityLabel(value: Criticity): string {
    switch (value) {
      case Criticity.Warning: return $tr('ui.common.warning', 'Warning');
      case Criticity.Error: return $tr('ui.common.error', 'Error');
      default: return $tr('ui.common.information', 'Information');
    }
  },
  statusColor(status: AlertStatus): ColorEnum {
    switch (status) {
      case AlertStatus.None:
      case AlertStatus.Pending:
      case AlertStatus.Expired:
        return ColorEnum.Warning;
      case AlertStatus.Unresolved:
      case AlertStatus.Triggered:
        return ColorEnum.Error;
      case AlertStatus.Resolved:
      case AlertStatus.Untriggered:
        return ColorEnum.Success;
      default:
        return ColorEnum.Warning;
    }
  },

  formatValue(value: string) {
    const n = parseFloat(value);

    if (isNaN(n)) {
      return value;
    }

    if (Number.isInteger(n)) {
      return n;
    }
    else {
      return n.toFixed(2);
    }
  }

}

export const prettyDuration = (n: number | undefined) => {
  if (n == null) { return "00m 00s"; }
  const day = Math.floor(n / 24 / 60 / 60);
  const hours = Math.floor((n - day * 24 * 60 * 60) / 3600);
  const minutes = Math.floor((n - day * 24 * 60 * 60 - hours * 60 * 60) / 60);
  const seconds = Math.floor(n - day * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);

  return day > 0 ?
    `${getTimeBestString(day * 24 * 60 * 60)} ${hours > 0 ? getTimeBestString(hours * 60 * 60) : ''} ${minutes > 0 ? getTimeBestString(minutes * 60) : ''} ${getTimeBestString(seconds)}`
    : hours > 0
      ? `${getTimeBestString(hours * 60 * 60)} ${minutes > 0 ? getTimeBestString(minutes * 60) : ''} ${getTimeBestString(seconds)}`
      : `${minutes > 0 ? getTimeBestString(minutes * 60) : ''} ${getTimeBestString(seconds)}`;
};