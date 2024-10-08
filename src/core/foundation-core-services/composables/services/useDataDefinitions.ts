import { DataDefinitionDetails, type DataDefinitionDetailsDTO, type DataDefinitionFilters, DataDefinitionInfos, type DataDefinitionInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { DATA_DEFINITIONS_URL, DATA_DEFINITION_URL } from "../../config/urls";

const DataDefinitionServiceFactory = new ServiceFactory<DataDefinitionDetailsDTO, DataDefinitionDetails>("dataDefinition", DataDefinitionDetails).create(factory => factory.build(
  factory.addGet(DATA_DEFINITION_URL),
  factory.addGetMany<DataDefinitionInfosDTO, DataDefinitionInfos, DataDefinitionFilters>(DATA_DEFINITIONS_URL, DataDefinitionInfos),
  factory.addNotify()
));

export const useDataDefinition = ComposableFactory.get(DataDefinitionServiceFactory);
export const useDataDefinitions = ComposableFactory.getMany(DataDefinitionServiceFactory);