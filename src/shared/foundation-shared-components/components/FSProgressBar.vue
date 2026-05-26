<template>
  <FSRow
    align="center-center"
    :style="style"
  >
    <div
      class="fs-progress-bar-wrapper"
    >
      <div
        class="fs-progress-bar-track"
      >
        <div
          v-if="$props.cursor && isValueInRange"
          class="fs-progress-bar-cursor"
        ></div>
        <div
          v-if="!$props.cursor"
          class="fs-progress-bar-fill"
        ></div>
      </div>
      <div
        v-if="positionedLabels.length"
        class="fs-progress-bar-labels"
      >
        <div
          v-for="label in positionedLabels"
          :key="label.value"
          class="fs-progress-bar-label"
          :class="{
            'fs-progress-bar-label--start': label.percent === 0,
            'fs-progress-bar-label--end': label.percent === 100
          }"
          :style="{ left: `${label.percent}%` }"
        >
          <FSText
            font="text-overline"
          >
            {{ label.display }}
          </FSText>
        </div>
      </div>
    </div>
    <FSText
      v-if="$props.showValue"
      font="text-button"
    >
      {{ displayValue }}
    </FSText>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { useColors } from '@dative-gpi/foundation-shared-components/composables';

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';

export default defineComponent({
  name: "FSProgressBar",
  components: {
    FSText,
    FSRow
  },
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    startColor: {
      type: String,
      required: false
    },
    endColor: {
      type: String,
      required: false
    },
    showValue: {
      type: Boolean,
      required: false,
      default: true
    },
    valueFormat: {
      type: String as PropType<"percentage" | "raw">,
      required: false,
      default: "percentage"
    },
    min: {
      type: Number,
      required: false,
      default: 0
    },
    max: {
      type: Number,
      required: false,
      default: 1
    },
    labels: {
      type: Array as PropType<Array<{ value: number; text?: string }>>,
      required: false,
      default: () => []
    },
    cursor: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {
    const { getColors } = useColors();

    const lightColors = getColors(ColorEnum.Light);
    const successColors = getColors(ColorEnum.Success);
    const errorColors = getColors(ColorEnum.Error);

    const isValid = computed(() => props.max > props.min);

    const range = computed(() => props.max - props.min);

    const clampedValue = computed(() => {
      if (!isValid.value) { 
        return props.min; 
      }
      return Math.min(Math.max(props.modelValue, props.min), props.max);
    });

    const valuePercent = computed(() => {
      if (!isValid.value) { 
        return 0; 
      }
      return ((clampedValue.value - props.min) / range.value) * 100;
    });

    const isValueInRange = computed(() => {
      return props.modelValue >= props.min && props.modelValue <= props.max;
    });

    const zeroPercent = computed(() => {
      if (!isValid.value) { return 0; }
      const zero = Math.min(Math.max(0, props.min), props.max);
      return ((zero - props.min) / range.value) * 100;
    });

    const fillLeft = computed(() => Math.min(zeroPercent.value, valuePercent.value));

    const fillWidth = computed(() => Math.abs(valuePercent.value - zeroPercent.value));

    const gradientStartStop = computed(() => {
      if (fillWidth.value === 0) { return "0%"; }
      return `${-(fillLeft.value / fillWidth.value) * 100}%`;
    });

    const gradientEndStop = computed(() => {
      if (fillWidth.value === 0) { return "100%"; }
      return `${((100 - fillLeft.value) / fillWidth.value) * 100}%`;
    });

    const fillColor = computed(() => {
      return clampedValue.value >= 0
        ? (props.endColor ?? successColors.base)
        : (props.startColor ?? errorColors.base);
    });

    const positionedLabels = computed(() => {
      return props.labels.map(label => {
        const percent = isValid.value
          ? ((label.value - props.min) / range.value) * 100
          : 0;

        return {
          value: label.value,
          display: label.text ?? label.value,
          percent: Math.min(Math.max(percent, 0), 100)
        };
      });
    });

    const displayValue = computed(() => {
      if (props.valueFormat === "raw") { return props.modelValue.toFixed(2); }
      return `${Math.round(valuePercent.value)}%`;
    });

    const style = computed((): StyleValue => ({
      "--progress-bar-background": lightColors.dark,
      "--progress-bar-gradient-start": props.startColor ?? errorColors.base,
      "--progress-bar-gradient-start-stop": gradientStartStop.value,
      "--progress-bar-gradient-end": props.endColor ?? successColors.base,
      "--progress-bar-gradient-end-stop": gradientEndStop.value,
      "--progress-bar-fill-color": fillColor.value,
      "--progress-bar-fill-left": `${fillLeft.value}%`,
      "--progress-bar-fill-width": `${fillWidth.value}%`,
      "--progress-bar-cursor-position": `${valuePercent.value}%`
    }));

    return {
      positionedLabels,
      isValueInRange,
      displayValue,
      style
    };
  }
});
</script>
