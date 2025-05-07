<template>
  <v-menu
    :modelValue="$props.modelValue"
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "FSMenu",
  props: {
    modelValue: {
      type: Boolean,
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