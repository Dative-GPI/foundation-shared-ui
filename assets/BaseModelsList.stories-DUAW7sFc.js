import p from"./FSBaseModelsList-rw9w_0QQ.js";import{F as e}from"./FSDataTable-DFA73h1j.js";import"./lodash-5Yh5OMmr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./vue.esm-bundler-D_gXonxt.js";import"./FSIcon-B9MXbR5l.js";import"./useBreakpoints-BWz07CZT.js";import"./useColors-B49MKafH.js";import"./theme-DdZUMbNR.js";import"./css-Bznx04uW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-gCapjdof.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSImage-BwU3jLhA.js";import"./FSImageUI-C_EkTaPS.js";import"./FSLoader-CdctsmAF.js";import"./dimensions-BYDjhYdL.js";import"./elevation-sxxySPKb.js";import"./locale-CEMLpecI.js";import"./proxiedModel-Cl0bR0rs.js";import"./VImg-ufpttNgj.js";import"./rounded-yhlSUX6x.js";import"./transition-CHyhkthg.js";import"./index-CpkyVf-S.js";import"./useImages-ns1hGlq_.js";import"./composableFactory-DkrZ_DEM.js";import"./serviceFactory-CzhkrYh7.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-DU8AzEWU.js";import"./FSIconCheck-Dx-VIDAj.js";import"./FSModelTileUI-3dq1p3wu.js";import"./FSSimpleTileUI-frH4ud6D.js";import"./FSIconCard-CmOhk6fq.js";import"./FSCard-Cxfe3-O9.js";import"./FSRow-cHWWqhhs.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./VProgressCircular-BomUTxjq.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./FSSpan-ap0CpdXZ.js";import"./useSlots-CdBAzqCX.js";import"./FSTile-DPKEiqsQ.js";import"./FSCheckbox-zoBL9ZjY.js";import"./FSCol-C3EJfcJX.js";import"./useRules-CohX4tE3.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./density-W7RG4BnT.js";import"./index-ByzLombQ.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./index-aKIkx5xA.js";import"./useModels-CfT--FZT.js";import"./modelInfos-bZkGTX-n.js";import"./base-1TCiMBKH.js";import"./useAppOrganisationId-Dp-8AYe6.js";import"./FSDataTableUI-C-2kgTyQ.js";import"./FSText-DL_5kFi7.js";import"./FSSearchField-HtJ7es4F.js";import"./FSTextField-CvqetqWm.js";import"./FSBaseField-CGwB2cs2.js";import"./FSButton-DHeuA-BH.js";import"./VTextField-SMQo8Oxu.js";import"./VField-Cr90fIiu.js";import"./loader-DM6th8g9.js";import"./VProgressLinear-bxxDRxj8.js";import"./anchor-DrPAsKKU.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-DJfojugM.js";import"./forwardRefs-C-GTDzx5.js";import"./useTranslations-D2TwtVAp.js";import"./FSSelectField-D4PxnGMS.js";import"./FSDialogMenu-CYc22LXB.js";import"./VDialog-BTFeiENf.js";import"./VOverlay-CrMgAm2W.js";import"./display-BIN9xr9Q.js";import"./lazy-aXB44k01.js";import"./router-hLwSEJDL.js";import"./scopeId-BwxBN6Au.js";import"./dialog-transition-d5ANZlFh.js";import"./FSSlideGroup-CeCO9XCC.js";import"./FSButtonNextIcon-Dgxxr9ql.js";import"./VSlideGroup-Bqij08hI.js";import"./goto-wDz_aHst.js";import"./group-BimGXDpZ.js";import"./VSlideGroupItem-DyiSjx9G.js";import"./FSToggleSet-DaMIvypa.js";import"./FSWrapGroup-D5YRUBcz.js";import"./FSFadeOut-z7-cnvK3.js";import"./FSRadio-Bk5L3sqZ.js";import"./VSelect-BdqVvZBK.js";import"./VList-D8CiLhgs.js";import"./ssrBoot-DpaZqI6q.js";import"./border-BTzDu4tj.js";import"./variant-ftZYcIF1.js";import"./VDivider-CTy1lKut.js";import"./VMenu-KvKUKA1I.js";import"./FSDivider-CeMPgbtb.js";import"./FSChip-BxBwP6Ct.js";import"./FSMenu-BRQdQ5Qk.js";import"./FSOptionGroup-BS0VjBGG.js";import"./filter-C1K_d8Vd.js";import"./VBtn-DgLqICzT.js";import"./position-mzu5LnMQ.js";import"./filter-DB2eMWUq.js";const dt={title:"Foundation/Core/Lists/Base Lists/BaseModelsList",component:p,subcomponents:{FSDataTable:e},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["models1"]}}},o={render:i=>({components:{FSBaseModelsList:p},setup(){return{args:i}},template:`
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
