import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { ConnectivityStatus } from "@dative-gpi/foundation-shared-domain/enums";

const { $tr } = useTranslationsProvider();

export const connectivityLabel = ((status: ConnectivityStatus): string => {
    switch (status) {
      case ConnectivityStatus.Connected:          return $tr("ui.connectivity-status.connected", "Connected");
      case ConnectivityStatus.PartiallyConnected: return $tr("ui.connectivity-status.partially-connected", "Partially connected");
      case ConnectivityStatus.AlmostOffline:      return $tr("ui.connectivity-status.almost-offline", "Almost offline");
      default:                                    return $tr("ui.connectivity-status.offline", "Offline");
    }
});

export const connectivityIcon = ((status: ConnectivityStatus): string | null => {
    switch (status) {
      case ConnectivityStatus.Connected:          return "mdi-wifi-check";
      case ConnectivityStatus.PartiallyConnected: return "mdi-wifi-alert";
      case ConnectivityStatus.AlmostOffline:      return "mdi-wifi-strength-1-alert";
      case ConnectivityStatus.Offline:            return "mdi-wifi-strength-off-outline";
      default:                                    return null;
    }
});

export const connectivityColor = ((status: ConnectivityStatus): string | null => {
    switch (status) {
      case ConnectivityStatus.Connected:          return "#6DE038";
      case ConnectivityStatus.PartiallyConnected:
      case ConnectivityStatus.AlmostOffline:      return "#E5A139";
      case ConnectivityStatus.Offline:            return "#E01212";
      default:                                    return null;
    }
});