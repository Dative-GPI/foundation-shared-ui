import { GroupingDetails, type GroupingDetailsDTO, type GroupingFilters, GroupingInfos, type GroupingInfosDTO, type CreateGroupingDTO, type UpdateGroupingDTO } from "@dative-gpi/foundation-core-domain/models/groupings";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { GROUPINGS_URL, GROUPING_URL } from "@dative-gpi/foundation-core-services/config/urls";

const GroupingServiceFactory = new ServiceFactory<GroupingDetailsDTO, GroupingDetails>("grouping",  GroupingDetails)
  .createComplete<GroupingInfos, GroupingInfosDTO, CreateGroupingDTO, UpdateGroupingDTO, GroupingFilters>(GROUPINGS_URL, GROUPING_URL, GroupingInfos);

export const useGrouping = ComposableFactory.get(GroupingServiceFactory);
export const useGroupings = ComposableFactory.getMany(GroupingServiceFactory);
export const useCreateGrouping = ComposableFactory.create(GroupingServiceFactory);
export const useUpdateGrouping = ComposableFactory.update(GroupingServiceFactory);
export const useRemoveGrouping = ComposableFactory.remove(GroupingServiceFactory);
