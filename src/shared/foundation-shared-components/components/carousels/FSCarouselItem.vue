<template>
  <v-carousel-item
    v-bind="$attrs"
  >
    <slot/>
  </v-carousel-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FSCarouselItem"
});
</script>