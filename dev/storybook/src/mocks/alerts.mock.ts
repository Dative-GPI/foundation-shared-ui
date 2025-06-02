import type { AlertInfosDTO } from "@dative-gpi/foundation-core-domain/models";

export const ALERTS: AlertInfosDTO[] = [
  {
      "id": "00f7f6c9-2d99-4051-9e04-b7e2f8ab9c19",
      "scenarioId": "73719e1c-2acc-4a07-80a3-14ac9b7b811b",
      "organisationId": "7419eb59-d1a8-4c8e-8091-b0710b0e1e23",
      "deviceOrganisationId": "595ed534-e2a1-4288-838d-db74d717a175",
      "deviceOrganisationImageId": "88a023d2-90f7-4789-9bca-cc90f3095d40",
      "deviceOrganisationCode": "9300000000108957",
      "deviceOrganisationLabel": "NUOVO FORNO PANCI - Forno Orion EVO 802/5-220",
      "criticity": 2,
      "code": "",
      "icon": "mdi-alert-circle",
      "tags": [],
      "acknowledgingTimestamp": null,
      "acknowledgingUserId": null,
      "acknowledgingUserImageId": null,
      "deviceOrganisationLocationLabel": null,
      "deviceOrganisationOwnerLabel": null,
      "scenarioScope": 1,
      "history": [
          {
              "id": "d4d8c4c9-27ad-4401-ab20-d6392a02ea22",
              "metadataValues": [
                  {
                      "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                      "value": "CUISSON",
                      "unit": "",
                      "label": "Etat"
                  },
                  {
                      "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                      "value": "4",
                      "unit": "",
                      "label": "Etage"
                  }
              ],
              "sourceTimestamp": "2024-09-07T07:38:55.574Z",
              "enqueuedTimestamp": "2024-09-07T07:43:20.882Z",
              "processedTimestamp": "2024-09-07T07:43:21.04357Z",
              "actualTimestamp": "2024-09-07T07:43:21.04357Z",
              "status": 2
          },
          {
              "id": "89749046-d5b4-475b-a2c3-82d8919e7f97",
              "metadataValues": [
                  {
                      "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                      "value": "REGULATION",
                      "unit": "",
                      "label": "Etat"
                  },
                  {
                      "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                      "value": "4",
                      "unit": "",
                      "label": "Etage"
                  }
              ],
              "sourceTimestamp": "2024-09-07T07:09:48.22Z",
              "enqueuedTimestamp": "2024-09-07T07:13:21.025Z",
              "processedTimestamp": "2024-09-07T07:13:21.248132Z",
              "actualTimestamp": "2024-09-07T07:43:21.04357Z",
              "status": 1
          }
      ],
      "groupByValues": [
          {
              "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
              "value": "4",
              "unit": "",
              "label": "Etage"
          }
      ],
      "acknowledged": false,
      "acknowledgingUserName": "",
      "label": "Un étage est en régulation depuis plus de 15 min.",
      "scenarioLabel": "Etage en régulation",
      "initialState": {
          "id": "89749046-d5b4-475b-a2c3-82d8919e7f97",
          "metadataValues": [
              {
                  "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                  "value": "REGULATION",
                  "unit": "",
                  "label": "Etat"
              },
              {
                  "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                  "value": "4",
                  "unit": "",
                  "label": "Etage"
              }
          ],
          "sourceTimestamp": "2024-09-07T07:09:48.22Z",
          "enqueuedTimestamp": "2024-09-07T07:13:21.025Z",
          "processedTimestamp": "2024-09-07T07:13:21.248132Z",
          "actualTimestamp": "2024-09-07T07:43:21.04357Z",
          "status": 1
      },
      "triggerSourceTimestamp": "2024-09-07T07:09:48.22Z",
      "triggerEnqueuedTimestamp": "2024-09-07T07:13:21.025Z",
      "triggerProcessedTimestamp": "2024-09-07T07:13:21.248132Z",
      "triggerActualTimestamp": "2024-09-07T07:13:21.248132Z",
      "lastState": {
          "id": "d4d8c4c9-27ad-4401-ab20-d6392a02ea22",
          "metadataValues": [
              {
                  "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                  "value": "CUISSON",
                  "unit": "",
                  "label": "Etat"
              },
              {
                  "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                  "value": "4",
                  "unit": "",
                  "label": "Etage"
              }
          ],
          "sourceTimestamp": "2024-09-07T07:38:55.574Z",
          "enqueuedTimestamp": "2024-09-07T07:43:20.882Z",
          "processedTimestamp": "2024-09-07T07:43:21.04357Z",
          "actualTimestamp": "2024-09-07T07:43:21.04357Z",
          "status": 2
      },
      "currentSourceTimestamp": "2024-09-07T07:38:55.574Z",
      "currentEnqueuedTimestamp": "2024-09-07T07:43:20.882Z",
      "currentProcessedTimestamp": "2024-09-07T07:43:21.04357Z",
      "currentActualTimestamp": "2024-09-07T07:43:21.04357Z",
      "currentStatus": 1
  },
  {
      "id": "02f263cf-4b4d-47e6-a7e7-89e2b1b3444d",
      "scenarioId": "73719e1c-2acc-4a07-80a3-14ac9b7b811b",
      "organisationId": "7419eb59-d1a8-4c8e-8091-b0710b0e1e23",
      "deviceOrganisationId": "595ed534-e2a1-4288-838d-db74d717a175",
      "deviceOrganisationImageId": "88a023d2-90f7-4789-9bca-cc90f3095d40",
      "deviceOrganisationCode": "9300000000108957",
      "deviceOrganisationLabel": "NUOVO FORNO PANCI - Forno Orion EVO 802/5-220",
      "criticity": 1,
      "code": "",
      "icon": "mdi-alert-circle",
      "tags": [],
      "acknowledgingTimestamp": null,
      "acknowledgingUserId": null,
      "acknowledgingUserImageId": null,
      "deviceOrganisationLocationLabel": null,
      "deviceOrganisationOwnerLabel": null,
      "scenarioScope": 1,
      "history": [
          {
              "id": "35914f30-ae58-427c-be5a-d22b37503e01",
              "metadataValues": [
                  {
                      "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                      "value": "VEILLE",
                      "unit": "",
                      "label": "Etat"
                  },
                  {
                      "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                      "value": "2",
                      "unit": "",
                      "label": "Etage"
                  }
              ],
              "sourceTimestamp": "2024-09-06T07:50:25.515Z",
              "enqueuedTimestamp": "2024-09-06T07:53:19.402Z",
              "processedTimestamp": "2024-09-06T07:53:19.646868Z",
              "actualTimestamp": "2024-09-06T07:53:19.646868Z",
              "status": 2
          },
          {
              "id": "0ef87803-9ef5-45d4-9469-65bb3ec16df8",
              "metadataValues": [
                  {
                      "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                      "value": "REGULATION",
                      "unit": "",
                      "label": "Etat"
                  },
                  {
                      "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                      "value": "2",
                      "unit": "",
                      "label": "Etage"
                  }
              ],
              "sourceTimestamp": "2024-09-06T05:58:15.733Z",
              "enqueuedTimestamp": "2024-09-06T06:03:19.282Z",
              "processedTimestamp": "2024-09-06T06:03:19.479182Z",
              "actualTimestamp": "2024-09-06T07:53:19.646868Z",
              "status": 1
          }
      ],
      "groupByValues": [
          {
              "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
              "value": "2",
              "unit": "",
              "label": "Etage"
          }
      ],
      "acknowledged": false,
      "acknowledgingUserName": "",
      "label": "Un étage est en régulation depuis plus de 5 min.",
      "scenarioLabel": "Etage en régulation",
      "initialState": {
          "id": "0ef87803-9ef5-45d4-9469-65bb3ec16df8",
          "metadataValues": [
              {
                  "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                  "value": "REGULATION",
                  "unit": "",
                  "label": "Etat"
              },
              {
                  "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                  "value": "2",
                  "unit": "",
                  "label": "Etage"
              }
          ],
          "sourceTimestamp": "2024-09-06T05:58:15.733Z",
          "enqueuedTimestamp": "2024-09-06T06:03:19.282Z",
          "processedTimestamp": "2024-09-06T06:03:19.479182Z",
          "actualTimestamp": "2024-09-06T07:53:19.646868Z",
          "status": 1
      },
      "triggerSourceTimestamp": "2024-09-06T05:58:15.733Z",
      "triggerEnqueuedTimestamp": "2024-09-06T06:03:19.282Z",
      "triggerProcessedTimestamp": "2024-09-06T06:03:19.479182Z",
      "triggerActualTimestamp": "2024-09-06T07:53:19.646868Z",
      "lastState": {
          "id": "35914f30-ae58-427c-be5a-d22b37503e01",
          "metadataValues": [
              {
                  "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                  "value": "VEILLE",
                  "unit": "",
                  "label": "Etat"
              },
              {
                  "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                  "value": "2",
                  "unit": "",
                  "label": "Etage"
              }
          ],
          "sourceTimestamp": "2024-09-06T07:50:25.515Z",
          "enqueuedTimestamp": "2024-09-06T07:53:19.402Z",
          "processedTimestamp": "2024-09-06T07:53:19.646868Z",
          "actualTimestamp": "2024-09-06T07:53:19.646868Z",
          "status": 2
      },
      "currentSourceTimestamp": "2024-09-06T07:50:25.515Z",
      "currentEnqueuedTimestamp": "2024-09-06T07:53:19.402Z",
      "currentProcessedTimestamp": "2024-09-06T07:53:19.646868Z",
      "currentActualTimestamp": "2024-09-06T07:53:19.646868Z",
      "currentStatus": 2
  },
  {
      "id": "0439bb45-8597-4adf-af62-d34b695337a8",
      "scenarioId": "73719e1c-2acc-4a07-80a3-14ac9b7b811b",
      "organisationId": "7419eb59-d1a8-4c8e-8091-b0710b0e1e23",
      "deviceOrganisationId": "595ed534-e2a1-4288-838d-db74d717a175",
      "deviceOrganisationImageId": "88a023d2-90f7-4789-9bca-cc90f3095d40",
      "deviceOrganisationCode": "9300000000108957",
      "deviceOrganisationLabel": "NUOVO FORNO PANCI - Forno Orion EVO 802/5-220",
      "criticity": 2,
      "code": "",
      "icon": "mdi-alert-circle",
      "tags": [],
      "acknowledgingTimestamp": null,
      "acknowledgingUserId": null,
      "acknowledgingUserImageId": null,
      "deviceOrganisationLocationLabel": null,
      "deviceOrganisationOwnerLabel": null,
      "scenarioScope": 1,
      "history": [
          {
              "id": "96b8d0da-d5d7-49d2-9e2a-7bd48c51ecb7",
              "metadataValues": [
                  {
                      "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                      "value": "CUISSON",
                      "unit": "",
                      "label": "Etat"
                  },
                  {
                      "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                      "value": "1",
                      "unit": "",
                      "label": "Etage"
                  }
              ],
              "sourceTimestamp": "2024-09-06T02:22:33.774Z",
              "enqueuedTimestamp": "2024-09-06T02:23:19.639Z",
              "processedTimestamp": "2024-09-06T02:23:20.075759Z",
              "actualTimestamp": "2024-09-06T02:23:20.075759Z",
              "status": 2
          },
          {
              "id": "ac62c2dd-5509-476b-b660-e39608006a8f",
              "metadataValues": [
                  {
                      "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                      "value": "REGULATION",
                      "unit": "",
                      "label": "Etat"
                  },
                  {
                      "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                      "value": "1",
                      "unit": "",
                      "label": "Etage"
                  }
              ],
              "sourceTimestamp": "2024-09-06T01:55:14.913Z",
              "enqueuedTimestamp": "2024-09-06T02:03:19.055Z",
              "processedTimestamp": "2024-09-06T02:03:19.39776Z",
              "actualTimestamp": "2024-09-06T02:23:20.075759Z",
              "status": 1
          }
      ],
      "groupByValues": [
          {
              "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
              "value": "1",
              "unit": "",
              "label": "Etage"
          }
      ],
      "acknowledged": false,
      "acknowledgingUserName": "",
      "label": "Un étage est en régulation depuis plus de 15 min.",
      "scenarioLabel": "Etage en régulation",
      "initialState": {
          "id": "ac62c2dd-5509-476b-b660-e39608006a8f",
          "metadataValues": [
              {
                  "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                  "value": "REGULATION",
                  "unit": "",
                  "label": "Etat"
              },
              {
                  "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                  "value": "1",
                  "unit": "",
                  "label": "Etage"
              }
          ],
          "sourceTimestamp": "2024-09-06T01:55:14.913Z",
          "enqueuedTimestamp": "2024-09-06T02:03:19.055Z",
          "processedTimestamp": "2024-09-06T02:03:19.39776Z",
          "actualTimestamp": "2024-09-06T02:23:20.075759Z",
          "status": 1
      },
      "triggerSourceTimestamp": "2024-09-06T01:55:14.913Z",
      "triggerEnqueuedTimestamp": "2024-09-06T02:03:19.055Z",
      "triggerProcessedTimestamp": "2024-09-06T02:03:19.39776Z",
      "triggerActualTimestamp": "2024-09-06T02:23:20.075759Z",
      "lastState": {
          "id": "96b8d0da-d5d7-49d2-9e2a-7bd48c51ecb7",
          "metadataValues": [
              {
                  "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                  "value": "CUISSON",
                  "unit": "",
                  "label": "Etat"
              },
              {
                  "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                  "value": "1",
                  "unit": "",
                  "label": "Etage"
              }
          ],
          "sourceTimestamp": "2024-09-06T02:22:33.774Z",
          "enqueuedTimestamp": "2024-09-06T02:23:19.639Z",
          "processedTimestamp": "2024-09-06T02:23:20.075759Z",
          "actualTimestamp": "2024-09-06T02:23:20.075759Z",
          "status": 2
      },
      "currentSourceTimestamp": "2024-09-06T02:22:33.774Z",
      "currentEnqueuedTimestamp": "2024-09-06T02:23:19.639Z",
      "currentProcessedTimestamp": "2024-09-06T02:23:20.075759Z",
      "currentActualTimestamp": "2024-09-06T02:23:20.075759Z",
      "currentStatus": 2
  },
  {
      "id": "06cc5141-e586-4a36-88dc-7931defed936",
      "scenarioId": "73719e1c-2acc-4a07-80a3-14ac9b7b811b",
      "organisationId": "7419eb59-d1a8-4c8e-8091-b0710b0e1e23",
      "deviceOrganisationId": "595ed534-e2a1-4288-838d-db74d717a175",
      "deviceOrganisationImageId": "88a023d2-90f7-4789-9bca-cc90f3095d40",
      "deviceOrganisationCode": "9300000000108957",
      "deviceOrganisationLabel": "NUOVO FORNO PANCI - Forno Orion EVO 802/5-220",
      "criticity": 2,
      "code": "",
      "icon": "mdi-alert-circle",
      "tags": [],
      "acknowledgingTimestamp": null,
      "acknowledgingUserId": null,
      "acknowledgingUserImageId": null,
      "deviceOrganisationLocationLabel": null,
      "deviceOrganisationOwnerLabel": null,
      "scenarioScope": 1,
      "history": [
          {
              "id": "ab5f3a21-00c8-49c4-8bcf-68adc4eaf440",
              "metadataValues": [
                  {
                      "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                      "value": "CUISSON",
                      "unit": "",
                      "label": "Etat"
                  },
                  {
                      "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                      "value": "2",
                      "unit": "",
                      "label": "Etage"
                  }
              ],
              "sourceTimestamp": "2024-09-07T01:59:50.975Z",
              "enqueuedTimestamp": "2024-09-07T02:03:20.705Z",
              "processedTimestamp": "2024-09-07T02:03:20.94841Z",
              "actualTimestamp": "2024-09-07T02:03:20.94841Z",
              "status": 2
          },
          {
              "id": "ef910e5c-2b1c-4592-8139-694160c381b5",
              "metadataValues": [
                  {
                      "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                      "value": "REGULATION",
                      "unit": "",
                      "label": "Etat"
                  },
                  {
                      "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                      "value": "2",
                      "unit": "",
                      "label": "Etage"
                  }
              ],
              "sourceTimestamp": "2024-09-07T01:41:58.928Z",
              "enqueuedTimestamp": "2024-09-07T01:43:20.576Z",
              "processedTimestamp": "2024-09-07T01:43:20.886202Z",
              "actualTimestamp": "2024-09-07T02:03:20.94841Z",
              "status": 1
          }
      ],
      "groupByValues": [
          {
              "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
              "value": "2",
              "unit": "",
              "label": "Etage"
          }
      ],
      "acknowledged": false,
      "acknowledgingUserName": "",
      "label": "Un étage est en régulation depuis plus de 15 min.",
      "scenarioLabel": "Etage en régulation",
      "initialState": {
          "id": "ef910e5c-2b1c-4592-8139-694160c381b5",
          "metadataValues": [
              {
                  "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                  "value": "REGULATION",
                  "unit": "",
                  "label": "Etat"
              },
              {
                  "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                  "value": "2",
                  "unit": "",
                  "label": "Etage"
              }
          ],
          "sourceTimestamp": "2024-09-07T01:41:58.928Z",
          "enqueuedTimestamp": "2024-09-07T01:43:20.576Z",
          "processedTimestamp": "2024-09-07T01:43:20.886202Z",
          "actualTimestamp": "2024-09-07T02:03:20.94841Z",
          "status": 1
      },
      "triggerSourceTimestamp": "2024-09-07T01:41:58.928Z",
      "triggerEnqueuedTimestamp": "2024-09-07T01:43:20.576Z",
      "triggerProcessedTimestamp": "2024-09-07T01:43:20.886202Z",
      "triggerActualTimestamp": "2024-09-07T02:03:20.94841Z",
      "lastState": {
          "id": "ab5f3a21-00c8-49c4-8bcf-68adc4eaf440",
          "metadataValues": [
              {
                  "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                  "value": "CUISSON",
                  "unit": "",
                  "label": "Etat"
              },
              {
                  "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                  "value": "2",
                  "unit": "",
                  "label": "Etage"
              }
          ],
          "sourceTimestamp": "2024-09-07T01:59:50.975Z",
          "enqueuedTimestamp": "2024-09-07T02:03:20.705Z",
          "processedTimestamp": "2024-09-07T02:03:20.94841Z",
          "actualTimestamp": "2024-09-07T02:03:20.94841Z",
          "status": 2
      },
      "currentSourceTimestamp": "2024-09-07T01:59:50.975Z",
      "currentEnqueuedTimestamp": "2024-09-07T02:03:20.705Z",
      "currentProcessedTimestamp": "2024-09-07T02:03:20.94841Z",
      "currentActualTimestamp": "2024-09-07T02:03:20.94841Z",
      "currentStatus": 2
  },
  {
      "id": "07f11e44-51a6-4716-a446-f853da6e462e",
      "scenarioId": "73719e1c-2acc-4a07-80a3-14ac9b7b811b",
      "organisationId": "7419eb59-d1a8-4c8e-8091-b0710b0e1e23",
      "deviceOrganisationId": "595ed534-e2a1-4288-838d-db74d717a175",
      "deviceOrganisationImageId": "88a023d2-90f7-4789-9bca-cc90f3095d40",
      "deviceOrganisationCode": "9300000000108957",
      "deviceOrganisationLabel": "NUOVO FORNO PANCI - Forno Orion EVO 802/5-220",
      "criticity": 2,
      "code": "",
      "icon": "mdi-alert-circle",
      "tags": [],
      "acknowledgingTimestamp": null,
      "acknowledgingUserId": null,
      "acknowledgingUserImageId": null,
      "deviceOrganisationLocationLabel": null,
      "deviceOrganisationOwnerLabel": null,
      "scenarioScope": 1,
      "history": [
          {
              "id": "ab5f3a21-00c8-49c4-8bcf-68adc4eaf440",
              "metadataValues": [
                  {
                      "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                      "value": "CUISSON",
                      "unit": "",
                      "label": "Etat"
                  },
                  {
                      "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                      "value": "2",
                      "unit": "",
                      "label": "Etage"
                  }
              ],
              "sourceTimestamp": "2024-09-07T01:59:50.975Z",
              "enqueuedTimestamp": "2024-09-07T02:03:20.705Z",
              "processedTimestamp": "2024-09-07T02:03:20.94841Z",
              "actualTimestamp": "2024-09-07T02:03:20.94841Z",
              "status": 2
          },
          {
              "id": "ef910e5c-2b1c-4592-8139-694160c381b5",
              "metadataValues": [
                  {
                      "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                      "value": "REGULATION",
                      "unit": "",
                      "label": "Etat"
                  },
                  {
                      "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                      "value": "2",
                      "unit": "",
                      "label": "Etage"
                  }
              ],
              "sourceTimestamp": "2024-09-07T01:41:58.928Z",
              "enqueuedTimestamp": "2024-09-07T01:43:20.576Z",
              "processedTimestamp": "2024-09-07T01:43:20.886202Z",
              "actualTimestamp": "2024-09-07T02:03:20.94841Z",
              "status": 1
          }
      ],
      "groupByValues": [
          {
              "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
              "value": "2",
              "unit": "",
              "label": "Etage"
          }
      ],
      "acknowledged": false,
      "acknowledgingUserName": "",
      "label": "Un étage est en régulation depuis plus de 15 min.",
      "scenarioLabel": "Etage en régulation",
      "initialState": {
          "id": "ef910e5c-2b1c-4592-8139-694160c381b5",
          "metadataValues": [
              {
                  "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                  "value": "REGULATION",
                  "unit": "",
                  "label": "Etat"
              },
              {
                  "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                  "value": "2",
                  "unit": "",
                  "label": "Etage"
              }
          ],
          "sourceTimestamp": "2024-09-07T01:41:58.928Z",
          "enqueuedTimestamp": "2024-09-07T01:43:20.576Z",
          "processedTimestamp": "2024-09-07T01:43:20.886202Z",
          "actualTimestamp": "2024-09-07T02:03:20.94841Z",
          "status": 1
      },
      "triggerSourceTimestamp": "2024-09-07T01:41:58.928Z",
      "triggerEnqueuedTimestamp": "2024-09-07T01:43:20.576Z",
      "triggerProcessedTimestamp": "2024-09-07T01:43:20.886202Z",
      "triggerActualTimestamp": "2024-09-07T02:03:20.94841Z",
      "lastState": {
          "id": "ab5f3a21-00c8-49c4-8bcf-68adc4eaf440",
          "metadataValues": [
              {
                  "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                  "value": "CUISSON",
                  "unit": "",
                  "label": "Etat"
              },
              {
                  "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                  "value": "2",
                  "unit": "",
                  "label": "Etage"
              }
          ],
          "sourceTimestamp": "2024-09-07T01:59:50.975Z",
          "enqueuedTimestamp": "2024-09-07T02:03:20.705Z",
          "processedTimestamp": "2024-09-07T02:03:20.94841Z",
          "actualTimestamp": "2024-09-07T02:03:20.94841Z",
          "status": 2
      },
      "currentSourceTimestamp": "2024-09-07T01:59:50.975Z",
      "currentEnqueuedTimestamp": "2024-09-07T02:03:20.705Z",
      "currentProcessedTimestamp": "2024-09-07T02:03:20.94841Z",
      "currentActualTimestamp": "2024-09-07T02:03:20.94841Z",
      "currentStatus": 2
  },
  {
      "id": "08647e72-e961-4291-97d4-4e95135f5ae6",
      "scenarioId": "73719e1c-2acc-4a07-80a3-14ac9b7b811b",
      "organisationId": "7419eb59-d1a8-4c8e-8091-b0710b0e1e23",
      "deviceOrganisationId": "595ed534-e2a1-4288-838d-db74d717a175",
      "deviceOrganisationImageId": "88a023d2-90f7-4789-9bca-cc90f3095d40",
      "deviceOrganisationCode": "9300000000108957",
      "deviceOrganisationLabel": "NUOVO FORNO PANCI - Forno Orion EVO 802/5-220",
      "criticity": 2,
      "code": "",
      "icon": "mdi-alert-circle",
      "tags": [],
      "acknowledgingTimestamp": null,
      "acknowledgingUserId": null,
      "acknowledgingUserImageId": null,
      "deviceOrganisationLocationLabel": null,
      "deviceOrganisationOwnerLabel": null,
      "scenarioScope": 1,
      "history": [
          {
              "id": "ab5f3a21-00c8-49c4-8bcf-68adc4eaf440",
              "metadataValues": [
                  {
                      "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                      "value": "CUISSON",
                      "unit": "",
                      "label": "Etat"
                  },
                  {
                      "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                      "value": "2",
                      "unit": "",
                      "label": "Etage"
                  }
              ],
              "sourceTimestamp": "2024-09-07T01:59:50.975Z",
              "enqueuedTimestamp": "2024-09-07T02:03:20.705Z",
              "processedTimestamp": "2024-09-07T02:03:20.94841Z",
              "actualTimestamp": "2024-09-07T02:03:20.94841Z",
              "status": 2
          },
          {
              "id": "ef910e5c-2b1c-4592-8139-694160c381b5",
              "metadataValues": [
                  {
                      "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                      "value": "REGULATION",
                      "unit": "",
                      "label": "Etat"
                  },
                  {
                      "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                      "value": "2",
                      "unit": "",
                      "label": "Etage"
                  }
              ],
              "sourceTimestamp": "2024-09-07T01:41:58.928Z",
              "enqueuedTimestamp": "2024-09-07T01:43:20.576Z",
              "processedTimestamp": "2024-09-07T01:43:20.886202Z",
              "actualTimestamp": "2024-09-07T02:03:20.94841Z",
              "status": 1
          }
      ],
      "groupByValues": [
          {
              "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
              "value": "2",
              "unit": "",
              "label": "Etage"
          }
      ],
      "acknowledged": false,
      "acknowledgingUserName": "",
      "label": "Un étage est en régulation depuis plus de 15 min.",
      "scenarioLabel": "Etage en régulation",
      "initialState": {
          "id": "ef910e5c-2b1c-4592-8139-694160c381b5",
          "metadataValues": [
              {
                  "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                  "value": "REGULATION",
                  "unit": "",
                  "label": "Etat"
              },
              {
                  "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                  "value": "2",
                  "unit": "",
                  "label": "Etage"
              }
          ],
          "sourceTimestamp": "2024-09-07T01:41:58.928Z",
          "enqueuedTimestamp": "2024-09-07T01:43:20.576Z",
          "processedTimestamp": "2024-09-07T01:43:20.886202Z",
          "actualTimestamp": "2024-09-07T02:03:20.94841Z",
          "status": 1
      },
      "triggerSourceTimestamp": "2024-09-07T01:41:58.928Z",
      "triggerEnqueuedTimestamp": "2024-09-07T01:43:20.576Z",
      "triggerProcessedTimestamp": "2024-09-07T01:43:20.886202Z",
      "triggerActualTimestamp": "2024-09-07T02:03:20.94841Z",
      "lastState": {
          "id": "ab5f3a21-00c8-49c4-8bcf-68adc4eaf440",
          "metadataValues": [
              {
                  "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                  "value": "CUISSON",
                  "unit": "",
                  "label": "Etat"
              },
              {
                  "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                  "value": "2",
                  "unit": "",
                  "label": "Etage"
              }
          ],
          "sourceTimestamp": "2024-09-07T01:59:50.975Z",
          "enqueuedTimestamp": "2024-09-07T02:03:20.705Z",
          "processedTimestamp": "2024-09-07T02:03:20.94841Z",
          "actualTimestamp": "2024-09-07T02:03:20.94841Z",
          "status": 2
      },
      "currentSourceTimestamp": "2024-09-07T01:59:50.975Z",
      "currentEnqueuedTimestamp": "2024-09-07T02:03:20.705Z",
      "currentProcessedTimestamp": "2024-09-07T02:03:20.94841Z",
      "currentActualTimestamp": "2024-09-07T02:03:20.94841Z",
      "currentStatus": 2
  },
  {
      "id": "0ba5d43e-0c32-4560-adb6-2c7126067002",
      "scenarioId": "73719e1c-2acc-4a07-80a3-14ac9b7b811b",
      "organisationId": "7419eb59-d1a8-4c8e-8091-b0710b0e1e23",
      "deviceOrganisationId": "595ed534-e2a1-4288-838d-db74d717a175",
      "deviceOrganisationImageId": "88a023d2-90f7-4789-9bca-cc90f3095d40",
      "deviceOrganisationCode": "9300000000108957",
      "deviceOrganisationLabel": "NUOVO FORNO PANCI - Forno Orion EVO 802/5-220",
      "criticity": 2,
      "code": "",
      "icon": "mdi-alert-circle",
      "tags": [],
      "acknowledgingTimestamp": null,
      "acknowledgingUserId": null,
      "acknowledgingUserImageId": null,
      "deviceOrganisationLocationLabel": null,
      "deviceOrganisationOwnerLabel": null,
      "scenarioScope": 1,
      "history": [
          {
              "id": "ab5f3a21-00c8-49c4-8bcf-68adc4eaf440",
              "metadataValues": [
                  {
                      "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                      "value": "CUISSON",
                      "unit": "",
                      "label": "Etat"
                  },
                  {
                      "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                      "value": "2",
                      "unit": "",
                      "label": "Etage"
                  }
              ],
              "sourceTimestamp": "2024-09-07T01:59:50.975Z",
              "enqueuedTimestamp": "2024-09-07T02:03:20.705Z",
              "processedTimestamp": "2024-09-07T02:03:20.94841Z",
              "actualTimestamp": "2024-09-07T02:03:20.94841Z",
              "status": 2
          },
          {
              "id": "ef910e5c-2b1c-4592-8139-694160c381b5",
              "metadataValues": [
                  {
                      "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                      "value": "REGULATION",
                      "unit": "",
                      "label": "Etat"
                  },
                  {
                      "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                      "value": "2",
                      "unit": "",
                      "label": "Etage"
                  }
              ],
              "sourceTimestamp": "2024-09-07T01:41:58.928Z",
              "enqueuedTimestamp": "2024-09-07T01:43:20.576Z",
              "processedTimestamp": "2024-09-07T01:43:20.886202Z",
              "actualTimestamp": "2024-09-07T02:03:20.94841Z",
              "status": 1
          }
      ],
      "groupByValues": [
          {
              "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
              "value": "2",
              "unit": "",
              "label": "Etage"
          }
      ],
      "acknowledged": false,
      "acknowledgingUserName": "",
      "label": "Un étage est en régulation depuis plus de 15 min.",
      "scenarioLabel": "Etage en régulation",
      "initialState": {
          "id": "ef910e5c-2b1c-4592-8139-694160c381b5",
          "metadataValues": [
              {
                  "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                  "value": "REGULATION",
                  "unit": "",
                  "label": "Etat"
              },
              {
                  "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                  "value": "2",
                  "unit": "",
                  "label": "Etage"
              }
          ],
          "sourceTimestamp": "2024-09-07T01:41:58.928Z",
          "enqueuedTimestamp": "2024-09-07T01:43:20.576Z",
          "processedTimestamp": "2024-09-07T01:43:20.886202Z",
          "actualTimestamp": "2024-09-07T02:03:20.94841Z",
          "status": 1
      },
      "triggerSourceTimestamp": "2024-09-07T01:41:58.928Z",
      "triggerEnqueuedTimestamp": "2024-09-07T01:43:20.576Z",
      "triggerProcessedTimestamp": "2024-09-07T01:43:20.886202Z",
      "triggerActualTimestamp": "2024-09-07T02:03:20.94841Z",
      "lastState": {
          "id": "ab5f3a21-00c8-49c4-8bcf-68adc4eaf440",
          "metadataValues": [
              {
                  "dataDefinitionId": "056e278a-b023-46f0-8865-e83f1ff9bfc3",
                  "value": "CUISSON",
                  "unit": "",
                  "label": "Etat"
              },
              {
                  "dataDefinitionId": "f1f6a97b-f44b-49d9-bef7-ff8e328ad84e",
                  "value": "2",
                  "unit": "",
                  "label": "Etage"
              }
          ],
          "sourceTimestamp": "2024-09-07T01:59:50.975Z",
          "enqueuedTimestamp": "2024-09-07T02:03:20.705Z",
          "processedTimestamp": "2024-09-07T02:03:20.94841Z",
          "actualTimestamp": "2024-09-07T02:03:20.94841Z",
          "status": 2
      },
      "currentSourceTimestamp": "2024-09-07T01:59:50.975Z",
      "currentEnqueuedTimestamp": "2024-09-07T02:03:20.705Z",
      "currentProcessedTimestamp": "2024-09-07T02:03:20.94841Z",
      "currentActualTimestamp": "2024-09-07T02:03:20.94841Z",
      "currentStatus": 3
  }
]