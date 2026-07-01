<template>
  <FSEntitySelectPresetConfiguration
    :settings="$props.settings"
    :useEntityPreset="$props.useEntityPreset"
    :entityPresetCode="$props.entityPresetCode"
    :entityType="$props.entityType"
    :entitiesIds="$props.entitiesIds"
    :singleEntity="$props.singleEntity"
    @update:useEntityPreset="$emit('update:useEntityPreset', $event)"
    @update:entityPresetCode="$emit('update:entityPresetCode', $event)"
    @update:entityType="$emit('update:entityType', $event)"
    @update:entitiesIds="$emit('update:entitiesIds', $event)"
    @update="$emit('update', $event)"
  />
  <FSDateSelectPresetConfiguration
    :settings="$props.settings"
    :useDatePreset="$props.useDatePreset"
    :datePresetCode="$props.datePresetCode"
    :startDate="$props.startDate"
    :endDate="$props.endDate"
    @update:useDatePreset="$emit('update:useDatePreset', $event)"
    @update:datePresetCode="$emit('update:datePresetCode', $event)"
    @update:startDate="$emit('update:startDate', $event)"
    @update:endDate="$emit('update:endDate', $event)"
    @update="$emit('update', $event)"
  />
</template>
  
<script lang="ts">
import { defineComponent, type PropType } from "vue";
  
import { EntityType } from "@dative-gpi/foundation-shared-domain/enums";
import type { DashboardSettings } from "@dative-gpi/foundation-core-domain/models";
  
import FSEntitySelectPresetConfiguration from "./FSEntitySelectPresetConfiguration.vue";
import FSDateSelectPresetConfiguration from "./FSDateSelectPresetConfiguration.vue";
  
export default defineComponent({
  name: "FSBaseSelectPresetConfiguration",
  components: {
    FSEntitySelectPresetConfiguration,
    FSDateSelectPresetConfiguration
  },
  props: {
    settings: {
      type: Object as PropType<DashboardSettings>,
      required: true,
    },
    useEntityPreset: {
      type: Boolean,
      required: true,
    },
    entityPresetCode: {
      type: String,
      required: false,
      default: "",
    },
    entityType: {
      type: Number as PropType<EntityType>,
      required: false,
      default: EntityType.None
    },
    entitiesIds: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => [],
    },
    singleEntity: {
      type: Boolean,
      required: false,
      default: false,
    },
    useDatePreset: {
      type: Boolean,
      required: true,
    },
    datePresetCode: {
      type: String,
      required: false,
      default: "",
    },
    startDate: {
      type: String,
      required: false,
      default: "now - 1d",
    },
    endDate: {
      type: String,
      required: false,
      default: "now",
    }
  },
  emits: [
    "update",
    "update:useEntityPreset",
    "update:entityPresetCode",
    "update:entityType",
    "update:entitiesIds",
    "update:useDatePreset",
    "update:datePresetCode",
    "update:startDate",
    "update:endDate",
  ],
});
</script>