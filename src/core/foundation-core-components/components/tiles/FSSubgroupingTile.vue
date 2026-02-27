<template>
  <FSLoadTile
    v-if="getting"
    :selectable="$props.selectable"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
  <FSSubgroupingTileUI
    v-else-if="entity"
    :icon="entity.icon"
    :label="entity.label"
    :code="entity.code"
    :groupingLabel="entity.groupingLabel"
    :groupingIcon="entity.groupingIcon"
    :groupingColor="entity.groupingColor"
    :deviceOrganisationsCount="entity.deviceOrganisationsCount"
    :selectable="$props.selectable"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

import { useSubgrouping } from "@dative-gpi/foundation-core-services/composables";

import FSSubgroupingTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSSubgroupingTileUI.vue";
import FSLoadTile from "@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue";

export default defineComponent({
  name: "FSSubgroupingTile",
  components: {
    FSSubgroupingTileUI,
    FSLoadTile
  },
  props: {
    subgroupingId: {
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
    const { get, getting, entity } = useSubgrouping();

    watch(() => props.subgroupingId, () => {
      get(props.subgroupingId);
    }, { immediate: true });

    return {
      getting,
      entity
    };
  }
});
</script>
