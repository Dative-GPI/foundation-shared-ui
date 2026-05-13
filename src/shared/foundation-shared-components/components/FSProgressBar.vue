<template>
  <FSRow
    align="center-center"
    :style="style"
  >
    <template
      v-if="isCentered"
    >
      <div
        class="fs-progress-bar-centered-wrapper"
      >
        <div
          class="fs-progress-bar-centered"
        >
          <div
            class="fs-progress-bar-centered-fill"
          ></div>
          <div
            class="fs-progress-bar-centered-marker"
          ></div>
        </div>
        <div
          v-if="$props.showLabels"
          class="fs-progress-bar-centered-labels"
        >
          <FSText
            font="text-overline"
          >
            {{ $props.min }}
          </FSText>
          <FSText
            font="text-overline"
            class="fs-progress-bar-centered-label-middle"
          >
            0
          </FSText>
          <FSText
            font="text-overline"
          >
            {{ $props.max }}
          </FSText>
        </div>
      </div>
    </template>
    <template
      v-else
    >
      <div
        class="fs-progress-bar-gradient"
      >
        <div></div>
      </div>
    </template>
    <FSText
      v-if="$props.showValue"
      font="text-button"
    >
      {{ displayValue }}
    </FSText>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, type StyleValue } from "vue";

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
    min: {
      type: Number,
      required: false,
      default: undefined
    },
    max: {
      type: Number,
      required: false,
      default: undefined
    },
    showLabels: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { getColors } = useColors();

    const lightColors = getColors(ColorEnum.Light);
    const successColors = getColors(ColorEnum.Success);
    const errorColors = getColors(ColorEnum.Error);

    const fixedRate = computed(() => {
      return (props.modelValue * 100).toFixed(0);
    });

    const relativeWidth = computed(() => {
      return props.modelValue ? 100 / props.modelValue : 0;
    });

    const startColor = computed(() => {
      return props.startColor ?? errorColors.base;
    });

    const endColor = computed(() => {
      return props.endColor ?? successColors.base;
    });

    const isCentered = computed(() => {
      return props.min !== undefined && props.max !== undefined;
    });

    const effectiveMin = computed(() => props.min ?? -1);
    const effectiveMax = computed(() => props.max ?? 1);

    const centerPercent = computed(() => {
      return ((0 - effectiveMin.value) / (effectiveMax.value - effectiveMin.value)) * 100;
    });

    const valuePercent = computed(() => {
      const clamped = Math.min(Math.max(props.modelValue, effectiveMin.value), effectiveMax.value);
      return ((clamped - effectiveMin.value) / (effectiveMax.value - effectiveMin.value)) * 100;
    });

    const fillLeft = computed(() => {
      return Math.min(centerPercent.value, valuePercent.value);
    });

    const fillWidth = computed(() => {
      return Math.abs(valuePercent.value - centerPercent.value);
    });

    const displayValue = computed(() => {
      return isCentered.value
        ? props.modelValue.toFixed(2)
        : `${fixedRate.value}%`;
    });

    const style = computed((): StyleValue => {
      if (isCentered.value) {
        const fillColor = props.modelValue >= 0
          ? (props.endColor ?? successColors.dark)
          : (props.startColor ?? errorColors.dark);
        return {
          '--progress-bar-background-color': lightColors.dark,
          '--progress-bar-fill-color': fillColor,
          '--progress-bar-fill-left': `${fillLeft.value}%`,
          '--progress-bar-fill-width': `${fillWidth.value}%`,
          '--progress-bar-center-position': `${centerPercent.value}%`
        };
      }
      return {
        '--progress-bar-background-color': lightColors.dark,
        '--progress-bar-gradient-start-color': startColor.value,
        '--progress-bar-gradient-end-color': endColor.value,
        '--progress-bar-gradient-width': `min(100%, ${fixedRate.value}%)`,
        '--progress-bar-total-relative-width': `${relativeWidth.value}%`
      };
    });

    return {
      isCentered,
      style,
      displayValue
    }
  },
});
</script>