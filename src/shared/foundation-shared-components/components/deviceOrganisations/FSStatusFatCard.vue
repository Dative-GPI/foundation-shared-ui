<template>
  <FSCard
    v-if="$props.modelStatus"
    class="fs-status-fat-card"
    padding="12px"
    height="100px"
    width="140px"
    :style="style"
  >
    <FSCol
      align="center-center"
    >
      <FSIcon
        v-if="icon"
        :color="color"
      >
        {{ icon }}
      </FSIcon>
      <FSText>
        {{ title }}
      </FSText>
      <FSText
        v-if="value"
        :color="color"
      >
        {{ value }}
      </FSText>
    </FSCol>
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
  name: "FSStatusFatCard",
  components: {
    FSCard,
    FSIcon,
    FSText,
    FSCol
  },
  props: {
    title: {
      type: String,
      required: true
    },
    background: {
      type: Boolean,
      required: false
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
      return props.statusGroup?.color ?? props.modelStatus?.colorDefault ?? ColorEnum.Primary;
    });

    const icon = computed((): string | null => {
      return props.statusGroup?.icon ?? props.modelStatus?.iconDefault ?? null;
    });

    const title = computed((): string => {
      return props.title ?? props.modelStatus?.label;
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
      "--fs-status-fat-card-background-color": props.background ? getColors(color.value).light : "transparent",
      "--fs-status-fat-card-border-color": props.background ? getColors(color.value).base : getColors(ColorEnum.Light).dark
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