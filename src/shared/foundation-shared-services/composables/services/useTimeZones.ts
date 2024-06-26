import type { TimeZoneDetailsDTO, TimeZoneFilters, TimeZoneInfosDTO } from "@dative-gpi/foundation-shared-domain/models";
import { TimeZoneDetails, TimeZoneInfos } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { TIME_ZONES_URL } from "../../config/urls";

const TimeZoneServiceFactory = new ServiceFactory<TimeZoneDetailsDTO, TimeZoneDetails>("timeZone", TimeZoneDetails).create(factory => factory.build(
    factory.addGetMany<TimeZoneInfosDTO, TimeZoneInfos, TimeZoneFilters>(TIME_ZONES_URL, TimeZoneInfos),
    factory.addNotify()
));

export const useTimeZones = ComposableFactory.getMany(TimeZoneServiceFactory);