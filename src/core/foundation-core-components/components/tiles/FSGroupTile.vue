<template>
  <FSLoadTile
    v-if="getting"
    :selectable="$props.selectable"
    :modelValue="modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
  />
  <FSGroupTileUI
    v-else-if="entity"
    :imageId="entity.imageId"
    :label="entity.label"
    :code="entity.code"
    :recursiveGroupsIds="entity.recursiveGroupsIds"
    :recursiveDeviceOrganisationsIds="entity.recursiveDeviceOrganisationsIds"
    :selectable="$props.selectable"
    :modelValue="modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";

import { useGroup } from "@dative-gpi/foundation-core-services/composables";

import FSGroupTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSGroupTileUI.vue";
import FSLoadTile from "@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue";

export default defineComponent({
  name: "FSGroupTile",
  components: {
    FSGroupTileUI,
    FSLoadTile
  },
  props: {
    groupId: {
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
    const { get, getting, entity } = useGroup();

    onMounted(() => {
      get(props.groupId);
    });

    watch(() => props.groupId, () => {
      get(props.groupId);
    });

    return {
      getting,
      entity
    };
  }
});
</script>