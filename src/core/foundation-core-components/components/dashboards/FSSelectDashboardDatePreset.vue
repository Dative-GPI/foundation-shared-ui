<template>
  <FSSelectField
    itemTitle="labelDefault"
    itemValue="hiddenCode"
    :items="$props.items"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

export default defineComponent({
  name: "FSSelectDashboardDatePreset",
  components: {
    FSSelectField
  },
  props: {
    items: {
      type: Array as PropType<any[]>,
      required: true
    },
    modelValue: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"]
});
</script>