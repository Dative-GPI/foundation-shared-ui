import{b as u}from"./properties-Qw-O9fbT.js";import{F as l}from"./FSTile-05t0iUHJ.js";import{F as i}from"./FSGroupTileUI-DjUFRdZV.js";import{F as c}from"./FSLoadTile-DaCOw9m3.js";import"./vue.esm-bundler-B9lxvfDw.js";import"./FSClickable-zRgeWTkl.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCard-BwbWypiX.js";import"./FSCol-BwxAijHz.js";import"./css-BHrR5cp2.js";import"./useBreakpoints-Dc84uxeD.js";import"./FSRow-CFa9RNor.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./VProgressCircular-DSOzHF7B.js";import"./color-CLtf7Qrc.js";import"./useRender-DM2jvMPN.js";import"./resizeObserver-DjRdaT-k.js";import"./VIcon-DPcX_RaC.js";import"./icons-B5bBvhw0.js";import"./FSCheckbox-8fnFFMk6.js";import"./FSIcon-kCffLiJ2.js";import"./FSSpan-COYXSDbp.js";import"./useSlots-BioZKQqg.js";import"./useRules-Cun-4MZo.js";import"./VCheckboxBtn-BM2tTzJT.js";import"./VSelectionControl-COH1jBNJ.js";import"./density-DvMOIaQw.js";import"./proxiedModel-DRvKxps3.js";import"./index-EdIR5CJS.js";import"./VLabel-CT69iMfY.js";import"./VInput-DcZY3iGt.js";import"./locale-C647X9dJ.js";import"./index-7AXDWkBX.js";import"./transition-Dh_EAQcC.js";import"./dimensions-n1mPaUbN.js";import"./FSEntityCountBadge-CcKiUBrC.js";import"./FSColor-CFKVLO7B.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-NTI_Cssm.js";import"./FSIconCard-B96S8Zdc.js";import"./FSImage-BdRbjk_B.js";import"./FSImageUI-Dstvh29N.js";import"./FSLoader-FkDR4IbG.js";import"./elevation-DZ0Sccyb.js";import"./VImg-UzuohEtG.js";import"./rounded-BrvRf1BO.js";import"./index-Dli51uy9.js";import"./useImages-CXY-OT-0.js";import"./base-CmdGny12.js";import"./composableFactory-CzIPMomJ.js";import"./serviceFactory-DGf7dwWo.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-Cnww6a6j.js";const Ir={title:"Foundation/Shared/Tiles/Group",component:i,tags:["autodocs"],argTypes:{...u([l],i)}},e={args:{label:"Dynasties & Dystopia",code:"Denzel Curry featuring Gizzle and Bren Joy",icon:"mdi-group",recursiveGroupsIds:Array.from(Array(50).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(100).keys()).map(r=>r.toString())},render:r=>({components:{FSGroupTileUI:i,FSLoadTile:c},setup(){return{args:r}},template:`
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Ar=["Default","Imageless"];export{e as Default,o as Imageless,Ar as __namedExportsOrder,Ir as default};
