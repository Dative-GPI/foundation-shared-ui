<template>
  <FSLoadTile
    v-if="getting"
    :selectable="$props.selectable"
    :modelValue="$props.modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
  />
  <FSDashboardOrganisationTileUI
    v-else-if="entity"
    :code="entity.code"
    :icon="entity.icon"
    :label="entity.label"
    :imageId="entity.imageId"
    :selectable="$props.selectable"
    :bottomColor="entity.colors"
    :modelValue="$props.modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";

import { useDashboardOrganisation } from "@dative-gpi/foundation-core-services/composables";

import FSDashboardOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue";
import FSLoadTile from "@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue";

export default defineComponent({
  name: "FSDashboardOrganisationTile",
  components: {
    FSDashboardOrganisationTileUI,
    FSLoadTile
  },
  props: {
    dashboardOrganisationId: {
      type: String,
      required: true
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    selectable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { get, getting, entity } = useDashboardOrganisation();

    onMounted(() => {
      get(props.dashboardOrganisationId);
    });

    watch(() => props.dashboardOrganisationId, () => {
      get(props.dashboardOrganisationId);
    });

    return {
      getting,
      entity
    };
  }
});
</script>