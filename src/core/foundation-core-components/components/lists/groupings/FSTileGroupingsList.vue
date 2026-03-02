<template>
  <FSTileList
    :items="groupings"
    :loading="fetching"
    :selectable="$props.selectable"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #item.tile="{ item, toggleSelect, direction }"
    >
      <FSGroupingTileUI
        :icon="item.icon"
        :iconColor="item.color"
        :label="item.label"
        :code="item.code"
        :subgroupingCount="item.subgroupingCount"
        :width="direction === ListDirections.Column ? 'fill' : undefined"
        :selectable="$props.selectable"
        :modelValue="($props.modelValue ?? []).includes(item.id)"
        @update:modelValue="toggleSelect(item)"
      />
    </template>
  </FSTileList>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";

import type { GroupingFilters } from "@dative-gpi/foundation-core-domain/models";
import { useGroupings } from "@dative-gpi/foundation-core-services/composables";

import FSGroupingTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSGroupingTileUI.vue";
import FSTileList from "@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue";

import { ListDirections } from "@dative-gpi/foundation-shared-domain/enums";

export default defineComponent({
  name: "FSTileGroupingsList",
  components: {
    FSTileList,
    FSGroupingTileUI
  },
  props: {
    groupingFilters: {
      type: Object as PropType<GroupingFilters>,
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
    const { entities: groupings, getMany, fetching } = useGroupings();

    const fetch = () => {
      getMany(props.groupingFilters);
    };

    watch(() => props.groupingFilters, fetch, { immediate: true });

    return {
      groupings,
      fetching,
      ListDirections
    };
  }
});
</script>
