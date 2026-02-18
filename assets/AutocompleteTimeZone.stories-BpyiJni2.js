import{F as i}from"./FSAutocompleteTimeZone-rZdwW4L4.js";import{F as l}from"./FSCol-BwxAijHz.js";import"./vue.esm-bundler-B9lxvfDw.js";import"./FSAutocompleteField-CPNDx3_i.js";import"./FSSearchField-OT9cCDCH.js";import"./FSTextField-mjFAiq2r.js";import"./FSBaseField-CSo0Z4y4.js";import"./FSSpan-COYXSDbp.js";import"./useBreakpoints-Dc84uxeD.js";import"./useSlots-BioZKQqg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CFa9RNor.js";import"./css-BHrR5cp2.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./FSButton-CxA5c6KR.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./FSCard-BwbWypiX.js";import"./VProgressCircular-DSOzHF7B.js";import"./color-CLtf7Qrc.js";import"./useRender-DM2jvMPN.js";import"./resizeObserver-DjRdaT-k.js";import"./VIcon-DPcX_RaC.js";import"./icons-B5bBvhw0.js";import"./FSIcon-kCffLiJ2.js";import"./useRules-Cun-4MZo.js";import"./VField-BoZICv48.js";import"./index-7AXDWkBX.js";import"./transition-Dh_EAQcC.js";import"./VLabel-CT69iMfY.js";import"./VInput-DcZY3iGt.js";import"./locale-C647X9dJ.js";import"./proxiedModel-DRvKxps3.js";import"./density-DvMOIaQw.js";import"./dimensions-n1mPaUbN.js";import"./loader-CaGstafT.js";import"./anchor-ByUPiJZt.js";import"./rounded-BrvRf1BO.js";import"./VDefaultsProvider-BurwYF19.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-Dli51uy9.js";import"./useTranslations-AmWs0SAL.js";import"./FSDialogMenu-DW8xl5CQ.js";import"./VDialog-CdFKtTkF.js";import"./VOverlay-DhmZjj8a.js";import"./display-BzNfeHa8.js";import"./lazy-B_HJlRZe.js";import"./router-BlaQ2-ft.js";import"./scopeId-4Hx_BsCg.js";import"./FSSlideGroup-CS_aA5Ur.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BETncHzg.js";import"./VSlideGroup-6AACxYIN.js";import"./goto-BiKnNwZ0.js";import"./group-BLkb5Gt4.js";import"./VSlideGroupItem-C_H8qOqk.js";import"./FSToggleSet-ByYfXxag.js";import"./FSWrapGroup-rn2r_UVH.js";import"./FSCheckbox-8fnFFMk6.js";import"./VCheckboxBtn-BM2tTzJT.js";import"./VSelectionControl-COH1jBNJ.js";import"./index-EdIR5CJS.js";import"./FSFadeOut-DwiC6ECo.js";import"./FSLoader-FkDR4IbG.js";import"./elevation-DZ0Sccyb.js";import"./FSRadio-0LKeB0Ro.js";import"./VSelect-DVFoBPCa.js";import"./VList-CuJqKfkq.js";import"./ssrBoot-butIQ2KL.js";import"./variant-BIgPYL9J.js";import"./VImg-UzuohEtG.js";import"./VDivider-CJxliPT_.js";import"./VMenu-etFegoZJ.js";import"./filter-7QmGX2th.js";import"./FSChip-CnWvj3Fb.js";import"./base-CmdGny12.js";import"./composableFactory-CzIPMomJ.js";import"./serviceFactory-DGf7dwWo.js";import"./lodash-DyRFk5BS.js";import"./useAutocomplete-DCXZYzKe.js";const Gt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(m,{argTypes:p})=>({components:{FSAutocompleteTimeZone:i,FSCol:l},props:Object.keys(p),setup(){return{...m}},template:`
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
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const Ht=["Variations"];export{t as Variations,Ht as __namedExportsOrder,Gt as default};
