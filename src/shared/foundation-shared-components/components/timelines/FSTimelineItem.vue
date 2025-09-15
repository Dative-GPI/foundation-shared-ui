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
    <slot/>
  </v-timeline-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FSTimelineItem"
});
</script>