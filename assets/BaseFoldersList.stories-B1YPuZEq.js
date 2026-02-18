import m from"./FSBaseFoldersList-r2qwqGFH.js";import{F as e}from"./FSDataTable-CWgNhJTd.js";import"./lodash-DyRFk5BS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./vue.esm-bundler-B9lxvfDw.js";import"./FSIcon-kCffLiJ2.js";import"./useBreakpoints-Dc84uxeD.js";import"./useColors-B5aYgogF.js";import"./theme-Bz5xEpqh.js";import"./css-BHrR5cp2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-DPcX_RaC.js";import"./color-CLtf7Qrc.js";import"./useRender-DM2jvMPN.js";import"./icons-B5bBvhw0.js";import"./FSTagGroup-BBv7eDQs.js";import"./FSSlideGroup-CS_aA5Ur.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BETncHzg.js";import"./FSButton-CxA5c6KR.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./FSCard-BwbWypiX.js";import"./FSCol-BwxAijHz.js";import"./FSRow-CFa9RNor.js";import"./VProgressCircular-DSOzHF7B.js";import"./resizeObserver-DjRdaT-k.js";import"./FSSpan-COYXSDbp.js";import"./useSlots-BioZKQqg.js";import"./VSlideGroup-6AACxYIN.js";import"./index-7AXDWkBX.js";import"./display-BzNfeHa8.js";import"./goto-BiKnNwZ0.js";import"./locale-C647X9dJ.js";import"./proxiedModel-DRvKxps3.js";import"./group-BLkb5Gt4.js";import"./VSlideGroupItem-C_H8qOqk.js";import"./FSWrapGroup-rn2r_UVH.js";import"./FSTag-DOy9JjQm.js";import"./VBtn-CjvfwDqR.js";import"./variant-BIgPYL9J.js";import"./density-DvMOIaQw.js";import"./elevation-DZ0Sccyb.js";import"./rounded-BrvRf1BO.js";import"./dimensions-n1mPaUbN.js";import"./loader-CaGstafT.js";import"./anchor-ByUPiJZt.js";import"./router-BlaQ2-ft.js";import"./index-EdIR5CJS.js";import"./VDefaultsProvider-BurwYF19.js";import"./FSFolderTileUI-C6Qu7Hh0.js";import"./FSEntityCountBadge-CcKiUBrC.js";import"./FSColor-CFKVLO7B.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-NTI_Cssm.js";import"./FSIconCard-B96S8Zdc.js";import"./FSImage-BdRbjk_B.js";import"./FSImageUI-Dstvh29N.js";import"./FSLoader-FkDR4IbG.js";import"./VImg-UzuohEtG.js";import"./transition-Dh_EAQcC.js";import"./index-Dli51uy9.js";import"./useImages-CXY-OT-0.js";import"./base-CmdGny12.js";import"./composableFactory-CzIPMomJ.js";import"./serviceFactory-DGf7dwWo.js";import"./useAppAuthToken-Cnww6a6j.js";import"./FSTile-05t0iUHJ.js";import"./FSCheckbox-8fnFFMk6.js";import"./useRules-Cun-4MZo.js";import"./VCheckboxBtn-BM2tTzJT.js";import"./VSelectionControl-COH1jBNJ.js";import"./VLabel-CT69iMfY.js";import"./VInput-DcZY3iGt.js";import"./useFolders-C3KzaJGO.js";import"./pathCrumb-Db-cq5HI.js";import"./base-DYlC2SM8.js";import"./useAppOrganisationId-BPp8-Hw1.js";import"./dashboards-JSNI7pIu.js";import"./dashboards-C2YRx6RE.js";import"./useTranslations-AmWs0SAL.js";import"./FSDataTableUI-B32YGrUA.js";import"./FSText-DZJhh1AD.js";import"./FSSearchField-OT9cCDCH.js";import"./FSTextField-mjFAiq2r.js";import"./FSBaseField-CSo0Z4y4.js";import"./VField-BoZICv48.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./FSSelectField-DgdAo_PA.js";import"./FSDialogMenu-DW8xl5CQ.js";import"./VDialog-CdFKtTkF.js";import"./VOverlay-DhmZjj8a.js";import"./lazy-B_HJlRZe.js";import"./scopeId-4Hx_BsCg.js";import"./FSToggleSet-ByYfXxag.js";import"./FSFadeOut-DwiC6ECo.js";import"./FSRadio-0LKeB0Ro.js";import"./VSelect-DVFoBPCa.js";import"./VList-CuJqKfkq.js";import"./ssrBoot-butIQ2KL.js";import"./VDivider-CJxliPT_.js";import"./VMenu-etFegoZJ.js";import"./FSDivider-lZQE0wIC.js";import"./FSChip-CnWvj3Fb.js";import"./FSMenu-7I4odqF7.js";import"./FSOptionGroup-DqYqbWUy.js";import"./filter-C1K_d8Vd.js";import"./filter-7QmGX2th.js";const nr={title:"Foundation/Core/Lists/Base Lists/BaseFoldersList",component:m,subcomponents:{FSDataTable:e},tags:["autodocs"],argTypes:{}},t={render:i=>({components:{FSBaseFoldersList:m},setup(){return{args:i}},template:`
      <FSBaseFoldersList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"folders1"}};var r,o,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseFoldersList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseFoldersList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'folders1'
  }
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const dr=["Default"];export{t as Default,dr as __namedExportsOrder,nr as default};
