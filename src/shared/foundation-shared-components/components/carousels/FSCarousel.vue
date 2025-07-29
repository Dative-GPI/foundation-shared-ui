<template>
  <v-carousel
    v-bind="$attrs"
  >
    <slot/>
  </v-carousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FSCarousel"
});
</script>