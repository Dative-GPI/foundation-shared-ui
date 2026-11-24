export interface ChatbotSuggestion {
  title: string;
  icon: string;
  description: string;
  prompt: string;
}

export enum ChatbotEventType {
  UserMessage = "UserMessage",
  BotMessage = "BotMessage",
  BotToolMessage = "BotToolMessage",
  Custom = "Custom"
}

export interface ChatbotMessageEvent {
  type: ChatbotEventType.UserMessage | ChatbotEventType.BotMessage | ChatbotEventType.BotToolMessage;
  content: string;
  timestamp: number;
}

export interface ChatbotCustomEvent<TPayload = unknown> {
  type: ChatbotEventType.Custom;
  customType: string;
  payload: TPayload;
  timestamp: number;
}

export type ChatbotEvent = ChatbotMessageEvent | ChatbotCustomEvent;
