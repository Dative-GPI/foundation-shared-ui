<template>
  <FSRow
    v-if="fetching"
  >
    <FSLoader
      v-for="i in 4"
      :key="i"
      variant="chip"
      height="12px"
    />
  </FSRow>
  <FSChipGroupUserOrganisationUI
    v-else
    :userOrganisationLabels="userOrganisations.map(u => u.name)"
    :wrapped="wrapped"
  />
</template>

<script lang="ts">
import { defineComponent, watch, type PropType } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useUserOrganisations } from "@dative-gpi/foundation-core-services/composables";

import FSChipGroupUserOrganisationUI from "./FSChipGroupUserOrganisationUI.vue";

export default defineComponent({
  name: "FSChipGroupUserOrganisation",
  components: {
    FSChipGroupUserOrganisationUI
  },
  props: {
    userOrganisationIds: {
      type: Array as PropType<string[]>,
      required: false
    },
    wrapped: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const {getMany: fetchUserOrganisations, fetching, entities: userOrganisations} = useUserOrganisations();

    watch(() => props.userOrganisationIds, async () => {
      if(props.userOrganisationIds && props.userOrganisationIds.length > 0){
        fetchUserOrganisations({
          userOrganisationsIds: props.userOrganisationIds
        });
      }
    }, {immediate: true});

    return {
      userOrganisations,
      ColorEnum,
      fetching
    };
  }
});
</script>