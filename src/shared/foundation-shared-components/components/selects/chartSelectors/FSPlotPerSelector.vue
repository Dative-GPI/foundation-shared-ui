<template>
  <FSRow
    v-bind="$attrs"
  >
    <FSAutocompleteField
      v-bind="$props.plotPerSelectorProps"
      :label="label ?? $tr('ui.common.plot-per','Plot per')"
      :items="plotPerItems"
      v-model="actualPlotPer"
    />
    <FSAutocompleteGrouping
      v-if="actualPlotPer === PlotPer.Grouping"
      v-bind="$props.groupingAutocompleteProps"
      :toggleSetDisabled="true"
      v-model="actualGroupingId"
    />
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, type PropType } from "vue";

import { PlotPer } from "@dative-gpi/foundation-shared-domain/enums";

import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { plotPerLabel } from "@dative-gpi/foundation-shared-components/tools";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSAutocompleteGrouping from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteGrouping.vue";

export default defineComponent({
  components: {
    FSAutocompleteField,
    FSAutocompleteGrouping
  },
  props: {
    modelValue: {
      type: Object as PropType<{ plotPer: PlotPer, groupingId: string | null }>,
      required: false,
      default: () => ({ plotPer: PlotPer.None, groupingId: null })
    },
    allowedPlotPers: {
      type: Array as PropType<PlotPer[]>,
      required: false,
      default: null
    },
    plotPerSelectorProps: {
      type: Object as PropType<Record<string, any>>,
      required: false,
      default: () => ({})
    },
    groupingAutocompleteProps: {
      type: Object as PropType<Record<string, any>>,
      required: false,
      default: () => ({})
    },
    label: {
      type: String,
      required: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const actualPlotPer = ref(PlotPer.None);
    const actualGroupingId = ref<string | null>(null)
    
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

    watch(() => props.modelValue, (newVal) => {
      actualPlotPer.value = newVal?.plotPer ?? plotPerItems.value[0].id;
      actualGroupingId.value = newVal?.groupingId ?? null;
    }, { immediate: true });

    watch([actualPlotPer, actualGroupingId], () => {
      if (actualPlotPer.value === PlotPer.Grouping && !actualGroupingId.value) {
        return;
      }
      emit('update:modelValue', {
        plotPer: actualPlotPer.value,
        groupingId: actualGroupingId.value
      });
    });

    return {
      actualGroupingId,
      actualPlotPer,
      plotPerItems,
      PlotPer
    }
  }
})
</script>
