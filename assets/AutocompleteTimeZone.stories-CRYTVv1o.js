import{F as i}from"./FSAutocompleteTimeZone-D8WXr3NQ.js";import{F as l}from"./FSCol-KRtq6OYO.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSAutocompleteField-nltmptol.js";import"./FSSearchField-Dnz4Beq9.js";import"./FSTextField-Cq4gI6mX.js";import"./FSBaseField-Bph8nCfp.js";import"./FSSpan-B28b2m0n.js";import"./useBreakpoints-DO2FQykY.js";import"./useSlots-DEXetpJf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./FSButton-BqreeKOn.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DIbyStIN.js";import"./FSIcon-BcHBVf_o.js";import"./VIcon-Cu6WQqXu.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSCard-DxY0aXhp.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./useRules-eFcMZq7y.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./index-ByfGjSW7.js";import"./transition-a5pzBS6c.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./density-CE2FkSgs.js";import"./dimensions-CS_qJJhy.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./anchor-Se7MGGLO.js";import"./rounded-CS1_z6Jk.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Blv54jCg.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B4rZgXN-.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./FSDialogMenu-BzRN-uoP.js";import"./VDialog-CmTscL9b.js";import"./VOverlay-BuHPOPgF.js";import"./display-QVN4B5Qw.js";import"./lazy-sPNxwuRm.js";import"./router-D36qODsG.js";import"./scopeId-DEhVAmth.js";import"./dialog-transition-B9S_00bc.js";import"./FSSlideGroup-BbqArISU.js";import"./FSButtonNextIcon-CyemLlRb.js";import"./VSlideGroup-B-JqmwGu.js";import"./goto-CvfYl6LX.js";import"./group-BLkYT3DE.js";import"./VSlideGroupItem-DS171Ouj.js";import"./FSToggleSet-D0wxZ1Az.js";import"./FSWrapGroup-Ddblgb9F.js";import"./FSCheckbox-D4XH1I7L.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./index-B-eFr4Nw.js";import"./FSFadeOut-W61q8jFE.js";import"./FSLoader-BoDinVVO.js";import"./elevation-DQ_qKX67.js";import"./FSRadio-Dd1EMADi.js";import"./VSelect-CVWNfrM9.js";import"./VList-BhDySjdU.js";import"./ssrBoot-BimrXMWA.js";import"./border-D8z1QLxT.js";import"./variant-DNfp8Yqp.js";import"./VImg-BdZHkGCX.js";import"./VDivider-B9VczfM4.js";import"./VMenu-BCj9c0xY.js";import"./filter-C4s97JnQ.js";import"./FSChip-Cyh73OPt.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./base-CmdGny12.js";import"./useAutocomplete-MBDlwHqX.js";const Nt={title:"Shared/Components/Autocompletes/AutocompleteTimeZone",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(m,{argTypes:p})=>({components:{FSAutocompleteTimeZone:i,FSCol:l},props:Object.keys(p),setup(){return{...m}},template:`
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
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const Pt=["Variations"];export{t as Variations,Pt as __namedExportsOrder,Nt as default};
