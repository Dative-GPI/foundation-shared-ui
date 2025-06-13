<template>
  <FSBaseField
    :label="$props.label"
    :description="$props.description"
    :required="$props.required"
    :disabled="$props.disabled"
    :style="style"
  >
    <FSRow>
      <v-slider
        hide-details
        class="fs-slider"
        width="100%"
        :color="$props.color"
        :disabled="$props.disabled"
        :ripple="false"
        :trackSize="6"
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
      </v-slider>
    </FSRow>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { useColors } from '@dative-gpi/foundation-shared-components/composables';

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSBaseField from '@dative-gpi/foundation-shared-components/components/fields/FSBaseField.vue';

export default defineComponent({
  name: "FSSlider",
  components: {
    FSRow,
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
      type: [String, Number] as PropType<string | number | null>,
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
  setup(props) {
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const lights = getColors(ColorEnum.Light);

    const style = computed((): StyleValue => {
      if (props.disabled) {
        return {
          "--fs-slider-thumb-color": lights.base
        };
      }
      return {
        "--fs-slider-thumb-color": colors.value.base
      };
    });

    return {
      colors,
      style
    };
  } 
});
</script>