import{F as d}from"./FSDeviceOrganisationTileUI-d5226297.js";import"./vue.esm-bundler-cd768bc3.js";import"./FSStatusesCarousel-81dea7d5.js";import"./FSButton-7364cb00.js";import"./FSClickable-8effe836.js";import"./FSCard-0de7b634.js";import"./FSCol-ff457bc3.js";import"./css-c2ea3b68.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-1d7c2545.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./VProgressCircular-d119fa09.js";import"./color-4e667524.js";import"./useRender-d216bc3f.js";import"./resizeObserver-054c2f9a.js";import"./VIcon-95cdbe21.js";import"./tag-f5ad2c5e.js";import"./FSSpan-da6dde8e.js";import"./useSlots-2af30a3d.js";import"./FSIcon-5671b33c.js";import"./FSWindow-94e062cf.js";import"./group-9e3f1093.js";import"./proxiedModel-80cf7d0e.js";import"./locale-d1b7e37d.js";import"./VBtn-df7c9712.js";import"./border-d3eb62c5.js";import"./density-80e773e2.js";import"./elevation-7537bf82.js";import"./rounded-c9c22222.js";import"./dimensions-9d1d90d7.js";import"./loader-e29f326e.js";import"./anchor-9469ffd7.js";import"./router-12edcf18.js";import"./index-f4fa4c36.js";import"./VDefaultsProvider-ff78bc14.js";import"./lazy-07480c2b.js";import"./ssrBoot-a9e4f1d0.js";import"./transition-2948fa2b.js";import"./FSChip-2c87c938.js";import"./FSText-92e9b97f.js";import"./useAppTimeZone-d6a8f46f.js";import"./useTranslations-3c37761e.js";import"./FSColor-24c53974.js";import"./VMenu-2bc21026.js";import"./VOverlay-5f00a78b.js";import"./forwardRefs-e658ad70.js";import"./display-23d3bc4a.js";import"./scopeId-7a393669.js";import"./FSDivider-0f79eca0.js";import"./FSImage-18712f28.js";import"./FSLoader-bd777dc8.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-c82cc213.js";import"./VImg-7e8420c7.js";import"./index-cc35ebf5.js";import"./FSTile-8ff7d311.js";import"./FSCheckbox-c69cb5d8.js";import"./useRules-bb9e9594.js";import"./VSelectionControl-650165ff.js";import"./VLabel-ac265b88.js";import"./VInput-28424714.js";import"./index-b97c70d5.js";const Ie={title:"Foundation/Shared/Tiles/DeviceOrganisation",component:d,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i=[{id:"1",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:1,icon:"mdi-wifi",color:"#00FF00"},{id:"2",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:2,icon:"mdi-wifi",color:"#00FFFF"},{id:"3",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:3,icon:"mdi-wifi",color:"#FFFF00"},{id:"4",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:4,icon:"mdi-wifi",color:"#FF0000"},{id:"5",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,processedTimestamp:16233456e5,status:0,icon:null,color:null}],t=[{id:"1",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,label:"Device too hot",status:3,criticity:3},{id:"2",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,label:"Device too cold",status:6,criticity:1},{id:"3",sourceTimestamp:16233456e5,enqueuedTimestamp:16233456e5,label:"Device too late",status:5,criticity:1}],e=[{id:"1",label:"State",index:0,showDefault:!0,iconDefault:"mdi-power-standby",colorDefault:"#E3E3E3"},{id:"2",label:"Folder",index:1,showDefault:!1},{id:"3",label:"Luminosity",index:2,showDefault:!0,iconDefault:"mdi-lightbulb-outline",colorDefault:"#E3E3E3"},{id:"4",label:"Lock",index:3,showDefault:!0,iconDefault:"mdi-lock-outline",colorDefault:"#E3E3E3"},{id:"5",label:"Print",index:4,showDefault:!0,iconDefault:"mdi-printer-outline",colorDefault:"#E3E3E3"},{id:"9",label:"Ray start",index:5,showDefault:!0,iconDefault:"mdi-ray-start",colorDefault:"#000000"},{id:"10",label:"Ray end",index:6,showDefault:!0,iconDefault:"mdi-ray-end",colorDefault:"#000000"},{id:"6",label:"Temperatures",index:0,groupById:"1",groupByLabel:"Level",showDefault:!1},{id:"7",label:"Energies",index:1,groupById:"2",groupByLabel:"Level",showDefault:!1},{id:"8",label:"Recipes",index:2,groupById:"2",groupByLabel:"Level",showDefault:!0,iconDefault:"mdi-chef-hat",colorDefault:"#E3E3E3"}],s=[{modelStatusId:"1",statusGroups:[{label:"State",value:"On",icon:"mdi-power",color:"#009933",sourceTimestamp:16233456e5}]},{modelStatusId:"2",statusGroups:[{label:"Folder",value:"Check",icon:"mdi-folder-check-outline",color:"#003399",sourceTimestamp:16233456e5}]},{modelStatusId:"3",statusGroups:[{label:"Luminosity",value:"Bright",icon:"mdi-lightbulb-outline",color:"#996699",sourceTimestamp:16233456e5}]},{modelStatusId:"4",statusGroups:[{label:"Lock",value:"Locked",icon:"mdi-lock-outline",color:"#999933",sourceTimestamp:16233456e5}]},{modelStatusId:"5",statusGroups:[{label:"Print",value:"Printing",icon:"mdi-printer-outline",color:"#338888",sourceTimestamp:16233456e5}]},{modelStatusId:"6",statusGroups:[{label:"Temperatures",value:"200",groupByValue:"1",unit:"°C",icon:"mdi-thermometer",color:"#FF0000",sourceTimestamp:16233456e5},{label:"Temperatures",value:"50",groupByValue:"2",unit:"°C",icon:"mdi-thermometer",color:"#0000FF",sourceTimestamp:16233456e5}]},{modelStatusId:"7",statusGroups:[{label:"Energies",value:"100",groupByValue:"1",unit:"kWh",icon:"mdi-flash",color:"#FF0000",sourceTimestamp:16233456e5},{label:"Energies",value:"50",groupByValue:"2",unit:"kWh",icon:"mdi-flash",color:"#0000FF",sourceTimestamp:16233456e5}]},{modelStatusId:"8",statusGroups:[{label:"Recipes",value:"Bread",icon:"mdi-chef-hat",color:"#0000FF",sourceTimestamp:16233456e5}]}],n={args:{args:{values:[{id:"1",label:"Bakery Almeida Guerra",code:"930000000009920093000000000992009300000000099200",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"2",label:"Bakery João Coelho",code:"9300000000099201",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"3",label:"Bakery Estevão Mendes",code:"9300000000099202",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"4",label:"Bakery Rosária Corte-Real",code:"9300000000099203",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[],deviceStatuses:[]},{id:"5",label:"Bakery Eleuterio Caetano de Sousa e Melo de Cabral de la Cruz",code:"9300000000099204",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]},{id:"6",label:"Bakery Luís Castro",code:"9300000000099205",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[e[0],e[1],e[2],e[3],e[4]],deviceStatuses:[]},{id:"7",label:"Bakery Guiomar Hernandes de Medeiros",code:"9300000000099206",imageId:"1",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"8",label:"Bakery Rubem Garriço",code:"9300000000099207",imageId:"1",deviceConnectivity:null,deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"9",label:"Bakery Tiburcio Furtado Rosa",code:"9300000000099208",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:e,deviceStatuses:s},{id:"10",label:"Bakery Naiara Mascarenhas Bento",code:"9300000000099209",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:s},{id:"11",label:"Bakery Nelinha Ribeiro",code:"9300000000099209",imageId:"1",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]}],selected:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],onClick:a=>{console.log(a)}}},render:(a,{argTypes:o})=>({components:{FSDeviceOrganisationTileUI:d},props:Object.keys(o),setup(){return{...a}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDeviceOrganisationTileUI
        v-for="(deviceOrganisation, index) in args.values"
        :key="index"
        :imageId="deviceOrganisation.imageId"
        :label="deviceOrganisation.label"
        :code="deviceOrganisation.code"
        :deviceConnectivity="deviceOrganisation.deviceConnectivity"
        :deviceWorstAlert="deviceOrganisation.deviceWorstAlert"
        :deviceAlerts="deviceOrganisation.deviceAlerts"
        :modelStatuses="deviceOrganisation.modelStatuses"
        :deviceStatuses="deviceOrganisation.deviceStatuses"
        href="www.google.fr"
        v-model="args.selected[index]"
      />
    </div>`})},l={args:{args:{values:[{id:"1",label:"Bakery Almeida Guerra",code:"9300000000099200",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"2",label:"Bakery João Coelho",code:"9300000000099201",deviceConnectivity:i[0],deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"3",label:"Bakery Estevão Mendes",code:"9300000000099202",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:[],modelStatuses:[],deviceStatuses:[]},{id:"4",label:"Bakery Rosária Corte-Real",code:"9300000000099203",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[],deviceStatuses:[]},{id:"5",label:"Bakery Eleuterio Caetano de Sousa e Melo de Cabral de la Cruz",code:"9300000000099204",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]},{id:"6",label:"Bakery Luís Castro",code:"9300000000099205",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:[e[0],e[1],e[2],e[3],e[4]],deviceStatuses:[]},{id:"7",label:"Bakery Guiomar Hernandes de Medeiras",code:"9300000000099206",deviceConnectivity:i[0],deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"8",label:"Bakery Rubem Garriço",code:"9300000000099207",deviceConnectivity:null,deviceWorstAlert:t[0],deviceAlerts:t,modelStatuses:e,deviceStatuses:s},{id:"9",label:"Bakery Tiburcio Furtado Rosa",code:"9300000000099208",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:e,deviceStatuses:s},{id:"10",label:"Bakery Naiara Mascarenhas Bento",code:"9300000000099209",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:s},{id:"11",label:"Bakery Nelinha Ribeiro",code:"9300000000099209",deviceConnectivity:null,deviceWorstAlert:null,deviceAlerts:[],modelStatuses:[e[0],e[1],e[2],e[3]],deviceStatuses:[]}],selected:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]}},render:(a,{argTypes:o})=>({components:{FSDeviceOrganisationTileUI:d},props:Object.keys(o),setup(){return{...a}},template:`
  <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
    <FSDeviceOrganisationTileUI
      v-for="(deviceOrganisation, index) in args.values"
      :key="index"
      :label="deviceOrganisation.label"
      :code="deviceOrganisation.code"
      :deviceConnectivity="deviceOrganisation.deviceConnectivity"
      :deviceWorstAlert="deviceOrganisation.deviceWorstAlert"
      :deviceAlerts="deviceOrganisation.deviceAlerts"
      :modelStatuses="deviceOrganisation.modelStatuses"
      :deviceStatuses="deviceOrganisation.deviceStatuses"
      v-model="args.selected[index]"
    />
  </div>`})};var r,c,u;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "Bakery Almeida Guerra",
        code: "930000000009920093000000000992009300000000099200",
        imageId: "1",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "2",
        label: "Bakery João Coelho",
        code: "9300000000099201",
        imageId: "1",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "3",
        label: "Bakery Estevão Mendes",
        code: "9300000000099202",
        imageId: "1",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: [],
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "4",
        label: "Bakery Rosária Corte-Real",
        code: "9300000000099203",
        imageId: "1",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "5",
        label: "Bakery Eleuterio Caetano de Sousa e Melo de Cabral de la Cruz",
        code: "9300000000099204",
        imageId: "1",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
        deviceStatuses: []
      }, {
        id: "6",
        label: "Bakery Luís Castro",
        code: "9300000000099205",
        imageId: "1",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3], modelStatuses[4]],
        deviceStatuses: []
      }, {
        id: "7",
        label: "Bakery Guiomar Hernandes de Medeiros",
        code: "9300000000099206",
        imageId: "1",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: modelStatuses,
        deviceStatuses: deviceStatuses
      }, {
        id: "8",
        label: "Bakery Rubem Garriço",
        code: "9300000000099207",
        imageId: "1",
        deviceConnectivity: null,
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: modelStatuses,
        deviceStatuses: deviceStatuses
      }, {
        id: "9",
        label: "Bakery Tiburcio Furtado Rosa",
        code: "9300000000099208",
        imageId: "1",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: modelStatuses,
        deviceStatuses: deviceStatuses
      }, {
        id: "10",
        label: "Bakery Naiara Mascarenhas Bento",
        code: "9300000000099209",
        imageId: "1",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
        deviceStatuses: deviceStatuses
      }, {
        id: "11",
        label: "Bakery Nelinha Ribeiro",
        code: "9300000000099209",
        imageId: "1",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
        deviceStatuses: []
      }],
      selected: [false, false, false, false, false, false, false, false, false, false, false],
      onClick: (item: any) => {
        console.log(item);
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDeviceOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDeviceOrganisationTileUI
        v-for="(deviceOrganisation, index) in args.values"
        :key="index"
        :imageId="deviceOrganisation.imageId"
        :label="deviceOrganisation.label"
        :code="deviceOrganisation.code"
        :deviceConnectivity="deviceOrganisation.deviceConnectivity"
        :deviceWorstAlert="deviceOrganisation.deviceWorstAlert"
        :deviceAlerts="deviceOrganisation.deviceAlerts"
        :modelStatuses="deviceOrganisation.modelStatuses"
        :deviceStatuses="deviceOrganisation.deviceStatuses"
        href="www.google.fr"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var v,m,p;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "Bakery Almeida Guerra",
        code: "9300000000099200",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "2",
        label: "Bakery João Coelho",
        code: "9300000000099201",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "3",
        label: "Bakery Estevão Mendes",
        code: "9300000000099202",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: [],
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "4",
        label: "Bakery Rosária Corte-Real",
        code: "9300000000099203",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: [],
        deviceStatuses: []
      }, {
        id: "5",
        label: "Bakery Eleuterio Caetano de Sousa e Melo de Cabral de la Cruz",
        code: "9300000000099204",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
        deviceStatuses: []
      }, {
        id: "6",
        label: "Bakery Luís Castro",
        code: "9300000000099205",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3], modelStatuses[4]],
        deviceStatuses: []
      }, {
        id: "7",
        label: "Bakery Guiomar Hernandes de Medeiras",
        code: "9300000000099206",
        deviceConnectivity: connectivities[0],
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: modelStatuses,
        deviceStatuses: deviceStatuses
      }, {
        id: "8",
        label: "Bakery Rubem Garriço",
        code: "9300000000099207",
        deviceConnectivity: null,
        deviceWorstAlert: alerts[0],
        deviceAlerts: alerts,
        modelStatuses: modelStatuses,
        deviceStatuses: deviceStatuses
      }, {
        id: "9",
        label: "Bakery Tiburcio Furtado Rosa",
        code: "9300000000099208",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: modelStatuses,
        deviceStatuses: deviceStatuses
      }, {
        id: "10",
        label: "Bakery Naiara Mascarenhas Bento",
        code: "9300000000099209",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
        deviceStatuses: deviceStatuses
      }, {
        id: "11",
        label: "Bakery Nelinha Ribeiro",
        code: "9300000000099209",
        deviceConnectivity: null,
        deviceWorstAlert: null,
        deviceAlerts: [],
        modelStatuses: [modelStatuses[0], modelStatuses[1], modelStatuses[2], modelStatuses[3]],
        deviceStatuses: []
      }],
      selected: [false, false, false, false, false, false, false, false, false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDeviceOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
  <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
    <FSDeviceOrganisationTileUI
      v-for="(deviceOrganisation, index) in args.values"
      :key="index"
      :label="deviceOrganisation.label"
      :code="deviceOrganisation.code"
      :deviceConnectivity="deviceOrganisation.deviceConnectivity"
      :deviceWorstAlert="deviceOrganisation.deviceWorstAlert"
      :deviceAlerts="deviceOrganisation.deviceAlerts"
      :modelStatuses="deviceOrganisation.modelStatuses"
      :deviceStatuses="deviceOrganisation.deviceStatuses"
      v-model="args.selected[index]"
    />
  </div>\`
  })
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const he=["Variations","Imageless"];export{l as Imageless,n as Variations,he as __namedExportsOrder,Ie as default};