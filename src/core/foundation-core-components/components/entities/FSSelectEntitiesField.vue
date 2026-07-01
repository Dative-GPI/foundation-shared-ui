<template>
  <FSEntityField
    v-bind="$attrs"
    :filters="$props.filters"
    :singleSelect="$props.singleEntity"
    :entityType="$props.entityType"
    :modelValue="$props.entitiesIds"
    @update:entityType="onChangeEntityType"
    @update:modelValue="$emit('update:entitiesIds', $event)"
    @update="$emit('update', { entityType: $event.entityType, entitiesIds: $event.modelValue })"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType, ref } from "vue";

import { EntityType } from "@dative-gpi/foundation-shared-domain/enums";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import { type DeviceOrganisationFilters, type GroupFilters, type LocationFilters, type ModelFilters } from "@dative-gpi/foundation-core-domain/models";

import FSEntityField from "./FSEntityField.vue";

export default defineComponent({
  name: "FSSelectEntitiesField",
  components: {
    FSEntityField
  },
  props: {
    singleEntity: {
      type: Boolean,
      required: false,
      default: false
    },
    entityType: {
      type: Number as PropType<EntityType>,
      required: false,
      default: EntityType.Device
    },
    entitiesFilters: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    entitiesIds: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    filters: {
      type: Object as PropType<DeviceOrganisationFilters | LocationFilters | GroupFilters | ModelFilters>,
      required: false,
      default: null
    }
  },
  emits: ["update:entityType", "update:entitiesIds", "update"],
  setup(props, { emit }) {
    const dialog = ref(false);

    const onChangeEntityType = (value: EntityType): void => {
      emit("update:entityType", value);
      emit("update:entitiesIds", []);
      emit("update", {
        entityType: value,
        entitiesIds: []
      });
    };

    return {
      EntityType,
      ColorEnum,
      dialog,
      onChangeEntityType
    };
  }
});
</script>