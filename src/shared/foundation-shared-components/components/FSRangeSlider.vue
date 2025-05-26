<template>
  <FSBaseField
    :label="$props.label"
    :description="$props.description"
    :required="$props.required"
    :disabled="$props.disabled"
    :style="style"
  >
    <v-range-slider
      class="fs-range-slider"
      hide-details
      :disabled="$props.disabled"
      :ripple="false"
      :style="style"
      :elevation="0"
      :tickSize="4"
      :modelValue="$props.modelValue ?? undefined"
      @update:modelValue="$emit('update:modelValue', $event)"
      v-bind="$attrs"
    >
      <template
        v-for="(_, name) in $slots"
        v-slot:[name]="slotData"
      >
        <slot
          :name="name"
          v-bind="slotData"
        />
      </template>
    </v-range-slider>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSBaseField from '@dative-gpi/foundation-shared-components/components/fields/FSBaseField.vue';

export default defineComponent({
  name: "FSRangeSlider",
  components: {
    FSBaseField
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    description: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: Object as PropType<[number, number] | null>,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): StyleValue => {
      if (props.disabled) {
        return {
          "--fs-range-slider-cursor"     : "default",
          "--fs-range-slider-track-color": lights.base,
          "--fs-range-slider-thumb-color": lights.dark,
          "--fs-range-slider-fill-color" : lights.dark,
          "--fs-range-slider-color"      : lights.dark
        };
      }
      console.log(colors.value);
      return {
        "--fs-range-slider-cursor"     : "pointer",
        "--fs-range-slider-track-color": colors.value.light,
        "--fs-range-slider-fill-color" : colors.value.base,
        "--fs-range-slider-thumb-color": colors.value.base,
        "--fs-range-slider-color"      : darks.base
      };
    });

    return {
      style
    };
  } 
});
</script>