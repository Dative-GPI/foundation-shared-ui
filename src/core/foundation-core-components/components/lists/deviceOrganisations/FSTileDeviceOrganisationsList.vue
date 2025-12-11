<template>
  <FSTileList
    :items="deviceOrganisations"
    :loading="fetching"
  >
    <template
      #item.tile="{ item, toggleSelect, direction }"
    >
      <FSDeviceOrganisationTileUI
        :imageId="item.imageId"
        :label="item.label"
        :code="item.code"
        :deviceConnectivity="item.connectivity"
        :deviceWorstAlert="item.worstAlert"
        :deviceAlerts="item.alerts"
        :modelStatuses="item.modelStatuses"
        :deviceStatuses="item.status?.statuses"
        :width="direction === 'column' ? 'fill' : undefined"
        :modelValue="($props.modelValue ?? []).includes(item.id)"
        @update:modelValue="toggleSelect(item)"
      />
    </template>
  </FSTileList>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";

import type { DeviceOrganisationFilters } from "@dative-gpi/foundation-core-domain/models";
import { useDeviceOrganisations } from "@dative-gpi/foundation-core-services/composables";

import FSDeviceOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDeviceOrganisationTileUI.vue";
import FSTileList from "@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue";

export default defineComponent({
  name: "FSTileDeviceOrganisationsList",
  components: {
    FSTileList,
    FSDeviceOrganisationTileUI
  },
  props: {
    deviceOrganisationFilters: {
      type: Object as PropType<DeviceOrganisationFilters>,
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
    const { entities: deviceOrganisations, getMany, fetching } = useDeviceOrganisations();

    const fetch = () => {
      getMany(props.deviceOrganisationFilters);
    };

    watch(() => props.deviceOrganisationFilters, fetch, { immediate: true });

    return {
      deviceOrganisations,
      fetching
    };
  }
});
</script>