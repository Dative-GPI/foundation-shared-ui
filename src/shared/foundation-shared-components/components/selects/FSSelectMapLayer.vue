<template>
  <FSSelectField
    :items="items"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #item-prepend="{ item }"
    >
      <FSIcon
        :icon="item.icon"
      />
    </template>
  </FSSelectField>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { defineComponent } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";

import { MapLayers } from '@dative-gpi/foundation-shared-components/models';

import FSSelectField from "../fields/FSSelectField.vue";
import FSIcon from '@dative-gpi/foundation-shared-components/components/FSIcon.vue';

export default defineComponent({
  name: "FSSelectMapLayer",
  components: {
    FSIcon,
    FSSelectField
  },
  props: {
    modelValue: {
      type: [String, Array] as PropType<MapLayers | MapLayers[]>,
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup() {
    const { $tr } = useTranslationsProvider();

    const items = [
      {
        id: MapLayers.Map,
        icon: 'mdi-map',
        label: $tr("ui.map-layer.map", "Map")
      },
      {
        id: MapLayers.Imagery,
        icon: 'mdi-satellite',
        label: $tr("ui.map-layer.imagery", "Imagery")
      },
      {
        id: MapLayers.Snow,
        icon: 'mdi-snowflake',
        label: $tr("ui.map-layer.snow", "Snow ski map")
      }
    ]

    return {
      items
    };
  }
});
</script>