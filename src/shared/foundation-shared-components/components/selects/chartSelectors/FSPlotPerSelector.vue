<template>
  <FSAutocompleteField
    :label="label ?? $tr('ui.common.plot-per','Plot per')"
    :items="plotPerItems"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import {PlotPer} from "@dative-gpi/foundation-shared-domain/enums";

import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { plotPerLabel } from "@dative-gpi/foundation-shared-components/tools";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

export default defineComponent({
  components: {
    FSAutocompleteField
  },
  props: {
    modelValue: {
      type: Number as PropType<PlotPer>,
      required: false
    },
    allowedPlotPers: {
      type: Array as PropType<PlotPer[]>,
      required: false,
      default: null
    },
    label: {
      type: String,
      required: false
    }
  },
  emits: ['update:modelValue'],
  setup(props) {
    const plotPerItems = computed(()=>{
      if (props.allowedPlotPers != null) {
        return props.allowedPlotPers.map((f)=>{
          return {
            id: f,
            label: plotPerLabel(f)
          }
        })
      }
      return getEnumEntries(PlotPer).filter(f=>f.value != PlotPer.None).map((f)=>{
        return {
          id: f.value,
          label: plotPerLabel(f.value)
        }
      });
    });

    return {
      plotPerItems
    }
  }
})
</script>
