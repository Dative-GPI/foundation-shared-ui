<template>
  <FSCol
    gap="32px"
    :maxWidth="$props.maxWidth"
    align="center-center"
  >
    <FSCol
      v-if="$props.events?.length === 0"
      gap="42px"
    >
      <FSCol
        align="center-center"
        gap="12px"
      >
        <FSText
          align="center"
          font="text-h1"
        >
          {{ $props.title }}
        </FSText>
        <FSText
          align="center"
          font="text-overline"
          :ellipsis="false"
        >
          {{ $props.subtitle }}
        </FSText>
      </FSCol>
      <FSCard
        :color="ColorEnum.Primary"
        :border="false"
        :variant="CardVariants.Standard"
        padding="16px 24px"
        width="100%"
      >
        <FSRow
          align="center-left"
          :wrap="false"
          gap="12px"
        >
          <FSIcon
            icon="mdi-information-outline"
            size="24px"
          />
          <FSText
            :ellipsis="false"
            font="text-overline"
          >
            {{ $tr("ui.chatbot.ai-warning-long", "This assistant is powered by artificial intelligence and may produce inaccurate or incomplete information. Please verify important information before relying on it.") }}
          </FSText>
        </FSRow>
      </FSCard>
    </FSCol>
    <FSCol
      v-else
      height="fill"
      style="min-height: 0;"
    >
      <FSFadeOut
        ref="scrollContainer"
        height="100%"
        :disableTopMask="true"
        :disableBottomMask="true"
      >
        <FSCol
          height="fill"
          gap="32px"
          align="bottom-center"
        >
          <template
            v-for="(event, index) in $props.events"
            :key="index"
          >
            <FSChatbotUserMessage
              v-if="event.type === ChatbotEventType.UserMessage"
              :event="event"
            />
            <FSChatbotBotMessage
              v-else-if="event.type === ChatbotEventType.BotMessage"
              :event="event"
            />
            <FSChatbotToolMessage
              v-else-if="event.type === ChatbotEventType.BotToolMessage"
              :event="event"
            />
            <slot
              v-else-if="event.type === ChatbotEventType.Custom"
              :name="`custom-${event.customType}`"
              :event="event"
              :payload="event.payload"
            />
          </template>
          <FSRow
            v-if="$props.thinking"
            align="center-left"
          >
            <FSIcon
              icon="mdi-dots-horizontal"
              :color="ColorEnum.Light"
              size="24px"
            />
            <FSText
              font="text-overline"
              :ellipsis="false"
            >
              {{ $tr("ui.chatbot.thinking", "Datia is thinking") }}
            </FSText>
          </FSRow>
        </FSCol>
      </FSFadeOut>
    </FSCol>
    <FSCol
      gap="32px"
    >
      <FSChatbotSuggestions
        v-if="$props.suggestions?.length && $props.events?.length === 0"
        :suggestions="$props.suggestions"
        @select="$emit('update:modelValue', $event)"
      />
      <FSCol
        align="center-center"
        gap="8px"
      >
        <FSTextArea
          :borderColor="ColorEnum.Light"
          :maxWidth="null"
          :hideHeader="true"
          :clearable="false"
          :placeholder="$props.placeholder"
          :rows="$props.events?.length ? 1 : 3"
          :maxRows="$props.events?.length ? 3 : 5"
          :modelValue="$props.modelValue"
          @update:modelValue="$emit('update:modelValue', $event)"
          @keydown.enter.exact="onPressEnter($event)"
        >
          <template
            #append-inner
          >
            <FSRow
              height="100%"
              align="bottom-center"
            >
              <FSRow
                align="center-center"
                :wrap="false"
                gap="4px"
              >
                <slot 
                  name="append-inner"
                />
                <FSCard
                  v-if="$props.thinking"
                  :variant="CardVariants.Standard"
                  :color="ColorEnum.Primary"
                  :border="false"
                  padding="2px"
                  @click="$emit('stop')"
                >
                  <FSRow>
                    <FSIcon
                      icon="mdi-stop"
                      size="20px"
                    />
                  </FSRow>
                </FSCard>
                <FSButton
                  v-else
                  icon="mdi-send"
                  variant="icon"
                  :color="ColorEnum.Primary"
                  :disabled="!$props.modelValue"
                  @click="$emit('submit', $props.modelValue)"
                />
              </FSRow>
            </FSRow>
          </template>
        </FSTextArea>
        <FSText
          v-if="$props.events?.length"
          font="text-overline"
          :color="ColorEnum.Light"
          variant="dark"
        >
          {{ $tr('ui.chatbot.ai-warning-short', 'AI can make mistakes. Please verify important information.') }}
        </FSText>
      </FSCol>
    </FSCol>
  </FSCol>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref, watch, type ComponentPublicInstance, type PropType } from "vue";

import { CardVariants, type ChatbotEvent, ChatbotEventType, type ChatbotSuggestion, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSChatbotSuggestions from "./FSChatbotSuggestions.vue";
import FSChatbotUserMessage from "./FSChatbotUserMessage.vue";
import FSChatbotBotMessage from "./FSChatbotBotMessage.vue";
import FSChatbotToolMessage from "./FSChatbotToolMessage.vue";
import FSTextArea from "../fields/FSTextArea.vue";
import FSFadeOut from "../FSFadeOut.vue";
import FSButton from "../FSButton.vue";
import FSText from "../FSText.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";
import FSIcon from '../FSIcon.vue';
import FSCard from '../FSCard.vue';

export default defineComponent({
  name: "FSChatBotUI",
  components: {
    FSChatbotSuggestions,
    FSChatbotUserMessage,
    FSChatbotBotMessage,
    FSChatbotToolMessage,
    FSTextArea,
    FSFadeOut,
    FSButton,
    FSText,
    FSCard,
    FSIcon,
    FSCol,
    FSRow,
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    suggestions: {
      type: Array as PropType<ChatbotSuggestion[]>,
      required: false,
      default: () => []
    },
    events: {
      type: Array as PropType<ChatbotEvent[]>,
      required: false,
      default: () => []
    },
    modelValue: {
      type: String,
      required: false,
      default: ""
    },
    thinking: {
      type: Boolean,
      required: false,
      default: false
    },
    maxWidth: {
      type: String,
      required: false,
      default: "1016px"
    }
  },
  emits: ["submit", "stop", "update:modelValue"],
  setup(props, { emit }) {
    const scrollContainer = ref<ComponentPublicInstance | null>(null);

    const scrollToBottom = () => {
      const element = scrollContainer.value?.$el as HTMLElement | undefined;
      if (element) {
        element.scrollTop = element.scrollHeight;
      }
    };

    const onPressEnter = (event: KeyboardEvent) => {
      event.preventDefault();
      event.stopPropagation();
      if (event.repeat || props.thinking || !props.modelValue) {
        return;
      }
      emit('submit', props.modelValue);
    };

    watch([() => props.events.length, () => props.thinking], () => {
      nextTick(scrollToBottom);
    });

    onMounted(() => {
      nextTick(scrollToBottom);
    });

    return {
      ChatbotEventType,
      scrollContainer,
      CardVariants,
      ColorEnum,
      onPressEnter
    };
  }
});
</script>
