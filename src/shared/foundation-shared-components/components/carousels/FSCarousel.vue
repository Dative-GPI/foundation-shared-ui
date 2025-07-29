<template>
  <v-carousel
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
  </v-carousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FSCarousel"
});
</script>