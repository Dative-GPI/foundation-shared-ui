<template>
  <FSSlideGroup>
    <FSCard
      v-for="(suggestion, index) in $props.suggestions"
      :key="index"
      width="333px"
      padding="16px"
      :clickable="true"
      :borderColor="ColorEnum.Light"
      height="100%"
      @click="$emit('select', suggestion.prompt)"
    >
      <FSCol>
        <FSIcon
          size="32px"
          :color="ColorEnum.Primary"
        >
          {{ suggestion.icon }}
        </FSIcon>
        <FSText
          font="text-button"
        >
          {{ suggestion.title }}
        </FSText>
        <FSText
          font="text-overline"
          align="left"
          :lineClamp="2"
        >
          {{ suggestion.description }}
        </FSText>
      </FSCol>
    </FSCard>
  </FSSlideGroup>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { type ChatbotSuggestion, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSlideGroup from "../FSSlideGroup.vue";
import FSCard from "../FSCard.vue";
import FSIcon from "../FSIcon.vue";
import FSText from "../FSText.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSChatbotSuggestions",
  components: {
    FSSlideGroup,
    FSCard,
    FSIcon,
    FSText,
    FSCol
  },
  props: {
    suggestions: {
      type: Array as PropType<ChatbotSuggestion[]>,
      required: false,
      default: () => []
    }
  },
  emits: ["select"],
  setup() {
    return {
      ColorEnum
    };
  }
});
</script>
