import { type CreateApplicationTerminalDTO, TerminalApplicationDetails, type TerminalApplicationDetailsDTO, type TerminalApplicationFilters, TerminalApplicationInfos, type TerminalApplicationInfosDTO, type UpdateTerminalApplicationDTO } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { TERMINAL_APPLICATIONS_URL, TERMINAL_APPLICATION_URL } from "../../config/urls";

const TerminalServiceFactory = new ServiceFactory<TerminalApplicationDetailsDTO, TerminalApplicationDetails>("terminalApplication", TerminalApplicationDetails).create(factory => factory.build(
  factory.addGetMany<TerminalApplicationInfosDTO, TerminalApplicationInfos, TerminalApplicationFilters>(TERMINAL_APPLICATIONS_URL, TerminalApplicationInfos),
  factory.addCreate<CreateApplicationTerminalDTO>(TERMINAL_APPLICATIONS_URL),
  factory.addUpdate<UpdateTerminalApplicationDTO>(TERMINAL_APPLICATION_URL),
  factory.addRemove(TERMINAL_APPLICATION_URL),
  factory.addNotify()
));

export const useTerminalApplications = ComposableFactory.getMany(TerminalServiceFactory);
export const useCreateTerminalApplication = ComposableFactory.create(TerminalServiceFactory);
export const useUpdateTerminalApplication = ComposableFactory.update(TerminalServiceFactory);
export const useRemoveTerminalApplication = ComposableFactory.remove(TerminalServiceFactory);