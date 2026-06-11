<template>
  <FSCol
    v-if="$props.label"
    padding="16px"
    gap="12px"
    style="background: white; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.15);"
  >
    <FSRow
      align="center-left"
      gap="8px"
    >
      <div
        :style="{
          width: '12px',
          height: '12px',
          borderRadius: '3px',
          background: $props.color,
          flexShrink: '0'
        }"
      />
      <FSText font="text-button">
        {{ $props.label }}
      </FSText>
    </FSRow>
    <FSText font="text-h2">
      {{ $props.value }} {{ $props.unit }}
    </FSText>
    <FSProgressBar
      :modelValue="$props.percentage"
      :min="0"
      :max="100"
      :showValue="false"
      :startColor="$props.color"
      :endColor="$props.color"
    />
  </FSCol>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSProgressBar from "@dative-gpi/foundation-shared-components/components/FSProgressBar.vue";

export default defineComponent({
  name: "ChartTooltip",
  components: { FSCol, FSRow, FSText, FSProgressBar },
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#5470c6"
    },
    percentage: {
      type: Number,
      default: 0
    }
  }
});
</script>
