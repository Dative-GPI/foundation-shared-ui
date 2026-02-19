<template>
  <FSLoadTile
    v-if="getting"
    :selectable="$props.selectable"
    :modelValue="modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
  />
  <FSLocationTileUI
    v-else-if="entity"
    :icon="entity.icon"
    :label="entity.label"
    :code="entity.code"
    :color="entity.color"
    :address="entity.address.formattedAddress"
    :deviceCount="entity.deviceOrganisationsCount"
    :selectable="$props.selectable"
    :modelValue="modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

import { useLocation } from "@dative-gpi/foundation-core-services/composables";

import FSLocationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSLocationTileUI.vue";
import FSLoadTile from "@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue";

export default defineComponent({
  name: "FSLocationTile",
  components: {
    FSLocationTileUI,
    FSLoadTile
  },
  props: {
    locationId: {
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
  emits: ['update:modelValue'],
  inheritAttrs: false,
  setup(props) {
    const { get, getting, entity } = useLocation();

    watch(() => props.locationId, () => {
      get(props.locationId);
    }, { immediate: true });

    return {
      getting,
      entity
    };
  }
});
</script>