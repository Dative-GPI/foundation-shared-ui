<template>
  <v-menu
    :closeOnContentClick="false"
    v-model="menu"
  >
    <template
      #activator="{ props }"
    >
      <FSColorIcon
        class="fs-stopclick"
        size="m"
        :color="$props.statusGroup.color"
        @click.prevent.stop
        v-bind="props"
      >
        {{ $props.statusGroup.icon }}
      </FSColorIcon>
    </template>
    <FSStatusCard
      :modelStatus="$props.modelStatus"
      :statusGroup="$props.statusGroup"
      @close="menu = false"
    />
  </v-menu>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { defineComponent, ref } from "vue";

import type { FSDeviceStatusGroup, FSModelStatus } from "@dative-gpi/foundation-shared-components/models";

import FSStatusCard from "./FSStatusCard.vue";
import FSColorIcon from "../FSColorIcon.vue";

export default defineComponent({
  name: "FSStatus",
  components: {
    FSStatusCard,
    FSColorIcon
  },
  props: {
    modelStatus: {
      type: Object as PropType<FSModelStatus>,
      required: true
    },
    statusGroup: {
      type: Object as PropType<FSDeviceStatusGroup>,
      required: true
    }
  },
  setup() {
    const menu = ref(false);

    return {
      menu
    };
  }
});
</script>