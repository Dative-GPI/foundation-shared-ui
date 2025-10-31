import{b as u}from"./properties-Qw-O9fbT.js";import{F as l}from"./FSTile-CPs209xc.js";import{F as i}from"./FSGroupTileUI-CZMxfKSO.js";import{F as c}from"./FSLoadTile-C36HWg-d.js";import"./vue.esm-bundler-CC_jVOJ5.js";import"./FSClickable-DFmwvck2.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCard-twwkVLSp.js";import"./FSCol-DVEaUPKl.js";import"./css-DTGEi_Ca.js";import"./useBreakpoints-BMcJFLA8.js";import"./FSRow-CjY3icuR.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./VProgressCircular-B7HKciov.js";import"./color-BM2dSUAO.js";import"./resizeObserver-BZ0AJw4z.js";import"./VIcon-BOLLMMm0.js";import"./FSCheckbox-D-xuSzdC.js";import"./FSIcon-CeLDRxMK.js";import"./FSSpan-DkNsO5wd.js";import"./useSlots-C8jkAuOW.js";import"./useRules-Da0JLBaA.js";import"./VCheckboxBtn-C85wpeer.js";import"./VSelectionControl-CvHa2RXZ.js";import"./density-mssFUWH2.js";import"./proxiedModel-Nw0LX-ta.js";import"./index-DWDx8SXO.js";import"./VLabel-kKpu5iXd.js";import"./VInput-0C1kQySn.js";import"./locale-K9DBMW2q.js";import"./index-Dylhq_Dl.js";import"./transition-Ucf2Ovas.js";import"./dimensions-TKp8HHzB.js";import"./FSEntityCountBadge-N3i0Hfui.js";import"./FSColor-ZoGLOG1G.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-3tPA3xAK.js";import"./FSIconCard-C9Y7GHaO.js";import"./FSImage-s4wyGGaF.js";import"./FSImageUI-DVteMu9v.js";import"./FSLoader-0nGK1qhA.js";import"./elevation-CjJG1XnK.js";import"./VImg-BmPSKt86.js";import"./rounded-Cy4gG01O.js";import"./index-B48vLg-P.js";import"./useImages-k4wzHpJZ.js";import"./base-CmdGny12.js";import"./composableFactory-7f7_oyFS.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BT-dflJP.js";const fr={title:"Foundation/Shared/Tiles/Group",component:i,tags:["autodocs"],argTypes:{...u([l],i)}},e={args:{label:"Dynasties & Dystopia",code:"Denzel Curry featuring Gizzle and Bren Joy",icon:"mdi-group",recursiveGroupsIds:Array.from(Array(50).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(100).keys()).map(r=>r.toString())},render:r=>({components:{FSGroupTileUI:i,FSLoadTile:c},setup(){return{args:r}},template:`
    Card : 
    <FSGroupTileUI
      v-model="args.modelValue"
      v-bind="args"
    />
    Loading :
    <FSLoadTile
      v-bind="args"
    />
    `})},o={args:{args:{values:[{id:"1",label:"Can't hold us",code:"Macklemore & Ryan Lewis",recursiveGroupsIds:[],recursiveDeviceOrganisationsIds:[]},{id:"2",label:"Paint the town red",code:"Doja Cat",recursiveGroupsIds:Array.from(Array(4).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(8).keys()).map(r=>r.toString())},{id:"3",label:"Who's ready for tomorrow",code:"Rat Boy",recursiveGroupsIds:Array.from(Array(4).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(16).keys()).map(r=>r.toString())},{id:"4",label:"Dynasties & Dystopia",code:"Denzel Curry featuring Gizzle and Bren Joy",recursiveGroupsIds:Array.from(Array(100).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(100).keys()).map(r=>r.toString())}],selected:[!1,!1]}},render:(r,{argTypes:d})=>({components:{FSGroupTileUI:i},props:Object.keys(d),setup(){return{...r}},template:`
  <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
    <FSGroupTileUI
      v-for="(group, index) in args.values"
      :key="index"
      :label="group.label"
      :code="group.code"
      :recursiveGroupsIds="group.recursiveGroupsIds"
      :recursiveDeviceOrganisationsIds="group.recursiveDeviceOrganisationsIds"
      v-model="args.selected[index]"
    />
  </div>`})};var s,a,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "Dynasties & Dystopia",
    code: "Denzel Curry featuring Gizzle and Bren Joy",
    icon: "mdi-group",
    recursiveGroupsIds: Array.from(Array(50).keys()).map(i => i.toString()),
    recursiveDeviceOrganisationsIds: Array.from(Array(100).keys()).map(i => i.toString())
  },
  render: args => ({
    components: {
      FSGroupTileUI,
      FSLoadTile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    Card : 
    <FSGroupTileUI
      v-model="args.modelValue"
      v-bind="args"
    />
    Loading :
    <FSLoadTile
      v-bind="args"
    />
    \`
  })
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var t,p,m;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "Can't hold us",
        code: "Macklemore & Ryan Lewis",
        recursiveGroupsIds: [],
        recursiveDeviceOrganisationsIds: []
      }, {
        id: "2",
        label: "Paint the town red",
        code: "Doja Cat",
        recursiveGroupsIds: Array.from(Array(4).keys()).map(i => i.toString()),
        recursiveDeviceOrganisationsIds: Array.from(Array(8).keys()).map(i => i.toString())
      }, {
        id: "3",
        label: "Who's ready for tomorrow",
        code: "Rat Boy",
        recursiveGroupsIds: Array.from(Array(4).keys()).map(i => i.toString()),
        recursiveDeviceOrganisationsIds: Array.from(Array(16).keys()).map(i => i.toString())
      }, {
        id: "4",
        label: "Dynasties & Dystopia",
        code: "Denzel Curry featuring Gizzle and Bren Joy",
        recursiveGroupsIds: Array.from(Array(100).keys()).map(i => i.toString()),
        recursiveDeviceOrganisationsIds: Array.from(Array(100).keys()).map(i => i.toString())
      }],
      selected: [false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSGroupTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
  <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
    <FSGroupTileUI
      v-for="(group, index) in args.values"
      :key="index"
      :label="group.label"
      :code="group.code"
      :recursiveGroupsIds="group.recursiveGroupsIds"
      :recursiveDeviceOrganisationsIds="group.recursiveDeviceOrganisationsIds"
      v-model="args.selected[index]"
    />
  </div>\`
  })
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Ir=["Default","Imageless"];export{e as Default,o as Imageless,Ir as __namedExportsOrder,fr as default};
