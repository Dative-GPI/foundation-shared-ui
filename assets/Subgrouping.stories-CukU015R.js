import{a as m,b as l}from"./properties-Qw-O9fbT.js";import{S as o}from"./subgroupings.mock-Dekau2o5.js";import{F as c}from"./FSTile-Dc7IleRl.js";import{F as d}from"./FSSimpleTileUI-Boz4MTP-.js";import{F as n}from"./FSSubgroupingTileUI-DCz9q0jF.js";import{F as b}from"./FSLoadTile-DSF_DCua.js";import"./vue.esm-bundler-D_gXonxt.js";import"./FSCard-Cxfe3-O9.js";import"./FSRow-cHWWqhhs.js";import"./css-Bznx04uW.js";import"./useBreakpoints-BWz07CZT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./VProgressCircular-BomUTxjq.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSCheckbox-zoBL9ZjY.js";import"./FSIcon-B9MXbR5l.js";import"./VIcon-gCapjdof.js";import"./icons-DiQlgRdj.js";import"./FSSpan-ap0CpdXZ.js";import"./useSlots-CdBAzqCX.js";import"./FSCol-C3EJfcJX.js";import"./useRules-CohX4tE3.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./density-W7RG4BnT.js";import"./proxiedModel-Cl0bR0rs.js";import"./index-ByzLombQ.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./locale-CEMLpecI.js";import"./index-aKIkx5xA.js";import"./transition-CHyhkthg.js";import"./dimensions-BYDjhYdL.js";import"./FSIconCard-orS5KPa9.js";import"./FSImage-DWYQvpU3.js";import"./FSImageUI-C_EkTaPS.js";import"./FSLoader-CdctsmAF.js";import"./elevation-sxxySPKb.js";import"./VImg-ufpttNgj.js";import"./rounded-yhlSUX6x.js";import"./index-CpkyVf-S.js";import"./useImages-pCcsdsIl.js";import"./composableFactory-DkrZ_DEM.js";import"./serviceFactory-BqFXSmrg.js";import"./lodash-5Yh5OMmr.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-DU8AzEWU.js";import"./FSEntityCountBadge--4cegCgG.js";import"./FSColor-CFMl-Ul2.js";import"./badge-D9p4Oj7n.js";const Fo={title:"Foundation/Shared/Tiles/Subgrouping",component:n,tags:["autodocs"],argTypes:{...l([c,d],n),...m(n)}},r={args:{label:o[1].label,code:o[1].code,icon:o[1].icon,groupingLabel:o[1].groupingLabel,groupingIcon:o[1].groupingIcon,groupingColor:o[1].groupingColor,deviceOrganisationsCount:o[1].deviceOrganisationsCount},render:s=>({components:{FSSubgroupingTileUI:n,FSLoadTile:b},setup(){return{args:s}},template:`
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
}`,...(a=(u=i.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};const No=["Default","Variations"];export{r as Default,i as Variations,No as __namedExportsOrder,Fo as default};
