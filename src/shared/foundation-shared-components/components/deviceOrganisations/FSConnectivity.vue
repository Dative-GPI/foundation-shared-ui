<template>
  <FSMenu
    :closeOnContentClick="false"
    v-model="menu"
    location="bottom center"
  >
    <template
      #activator="{ props }"
    >
      <FSColorIcon
        class="fs-stopclick"
        :size="$props.size"
        :padding="$props.padding"
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
  </FSMenu>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { defineComponent, ref } from "vue";

import type { FSDeviceConnectivity } from "@dative-gpi/foundation-shared-components/models";

import FSConnectivityCard from "./FSConnectivityCard.vue";
import FSColorIcon from "../FSColorIcon.vue";
import FSMenu from '../FSMenu.vue';

export default defineComponent({
  name: "FSConnectivity",
  components: {
    FSConnectivityCard,
    FSColorIcon,
    FSMenu
  },
  props: {
    deviceConnectivity: {
      type: Object as PropType<FSDeviceConnectivity>,
      required: true
    },
    size: {
      type: [Array, String, Number] as PropType<"s" | "m" | "l" | string[] | number[] | string | number | null>,
      default: "m"
    },
    padding: {
      type: [String, Number] as PropType<string | number>,
      default: "8px"
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