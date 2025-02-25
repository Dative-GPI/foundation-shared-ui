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
  <FSRow
    v-else-if="userOrganisations.length > 0"
    :wrap="wrapped"
  >
    <FSChip
      v-for="userOrganisation in userOrganisations"
      :key="userOrganisation.id"
      :color="ColorEnum.Light"
      :label="userOrganisation.name"
    />
  </FSRow>
  <FSRow
    v-else
    :wrap="wrapped"
  >
    <FSChip
      v-for="(label, i) in $props.userOrganisationLabels"
      :key="i"
      :color="ColorEnum.Light"
      :label="label"
    />
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, watch, type PropType } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useUserOrganisations } from "@dative-gpi/foundation-core-services/composables";

export default defineComponent({
  name: "ChipGroupUserOrganisation",
  props: {
    userOrganisationIds: {
      type: Array as PropType<string[]>,
      required: false
    },
    userOrganisationLabels: {
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