import type { DashboardBuilderContents } from "./dashboardBuilderContents";

export class DashboardBuilderEvent {
  type: DashboardBuilderEventType;
  contents: DashboardBuilderContents | null;

  constructor(params: DashboardBuilderEventDTO) {
    this.type = params.type;
    this.contents = params.contents;
  }
}

export interface DashboardBuilderEventDTO {
  type: DashboardBuilderEventType;
  contents: DashboardBuilderContents | null;
}

export enum DashboardBuilderEventType {
  UserMessage = "user_message",
  AssistantText = "assistant_text",
  ToolCall = "tool_call",
  ToolResult = "tool_result",
  DashboardReady = "dashboard_ready"
}