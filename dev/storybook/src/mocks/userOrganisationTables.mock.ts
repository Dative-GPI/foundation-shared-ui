import type { UserOrganisationTableInfosDTO } from "@dative-gpi/foundation-core-domain/models";

export const USERORGANISATIONTABLES: UserOrganisationTableInfosDTO[] = [
    {
        id: "1",
        code: "groups1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 0,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Code",
            value: "code",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Groups",
            value: "recursiveGroupsIds",
            index: 2,
            hidden: true,
            sortable: false,
            filterable: false
        }, {
            columnId: "4",
            text: "Devices",
            value: "recursiveDeviceOrganisationsIds",
            index: 3,
            hidden: true,
            sortable: false,
            filterable: false
        }, {
            columnId: "5",
            text: "Tags",
            value: "tags",
            index: 4,
            hidden: false,
            sortable: true,
            filterable: false
        }, {
            columnId: "6",
            text: "InexistantValue",
            value: "none",
            index: 5,
            hidden: false,
            sortable: true,
            filterable: false
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "2",
        code: "locations1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 0,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Code",
            value: "code",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Icon",
            value: "icon",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: false
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "3",
        code: "devices1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 0,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Code",
            value: "code",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Image",
            value: "imageId",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "3",
            text: "Connectivity",
            value: "connectivity",
            index: 3,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "4",
            text: "Alerts",
            value: "alerts",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "5",
            text: "Status",
            value: "status",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "31",
        code: "devices2",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Code 1",
            value: "meta.code1",
            index: 0,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Code 2",
            value: "meta.code2",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Code 3",
            value: "meta.code3",
            index: 2,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "4",
            text: "Code 4",
            value: "meta.code4",
            index: 3,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "5",
            text: "Code 5",
            value: "meta.code5",
            index: 4,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "6",
            text: "Code 6",
            value: "meta.code6",
            index: 5,
            hidden: false,
            sortable: true,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "4",
        code: "users1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Name",
            value: "name",
            index: 0,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Email",
            value: "email",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Image",
            value: "imageId",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "3",
            text: "Email authorized",
            value: "allowEmails",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "4",
            text: "SMS Authorized",
            value: "allowSms",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: false
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "5",
        code: "users2",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Name",
            value: "name",
            index: 0,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Email",
            value: "email",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Validity",
            value: "validity",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "3",
            text: "Phone",
            value: "phoneNumber",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: false
        },],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "6",
        code: "dashboards1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 0,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Icon",
            value: "icon",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Main dashboard",
            value: "main",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "4",
            text: "Tags",
            value: "tags",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "5",
            text: "Type",
            value: "dashboardType",
            index: 4,
            hidden: false,
            sortable: true,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "7",
        code: "folders1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 0,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Icon",
            value: "icon",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Main dashboard",
            value: "main",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "4",
            text: "Tags",
            value: "tags",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "8",
        code: "authTokens1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 0,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Creation Date",
            value: "creationDate",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Date Max",
            value: "dateMax",
            index: 2,
            hidden: false,
            sortable: true,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "9",
        code: "alerts1",
        mode: null,
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Criticity",
            value: "criticity",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "",
            value: "icon",
            index: 0,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "4",
            text: "Tags",
            value: "tags",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "5",
            text: "Groups",
            value: "groupByValues",
            index: 4,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "6",
            text: "Device Image",
            value: "deviceOrganisationImageId",
            index: 5,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "7",
            text: "Aknowledged",
            value: "acknowledged",
            index: 6,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "8",
            text: "Aknowledged by",
            value: "acknowledgingUserImageId",
            index: 7,
            hidden: false,
            sortable: false,
            filterable: true
        },
        {
            columnId: "10",
            text: "History",
            value: "history",
            index: 9,
            hidden: false,
            sortable: false,
            filterable: true
        },{
          columnId: "11",
          text: "Status",
          value: "currentStatus",
          index: 10,
          hidden: false,
          sortable: false,
          filterable: true
      }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "10",
        code: "charts1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Icon",
            value: "icon",
            index: 0,
            hidden: false,
            sortable: false,
            filterable: false
        },
        {
            columnId: "4",
            text: "Models",
            value: "modelsLabels",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: true
        },
        {
            columnId: "5",
            text: "Chart type",
            value: "chartType",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: true
        },
        {
            columnId: "6",
            text: "Chart scope",
            value: "origin",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "11",
        code: "dataCategories1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "12",
        code: "dataDefinitions1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Icon",
            value: "icon",
            index: 0,
            hidden: false,
            sortable: false,
            filterable: false
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "13",
        code: "models1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Image",
            value: "imageId",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "3",
            text: "Connectable",
            value: "connectable",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "14",
        code: "roleOrganisations1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Icon",
            value: "icon",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "3",
            text: "User Type",
            value: "userType",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "4",
            text: "Tags",
            value: "tags",
            index: 4,
            hidden: false,
            sortable: false,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "15",
        code: "scenarios1",
        mode: "table",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Icon",
            value: "icon",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "3",
            text: "Model Label",
            value: "modelLabel",
            index: 3,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "4",
            text: "Tags",
            value: "tags",
            index: 4,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "5",
            text: "Criticity",
            value: "criticity",
            index: 5,
            hidden: false,
            sortable: false,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "16",
        code: "serviceAccountOrganisations1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Validity",
            value: "validity",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "3",
            text: "Image",
            value: "imageId",
            index: 3,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "4",
            text: "Tags",
            value: "tags",
            index: 4,
            hidden: false,
            sortable: false,
            filterable: true
        },
        {
            columnId: "5",
            text: "User Type",
            value: "userType",
            index: 5,
            hidden: false,
            sortable: false,
            filterable: true
        }
        ],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "17",
        code: "connectivityScenarios1",
        mode: "table",
        rowsPerPage: 10,
        columns: [
            {
                columnId: "688be3a2-fba4-47cd-bea9-91972b364445",
                text: "Device organisation image id",
                value: "deviceOrganisationImageId",
                sortable: false,
                filterable: false,
                index: 0,
                hidden: false,
            },
            {
                columnId: "8ffef926-b8b1-4ed1-a6c1-1a530e746ec0",
                text: "Device organisation connectivity",
                value: "deviceOrganisationConnectivity",
                sortable: false,
                filterable: false,
                index: 2,
                hidden: false,
            },
            {
                columnId: "3c75de75-d3e5-4adc-a7ef-744219280efa",
                text: "Organisation",
                value: "deviceOrganisationLabel",
                sortable: true,
                filterable: true,
                index: 1,
                hidden: false,
            },
            {
                columnId: "ebf76d69-0f91-4b29-b24c-42e95ae63886",
                text: "Time",
                value: "time",
                sortable: true,
                filterable: false,
                index: 3,
                hidden: false,
            },
            {
                columnId: "b784b063-74b8-4ec6-b727-6cdb2849a392",
                text: "Prévenir le manager",
                value: "warnDeviceManager",
                sortable: false,
                filterable: false,
                index: 5,
                hidden: false,
            },
            {
                columnId: "982c4e95-9d88-4c47-b3b3-3a9655394015",
                text: "Warn on reconnection",
                value: "warnOnReconnection",
                sortable: false,
                filterable: false,
                index: 6,
                hidden: false,
            }
        ],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "18",
        code: "devicesExplorer1",
        mode: "table",
        rowsPerPage: 10,
        columns: [{
            columnId: "both1",
            text: "Label",
            value: "label",
            index: 0,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "both2",
            text: "Code",
            value: "code",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "both3",
            text: "Type",
            value: "type",
            index: 2,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "group1",
            text: "Icon",
            value: "icon",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "device1",
            text: "Image",
            value: "imageId",
            index: 4,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "device2",
            text: "Connectivity",
            value: "connectivity",
            index: 5,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "device3",
            text: "Alerts",
            value: "alerts",
            index: 6,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "device4",
            text: "Status",
            value: "status",
            index: 7,
            hidden: false,
            sortable: false,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "19",
        code: "foldersExplorer1",
        mode: "table",
        rowsPerPage: 10,
        columns: [
            {
                "columnId": "ee4baff5-ec77-49bf-9a77-c6883cbf9e51",
                "text": "Icône",
                "value": "icon",
                "sortable": false,
                "filterable": false,
                "index": 0,
                "hidden": false
            },
            {
                "columnId": "e99e08c0-64d0-4e7a-adc2-2263dc8721b5",
                "text": "Code",
                "value": "code",
                "sortable": false,
                "filterable": false,
                "index": 1,
                "hidden": false
            },
            {
                "columnId": "046f9724-f9e9-4a2e-b507-34c8b3942b7f",
                "text": "Nom",
                "value": "label",
                "sortable": false,
                "filterable": false,
                "index": 2,
                "hidden": false
            },
            {
                "columnId": "cb6b0e04-c80b-4ccf-a47f-9e3e3911a410",
                "text": "Tags",
                "value": "tags",
                "sortable": false,
                "filterable": false,
                "index": 3,
                "hidden": false
            }, {
                columnId: "5",
                text: "Type",
                value: "dashboardType",
                index: 4,
                hidden: false,
                sortable: true,
                filterable: true
            }
        ],
        sortByKey: null,
        sortByOrder: null
    }
];