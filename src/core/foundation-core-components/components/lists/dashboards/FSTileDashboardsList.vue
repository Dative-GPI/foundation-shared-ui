<template>
  <FSTileList
    :items="dashboards"
    :loading="fetching"
    :selectable="$props.selectable"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #item.tile="{ item, toggleSelect, direction }"
    >
      <FSDashboardOrganisationTileUI
        v-if="item.dashboardType === DashboardType.Organisation"
        :code="item.code"
        :icon="item.icon"
        :label="item.label"
        :imageId="item.imageId"
        :bottomColor="item.colors"
        :modelValue="($props.modelValue ?? []).includes(item.id)"
        :width="direction === ListDirections.Column ? 'fill' : undefined"
        :selectable="$props.selectable"
        @update:modelValue="toggleSelect(item)"
      />
      <FSDashboardOrganisationTypeTileUI
        v-else-if="item.dashboardType === DashboardType.OrganisationType"
        :code="item.code"
        :icon="item.icon"
        :label="item.label"
        :imageId="item.imageId"
        :bottomColor="item.colors"
        :modelValue="($props.modelValue ?? []).includes(item.id)"
        :width="direction === ListDirections.Column ? 'fill' : undefined"
        :selectable="$props.selectable"
        @update:modelValue="toggleSelect(item)"
      />
      <FSDashboardShallowTileUI
        v-else-if="item.dashboardType === DashboardType.Shallow"
        :code="item.code"
        :icon="item.icon"
        :label="item.label"
        :imageId="item.imageId"
        :bottomColor="item.colors"
        :modelValue="($props.modelValue ?? []).includes(item.id)"
        :width="direction === ListDirections.Column ? 'fill' : undefined"
        :selectable="$props.selectable"
        @update:modelValue="toggleSelect(item)"
      />
    </template>
  </FSTileList>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch, computed } from "vue";
import _ from "lodash";

import type { DashboardOrganisationFilters, DashboardOrganisationTypeFilters, DashboardShallowFilters } from "@dative-gpi/foundation-core-domain/models";
import { useDashboardOrganisations, useDashboardOrganisationTypes, useDashboardShallows } from "@dative-gpi/foundation-core-services/composables";

import { DashboardType } from '@dative-gpi/foundation-shared-domain/enums';
import type { DashboardsListItem } from '@dative-gpi/foundation-core-components/utils';

import FSDashboardOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue";
import FSDashboardOrganisationTypeTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue";
import FSDashboardShallowTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue";
import FSTileList from "@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue";

import { ListDirections } from "@dative-gpi/foundation-shared-domain/enums";


export default defineComponent({
  name: "FSTileDashboardsList",
  components: {
    FSTileList,
    FSDashboardOrganisationTileUI,
    FSDashboardOrganisationTypeTileUI,
    FSDashboardShallowTileUI
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
      type: Object as PropType<DashboardShallowFilters>,
      required: false,
      default: () => ({})
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    selectable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
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
    
    const dashboards = computed((): DashboardsListItem[] => {
      return _.sortBy([
        ...dashboardOrganisationTypes.value.map(g => ({
          ...g,
          dashboardType: DashboardType.OrganisationType
        })) satisfies DashboardsListItem[],
        ...dashboardOrganisations.value.map(d => ({
          ...d,
          dashboardType: DashboardType.Organisation
        })) as DashboardsListItem[],
        ...dashboardShallows.value.map(d => ({
          ...d,
          dashboardType: DashboardType.Shallow
        })) as DashboardsListItem[]
      ], d => d.label);
    });

    const fetch = () => {
      getManyDashboardOrganisations(props.dashboardOrganisationFilters);
      getManyDashboardOrganisationTypes(props.dashboardOrganisationTypeFilters);
      getManyDashboardShallows(props.dashboardShallowFilters);
    };

    watch(
      [() => props.dashboardOrganisationFilters, () => props.dashboardOrganisationTypeFilters, () => props.dashboardShallowFilters], 
      fetch, 
      { immediate: true });

    return {
      dashboards,
      fetching,
      DashboardType,
      ListDirections
    };
  }
});
</script>