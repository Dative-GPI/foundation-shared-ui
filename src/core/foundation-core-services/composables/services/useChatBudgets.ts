import { ChatBudgetInfos, type ChatBudgetInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { CHAT_BUDGET_CURRENT_URL } from "../../config/urls";

const ChatBudgetServiceFactory = new ServiceFactory<ChatBudgetInfosDTO, ChatBudgetInfos>("chatBudget", ChatBudgetInfos).create(factory => factory.build(
  ServiceFactory.addCustom("getCurrent", (axios) => axios.get(CHAT_BUDGET_CURRENT_URL()), (dto: ChatBudgetInfosDTO) => new ChatBudgetInfos(dto))
));

export const useCurrentChatBudget = ComposableFactory.custom(ChatBudgetServiceFactory.getCurrent);
