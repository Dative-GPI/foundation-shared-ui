<template>
  <FSTileList
    :items="subgroupings"
    :loading="fetching"
    :selectable="$props.selectable"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #item.tile="{ item, toggleSelect, direction }"
    >
      <FSSubgroupingTileUI
        :icon="item.icon"
        :label="item.label"
        :code="item.code"
        :groupingLabel="item.groupingLabel"
        :groupingIcon="item.groupingIcon"
        :groupingColor="item.groupingColor"
        :deviceOrganisationsCount="item.deviceOrganisationsCount"
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

import type { SubgroupingFilters } from "@dative-gpi/foundation-core-domain/models";
import { useSubgroupings } from "@dative-gpi/foundation-core-services/composables";

import FSSubgroupingTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSSubgroupingTileUI.vue";
import FSTileList from "@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue";

import { ListDirections } from "@dative-gpi/foundation-shared-domain/enums";

export default defineComponent({
  name: "FSTileSubgroupingsList",
  components: {
    FSTileList,
    FSSubgroupingTileUI
  },
  props: {
    subgroupingFilters: {
      type: Object as PropType<SubgroupingFilters>,
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
    const { entities: subgroupings, getMany, fetching } = useSubgroupings();

    const fetch = () => {
      getMany(props.subgroupingFilters);
    };

    watch(() => props.subgroupingFilters, fetch, { immediate: true });

    return {
      subgroupings,
      fetching,
      ListDirections
    };
  }
});
</script>
