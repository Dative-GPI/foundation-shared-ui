<template>
  <FSCard
    :variant="$props.backgroundVariant"
    :borderColor="$props.backgroundVariant === 'background' ? ColorEnum.Light : null"
    :color="$props.backgroundColor"
    :border="$props.border"
    :height="$props.size"
    :width="$props.size"
  >
    <FSRow
      align="center-center"
    >
      <FSIcon
        :variant="iconVariant"
        :color="iconColor"
        :size="actualIconSize"
      >
        {{ $props.icon }}
      </FSIcon>
    </FSRow>
  </FSCard>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed } from "vue";

import { ColorEnum, type ColorBase, type ColorBaseVariations } from "@dative-gpi/foundation-shared-components/models";

import { sizeToVar } from "../utils";

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
      default: ColorEnum.Background
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
      required: false
    },
    iconVariant: {
      type: String as PropType<ColorBaseVariations | null>,
      required: false,
      default: null
    },
    iconSize: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    border: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props){
    const actualIconSize = computed(() => {
      if (props.iconSize){
        return props.iconSize;
      }
      else if (props.size) {
        return `calc(${sizeToVar(props.size)} * 0.42)`;
      }
      return "42px";
    });

    const iconVariant = computed((): ColorBaseVariations | undefined => {
      if (props.iconVariant) {
        return props.iconVariant;
      }
      if (props.iconColor) {
        return "base";
      }

      switch (props.backgroundVariant) {
        case "background":
          return "lightContrast";
        case "standard":
          return "lightContrast";
        case "full":
          return "baseContrast";
        case "gradient":
          return "baseContrast";
        default:
          return "base";
      }
    });

    const iconColor = computed((): ColorBase | undefined => {
      if (props.iconColor) {
        return props.iconColor;
      }
      
      if(Array.isArray(props.backgroundColor)) {
        return props.backgroundColor[Math.floor(props.backgroundColor.length/2)];
      }
      if(props.backgroundVariant === "background") {
        return ColorEnum.Light;
      }
      return props.backgroundColor;
    });

    return {
      actualIconSize,
      iconVariant,
      ColorEnum,
      iconColor,
    };
  }
});
</script>