import{a,b as l}from"./properties-Qw-O9fbT.js";import{G as o}from"./groupings.mock-D2vmqk8O.js";import{F as c}from"./FSTile-BhVLh0I_.js";import{F as d}from"./FSSimpleTileUI-Bi734Ok8.js";import{F as r}from"./FSGroupingTileUI-CWI5GUb0.js";import{F as G}from"./FSLoadTile-BsiS59UV.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSCard-X6BL7IDn.js";import"./FSRow-BTBqaZ3Z.js";import"./css-BA19cdxW.js";import"./useBreakpoints-Trboya0O.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./VProgressCircular-D014ccrC.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./FSCheckbox-BEgzMGmB.js";import"./FSIcon-D-iWmbKS.js";import"./VIcon-BPCLtKbp.js";import"./icons-AciKn6XY.js";import"./FSSpan-CffnRYnX.js";import"./useSlots-DEXetpJf.js";import"./FSCol-ChYB2Oag.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BT3SzIyH.js";import"./VSelectionControl-TRNlUp1F.js";import"./density-HajNgXBf.js";import"./proxiedModel-4bJ1saXA.js";import"./index-CDgYZebE.js";import"./VLabel-DOSQu5RP.js";import"./VInput-CBXzUquC.js";import"./locale-MGWjZjXD.js";import"./index-C0WTB2TM.js";import"./transition-Dqm8buww.js";import"./dimensions-BuDdBtmf.js";import"./FSIconCard-DMtxuGAX.js";import"./FSImage-qkvcP0r6.js";import"./FSImageUI-CXTsXdBJ.js";import"./FSLoader-DRppy7ch.js";import"./elevation-DyTGrbk9.js";import"./VImg-CF0d7Fd2.js";import"./rounded-BE8u9DAQ.js";import"./index-D_7bL_IH.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./FSEntityCountBadge-bfelcV1p.js";import"./FSColor-BdLg0VqR.js";import"./badge-D9p4Oj7n.js";const Oo={title:"Shared/Components/Tiles/Grouping",component:r,tags:["autodocs"],argTypes:{...l([c,d],r),...a(r)}},n={args:{label:o[0].label,code:o[0].code,icon:o[0].icon,iconColor:o[0].color,subgroupingCount:o[0].subgroupingCount},render:s=>({components:{FSGroupingTileUI:r,FSLoadTile:G},setup(){return{args:s}},template:`
    <FSGroupingTileUI
      v-model="args.modelValue"
      v-bind="args"
    />
    `})},i={args:{label:o[0].label,code:o[0].code,icon:o[0].icon,iconColor:o[0].color,subgroupingCount:o[0].subgroupingCount},render:()=>({components:{FSGroupingTileUI:r},setup(){return{groupings:o.slice(0,6)}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
      <FSGroupingTileUI
        v-for="grouping in groupings"
        :key="grouping.id"
        :label="grouping.label"
        :code="grouping.code"
        :icon="grouping.icon"
        :iconColor="grouping.color"
        :subgroupingCount="grouping.subgroupingCount"
      />
    </div>
    `})};var p,t,e;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: GROUPINGS[0].label,
    code: GROUPINGS[0].code,
    icon: GROUPINGS[0].icon,
    iconColor: GROUPINGS[0].color,
    subgroupingCount: GROUPINGS[0].subgroupingCount
  },
  render: args => ({
    components: {
      FSGroupingTileUI,
      FSLoadTile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSGroupingTileUI
      v-model="args.modelValue"
      v-bind="args"
    />
    \`
  })
}`,...(e=(t=n.parameters)==null?void 0:t.docs)==null?void 0:e.source}}};var m,g,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: GROUPINGS[0].label,
    code: GROUPINGS[0].code,
    icon: GROUPINGS[0].icon,
    iconColor: GROUPINGS[0].color,
    subgroupingCount: GROUPINGS[0].subgroupingCount
  },
  render: () => ({
    components: {
      FSGroupingTileUI
    },
    setup() {
      return {
        groupings: GROUPINGS.slice(0, 6)
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
      <FSGroupingTileUI
        v-for="grouping in groupings"
        :key="grouping.id"
        :label="grouping.label"
        :code="grouping.code"
        :icon="grouping.icon"
        :iconColor="grouping.color"
        :subgroupingCount="grouping.subgroupingCount"
      />
    </div>
    \`
  })
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const No=["Default","Variations"];export{n as Default,i as Variations,No as __namedExportsOrder,Oo as default};
