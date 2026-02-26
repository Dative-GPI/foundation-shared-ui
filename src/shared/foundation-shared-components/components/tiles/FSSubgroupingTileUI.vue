<template>
  <FSSimpleTileUI
    :bottomColor="null"
    v-bind="$attrs"
  >
    <template
      #append-info
    >
      <FSEntityCountBadge
        :label="$tr('ui.common.devices', 'Devices')"
        :count="$props.deviceOrganisationsCount ?? 0"
        :color="ColorEnum.Primary"
      />
    </template>
  </FSSimpleTileUI>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSEntityCountBadge from "./FSEntityCountBadge.vue";
import FSSimpleTileUI from './FSSimpleTileUI.vue';

export default defineComponent({
  name: "FSSubgroupingTileUI",
  components: {
    FSSimpleTileUI,
    FSEntityCountBadge
  },
  props: {
    deviceOrganisationsCount: {
      type: Number,
      required: false,
      default: null
    }
  },
  inheritAttrs: false,
  setup() {
    return {
      ColorEnum,
    };
  }
});
</script>
