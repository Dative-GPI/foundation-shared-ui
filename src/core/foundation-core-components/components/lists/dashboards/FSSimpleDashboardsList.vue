<template>
  <FSSimpleList
    :items="dashboards"
    :loading="fetching"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType, watch, computed } from "vue";

import type { DashboardOrganisationFilters, DashboardOrganisationTypeFilters } from "@dative-gpi/foundation-core-domain/models";
import { useDashboardOrganisations, useDashboardOrganisationTypes, useDashboardShallows } from "@dative-gpi/foundation-core-services/composables";

import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";

export default defineComponent({
  name: "FSSimpleDashboardsList",
  components: {
    FSSimpleList,
  },
  props: {
    dashboardOrganisationFilters: {
      type: Object as PropType<DashboardOrganisationFilters>,
      required: false,
      default: () => ({})
    },
    dashboardOrganisationTypeFilters: {
      type: Object as PropType<DashboardOrganisationTypeFilters>,
      required: false,
      default: () => ({})
    },
    dashboardShallowFilters: {
      type: Object as PropType<DashboardOrganisationTypeFilters>,
      required: false,
      default: () => ({})
    }
  },
  setup(props){
    const { entities: dashboardOrganisations, 
            getMany: getManyDashboardOrganisations, 
            fetching: fetchingDashboardOrganisations } = useDashboardOrganisations();
    const { entities: dashboardOrganisationTypes, 
            getMany: getManyDashboardOrganisationTypes, 
            fetching: fetchingDashboardOrganisationTypes } = useDashboardOrganisationTypes();
    const { entities: dashboardShallows, 
            getMany: getManyDashboardShallows, 
            fetching: fetchingDashboardShallows } = useDashboardShallows();

    const fetching = computed(() => fetchingDashboardOrganisations.value 
      || fetchingDashboardOrganisationTypes.value
      || fetchingDashboardShallows.value);
    
    const dashboards = computed(() => {
      return [...dashboardOrganisations.value, ...dashboardOrganisationTypes.value, ...dashboardShallows.value];
    });

    const fetch = () => {
      getManyDashboardOrganisations(props.dashboardOrganisationFilters);
      getManyDashboardOrganisationTypes(props.dashboardOrganisationTypeFilters);
      getManyDashboardShallows(props.dashboardShallowFilters);
    }

    watch(() => [props.dashboardOrganisationFilters, props.dashboardOrganisationTypeFilters], fetch, { immediate: true });

    return {
      dashboards,
      fetching
    }
  }
});
</script>