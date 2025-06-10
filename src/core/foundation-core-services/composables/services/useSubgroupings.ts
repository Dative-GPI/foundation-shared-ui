import { SubgroupingDetails, type SubgroupingDetailsDTO, type SubgroupingFilters, SubgroupingInfos, type SubgroupingInfosDTO, type CreateSubgroupingDTO, type UpdateSubgroupingDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { SUB_GROUPINGS_URL, SUB_GROUPING_URL } from "../../config/urls";

const SubgroupingServiceFactory = new ServiceFactory<SubgroupingDetailsDTO, SubgroupingDetails>("subgrouping", SubgroupingDetails).create(factory => factory.build(
  factory.addGet(SUB_GROUPING_URL),
  factory.addGetMany<SubgroupingInfosDTO, SubgroupingInfos, SubgroupingFilters>(SUB_GROUPINGS_URL, SubgroupingInfos),
  factory.addCreate<CreateSubgroupingDTO>(SUB_GROUPINGS_URL),
  factory.addUpdate<UpdateSubgroupingDTO>(SUB_GROUPING_URL),
  factory.addRemove(SUB_GROUPING_URL),
  factory.addNotify()
));

export const useSubgrouping = ComposableFactory.get(SubgroupingServiceFactory);
export const useSubgroupings = ComposableFactory.getMany(SubgroupingServiceFactory);
export const useCreateSubgrouping = ComposableFactory.create(SubgroupingServiceFactory);
export const useUpdateSubgrouping = ComposableFactory.update(SubgroupingServiceFactory);
export const useRemoveSubgrouping = ComposableFactory.remove(SubgroupingServiceFactory);
