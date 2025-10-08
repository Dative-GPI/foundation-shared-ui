import{F as a,u as V}from"./FSAutoCompleteAddress-BPCr_lIC.js";import{F as p}from"./FSCol-79-COv64.js";import{b as C}from"./vue.esm-bundler-CocPPKUI.js";import{A as R}from"./address-CE2z3AEI.js";import"./lodash-Zo30T2Bj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useAppLanguageCode-yNRdweo3.js";import"./FSAutocompleteField-DyV5nib5.js";import"./FSSearchField-BChNb6vP.js";import"./FSTextField-CrSrBFtk.js";import"./FSBaseField-BHCTmkg_.js";import"./FSSpan-DrSEJIpr.js";import"./useBreakpoints-DZlz3-56.js";import"./useSlots-D4bv69lA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BvJ7lU5E.js";import"./css-mt76hoAn.js";import"./useColors-DUufJJPH.js";import"./index-_Z9wfsFC.js";import"./theme-DhcBBMcp.js";import"./FSButton-VjwKfCr9.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-6FPdriKA.js";import"./FSCard-JQNJPDhp.js";import"./VProgressCircular-BMkR7ln7.js";import"./color-yBCdco2I.js";import"./resizeObserver-QYhQJr79.js";import"./VIcon-Qz-Il978.js";import"./FSIcon-CKNHHVc2.js";import"./useRules-C3-AmzzE.js";import"./VField-CEhz-0ZK.js";import"./index-DfBdMsnv.js";import"./transition-BuKnRONq.js";import"./VLabel-HvE-XSAC.js";import"./VInput-DhPQv4YC.js";import"./locale-_fONYh-8.js";import"./density-DZuLaB-B.js";import"./dimensions-C9PuMYcl.js";import"./proxiedModel-DvocDLKO.js";import"./loader-B3-0Tc48.js";import"./anchor-C7UfIAXa.js";import"./rounded-Cjf6r1y4.js";import"./VDefaultsProvider-Clc0K3gC.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-lkzvYdnq.js";import"./useTranslations-DJaIYmO0.js";import"./FSDialogMenu-CeOfi1Vz.js";import"./VDialog-Cy-8Xjn8.js";import"./VOverlay-BofqjN94.js";import"./display-BmuJHlI4.js";import"./lazy-CpkO2kQj.js";import"./router-Btsphvl6.js";import"./scopeId-LQkRlG9f.js";import"./FSSlideGroup-BpYleAPY.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BGw3zb-K.js";import"./VSlideGroup-D3ZQzm0f.js";import"./group-CbiZXdYV.js";import"./VSlideGroupItem-BQNaTCX0.js";import"./FSToggleSet-BAu9OVEz.js";import"./FSWrapGroup-CR1U-5kP.js";import"./FSCheckbox-ChCYq6Yz.js";import"./VCheckboxBtn-B3VCaA0L.js";import"./VSelectionControl-BneTlqNp.js";import"./index-BgX1FNqJ.js";import"./FSFadeOut-BaaWP8Xe.js";import"./FSLoader-BeIlBGG_.js";import"./elevation-CsFMJmSN.js";import"./FSRadio-DSN2e6_O.js";import"./VSelect-CKWfJZu2.js";import"./VList-BU_HHy4r.js";import"./ssrBoot-B-cFki3l.js";import"./border-B0huqYee.js";import"./VImg-BaN5zAl6.js";import"./VMenu-uiC9_CJ1.js";import"./filter-CdJ0RAiZ.js";import"./useAutocomplete-D_03bGX7.js";const Ke={title:"Foundation/Shared/Autocompletes/AutocompleteAddress",component:a,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},r={args:{modelValue:new R({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})},render:(e,{argTypes:n})=>({components:{FSAutocompleteAddress:a,FSCol:p},props:Object.keys(n),setup(){return{args:e}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})},o={args:{modelValue:null},render:e=>({components:{FSAutocompleteAddress:a,FSCol:p},setup(){return{args:e}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})},t={args:{modelValue:null},render:e=>({components:{FSAutocompleteAddress:a,FSCol:p},setup(){const{reverseSearch:n}=V(),m=C(null);return{args:e,reverseSearchResult:m,onUpdateModelValue:async s=>{if(s){const F=await n(s.latitude,s.longitude);m.value=F}}}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="onUpdateModelValue"
      />
      <div v-if="reverseSearchResult">
        <p>Reverse Search Result:</p>
        <pre>{{ reverseSearchResult }}</pre>
      </div>
    </FSCol>`})};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var i,c,S;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(A=(v=t.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const Qe=["Default","VariationEmpty","ReverseSearch"];export{r as Default,t as ReverseSearch,o as VariationEmpty,Qe as __namedExportsOrder,Ke as default};
