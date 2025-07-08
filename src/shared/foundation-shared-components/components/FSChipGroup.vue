<template>
  <FSWrapGroup
    v-if="$props.variant === 'wrap'"
    v-bind="$attrs"
  >
    <FSChip
      v-for="(label, index) in $props.labels"
      :key="index"
      :variant="$props.chipVariant"
      :color="$props.color"
      :label="label"
    />
    <slot />
  </FSWrapGroup>
  <FSSlideGroup
    v-if="$props.variant === 'slide'"
    v-bind="$attrs"
  >
    <FSChip
      v-for="(label, index) in $props.labels"
      :key="index"
      :variant="$props.chipVariant"
      :color="$props.color"
      :label="label"
    />
    <slot />
  </FSSlideGroup>
</template>
  
  <script lang="ts">
import { defineComponent, type PropType } from "vue";
  
import { type CardVariant, CardVariants, type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
  
import FSSlideGroup from "./FSSlideGroup.vue";
import FSWrapGroup from "./FSWrapGroup.vue";
import FSChip from "./FSChip.vue";
  
export default defineComponent({
  name: "FSChipGroup",
  components: {
    FSSlideGroup,
    FSWrapGroup,
    FSChip
  },
  props: {
    labels: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    variant: {
      type: String as PropType<"wrap" | "slide">,
      required: false,
      default: "wrap"
    },
    chipVariant: {
      type: String as PropType<CardVariant>,
      required: false,
      default: CardVariants.Full
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
    }
  }
});
  </script>