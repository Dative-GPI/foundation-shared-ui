<template>
  <v-menu
    :modelValue="$props.modelValue"
    :scrollStrategy="$props.scrollStrategy"
    :offset="$props.offset"
    @update:modelValue="$emit('update:modelValue', $event)"
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
    <slot />
  </v-menu>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  name: "FSMenu",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    scrollStrategy: {
      type: String,
      default: "close"
    },
    offset: {
      type: [String, Number] as PropType<string | number | null>,
      default: "4px"
    },
  },
  emits: ["update:modelValue"],
  setup() {

    return {
    };
  }
});
</script>