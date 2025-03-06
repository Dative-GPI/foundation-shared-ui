import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { ColorEnum } from "../models";
import { JobHangfireState } from "@dative-gpi/foundation-shared-domain/enums";

const { $tr } = useTranslationsProvider();

export const getColorByState = (state: number | JobHangfireState | undefined) => {
  switch (state) {
    case JobHangfireState.Succeeded:
      return ColorEnum.Success;
    case JobHangfireState.Failed:
      return ColorEnum.Error;
    default:
      return ColorEnum.Primary;
  }
};

export const getIconByState = (state: number | JobHangfireState | undefined) => {
  switch (state) {
    case JobHangfireState.Succeeded:
      return 'mdi-check-circle-outline';
    case JobHangfireState.Failed:
      return 'mdi-alert-circle-outline';
    default:
      return 'mdi-alert-circle-outline';
  }
};

export const getLabelByState = (state: number | JobHangfireState | undefined) => {
  switch (state) {
    case JobHangfireState.Succeeded:
      return $tr('ui.common.success', 'Success');
    case JobHangfireState.Failed:
      return $tr('ui.common.error', 'Error');
    default:
      return $tr('ui.common.executed', 'Executed');
  }
};