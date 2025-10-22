<template>
  <FSCard
    height="100px"
    width="100%"
  >
    <FSCol
      align="center-center"
    >
      <FSIcon
        v-if="icon"
        size="32px"
      >
        {{ $props.icon }}
      </FSIcon>
      <FSText
        font="text-overline"
      >
        {{ $props.label }}
      </FSText>
    </FSCol>
  </FSCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FSCard from "./FSCard.vue";
import FSCol from "./FSCol.vue";
import FSIcon from "./FSIcon.vue";
import FSText from "./FSText.vue";

export default defineComponent({
  name: "FSWidgetTemplateCardUI",
  components: {
    FSCard,
    FSCol,
    FSIcon,
    FSText
  },
  props: {
    icon: { 
      type: String, 
      required: false,
      default: "mdi-chart-bar" 
    },
    label: { 
      type: String, 
      required: true 
    }
  }
});
</script>