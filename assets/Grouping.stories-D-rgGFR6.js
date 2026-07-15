import{a,b as l}from"./properties-Qw-O9fbT.js";import{G as o}from"./groupings.mock-D2vmqk8O.js";import{F as c}from"./FSTile-DnwhleJY.js";import{F as d}from"./FSSimpleTileUI-DcYrEEsb.js";import{F as r}from"./FSGroupingTileUI-CMAvbg5a.js";import{F as G}from"./FSLoadTile-By2dYS-Q.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSCard-DxY0aXhp.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./VProgressCircular-Cjpa4WUk.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSCheckbox-D4XH1I7L.js";import"./FSIcon-BcHBVf_o.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./FSSpan-B28b2m0n.js";import"./useSlots-DEXetpJf.js";import"./FSCol-KRtq6OYO.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./density-CE2FkSgs.js";import"./proxiedModel-VL_RP4zk.js";import"./index-B-eFr4Nw.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./locale-DER8LJer.js";import"./index-ByfGjSW7.js";import"./transition-a5pzBS6c.js";import"./dimensions-CS_qJJhy.js";import"./FSIconCard-jgpe5rl0.js";import"./FSImage-DeZD3KhU.js";import"./FSImageUI-CzwoPTBI.js";import"./FSLoader-BoDinVVO.js";import"./elevation-DQ_qKX67.js";import"./VImg-BdZHkGCX.js";import"./rounded-CS1_z6Jk.js";import"./index-B4rZgXN-.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./FSEntityCountBadge-CvzD3ASN.js";import"./FSColor-CxbRgLn0.js";import"./badge-D9p4Oj7n.js";const Oo={title:"Shared/Components/Tiles/Grouping",component:r,tags:["autodocs"],argTypes:{...l([c,d],r),...a(r)}},n={args:{label:o[0].label,code:o[0].code,icon:o[0].icon,iconColor:o[0].color,subgroupingCount:o[0].subgroupingCount},render:s=>({components:{FSGroupingTileUI:r,FSLoadTile:G},setup(){return{args:s}},template:`
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
