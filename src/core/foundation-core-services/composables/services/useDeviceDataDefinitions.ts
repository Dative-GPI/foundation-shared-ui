import { DeviceDataDefinitionInfos, type DeviceDataDefinitionInfosDTO, type DeviceDataDefinitionFilters } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { DEVICE_DATA_DEFINITIONS_URL } from "../../config";

const DeviceDataDefinitionServiceFactory = new ServiceFactory<DeviceDataDefinitionInfosDTO, DeviceDataDefinitionInfos>("deviceDataDefinition", DeviceDataDefinitionInfos).create(factory => factory.build(
  factory.addGetMany<DeviceDataDefinitionInfosDTO, DeviceDataDefinitionInfos, DeviceDataDefinitionFilters>(DEVICE_DATA_DEFINITIONS_URL, DeviceDataDefinitionInfos),
  factory.addNotify()
));

export const useDeviceDataDefinitions = ComposableFactory.getMany(DeviceDataDefinitionServiceFactory);