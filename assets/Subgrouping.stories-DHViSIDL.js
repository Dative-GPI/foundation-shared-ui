import{a as m,b as l}from"./properties-Qw-O9fbT.js";import{S as o}from"./subgroupings.mock-Dekau2o5.js";import{F as c}from"./FSTile-BiFTCuMc.js";import{F as d}from"./FSSimpleTileUI-Csj1FPWH.js";import{F as n}from"./FSSubgroupingTileUI-itox22ie.js";import{F as b}from"./FSLoadTile-B_OaMmgm.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSCard-DENSLTM_.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSCheckbox-DMg4fEo0.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./FSCol-D_lbFmZy.js";import"./useRules-R3Ldkrx4.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./density-BTT1solu.js";import"./proxiedModel-Cv3qT1cZ.js";import"./index-C2v-jVLO.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./locale-n4v42L7l.js";import"./index-Bo6vw90T.js";import"./transition-gfLL8RoD.js";import"./dimensions-D_nx6Jbk.js";import"./FSIconCard-BlsFbvOA.js";import"./FSImage-EC-hlP5h.js";import"./FSImageUI-BLy7Ukeh.js";import"./FSLoader-uhE9mCg0.js";import"./elevation-62d6MvS5.js";import"./VImg-CFhtVVj8.js";import"./rounded-BSNeeq4o.js";import"./index-u79WnTSR.js";import"./useImages-tmSeA2NQ.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-CyDQptGk.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSEntityCountBadge-DY67PQVj.js";import"./FSColor-CsxJ8it1.js";import"./badge-D9p4Oj7n.js";const Bo={title:"Foundation/Shared/Tiles/Subgrouping",component:n,tags:["autodocs"],argTypes:{...l([c,d],n),...m(n)}},r={args:{label:o[1].label,code:o[1].code,icon:o[1].icon,groupingLabel:o[1].groupingLabel,groupingIcon:o[1].groupingIcon,groupingColor:o[1].groupingColor,deviceOrganisationsCount:o[1].deviceOrganisationsCount},render:s=>({components:{FSSubgroupingTileUI:n,FSLoadTile:b},setup(){return{args:s}},template:`
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
}`,...(a=(u=i.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};const Fo=["Default","Variations"];export{r as Default,i as Variations,Fo as __namedExportsOrder,Bo as default};
