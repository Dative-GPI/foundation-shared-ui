import { isoToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

export class ChatBudgetInfos {
  id: string;
  organisationId: string;
  monthlyLimit: number;
  consumed: number;
  remaining: number;
  periodStart: number;
  periodEnd: number;

  constructor(params: ChatBudgetInfosDTO) {
    this.id = params.id;
    this.organisationId = params.organisationId;
    this.monthlyLimit = params.monthlyLimit;
    this.consumed = params.consumed;
    this.remaining = params.remaining;
    this.periodStart = isoToEpoch(params.periodStart);
    this.periodEnd = isoToEpoch(params.periodEnd);
  }
}

export interface ChatBudgetInfosDTO {
  id: string;
  organisationId: string;
  monthlyLimit: number;
  consumed: number;
  remaining: number;
  periodStart: string;
  periodEnd: string;
}
