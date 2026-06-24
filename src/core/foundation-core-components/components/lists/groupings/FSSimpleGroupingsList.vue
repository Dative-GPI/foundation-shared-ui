<template>
  <FSSimpleList
    :items="groupings"
    :loading="fetching"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";

import type { GroupingFilters } from "@dative-gpi/foundation-core-domain/models";
import { useGroupings } from "@dative-gpi/foundation-core-services/composables";

import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";

export default defineComponent({
  name: "FSSimpleGroupingsList",
  components: {
    FSSimpleList,
  },
  props: {
    groupingFilters: {
      type: Object as PropType<GroupingFilters>,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const { entities: groupings, getMany, fetching } = useGroupings();

    const fetch = () => {
      getMany(props.groupingFilters);
    };

    watch(() => props.groupingFilters, fetch, { immediate: true });

    return {
      groupings,
      fetching
    };
  }
});
</script>
