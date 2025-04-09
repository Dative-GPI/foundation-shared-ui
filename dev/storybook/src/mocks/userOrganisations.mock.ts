import type { UserOrganisationDetailsDTO, UserOrganisationInfosDTO } from "@dative-gpi/foundation-core-domain/models";

export const USERORGANISATIONS: UserOrganisationInfosDTO[] = [{
  id: "1",
  admin: true,
  allowNotifications: true,
  allowSms: true,
  allowEmails: true,
  email: "lelakmarbetouche@scep.com",
  firstName: "Larmina",
  lastName: "El Akmar Betouche",
  name: "Larmina El Akmar Betouche",
  organisationId: "1",
  phoneNumber: "0123456789",
  roleIcon: "mdi-account",
  roleLabel: "Admin",
  roleType: 1,
  tags: ["tag1", "tag2"],
  userId: "1",
  userType: 1,
  validity: 1,
  imageId: "1",
  roleId: "1"
}, {
  id: "2",
  admin: false,
  allowNotifications: true,
  allowSms: true,
  allowEmails: true,
  email: "hbonnisseurdelabath@scep.com",
  firstName: "Hubert",
  lastName: "Bonnisseur de la Bath",
  name: "Hubert Bonnisseur de la Bath",
  organisationId: "1",
  phoneNumber: "9876543210",
  roleIcon: "mdi-account",
  roleLabel: "User",
  roleType: 1,
  tags: ["tag3", "tag4"],
  userId: "2",
  userType: 1,
  validity: 1,
  imageId: "2",
  roleId: "1"
}, {
  id: "3",
  admin: false,
  allowNotifications: true,
  allowSms: false,
  allowEmails: true,
  email: "jjeffersion@scep.com",
  firstName: "Jack",
  lastName: "Jefferson",
  name: "Jack Jefferson",
  organisationId: "1",
  phoneNumber: "9876543210",
  roleIcon: "mdi-account",
  roleLabel: "User",
  roleType: 1,
  tags: ["tag5", "tag6"],
  userId: "3",
  userType: 1,
  validity: 1,
  imageId: "3",
  roleId: "1"
}];

