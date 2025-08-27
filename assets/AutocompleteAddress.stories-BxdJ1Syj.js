import{F as a,u as V}from"./FSAutoCompleteAddress-tpfQPq2R.js";import{F as p}from"./FSCol-Bfhiyt6Y.js";import{b as C}from"./vue.esm-bundler-PONd4AmC.js";import{A as R}from"./address-CE2z3AEI.js";import"./lodash-Zo30T2Bj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useAppLanguageCode-fPbUdbod.js";import"./FSAutocompleteField-DcUdpD-9.js";import"./FSSearchField-sQ9DfSvh.js";import"./FSTextField-DpTxivyj.js";import"./FSBaseField-ynwJeuM4.js";import"./FSSpan-DqsaA-ji.js";import"./useBreakpoints-RTs-XAJF.js";import"./useSlots-nyIcwo6G.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-C-b-hpWa.js";import"./css-BeoQuAfr.js";import"./useColors-WMY9wD-z.js";import"./index-_Z9wfsFC.js";import"./theme-DW7AHeJn.js";import"./FSButton-BtOsEP4C.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-BpeLEfG7.js";import"./FSCard-B7av1ouT.js";import"./VProgressCircular-D57tYVQX.js";import"./color-CQ7P2KsY.js";import"./resizeObserver-BAwzmH4Y.js";import"./VIcon-shEmQARK.js";import"./FSIcon-wf_hiRKr.js";import"./useRules-CT5DWk6c.js";import"./VField-BsvLa1Vn.js";import"./index-COu1mqSp.js";import"./transition-BpYTYsmy.js";import"./VLabel-B2dMuALu.js";import"./VInput-CX-j4Zl6.js";import"./locale-CoLhg8Wl.js";import"./density-DM1TPnyn.js";import"./dimensions-D04OQyPe.js";import"./proxiedModel-BMHfYIia.js";import"./loader-zqGHJTJd.js";import"./anchor-rLQXsCC5.js";import"./rounded-Cwlpymxx.js";import"./VDefaultsProvider--dbql3OT.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-CzkqP9_q.js";import"./useTranslations-_Q1DYra_.js";import"./FSDialogMenu-XBy5gEQ2.js";import"./VDialog-DuPuMCeo.js";import"./VOverlay-DZqv3aZJ.js";import"./display-D1WOGNJY.js";import"./lazy-PL0gnfDR.js";import"./router-DS8hXbpn.js";import"./scopeId-DFcjERLl.js";import"./FSSlideGroup-BKLRFR6r.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-PE5YDRXp.js";import"./VSlideGroupItem-B4B7QRhR.js";import"./group-QLjCrFp5.js";import"./FSToggleSet-DoOlvhp-.js";import"./FSWrapGroup-Dayjp45z.js";import"./FSCheckbox-B_D3nKx1.js";import"./VCheckboxBtn-CYnHxMSC.js";import"./VSelectionControl-BAKsAS1a.js";import"./index-aCfcr9Gd.js";import"./FSFadeOut-Dik6Imqk.js";import"./FSLoader-B0jwcdOS.js";import"./elevation-D2k7D5K3.js";import"./FSRadio-CSYtdY7R.js";import"./VSelect-AOkN1lp-.js";import"./VList-BCmGq4kQ.js";import"./ssrBoot-DufuUSU7.js";import"./border-BL_XAYaf.js";import"./VImg-AonvEV9k.js";import"./VMenu-FXIUZrjg.js";import"./filter-D4n0RRF9.js";import"./useAutocomplete-DsvrErHM.js";const He={title:"Foundation/Shared/Autocompletes/AutocompleteAddress",component:a,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},r={args:{modelValue:new R({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})},render:(e,{argTypes:n})=>({components:{FSAutocompleteAddress:a,FSCol:p},props:Object.keys(n),setup(){return{args:e}},template:`
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
    </FSCol>`})},t={args:{modelValue:null},render:e=>({components:{FSAutocompleteAddress:a,FSCol:p},setup(){const{reverseSearch:n}=V(),l=C(null);return{args:e,reverseSearchResult:l,onUpdateModelValue:async s=>{if(s){const F=await n(s.latitude,s.longitude);l.value=F}}}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="onUpdateModelValue"
      />
      <div v-if="reverseSearchResult">
        <p>Reverse Search Result:</p>
        <pre>{{ reverseSearchResult }}</pre>
      </div>
    </FSCol>`})};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(A=(v=t.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const Ke=["Default","VariationEmpty","ReverseSearch"];export{r as Default,t as ReverseSearch,o as VariationEmpty,Ke as __namedExportsOrder,He as default};
