import p from"./FSBaseDashboardsList-WXlnCPRo.js";import{F as e}from"./FSDataTable-BCZp9bFL.js";import"./lodash-BrWYvtk2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./vue.esm-bundler-CM4TIH-Q.js";import"./FSTagGroup-9vcjSDRy.js";import"./FSWrapGroup-DldQIiCW.js";import"./uuid-DTaye2KM.js";import"./useSlots-c6yg-hhg.js";import"./useColors-CjA2D2xA.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./css-BgLnvP7H.js";import"./useBreakpoints-C6JPO-aN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-41bDxGuE.js";import"./group-3MU8bQUc.js";import"./proxiedModel-DKx29MO-.js";import"./index-BJH4L2FX.js";import"./color-Bo6l13w9.js";import"./display-CUGteI3_.js";import"./locale-BqFH1fBg.js";import"./VIcon-GfKFLOEw.js";import"./resizeObserver-Cb3oz2nO.js";import"./FSTag-B1V2W5qV.js";import"./FSIcon-LkE5-ra7.js";import"./FSSpan-y1Ex52-c.js";import"./FSRow-oDTnIAxc.js";import"./VBtn-DqO4-7PD.js";import"./border-CvDIZQGy.js";import"./density-Dl4v3sM7.js";import"./elevation-DgpWsjTu.js";import"./rounded-CDCr0BOq.js";import"./dimensions-DW-k5kP_.js";import"./loader-CQB_6PPx.js";import"./VProgressCircular-C-4f-PXJ.js";import"./anchor-DCFmATqq.js";import"./router-BXF-7Xxx.js";import"./index-BkfcJ8bv.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./FSSlideGroup-DuKHMc7B.js";import"./FSButtonNextIcon-CuTZlUtI.js";import"./FSButton-DatX9tV0.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-CXLm7rHe.js";import"./FSCard-BedrH_cK.js";import"./FSCol-BR6T1l1C.js";import"./FSDashboardShallowTileUI-DBwc6Z_Q.js";import"./FSSimpleTileUI-D1P1i1cE.js";import"./FSIconCard-BeL7xzLJ.js";import"./FSImage-DOioESmt.js";import"./FSImageUI-DnMadCDH.js";import"./FSLoader-CRKSvpTi.js";import"./VImg-D7XF-hIS.js";import"./transition-DMoMR0kB.js";import"./index-DWgrY6Dg.js";import"./useImages-X7qHyDlJ.js";import"./base-CmdGny12.js";import"./composableFactory-B6T2dm2_.js";import"./serviceFactory-B3o6Bvwt.js";import"./useAppAuthToken-3v3Ax1PV.js";import"./FSTile-CUVojSsV.js";import"./FSCheckbox-DdLfY5jd.js";import"./useRules-B12Yr5ve.js";import"./VSelectionControl-MVg9W9ha.js";import"./VLabel-Ca5QW7tf.js";import"./VInput-DXPqvHKO.js";import"./FSChip-BQxZ7VK4.js";import"./FSDashboardOrganisationTileUI-DXPqMsOD.js";import"./FSDashboardOrganisationTypeTileUI-CFoh9aKA.js";import"./useDashboardOrganisationTypes-Dw8co7i_.js";import"./dashboardTranslation-Ck_0ef_t.js";import"./useAppLanguageCode-CN6bsmo6.js";import"./base-Be6PBkQb.js";import"./useAppOrganisationId-BtM3-JKO.js";import"./useDashboardOrganisations-DHQuSYrL.js";import"./pathCrumb-Db-cq5HI.js";import"./useDashboardShallows-Bn96Kd68.js";import"./useUserOrganisations-CEQ4t5kG.js";import"./permissionInfos-BPDgTHQl.js";import"./useOrganisations-Cfl5nVwI.js";import"./dashboards-JSNI7pIu.js";import"./FSDataTableUI-BmjYt9aS.js";import"./FSText-yCmXS8Mf.js";import"./FSSearchField-BNfMDrZK.js";import"./FSTextField-C7rYmEAT.js";import"./FSBaseField-B4CV_xuh.js";import"./VField-D97ztcGG.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-CLqRehXT.js";import"./FSSelectField-DG1JLx9N.js";import"./VList-Cd1xaDQJ.js";import"./VDialog-CgsoTmCe.js";import"./VOverlay-DtEUynQC.js";import"./scopeId-COl1Iexy.js";import"./ssrBoot-BDHgcVA9.js";import"./FSToggleSet-lwjzcNyZ.js";import"./FSFadeOut-CmtPc-zJ.js";import"./FSRadio-Di2X4_xD.js";import"./VSelect-IZDtUERE.js";import"./VMenu-sKuqJ8jm.js";import"./FSDivider-sTywU57d.js";import"./FSMenu-Da0q64tf.js";import"./FSOptionGroup-DjoNrEHh.js";import"./filter-C1K_d8Vd.js";import"./filter-DHa7wap7.js";const eo={title:"Foundation/Core/Lists/Base Lists/BaseDashboardsList",component:p,subcomponents:{FSDataTable:e},tags:["autodocs"],argTypes:{}},r={render:i=>({components:{FSBaseDashboardsList:p},setup(){return{args:i}},template:`
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
}`,...(m=(t=r.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};const so=["Default"];export{r as Default,so as __namedExportsOrder,eo as default};
