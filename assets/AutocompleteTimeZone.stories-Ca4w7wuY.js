import{F as i}from"./FSAutocompleteTimeZone-ClMs-b-M.js";import{F as p}from"./FSCol-qfATdd_b.js";import"./vue.esm-bundler-PTWG9x2X.js";import"./FSAutocompleteField-B675gFER.js";import"./FSSearchField-BeidTVNh.js";import"./FSTextField-Du_6UKzN.js";import"./FSBaseField-BF-P1IfK.js";import"./FSSpan-yJEd2pn-.js";import"./useBreakpoints-W7XGW48y.js";import"./useSlots-BG_ZhEqK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-DPcQMiM9.js";import"./css-B90wD3BD.js";import"./useColors-DSUu_QQ4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./FSButton-CqjbOz0n.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./FSClickable-KpP1cmTZ.js";import"./FSCard-CRoBY3gL.js";import"./VProgressCircular-eoxb555W.js";import"./color-CCpgnDIk.js";import"./resizeObserver-C17Kgm90.js";import"./VIcon-DIeegzqR.js";import"./FSIcon-DQMOs0-E.js";import"./useRules-D0leB7Wy.js";import"./VField-w4x2OZhg.js";import"./index-b-ADC_Il.js";import"./transition-QV8dDJB9.js";import"./VLabel-BNJ33aDR.js";import"./VInput-C2FcZlE6.js";import"./locale-Cz_4DTJh.js";import"./density-CznkHGGy.js";import"./dimensions-v18atrWI.js";import"./proxiedModel-CvHSoKPb.js";import"./loader-BqT2mYY7.js";import"./anchor-BcF6JBj1.js";import"./rounded-BbPXzFqc.js";import"./VDefaultsProvider-aDgtYDKn.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BNomsh5u.js";import"./useTranslations-BnE68qER.js";import"./VList-Dqx2Wq64.js";import"./VDialog-DW8Lwwmu.js";import"./VOverlay-CoK8W0Lk.js";import"./display-CESVul9-.js";import"./scopeId-CROTNdIb.js";import"./router-BQjY5_kj.js";import"./ssrBoot-DfimFJGl.js";import"./border-CIYj3WlL.js";import"./elevation-CrSwNJwg.js";import"./index-Dqqa47M6.js";import"./VImg-CBGPWIu-.js";import"./FSSlideGroup-Cnb4B0wP.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BgOE6pA_.js";import"./VSlideGroupItem-C6-4cvTl.js";import"./group-8tJUjatm.js";import"./FSToggleSet-2ksJh9hi.js";import"./FSWrapGroup-8ynKQ69u.js";import"./FSCheckbox-D0eLEsDk.js";import"./VSelectionControl-Fvr0iuTu.js";import"./FSFadeOut-BR2NoxgI.js";import"./FSLoader-DnFcYh1x.js";import"./FSRadio-dWKh4KJE.js";import"./VSelect-D-RlUgcB.js";import"./VMenu-BiZHvw8b.js";import"./filter-qsWrMVs0.js";import"./FSChip-CFp_uIHK.js";import"./base-CmdGny12.js";import"./composableFactory-BVozujU4.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./useAutocomplete-DNfysV-Y.js";const Ot={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(m,{argTypes:l})=>({components:{FSAutocompleteTimeZone:i,FSCol:p},props:Object.keys(l),setup(){return{...m}},template:`
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
