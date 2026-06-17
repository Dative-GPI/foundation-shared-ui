import p from"./FSBaseModelsList-i4ATFrBR.js";import{F as e}from"./FSDataTable-Cxs4Hf7Y.js";import"./eventQueue-D85hWBFd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./uuid-DTaye2KM.js";import"./vue.esm-bundler-C5-CUMHT.js";import"./FSIcon-CNpmwcOd.js";import"./useBreakpoints-pPMhsL5T.js";import"./useColors-BAnxS_-e.js";import"./theme-CB6As9Cd.js";import"./css-DSFbdPon.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-IlEzlDWp.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./icons-CucLNLjN.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSImage-CTV3ARHO.js";import"./FSImageUI-DrqF_CxM.js";import"./FSLoader-BTZOtjrt.js";import"./dimensions-Bm76csmg.js";import"./elevation-DfTZ1KyC.js";import"./locale-BNkeanE6.js";import"./proxiedModel-CV-HTW34.js";import"./VImg-DXeUU_wB.js";import"./rounded-Ctowy803.js";import"./transition-CgRUW3r8.js";import"./index-B3ZVJx30.js";import"./useImages-CyYFl-Jz.js";import"./composableFactory-Cxup7bUM.js";import"./serviceFactory-DI_gyWBF.js";import"./base-CmdGny12.js";import"./useAppAuthToken-DMcDmCCx.js";import"./FSIconCheck-CHC00Pxg.js";import"./FSModelTileUI-B9B-RBtt.js";import"./FSSimpleTileUI-CcRMbNDG.js";import"./FSIconCard-C8bYj-2A.js";import"./FSCard-DYe1QD8j.js";import"./FSRow-C8aYwBu-.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./VProgressCircular-D7Gk7a1O.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./FSSpan-D6aG51_c.js";import"./useSlots-ol4Nk6ew.js";import"./FSTile-DmLtcb1O.js";import"./FSCheckbox-BwFpn-kB.js";import"./FSCol-DedFW0nl.js";import"./useRules-D4S0gmXa.js";import"./VCheckboxBtn-ODJx5um2.js";import"./VSelectionControl-D13_Swsb.js";import"./density-qUtw3dk7.js";import"./index-asyjLxvi.js";import"./VLabel-COLF1QPQ.js";import"./VInput-Y0iB4nur.js";import"./index-pS3mXfMR.js";import"./useModels-BN_kP-yZ.js";import"./modelInfos-C734A82I.js";import"./base-BFVjoMA-.js";import"./useAppOrganisationId-CSdtG-as.js";import"./FSDataTableUI--yYKN4ST.js";import"./FSText-C8rmUTxK.js";import"./FSSearchField-DfSRPhxD.js";import"./FSTextField-V-eBW8wn.js";import"./FSBaseField-B1fPD4-R.js";import"./FSButton-DohpVEzP.js";import"./VTextField-CPakm9mu.js";import"./VField-Cbr0bjXl.js";import"./loader-CVb0Ac9O.js";import"./VProgressLinear-F46fcvb0.js";import"./anchor-Dj2AEc5N.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./forwardRefs-C-GTDzx5.js";import"./useTranslations-DAi7IZoP.js";import"./FSSelectField-BGyDveV5.js";import"./FSDialogMenu-D2-2fAf2.js";import"./VDialog-CSacG24V.js";import"./VOverlay-CG3iG1zZ.js";import"./display-IUfV935l.js";import"./lazy-DXVvciW4.js";import"./router-CTGX-puL.js";import"./scopeId-DKs4U9S0.js";import"./dialog-transition-DRDndVEC.js";import"./FSSlideGroup-5yThapiu.js";import"./FSButtonNextIcon-TA3Aju3l.js";import"./VSlideGroup-Bd_pvRRU.js";import"./goto-Ba_J3Vzv.js";import"./group-B4VRq_l_.js";import"./VSlideGroupItem-BppNUl7y.js";import"./FSToggleSet-yqzW0yBe.js";import"./FSWrapGroup-DMf-egfq.js";import"./FSFadeOut-DOLGFW1u.js";import"./FSRadio-msJSYj1I.js";import"./VSelect-BkR6mgZ1.js";import"./VList-BVDcEHsi.js";import"./ssrBoot-ClVRhrXI.js";import"./border-DJaidMiz.js";import"./variant-BJccJztY.js";import"./VDivider-Ck2C5rfW.js";import"./VMenu-dxHuUw__.js";import"./FSDivider-By4I55aC.js";import"./FSChip-PSYJcPlU.js";import"./FSMenu-5jQDuEvO.js";import"./FSOptionGroup-BYJkdyGx.js";import"./filter-C1K_d8Vd.js";import"./VBtn-CvDmdLsi.js";import"./position-CTxKpBLl.js";import"./filter-BTy0FM8E.js";const dt={title:"Core/Components/Lists/Base Lists/BaseModelsList",component:p,subcomponents:{FSDataTable:e},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["models1"]}}},o={render:i=>({components:{FSBaseModelsList:p},setup(){return{args:i}},template:`
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
}`,...(m=(r=o.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const ut=["Default"];export{o as Default,ut as __namedExportsOrder,dt as default};
