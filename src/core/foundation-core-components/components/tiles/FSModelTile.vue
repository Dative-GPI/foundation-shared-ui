<template>
  <FSLoadTile
    v-if="getting"
    :selectable="$props.selectable"
    :modelValue="modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
  />
  <FSModelTileUI
    v-else-if="entity"
    :imageId="entity.imageId"
    :label="entity.label"
    :code="entity.code"
    :selectable="$props.selectable"
    :modelValue="modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

import { useModel } from "@dative-gpi/foundation-core-services/composables";

import FSModelTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSModelTileUI.vue";
import FSLoadTile from "@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue";

export default defineComponent({
  name: "FSModelTile",
  components: {
    FSModelTileUI,
    FSLoadTile
  },
  props: {
    modelId: {
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
  setup(props) {
    const { get, getting, entity } = useModel();

    watch(() => props.modelId, () => {
      get(props.modelId);
    }, { immediate: true });

    return {
      getting,
      entity
    };
  }
});
</script>