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
        v-if="item.type === DashboardExplorerElementType.DashboardOrganisation"
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
        v-else-if="item.type === DashboardExplorerElementType.DashboardOrganisationType"
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
        v-else-if="item.type === DashboardExplorerElementType.DashboardShallow"
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
import { defineComponent, type PropType, computed, watch } from "vue";

import { DashboardExplorerElementType, ListDirections } from "@dative-gpi/foundation-shared-domain/enums";
import { useDashboardExplorerElements } from "@dative-gpi/foundation-core-services/composables";
import type { DashboardExplorerElementFilters, DashboardExplorerElementInfos } from "@dative-gpi/foundation-core-domain/models";

import FSDashboardOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue";
import FSDashboardOrganisationTypeTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue";
import FSDashboardShallowTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue";
import FSTileList from "@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue";

export default defineComponent({
  name: "FSTileDashboardsList",
  components: {
    FSTileList,
    FSDashboardOrganisationTileUI,
    FSDashboardOrganisationTypeTileUI,
    FSDashboardShallowTileUI
  },
  props: {
    allowedTypes: {
      type: Array as PropType<DashboardExplorerElementType[]>,
      required: false,
      default: () => [
        DashboardExplorerElementType.DashboardOrganisation,
        DashboardExplorerElementType.DashboardShallow,
        DashboardExplorerElementType.DashboardOrganisationType
      ]
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
    },
    dashboardExplorerElementsFilters: {
      type: Object as PropType<DashboardExplorerElementFilters>,
      required: false,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { entities, fetching, getMany } = useDashboardExplorerElements();

    const dashboards = computed((): DashboardExplorerElementInfos[] => {
      return entities.value
        .filter(e => props.allowedTypes.includes(e.type))
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
      fetching,
      DashboardExplorerElementType,
      ListDirections
    };
  }
});
</script>