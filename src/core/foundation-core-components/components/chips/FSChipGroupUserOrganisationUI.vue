<template>
  <FSRow
    :wrap="wrapped"
  >
    <FSChip
      v-for="(label, i) in $props.userOrganisationLabels"
      :key="i"
      :color="ColorEnum.Light"
      :label="label"
    />
  </FSRow>
</template>
  
  <script lang="ts">
import { defineComponent, type PropType } from "vue";
  
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
  
export default defineComponent({
  name: "FSChipGroupUserOrganisationUI",
  props: {
    userOrganisationLabels: {
      type: Array as PropType<string[]>,
      required: false
    },
    wrapped: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup() {
    return {
      ColorEnum
    };
  }
});
  </script>