import { defineAsyncComponent } from "vue";

import { MagicFieldType } from "@dative-gpi/foundation-shared-domain/enums";

const FIELDS = {
  [MagicFieldType.NumberField]    : defineAsyncComponent(() => import("@dative-gpi/foundation-shared-components/components/fields/FSNumberField.vue")),
  [MagicFieldType.TextField]      : defineAsyncComponent(() => import("@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue")),
  [MagicFieldType.Switch]         : defineAsyncComponent(() => import("@dative-gpi/foundation-shared-components/components/FSSwitch.vue")),
  [MagicFieldType.DateTimeField]  : defineAsyncComponent(() => import("@dative-gpi/foundation-shared-components/components/fields/FSDateTimeField.vue")),
  [MagicFieldType.IconField]      : defineAsyncComponent(() => import("@dative-gpi/foundation-shared-components/components/fields/FSIconField.vue")),
  [MagicFieldType.TimeField]      : defineAsyncComponent(() => import("@dative-gpi/foundation-shared-components/components/fields/FSTimeField.vue")),
  [MagicFieldType.TimeStepField]  : defineAsyncComponent(() => import("@dative-gpi/foundation-shared-components/components/fields/FSTimeStepField.vue")),
  [MagicFieldType.PlotPerField]   : defineAsyncComponent(() => import("@dative-gpi/foundation-core-components/components/selects/FSPlotPerSelector.vue")),
};

export const useMagicFieldProvider = () => {
  const get = (code: keyof typeof FIELDS) => {
    return FIELDS[code];
  };

  return {
    get
  };
};