<template>
  <FSRow
    align="bottom-left"
    :wrap="false"
    gap="16px"
  >
    <FSRow
      align="bottom-center"
    >
      <FSNumberField
        :label="$tr('entity.widget.width', 'Width')"
        :modelValue="widgetWidth"
        @update:modelValue="$emit('update:widgetWidth', $event)"
      />
      <FSNumberField
        :label="$tr('entity.widget.height', 'Height')"
        :modelValue="widgetHeight"
        @update:modelValue="$emit('update:widgetHeight', $event)"
      />
      <FSRow
        width="hug"
      >
        <FSSwitch
          class="dialog-configure-widget-hide-borders"
          :label="$tr('entity.widget.hide-borders', 'Hide borders')"
          :modelValue="hideBorders"
          @update:modelValue="$emit('update:hideBorders', $event)"
        />
      </FSRow>
    </FSRow>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FSRow from "./FSRow.vue";
import FSNumberField from "./fields/FSNumberField.vue";
import FSSwitch from "./FSSwitch.vue";

export default defineComponent({
  name: "WidgetStandardOptions",
  components: {
    FSRow,
    FSNumberField,
    FSSwitch
  },
  props: {
    widgetWidth: {
      type: Number,
      required: true
    },
    widgetHeight: {
      type: Number,
      required: true
    },
    hideBorders: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:widgetWidth", "update:widgetHeight", "update:hideBorders"]
});
</script>