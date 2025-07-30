import{d as j,b as O,c as B,B as J,m as K,I as G,J as Y}from"./vue.esm-bundler-PONd4AmC.js";import{_ as P}from"./lodash-Zo30T2Bj.js";import{A as b}from"./address-CE2z3AEI.js";import{u as z}from"./useAppLanguageCode-fPbUdbod.js";import{F as x}from"./FSAutocompleteField-DJcNVJsm.js";import{u as H}from"./useAutocomplete-DsvrErHM.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as _}from"./FSCol-Bfhiyt6Y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSearchField-ChPOPxqV.js";import"./FSTextField-Du9Dg0zN.js";import"./FSBaseField-C48d8q8m.js";import"./FSSpan-DxKJLsSl.js";import"./useBreakpoints-RTs-XAJF.js";import"./useSlots-nyIcwo6G.js";import"./FSRow-C-b-hpWa.js";import"./css-BeoQuAfr.js";import"./useColors-WMY9wD-z.js";import"./index-_Z9wfsFC.js";import"./theme-DW7AHeJn.js";import"./FSButton-C_cDbGvj.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-BpeLEfG7.js";import"./FSCard-B7av1ouT.js";import"./VProgressCircular-D57tYVQX.js";import"./color-CQ7P2KsY.js";import"./resizeObserver-BAwzmH4Y.js";import"./VIcon-shEmQARK.js";import"./FSIcon-wf_hiRKr.js";import"./useRules-CT5DWk6c.js";import"./VField-D3hGYPrZ.js";import"./index-COu1mqSp.js";import"./transition-BpYTYsmy.js";import"./VLabel-B2dMuALu.js";import"./VInput-CX-j4Zl6.js";import"./locale-CoLhg8Wl.js";import"./density-DM1TPnyn.js";import"./dimensions-D04OQyPe.js";import"./proxiedModel-BMHfYIia.js";import"./loader-zqGHJTJd.js";import"./anchor-rLQXsCC5.js";import"./rounded-Cwlpymxx.js";import"./VDefaultsProvider--dbql3OT.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CzkqP9_q.js";import"./useTranslations-_Q1DYra_.js";import"./FSDialogMenu-Crze0iUo.js";import"./VDialog-CkmtLqSZ.js";import"./VOverlay-C4y2redN.js";import"./display-D1WOGNJY.js";import"./lazy-PL0gnfDR.js";import"./router-DS8hXbpn.js";import"./scopeId-DFcjERLl.js";import"./FSSlideGroup-G-1eJ8xl.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BfAvcYY6.js";import"./VSlideGroupItem-B4B7QRhR.js";import"./group-QLjCrFp5.js";import"./FSToggleSet-BSMIUsc9.js";import"./FSWrapGroup-Dayjp45z.js";import"./FSCheckbox-B1Q6_lSw.js";import"./VCheckboxBtn-CYnHxMSC.js";import"./VSelectionControl-BAKsAS1a.js";import"./index-aCfcr9Gd.js";import"./FSFadeOut-Dik6Imqk.js";import"./FSLoader-B0jwcdOS.js";import"./elevation-D2k7D5K3.js";import"./FSRadio-CdtLWkJD.js";import"./VSelect-CyCOXYrT.js";import"./VList-BCmGq4kQ.js";import"./ssrBoot-DufuUSU7.js";import"./border-BL_XAYaf.js";import"./VImg-AonvEV9k.js";import"./VMenu-DAcX0VlQ.js";import"./filter-D4n0RRF9.js";const T=()=>{const{languageCode:t}=z();let n=!1,p,c,d,i;const u=async()=>{await window.initMap,p=await S(),c=new google.maps.places.AutocompleteService,d=new google.maps.places.PlacesService(document.createElement("div")),i=new google.maps.places.AutocompleteSessionToken,n=!0},g=async r=>(n||await u(),(await e(r)).map(a=>({id:a.place_id,label:a.description}))),f=async r=>{var a,l;n||await u();const o=await w(r.id);if(i=new google.maps.places.AutocompleteSessionToken,o.address_components&&o.formatted_address&&o.geometry)return new b({formattedAddress:o.formatted_address,locality:V(o.address_components,"locality"),country:V(o.address_components,"country"),latitude:((a=o.geometry.location)==null?void 0:a.lat())??0,longitude:((l=o.geometry.location)==null?void 0:l.lng())??0,placeId:r.id,placeLabel:r.label});throw new Error("missing informations")},A=async(r,o)=>(n||await u(),v(r,o).then(a=>{var l,m;if(a.length>0){const s=a[0];if(s.address_components&&s.formatted_address&&s.geometry)return new b({formattedAddress:s.formatted_address,locality:V(s.address_components,"locality"),country:V(s.address_components,"country"),latitude:((l=s.geometry.location)==null?void 0:l.lat())??0,longitude:((m=s.geometry.location)==null?void 0:m.lng())??0,placeId:s.place_id,placeLabel:s.formatted_address})}throw new Error("missing informations")})),S=async()=>navigator.geolocation?new Promise(r=>{navigator.geolocation.getCurrentPosition(o=>{r({lat:o.coords.latitude,lng:o.coords.longitude})},()=>r(null))}):null,e=r=>new Promise((o,a)=>{var m;const l=(m=t.value)==null?void 0:m.split("-")[0];c.getPlacePredictions({input:r,region:l,language:l,sessionToken:i,locationBias:p},function(s,R){R!=google.maps.places.PlacesServiceStatus.OK||!s?a(R):o(s)})}),v=(r,o)=>new Promise((a,l)=>{new google.maps.Geocoder().geocode({location:{lat:r,lng:o}},(m,s)=>{s!=google.maps.GeocoderStatus.OK||!m?l(s):a(m)})}),w=r=>new Promise((o,a)=>{d.getDetails({placeId:r,sessionToken:i,fields:["formatted_address","geometry","address_components","name"]},(l,m)=>{m!=google.maps.places.PlacesServiceStatus.OK||!l?a(m):o(l)})}),V=(r,o)=>{const a=P.find(r,l=>P.some(l.types,m=>m===o));return(a==null?void 0:a.long_name)??""};return{search:g,get:f,reverseSearch:A}},q=j({name:"FSAutocompleteAddress",components:{FSAutocompleteField:x},props:{modelValue:{type:Object,required:!1,default:null},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(t,{emit:n}){const{search:p,get:c}=T(),d=O([]),i=B(()=>{if(t.modelValue){const e=S(t.modelValue),v=d.value.filter(w=>w.id!==e.id);return[e,...v]}return d.value}),u=async e=>e===null?Promise.resolve([]):(d.value=await p(e),Promise.resolve([])),g=async e=>{if(e===null){n("update:modelValue",null);return}Array.isArray(e)&&(e=e[0]);const v=await c(e);n("update:modelValue",v)},{search:f,onUpdate:A}=H(d,[],n,u,g,e=>e.id,e=>e.label,!0,!1,0,500),S=e=>({id:e.placeId,label:e.placeLabel});return{places:d,items:i,search:f,onUpdate:A}}});function W(t,n,p,c,d,i){var g;const u=G("FSAutocompleteField");return Y(),J(u,K({label:t.$props.label??t.$tr("ui.common.address","Address"),clearable:!1,toggleSet:!1,multiple:!1,items:t.items,customFilter:(f,A,S)=>{var e;return S.value!==((e=t.$props.modelValue)==null?void 0:e.placeId)},modelValue:(g=t.$props.modelValue)==null?void 0:g.placeId,"onUpdate:modelValue":t.onUpdate,search:t.search,"onUpdate:search":n[0]||(n[0]=f=>t.search=f)},t.$attrs),null,16,["label","items","customFilter","modelValue","onUpdate:modelValue","search"])}const C=Q(q,[["render",W]]);q.__docgenInfo={displayName:"FSAutocompleteAddress",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"Object as () => Address | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue"]};const yo={title:"Foundation/Shared/Autocompletes/AutocompleteAddress",component:C,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},F={args:{modelValue:new b({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})},render:(t,{argTypes:n})=>({components:{FSAutocompleteAddress:C,FSCol:_},props:Object.keys(n),setup(){return{args:t}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})},y={args:{modelValue:null},render:t=>({components:{FSAutocompleteAddress:C,FSCol:_},setup(){return{args:t}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})},h={args:{modelValue:null},render:t=>({components:{FSAutocompleteAddress:C,FSCol:_},setup(){const{reverseSearch:n}=T(),p=O(null);return{args:t,reverseSearchResult:p,onUpdateModelValue:async d=>{if(d){const i=await n(d.latitude,d.longitude);p.value=i}}}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="onUpdateModelValue"
      />
      <div v-if="reverseSearchResult">
        <p>Reverse Search Result:</p>
        <pre>{{ reverseSearchResult }}</pre>
      </div>
    </FSCol>`})};var U,I,E;F.parameters={...F.parameters,docs:{...(U=F.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(E=(I=F.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var k,D,L;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(L=(D=y.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var M,$,N;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=($=h.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};const ho=["Default","VariationEmpty","ReverseSearch"];export{F as Default,h as ReverseSearch,y as VariationEmpty,ho as __namedExportsOrder,yo as default};
