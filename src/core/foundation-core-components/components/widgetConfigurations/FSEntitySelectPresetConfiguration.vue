<template>
  <FSSwitch
    :maxWidth="null"
    :label="$tr('ui.widget.use-entity-preset', 'Use an entity preset from dashboard')"
    :modelValue="$props.useEntityPreset"
    @update:modelValue="$emit('update:useEntityPreset', $event); $emit('update', { useEntityPreset: $event })"
  />
  <FSSelectDashboardEntityPreset
    v-if="$props.useEntityPreset"
    :maxWidth="null"
    :label="$tr('ui.common.entity-preset', 'Entity preset')"
    :items="$props.settings.entityPresets"
    :modelValue="$props.entityPresetCode"
    @update:modelValue="$emit('update:entityPresetCode', $event); $emit('update', { entityPresetCode: $event })"
  />
  <FSSelectEntitiesField
    v-else
    :maxWidth="null"
    :label="$tr('ui.widget.entities-settings', 'Entities settings')"
    :entityType="$props.entityType"
    :entitiesIds="$props.entitiesIds"
    :singleEntity="$props.singleEntity"
    :allowedEntityTypes="$props.allowedEntityTypes"
    @update:entityType="$emit('update:entityType', $event)"
    @update:entitiesIds="$emit('update:entitiesIds', $event)"
    @update="$emit('update', $event)"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { EntityType } from "@dative-gpi/foundation-shared-domain/enums";
import type { DashboardSettings } from "@dative-gpi/foundation-core-domain/models";
import FSSwitch from "@dative-gpi/foundation-shared-components/components/FSSwitch.vue";
import FSSelectDashboardEntityPreset from "../fields/FSSelectDashboardEntityPreset.vue";
import FSSelectEntitiesField from "../entities/FSSelectEntitiesField.vue";

export default defineComponent({
  name: "FSEntitySelectPresetConfiguration",
  components: {
    FSSwitch,
    FSSelectDashboardEntityPreset,
    FSSelectEntitiesField
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
    allowedEntityTypes: {
      type: Array as PropType<EntityType[]>,
      required: false,
      default: () => [EntityType.Model, EntityType.Group, EntityType.Location, EntityType.Device, EntityType.Grouping, EntityType.Subgrouping],
    },
  },
  emits: [
    "update",
    "update:useEntityPreset",
    "update:entityPresetCode",
    "update:entityType",
    "update:entitiesIds"
  ],
});
</script>