<template>
  <FSBaseDashboardsExplorer
    :tableCode="$props.tableCode"
    :allowedTypes="$props.allowedTypes"
    :dashboardExplorerElementsFilters="$props.dashboardExplorerElementsFilters"
    :itemTo="$props.itemTo"
    :selectable="$props.selectable"
    :singleSelect="$props.singleSelect"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    @update:types="onUpdateTypes"
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
  </FSBaseDashboardsExplorer>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { RouteLocation } from "vue-router";

import { DashboardExplorerElementType, DashboardType } from "@dative-gpi/foundation-shared-domain/enums";
import type { DashboardExplorerElementFilters, DashboardExplorerElementInfos } from "@dative-gpi/foundation-core-domain/models";

import FSBaseDashboardsExplorer from "../../explorers/FSBaseDashboardsExplorer.vue";

export default defineComponent({
  name: "FSBaseDashboardsList",
  components: {
    FSBaseDashboardsExplorer
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    allowedTypes: {
      type: Array as PropType<DashboardExplorerElementType[]>,
      required: false,
      default: () => [
        DashboardExplorerElementType.DashboardOrganisation,
        DashboardExplorerElementType.DashboardShallow,
        DashboardExplorerElementType.DashboardOrganisationType
      ]
    },
    itemTo: {
      type: Function as PropType<(item: DashboardExplorerElementInfos) => Partial<RouteLocation>>,
      required: false
    },
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    },
    selectable: {
      type: Boolean,
      required: false,
      default: true
    },
    singleSelect: {
      type: Boolean,
      required: false,
      default: false
    },
    dashboardExplorerElementsFilters: {
      type: Object as PropType<DashboardExplorerElementFilters>,
      required: false,
      default: () => ({})
    },
  },
  emits: ["update:modelValue", "update:types"],
  setup(_, { emit }) {
    const onUpdateTypes = (types: (DashboardExplorerElementType | undefined)[]): void => {
      emit("update:types", types.map(t => {
        switch (t) {
          case DashboardExplorerElementType.DashboardOrganisation:     return DashboardType.Organisation;
          case DashboardExplorerElementType.DashboardShallow:          return DashboardType.Shallow;
          case DashboardExplorerElementType.DashboardOrganisationType: return DashboardType.OrganisationType;
          default:                                                      return DashboardType.None;
        }
      }));
    };

    return { 
      onUpdateTypes 
    };
  }
});
</script>