export const CURRENT_USERORGANISATION: UserOrganisationDetailsDTO = {
  "mainDashboardId": "3211e961-340e-4efc-b190-468601db39ba",
  "mainDashboardType": 3,
  "languageCode": "fr-FR",
  "timeZoneId": "Europe/Paris",
  "roleIcon": "mdi-account",
  "roleLabel": "Admin",
  "roleId": "1",
  "permissions": [
    {
      "id": "835231a2-3810-48db-946e-f55882881f59",
      "code": "app.dashboardorganisationtype.update",
      "label": "Modifier un tableau de bord partagé"
    },
    {
      "id": "64d36571-03b0-4492-b6d0-40fbfc0b8803",
      "code": "app.organisation.dashboard",
      "label": "Définir un tableau de bord par défaut pour les nouveaux membres de votre organisation"
    },
    {
      "id": "25f81188-64a1-4d1b-b757-cb623d1abf64",
      "code": "app.roleorganisation.read",
      "label": "Voir les rôles personnalisés"
    },
    {
      "id": "f142757d-0b26-4d2e-9267-034a1b507c77",
      "code": "app.group.create",
      "label": "Créer un groupe"
    },
    {
      "id": "6cbc4638-2157-4373-ad1d-f823092886a5",
      "code": "app.dashboardorganisation.read",
      "label": "Voir les tableaux de bord personnalisés"
    },
    {
      "id": "5ba13fc7-2842-4b0e-baa8-fe4ed337dd2d",
      "code": "app.dashboardorganisationtype.lock",
      "label": "Verrouiller un tableau de bord partagé"
    },
    {
      "id": "13fd7c11-418b-4df1-9f51-b947cc3a47ae",
      "code": "app.alert.read",
      "label": "Voir les alertes"
    },
    {
      "id": "21ea86d1-02d6-45a2-bde5-60d99e694e16",
      "code": "app.scenarioorganisationtype.read",
      "label": "Voir les règles d'alerte partagées"
    },
    {
      "id": "1b9888a5-a970-40bd-b3c0-d1674b07beb3",
      "code": "app.dashboardorganisationtype.read",
      "label": "Voir les tableaux de bord partagés"
    },
    {
      "id": "982e4a94-2919-4b7e-903c-64b11d6343ad",
      "code": "app.chartorganisationtype.remove",
      "label": "Supprimer un graphique partagé"
    },
    {
      "id": "98f32c0c-6e65-4177-8e98-40a90cec8ff2",
      "code": "app.scenarioorganisationtype.update",
      "label": "Modifier une règle d'alerte partagé"
    },
    {
      "id": "9ecb2c7e-6268-4c55-8ee9-825920142437",
      "code": "app.serviceaccountorganisation.manage",
      "label": "Gérer les comptes de service (édition et suppression)"
    },
    {
      "id": "19f81404-47d2-4dbf-b0ef-e419f4d9e6e6",
      "code": "app.scenarioorganisation.read",
      "label": "Voir les règles d'alerte personnalisées"
    },
    {
      "id": "b143d20f-4b6d-4206-9917-b868d0e60134",
      "code": "app.location.remove",
      "label": "Supprimer un site"
    },
    {
      "id": "8472eea1-6075-4e39-ab88-a0f425f06f02",
      "code": "app.scenarioorganisation.remove",
      "label": "Supprimer une règle d'alerte personnalisée"
    },
    {
      "id": "9d06115a-127f-4e83-b802-87feee75557e",
      "code": "app.group.update",
      "label": "Modifier un groupe"
    },
    {
      "id": "79b3d3f6-8f11-4b1a-8fca-60d0a7b580b0",
      "code": "app.roleorganisationtype.read",
      "label": "Voir les rôles partagés"
    },
    {
      "id": "c399f4b9-c472-4f26-9db6-a4196fe87a23",
      "code": "app.userorganisation.create",
      "label": "Inviter un nouvel utilisateur dans mon organisation"
    },
    {
      "id": "693a14e5-de6a-48cc-9d5e-c63142e255be",
      "code": "app.scenarioorganisationtype.create",
      "label": "Créer une règle d'alerte partagée"
    },
    {
      "id": "fc66229c-da61-4155-9bf5-c43f64bd7117",
      "code": "app.chartorganisationtype.create",
      "label": "Créer un graphique partagé"
    },
    {
      "id": "ae3f3244-130c-4b73-b4e8-7fe25163ac4d",
      "code": "app.organisation.update",
      "label": "Modifier votre organisation"
    },
    {
      "id": "21e75a08-f13c-4eb3-a4c8-07b4848fbaa1",
      "code": "app.deviceorganisation.update",
      "label": "Modifier un équipement"
    },
    {
      "id": "61770f4a-558f-4272-b52c-bd129b481b4c",
      "code": "app.chartorganisation.read",
      "label": "Voir les graphiques personnalisés"
    },
    {
      "id": "74c24740-863b-4c95-8b4f-bd09d073040f",
      "code": "app.chartorganisationtype.share",
      "label": "Partager un graphique"
    },
    {
      "id": "52ac7a26-66a4-4ad1-9a17-f221374ae026",
      "code": "app.datamodel.read",
      "label": "Voir les modèles de données"
    },
    {
      "id": "c06958b9-a266-44e3-9795-a8c8fc3c5eb5",
      "code": "app.chartorganisationtype.read",
      "label": "Voir les graphiques partagés"
    },
    {
      "id": "ab020623-08ff-439b-a420-5dbdf14ebf8a",
      "code": "app.dashboardorganisationtype.share",
      "label": "Partager un tableau de bord"
    },
    {
      "id": "cfb14014-599e-4612-b7e4-58f3fd06ecdf",
      "code": "app.alert.comment",
      "label": "Commenter une alerte"
    },
    {
      "id": "7dcb1366-00f2-4d09-82c6-4c97d73c3b65",
      "code": "app.scenarioorganisation.create",
      "label": "Créer une règle d'alerte personnalisée"
    },
    {
      "id": "60378e7d-1dbb-4124-a863-33d0372f9503",
      "code": "app.deviceorganisation.create",
      "label": "Créer un équipement"
    },
    {
      "id": "1eb3d084-add6-4550-9601-03723aa35ec3",
      "code": "app.chartorganisation.remove",
      "label": "Supprimer un graphique personnalisé"
    },
    {
      "id": "85d26bef-12b5-47a5-a9ab-3ed5798d0b02",
      "code": "app.roleorganisation.remove",
      "label": "Supprimer un rôle personnalisé"
    },
    {
      "id": "41d6b84b-3324-4591-a6f7-c237f7be8374",
      "code": "app.scenarioorganisationtype.share",
      "label": "Partager une règle d'alerte"
    },
    {
      "id": "d786e362-1901-465c-ba11-6969237e5c14",
      "code": "app.group.read",
      "label": "Voir les groupes"
    },
    {
      "id": "c7fd9dcf-46d9-40bf-9df0-0de5293a7793",
      "code": "app.alert.remove",
      "label": "Supprimer une alerte"
    },
    {
      "id": "6223dbff-c3cf-46c5-8676-70ad1735669a",
      "code": "app.alert.acknowledge",
      "label": "Acquitter une alerte"
    },
    {
      "id": "51738034-6aac-46a7-8018-6aeb6578bb3e",
      "code": "app.scenarioorganisationtype.remove",
      "label": "Supprimer une règle d'alerte partagée"
    },
    {
      "id": "1998c76e-cc6e-4b99-9e98-8104c22dcf5c",
      "code": "app.scenarioorganisation.update",
      "label": "Modifier une règle d'alerte personnalisée"
    },
    {
      "id": "97a2a907-51b0-4e2d-8ada-7f3b9675ccd8",
      "code": "app.dashboardorganisation.create",
      "label": "Créer un tableau de bord personnalisé"
    },
    {
      "id": "c71224fe-15ff-4e90-8d9f-12a67a0f078f",
      "code": "app.dashboardorganisationtype.create",
      "label": "Créer un tableau de bord partagé"
    },
    {
      "id": "418175e7-af42-4770-a55d-1d515cf45103",
      "code": "app.chartorganisation.update",
      "label": "Modifier un graphique personnalisé"
    },
    {
      "id": "6b0dd7e2-ef0d-4601-bba6-ade99ecd3b5f",
      "code": "app.group.remove",
      "label": "Supprimer un groupe"
    },
    {
      "id": "58955854-c45f-4140-aee9-15851d3cb7b0",
      "code": "app.userorganisation.read",
      "label": "Voir les utilisateurs"
    },
    {
      "id": "19c59780-f112-4961-9e55-728f81def6e4",
      "code": "app.dashboardorganisationtype.remove",
      "label": "Supprimer un tableau de bord partagé"
    },
    {
      "id": "8f41d8b4-e715-4ec8-aeec-5dddffea15f5",
      "code": "app.location.update",
      "label": "Modifier un site"
    },
    {
      "id": "5a1f0a96-a4aa-4095-9d9d-e372182758bd",
      "code": "app.chartorganisation.create",
      "label": "Créer un graphique personnalisé"
    },
    {
      "id": "c4b32eb9-e474-4e11-8cbd-e3834e93c572",
      "code": "app.devicedata.read",
      "label": "Accéder aux données des équipements"
    },
    {
      "id": "0ca3428a-e640-4376-9808-390475f94b23",
      "code": "app.deviceorganisation.read",
      "label": "Voir les équipements"
    },
    {
      "id": "f2e6dca0-bd67-49ae-9648-c12f68f0d98f",
      "code": "app.dashboardorganisation.lock",
      "label": "Verrouiller un tableau de bord personnalisé"
    },
    {
      "id": "77705e99-a571-43b8-ae2e-ca18a0bbe17b",
      "code": "app.userorganisation.update",
      "label": "Modifier un utilisateur"
    },
    {
      "id": "b3d593af-b224-4ca0-853d-135657aafcf6",
      "code": "app.location.create",
      "label": "Créer un site"
    },
    {
      "id": "4a401ce1-1e80-4f2f-8264-399664d35bc5",
      "code": "app.deviceorganisation.remove",
      "label": "Supprimer un équipement"
    },
    {
      "id": "20546cc1-3483-4b76-98ad-0f81b7aa47e1",
      "code": "app.roleorganisation.create",
      "label": "Créer un rôle personnalisé"
    },
    {
      "id": "1c1da441-00c9-4990-943f-5e2d3308e895",
      "code": "app.chartorganisationtype.update",
      "label": "Modifier un graphique partagé"
    },
    {
      "id": "82ec5e96-87bc-4765-88d2-8f3281f76201",
      "code": "app.organisationtype.dashboard",
      "label": "Définir le tableau de bord par défaut pour chaque type d'organisation"
    },
    {
      "id": "07843d2b-3283-480d-b512-696f21037113",
      "code": "app.scenario.manage",
      "label": "Appliquer/supprimer des règles d'alerte sur les équipements"
    },
    {
      "id": "aee88617-1289-4a5d-85d9-270f5f6ff73c",
      "code": "app.userorganisation.remove",
      "label": "Supprimer un utilisateur"
    },
    {
      "id": "9d705d2d-ec55-4004-bb6c-9c7ec482e6c7",
      "code": "app.permissionrole.infos",
      "label": "(deprecated)"
    },
    {
      "id": "57ffe1db-4284-46d0-afb6-115ca2e41910",
      "code": "app.roleorganisation.update",
      "label": "Modifier un rôle personnalisé"
    },
    {
      "id": "20f28a23-dcba-46d1-a53b-fb04475d65e4",
      "code": "app.dashboardorganisation.remove",
      "label": "Supprimer un tableau de bord personnalisé"
    },
    {
      "id": "eb61e466-03d7-4f0d-be04-c03e1a1e76cf",
      "code": "app.location.read",
      "label": "Voir les sites"
    },
    {
      "id": "3cd368c5-338f-466a-a634-b3a2b08c30e6",
      "code": "app.dashboardorganisation.update",
      "label": "Modifier un tableau de bord personnalisé"
    }
  ],
  "mainDashboardLabel": "00 - Accueil",
  "id": "e3f8c8c1-621d-45e3-83c7-1cce333e44a2",
  "userId": "2a1444e8-c71a-4eeb-8731-621c7f274c2d",
  "organisationId": "7ec18038-6033-4c44-b3db-bf2254cdd967",
  "roleType": 0,
  "admin": true,
  "userType": 1,
  "validity": 4,
  "allowNotifications": true,
  "allowSms": true,
  "allowEmails": true,
  "imageId": "9a8f4bb6-c38f-4829-829f-8350f5301b91",
  "email": "jmartin@dative-gpi.com",
  "phoneNumber": "+336010203041",
  "firstName": "DATIVEs",
  "lastName": "GPIs",
  "name": "DATIVEs GPIs",
  "tags": []
}