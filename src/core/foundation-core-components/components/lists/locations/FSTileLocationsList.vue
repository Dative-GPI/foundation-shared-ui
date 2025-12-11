<template>
  <FSTileList
    :items="locations"
    :loading="fetching"
  >
    <template
      #item.tile="{ item, toggleSelect, direction }"
    >
      <FSLocationTileUI
        :icon="item.icon"
        :label="item.label"
        :code="item.code"
        :color="item.color"
        :address="item.address?.placeLabel"
        :deviceCount="item.deviceOrganisationsCount"
        :width="direction === 'column' ? 'fill' : undefined"
        :modelValue="($props.modelValue ?? []).includes(item.id)"
        @update:modelValue="toggleSelect(item)"
      />
    </template>
  </FSTileList>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";

import type { LocationFilters } from "@dative-gpi/foundation-core-domain/models";
import { useLocations } from "@dative-gpi/foundation-core-services/composables";

import FSLocationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSLocationTileUI.vue";
import FSTileList from "@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue";

export default defineComponent({
  name: "FSTileLocationsList",
  components: {
    FSTileList,
    FSLocationTileUI
  },
  props: {
    locationFilters: {
      type: Object as PropType<LocationFilters>,
      required: false,
      default: () => ({})
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { entities: locations, getMany, fetching } = useLocations();

    const fetch = () => {
      getMany(props.locationFilters);
    };

    watch(() => props.locationFilters, fetch, { immediate: true });

    return {
      locations,
      fetching
    };
  }
});
</script>