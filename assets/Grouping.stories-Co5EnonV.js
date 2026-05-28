import{a as s,b as l}from"./properties-Qw-O9fbT.js";import{G as o}from"./groupings.mock-D2vmqk8O.js";import{F as c}from"./FSTile-DyIXnIBo.js";import{F as d}from"./FSSimpleTileUI-Ca1kk7vw.js";import{F as r}from"./FSGroupingTileUI-DZvdF8Bh.js";import{F as G}from"./FSLoadTile-1GZVg8zv.js";import"./vue.esm-bundler-DR0_aU9U.js";import"./FSCard--XyliQO3.js";import"./FSRow-C8VtPvPz.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./VProgressCircular-CZaehD4X.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSCheckbox-D-n0kplZ.js";import"./FSIcon-CBwOL1p5.js";import"./VIcon-e3y7Ok8e.js";import"./icons-CT9uuJgl.js";import"./FSSpan-9E7WYB2n.js";import"./useSlots-p1mkRhuZ.js";import"./FSCol-B2uM4vFw.js";import"./useRules-2yt7KWSA.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./density-SLEyWIf6.js";import"./proxiedModel-DoNoMWaC.js";import"./index-Dlqh_ozP.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./locale-yWiW8Thx.js";import"./index-C-lZWyiZ.js";import"./transition-CedxoFs4.js";import"./dimensions-DYTrXD1P.js";import"./FSIconCard-D8RPikTZ.js";import"./FSImage-DA9vOKQh.js";import"./FSImageUI-ErX_r_YE.js";import"./FSLoader-DlWbYN_-.js";import"./elevation-DVEOfLMu.js";import"./VImg-DooBjoZC.js";import"./rounded-B6-M_5uG.js";import"./index-BLyOCIqB.js";import"./useImages-F1kPEKZ4.js";import"./composableFactory-yqpAgWWK.js";import"./serviceFactory-CnLiFQ6s.js";import"./lodash-5Yh5OMmr.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-B2Z_WWk7.js";import"./FSEntityCountBadge-BC4g5c6u.js";import"./FSColor-BzMG0twY.js";import"./badge-D9p4Oj7n.js";const Oo={title:"Foundation/Shared/Tiles/Grouping",component:r,tags:["autodocs"],argTypes:{...l([c,d],r),...s(r)}},n={args:{label:o[0].label,code:o[0].code,icon:o[0].icon,iconColor:o[0].color,subgroupingCount:o[0].subgroupingCount},render:a=>({components:{FSGroupingTileUI:r,FSLoadTile:G},setup(){return{args:a}},template:`
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
