<template>
  <FSTextField
    class="fs-number-field"
    minWidth="80px"
    :disabled="$props.disabled"
    :modelValue="$props.modelValue?.toString()"
    @update:modelValue="onUpdate"
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
  </FSTextField>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import FSTextField from "./FSTextField.vue";

export default defineComponent({
  name: "FSNumberField",
  components: {
    FSTextField
  },
  props: {
    modelValue: {
      type: Number as PropType<number | null>,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(_, { emit }) {
    const onUpdate = (value: string | null | undefined) => {
      if (value === "-") {
        return;
      }
      if(value === null || value === undefined) {
        emit("update:modelValue", null);
        return;
      }
      const match = /[-]?([0-9 ]*[,.]?)?[0-9]*/.exec(value);
      if (match != null && !isNaN(parseFloat(match[0].replace(",", ".").replace(" ", "")))) {
        emit("update:modelValue", parseFloat(match[0].replace(",", ".").replace(" ", "")));
        return;
      }
      emit("update:modelValue", 0);
    };

    return {
      onUpdate
    };
  }
});
</script>