import{F as a,u as V}from"./FSAutoCompleteAddress-BiJNP2DF.js";import{F as s}from"./FSCol-DedFW0nl.js";import{e as C}from"./vue.esm-bundler-C5-CUMHT.js";import{A as R}from"./address-CE2z3AEI.js";import"./eventQueue-D85hWBFd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./uuid-DTaye2KM.js";import"./useAppLanguageCode-CembXc6P.js";import"./FSAutocompleteField-Dd-bVP0e.js";import"./FSSearchField-DfSRPhxD.js";import"./FSTextField-V-eBW8wn.js";import"./FSBaseField-B1fPD4-R.js";import"./FSSpan-D6aG51_c.js";import"./useBreakpoints-pPMhsL5T.js";import"./useSlots-ol4Nk6ew.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-C8aYwBu-.js";import"./css-DSFbdPon.js";import"./useColors-BAnxS_-e.js";import"./theme-CB6As9Cd.js";import"./FSButton-DohpVEzP.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./FSText-C8rmUTxK.js";import"./FSIcon-CNpmwcOd.js";import"./VIcon-IlEzlDWp.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./icons-CucLNLjN.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSCard-DYe1QD8j.js";import"./VProgressCircular-D7Gk7a1O.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./useRules-D4S0gmXa.js";import"./VTextField-CPakm9mu.js";import"./VField-Cbr0bjXl.js";import"./index-pS3mXfMR.js";import"./transition-CgRUW3r8.js";import"./VLabel-COLF1QPQ.js";import"./VInput-Y0iB4nur.js";import"./locale-BNkeanE6.js";import"./proxiedModel-CV-HTW34.js";import"./density-qUtw3dk7.js";import"./dimensions-Bm76csmg.js";import"./loader-CVb0Ac9O.js";import"./VProgressLinear-F46fcvb0.js";import"./anchor-Dj2AEc5N.js";import"./rounded-Ctowy803.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B3ZVJx30.js";import"./useTranslations-DAi7IZoP.js";import"./FSDialogMenu-D2-2fAf2.js";import"./VDialog-CSacG24V.js";import"./VOverlay-CG3iG1zZ.js";import"./display-IUfV935l.js";import"./lazy-DXVvciW4.js";import"./router-CTGX-puL.js";import"./scopeId-DKs4U9S0.js";import"./dialog-transition-DRDndVEC.js";import"./FSSlideGroup-5yThapiu.js";import"./FSButtonNextIcon-TA3Aju3l.js";import"./VSlideGroup-Bd_pvRRU.js";import"./goto-Ba_J3Vzv.js";import"./group-B4VRq_l_.js";import"./VSlideGroupItem-BppNUl7y.js";import"./FSToggleSet-yqzW0yBe.js";import"./FSWrapGroup-DMf-egfq.js";import"./FSCheckbox-BwFpn-kB.js";import"./VCheckboxBtn-ODJx5um2.js";import"./VSelectionControl-D13_Swsb.js";import"./index-asyjLxvi.js";import"./FSFadeOut-DOLGFW1u.js";import"./FSLoader-BTZOtjrt.js";import"./elevation-DfTZ1KyC.js";import"./FSRadio-msJSYj1I.js";import"./VSelect-BkR6mgZ1.js";import"./VList-BVDcEHsi.js";import"./ssrBoot-ClVRhrXI.js";import"./border-DJaidMiz.js";import"./variant-BJccJztY.js";import"./VImg-DXeUU_wB.js";import"./VDivider-Ck2C5rfW.js";import"./VMenu-dxHuUw__.js";import"./filter-BTy0FM8E.js";import"./useAutocomplete-Cfsu5mWD.js";const ar={title:"Shared/Components/Autocompletes/AutocompleteAddress",component:a,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},r={args:{modelValue:new R({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})},render:(e,{argTypes:p})=>({components:{FSAutocompleteAddress:a,FSCol:s},props:Object.keys(p),setup(){return{args:e}},template:`
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
