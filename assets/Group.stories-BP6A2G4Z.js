import{b as u}from"./properties-DwZ_iDct.js";import{F as l}from"./FSTile-j531zXXx.js";import{F as i}from"./FSGroupTileUI-bq_Bs42P.js";import{F as c}from"./FSLoadTile-DadvRNGl.js";import"./vue.esm-bundler-CM4TIH-Q.js";import"./FSClickable-a8XmDSU8.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCard-CYsPoqay.js";import"./FSCol-Be93XvPD.js";import"./css-D38lF7BW.js";import"./useBreakpoints-DsICqL2A.js";import"./FSRow-C47sfGk6.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./VProgressCircular-C-4f-PXJ.js";import"./color-Bo6l13w9.js";import"./resizeObserver-Cb3oz2nO.js";import"./VIcon-GfKFLOEw.js";import"./FSCheckbox-cl9Reorp.js";import"./FSIcon-CIF0zaTI.js";import"./FSSpan-BXQyelfo.js";import"./useSlots-c6yg-hhg.js";import"./useRules-B12Yr5ve.js";import"./VSelectionControl-MVg9W9ha.js";import"./density-Dl4v3sM7.js";import"./proxiedModel-DKx29MO-.js";import"./index-BkfcJ8bv.js";import"./VLabel-Ca5QW7tf.js";import"./VInput-DXPqvHKO.js";import"./locale-BqFH1fBg.js";import"./index-BJH4L2FX.js";import"./transition-DMoMR0kB.js";import"./dimensions-DW-k5kP_.js";import"./FSSimpleTileUI-BPdAJXT6.js";import"./FSIconCard-czyPYjvR.js";import"./FSImage-BesC0Cra.js";import"./FSImageUI-CbHYTG-G.js";import"./FSLoader-_1jWS2ee.js";import"./elevation-DgpWsjTu.js";import"./VImg-D7XF-hIS.js";import"./rounded-CDCr0BOq.js";import"./index-DWgrY6Dg.js";import"./useImages-X7qHyDlJ.js";import"./base-CmdGny12.js";import"./composableFactory-B6T2dm2_.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-3v3Ax1PV.js";import"./FSColor-BRiM7uWQ.js";import"./badge-D9p4Oj7n.js";const gr={title:"Foundation/Shared/Tiles/Group",component:i,tags:["autodocs"],argTypes:{...u([l],i)}},e={args:{label:"Dynasties & Dystopia",code:"Denzel Curry featuring Gizzle and Bren Joy",icon:"mdi-group",recursiveGroupsIds:Array.from(Array(50).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(100).keys()).map(r=>r.toString())},render:r=>({components:{FSGroupTileUI:i,FSLoadTile:c},setup(){return{args:r}},template:`
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const vr=["Default","Imageless"];export{e as Default,o as Imageless,vr as __namedExportsOrder,gr as default};
