import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { ColorEnum } from "../models";
import { JobState } from "@dative-gpi/foundation-shared-domain/enums";

const { $tr } = useTranslationsProvider();

export const getColorByState = (state: number | JobState | undefined) => {
  switch (state) {
    case JobState.Succeeded:
      return ColorEnum.Success;
    case JobState.Failed:
      return ColorEnum.Error;
    default:
      return ColorEnum.Primary;
  }
};

export const getIconByState = (state: number | JobState | undefined) => {
  switch (state) {
    case JobState.Succeeded:
      return 'mdi-check-circle-outline';
    case JobState.Failed:
      return 'mdi-alert-circle-outline';
    default:
      return 'mdi-alert-circle-outline';
  }
};

export const getLabelByState = (state: number | JobState | undefined) => {
  switch (state) {
    case JobState.Succeeded:
      return $tr('ui.common.success', 'Success');
    case JobState.Failed:
      return $tr('ui.common.error', 'Error');
    default:
      return $tr('ui.common.executed', 'Executed');
  }
};