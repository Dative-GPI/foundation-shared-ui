import type { LanguageDetailsDTO, LanguageFilters, LanguageInfosDTO } from "@dative-gpi/foundation-shared-domain/models";
import { LanguageDetails, LanguageInfos } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { LANGUAGES_URL } from "../../config/urls";

const LanguageServiceFactory = new ServiceFactory<LanguageDetailsDTO, LanguageDetails>("language", LanguageDetails).create(factory => factory.build(
    factory.addGetMany<LanguageInfosDTO, LanguageInfos, LanguageFilters>(LANGUAGES_URL, LanguageInfos),
    factory.addNotify()
));

export const useLanguages = ComposableFactory.getMany(LanguageServiceFactory);