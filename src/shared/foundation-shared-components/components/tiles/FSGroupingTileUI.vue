<template>
  <FSSimpleTileUI
    :bottomColor="$props.bottomColor"
    v-bind="$attrs"
  >
    <template
      #append-info
    >
      <FSEntityCountBadge
        :label="$tr('ui.common.subgroupings', 'Categories')"
        :count="$props.subgroupingCount ?? 0"
        :color="ColorEnum.Primary"
      />
    </template>
  </FSSimpleTileUI>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";


import { ColorEnum, type ColorBase } from "@dative-gpi/foundation-shared-components/models";

import FSEntityCountBadge from "./FSEntityCountBadge.vue";
import FSSimpleTileUI from './FSSimpleTileUI.vue';

export default defineComponent({
  name: "FSGroupingTileUI",
  components: {
    FSSimpleTileUI,
    FSEntityCountBadge
  },
  props: {
    subgroupingCount: {
      type: Number,
      required: false,
      default: null
    },
    bottomColor: {
      type: [Array, String] as PropType<ColorBase | ColorBase[] | null>,
      required: false,
      default: null
    },

  },
  setup() {
    return {
      ColorEnum,
    };
  }
});
</script>