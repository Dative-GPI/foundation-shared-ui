import m from"./FSBaseDashboardsList-BRduqD9C.js";import{F as s}from"./FSDataTable-_NUq3H93.js";import"./lodash-BrWYvtk2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vue.esm-bundler-CTTOvLCD.js";import"./FSTagGroup-CdsO95Eo.js";import"./FSWrapGroup-BCi713M2.js";import"./uuid-DTaye2KM.js";import"./useSlots-NXmwCOLw.js";import"./useColors-D7R-CyI7.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./css-D46r6e5F.js";import"./useBreakpoints-Bm7CjYdd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-CyUsoDyC.js";import"./group-CroFFR-b.js";import"./proxiedModel-Da7OD98r.js";import"./index-B698eGq-.js";import"./color-DTA1Qd0w.js";import"./display-BWFgSvI7.js";import"./locale-Guk_W035.js";import"./VIcon-DzkIKThE.js";import"./resizeObserver-Bwa55KU2.js";import"./FSTag-DtcpRjHR.js";import"./FSIcon-yzGYQgqh.js";import"./FSSpan-QNtf4e4q.js";import"./FSRow-C8EFLcn9.js";import"./VBtn-IPVaR7st.js";import"./border-CjCUMUtA.js";import"./density-n-hig0Tg.js";import"./elevation-CqdG4vF6.js";import"./rounded-5tkyiosR.js";import"./dimensions-DIR9-JzD.js";import"./loader-BcXzPxbu.js";import"./VProgressCircular-it35si_v.js";import"./anchor-KPAVzGxJ.js";import"./router-SvtovJtL.js";import"./index-Bj6Uq_NX.js";import"./VDefaultsProvider-45AVpOQL.js";import"./FSSlideGroup-CLbrB063.js";import"./FSButtonNextIcon-BC6-OF7l.js";import"./FSButton-B2X9DGvb.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSClickable-DznopAj9.js";import"./FSCard-DxhVm8H0.js";import"./FSCol-BPr0jVzk.js";import"./FSDashboardShallowTileUI-Dhkv5Dr2.js";import"./FSSimpleTileUI-CEjcoOEX.js";import"./FSIconCard-CGvq_r_x.js";import"./FSImage-BOQw5jYK.js";import"./FSImageUI-DYFwVBnb.js";import"./FSLoader-AugIw030.js";import"./VImg-C1IcDibP.js";import"./transition-C1y9a89u.js";import"./index-CK42gwlP.js";import"./useImages-B6xLFcwg.js";import"./base-CmdGny12.js";import"./serviceFactory-qtdw0UKd.js";import"./composableFactory-BcaJMM0w.js";import"./useAppAuthToken-CysW3k_e.js";import"./FSTile-CbnAVjso.js";import"./FSCheckbox-CVOakf5q.js";import"./useRules-DE909mL5.js";import"./VSelectionControl-CZi2-uP4.js";import"./VLabel-DjEMOXzE.js";import"./VInput-BgFKWDn-.js";import"./form-gxFDX6UX.js";import"./FSDashboardOrganisationTileUI-DVLRJ9NE.js";import"./FSDashboardOrganisationTypeTileUI-DvHAmmSe.js";import"./useDashboardOrganisationTypes-qihDx-0y.js";import"./dashboardTranslation-AqxFLxT8.js";import"./useAppLanguageCode-DIMcCLwL.js";import"./base-D9u3vc5Q.js";import"./useAppOrganisationId-DS-QKKZa.js";import"./useDashboardOrganisations-CHaQlPns.js";import"./pathCrumb-Db-cq5HI.js";import"./useDashboardShallows-DNBQ3MI-.js";import"./useUserOrganisations-CMmg5bCF.js";import"./permissionInfos-BPDgTHQl.js";import"./useOrganisations-zkOt4yo7.js";import"./dashboards-JSNI7pIu.js";import"./FSDataTableUI-zsTMv4zh.js";import"./FSText-zXSXSnZG.js";import"./FSSearchField-BTXtCPns.js";import"./FSTextField-Cq5SV0et.js";import"./FSBaseField-BJJzXcrO.js";import"./VField-Bi2n7Ebd.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-Dol6kQeQ.js";import"./FSSelectField-D7N68CWE.js";import"./VList-DRexluGA.js";import"./VDialog-Cr2bmOLC.js";import"./VOverlay-Bysvo4NF.js";import"./scopeId-DGVhnfG2.js";import"./ssrBoot-C3MoFAVe.js";import"./FSToggleSet-0XsNufiD.js";import"./FSFadeOut-C2gEJSut.js";import"./FSRadio-GwhtOOcI.js";import"./VSelect-BnarcBwl.js";import"./VMenu-DP8ibRhi.js";import"./FSDivider-Da6ewG1k.js";import"./FSChip-CVBfHYvV.js";import"./FSOptionGroup-4LQPNX1_.js";import"./filter-C1K_d8Vd.js";import"./filter-4zTRfP5f.js";const sr={title:"Foundation/Core/Lists/Base Lists/BaseDashboardsList",component:m,subcomponents:{FSDataTable:s},tags:["autodocs"],argTypes:{}},t={render:i=>({components:{FSBaseDashboardsList:m},setup(){return{args:i}},template:`
      <FSBaseDashboardsList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"dashboards1"}};var r,o,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseDashboardsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDashboardsList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'dashboards1'
  }
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const ar=["Default"];export{t as Default,ar as __namedExportsOrder,sr as default};
