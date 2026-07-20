import p from"./FSBaseModelsList-CZrtH7dp.js";import{F as e}from"./FSDataTable-BEOzBoF9.js";import"./eventQueue-D85hWBFd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./uuid-DTaye2KM.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSIcon-BcHBVf_o.js";import"./useBreakpoints-DO2FQykY.js";import"./useColors-v3I-6cBg.js";import"./theme-DuZszYeY.js";import"./css-CUVOJ3aO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-Cu6WQqXu.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSImage-DeZD3KhU.js";import"./FSImageUI-CzwoPTBI.js";import"./FSLoader-BoDinVVO.js";import"./dimensions-CS_qJJhy.js";import"./elevation-DQ_qKX67.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./VImg-BdZHkGCX.js";import"./rounded-CS1_z6Jk.js";import"./transition-a5pzBS6c.js";import"./index-B4rZgXN-.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./FSIconCheck-DvcPagA7.js";import"./FSModelTileUI-BhMcNcoL.js";import"./FSSimpleTileUI-C4SYepGM.js";import"./FSIconCard-CnwiJm5z.js";import"./FSCard-DxY0aXhp.js";import"./FSRow-Dg2RhQyl.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./FSSpan-B28b2m0n.js";import"./useSlots-DEXetpJf.js";import"./FSTile-DnwhleJY.js";import"./FSCheckbox-D4XH1I7L.js";import"./FSCol-KRtq6OYO.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./density-CE2FkSgs.js";import"./index-B-eFr4Nw.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./index-ByfGjSW7.js";import"./useModels-FzB5LDMQ.js";import"./modelInfos-C734A82I.js";import"./base-CxE7IGU1.js";import"./useAppOrganisationId-DLYVMJh2.js";import"./FSDataTableUI-B3H0X10t.js";import"./FSText-DIbyStIN.js";import"./FSSearchField-Dnz4Beq9.js";import"./FSTextField-Cq4gI6mX.js";import"./FSBaseField-Bph8nCfp.js";import"./FSButton-BqreeKOn.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./anchor-Se7MGGLO.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Blv54jCg.js";import"./forwardRefs-C-GTDzx5.js";import"./useTranslations-D5uJM3hx.js";import"./FSSelectField-Dc0S5clF.js";import"./FSDialogMenu-BzRN-uoP.js";import"./VDialog-CmTscL9b.js";import"./VOverlay-BuHPOPgF.js";import"./display-QVN4B5Qw.js";import"./lazy-sPNxwuRm.js";import"./router-D36qODsG.js";import"./scopeId-DEhVAmth.js";import"./dialog-transition-B9S_00bc.js";import"./FSSlideGroup-BbqArISU.js";import"./FSButtonNextIcon-CyemLlRb.js";import"./VSlideGroup-B-JqmwGu.js";import"./goto-CvfYl6LX.js";import"./group-BLkYT3DE.js";import"./VSlideGroupItem-DS171Ouj.js";import"./FSToggleSet-D0wxZ1Az.js";import"./FSWrapGroup-Ddblgb9F.js";import"./FSFadeOut-W61q8jFE.js";import"./FSRadio-Dd1EMADi.js";import"./VSelect-CVWNfrM9.js";import"./VList-BhDySjdU.js";import"./ssrBoot-BimrXMWA.js";import"./border-D8z1QLxT.js";import"./variant-DNfp8Yqp.js";import"./VDivider-B9VczfM4.js";import"./VMenu-BCj9c0xY.js";import"./FSDivider-te-qyc3C.js";import"./FSChip-Cyh73OPt.js";import"./FSMenu-DcCsQXC4.js";import"./FSOptionGroup-4djHXkS9.js";import"./filter-C1K_d8Vd.js";import"./VBtn-Ct4hkl6N.js";import"./position-O95c9fuD.js";import"./filter-C4s97JnQ.js";const dt={title:"Core/Components/Lists/Base Lists/BaseModelsList",component:p,subcomponents:{FSDataTable:e},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["models1"]}}},o={render:i=>({components:{FSBaseModelsList:p},setup(){return{args:i}},template:`
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
