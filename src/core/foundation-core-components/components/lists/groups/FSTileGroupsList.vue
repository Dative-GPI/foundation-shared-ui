<template>
  <FSTileList
    :items="groups"
    :loading="fetching"
    :selectable="$props.selectable"
    :singleSelect="$props.singleSelect"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #item.tile="{ item, toggleSelect, direction }"
    >
      <FSGroupTileUI
        :imageId="item.imageId"
        :label="item.label"
        :code="item.code"
        :recursiveGroupsIds="item.recursiveGroupsIds"
        :recursiveDeviceOrganisationsIds="item.recursiveDeviceOrganisationsIds"
        :width="direction === 'column' ? 'fill' : undefined"
        :selectable="$props.selectable"
        :modelValue="($props.modelValue ?? []).includes(item.id)"
        @update:modelValue="toggleSelect(item)"
      />
    </template>
  </FSTileList>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";

import type { GroupFilters } from "@dative-gpi/foundation-core-domain/models";
import { useGroups } from "@dative-gpi/foundation-core-services/composables";

import FSGroupTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSGroupTileUI.vue";
import FSTileList from "@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue";

export default defineComponent({
  name: "FSTileGroupsList",
  components: {
    FSTileList,
    FSGroupTileUI
  },
  props: {
    groupFilters: {
      type: Object as PropType<GroupFilters>,
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
    },
    singleSelect: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { entities: groups, getMany, fetching } = useGroups();

    const fetch = () => {
      getMany(props.groupFilters);
    };

    watch(() => props.groupFilters, fetch, { immediate: true });

    return {
      groups,
      fetching
    };
  }
});
</script>