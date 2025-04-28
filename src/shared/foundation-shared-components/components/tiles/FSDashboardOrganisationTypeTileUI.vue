<template>
  <FSSimpleTileUI
    :bottomColor="color"
    :icon="$props.icon"
    v-bind="$attrs"
  >
    <template
      #append-info
    >
      <FSChip
        :label="$tr('ui.dashboard-type.organisation-type', 'Shared')"
        :color="ColorEnum.Light"
      />
    </template>
  </FSSimpleTileUI>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSimpleTileUI from "./FSSimpleTileUI.vue";
import FSChip from '@dative-gpi/foundation-shared-components/components/FSChip.vue';

export default defineComponent({
  name: "FSDashboardOrganisationTypeTileUI",
  components: {
    FSChip,
    FSSimpleTileUI
  },
  props: {
    bottomColor: {
      type: [Array, String] as PropType<ColorBase | ColorBase[]>,
      required: false,
      default: ColorEnum.Primary
    },
    icon: {
      type: String,
      required: false,
      default: "mdi-view-dashboard"
    }
  },
  setup(props){
    const color = computed(() => {
      if(Array.isArray(props.bottomColor) && !props.bottomColor.length) {
        return ColorEnum.Primary;
      }
      return props.bottomColor;
    });

    return {
      color,
      ColorEnum
    };
  }
});
</script>