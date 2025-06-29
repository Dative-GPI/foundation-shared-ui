<template>
  <FSSimpleList
    :items="playlists"
    :loading="fetching"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";

import type { PlaylistFilters } from "@dative-gpi/foundation-core-domain/models";
import { usePlaylists } from "@dative-gpi/foundation-core-services/composables";

import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";

export default defineComponent({
  name: "FSSimplePlaylistsList",
  components: {
    FSSimpleList,
  },
  props: {
    playlistFilters: {
      type: Object as PropType<PlaylistFilters>,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const { entities: playlists, getMany, fetching } = usePlaylists();
    
    const fetch = () => {
      getMany(props.playlistFilters);
    }

    watch(() => props.playlistFilters, fetch, { immediate: true });

    return {
      playlists,
      fetching
    }
  }
});
</script>