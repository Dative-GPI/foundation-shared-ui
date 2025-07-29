import{d as j,b as O,c as B,B as J,m as K,I as G,J as Y}from"./vue.esm-bundler-PONd4AmC.js";import{_ as P}from"./lodash-Zo30T2Bj.js";import{A as b}from"./address-CE2z3AEI.js";import{u as z}from"./useAppLanguageCode-fPbUdbod.js";import{F as x}from"./FSAutocompleteField-BG1Iouz7.js";import{u as H}from"./useAutocomplete-Dt5fcbEj.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as _}from"./FSCol-Bfhiyt6Y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSearchField-D3E8Wwt2.js";import"./FSTextField-D-U5ryYn.js";import"./FSBaseField-DMW1nZy-.js";import"./FSSpan-DxKJLsSl.js";import"./useBreakpoints-RTs-XAJF.js";import"./useSlots-nyIcwo6G.js";import"./FSRow-C-b-hpWa.js";import"./css-BeoQuAfr.js";import"./useColors-Dytl_X2F.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./FSButton-CZKySWW0.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-CyhgWkHC.js";import"./FSCard-DYD9Tm3w.js";import"./VProgressCircular-CDK6zSYw.js";import"./color-_AiH45em.js";import"./resizeObserver-UZYihl4g.js";import"./VIcon-DIMW80nW.js";import"./FSIcon-bsX1r_Ci.js";import"./useRules-CT5DWk6c.js";import"./VField-So_guaQm.js";import"./index-CANKuvlL.js";import"./transition-BXZIGKil.js";import"./VLabel-5AeJpfXJ.js";import"./VInput-ClaXJMCA.js";import"./locale-CoLhg8Wl.js";import"./density-CNNumQ_A.js";import"./dimensions-CNbPgA3L.js";import"./proxiedModel-vOB1Q9Gh.js";import"./loader-DGoLn0VY.js";import"./anchor-D2WyvgD_.js";import"./rounded-BBFi0CuG.js";import"./VDefaultsProvider-BsWh58B_.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bb4mSIJO.js";import"./useTranslations-_Q1DYra_.js";import"./FSDialogMenu-Czm1Jubp.js";import"./VDialog-CJNHz4BJ.js";import"./VOverlay-U8N3Tt4W.js";import"./display-BXzLC06Y.js";import"./scopeId-CWp-k_S_.js";import"./router-6tzIEQS-.js";import"./FSSlideGroup-CGqp6f7y.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Dkus99PH.js";import"./VSlideGroupItem-B5H5Uw6w.js";import"./group-CvGRLeFV.js";import"./FSToggleSet-CRtePpT3.js";import"./FSWrapGroup-CpwsD4SA.js";import"./FSCheckbox-CQphVYdu.js";import"./VCheckboxBtn-B-CDiKqR.js";import"./VSelectionControl-HwS3bHvU.js";import"./index-B8vPsAiL.js";import"./FSFadeOut-CtUd8oOA.js";import"./FSLoader-UOJfN8Qb.js";import"./elevation-CL0Py7Fp.js";import"./FSRadio-BKiTm18z.js";import"./VSelect-BUWJeJyh.js";import"./VList-B9UxDYwK.js";import"./ssrBoot-DufuUSU7.js";import"./border-z35mRDPS.js";import"./VImg-DKyIpwU2.js";import"./VMenu-D11N5TPJ.js";import"./filter-MyCPMQzE.js";const T=()=>{const{languageCode:t}=z();let n=!1,p,c,d,i;const u=async()=>{await window.initMap,p=await S(),c=new google.maps.places.AutocompleteService,d=new google.maps.places.PlacesService(document.createElement("div")),i=new google.maps.places.AutocompleteSessionToken,n=!0},g=async r=>(n||await u(),(await e(r)).map(a=>({id:a.place_id,label:a.description}))),f=async r=>{var a,l;n||await u();const o=await w(r.id);if(i=new google.maps.places.AutocompleteSessionToken,o.address_components&&o.formatted_address&&o.geometry)return new b({formattedAddress:o.formatted_address,locality:V(o.address_components,"locality"),country:V(o.address_components,"country"),latitude:((a=o.geometry.location)==null?void 0:a.lat())??0,longitude:((l=o.geometry.location)==null?void 0:l.lng())??0,placeId:r.id,placeLabel:r.label});throw new Error("missing informations")},A=async(r,o)=>(n||await u(),v(r,o).then(a=>{var l,m;if(a.length>0){const s=a[0];if(s.address_components&&s.formatted_address&&s.geometry)return new b({formattedAddress:s.formatted_address,locality:V(s.address_components,"locality"),country:V(s.address_components,"country"),latitude:((l=s.geometry.location)==null?void 0:l.lat())??0,longitude:((m=s.geometry.location)==null?void 0:m.lng())??0,placeId:s.place_id,placeLabel:s.formatted_address})}throw new Error("missing informations")})),S=async()=>navigator.geolocation?new Promise(r=>{navigator.geolocation.getCurrentPosition(o=>{r({lat:o.coords.latitude,lng:o.coords.longitude})},()=>r(null))}):null,e=r=>new Promise((o,a)=>{var m;const l=(m=t.value)==null?void 0:m.split("-")[0];c.getPlacePredictions({input:r,region:l,language:l,sessionToken:i,locationBias:p},function(s,R){R!=google.maps.places.PlacesServiceStatus.OK||!s?a(R):o(s)})}),v=(r,o)=>new Promise((a,l)=>{new google.maps.Geocoder().geocode({location:{lat:r,lng:o}},(m,s)=>{s!=google.maps.GeocoderStatus.OK||!m?l(s):a(m)})}),w=r=>new Promise((o,a)=>{d.getDetails({placeId:r,sessionToken:i,fields:["formatted_address","geometry","address_components","name"]},(l,m)=>{m!=google.maps.places.PlacesServiceStatus.OK||!l?a(m):o(l)})}),V=(r,o)=>{const a=P.find(r,l=>P.some(l.types,m=>m===o));return(a==null?void 0:a.long_name)??""};return{search:g,get:f,reverseSearch:A}},q=j({name:"FSAutocompleteAddress",components:{FSAutocompleteField:x},props:{modelValue:{type:Object,required:!1,default:null},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(t,{emit:n}){const{search:p,get:c}=T(),d=O([]),i=B(()=>{if(t.modelValue){const e=S(t.modelValue),v=d.value.filter(w=>w.id!==e.id);return[e,...v]}return d.value}),u=async e=>e===null?Promise.resolve([]):(d.value=await p(e),Promise.resolve([])),g=async e=>{if(e===null){n("update:modelValue",null);return}Array.isArray(e)&&(e=e[0]);const v=await c(e);n("update:modelValue",v)},{search:f,onUpdate:A}=H(d,[],n,u,g,e=>e.id,e=>e.label,!0,!1,0,500),S=e=>({id:e.placeId,label:e.placeLabel});return{places:d,items:i,search:f,onUpdate:A}}});function W(t,n,p,c,d,i){var g;const u=G("FSAutocompleteField");return Y(),J(u,K({label:t.$props.label??t.$tr("ui.common.address","Address"),clearable:!1,toggleSet:!1,multiple:!1,items:t.items,customFilter:(f,A,S)=>{var e;return S.value!==((e=t.$props.modelValue)==null?void 0:e.placeId)},modelValue:(g=t.$props.modelValue)==null?void 0:g.placeId,"onUpdate:modelValue":t.onUpdate,search:t.search,"onUpdate:search":n[0]||(n[0]=f=>t.search=f)},t.$attrs),null,16,["label","items","customFilter","modelValue","onUpdate:modelValue","search"])}const C=Q(q,[["render",W]]);q.__docgenInfo={displayName:"FSAutocompleteAddress",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"Object as () => Address | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue"]};const Fo={title:"Foundation/Shared/Autocompletes/AutocompleteAddress",component:C,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},F={args:{modelValue:new b({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})},render:(t,{argTypes:n})=>({components:{FSAutocompleteAddress:C,FSCol:_},props:Object.keys(n),setup(){return{args:t}},template:`
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
}`,...(N=($=h.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};const yo=["Default","VariationEmpty","ReverseSearch"];export{F as Default,h as ReverseSearch,y as VariationEmpty,yo as __namedExportsOrder,Fo as default};
