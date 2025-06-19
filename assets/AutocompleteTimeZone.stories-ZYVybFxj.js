import{F as i}from"./FSAutocompleteTimeZone-s0mQZ2sU.js";import{F as p}from"./FSCol-DIPgj7wU.js";import"./vue.esm-bundler-CqZ6aK3I.js";import"./FSAutocompleteField-CAFFfzck.js";import"./FSSearchField-DF9olKJY.js";import"./FSTextField-DckKQdCq.js";import"./FSBaseField-DDV1bgDk.js";import"./FSSpan-B7HDTlg9.js";import"./useBreakpoints-DMrtgY61.js";import"./useSlots-BgbXyH5p.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-udQVJR1p.js";import"./css-BZjDzSZ1.js";import"./useColors-CaMUbg8a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CCooKRqg.js";import"./FSButton-CMFttM_1.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-Bc_GnmK1.js";import"./FSCard-CoFTtRNJ.js";import"./VProgressCircular-DDVR-EZI.js";import"./color-6mal3hP4.js";import"./resizeObserver-C7qOORSR.js";import"./VIcon-beNtbbqt.js";import"./FSIcon-Dy1KglKQ.js";import"./useRules-Cutg_0Yh.js";import"./VField-CIUPtZ0k.js";import"./index-BNfVP6r5.js";import"./transition-C13qRIR1.js";import"./VLabel-BhsUugfE.js";import"./VInput-XpqL7_rK.js";import"./locale-BJmdjC_5.js";import"./density-B3EUR5Bv.js";import"./dimensions-CuS7VcMO.js";import"./proxiedModel-BirLikdP.js";import"./loader-zbNw4pum.js";import"./anchor-DiyvyHyx.js";import"./rounded-T_eKj2ZY.js";import"./VDefaultsProvider-oq6rnkoo.js";import"./forwardRefs-DWGaNmQL.js";import"./index-0XvVa1kA.js";import"./useTranslations-D4m4SVfo.js";import"./VList-GVMOZe4n.js";import"./VDialog-CJ2sxo0Y.js";import"./VOverlay-CHXjpHsK.js";import"./display-Cs3Y1ygD.js";import"./scopeId-BQSHBqq_.js";import"./router-C0dK7NvB.js";import"./ssrBoot-B76fNmmB.js";import"./border-CsMm3Uu5.js";import"./elevation-DCJceMeT.js";import"./index-BSoBU6Pm.js";import"./VImg-BLvS348m.js";import"./FSSlideGroup-CXGL0bk9.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CYg1KVZY.js";import"./VSlideGroupItem-BXZ5gf7q.js";import"./group-1sntWZNj.js";import"./FSToggleSet-CHUHElBL.js";import"./FSWrapGroup-nrJVBSUF.js";import"./FSCheckbox-4_vPFX9A.js";import"./VSelectionControl-asaj2cFo.js";import"./FSFadeOut-cwNcN6_P.js";import"./FSLoader-DbCBZFXe.js";import"./FSRadio-0ryRjk2L.js";import"./VSelect-Bk1kuuo2.js";import"./VMenu-C6lRy5En.js";import"./filter-DhzaDDBp.js";import"./FSChip-BL9vxD6R.js";import"./base-CmdGny12.js";import"./composableFactory-BJClBu0g.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./useAutocomplete-C5-KEZR8.js";const Ot={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(m,{argTypes:l})=>({components:{FSAutocompleteTimeZone:i,FSCol:p},props:Object.keys(l),setup(){return{...m}},template:`
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
