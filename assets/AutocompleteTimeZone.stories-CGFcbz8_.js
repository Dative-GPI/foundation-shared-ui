import{F as i}from"./FSAutocompleteTimeZone-acn5JEdJ.js";import{F as p}from"./FSCol-C9a7BKGp.js";import"./vue.esm-bundler-BD3cPSox.js";import"./FSAutocompleteField-DFb3lyeo.js";import"./FSSearchField-C59ZFn1o.js";import"./FSTextField-DHU8-iy6.js";import"./FSBaseField-BvFJ1Ol8.js";import"./FSSpan-CqHf-ny6.js";import"./useBreakpoints-CnZdRDE7.js";import"./useSlots-DhthX9xh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CopwEayK.js";import"./css-CmnfRCoE.js";import"./useColors-Cu9vf_Ix.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B93wSOzC.js";import"./FSButton-CQA40iQ2.js";import"./FSRouterLink-_G3m0SRF.js";import"./vue-router-Ds_E4c-X.js";import"./FSClickable-BsEc8iHI.js";import"./FSCard-DOwp-V9l.js";import"./VProgressCircular-Ca7Fp11Q.js";import"./color-DAd2dJIE.js";import"./resizeObserver-BdS48m16.js";import"./VIcon-ef9P0Odv.js";import"./FSIcon-BikiybNc.js";import"./useRules-Bpmg6xi7.js";import"./VField-_4f0OeoM.js";import"./index-CcZ3F2bM.js";import"./transition-BVEL_Cnv.js";import"./VLabel-gCKEzUPw.js";import"./VInput-D-36mGWK.js";import"./locale-Cg0C6Moy.js";import"./density-Dp_zkCfD.js";import"./dimensions-DbGEEU80.js";import"./proxiedModel-JzK6JHhO.js";import"./form-DhAzn97I.js";import"./loader-DirtECG2.js";import"./anchor-Ce3a1Oj_.js";import"./rounded-idSslOdv.js";import"./VDefaultsProvider-rHrX99un.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Ov0xN_Hx.js";import"./useTranslations-aJtH5CGl.js";import"./VList-B1NoTgR2.js";import"./VDialog-BLZ0rQaD.js";import"./VOverlay-D-tSP_Gg.js";import"./display-D74v7vg7.js";import"./scopeId-CdDRBDvT.js";import"./router-BdSI2seK.js";import"./ssrBoot-BSKtbDuI.js";import"./border-CUiZ6XeR.js";import"./elevation-C4p0Fj2B.js";import"./index-BRxggfmq.js";import"./VImg-DqEZxS4C.js";import"./FSSlideGroup-BX0UkKdi.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-B3zS2F8_.js";import"./VSlideGroupItem-BuoHA9mk.js";import"./group-B_AHtZDM.js";import"./FSToggleSet-DDZ_-ts7.js";import"./FSWrapGroup-BXAsHxAi.js";import"./FSCheckbox-CM6E8uCY.js";import"./VSelectionControl-CDPTHhw0.js";import"./FSFadeOut-FPHnkeYn.js";import"./FSLoader-DTAq-3Vo.js";import"./FSRadio-DNoTFnQV.js";import"./VSelect-D40GRNzX.js";import"./VMenu-iLNk3WZy.js";import"./filter-VzgWnVmw.js";import"./FSChip-D4m4Movw.js";import"./base-CmdGny12.js";import"./composableFactory-uBEY979O.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./useAutocomplete-BGAR7scz.js";const jt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(m,{argTypes:l})=>({components:{FSAutocompleteTimeZone:i,FSCol:p},props:Object.keys(l),setup(){return{...m}},template:`
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const Vt=["Variations"];export{t as Variations,Vt as __namedExportsOrder,jt as default};
