import p from"./FSBaseDashboardsList-BtbBDqwX.js";import{F as e}from"./FSDataTable-U9yo9yIy.js";import"./lodash-BrWYvtk2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vue.esm-bundler-PTWG9x2X.js";import"./FSTagGroup-BvCS8bg3.js";import"./FSWrapGroup-C1TeRipg.js";import"./uuid-DTaye2KM.js";import"./useSlots-BG_ZhEqK.js";import"./useColors-CHEA4ij4.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./css-B90wD3BD.js";import"./useBreakpoints-W7XGW48y.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-C6-4cvTl.js";import"./group-8tJUjatm.js";import"./proxiedModel-CvHSoKPb.js";import"./index-b-ADC_Il.js";import"./color-CCpgnDIk.js";import"./display-CESVul9-.js";import"./locale-Cz_4DTJh.js";import"./VIcon-DIeegzqR.js";import"./resizeObserver-C17Kgm90.js";import"./FSTag-oiRAoUtk.js";import"./FSIcon-Df5FR-8G.js";import"./FSSpan-yJEd2pn-.js";import"./FSRow-DPcQMiM9.js";import"./VBtn-oNOab7rO.js";import"./border-CIYj3WlL.js";import"./density-CznkHGGy.js";import"./elevation-CrSwNJwg.js";import"./rounded-BbPXzFqc.js";import"./dimensions-v18atrWI.js";import"./loader-BqT2mYY7.js";import"./VProgressCircular-eoxb555W.js";import"./anchor-BcF6JBj1.js";import"./router-BQjY5_kj.js";import"./index-Dqqa47M6.js";import"./VDefaultsProvider-aDgtYDKn.js";import"./FSSlideGroup-Jp6XGK-I.js";import"./FSButtonNextIcon-GWsRoL9L.js";import"./FSButton-YqGArPy2.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./FSClickable-TnS9e2Ej.js";import"./FSCard-DkDNRB06.js";import"./FSCol-qfATdd_b.js";import"./FSDashboardShallowTileUI-CdDaNlaJ.js";import"./FSSimpleTileUI-C-rgGdhI.js";import"./FSIconCard-HSHEedj-.js";import"./FSImage-Bqzq6MgE.js";import"./FSImageUI-D2j3oDF1.js";import"./FSLoader-DjLBB-ae.js";import"./VImg-CBGPWIu-.js";import"./transition-QV8dDJB9.js";import"./index-BNomsh5u.js";import"./useImages-B58XKdkx.js";import"./base-CmdGny12.js";import"./composableFactory-BVozujU4.js";import"./serviceFactory-B3o6Bvwt.js";import"./useAppAuthToken-3n1rBHGl.js";import"./FSTile-DYkNmwQ6.js";import"./FSCheckbox-C5H351bN.js";import"./useRules-D0leB7Wy.js";import"./VSelectionControl-Fvr0iuTu.js";import"./VLabel-BNJ33aDR.js";import"./VInput-C2FcZlE6.js";import"./FSDashboardOrganisationTileUI-CM3ezKTe.js";import"./FSDashboardOrganisationTypeTileUI-CywK2X7b.js";import"./useDashboardOrganisationTypes-BaFYBVLq.js";import"./dashboardTranslation-BY3Wh2RO.js";import"./useAppLanguageCode-tS_QL_TH.js";import"./base-BJ27TNVe.js";import"./useAppOrganisationId-CurthI5S.js";import"./useDashboardOrganisations-ChJ8mrn-.js";import"./pathCrumb-Db-cq5HI.js";import"./useDashboardShallows-DR7CndH5.js";import"./useUserOrganisations-DW8PbRkc.js";import"./permissionInfos-BPDgTHQl.js";import"./useOrganisations-COskmzB4.js";import"./dashboards-JSNI7pIu.js";import"./FSDataTableUI-CyfkAIVk.js";import"./FSText-CMVh5ns4.js";import"./FSSearchField-Dt9Y52Jr.js";import"./FSTextField-Bd-6am9D.js";import"./FSBaseField-DcQpuQod.js";import"./VField-w4x2OZhg.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-BnE68qER.js";import"./FSSelectField-7K2ABFnn.js";import"./VList-DyUobt4O.js";import"./VDialog-DW8Lwwmu.js";import"./VOverlay-CoK8W0Lk.js";import"./scopeId-CROTNdIb.js";import"./ssrBoot-DfimFJGl.js";import"./FSToggleSet-DGZa_txS.js";import"./FSFadeOut-CaVJLNvG.js";import"./FSRadio-Co5Zk_Yw.js";import"./VSelect--rnrT-6J.js";import"./VMenu-BiZHvw8b.js";import"./FSDivider-BBuQm2SP.js";import"./FSChip-Czu45ZxK.js";import"./FSOptionGroup-BaYhbCkW.js";import"./filter-C1K_d8Vd.js";import"./filter-qsWrMVs0.js";const io={title:"Foundation/Core/Lists/Base Lists/BaseDashboardsList",component:p,subcomponents:{FSDataTable:e},tags:["autodocs"],argTypes:{}},r={render:i=>({components:{FSBaseDashboardsList:p},setup(){return{args:i}},template:`
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
