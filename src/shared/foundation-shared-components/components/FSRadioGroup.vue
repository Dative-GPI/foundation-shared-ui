<template>
  <FSCol width="hug">
    <FSRadio
      v-for="item in $props.values"
      :key="item.value"
      :label="item.label"
      :description="item.description"
      :selected="isSelected(item.value)"
      :color="$props.color"
      :editable="$props.editable"
      :modelValue="item.value"
      @update:modelValue="onToggle"
    />
  </FSCol>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSRadio from "./FSRadio.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
  name: "FSRadioGroup",
  components: {
    FSRadio,
    FSCol
  },
  props: {
    values: {
      type: Array as PropType<{ value: String | Boolean | Number, label?: String, description?: string }[]>,
      required: true,
      default: false
    },
    modelValue: {
      type: [String, Boolean, Number],
      required: false,
      default: 0
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const isSelected = (item: String | Boolean | Number): boolean => {
      return item == props.modelValue;
    };

    const onToggle = (item: String | Boolean | Number): void => {
      if (item != props.modelValue) {
        emit("update:modelValue", item);
      }
    };

    return {
      isSelected,
      onToggle
    };
  }
});
</script>