<template>
  <FSLoadTile
    v-if="getting"
    :selectable="$props.selectable"
    :modelValue="$props.modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
  />
  <FSFolderTileUI
    v-else-if="entity"
    :code="entity.code"
    :icon="entity.icon"
    :label="entity.label"
    :imageId="entity.imageId"
    :bottomColor="entity.colors"
    :recursiveFoldersIds="entity.recursiveFoldersIds"
    :recursiveDashboardsIds="entity.recursiveDashboardsIds"
    :selectable="$props.selectable"
    :modelValue="$props.modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";

import { useFolder } from "@dative-gpi/foundation-core-services/composables";

import FSFolderTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSFolderTileUI.vue";
import FSLoadTile from "@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue";

export default defineComponent({
  name: "FSFolderTile",
  components: {
    FSFolderTileUI,
    FSLoadTile
  },
  props: {
    folderId: {
      type: String,
      required: true
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    selectable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { get, getting, entity } = useFolder();

    onMounted(() => {
      get(props.folderId);
    });

    watch(() => props.folderId, () => {
      get(props.folderId);
    });

    return {
      getting,
      entity
    };
  }
});
</script>