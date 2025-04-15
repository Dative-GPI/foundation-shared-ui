<template>
  <FSLoadTile
    v-if="getting"
    :selectable="$props.selectable"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
  <FSServiceAccountOrganisationTileUI
    v-else-if="entity"
    :imageId="entity.imageId"
    :label="entity.label"
    :roleLabel="entity.roleLabel"
    :roleIcon="entity.roleIcon"
    :selectable="$props.selectable"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>
  
<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
  
import { useServiceAccountOrganisation } from "@dative-gpi/foundation-core-services/composables";
  
import FSServiceAccountOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSServiceAccountOrganisationTileUI.vue";
import FSLoadTile from "@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue";
  
export default defineComponent({
  name: "FSServiceAccountOrganisationTile",
  components: {
    FSServiceAccountOrganisationTileUI,
    FSLoadTile
  },
  props: {
    serviceAccountOrganisationId: {
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
    const { get, getting, entity } = useServiceAccountOrganisation();

    onMounted(() => {
      get(props.serviceAccountOrganisationId);
    });

    watch(() => props.serviceAccountOrganisationId, () => {
      get(props.serviceAccountOrganisationId);
    });

    return {
      getting,
      entity
    };
  }
});
</script>