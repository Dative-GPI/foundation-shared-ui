<template>
  <FSSimpleList
    :items="dashboards"
    :loading="fetching"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType, computed, watch } from "vue";

import { DashboardExplorerElementType } from "@dative-gpi/foundation-shared-domain/enums";
import { useDashboardExplorerElements } from "@dative-gpi/foundation-core-services/composables";
import type { DashboardExplorerElementFilters, DashboardExplorerElementInfos } from "@dative-gpi/foundation-core-domain/models";

import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";

const DASHBOARD_TYPES = [
  DashboardExplorerElementType.DashboardOrganisation,
  DashboardExplorerElementType.DashboardShallow,
  DashboardExplorerElementType.DashboardOrganisationType
];

export default defineComponent({
  name: "FSSimpleDashboardsList",
  components: {
    FSSimpleList,
  },
  props: {
    allowedTypes: {
      type: Array as PropType<DashboardExplorerElementType[]>,
      required: false,
      default: () => DASHBOARD_TYPES
    },
    dashboardExplorerElementsFilters: {
      type: Object as PropType<DashboardExplorerElementFilters>,
      required: false,
      default:  () => ({})
    }
  },
  setup(props) {
    const { entities, fetching, getMany } = useDashboardExplorerElements();

    const dashboards = computed((): DashboardExplorerElementInfos[] => {
      return entities.value
        .filter(e => props.allowedTypes.includes(e.type))
        .slice()
        .sort((a, b) => a.label.localeCompare(b.label));
    });

    const fetch = () => {
      getMany({
        types: props.allowedTypes,
        ...props.dashboardExplorerElementsFilters
      });
    };

    watch(() => props.dashboardExplorerElementsFilters, fetch, { immediate: true });

    return {
      dashboards,
      fetching
    };
  }
});
</script>