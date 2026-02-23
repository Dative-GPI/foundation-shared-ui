<template>
  <FSDataTable
    defaultMode="iterator"
    :loading="fetchingGroupings"
    :singleSelect="$props.singleSelect"
    :selectable="$props.selectable"
    :items="groupings"
    :itemTo="$props.itemTo"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
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
    <template
      #item.icon="{ item }"
    >
      <FSIcon>
        {{ item.icon }}
      </FSIcon>
    </template>
    <template
      #item.tile="{ item, toggleSelect }"
    >
      <FSGroupingTileUI
        :selectable="$props.selectable"
        :modelValue="isSelected(item.id)"
        :singleSelect="$props.singleSelect"
        :subgroupingCount="item.subgroupingCount"
        :iconColor="item.color"
        :label="item.label"
        :icon="item.icon"
        :code="item.code"
        :to="$props.itemTo && $props.itemTo(item)"
        @update:modelValue="toggleSelect(item)"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { type RouteLocation } from "vue-router";
import type { PropType} from "vue";
import _ from "lodash";

import type { GroupingFilters, GroupingInfos } from "@dative-gpi/foundation-core-domain/models";
import { useGroupings } from "@dative-gpi/foundation-core-services/composables";

import FSDataTable from "../FSDataTable.vue";

import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSGroupingTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSGroupingTileUI.vue";


export default defineComponent({
  name: "FSBaseGroupingsList",
  components: {
    FSDataTable,
    FSIcon,
    FSGroupingTileUI
  },
  props: {
    itemTo: {
      type: Function as PropType<(item: GroupingInfos) => Partial<RouteLocation>>,
      required: false
    },
    groupingsFilters: {
      type: Object as PropType<GroupingFilters>,
      required: false,
      default: null
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
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getMany: fetchGroupings, fetching: fetchingGroupings, entities: groupings } = useGroupings();

    const isSelected = (id: string) => {
      return props.modelValue.includes(id);
    };

    watch(() => props.groupingsFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetchGroupings(props.groupingsFilters);
      }
    }, { immediate: true });

    return {
      fetchingGroupings,
      groupings,
      isSelected
    };
  }
});
</script>