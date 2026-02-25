<template>
  <FSChip
    :color="chipColor"
    :width="$props.width"
    :height="$props.height"
    :variant="$props.variant"
    :disableHoverStyle="$props.disableHoverStyle"
    :title="`${$props.groupingLabel} - ${$props.label}`"
  >
    <FSRow
      align="center-left"
      width="fill"
      :wrap="false"
    >
      <FSRow
        align="center-center"
        width="hug"
        gap="6px"
        :wrap="false"
      >
        <FSIcon
          :color="$props.groupingColor"
          :size="$props.iconSize"
        >
          {{ $props.groupingIcon }}
        </FSIcon>
        <FSSpan
          font="text-overline"
        >
          {{ $props.groupingLabel }}
        </FSSpan>
      </FSRow>
      <FSRow
        align="center-center"
        width="hug"
        gap="6px"
        :wrap="false"
      >
        <FSIcon
          :size="$props.iconSize"
        >
          {{ $props.icon }}
        </FSIcon>
        <FSSpan
          font="text-overline"
        >
          {{ $props.label }}
        </FSSpan>
      </FSRow>
    </FSRow>
  </FSChip>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { type CardVariant, CardVariants, type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSChip from "./FSChip.vue";
import FSRow from "./FSRow.vue";

import { useColors } from "../composables";

export default defineComponent({
  name: "FSSubgroupingChip",
  components: {
    FSChip,
    FSIcon,
    FSSpan,
    FSRow
  },
  props: {
    groupingLabel: {
      type: String as PropType<string>,
      required: true
    },
    groupingIcon: {
      type: String as PropType<string>,
      required: true
    },
    groupingColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    label: {
      type: String as PropType<string>,
      required: true
    },
    icon: {
      type: String as PropType<string>,
      required: true
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
    variant: {
      type: String as PropType<CardVariant>,
      required: false,
      default: CardVariants.Background
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
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

    return {
      chipColor,
      ColorEnum
    };
  }
});
</script>
