import{F as i}from"./FSAutocompleteTimeZone-BP1V9BlK.js";import{F as p}from"./FSCol-BQiFrdcO.js";import"./vue.esm-bundler-CUSnV4DE.js";import"./FSAutocompleteField-CKnbZeUq.js";import"./FSSearchField-eXvJVmGa.js";import"./FSTextField-MbUkXGoG.js";import"./FSBaseField-DwmVeNEG.js";import"./FSSpan-M9GEX7v6.js";import"./useBreakpoints-CQzBW1Q0.js";import"./useSlots-CY84M1fx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-hpHYWcoJ.js";import"./css-BnRE2gle.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./FSButton-BTpAdEE5.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSClickable-Bn4xIsxH.js";import"./FSCard-BnVyMFnh.js";import"./VProgressCircular-BbyuaGSs.js";import"./color-CgsoZSKd.js";import"./resizeObserver-Hv1_IiVG.js";import"./VIcon-DeLOaNVc.js";import"./FSIcon-Cp7BQBW6.js";import"./useRules-CYZMRvpC.js";import"./VField-B_GuA4vu.js";import"./index-DDQZ-RJM.js";import"./transition-C81aHyit.js";import"./VLabel-DSsJm0B6.js";import"./VInput-C8lN0V_S.js";import"./locale-DYN4KMd8.js";import"./density-DAqBVexQ.js";import"./dimensions-BI5CQRk1.js";import"./proxiedModel-DaBGAliH.js";import"./loader-BjfLeESU.js";import"./anchor-MMgLgK3d.js";import"./rounded-DQzQH8wE.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CeZa2hiu.js";import"./useTranslations-D0SM0QeA.js";import"./VList-0zKlnGxf.js";import"./VDialog-Co_Esry_.js";import"./VOverlay-BKGgaXLT.js";import"./display-DbvBihXn.js";import"./scopeId-DP5cc-6o.js";import"./router-C6XMMO7F.js";import"./ssrBoot-Cb1Ys1Hl.js";import"./border-CdoaLNWv.js";import"./elevation-C08MHLji.js";import"./index-BdaiM53K.js";import"./VImg-DinzZLZB.js";import"./FSSlideGroup-BKtLKoi-.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DC1JdNxL.js";import"./VSlideGroupItem-G437Dc1S.js";import"./group-CrKBhSLQ.js";import"./FSToggleSet-gSDjdstT.js";import"./FSWrapGroup-DswCzfON.js";import"./FSCheckbox-DT2R4my4.js";import"./VSelectionControl-BrUoGkRx.js";import"./FSFadeOut-BguakrVC.js";import"./FSLoader-BxWH0Nmg.js";import"./FSRadio-BICP5Dmr.js";import"./VSelect-CO7kggYd.js";import"./VMenu-BYRtZ3M5.js";import"./filter-BDc_Ne3E.js";import"./FSChip-B4fQRAFB.js";import"./base-CmdGny12.js";import"./composableFactory-DWA25NsU.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./useAutocomplete-JLCgZTVD.js";const Ot={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(m,{argTypes:l})=>({components:{FSAutocompleteTimeZone:i,FSCol:p},props:Object.keys(l),setup(){return{...m}},template:`
    <FSCol>
      <FSAutocompleteTimeZone
        label="TimeZone"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteTimeZone,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteTimeZone
        label="TimeZone"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const jt=["Variations"];export{t as Variations,jt as __namedExportsOrder,Ot as default};
