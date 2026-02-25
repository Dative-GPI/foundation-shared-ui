import{F as i}from"./FSAutocompleteTimeZone-B4LPdTEp.js";import{F as l}from"./FSCol-D_lbFmZy.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSAutocompleteField-CaUnXkll.js";import"./FSSearchField-Cc3wHhUa.js";import"./FSTextField-DVC6JxU9.js";import"./FSBaseField-C_kMSpMl.js";import"./FSSpan-BN7wkmby.js";import"./useBreakpoints-CEzKC_o8.js";import"./useSlots-CoecqEnp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./FSButton-M9GMz66l.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-015IEZHy.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./icons-DbptYgqQ.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSCard-DENSLTM_.js";import"./VProgressCircular-BsmUxqlD.js";import"./resizeObserver-CpF7iUII.js";import"./useRules-R3Ldkrx4.js";import"./VField-BWZy72Xk.js";import"./index-Bo6vw90T.js";import"./transition-gfLL8RoD.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./locale-n4v42L7l.js";import"./proxiedModel-Cv3qT1cZ.js";import"./density-BTT1solu.js";import"./dimensions-D_nx6Jbk.js";import"./loader-CAuY8UYG.js";import"./VProgressLinear-CI-Q4csR.js";import"./anchor-tlySGI4g.js";import"./rounded-BSNeeq4o.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-u79WnTSR.js";import"./useTranslations-CFCS6HA-.js";import"./FSDialogMenu-B52P8q-X.js";import"./VDialog-C5WNai-3.js";import"./VOverlay-BApTxsTF.js";import"./display-DvHDH61C.js";import"./lazy-Bqido2cx.js";import"./router-R_WRJyUs.js";import"./scopeId-DI6aT8IG.js";import"./dialog-transition-CBLjbvr6.js";import"./FSSlideGroup-BnnHyPAm.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BxxPSm84.js";import"./VSlideGroup-BJAU1y7G.js";import"./goto-nADK4Ssb.js";import"./group-Cx5pids1.js";import"./VSlideGroupItem-B1P3g7mq.js";import"./FSToggleSet-BO0lhIHf.js";import"./FSWrapGroup-ES-pUhBN.js";import"./FSCheckbox-DMg4fEo0.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./index-C2v-jVLO.js";import"./FSFadeOut-YXyyFCAB.js";import"./FSLoader-uhE9mCg0.js";import"./elevation-62d6MvS5.js";import"./FSRadio-CKU_VsjQ.js";import"./VSelect-Dn3JzDeK.js";import"./VList-C0qufsOv.js";import"./ssrBoot-C79LbZhX.js";import"./border-5JTJ2U38.js";import"./variant-CRuOwF35.js";import"./VImg-CFhtVVj8.js";import"./VDivider-IiSngj1L.js";import"./VMenu-DOme5rNf.js";import"./filter-CjCsq5wT.js";import"./FSChip-BmAEKlmX.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-CyDQptGk.js";import"./lodash-DyRFk5BS.js";import"./useAutocomplete-D-okIbhq.js";const Lt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(m,{argTypes:p})=>({components:{FSAutocompleteTimeZone:i,FSCol:l},props:Object.keys(p),setup(){return{...m}},template:`
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
    </FSCol>`})};var o,e,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const Mt=["Variations"];export{t as Variations,Mt as __namedExportsOrder,Lt as default};
