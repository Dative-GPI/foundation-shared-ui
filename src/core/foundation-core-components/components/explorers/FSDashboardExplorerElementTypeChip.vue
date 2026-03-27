<template>
  <FSChip
    :label="chipLabel"
    :color="ColorEnum.Light"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import type { DashboardExplorerElementType } from "@dative-gpi/foundation-shared-domain/enums";
import { dashboardExplorerElementTypeLabel } from "@dative-gpi/foundation-core-components/utils";

import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

export default defineComponent({
  name: "FSDashboardExplorerElementTypeChip",
  components: {
    FSChip
  },
  props: {
    type: {
      type: Number as PropType<DashboardExplorerElementType>,
      required: true
    }
  },
  setup(props) {
    const chipLabel = computed(() => dashboardExplorerElementTypeLabel(props.type));

    return {
      chipLabel,
      ColorEnum
    };
  }
});
</script>
