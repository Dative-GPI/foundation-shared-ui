import type { ChatBudgetInfosDTO } from "@dative-gpi/foundation-core-domain/models";

export const CURRENT_CHATBUDGET: ChatBudgetInfosDTO = {
  id: "1",
  organisationId: "dative",
  monthlyLimit: 50,
  consumed: 32.75,
  remaining: 17.25,
  periodStart: "2026-11-01T00:00:00Z",
  periodEnd: "2026-12-01T00:00:00Z"
};
