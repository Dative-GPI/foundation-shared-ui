<template>
  <FSTileList
    :items="models"
    :loading="fetching"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";

import type { ModelFilters } from "@dative-gpi/foundation-core-domain/models";
import { useModels } from "@dative-gpi/foundation-core-services/composables";

import FSTileList from "@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue";

export default defineComponent({
  name: "FSTileModelsList",
  components: {
    FSTileList,
  },
  props: {
    modelFilters: {
      type: Object as PropType<ModelFilters>,
      required: false,
      default: () => ({})
    }
  },
  setup(props){
    const { entities: models, getMany, fetching } = useModels();

    const fetch = () => {
      getMany(props.modelFilters);
    }

    watch(() => props.modelFilters, fetch, { immediate: true });

    return {
      models,
      fetching
    }
  }
});
</script>