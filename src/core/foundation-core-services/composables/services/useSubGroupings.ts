import { SubGroupingDetails, type SubGroupingDetailsDTO, type SubGroupingFilters, SubGroupingInfos, type SubGroupingInfosDTO, type CreateSubGroupingDTO, type UpdateSubGroupingDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { SUB_GROUPINGS_URL, SUB_GROUPING_URL } from "../../config/urls";

const SubGroupingServiceFactory = new ServiceFactory<SubGroupingDetailsDTO, SubGroupingDetails>("subGrouping", SubGroupingDetails).create(factory => factory.build(
  factory.addGet(SUB_GROUPING_URL),
  factory.addGetMany<SubGroupingInfosDTO, SubGroupingInfos, SubGroupingFilters>(SUB_GROUPINGS_URL, SubGroupingInfos),
  factory.addCreate<CreateSubGroupingDTO>(SUB_GROUPINGS_URL),
  factory.addUpdate<UpdateSubGroupingDTO>(SUB_GROUPING_URL),
  factory.addRemove(SUB_GROUPING_URL),
  factory.addNotify()
));

export const useSubGrouping = ComposableFactory.get(SubGroupingServiceFactory);
export const useSubGroupings = ComposableFactory.getMany(SubGroupingServiceFactory);
export const useCreateSubGrouping = ComposableFactory.create(SubGroupingServiceFactory);
export const useUpdateSubGrouping = ComposableFactory.update(SubGroupingServiceFactory);
export const useRemoveSubGrouping = ComposableFactory.remove(SubGroupingServiceFactory);
