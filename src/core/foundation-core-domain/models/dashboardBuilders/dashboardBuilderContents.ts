import type { DashboardDatePresetInfosDTO } from "../dashboardDatePresets";
import type { DashboardEntityPresetInfosDTO } from "../dashboardEntityPresets";
import type { DashboardVariableInfosDTO } from "../dashboardVariables";
import type { WidgetInfosDTO } from "../widgets";


export enum DashboardBuilderContentsType {
  Text = "text",
  ToolCall = "tool_call",
  ToolResult = "tool_result",
  DashboardReady = "dashboard_ready"
}

export interface DashboardBuilderTextContents {
  type: DashboardBuilderContentsType.Text;
  content: string;
}

export interface DashboardBuilderToolCallContents {
  type: DashboardBuilderContentsType.ToolCall;
  callId: string;
  name: string;
  arguments: Record<string, unknown>;
}

export interface DashboardBuilderToolResultContents {
  type: DashboardBuilderContentsType.ToolResult;
  callId: string;
  name: string;
  result: string;
}

export interface DashboardBuilderDashboardDTO {
  entityPresetCode: string | null;
  datePresetCode: string | null;
  variableCode: string | null;
  datePresets: DashboardDatePresetInfosDTO[];
  entityPresets: DashboardEntityPresetInfosDTO[];
  variables: DashboardVariableInfosDTO[];
  widgets: WidgetInfosDTO[];
}

export interface DashboardBuilderDashboardReadyContents {
  type: DashboardBuilderContentsType.DashboardReady;
  dashboard: DashboardBuilderDashboardDTO;
}

export type DashboardBuilderContents =
  | DashboardBuilderTextContents
  | DashboardBuilderToolCallContents
  | DashboardBuilderToolResultContents
  | DashboardBuilderDashboardReadyContents;
