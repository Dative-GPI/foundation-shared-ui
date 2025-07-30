import e from"./FSBaseUserOrganisationsList-kt-j7mFH.js";import{F as l}from"./FSDataTable-l2vDr7F-.js";import"./vue.esm-bundler-PONd4AmC.js";import"./lodash-Zo30T2Bj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSpan-DxKJLsSl.js";import"./useBreakpoints-RTs-XAJF.js";import"./useSlots-nyIcwo6G.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSImage-C3LGd4N4.js";import"./FSImageUI-Dj9MaFLC.js";import"./FSLoader-B0jwcdOS.js";import"./useColors-WMY9wD-z.js";import"./index-_Z9wfsFC.js";import"./theme-DW7AHeJn.js";import"./css-BeoQuAfr.js";import"./color-CQ7P2KsY.js";import"./dimensions-D04OQyPe.js";import"./elevation-D2k7D5K3.js";import"./locale-CoLhg8Wl.js";import"./VImg-AonvEV9k.js";import"./rounded-Cwlpymxx.js";import"./transition-BpYTYsmy.js";import"./index-CzkqP9_q.js";import"./useImages-BcPfe_zO.js";import"./base-CmdGny12.js";import"./composableFactory-B2U31qfW.js";import"./serviceFactory-aQiBqOvf.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BwsMVknI.js";import"./FSTagGroup-BfAVqT2V.js";import"./FSSlideGroup-G-1eJ8xl.js";import"./FSButtonNextIcon-BfAvcYY6.js";import"./FSButton-C_cDbGvj.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-BpeLEfG7.js";import"./FSCard-B7av1ouT.js";import"./FSCol-Bfhiyt6Y.js";import"./FSRow-C-b-hpWa.js";import"./VProgressCircular-D57tYVQX.js";import"./resizeObserver-BAwzmH4Y.js";import"./VIcon-shEmQARK.js";import"./FSIcon-wf_hiRKr.js";import"./VSlideGroupItem-B4B7QRhR.js";import"./group-QLjCrFp5.js";import"./proxiedModel-BMHfYIia.js";import"./index-COu1mqSp.js";import"./display-D1WOGNJY.js";import"./FSWrapGroup-Dayjp45z.js";import"./FSTag-D0nY84TF.js";import"./VBtn-Bcg5Dpfx.js";import"./border-BL_XAYaf.js";import"./density-DM1TPnyn.js";import"./loader-zqGHJTJd.js";import"./anchor-rLQXsCC5.js";import"./router-DS8hXbpn.js";import"./index-aCfcr9Gd.js";import"./VDefaultsProvider--dbql3OT.js";import"./FSIconCheck-1dYPBmXp.js";import"./FSUserOrganisationTileUI-D8a2ZKdB.js";import"./FSTile-DCbo0Z1b.js";import"./FSCheckbox-B1Q6_lSw.js";import"./useRules-CT5DWk6c.js";import"./VCheckboxBtn-CYnHxMSC.js";import"./VSelectionControl-BAKsAS1a.js";import"./VLabel-B2dMuALu.js";import"./VInput-CX-j4Zl6.js";import"./useTranslations-_Q1DYra_.js";import"./useUserOrganisations-BuUoeLgV.js";import"./permissionInfos-BPDgTHQl.js";import"./base-Cd1_IDDR.js";import"./useAppOrganisationId-BgVWu_vS.js";import"./users-BCHgesD8.js";import"./FSDataTableUI-CKWoWzzf.js";import"./FSText-EpsxHg8Z.js";import"./FSSearchField-ChPOPxqV.js";import"./FSTextField-Du9Dg0zN.js";import"./FSBaseField-C48d8q8m.js";import"./VField-D3hGYPrZ.js";import"./forwardRefs-DWGaNmQL.js";import"./FSSelectField-DwgBs-gj.js";import"./FSDialogMenu-Crze0iUo.js";import"./VDialog-CkmtLqSZ.js";import"./VOverlay-C4y2redN.js";import"./lazy-PL0gnfDR.js";import"./scopeId-DFcjERLl.js";import"./FSToggleSet-BSMIUsc9.js";import"./FSFadeOut-Dik6Imqk.js";import"./FSRadio-CdtLWkJD.js";import"./VSelect-CyCOXYrT.js";import"./VList-BCmGq4kQ.js";import"./ssrBoot-DufuUSU7.js";import"./VMenu-DAcX0VlQ.js";import"./FSDivider-Bb3704DE.js";import"./FSChip-CS2j_Mvh.js";import"./FSMenu-BEcSDcUA.js";import"./FSOptionGroup-Ci3AmE2C.js";import"./filter-C1K_d8Vd.js";import"./filter-D4n0RRF9.js";const et={title:"Foundation/Core/Lists/Base Lists/BaseUserOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["users1","users2"]}}},r={render:o=>({components:{FSBaseUserOrganisationsList:e},setup(){return{args:o}},template:`
      <FSBaseUserOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{modelValue:[],tableCode:"users1"}},t={render:o=>({components:{FSBaseUserOrganisationsList:e},setup(){return{args:o}},template:`
      <FSBaseUserOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{modelValue:[],tableCode:"users2"}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseUserOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseUserOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    modelValue: [],
    tableCode: 'users1'
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var s,a,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseUserOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseUserOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    modelValue: [],
    tableCode: 'users2'
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const mt=["Default","Variant1"];export{r as Default,t as Variant1,mt as __namedExportsOrder,et as default};
