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
        :color="$props.deviceConnectivity.color"
        @click.prevent.stop
        v-bind="props"
      >
        {{ $props.deviceConnectivity.icon }}
      </FSColorIcon>
    </template>
    <FSConnectivityCard
      :deviceConnectivity="$props.deviceConnectivity"
      @close="menu = false"
    />
  </v-menu>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { defineComponent, ref } from "vue";

import type { FSDeviceConnectivity } from "@dative-gpi/foundation-shared-components/models";

import FSConnectivityCard from "./FSConnectivityCard.vue";
import FSColorIcon from "../FSColorIcon.vue";

export default defineComponent({
  name: "FSConnectivity",
  components: {
    FSConnectivityCard,
    FSColorIcon
  },
  props: {
    deviceConnectivity: {
      type: Object as PropType<FSDeviceConnectivity>,
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