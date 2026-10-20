<template>
  <FSRow
    align="center-right"
    width="fill"
  >
    <FSCard
      padding="12px 20px"
      :variant="CardVariants.Full"
      :color="ColorEnum.Light"
    >
      <FSSpan
        font="text-body"
        :ellipsis="false"
      >
        {{ $props.event.content }}
      </FSSpan>
    </FSCard>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { CardVariants, type ChatbotMessageEvent, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSCard from "../FSCard.vue";
import FSSpan from "../FSSpan.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSChatbotUserMessage",
  components: {
    FSCard,
    FSSpan,
    FSRow
  },
  props: {
    event: {
      type: Object as PropType<ChatbotMessageEvent>,
      required: true
    }
  },
  setup() {
    return {
      CardVariants,
      ColorEnum
    };
  }
});
</script>
