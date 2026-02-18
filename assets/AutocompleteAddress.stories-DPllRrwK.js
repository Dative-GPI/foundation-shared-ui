import{F as a,u as V}from"./FSAutoCompleteAddress-LD0AC5VB.js";import{F as s}from"./FSCol-D_lbFmZy.js";import{e as C}from"./vue.esm-bundler-D5n7z5qz.js";import{A as R}from"./address-CE2z3AEI.js";import"./lodash-DyRFk5BS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useAppLanguageCode-CWFK3Ooe.js";import"./FSAutocompleteField-GC0-NSch.js";import"./FSSearchField-CpphZadi.js";import"./FSTextField-Cclf6IX8.js";import"./FSBaseField-Buivlp1M.js";import"./FSSpan-BN7wkmby.js";import"./useBreakpoints-CEzKC_o8.js";import"./useSlots-CoecqEnp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useColors-BM_SKUZx.js";import"./theme-Cdiv_FYE.js";import"./FSButton-CZRwWCRJ.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-CJ7Lhzl1.js";import"./FSIcon-BJsIM37h.js";import"./VIcon-mGJe0MYK.js";import"./color-BW36qAym.js";import"./useRender-BcOya-6A.js";import"./icons-DR_vovBH.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./FSCard-BH6GLU3V.js";import"./VProgressCircular-D6ZFUt0S.js";import"./resizeObserver-Z3fjh7Cv.js";import"./useRules-R3Ldkrx4.js";import"./VField-B1xdFTJF.js";import"./index-6jMyctoo.js";import"./transition-DbItRNv8.js";import"./VLabel-D-9L6eJP.js";import"./VInput-bTNISmSY.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./density-BnAGl-Nw.js";import"./dimensions-B7sNhH2O.js";import"./loader-COXi3ZW_.js";import"./anchor-CPKk15qm.js";import"./rounded-lfTNxM9v.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BKpPdzm5.js";import"./useTranslations-CFCS6HA-.js";import"./FSDialogMenu-553iq_m_.js";import"./VDialog-B2OpqrDi.js";import"./VOverlay-DHaepw21.js";import"./display-D8bdLPBN.js";import"./lazy-C77w73YC.js";import"./router-BDiSnJ53.js";import"./scopeId-DC5duiFx.js";import"./FSSlideGroup-IW38j_vX.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BE_tlhjQ.js";import"./VSlideGroup-BxUK8FWF.js";import"./goto-BwndLEHi.js";import"./group-BRhJCq_i.js";import"./VSlideGroupItem-CYOAdS4m.js";import"./FSToggleSet-BOI7_zgs.js";import"./FSWrapGroup-DzpSjUDj.js";import"./FSCheckbox-CpWOjTw-.js";import"./VCheckboxBtn-t5XcVMJr.js";import"./VSelectionControl-SdigZO9B.js";import"./index-BYo1BiTt.js";import"./FSFadeOut-C918yX_r.js";import"./FSLoader-Cl8hDT8j.js";import"./elevation-JukLG-n6.js";import"./FSRadio-BXAjRcH_.js";import"./VSelect-tiqwHlQo.js";import"./VList-DlQk11w2.js";import"./ssrBoot-C79LbZhX.js";import"./variant-j8rFA7nZ.js";import"./VImg-BlUyfKKc.js";import"./VDivider-Yc-HesXU.js";import"./VMenu-en6JpVrG.js";import"./filter-DlYw_aWm.js";import"./useAutocomplete-s5aYGVYo.js";const $e={title:"Foundation/Shared/Autocompletes/AutocompleteAddress",component:a,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},r={args:{modelValue:new R({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})},render:(e,{argTypes:p})=>({components:{FSAutocompleteAddress:a,FSCol:s},props:Object.keys(p),setup(){return{args:e}},template:`
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
}`,...(A=(v=t.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const er=["Default","VariationEmpty","ReverseSearch"];export{r as Default,t as ReverseSearch,o as VariationEmpty,er as __namedExportsOrder,$e as default};
