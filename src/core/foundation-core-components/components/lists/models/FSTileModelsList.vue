<template>
  <FSTileList
    :items="models"
    :loading="fetching"
    :selectable="$props.selectable"
    :singleSelect="$props.singleSelect"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #item.tile="{ item, toggleSelect, direction }"
    >
      <FSModelTileUI
        :imageId="item.imageId"
        :label="item.label"
        :code="item.code"
        :width="direction === 'column' ? 'fill' : undefined"
        :selectable="$props.selectable"
        :modelValue="($props.modelValue ?? []).includes(item.id)"
        @update:modelValue="toggleSelect(item)"
      />
    </template>
  </FSTileList>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";

import type { ModelFilters } from "@dative-gpi/foundation-core-domain/models";
import { useModels } from "@dative-gpi/foundation-core-services/composables";

import FSModelTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSModelTileUI.vue";
import FSTileList from "@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue";

export default defineComponent({
  name: "FSTileModelsList",
  components: {
    FSTileList,
    FSModelTileUI
  },
  props: {
    modelFilters: {
      type: Object as PropType<ModelFilters>,
      required: false,
      default: () => ({})
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    selectable: {
      type: Boolean,
      required: false,
      default: false
    },
    singleSelect: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { entities: models, getMany, fetching } = useModels();

    const fetch = () => {
      getMany(props.modelFilters);
    };

    watch(() => props.modelFilters, fetch, { immediate: true });

    return {
      models,
      fetching
    };
  }
});
</script>