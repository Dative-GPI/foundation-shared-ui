import { AuthTokenDetails, type AuthTokenDetailsDTO, type AuthTokenFilters, AuthTokenInfos, type AuthTokenInfosDTO, type CreateAuthTokenDTO } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { AUTH_TOKENS_URL, AUTH_TOKEN_URL } from "../../config/urls";

const AuthTokenServiceFactory = new ServiceFactory<AuthTokenDetailsDTO, AuthTokenDetails>("authToken", AuthTokenDetails).create(factory => factory.build(
    factory.addGetMany<AuthTokenInfosDTO, AuthTokenInfos, AuthTokenFilters>(AUTH_TOKENS_URL, AuthTokenInfos),
    factory.addCreate<CreateAuthTokenDTO>(AUTH_TOKENS_URL),
    factory.addRemove(AUTH_TOKEN_URL),
    factory.addNotify()
));

export const useAuthTokens = ComposableFactory.getMany(AuthTokenServiceFactory);
export const useCreateAuthToken = ComposableFactory.create(AuthTokenServiceFactory);
export const useRemoveAuthToken = ComposableFactory.remove(AuthTokenServiceFactory);