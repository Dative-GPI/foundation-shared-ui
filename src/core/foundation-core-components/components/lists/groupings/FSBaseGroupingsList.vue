<template>
  <FSDataTable
    defaultMode="iterator"
    :loading="fetchingGroupings"
    :items="groupings"
    :selectable="$props.selectable"
    :showSearch="$props.showSearch"
    :disableTable="$props.disableTable"
    :tableCode="$props.tableCode"
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
        @update:modelValue="toggleSelect(item)"
        v-bind="item"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import type { PropType} from "vue";
import _ from "lodash";

import type { GroupingFilters } from "@dative-gpi/foundation-core-domain/models";
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
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    groupingsFilters: {
      type: Object as PropType<GroupingFilters>,
      required: false,
      default: null
    },
    selectable: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    showSearch: {
      type: Boolean,
      required: false,
      default: false
    },
    disableTable: {
      type: Boolean,
      required: false,
      default: true
    }
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