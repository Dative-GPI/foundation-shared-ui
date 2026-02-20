<template>
  <FSSimpleList
    :items="subgroupings"
    :loading="fetching"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";

import type { SubgroupingFilters } from "@dative-gpi/foundation-core-domain/models";
import { useSubgroupings } from "@dative-gpi/foundation-core-services/composables";

import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";

export default defineComponent({
  name: "FSSimpleSubgroupingsList",
  components: {
    FSSimpleList,
  },
  props: {
    subgroupingFilters: {
      type: Object as PropType<SubgroupingFilters>,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const { entities: subgroupings, getMany, fetching } = useSubgroupings();

    const fetch = () => {
      getMany(props.subgroupingFilters);
    };

    watch(() => props.subgroupingFilters, fetch, { immediate: true });

    return {
      subgroupings,
      fetching
    };
  }
});
</script>
