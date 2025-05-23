import{F as i}from"./FSAutocompleteTimeZone-C1Daz_Ud.js";import{F as p}from"./FSCol-Be93XvPD.js";import"./vue.esm-bundler-CM4TIH-Q.js";import"./FSAutocompleteField-DxnPXb84.js";import"./FSSearchField-BpYj47_i.js";import"./FSTextField-D1GTNUtI.js";import"./FSBaseField-B4z0jav7.js";import"./FSSpan-BXQyelfo.js";import"./useBreakpoints-DsICqL2A.js";import"./useSlots-c6yg-hhg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-C47sfGk6.js";import"./css-D38lF7BW.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./FSButton-OpnenzvL.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-DsGMo-Qs.js";import"./FSCard-ByrGPHX6.js";import"./VProgressCircular-C-4f-PXJ.js";import"./color-Bo6l13w9.js";import"./resizeObserver-Cb3oz2nO.js";import"./VIcon-GfKFLOEw.js";import"./FSIcon-B4J40lse.js";import"./useRules-B12Yr5ve.js";import"./VField-D97ztcGG.js";import"./index-BJH4L2FX.js";import"./transition-DMoMR0kB.js";import"./VLabel-Ca5QW7tf.js";import"./VInput-DXPqvHKO.js";import"./locale-BqFH1fBg.js";import"./density-Dl4v3sM7.js";import"./dimensions-DW-k5kP_.js";import"./proxiedModel-DKx29MO-.js";import"./loader-CQB_6PPx.js";import"./anchor-DCFmATqq.js";import"./rounded-CDCr0BOq.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DWgrY6Dg.js";import"./useTranslations-CLqRehXT.js";import"./VList-CSxQCBMo.js";import"./VDialog-CgsoTmCe.js";import"./VOverlay-DtEUynQC.js";import"./display-CUGteI3_.js";import"./scopeId-COl1Iexy.js";import"./router-BXF-7Xxx.js";import"./ssrBoot-BDHgcVA9.js";import"./border-CvDIZQGy.js";import"./elevation-DgpWsjTu.js";import"./index-BkfcJ8bv.js";import"./VImg-D7XF-hIS.js";import"./FSSlideGroup-BA1MtzDE.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-COmxHR4E.js";import"./VSlideGroupItem-41bDxGuE.js";import"./group-3MU8bQUc.js";import"./FSToggleSet-DEeraGIg.js";import"./FSWrapGroup-Fe7qxaBI.js";import"./FSCheckbox-hfVXQFUK.js";import"./VSelectionControl-MVg9W9ha.js";import"./FSFadeOut-PZiJk41N.js";import"./FSLoader-_1jWS2ee.js";import"./FSRadio-vQr5ac4u.js";import"./VSelect-DT2KUlZG.js";import"./VMenu-sKuqJ8jm.js";import"./filter-DHa7wap7.js";import"./FSChip-Eibfjf6x.js";import"./base-CmdGny12.js";import"./composableFactory-B6T2dm2_.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./useAutocomplete-C46pWvzP.js";const Ot={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(m,{argTypes:l})=>({components:{FSAutocompleteTimeZone:i,FSCol:p},props:Object.keys(l),setup(){return{...m}},template:`
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
