<template>
  <FSAutocompleteField
    :label="label ?? $tr('ui.common.data-definition', 'Data')"
    :items="toggleDataDefinitions"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, watch } from "vue";

import {useDataDefinitions} from "@dative-gpi/foundation-core-services/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

export default defineComponent({
  components: {
    FSAutocompleteField
  },
  props:{
    modelValue: {
      type: String,
      required: false
    },
    modelId: {
      type: String,
      required: false,
    },
    dataCategoryId: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false
    },
    
  },
  emits: ['update:modelValue'],
  setup(props) {

    const {getMany : fetchDataDefinitions, entities : dataDefinitions} = useDataDefinitions()

    const toggleDataDefinitions = computed(()=>{
      return dataDefinitions.value.map((d) => {
        return {
          id: d.id,
          label: d.label
        }
      })
    })

    watch(() => [props.modelId, props.dataCategoryId], async () => {
      await fetchDataDefinitions({modelsIds: props.modelId ? [props.modelId] : undefined, dataCategoryId: props.dataCategoryId})
    }, {immediate: true})

    return {
      toggleDataDefinitions,
      dataDefinitions
    }
  }
})

</script>
