import{a as m,b as l}from"./properties-Qw-O9fbT.js";import{S as o}from"./subgroupings.mock-Dekau2o5.js";import{F as c}from"./FSTile-DyIXnIBo.js";import{F as d}from"./FSSimpleTileUI-Ca1kk7vw.js";import{F as n}from"./FSSubgroupingTileUI-BK-KKumN.js";import{F as b}from"./FSLoadTile-1GZVg8zv.js";import"./vue.esm-bundler-DR0_aU9U.js";import"./FSCard--XyliQO3.js";import"./FSRow-C8VtPvPz.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./VProgressCircular-CZaehD4X.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSCheckbox-D-n0kplZ.js";import"./FSIcon-CBwOL1p5.js";import"./VIcon-e3y7Ok8e.js";import"./icons-CT9uuJgl.js";import"./FSSpan-9E7WYB2n.js";import"./useSlots-p1mkRhuZ.js";import"./FSCol-B2uM4vFw.js";import"./useRules-2yt7KWSA.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./density-SLEyWIf6.js";import"./proxiedModel-DoNoMWaC.js";import"./index-Dlqh_ozP.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./locale-yWiW8Thx.js";import"./index-C-lZWyiZ.js";import"./transition-CedxoFs4.js";import"./dimensions-DYTrXD1P.js";import"./FSIconCard-D8RPikTZ.js";import"./FSImage-DA9vOKQh.js";import"./FSImageUI-ErX_r_YE.js";import"./FSLoader-DlWbYN_-.js";import"./elevation-DVEOfLMu.js";import"./VImg-DooBjoZC.js";import"./rounded-B6-M_5uG.js";import"./index-BLyOCIqB.js";import"./useImages-F1kPEKZ4.js";import"./composableFactory-yqpAgWWK.js";import"./serviceFactory-CnLiFQ6s.js";import"./lodash-5Yh5OMmr.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-B2Z_WWk7.js";import"./FSEntityCountBadge-BC4g5c6u.js";import"./FSColor-BzMG0twY.js";import"./badge-D9p4Oj7n.js";const Fo={title:"Foundation/Shared/Tiles/Subgrouping",component:n,tags:["autodocs"],argTypes:{...l([c,d],n),...m(n)}},r={args:{label:o[1].label,code:o[1].code,icon:o[1].icon,groupingLabel:o[1].groupingLabel,groupingIcon:o[1].groupingIcon,groupingColor:o[1].groupingColor,deviceOrganisationsCount:o[1].deviceOrganisationsCount},render:s=>({components:{FSSubgroupingTileUI:n,FSLoadTile:b},setup(){return{args:s}},template:`
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
