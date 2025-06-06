import { GroupingDetails, type GroupingDetailsDTO, type GroupingFilters, GroupingInfos, type GroupingInfosDTO, type CreateGroupingDTO, type UpdateGroupingDTO } from "@dative-gpi/foundation-core-domain/models/groupings";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { GROUPINGS_URL, GROUPING_URL } from "@dative-gpi/foundation-core-services/config/urls";

const GroupingServiceFactory = new ServiceFactory<GroupingDetailsDTO, GroupingDetails>(
  "grouping",
  GroupingDetails
).create(factory =>
  factory.build(
    factory.addGet(GROUPING_URL),
    factory.addGetMany<GroupingInfosDTO, GroupingInfos, GroupingFilters>(GROUPINGS_URL, GroupingInfos),
    factory.addCreate<CreateGroupingDTO>(GROUPINGS_URL),
    factory.addUpdate<UpdateGroupingDTO>(GROUPING_URL),
    factory.addRemove(GROUPING_URL),
    factory.addNotify()
  )
);

export const useGrouping = ComposableFactory.get(GroupingServiceFactory);
export const useGroupings = ComposableFactory.getMany(GroupingServiceFactory);
export const useCreateGrouping = ComposableFactory.create(GroupingServiceFactory);
export const useUpdateGrouping = ComposableFactory.update(GroupingServiceFactory);
export const useRemoveGrouping = ComposableFactory.remove(GroupingServiceFactory);
