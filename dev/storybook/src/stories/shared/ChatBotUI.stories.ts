import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSChatBotUI from "@dative-gpi/foundation-shared-components/components/chatbot/FSChatBotUI.vue";
import FSCard from "@dative-gpi/foundation-shared-components/components/FSCard.vue";

import { ChatbotEventType } from "@dative-gpi/foundation-shared-components/models";

const meta: Meta<typeof FSChatBotUI> = {
  title: 'Shared/Components/ChatBot/ChatBotUI',
  component: FSChatBotUI,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSCard], FSChatBotUI),
    ...addComponentEmits(FSChatBotUI),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSChatBotUI },
    setup() {
      return { args };
    },
    template: `
      <FSChatBotUI
        height="100%"
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    title: "How can I help you?",
    subtitle: "Ask a question about your devices or dashboards",
    placeholder: "Write a message...",
    modelValue: "",
    suggestions: [
      { icon: "mdi-view-dashboard-outline", title: "Create a dashboard", description: "Build a dashboard from your devices data", prompt: "Create a dashboard for my devices" },
      { icon: "mdi-chart-line", title: "Analyse a trend", description: "Explain the evolution of a measure over the last week", prompt: "Analyse the temperature trend of last week" },
    ],
    events: [
      { type: ChatbotEventType.UserMessage, content: "Create a dashboard for my devices", timestamp: 0 },
      { type: ChatbotEventType.BotToolMessage, content: "Reading devices list", timestamp: 1 },
      { type: ChatbotEventType.BotMessage, content: "Here is your dashboard, with:\n\n- a **map** of your devices\n- a chart of the last 7 days", timestamp: 2 },
    ],
  },
};
