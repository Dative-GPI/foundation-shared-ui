<template>
  <FSRow
    align="center-center"
    :style="style"
  >
    <div
      :class="['fs-progress-circle', { 'fs-progress-circle--labels': positionedLabels.length }]"
    >
      <div
        class="fs-progress-circle-track"
      >
        <div
          v-if="!$props.cursor"
          class="fs-progress-circle-fill"
        />
      </div>
      <div
        v-if="$props.cursor && isValueInRange"
        class="fs-progress-circle-cursor"
      />
      <FSText
        v-if="$props.showValue"
        class="fs-progress-circle-value"
        font="text-button"
      >
        {{ displayValue }}
      </FSText>
      <div
        v-for="label in positionedLabels"
        :key="label.value"
        class="fs-progress-circle-label"
        :style="{ '--progress-circle-label-angle': `${label.percent * 3.6}deg` }"
      >
        <FSText
          font="text-overline"
        >
          {{ label.display }}
        </FSText>
      </div>
    </div>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";

export default defineComponent({
  name: "FSProgressCircle",
  components: {
    FSText,
    FSRow
  },
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    size: {
      type: [String, Number],
      required: false,
      default: "80px"
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
      "--progress-circle-size": sizeToVar(props.size),
      "--progress-circle-background": lightColors.dark,
      "--progress-circle-gradient-start": props.startColor ?? errorColors.base,
      "--progress-circle-gradient-end": props.endColor ?? successColors.base,
      "--progress-circle-fill-start": `${Math.min(zeroPercent.value, valuePercent.value)}%`,
      "--progress-circle-fill-end": `${Math.max(zeroPercent.value, valuePercent.value)}%`,
      "--progress-circle-cursor-angle": `${valuePercent.value * 3.6}deg`
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
