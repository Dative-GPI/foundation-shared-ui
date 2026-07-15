import{F as a,u as V}from"./FSAutoCompleteAddress-QcfOGV-o.js";import{F as s}from"./FSCol-KRtq6OYO.js";import{e as C}from"./vue.esm-bundler-NVdFPFZB.js";import{A as R}from"./address-CE2z3AEI.js";import"./eventQueue-D85hWBFd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./uuid-DTaye2KM.js";import"./useAppLanguageCode-CFDnQcKu.js";import"./FSAutocompleteField-nltmptol.js";import"./FSSearchField-Dnz4Beq9.js";import"./FSTextField-Cq4gI6mX.js";import"./FSBaseField-Bph8nCfp.js";import"./FSSpan-B28b2m0n.js";import"./useBreakpoints-DO2FQykY.js";import"./useSlots-DEXetpJf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useColors-v3I-6cBg.js";import"./theme-DuZszYeY.js";import"./FSButton-BqreeKOn.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DIbyStIN.js";import"./FSIcon-BcHBVf_o.js";import"./VIcon-Cu6WQqXu.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSCard-DxY0aXhp.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./useRules-eFcMZq7y.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./index-ByfGjSW7.js";import"./transition-a5pzBS6c.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./density-CE2FkSgs.js";import"./dimensions-CS_qJJhy.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./anchor-Se7MGGLO.js";import"./rounded-CS1_z6Jk.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Blv54jCg.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B4rZgXN-.js";import"./useTranslations-D5uJM3hx.js";import"./FSDialogMenu-BzRN-uoP.js";import"./VDialog-CmTscL9b.js";import"./VOverlay-BuHPOPgF.js";import"./display-QVN4B5Qw.js";import"./lazy-sPNxwuRm.js";import"./router-D36qODsG.js";import"./scopeId-DEhVAmth.js";import"./dialog-transition-B9S_00bc.js";import"./FSSlideGroup-BbqArISU.js";import"./FSButtonNextIcon-CyemLlRb.js";import"./VSlideGroup-B-JqmwGu.js";import"./goto-CvfYl6LX.js";import"./group-BLkYT3DE.js";import"./VSlideGroupItem-DS171Ouj.js";import"./FSToggleSet-D0wxZ1Az.js";import"./FSWrapGroup-Ddblgb9F.js";import"./FSCheckbox-D4XH1I7L.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./index-B-eFr4Nw.js";import"./FSFadeOut-W61q8jFE.js";import"./FSLoader-BoDinVVO.js";import"./elevation-DQ_qKX67.js";import"./FSRadio-Dd1EMADi.js";import"./VSelect-CVWNfrM9.js";import"./VList-BhDySjdU.js";import"./ssrBoot-BimrXMWA.js";import"./border-D8z1QLxT.js";import"./variant-DNfp8Yqp.js";import"./VImg-BdZHkGCX.js";import"./VDivider-B9VczfM4.js";import"./VMenu-BCj9c0xY.js";import"./filter-C4s97JnQ.js";import"./useAutocomplete-MBDlwHqX.js";const ar={title:"Shared/Components/Autocompletes/AutocompleteAddress",component:a,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},r={args:{modelValue:new R({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})},render:(e,{argTypes:p})=>({components:{FSAutocompleteAddress:a,FSCol:s},props:Object.keys(p),setup(){return{args:e}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})},o={args:{modelValue:null},render:e=>({components:{FSAutocompleteAddress:a,FSCol:s},setup(){return{args:e}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})},t={args:{modelValue:null},render:e=>({components:{FSAutocompleteAddress:a,FSCol:s},setup(){const{reverseSearch:p}=V(),l=C(null);return{args:e,reverseSearchResult:l,onUpdateModelValue:async m=>{if(m){const F=await p(m.latitude,m.longitude);l.value=F}}}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="onUpdateModelValue"
      />
      <div v-if="reverseSearchResult">
        <p>Reverse Search Result:</p>
        <pre>{{ reverseSearchResult }}</pre>
      </div>
    </FSCol>`})};var n,d,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    modelValue: new Address({
      placeId: "ChIJg7vu-43P9EcRRNrbyDxFMDY",
      placeLabel: 'Dative, Rue de Norvège, Colombier-Saugnieu, France',
      formattedAddress: ' 100 Rue de Norvège, 69125 Colombier-Saugnieu',
      locality: 'Colombier-Saugnieu',
      country: 'France',
      latitude: 45.711741,
      longitude: 5.071675
    })
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteAddress,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>\`
  })
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,c,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    modelValue: null
  },
  render: args => ({
    components: {
      FSAutocompleteAddress,
      FSCol
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>\`
  })
}`,...(S=(c=o.parameters)==null?void 0:c.docs)==null?void 0:S.source}}};var g,v,A;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    modelValue: null
  },
  render: args => ({
    components: {
      FSAutocompleteAddress,
      FSCol
    },
    setup() {
      const {
        reverseSearch
      } = useAddress();
      const reverseSearchResult = ref<Address | null>(null);
      const onUpdateModelValue = async (value: Address | null) => {
        if (value) {
          const address = await reverseSearch(value.latitude, value.longitude);
          reverseSearchResult.value = address;
        }
      };
      return {
        args,
        reverseSearchResult,
        onUpdateModelValue
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="onUpdateModelValue"
      />
      <div v-if="reverseSearchResult">
        <p>Reverse Search Result:</p>
        <pre>{{ reverseSearchResult }}</pre>
      </div>
    </FSCol>\`
  })
}`,...(A=(v=t.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const pr=["Default","VariationEmpty","ReverseSearch"];export{r as Default,t as ReverseSearch,o as VariationEmpty,pr as __namedExportsOrder,ar as default};
