import { type UpdateUserOrganisationTableDTO, UserOrganisationTableDetails, type UserOrganisationTableDetailsDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { USER_ORGANISATION_TABLE_URL } from "../../config/urls";

const UserOrganisationTableServiceFactory = new ServiceFactory<UserOrganisationTableDetailsDTO, UserOrganisationTableDetails>("userOrgansiationTable", UserOrganisationTableDetails).create(factory => factory.build(
  factory.addGet(USER_ORGANISATION_TABLE_URL),
  factory.addUpdate<UpdateUserOrganisationTableDTO>(USER_ORGANISATION_TABLE_URL),
  factory.addNotify()
));

export const useUserOrganisationTable = ComposableFactory.get(UserOrganisationTableServiceFactory);
export const useUpdateUserOrganisationTable = ComposableFactory.update(UserOrganisationTableServiceFactory);