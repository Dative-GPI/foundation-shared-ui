<template>
  <FSSimpleList
    :items="serviceAccountOrganisations"
    :loading="fetching"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";

import type { ServiceAccountOrganisationFilters } from "@dative-gpi/foundation-core-domain/models";
import { useServiceAccountOrganisations } from "@dative-gpi/foundation-core-services/composables";

import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";

export default defineComponent({
  name: "FSSimpleServiceAccountOrganisationsList",
  components: {
    FSSimpleList,
  },
  props: {
    serviceAccountOrganisationFilters: {
      type: Object as PropType<ServiceAccountOrganisationFilters>,
      required: false,
      default: () => ({})
    }
  },
  setup(props){
    const { entities: serviceAccountOrganisations, getMany, fetching } = useServiceAccountOrganisations();

    const fetch = () => {
      getMany(props.serviceAccountOrganisationFilters);
    };

    watch(() => props.serviceAccountOrganisationFilters, fetch, { immediate: true, deep: true });

    return {
      serviceAccountOrganisations,
      fetching
    }
  }
});
</script>