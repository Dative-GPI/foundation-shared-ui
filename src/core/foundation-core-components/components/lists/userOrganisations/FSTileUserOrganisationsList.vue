<template>
  <FSTileList
    :items="userOrganisations"
    :loading="fetching"
  >
    <template
      #item.tile="{ item, toggleSelect, direction }"
    >
      <FSUserOrganisationTileUI
        :imageId="item.imageId"
        :name="item.name"
        :roleLabel="item.roleLabel"
        :roleIcon="item.roleIcon"
        :admin="item.admin"
        :width="direction === 'column' ? 'fill' : undefined"
        :modelValue="($props.modelValue ?? []).includes(item.id)"
        @update:modelValue="toggleSelect(item)"
      />
    </template>
  </FSTileList>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";

import type { UserOrganisationFilters } from "@dative-gpi/foundation-core-domain/models";
import { useUserOrganisations } from "@dative-gpi/foundation-core-services/composables";

import FSUserOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSUserOrganisationTileUI.vue";
import FSTileList from "@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue";

export default defineComponent({
  name: "FSTileUserOrganisationsList",
  components: {
    FSTileList,
    FSUserOrganisationTileUI
  },
  props: {
    userOrganisationFilters: {
      type: Object as PropType<UserOrganisationFilters>,
      required: false,
      default: () => ({})
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false
    }
  },
  setup(props) {
    const { entities: userOrganisations, getMany, fetching } = useUserOrganisations();

    const fetch = () => {
      getMany(props.userOrganisationFilters);
    };

    watch(() => props.userOrganisationFilters, fetch, { immediate: true });

    return {
      userOrganisations,
      fetching
    };
  }
});
</script>