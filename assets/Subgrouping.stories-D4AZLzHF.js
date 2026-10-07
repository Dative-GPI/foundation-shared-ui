import{a as m,b as l}from"./properties-Qw-O9fbT.js";import{S as o}from"./subgroupings.mock-Dekau2o5.js";import{F as c}from"./FSTile-BhVLh0I_.js";import{F as d}from"./FSSimpleTileUI-Bi734Ok8.js";import{F as n}from"./FSSubgroupingTileUI-sESxbl3z.js";import{F as b}from"./FSLoadTile-BsiS59UV.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSCard-X6BL7IDn.js";import"./FSRow-BTBqaZ3Z.js";import"./css-BA19cdxW.js";import"./useBreakpoints-Trboya0O.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./VProgressCircular-D014ccrC.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./FSCheckbox-BEgzMGmB.js";import"./FSIcon-D-iWmbKS.js";import"./VIcon-BPCLtKbp.js";import"./icons-AciKn6XY.js";import"./FSSpan-CffnRYnX.js";import"./useSlots-DEXetpJf.js";import"./FSCol-ChYB2Oag.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BT3SzIyH.js";import"./VSelectionControl-TRNlUp1F.js";import"./density-HajNgXBf.js";import"./proxiedModel-4bJ1saXA.js";import"./index-CDgYZebE.js";import"./VLabel-DOSQu5RP.js";import"./VInput-CBXzUquC.js";import"./locale-MGWjZjXD.js";import"./index-C0WTB2TM.js";import"./transition-Dqm8buww.js";import"./dimensions-BuDdBtmf.js";import"./FSIconCard-DMtxuGAX.js";import"./FSImage-qkvcP0r6.js";import"./FSImageUI-CXTsXdBJ.js";import"./FSLoader-DRppy7ch.js";import"./elevation-DyTGrbk9.js";import"./VImg-CF0d7Fd2.js";import"./rounded-BE8u9DAQ.js";import"./index-D_7bL_IH.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./FSEntityCountBadge-bfelcV1p.js";import"./FSColor-BdLg0VqR.js";import"./badge-D9p4Oj7n.js";const No={title:"Shared/Components/Tiles/Subgrouping",component:n,tags:["autodocs"],argTypes:{...l([c,d],n),...m(n)}},r={args:{label:o[1].label,code:o[1].code,icon:o[1].icon,groupingLabel:o[1].groupingLabel,groupingIcon:o[1].groupingIcon,groupingColor:o[1].groupingColor,deviceOrganisationsCount:o[1].deviceOrganisationsCount},render:s=>({components:{FSSubgroupingTileUI:n,FSLoadTile:b},setup(){return{args:s}},template:`
    <FSSubgroupingTileUI
      v-model="args.modelValue"
      v-bind="args"
    />
    `})},i={args:{label:o[0].label,code:o[0].code,icon:o[0].icon,groupingLabel:o[0].groupingLabel,groupingIcon:o[0].groupingIcon,groupingColor:o[0].groupingColor,deviceOrganisationsCount:o[0].deviceOrganisationsCount},render:()=>({components:{FSSubgroupingTileUI:n},setup(){return{subgroupings:o}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
      <FSSubgroupingTileUI
        v-for="subgrouping in subgroupings"
        :key="subgrouping.id"
        :label="subgrouping.label"
        :code="subgrouping.code"
        :icon="subgrouping.icon"
        :groupingLabel="subgrouping.groupingLabel"
        :groupingIcon="subgrouping.groupingIcon"
        :groupingColor="subgrouping.groupingColor"
        :deviceOrganisationsCount="subgrouping.deviceOrganisationsCount"
      />
    </div>
    `})};var p,g,e;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: SUBGROUPINGS[1].label,
    code: SUBGROUPINGS[1].code,
    icon: SUBGROUPINGS[1].icon,
    groupingLabel: SUBGROUPINGS[1].groupingLabel,
    groupingIcon: SUBGROUPINGS[1].groupingIcon,
    groupingColor: SUBGROUPINGS[1].groupingColor,
    deviceOrganisationsCount: SUBGROUPINGS[1].deviceOrganisationsCount
  },
  render: args => ({
    components: {
      FSSubgroupingTileUI,
      FSLoadTile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSSubgroupingTileUI
      v-model="args.modelValue"
      v-bind="args"
    />
    \`
  })
}`,...(e=(g=r.parameters)==null?void 0:g.docs)==null?void 0:e.source}}};var t,u,a;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: SUBGROUPINGS[0].label,
    code: SUBGROUPINGS[0].code,
    icon: SUBGROUPINGS[0].icon,
    groupingLabel: SUBGROUPINGS[0].groupingLabel,
    groupingIcon: SUBGROUPINGS[0].groupingIcon,
    groupingColor: SUBGROUPINGS[0].groupingColor,
    deviceOrganisationsCount: SUBGROUPINGS[0].deviceOrganisationsCount
  },
  render: () => ({
    components: {
      FSSubgroupingTileUI
    },
    setup() {
      return {
        subgroupings: SUBGROUPINGS
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
      <FSSubgroupingTileUI
        v-for="subgrouping in subgroupings"
        :key="subgrouping.id"
        :label="subgrouping.label"
        :code="subgrouping.code"
        :icon="subgrouping.icon"
        :groupingLabel="subgrouping.groupingLabel"
        :groupingIcon="subgrouping.groupingIcon"
        :groupingColor="subgrouping.groupingColor"
        :deviceOrganisationsCount="subgrouping.deviceOrganisationsCount"
      />
    </div>
    \`
  })
}`,...(a=(u=i.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};const Po=["Default","Variations"];export{r as Default,i as Variations,Po as __namedExportsOrder,No as default};
