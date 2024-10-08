<template>
  <FSColor
    class="fs-color-icon"
    :color="$props.color"
    :border="false"
    :height="actualSize"
    :width="actualSize"
  >
    <FSRow
      align="center-center"
    >
      <FSIcon
        :color="$props.color"
        :size="iconSize"
      >
        <slot />
      </FSIcon>
    </FSRow>  
  </FSColor>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import { sizeToVar } from "../utils";

import FSColor from "./FSColor.vue";
import FSIcon from "./FSIcon.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSColorIcon",
  components: {
    FSColor,
    FSIcon,
    FSRow
  },
  props: {
    size: {
      type: [Array, String, Number] as PropType<"s" | "m" | "l" | string[] | number[] | string | number | null>,
      required: false,
      default: "m"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    padding: {
      type: [String, Number] as PropType<string | number>,
      required: false,
      default: "8px"
    }
  },
  setup(props) {
    const { isMobileSized } = useBreakpoints();

    const actualSize = computed((): string[] | number[] | string | number | null => {
      switch(props.size) {
        case "s": return isMobileSized.value ? "18px" : "20px";
        case "m": return isMobileSized.value ? "20px" : "26px";
        case "l": return isMobileSized.value ? "36px" : "40px";
        default: return props.size;
      }
    });

    const iconSize = computed((): string => {
      switch(props.size) {
        case "s": 
        case "m": 
        case "l":
          return props.size;
        default: return `calc(${sizeToVar(props.size)} - ${sizeToVar(props.padding)})`;
      }
    });

    return {
      actualSize,
      iconSize
    };
  }
});
</script>