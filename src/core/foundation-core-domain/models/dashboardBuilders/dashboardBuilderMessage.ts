import type { ChatMessageRole } from "@dative-gpi/foundation-shared-domain/enums";
import { isoToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

import type { DashboardBuilderContents } from "./dashboardBuilderContents";

export class DashboardBuilderMessage {
  id: string;
  role: ChatMessageRole;
  text: string | null;
  toolName: string | null;
  contents: DashboardBuilderContents | null;
  createdAt: number;

  constructor(params: DashboardBuilderMessageDTO) {
    this.id = params.id;
    this.role = params.role;
    this.text = params.text;
    this.toolName = params.toolName;
    this.contents = params.contents;
    this.createdAt = isoToEpoch(params.createdAt);
  }
}

export interface DashboardBuilderMessageDTO {
  id: string;
  role: ChatMessageRole;
  text: string | null;
  toolName: string | null;
  contents: DashboardBuilderContents | null;
  createdAt: string;
}

export interface CreateDashboardBuilderMessageDTO {
  text: string;
}
