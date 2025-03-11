<template>
  <FSRow
    v-if="fetching && $props.userOrganisationIds && $props.userOrganisationIds.length > 0"
    :wrap="wrapped"
  >
    <FSLoader
      v-for="i in 4"
      :key="i"
      variant="chip"
      height="12px"
    />
  </FSRow>
  <FSRow
    v-else
    :wrap="wrapped"
  >
    <FSChip
      v-for="(label, i) in actualUserOrganisationLabels"
      :key="i"
      :color="ColorEnum.Light"
      :label="label"
    />
  </FSRow>
</template>
  
  <script lang="ts">
import { computed, defineComponent, watch, type PropType } from "vue";
  
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useUserOrganisations } from "@dative-gpi/foundation-core-services/composables";

import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSLoader from "@dative-gpi/foundation-shared-components/components/FSLoader.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
  
export default defineComponent({
  name: "FSChipUserOrganisationsList",
  components: {
    FSRow,
    FSLoader,
    FSChip
  },
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

    const actualUserOrganisationLabels = computed(() => {
      return props.userOrganisationLabels || userOrganisations.value.map(u => u.name);
    });
    
    watch(() => props.userOrganisationIds, async () => {
      if(props.userOrganisationIds && props.userOrganisationIds.length > 0){
        fetchUserOrganisations({
          userOrganisationsIds: props.userOrganisationIds
        });
      }
    }, {immediate: true});
  
    return {
      actualUserOrganisationLabels,
      userOrganisations,
      ColorEnum,
      fetching
    };
  }
});
</script>