<template>
  <FSAutocompleteField
    itemTitle="labelDefault"
    itemValue="hiddenCode"
    :items="$props.items"
    :modelValue="$props.modelValue"
    :clearable="true"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

export default defineComponent({
  name: "FSSelectDashboardEntityPreset",
  components: {
    FSAutocompleteField
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