<template>
  <v-timeline-item
    v-bind="$attrs"
  >
    <template
      v-slot:opposite
    >
      <slot
        name="opposite"
      />
    </template>
    <template
      v-slot:icon
    >
      <slot
        name="icon"
      />
    </template>
    <slot/>
  </v-timeline-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FSTimelineItem"
});
</script>