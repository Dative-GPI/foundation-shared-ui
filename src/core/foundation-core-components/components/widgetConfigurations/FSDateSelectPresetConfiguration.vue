<template>
  <FSSwitch
    :maxWidth="null"
    :label="$tr('ui.widget.use-date-preset', 'Use a date preset from dashboard')"
    :modelValue="$props.useDatePreset"
    @update:modelValue="$emit('update:useDatePreset', $event); $emit('update', { useDatePreset: $event })"
  />
  <FSSelectDashboardDatePreset
    v-if="$props.useDatePreset"
    :maxWidth="null"
    :label="$tr('ui.widget.date-preset', 'Date preset')"
    :items="$props.settings.datePresets"
    :modelValue="$props.datePresetCode"
    @update:modelValue="$emit('update:datePresetCode', $event); $emit('update', { datePresetCode: $event })"
  />
  <template
    v-else
  >
    <FSTermField
      :maxWidth="null"
      :label="$tr('ui.widget.date-setting', 'Date setting')"
      :startDate="$props.startDate"
      :endDate="$props.endDate"
      @update:startDate="$emit('update:startDate', $event)"
      @update:endDate="$emit('update:endDate', $event)"
      @update="$emit('update', $event)"
    />
  </template>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { DashboardSettings } from "@dative-gpi/foundation-core-domain/models";
import FSSwitch from "@dative-gpi/foundation-shared-components/components/FSSwitch.vue";
import FSTermField from "@dative-gpi/foundation-shared-components/components/fields/FSTermField.vue";
import FSSelectDashboardDatePreset from "../fields/FSSelectDashboardDatePreset.vue";

export default defineComponent({
  name: "FSDateSelectPresetConfiguration",
  components: {
    FSSwitch,
    FSTermField,
    FSSelectDashboardDatePreset
  },
  props: {
    settings: {
      type: Object as PropType<DashboardSettings>,
      required: true,
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
    "update:useDatePreset",
    "update:datePresetCode",
    "update:startDate",
    "update:endDate"
  ],
});
</script>