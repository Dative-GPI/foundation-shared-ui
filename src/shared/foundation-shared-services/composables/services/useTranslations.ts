import { ref } from "vue";

import { TranslationInfos, TranslationInfosDTO, TranslationDetails, TranslationDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
import { ServiceFactory } from "@dative-gpi/bones-ui";

import { TRANSLATIONS_LANGUAGE_URL } from "../../config/urls";

const TranslationServiceFactory = new ServiceFactory<TranslationDetailsDTO, TranslationDetails>("translation", TranslationDetails).create(factory => factory.build(
    factory.addNotify(() => ({
        getMany: async (languageCode: string): Promise<TranslationInfos[]> => {
            const response = await ServiceFactory.http.get(TRANSLATIONS_LANGUAGE_URL(languageCode));
            const result = response.data.map((dto: TranslationInfosDTO) => new TranslationInfos(dto));

            return result;
        }
    }))
));

export const useTranslations = () => {
    const service = TranslationServiceFactory();

    const fetching = ref(false);
    const entities = ref<TranslationInfos[]>([]);

    const getMany = async (languageCode: string) => {
        fetching.value = true;
        try {
            entities.value = await service.getMany(languageCode);
        }
        finally {
            fetching.value = false;
        }
        return entities;
    }

    return {
        fetching,
        getMany,
        entities
    }
}