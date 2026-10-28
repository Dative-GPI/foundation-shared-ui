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
        :color="color"
        :padding="$props.padding"
        @click.prevent.stop
        v-bind="props"
      >
        {{ icon }}
      </FSColorIcon>
    </template>
    <FSStatusCard
      :modelStatus="$props.modelStatus"
      :statusGroup="$props.statusGroup"
      @close="menu = false"
    />
  </FSMenu>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { computed, defineComponent, ref } from "vue";

import { ColorEnum, type FSDeviceStatusGroup, type FSModelStatus } from "@dative-gpi/foundation-shared-components/models";

import FSStatusCard from "./FSStatusCard.vue";
import FSColorIcon from "../FSColorIcon.vue";
import FSMenu from '../FSMenu.vue';

export default defineComponent({
  name: "FSStatus",
  components: {
    FSStatusCard,
    FSColorIcon,
    FSMenu
  },
  props: {
    modelStatus: {
      type: Object as PropType<FSModelStatus>,
      required: true
    },
    statusGroup: {
      type: Object as PropType<FSDeviceStatusGroup>,
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
  setup(props) {
    const menu = ref(false);

    const icon = computed((): string => {
      return props.statusGroup.icon || "mdi-information-outline";
    });

    const color = computed((): string => {
      return props.statusGroup.color || ColorEnum.Dark;
    });

    return {
      menu,
      icon,
      color
    };
  }
});
</script>
