<template>
  <FSTileList
    :items="playlists"
    :loading="fetching"
    :selectable="$props.selectable"
    :singleSelect="$props.singleSelect"
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
      #item.tile="{ item, toggleSelect, direction }"
    >
      <FSPlaylistTileUI
        :dashboardsCount="item.dashboards.length"
        :selectable="$props.selectable"
        :singleSelect="$props.singleSelect"
        :modelValue="($props.modelValue ?? []).includes(item.id)"
        :width="direction === ListDirections.Column ? 'fill' : undefined"
        @update:modelValue="toggleSelect(item)"
        v-bind="item"
      />
    </template>
  </FSTileList>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { defineComponent, watch } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { ListDirections } from "@dative-gpi/foundation-shared-domain/enums";

import type { PlaylistFilters } from "@dative-gpi/foundation-core-domain/models";
import { usePlaylists } from "@dative-gpi/foundation-core-services/composables";

import FSPlaylistTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSPlaylistTileUI.vue";
import FSTileList from "@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue";


export default defineComponent({
  title: "FSTilePlaylistsList",
  components: {
    FSPlaylistTileUI,
    FSTileList
  },
  props: {
    playlistFilters: {
      type: Object as PropType<PlaylistFilters>,
      required: true
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
    },
  },
  setup(props) {
    const { entities: playlists, getMany, fetching } = usePlaylists();

    const fetch = () => {
      getMany(props.playlistFilters);
    };

    watch(() => props.playlistFilters, fetch, { immediate: true });
    return {
      ListDirections,
      playlists,
      ColorEnum,
      fetching
    };
  }
});
</script>