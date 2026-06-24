<template>
  <FSLoadTile
    v-if="getting"
    :selectable="$props.selectable"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
  <PlaylistTileUI
    v-else-if="entity"
    :dashboardsCount="entity.dashboards?.length ?? 0"
    :looped="entity.looped"
    :delay="entity.delay"
    :label="entity.label"
    :code="entity.code"
    :selectable="$props.selectable"
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
  </PlaylistTileUI>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

import { usePlaylist } from "@dative-gpi/foundation-core-services/composables";

import FSLoadTile from "@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue";

import PlaylistTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSPlaylistTileUI.vue";


export default defineComponent({
  name: "FSPlaylistTile",
  components: {
    PlaylistTileUI,
    FSLoadTile
  },
  props: {
    playlistId: {
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
      default: false
    },
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { get, getting, entity } = usePlaylist();

    watch(() => props.playlistId, () => {
      get(props.playlistId);
    }, { immediate: true });

    return {
      getting,
      entity
    };
  }
});
</script>