import { onUnmounted, ref } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { type ChatbotEvent, ChatbotEventType } from "@dative-gpi/foundation-shared-components/models";
import { ChatMessageRole } from "@dative-gpi/foundation-shared-domain/enums";
import {
  type DashboardBuilderContents,
  DashboardBuilderContentsType,
  type DashboardBuilderDashboardDTO,
  type DashboardBuilderDashboardReadyContents,
  type DashboardBuilderEvent,
  DashboardBuilderEventType
} from "@dative-gpi/foundation-core-domain/models";

import { useCreateDashboardBuilder, useCreateDashboardBuilderMessage, useDashboardBuilder, useDashboardBuilderHub } from "./services/useDashboardBuilders";
import { DASHBOARD_BUILDERS } from "../config/literals";

export const useDashboardBuilderChat = () => {
  const { $tr } = useTranslationsProvider();
  const { fetch: createDashboardBuilder } = useCreateDashboardBuilder();
  const { fetch: createDashboardBuilderMessage } = useCreateDashboardBuilderMessage();
  const { get: getDashboardBuilder } = useDashboardBuilder();
  const { connected, connect, disconnect } = useDashboardBuilderHub();

  const builderId = ref<string | null>(null);
  const events = ref<ChatbotEvent[]>([]);
  const dashboard = ref<DashboardBuilderDashboardDTO | null>(null);
  const thinking = ref(false);

  // Hors `ref` : le timer n'est pas un état de rendu.
  let inactivityTimeout: ReturnType<typeof setTimeout> | null = null;

  const stopThinking = () => {
    thinking.value = false;
    if (inactivityTimeout !== null) {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = null;
    }
  };

  // Relancé à chaque signe d'activité du moteur : on ne rend la main qu'après un silence prolongé.
  const startThinking = () => {
    thinking.value = true;
    if (inactivityTimeout !== null) {
      clearTimeout(inactivityTimeout);
    }
    inactivityTimeout = setTimeout(stopThinking, DASHBOARD_BUILDERS.INACTIVITY_TIMEOUT_MS);
  };

  const toChatbotEvent = (contents: DashboardBuilderContents | null, fromUser: boolean, timestamp: number): ChatbotEvent | null => {
    switch (contents?.type) {
      case DashboardBuilderContentsType.Text:
        return {
          type: fromUser ? ChatbotEventType.UserMessage : ChatbotEventType.BotMessage,
          content: contents.content,
          timestamp
        };
      case DashboardBuilderContentsType.ToolCall:
        return {
          type: ChatbotEventType.BotToolMessage,
          content: $tr(`page.analysis.tool.${contents.name.replace(/_/g, "-")}`, DASHBOARD_BUILDERS.TOOL_LABELS[contents.name] ?? contents.name),
          timestamp
        };
      case DashboardBuilderContentsType.DashboardReady:
        return {
          type: ChatbotEventType.Custom,
          customType: DASHBOARD_BUILDERS.DASHBOARD_READY,
          payload: contents.dashboard,
          timestamp
        };
      default:
        return null;
    }
  };

  const onEvent = (event: DashboardBuilderEvent) => {
    const chatbotEvent = toChatbotEvent(event.contents, event.type === DashboardBuilderEventType.UserMessage, Date.now());
    if (chatbotEvent) {
      events.value.push(chatbotEvent);
    }

    if (event.contents?.type === DashboardBuilderContentsType.DashboardReady) {
      dashboard.value = event.contents.dashboard;
    }

    if (event.type === DashboardBuilderEventType.AssistantText) {
      stopThinking();
    }
    else {
      startThinking();
    }
  };

  const load = async (id: string) => {
    const builder = await getDashboardBuilder(id);
    const messages = builder.value?.messages ?? [];

    events.value = messages
      .map(message => toChatbotEvent(message.contents, message.role === ChatMessageRole.User, message.createdAt))
      .filter((chatbotEvent): chatbotEvent is ChatbotEvent => chatbotEvent !== null);

    const dashboardReady = [...messages]
      .reverse()
      .map(message => message.contents)
      .find((contents): contents is DashboardBuilderDashboardReadyContents => contents?.type === DashboardBuilderContentsType.DashboardReady);
    dashboard.value = dashboardReady?.dashboard ?? null;

    const lastMessage = messages[messages.length - 1];
    const turnEnded = !lastMessage
      || (lastMessage.role === ChatMessageRole.Assistant && lastMessage.contents?.type === DashboardBuilderContentsType.Text);
    if (turnEnded) {
      stopThinking();
    }
  };

  const attach = async (id: string) => {
    await connect(id, onEvent, () => load(id));
    builderId.value = id;
  };

  const reset = async () => {
    await disconnect();
    stopThinking();
    builderId.value = null;
    events.value = [];
    dashboard.value = null;
  };

  const open = async (id: string) => {
    await reset();
    await attach(id);
    await load(id);
  };

  const submit = async (text: string): Promise<boolean> => {
    const prompt = text.trim();
    if (!prompt) {
      return false;
    }

    startThinking();
    try {
      if (!builderId.value) {
        const created = await createDashboardBuilder();
        if (!created.value) {
          throw new Error("Dashboard builder creation returned no session");
        }
        await attach(created.value.id);
      }
      await createDashboardBuilderMessage(builderId.value!, { text: prompt });
      return true;
    }
    catch {
      stopThinking();
      events.value.push({
        type: ChatbotEventType.BotMessage,
        content: $tr("page.analysis.send-error", "Your message could not be sent. Please try again."),
        timestamp: Date.now()
      });
      return false;
    }
  };

  onUnmounted(() => {
    stopThinking();
  });

  return {
    builderId,
    connected,
    events,
    dashboard,
    thinking,
    open,
    reset,
    submit
  };
};
