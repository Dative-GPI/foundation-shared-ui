import { CustomPropertyValueInfos, type CustomPropertyValueInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { type PropertyEntity } from "@dative-gpi/foundation-shared-domain/enums";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { CUSTOM_PROPERTY_VALUES_URL } from "../../config/urls";

const CustomPropertyValueServiceFactory = {
  ...ServiceFactory.addCustom("getMany", (axios, entity: PropertyEntity, entityId: string, code: string) => axios.get(CUSTOM_PROPERTY_VALUES_URL(entity, entityId, code)), (dtos: CustomPropertyValueInfosDTO[]) => dtos.map((dto: CustomPropertyValueInfosDTO) => new CustomPropertyValueInfos(dto))),
};

export const useCustomPropertyValues = ComposableFactory.custom(CustomPropertyValueServiceFactory.getMany);