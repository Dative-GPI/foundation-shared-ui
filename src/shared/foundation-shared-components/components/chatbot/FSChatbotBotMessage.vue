<template>
  <FSRow
    align="center-left"
    width="fill"
  >
    <FSRow
      gap="12px"
      :wrap="false"
    >
      <FSIcon
        size="20px"
        icon="mdi-creation-outline"
        :color="ColorEnum.Primary"
      />
      <FSMarkdown
        :content="$props.event.content"
      />
    </FSRow>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { type ChatbotMessageEvent, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSMarkdown from "../FSMarkdown.vue";
import FSIcon from "../FSIcon.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSChatbotBotMessage",
  components: {
    FSMarkdown,
    FSIcon,
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
      ColorEnum
    };
  }
});
</script>
