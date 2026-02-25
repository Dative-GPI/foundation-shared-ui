<template>
  <FSChip
    :height="$props.height"
    :width="$props.width"
    :variant="$props.variant"
    :color="chipColor"
    :disableHoverStyle="$props.disableHoverStyle"
  >
    <FSRow
      align="center-center"
      width="hug"
      :wrap="false"
    >
      <FSRow
        align="center-center"
        width="hug"
        gap="6px"
        :wrap="false"
      >
        <FSIcon
          :color="$props.iconColor"
          :size="$props.iconSize"
        >
          {{ $props.icon }}
        </FSIcon>
        <FSText
          font="text-overline"
          :color="textColor"
        >
          {{ $props.label }}
        </FSText>
      </FSRow>
    </FSRow>
  </FSChip>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { type CardVariant, CardVariants, type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSIcon from "./FSIcon.vue";
import FSText from "./FSText.vue";
import FSChip from "./FSChip.vue";
import FSRow from "./FSRow.vue";

import { useColors } from "../composables";

export default defineComponent({
  name: "FSSubgroupingChip",
  components: {
    FSChip,
    FSIcon,
    FSText,
    FSRow
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String as PropType<string>,
      required: true
    },
    icon: {
      type: String as PropType<string>,
      required: true
    },
    iconColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => [24, 20]
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "hug"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
    },
    variant: {
      type: String as PropType<CardVariant>,
      required: false,
      default: CardVariants.Background
    },
    iconSize: {
      type: [Array, String, Number] as PropType<"s" | "m" | "l" | string[] | number[] | string | number | null>,
      required: false,
      default: "18px"
    },
    disableHoverStyle: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { getColors } = useColors();
    
    const chipColor = getColors(props.color).dark;
    const textColor = getColors(ColorEnum.Dark).dark;

    return {
      chipColor,
      textColor,
      ColorEnum
    };
  }
});
</script>
