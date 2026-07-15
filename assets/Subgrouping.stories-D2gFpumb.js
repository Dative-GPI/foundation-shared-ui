import{a as m,b as l}from"./properties-Qw-O9fbT.js";import{S as o}from"./subgroupings.mock-Dekau2o5.js";import{F as c}from"./FSTile-DnwhleJY.js";import{F as d}from"./FSSimpleTileUI-DcYrEEsb.js";import{F as n}from"./FSSubgroupingTileUI-CLePL8re.js";import{F as b}from"./FSLoadTile-By2dYS-Q.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSCard-DxY0aXhp.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./VProgressCircular-Cjpa4WUk.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSCheckbox-D4XH1I7L.js";import"./FSIcon-BcHBVf_o.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./FSSpan-B28b2m0n.js";import"./useSlots-DEXetpJf.js";import"./FSCol-KRtq6OYO.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./density-CE2FkSgs.js";import"./proxiedModel-VL_RP4zk.js";import"./index-B-eFr4Nw.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./locale-DER8LJer.js";import"./index-ByfGjSW7.js";import"./transition-a5pzBS6c.js";import"./dimensions-CS_qJJhy.js";import"./FSIconCard-jgpe5rl0.js";import"./FSImage-DeZD3KhU.js";import"./FSImageUI-CzwoPTBI.js";import"./FSLoader-BoDinVVO.js";import"./elevation-DQ_qKX67.js";import"./VImg-BdZHkGCX.js";import"./rounded-CS1_z6Jk.js";import"./index-B4rZgXN-.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./FSEntityCountBadge-CvzD3ASN.js";import"./FSColor-CxbRgLn0.js";import"./badge-D9p4Oj7n.js";const No={title:"Shared/Components/Tiles/Subgrouping",component:n,tags:["autodocs"],argTypes:{...l([c,d],n),...m(n)}},r={args:{label:o[1].label,code:o[1].code,icon:o[1].icon,groupingLabel:o[1].groupingLabel,groupingIcon:o[1].groupingIcon,groupingColor:o[1].groupingColor,deviceOrganisationsCount:o[1].deviceOrganisationsCount},render:s=>({components:{FSSubgroupingTileUI:n,FSLoadTile:b},setup(){return{args:s}},template:`
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
