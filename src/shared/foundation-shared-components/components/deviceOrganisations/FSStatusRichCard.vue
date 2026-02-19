<template>
  <FSCard
    v-if="$props.modelStatus"
    class="fs-status-rich-card"
    topRightPadding="2px"
    variant="standard"
    :padding="$props.padding"
    :height="$props.height"
    :width="$props.width"
    :color="color"
    :style="style"
  >
    <FSCol
      align="center-center"
      :gap="$props.gap"
    >
      <FSRow
        align="top-center"
      >
        <FSIcon
          v-if="icon"
        >
          {{ icon }}
        </FSIcon>
        <FSText
          v-if="value"
          font="text-button"
        >
          {{ value }}
        </FSText>
      </FSRow>
      <FSText
        font="text-overline"
        align="center"
        :lineClamp="$props.titleClamp"
      >
        {{ title }}
      </FSText>
      <slot
        name="footer"
        v-bind="{ color }"
      />
    </FSCol>
    <template
      #top-right
    >
      <slot
        name="corner"
        v-bind="{ color }"
      />
    </template>
  </FSCard>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { ColorEnum, type FSDeviceStatusGroup, type FSModelStatus } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSCard from "../FSCard.vue";
import FSIcon from "../FSChip.vue";
import FSText from "../FSText.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSStatusRichCard",
  components: {
    FSCard,
    FSIcon,
    FSText,
    FSCol
  },
  props: {
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "100px"
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "160px"
    },
    padding: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "12px"
    },
    gap: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "8px"
    },
    title: {
      type: [String, null] as PropType<string | null>,
      required: false,
      default: null
    },
    titleClamp: {
      type: Number,
      required: false,
      default: 2
    },
    color: {
      type: [String, null] as PropType<string | null>,
      required: false,
      default: null
    },
    fillBackground: {
      type: Boolean,
      required: false,
      default: false
    },
    modelStatus: {
      type: Object as PropType<FSModelStatus | undefined>,
      required: true
    },
    statusGroup: {
      type: Object as PropType<FSDeviceStatusGroup | undefined>,
      required: true
    }
  },
  setup(props) {
    const { getColors } = useColors();

    const color = computed((): string => {
      return props.color ?? props.statusGroup?.color ?? props.modelStatus?.colorDefault ?? ColorEnum.Primary;
    });

    const icon = computed((): string | null => {
      return props.statusGroup?.icon ?? props.modelStatus?.iconDefault ?? null;
    });

    const title = computed((): string => {
      return props.title ?? props.modelStatus?.label ?? "";
    });

    const value = computed((): string | null => {
      if (props.statusGroup?.label) {
        return props.statusGroup.label;
      }
      if (props.statusGroup?.value && !isNaN(parseFloat(props.statusGroup?.value))) {
        return `${parseFloat(props.statusGroup.value).toLocaleString("fullwide", { maximumFractionDigits: 2 })} ${props.statusGroup.unit}`;
      }
      if (props.statusGroup?.value) {
        return `${props.statusGroup?.value} ${props.statusGroup?.unit}`;
      }
      return null;
    });

    const style = computed((): StyleValue => ({
      "--fs-status-rich-card-background-color": props.fillBackground ? getColors(color.value).light : "transparent",
      "--fs-status-rich-card-border-color": props.fillBackground ? getColors(color.value).base : getColors(ColorEnum.Light).dark
    }));

    return {
      color,
      style,
      title,
      value,
      icon
    };
  }
});
</script>