import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { DashboardExplorerElementType, DashboardType } from "@dative-gpi/foundation-shared-domain/enums";

const { $tr } = useTranslationsProvider();

export const dashboardTypeLabel = (type: DashboardType): string => {
  switch (type) {
    case DashboardType.None:             return $tr("ui.common.none", "None");
    case DashboardType.Organisation:     return $tr('ui.dashboard-type.shallow', 'Shallow copy');
    case DashboardType.Shallow:          return $tr("ui.common.custom", "Custom");
    case DashboardType.OrganisationType: return $tr("ui.common.shared", "Shared");
  }
};

export const dashboardTypeColor = (type: DashboardType): ColorBase => {
  switch (type) {
    case DashboardType.None:             return ColorEnum.Error;
    case DashboardType.Organisation:
    case DashboardType.Shallow:          return ColorEnum.Primary;
    case DashboardType.OrganisationType: return ColorEnum.Warning;
  }
};

export const dashboardExplorerElementTypeLabel = (type: DashboardExplorerElementType): string => {
  switch (type) {
    case DashboardExplorerElementType.Folder:                    return $tr("ui.common.folder", "Folder");
    case DashboardExplorerElementType.DashboardOrganisation:     return $tr("ui.common.custom", "Custom");
    case DashboardExplorerElementType.DashboardShallow:          return $tr("ui.dashboard-type.shallow", "Shallow copy");
    case DashboardExplorerElementType.DashboardOrganisationType: return $tr("ui.common.shared", "Shared");
    default:                                                     return $tr("ui.common.none", "None");
  }
};
