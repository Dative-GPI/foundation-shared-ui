<template>
  <FSLoadTile
    v-if="getting"
    :selectable="$props.selectable"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
  <FSGroupingTileUI
    v-else-if="entity"
    :icon="entity.icon"
    :iconColor="entity.color"
    :label="entity.label"
    :code="entity.code"
    :subgroupingCount="entity.subgroupingCount"
    :selectable="$props.selectable"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

import { useGrouping } from "@dative-gpi/foundation-core-services/composables";

import FSGroupingTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSGroupingTileUI.vue";
import FSLoadTile from "@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue";

export default defineComponent({
  name: "FSGroupingTile",
  components: {
    FSGroupingTileUI,
    FSLoadTile
  },
  props: {
    groupingId: {
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
  emits: ["update:modelValue"],
  inheritAttrs: false,
  setup(props) {
    const { get, getting, entity } = useGrouping();

    watch(() => props.groupingId, () => {
      get(props.groupingId);
    }, { immediate: true });

    return {
      getting,
      entity
    };
  }
});
</script>
