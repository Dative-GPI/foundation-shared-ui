import { DashboardBuilderInfos, type DashboardBuilderInfosDTO } from "./dashboardBuilderInfos";
import { DashboardBuilderMessage, type DashboardBuilderMessageDTO } from "./dashboardBuilderMessage";

/** Snapshot d'une session : infos + historique persisté, pour réhydrater une conversation. */
export class DashboardBuilderDetails extends DashboardBuilderInfos {
  messages: DashboardBuilderMessage[];

  constructor(params: DashboardBuilderDetailsDTO) {
    super(params);
    this.messages = params.messages.map(message => new DashboardBuilderMessage(message));
  }
}

export interface DashboardBuilderDetailsDTO extends DashboardBuilderInfosDTO {
  messages: DashboardBuilderMessageDTO[];
}
