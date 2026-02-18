import p from"./FSBaseModelsList-wvpW33bC.js";import{F as e}from"./FSDataTable-BPveew50.js";import"./lodash-DyRFk5BS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSIcon-DFkRD0af.js";import"./useBreakpoints-CEzKC_o8.js";import"./useColors-COEXNh00.js";import"./theme-BcqfMidt.js";import"./css-CxcvJboa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-C3cN4B51.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./icons-DbptYgqQ.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSImage-BPrhBII5.js";import"./FSImageUI-BLy7Ukeh.js";import"./FSLoader-uhE9mCg0.js";import"./dimensions-D_nx6Jbk.js";import"./elevation-62d6MvS5.js";import"./locale-n4v42L7l.js";import"./proxiedModel-Cv3qT1cZ.js";import"./VImg-CFhtVVj8.js";import"./rounded-BSNeeq4o.js";import"./transition-gfLL8RoD.js";import"./index-u79WnTSR.js";import"./useImages-CiiOgSyV.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-DGf7dwWo.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSIconCheck-CJ0o3hvW.js";import"./FSModelTileUI-FNzJIA5T.js";import"./FSSimpleTileUI-BoYdPWKY.js";import"./FSIconCard-DtKeSdhf.js";import"./FSCard-xgl24Qs4.js";import"./FSRow-DIk8KFbG.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./VProgressCircular-BsmUxqlD.js";import"./resizeObserver-CpF7iUII.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./FSTile-CbSCVq7d.js";import"./FSCheckbox-DMg4fEo0.js";import"./FSCol-D_lbFmZy.js";import"./useRules-R3Ldkrx4.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./density-BTT1solu.js";import"./index-C2v-jVLO.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./index-Bo6vw90T.js";import"./useModels-CwoL5iCH.js";import"./base-YMsHX0Is.js";import"./useAppOrganisationId-CFu8M88R.js";import"./FSDataTableUI-Bje6jE7g.js";import"./FSText-015IEZHy.js";import"./FSSearchField-Dy8MjAG9.js";import"./FSTextField-CmC2Zq8s.js";import"./FSBaseField-C_kMSpMl.js";import"./FSButton-BSigqYK7.js";import"./VField-BWZy72Xk.js";import"./loader-CAuY8UYG.js";import"./VProgressLinear-CI-Q4csR.js";import"./anchor-tlySGI4g.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./useTranslations-CFCS6HA-.js";import"./FSSelectField-BBwf8qaq.js";import"./FSDialogMenu-CyOBKDBB.js";import"./VDialog-C5WNai-3.js";import"./VOverlay-BApTxsTF.js";import"./display-DvHDH61C.js";import"./lazy-Bqido2cx.js";import"./router-R_WRJyUs.js";import"./scopeId-DI6aT8IG.js";import"./dialog-transition-CBLjbvr6.js";import"./FSSlideGroup-BjSJBvWs.js";import"./FSButtonNextIcon-CnQnCIEN.js";import"./VSlideGroup-BJAU1y7G.js";import"./goto-nADK4Ssb.js";import"./group-Cx5pids1.js";import"./VSlideGroupItem-B1P3g7mq.js";import"./FSToggleSet-BCmdcwNz.js";import"./FSWrapGroup-ES-pUhBN.js";import"./FSFadeOut-YXyyFCAB.js";import"./FSRadio-CKU_VsjQ.js";import"./VSelect-Cqgn0Y86.js";import"./VList-C0qufsOv.js";import"./ssrBoot-C79LbZhX.js";import"./border-5JTJ2U38.js";import"./variant-CRuOwF35.js";import"./VDivider-IiSngj1L.js";import"./VMenu-DOme5rNf.js";import"./FSDivider-B5u6_Nl0.js";import"./FSChip-DRoToy-L.js";import"./FSMenu-mE5omh8N.js";import"./FSOptionGroup-DnZ8fRWf.js";import"./filter-C1K_d8Vd.js";import"./VBtn-DtRd7_Uc.js";import"./position-DfaaINa4.js";import"./filter-CjCsq5wT.js";const at={title:"Foundation/Core/Lists/Base Lists/BaseModelsList",component:p,subcomponents:{FSDataTable:e},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["models1"]}}},o={render:i=>({components:{FSBaseModelsList:p},setup(){return{args:i}},template:`
      <FSBaseModelsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"models1",modelValue:[]}};var t,r,m;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseModelsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseModelsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'models1',
    modelValue: []
  }
}`,...(m=(r=o.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const nt=["Default"];export{o as Default,nt as __namedExportsOrder,at as default};
