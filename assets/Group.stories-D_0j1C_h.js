import{b as u}from"./properties-Qw-O9fbT.js";import{F as l}from"./FSTile-Cm_QUpQV.js";import{F as i}from"./FSGroupTileUI-3rNdcHtw.js";import{F as c}from"./FSLoadTile-CmlEdWHt.js";import"./vue.esm-bundler-PONd4AmC.js";import"./FSClickable-CyhgWkHC.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCard-DYD9Tm3w.js";import"./FSCol-Bfhiyt6Y.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./FSRow-C-b-hpWa.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./VProgressCircular-CDK6zSYw.js";import"./color-_AiH45em.js";import"./resizeObserver-UZYihl4g.js";import"./VIcon-DIMW80nW.js";import"./FSCheckbox-CQphVYdu.js";import"./FSIcon-bsX1r_Ci.js";import"./FSSpan-DxKJLsSl.js";import"./useSlots-nyIcwo6G.js";import"./useRules-CT5DWk6c.js";import"./VCheckboxBtn-B-CDiKqR.js";import"./VSelectionControl-HwS3bHvU.js";import"./density-CNNumQ_A.js";import"./proxiedModel-vOB1Q9Gh.js";import"./index-B8vPsAiL.js";import"./VLabel-5AeJpfXJ.js";import"./VInput-ClaXJMCA.js";import"./locale-CoLhg8Wl.js";import"./index-CANKuvlL.js";import"./transition-BXZIGKil.js";import"./dimensions-CNbPgA3L.js";import"./FSEntityCountBadge-BSSE6Aki.js";import"./FSColor-ClFDHQcW.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-K7NYhEKB.js";import"./FSIconCard-C0gGqVte.js";import"./FSImage-CxsBRX2Y.js";import"./FSImageUI-DSgZP-Av.js";import"./FSLoader-UOJfN8Qb.js";import"./elevation-CL0Py7Fp.js";import"./VImg-DKyIpwU2.js";import"./rounded-BBFi0CuG.js";import"./index-Bb4mSIJO.js";import"./useImages-BcPfe_zO.js";import"./base-CmdGny12.js";import"./composableFactory-B2U31qfW.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BwsMVknI.js";const fr={title:"Foundation/Shared/Tiles/Group",component:i,tags:["autodocs"],argTypes:{...u([l],i)}},e={args:{label:"Dynasties & Dystopia",code:"Denzel Curry featuring Gizzle and Bren Joy",icon:"mdi-group",recursiveGroupsIds:Array.from(Array(50).keys()).map(r=>r.toString()),recursiveDeviceOrganisationsIds:Array.from(Array(100).keys()).map(r=>r.toString())},render:r=>({components:{FSGroupTileUI:i,FSLoadTile:c},setup(){return{args:r}},template:`
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
