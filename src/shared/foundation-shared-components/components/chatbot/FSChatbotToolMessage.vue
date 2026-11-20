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
        icon="mdi-tools"
        :color="ColorEnum.Light"
      />
      <FSText
        font="text-body"
        :ellipsis="true"
        :color="ColorEnum.Light"
      >
        {{ $props.event.content }}
      </FSText>
    </FSRow>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { type ChatbotMessageEvent, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSIcon from "../FSIcon.vue";
import FSText from "../FSText.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSChatbotToolMessage",
  components: {
    FSIcon,
    FSText,
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
