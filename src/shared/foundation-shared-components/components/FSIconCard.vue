<template>
  <FSCard
    :variant="$props.backgroundVariant"
    :color="$props.backgroundColor"
    :border="$props.border"
    :height="$props.size"
    :width="$props.size"
  >
    <FSRow
      align="center-center"
    >
      <FSIcon 
        :variant="$props.iconVariant"
        :color="$props.iconColor"
        :size="$props.iconSize"
      >
        {{ $props.icon }}
      </FSIcon>
    </FSRow>
  </FSCard>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSCard from "./FSCard.vue";
import FSIcon from "./FSIcon.vue";

export default defineComponent({
  name: "FSIconCard",
  components: {
    FSCard,
    FSIcon
  },
  props: {
    size: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    backgroundColor: {
      type: [Array, String] as PropType<ColorBase | ColorBase[]>,
      required: false,
      default: null
    },
    backgroundVariant: {
      type: String as PropType<"background" | "standard" | "full" | "gradient">,
      required: false,
      default: "background"
    },
    icon: {
      type: String as PropType<string>,
      required: false,
      default: "mdi-shape"
    },
    iconColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    iconVariant: {
      type: String as PropType<"base" | "baseContrast" | "soft" | "softContrast" | "light" | "lightContrast" | "dark" | "darkContrast">,
      required: false,
      default: "base"
    },
    iconSize: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "42px"
    },
    border: {
      type: Boolean,
      required: false,
      default: true
    }
  }
});
</script>