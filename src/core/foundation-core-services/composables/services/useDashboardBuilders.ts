import { onUnmounted, ref } from "vue";
import * as signalR from "@microsoft/signalr";

import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { useAppAuthToken } from "@dative-gpi/foundation-shared-services/composables";
import { HUBS } from "@dative-gpi/foundation-shared-services/config";
import {
  type CreateDashboardBuilderMessageDTO,
  DashboardBuilderDetails,
  type DashboardBuilderDetailsDTO,
  DashboardBuilderEvent,
  type DashboardBuilderEventDTO,
  type DashboardBuilderFilters,
  DashboardBuilderInfos,
  type DashboardBuilderInfosDTO,
  DashboardBuilderMessage,
  type DashboardBuilderMessageDTO
} from "@dative-gpi/foundation-core-domain/models";

import {
  DASHBOARD_BUILDER_HUB_URL,
  DASHBOARD_BUILDER_MESSAGES_URL,
  DASHBOARD_BUILDER_URL,
  DASHBOARD_BUILDERS_URL
} from "../../config/urls";

// La création ne prend pas de payload et renvoie des Infos (pas des Details) : elle sort du
// moule `addCreate`, comme l'envoi d'un message qui vise la session parente.
const DashboardBuilderServiceFactory = new ServiceFactory<DashboardBuilderDetailsDTO, DashboardBuilderDetails>("dashboardBuilder", DashboardBuilderDetails).create(factory => factory.build(
  factory.addNotify(),
  factory.addGet(DASHBOARD_BUILDER_URL),
  factory.addGetMany<DashboardBuilderInfosDTO, DashboardBuilderInfos, DashboardBuilderFilters>(DASHBOARD_BUILDERS_URL, DashboardBuilderInfos),
  factory.addRemove(DASHBOARD_BUILDER_URL),
  ServiceFactory.addCustom("create", (axios) => axios.post(DASHBOARD_BUILDERS_URL()), (dto: DashboardBuilderInfosDTO) => new DashboardBuilderInfos(dto)),
  ServiceFactory.addCustom("createMessage", (axios, builderId: string, payload: CreateDashboardBuilderMessageDTO) => axios.post(DASHBOARD_BUILDER_MESSAGES_URL(builderId), payload), (dto: DashboardBuilderMessageDTO) => new DashboardBuilderMessage(dto))
));

export const useDashboardBuilder = ComposableFactory.get(DashboardBuilderServiceFactory);
export const useDashboardBuilders = ComposableFactory.getMany(DashboardBuilderServiceFactory);
export const useRemoveDashboardBuilder = ComposableFactory.remove(DashboardBuilderServiceFactory);
export const useCreateDashboardBuilder = ComposableFactory.custom(DashboardBuilderServiceFactory.create);
export const useCreateDashboardBuilderMessage = ComposableFactory.custom(DashboardBuilderServiceFactory.createMessage);

/**
 * Stream temps réel d'une session de dashboard-builder.
 *
 * Pas de `HubFactory` ici : elle partage une connexion unique par URL et ses événements ne
 * portent qu'un id, relu ensuite via le service. Le hub NLP porte le `builderId` dans son
 * URL (une connexion par session, l'abonnement se fait à la connexion) et ses événements
 * transportent le tour complet. On en reprend en revanche les réglages : token, niveau de
 * log, reconnexion automatique, et resynchronisation à la reconnexion.
 */
export const useDashboardBuilderHub = () => {
  const { authToken } = useAppAuthToken();

  const connected = ref(false);

  // Hors `ref` : la connexion n'est pas un état de rendu.
  let connection: signalR.HubConnection | null = null;

  const disconnect = async () => {
    if (!connection) {
      return;
    }
    // Détachée avant `stop()` pour qu'un `onclose` tardif ne touche pas à une connexion plus récente.
    const current = connection;
    connection = null;
    connected.value = false;
    await current.stop();
  };

  /**
   * Ouvre le stream de la session, en fermant le précédent. Le hub ne rejoue rien :
   * `onReconnected` doit resynchroniser depuis le snapshot ce qui a été manqué pendant la coupure.
   */
  const connect = async (builderId: string, onEvent: (event: DashboardBuilderEvent) => void, onReconnected: () => void) => {
    await disconnect();

    const hub = new signalR.HubConnectionBuilder()
      .withUrl(DASHBOARD_BUILDER_HUB_URL(builderId), {
        accessTokenFactory: () => authToken.value ?? ""
      })
      .configureLogging(signalR.LogLevel.Warning)
      .withAutomaticReconnect()
      .build();

    hub.on(HUBS.DASHBOARD_BUILDER_EVENT, (dto: DashboardBuilderEventDTO) => onEvent(new DashboardBuilderEvent(dto)));
    hub.onreconnecting(() => {
      connected.value = false;
    });
    hub.onreconnected(() => {
      connected.value = true;
      onReconnected();
    });
    hub.onclose(() => {
      connected.value = false;
    });

    await hub.start();

    connection = hub;
    connected.value = true;
  };

  onUnmounted(() => {
    disconnect();
  });

  return {
    connected,
    connect,
    disconnect
  };
};
