<template>
  <FSBaseView
    variant="default"
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
  </FSBaseView>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FSBaseView from "./FSBaseView.vue";

export default defineComponent({
  name: "FSSimpleView",
  components: {
    FSBaseView
  },
});
</script>