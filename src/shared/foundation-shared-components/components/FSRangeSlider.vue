<template>
  <FSBaseField
    :label="$props.label"
    :description="$props.description"
    :required="$props.required"
    :disabled="$props.disabled"
  >
    <FSRow>
      <v-range-slider
        hide-details
        width="100%"
        :disabled="$props.disabled"
        :ripple="false"
        :color="$props.color"
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
      </v-range-slider>
    </FSRow>
  </FSBaseField>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSBaseField from '@dative-gpi/foundation-shared-components/components/fields/FSBaseField.vue';

export default defineComponent({
  name: "FSRangeSlider",
  components: {
    FSBaseField,
    FSRow
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
  setup() {

    return {
    };
  } 
});
</script>