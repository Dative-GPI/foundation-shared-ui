import p from"./FSBaseDashboardsList-DWxSVuhx.js";import{F as e}from"./FSDataTable-DEEtthXG.js";import"./lodash-BrWYvtk2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vue.esm-bundler-PTWG9x2X.js";import"./FSTagGroup-BCmEe6Qe.js";import"./FSWrapGroup-8ynKQ69u.js";import"./uuid-DTaye2KM.js";import"./useSlots-BG_ZhEqK.js";import"./useColors-DSUu_QQ4.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./css-B90wD3BD.js";import"./useBreakpoints-W7XGW48y.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-C6-4cvTl.js";import"./group-8tJUjatm.js";import"./proxiedModel-CvHSoKPb.js";import"./index-b-ADC_Il.js";import"./color-CCpgnDIk.js";import"./display-CESVul9-.js";import"./locale-Cz_4DTJh.js";import"./VIcon-DIeegzqR.js";import"./resizeObserver-C17Kgm90.js";import"./FSTag-CFGgNd-A.js";import"./FSIcon-DQMOs0-E.js";import"./FSSpan-yJEd2pn-.js";import"./FSRow-DPcQMiM9.js";import"./VBtn-oNOab7rO.js";import"./border-CIYj3WlL.js";import"./density-CznkHGGy.js";import"./elevation-CrSwNJwg.js";import"./rounded-BbPXzFqc.js";import"./dimensions-v18atrWI.js";import"./loader-BqT2mYY7.js";import"./VProgressCircular-eoxb555W.js";import"./anchor-BcF6JBj1.js";import"./router-BQjY5_kj.js";import"./index-Dqqa47M6.js";import"./VDefaultsProvider-aDgtYDKn.js";import"./FSSlideGroup-Cnb4B0wP.js";import"./FSButtonNextIcon-BgOE6pA_.js";import"./FSButton-CqjbOz0n.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./FSClickable-KpP1cmTZ.js";import"./FSCard-CRoBY3gL.js";import"./FSCol-qfATdd_b.js";import"./FSDashboardShallowTileUI-Dxwedr4v.js";import"./FSSimpleTileUI-DUtYupMw.js";import"./FSIconCard-CVsCm8Sv.js";import"./FSImage-D6wIZvVb.js";import"./FSImageUI-Cd9yfhhj.js";import"./FSLoader-DnFcYh1x.js";import"./VImg-CBGPWIu-.js";import"./transition-QV8dDJB9.js";import"./index-BNomsh5u.js";import"./useImages-B58XKdkx.js";import"./base-CmdGny12.js";import"./composableFactory-BVozujU4.js";import"./serviceFactory-B3o6Bvwt.js";import"./useAppAuthToken-3n1rBHGl.js";import"./FSTile-laYGtZFU.js";import"./FSCheckbox-D0eLEsDk.js";import"./useRules-D0leB7Wy.js";import"./VSelectionControl-Fvr0iuTu.js";import"./VLabel-BNJ33aDR.js";import"./VInput-C2FcZlE6.js";import"./FSDashboardOrganisationTileUI-OQPyWowC.js";import"./FSDashboardOrganisationTypeTileUI-Bp0fw7mT.js";import"./useDashboardOrganisationTypes-BaFYBVLq.js";import"./dashboardTranslation-BY3Wh2RO.js";import"./useAppLanguageCode-tS_QL_TH.js";import"./base-BJ27TNVe.js";import"./useAppOrganisationId-CurthI5S.js";import"./useDashboardOrganisations-ChJ8mrn-.js";import"./pathCrumb-Db-cq5HI.js";import"./useDashboardShallows-DR7CndH5.js";import"./useUserOrganisations-DW8PbRkc.js";import"./permissionInfos-BPDgTHQl.js";import"./useOrganisations-COskmzB4.js";import"./dashboards-JSNI7pIu.js";import"./FSDataTableUI-DBeKsD6v.js";import"./FSText-Da5isN0I.js";import"./FSSearchField-BeidTVNh.js";import"./FSTextField-Du_6UKzN.js";import"./FSBaseField-BF-P1IfK.js";import"./VField-w4x2OZhg.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-BnE68qER.js";import"./FSSelectField-CdRtA_Eu.js";import"./VList-Dqx2Wq64.js";import"./VDialog-DW8Lwwmu.js";import"./VOverlay-CoK8W0Lk.js";import"./scopeId-CROTNdIb.js";import"./ssrBoot-DfimFJGl.js";import"./FSToggleSet-2ksJh9hi.js";import"./FSFadeOut-BR2NoxgI.js";import"./FSRadio-dWKh4KJE.js";import"./VSelect-D-RlUgcB.js";import"./VMenu-BiZHvw8b.js";import"./FSDivider-D-FRSUwM.js";import"./FSChip-CFp_uIHK.js";import"./FSOptionGroup-CiKAPU5_.js";import"./filter-C1K_d8Vd.js";import"./filter-qsWrMVs0.js";const io={title:"Foundation/Core/Lists/Base Lists/BaseDashboardsList",component:p,subcomponents:{FSDataTable:e},tags:["autodocs"],argTypes:{}},r={render:i=>({components:{FSBaseDashboardsList:p},setup(){return{args:i}},template:`
      <FSBaseDashboardsList
        v-model:modelValue="args.modelValue"
        v-mode:type="args.type"
        v-bind="args"
      />
    `}),args:{tableCode:"dashboards1"}};var o,t,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        v-model:modelValue="args.modelValue"
        v-mode:type="args.type"
        v-bind="args"
      />
    \`
  }),
  args: {
    tableCode: 'dashboards1'
  }
}`,...(m=(t=r.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};const eo=["Default"];export{r as Default,eo as __namedExportsOrder,io as default};
