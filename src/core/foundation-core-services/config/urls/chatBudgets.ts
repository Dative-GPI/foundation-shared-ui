import { CORE_URL } from "./base";

export const CHAT_BUDGETS_URL = () => `${CORE_URL()}/chat-budgets`;
export const CHAT_BUDGET_CURRENT_URL = () => `${CHAT_BUDGETS_URL()}/current`;
