<template>
  <v-timeline
    v-bind="$attrs"
  >
    <slot/>
  </v-timeline>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FSTimeline",
  inheritAttrs: false
});
</script>