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
  <FSChipGroup
    v-else
    :color="ColorEnum.Light"
    :labels="userOrganisations?.map(u => u.name)"
    v-bind="$attrs"
  />
</template>
  
  <script lang="ts">
import { defineComponent, watch, type PropType } from "vue";
  
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useUserOrganisations } from "@dative-gpi/foundation-core-services/composables";

import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSLoader from "@dative-gpi/foundation-shared-components/components/FSLoader.vue";
import FSChipGroup from "@dative-gpi/foundation-shared-components/components/FSChipGroup.vue";
  
export default defineComponent({
  name: "FSChipUserOrganisationsList",
  components: {
    FSChipGroup,
    FSLoader,
    FSRow
  },
  props: {
    userOrganisationIds: {
      type: Array as PropType<string[]>,
      required: false
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