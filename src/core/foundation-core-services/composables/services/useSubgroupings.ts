import { SubgroupingDetails, type SubgroupingDetailsDTO, type SubgroupingFilters, SubgroupingInfos, type SubgroupingInfosDTO, type CreateSubgroupingDTO, type UpdateSubgroupingDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { SUBGROUPINGS_URL, SUBGROUPING_URL } from "../../config/urls";

const SubgroupingServiceFactory = new ServiceFactory<SubgroupingDetailsDTO, SubgroupingDetails>("subgrouping", SubgroupingDetails)
  .createComplete<SubgroupingInfos, SubgroupingInfosDTO, CreateSubgroupingDTO, UpdateSubgroupingDTO, SubgroupingFilters>(SUBGROUPINGS_URL, SUBGROUPING_URL, SubgroupingInfos);

export const useSubgrouping = ComposableFactory.get(SubgroupingServiceFactory);
export const useSubgroupings = ComposableFactory.getMany(SubgroupingServiceFactory);
export const useCreateSubgrouping = ComposableFactory.create(SubgroupingServiceFactory);
export const useUpdateSubgrouping = ComposableFactory.update(SubgroupingServiceFactory);
export const useRemoveSubgrouping = ComposableFactory.remove(SubgroupingServiceFactory);
