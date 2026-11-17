import type { ChatBudgetInfosDTO } from "@dative-gpi/foundation-core-domain/models";

export const CURRENT_CHATBUDGET: ChatBudgetInfosDTO = {
  id: "1",
  organisationId: "dative",
  monthlyLimit: 50,
  consumed: 30,
  remaining: 20,
  periodStart: "2026-11-01T00:00:00Z",
  periodEnd: "2026-12-01T00:00:00Z"
};
