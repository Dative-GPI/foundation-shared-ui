import e from"./FSBaseDeviceOrganisationsList-uilHwv-e.js";import{F as l}from"./FSDataTable-B4jY-IsZ.js";import"./vue.esm-bundler-CUSnV4DE.js";import"./lodash-BrWYvtk2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-BLajH_o6.js";import"./customProperties-DqkON8hk.js";import"./useAppTimeZone-CYLIXU2i.js";import"./FSIconCheck-B0nL5Kj9.js";import"./FSIcon-Cp7BQBW6.js";import"./useBreakpoints-CQzBW1Q0.js";import"./useColors-CQZIO9RQ.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./css-BnRE2gle.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-DeLOaNVc.js";import"./color-CgsoZSKd.js";import"./FSSpan-M9GEX7v6.js";import"./useSlots-CY84M1fx.js";import"./FSText-CUkc4ADt.js";import"./useDateFormat-D6A_WgCt.js";import"./useAppLanguageCode-CV1UAuz5.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-D0SM0QeA.js";import"./FSDeviceOrganisationTileUI-D8mS5tqP.js";import"./FSStatusesCarousel-D7bVuFgA.js";import"./FSButton-BTpAdEE5.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSClickable-Bn4xIsxH.js";import"./FSCard-BnVyMFnh.js";import"./FSCol-BQiFrdcO.js";import"./FSRow-hpHYWcoJ.js";import"./VProgressCircular-BbyuaGSs.js";import"./resizeObserver-Hv1_IiVG.js";import"./FSWindow-RZPlTFe4.js";import"./group-CrKBhSLQ.js";import"./proxiedModel-DaBGAliH.js";import"./locale-DYN4KMd8.js";import"./VBtn-Rjy2Sxim.js";import"./border-CdoaLNWv.js";import"./density-DAqBVexQ.js";import"./elevation-C08MHLji.js";import"./rounded-DQzQH8wE.js";import"./dimensions-BI5CQRk1.js";import"./loader-BjfLeESU.js";import"./anchor-MMgLgK3d.js";import"./router-C6XMMO7F.js";import"./index-BdaiM53K.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./scopeId-DP5cc-6o.js";import"./ssrBoot-Cb1Ys1Hl.js";import"./transition-C81aHyit.js";import"./FSStatus-Bx_F36_C.js";import"./FSChip-B4fQRAFB.js";import"./FSColor-D-t7tRtb.js";import"./VMenu-BYRtZ3M5.js";import"./VOverlay-BKGgaXLT.js";import"./forwardRefs-DWGaNmQL.js";import"./display-DbvBihXn.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-hWpu15Z5.js";import"./FSDivider-DoNtNYap.js";import"./FSImage-DejQHEUL.js";import"./FSImageUI-C65sLZ4Z.js";import"./FSLoader-BxWH0Nmg.js";import"./VImg-DinzZLZB.js";import"./index-CeZa2hiu.js";import"./useImages-B9Gap5IC.js";import"./base-CmdGny12.js";import"./composableFactory-DWA25NsU.js";import"./serviceFactory-B3o6Bvwt.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BM6m0Bni.js";import"./FSTile-BB-cAi7f.js";import"./FSCheckbox-DT2R4my4.js";import"./useRules-CYZMRvpC.js";import"./VSelectionControl-BrUoGkRx.js";import"./VLabel-DSsJm0B6.js";import"./VInput-C8lN0V_S.js";import"./index-DDQZ-RJM.js";import"./FSTagGroup-M1ubsx4V.js";import"./FSWrapGroup-DswCzfON.js";import"./VSlideGroupItem-G437Dc1S.js";import"./FSTag-Cwjpfn0r.js";import"./FSSlideGroup-BKtLKoi-.js";import"./FSButtonNextIcon-DC1JdNxL.js";import"./base-DyefFz5t.js";import"./useAppOrganisationId-D-BntkEj.js";import"./useDeviceOrganisations-CppLST-7.js";import"./hubFactory-Dmxw5xY4.js";import"./deviceConnectivityDetails-DsuFztYx.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-DQ0FXpmN.js";import"./FSSearchField-eXvJVmGa.js";import"./FSTextField-MbUkXGoG.js";import"./FSBaseField-DwmVeNEG.js";import"./VField-B_GuA4vu.js";import"./FSSelectField-GcoemPSS.js";import"./VList-0zKlnGxf.js";import"./VDialog-Co_Esry_.js";import"./FSToggleSet-gSDjdstT.js";import"./FSFadeOut-BguakrVC.js";import"./FSRadio-BICP5Dmr.js";import"./VSelect-CO7kggYd.js";import"./FSOptionGroup-aSUFDdlH.js";import"./filter-C1K_d8Vd.js";import"./filter-BDc_Ne3E.js";const Ot={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
      <FSBaseDeviceOrganisationsList
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    `})},t={args:{modelValue:[],tableCode:"devices2",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
      <FSBaseDeviceOrganisationsList
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    `})};var i,m,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    modelValue: [],
    tableCode: 'devices1',
    connectedOnly: false
  },
  render: args => ({
    components: {
      FSBaseDeviceOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDeviceOrganisationsList
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    \`
  })
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var n,s,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    modelValue: [],
    tableCode: 'devices2',
    connectedOnly: false
  },
  render: args => ({
    components: {
      FSBaseDeviceOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDeviceOrganisationsList
        :connectedOnly="args.connectedOnly"
        :tableCode="args.tableCode"
        v-model:modelValue="args.modelValue"
      />
    \`
  })
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const vt=["Default","CustomProperties"];export{t as CustomProperties,o as Default,vt as __namedExportsOrder,Ot as default};
