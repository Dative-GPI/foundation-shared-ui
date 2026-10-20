import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSChatBot from "@dative-gpi/foundation-core-components/components/chatbot/FSChatBot.vue";
import FSChatBotUI from "@dative-gpi/foundation-shared-components/components/chatbot/FSChatBotUI.vue";

import { type ChatbotEvent, ChatbotEventType } from "@dative-gpi/foundation-shared-components/models";

const meta: Meta<typeof FSChatBot> = {
  title: 'Core/Components/ChatBot',
  component: FSChatBot,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSChatBotUI], FSChatBot),
    ...addComponentEmits(FSChatBot),
  },
};

export default meta;
type Story = StoryObj<typeof FSChatBotUI>;

export const Default: Story = {
  render: (args) => ({
    components: { FSChatBot, FSRow },
    setup() {
      return { args };
    },
    template: `
      <FSRow
        height="100%"
        width="100%"
        align="center-center"
      >
        <FSChatBot
          height="100%"
          v-model="args.modelValue"
          v-bind="args"
        />
      </FSRow>
    `,
  }),
  args: {
    title: "How can I help you?",
    subtitle: "Ask a question about your devices or dashboards",
    placeholder: "Write a message...",
    modelValue: "",
  },
};

export const WithSuggestions: Story = {
  render: Default.render,
  args: {
    ...Default.args,
    events: [],
    suggestions: [
      { icon: "mdi-view-dashboard-outline", title: "Create a dashboard", description: "Build a dashboard from your devices data", prompt: "Create a dashboard for my devices" },
      { icon: "mdi-chart-line", title: "Analyse a trend", description: "Explain the evolution of a measure over the last week", prompt: "Analyse the temperature trend of last week" },
      { icon: "mdi-alert-outline", title: "Review alerts", description: "Summarize the alerts raised in the last 24 hours with a description that is a real book becaus of its length", prompt: "Summarize the alerts of the last 24 hours" },
      { icon: "mdi-map-marker-outline", title: "Locate devices", description: "Find the devices that went offline today", prompt: "Which devices went offline today?" },
    ],
  },
};

const exchange = [
  { type: ChatbotEventType.UserMessage, content: "Which devices had a temperature above 30°C this week?" },
  { type: ChatbotEventType.BotToolMessage, content: "Reading devices list" },
  { type: ChatbotEventType.BotToolMessage, content: "Fetching temperature data" },
  { type: ChatbotEventType.BotMessage, content: "Three devices exceeded **30°C** this week:\n\n- **Boiler room** — 34.2°C on Tuesday\n- **Warehouse B** — 31.8°C on Wednesday\n- **Roof sensor** — 30.4°C on Friday\n\nDo you want me to create an alert for these devices?" },
  { type: ChatbotEventType.UserMessage, content: "Yes, create an alert when the temperature goes above 32°C." },
  { type: ChatbotEventType.BotToolMessage, content: "Creating alert" },
  { type: ChatbotEventType.BotMessage, content: "Done! The alert **High temperature** is now active on the 3 devices. You will be notified by email." },
];

export const LongConversation: Story = {
  render: Default.render,
  args: {
    ...Default.args,
    events: Array.from({ length: 10 }, () => exchange).flat().map((event, index) => ({ ...event, timestamp: index })) as ChatbotEvent[],
  },
};
