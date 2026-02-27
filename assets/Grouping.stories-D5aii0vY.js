import{a as s,b as l}from"./properties-Qw-O9fbT.js";import{G as o}from"./groupings.mock-D2vmqk8O.js";import{F as c}from"./FSTile-BiFTCuMc.js";import{F as d}from"./FSSimpleTileUI-Csj1FPWH.js";import{F as r}from"./FSGroupingTileUI-cGN477Fi.js";import{F as G}from"./FSLoadTile-B_OaMmgm.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSCard-DENSLTM_.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSCheckbox-DMg4fEo0.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./FSCol-D_lbFmZy.js";import"./useRules-R3Ldkrx4.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./density-BTT1solu.js";import"./proxiedModel-Cv3qT1cZ.js";import"./index-C2v-jVLO.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./locale-n4v42L7l.js";import"./index-Bo6vw90T.js";import"./transition-gfLL8RoD.js";import"./dimensions-D_nx6Jbk.js";import"./FSIconCard-BlsFbvOA.js";import"./FSImage-EC-hlP5h.js";import"./FSImageUI-BLy7Ukeh.js";import"./FSLoader-uhE9mCg0.js";import"./elevation-62d6MvS5.js";import"./VImg-CFhtVVj8.js";import"./rounded-BSNeeq4o.js";import"./index-u79WnTSR.js";import"./useImages-tmSeA2NQ.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-CyDQptGk.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSEntityCountBadge-DY67PQVj.js";import"./FSColor-CsxJ8it1.js";import"./badge-D9p4Oj7n.js";const To={title:"Foundation/Shared/Tiles/Grouping",component:r,tags:["autodocs"],argTypes:{...l([c,d],r),...s(r)}},n={args:{label:o[0].label,code:o[0].code,icon:o[0].icon,iconColor:o[0].color,subgroupingCount:o[0].subgroupingCount},render:a=>({components:{FSGroupingTileUI:r,FSLoadTile:G},setup(){return{args:a}},template:`
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Oo=["Default","Variations"];export{n as Default,i as Variations,Oo as __namedExportsOrder,To as default};
