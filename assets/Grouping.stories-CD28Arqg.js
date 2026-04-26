import{a as s,b as l}from"./properties-Qw-O9fbT.js";import{G as o}from"./groupings.mock-D2vmqk8O.js";import{F as c}from"./FSTile-DPKEiqsQ.js";import{F as d}from"./FSSimpleTileUI-frH4ud6D.js";import{F as r}from"./FSGroupingTileUI-DzqhRUVh.js";import{F as G}from"./FSLoadTile-DSF_DCua.js";import"./vue.esm-bundler-D_gXonxt.js";import"./FSCard-Cxfe3-O9.js";import"./FSRow-cHWWqhhs.js";import"./css-Bznx04uW.js";import"./useBreakpoints-BWz07CZT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./VProgressCircular-BomUTxjq.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSCheckbox-zoBL9ZjY.js";import"./FSIcon-B9MXbR5l.js";import"./VIcon-gCapjdof.js";import"./icons-DiQlgRdj.js";import"./FSSpan-ap0CpdXZ.js";import"./useSlots-CdBAzqCX.js";import"./FSCol-C3EJfcJX.js";import"./useRules-CohX4tE3.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./density-W7RG4BnT.js";import"./proxiedModel-Cl0bR0rs.js";import"./index-ByzLombQ.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./locale-CEMLpecI.js";import"./index-aKIkx5xA.js";import"./transition-CHyhkthg.js";import"./dimensions-BYDjhYdL.js";import"./FSIconCard-CmOhk6fq.js";import"./FSImage-BwU3jLhA.js";import"./FSImageUI-C_EkTaPS.js";import"./FSLoader-CdctsmAF.js";import"./elevation-sxxySPKb.js";import"./VImg-ufpttNgj.js";import"./rounded-yhlSUX6x.js";import"./index-CpkyVf-S.js";import"./useImages-ns1hGlq_.js";import"./composableFactory-DkrZ_DEM.js";import"./serviceFactory-CzhkrYh7.js";import"./lodash-5Yh5OMmr.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-DU8AzEWU.js";import"./FSEntityCountBadge--4cegCgG.js";import"./FSColor-CFMl-Ul2.js";import"./badge-D9p4Oj7n.js";const Oo={title:"Foundation/Shared/Tiles/Grouping",component:r,tags:["autodocs"],argTypes:{...l([c,d],r),...s(r)}},n={args:{label:o[0].label,code:o[0].code,icon:o[0].icon,iconColor:o[0].color,subgroupingCount:o[0].subgroupingCount},render:a=>({components:{FSGroupingTileUI:r,FSLoadTile:G},setup(){return{args:a}},template:`
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
