import e from"./FSBaseDeviceOrganisationsList-CmqDjoD5.js";import{F as l}from"./FSDataTable-Bdkg7Eyy.js";import"./vue.esm-bundler-NAfsqApI.js";import"./lodash-BrWYvtk2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSMetaValue-B-FTqrow.js";import"./customProperties-DqkON8hk.js";import"./useAppTimeZone-UiqNElH2.js";import"./FSIconCheck-280a7rEK.js";import"./FSIcon-Dq2bxLH5.js";import"./useBreakpoints-BwxwzcAl.js";import"./useColors-CWqJhoVw.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./css-DBDqGZ-V.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-PiNvAqE-.js";import"./color-BvydW9AS.js";import"./FSSpan-CLtVPKpS.js";import"./useSlots-S0O9Daut.js";import"./FSText-Bp70TDSF.js";import"./useDateFormat-Ci8JB6DS.js";import"./useAppLanguageCode-DW7Tteig.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-CxiknF7e.js";import"./FSDeviceOrganisationTileUI-B1jMsvGq.js";import"./FSStatusesCarousel-NMgFh1Gk.js";import"./FSButton-CnXo3fLV.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSClickable-Dvaj3J5M.js";import"./FSCard-DOESxZy8.js";import"./FSCol-CPY6S-Xd.js";import"./FSRow-GjwhmX1p.js";import"./VProgressCircular-B6p7zTwg.js";import"./resizeObserver-CLnVcpcq.js";import"./FSWindow-DzxBgxK_.js";import"./group-Dl43T2CL.js";import"./proxiedModel-sn-eI_a5.js";import"./locale-CAPEya44.js";import"./VBtn-DqFLTMVy.js";import"./border-C5v47RY4.js";import"./density-BGeA8UH8.js";import"./elevation-B-XsQHpK.js";import"./rounded-DwVJT96z.js";import"./dimensions-IFPI4Yq9.js";import"./loader-DsBOwpms.js";import"./anchor-DvtYZGyi.js";import"./router-0GC4RTMW.js";import"./index-o6vlk9JB.js";import"./VDefaultsProvider-BngNLuXK.js";import"./scopeId-CbPxXtFO.js";import"./ssrBoot-BkO-TPgF.js";import"./transition-L7INWkz2.js";import"./FSStatus-B2ihHMHc.js";import"./FSChip-DFWe0C6o.js";import"./FSColor-uHwTJM5j.js";import"./VMenu-D8AvjW2T.js";import"./VOverlay-CNRAdbgq.js";import"./forwardRefs-DWGaNmQL.js";import"./display-Bn-MFLq6.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-BvY-xanF.js";import"./FSDivider-CFth2ThC.js";import"./FSImage-pL2n9Qiy.js";import"./FSImageUI-5vzo4bHr.js";import"./FSLoader-C8dZP0ML.js";import"./VImg-D7CqP58l.js";import"./index-DINlpRuJ.js";import"./useImages-V3peuH-V.js";import"./base-CmdGny12.js";import"./composableFactory-WcheuuwI.js";import"./serviceFactory-DMr1GitK.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DQih8RjT.js";import"./FSTile-DVIPkavo.js";import"./FSCheckbox-CZADXYvb.js";import"./useRules-pqUeO9kt.js";import"./VSelectionControl-CV2pv1R-.js";import"./VLabel-BDFzMscP.js";import"./VInput-B5HH3Lye.js";import"./index-Dne_26Gx.js";import"./form-DTsyvZhj.js";import"./FSTagGroup-_uAzbfER.js";import"./FSWrapGroup-C3Z0hZ7U.js";import"./VSlideGroupItem-BvOdViLK.js";import"./FSTag---43R17_.js";import"./FSSlideGroup-Cl7IgSOt.js";import"./FSButtonNextIcon-BwecMMW5.js";import"./base-D1kf-R5n.js";import"./useAppOrganisationId-CZPUgkT3.js";import"./useDeviceOrganisations-D2qHtiT_.js";import"./hubFactory-B1wufFno.js";import"./deviceConnectivityDetails-DsuFztYx.js";import"./pathCrumb-Db-cq5HI.js";import"./FSDataTableUI-C7fdNUM1.js";import"./FSSearchField-LHGjxxhV.js";import"./FSTextField-Dzov9hcU.js";import"./FSBaseField-CjhswGig.js";import"./VField-KOKiCRZA.js";import"./FSSelectField-BvYV5EfQ.js";import"./VList-Cf1cUG92.js";import"./VDialog-uWe1mq7l.js";import"./FSToggleSet-CBrw8ECP.js";import"./FSFadeOut-D3iDD7Hj.js";import"./FSRadio-Bz6eMy_b.js";import"./VSelect-aoHOo6gx.js";import"./FSOptionGroup-B6MwFvnd.js";import"./filter-C1K_d8Vd.js";import"./filter-DH9_huac.js";const vt={title:"Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList",component:e,subcomponents:{FSDataTable:l},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["devices1","devices2"]}}},o={args:{modelValue:[],tableCode:"devices1",connectedOnly:!1},render:r=>({components:{FSBaseDeviceOrganisationsList:e},setup(){return{args:r}},template:`
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
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const Ct=["Default","CustomProperties"];export{t as CustomProperties,o as Default,Ct as __namedExportsOrder,vt as default};
