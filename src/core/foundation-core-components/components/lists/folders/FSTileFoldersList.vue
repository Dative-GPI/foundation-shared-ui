<template>
  <FSTileList
    :items="folders"
    :loading="fetching"
    :selectable="$props.selectable"
    :singleSelect="$props.singleSelect"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #item.tile="{ item, toggleSelect }"
    >
      <FSFolderTileUI
        :code="item.code"
        :icon="item.icon"
        :label="item.label"
        :imageId="item.imageId"
        :bottomColor="item.colors"
        :recursiveFoldersIds="item.recursiveFoldersIds"
        :recursiveDashboardsIds="item.recursiveDashboardsIds"
        :selectable="$props.selectable"
        :modelValue="($props.modelValue ?? []).includes(item.id)"
        @update:modelValue="toggleSelect(item)"
      />
    </template>
  </FSTileList>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";

import type { FolderFilters } from "@dative-gpi/foundation-core-domain/models";
import { useFolders } from "@dative-gpi/foundation-core-services/composables";

import FSFolderTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSFolderTileUI.vue";
import FSTileList from "@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue";

export default defineComponent({
  name: "FSTileFoldersList",
  components: {
    FSTileList,
    FSFolderTileUI
  },
  props: {
    folderFilters: {
      type: Object as PropType<FolderFilters>,
      required: false,
      default: () => ({})
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
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { entities: folders, getMany, fetching } = useFolders();

    const fetch = () => {
      getMany(props.folderFilters);
    };

    watch(() => props.folderFilters, fetch, { immediate: true });

    return {
      folders,
      fetching
    };
  }
});
</script>