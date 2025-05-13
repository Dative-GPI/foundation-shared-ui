import{d as D,b as L,c as $,z as N,m as j,G as q,H as B}from"./vue.esm-bundler-CM4TIH-Q.js";import{_ as h}from"./lodash-BrWYvtk2.js";import{A as w}from"./address-CE2z3AEI.js";import{u as G}from"./useAppLanguageCode-CN6bsmo6.js";import{F as K}from"./FSAutocompleteField-Bhc8WovN.js";import{u as M}from"./useAutocomplete-Bch9dv1c.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as T}from"./FSCol-BR6T1l1C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSearchField-BNfMDrZK.js";import"./FSTextField-C7rYmEAT.js";import"./FSBaseField-B4CV_xuh.js";import"./FSSpan-y1Ex52-c.js";import"./useBreakpoints-C6JPO-aN.js";import"./useSlots-c6yg-hhg.js";import"./FSRow-oDTnIAxc.js";import"./css-BgLnvP7H.js";import"./useColors-CjA2D2xA.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./FSButton-DatX9tV0.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-CXLm7rHe.js";import"./FSCard-BedrH_cK.js";import"./VProgressCircular-C-4f-PXJ.js";import"./color-Bo6l13w9.js";import"./resizeObserver-Cb3oz2nO.js";import"./VIcon-GfKFLOEw.js";import"./FSIcon-LkE5-ra7.js";import"./useRules-B12Yr5ve.js";import"./VField-D97ztcGG.js";import"./index-BJH4L2FX.js";import"./transition-DMoMR0kB.js";import"./VLabel-Ca5QW7tf.js";import"./VInput-DXPqvHKO.js";import"./locale-BqFH1fBg.js";import"./density-Dl4v3sM7.js";import"./dimensions-DW-k5kP_.js";import"./proxiedModel-DKx29MO-.js";import"./loader-CQB_6PPx.js";import"./anchor-DCFmATqq.js";import"./rounded-CDCr0BOq.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DWgrY6Dg.js";import"./useTranslations-CLqRehXT.js";import"./VList-Cd1xaDQJ.js";import"./VDialog-CgsoTmCe.js";import"./VOverlay-DtEUynQC.js";import"./display-CUGteI3_.js";import"./scopeId-COl1Iexy.js";import"./router-BXF-7Xxx.js";import"./ssrBoot-BDHgcVA9.js";import"./border-CvDIZQGy.js";import"./elevation-DgpWsjTu.js";import"./index-BkfcJ8bv.js";import"./VImg-D7XF-hIS.js";import"./FSSlideGroup-DuKHMc7B.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CuTZlUtI.js";import"./VSlideGroupItem-41bDxGuE.js";import"./group-3MU8bQUc.js";import"./FSToggleSet-lwjzcNyZ.js";import"./FSWrapGroup-DldQIiCW.js";import"./FSCheckbox-DdLfY5jd.js";import"./VSelectionControl-MVg9W9ha.js";import"./FSFadeOut-CmtPc-zJ.js";import"./FSLoader-CRKSvpTi.js";import"./FSRadio-Di2X4_xD.js";import"./VSelect-IZDtUERE.js";import"./VMenu-sKuqJ8jm.js";import"./filter-DHa7wap7.js";const J=()=>{const{languageCode:t}=G();let n=!1,g,f,i,d;const p=async()=>{await window.initMap,g=await y(),f=new google.maps.places.AutocompleteService,i=new google.maps.places.PlacesService(document.createElement("div")),d=new google.maps.places.AutocompleteSessionToken,n=!0},u=async r=>(n||await p(),(await e(r)).map(a=>({id:a.place_id,label:a.description}))),c=async r=>{var a,l;n||await p();const o=await v(r.id);if(d=new google.maps.places.AutocompleteSessionToken,o.address_components&&o.formatted_address&&o.geometry)return new w({formattedAddress:o.formatted_address,locality:F(o.address_components,"locality"),country:F(o.address_components,"country"),latitude:((a=o.geometry.location)==null?void 0:a.lat())??0,longitude:((l=o.geometry.location)==null?void 0:l.lng())??0,placeId:r.id,placeLabel:r.label});throw new Error("missing informations")},A=async(r,o)=>(n||await p(),S(r,o).then(a=>{var l,m;if(a.length>0){const s=a[0];if(s.address_components&&s.formatted_address&&s.geometry)return new w({formattedAddress:s.formatted_address,locality:F(s.address_components,"locality"),country:F(s.address_components,"country"),latitude:((l=s.geometry.location)==null?void 0:l.lat())??0,longitude:((m=s.geometry.location)==null?void 0:m.lng())??0,placeId:s.place_id,placeLabel:s.formatted_address})}throw new Error("missing informations")})),y=async()=>navigator.geolocation?new Promise(r=>{navigator.geolocation.getCurrentPosition(o=>{r({lat:o.coords.latitude,lng:o.coords.longitude})},()=>r(null))}):null,e=r=>new Promise((o,a)=>{var m;const l=(m=t.value)==null?void 0:m.split("-")[0];f.getPlacePredictions({input:r,region:l,language:l,sessionToken:d,locationBias:g},function(s,_){_!=google.maps.places.PlacesServiceStatus.OK||!s?a(_):o(s)})}),S=(r,o)=>new Promise((a,l)=>{new google.maps.Geocoder().geocode({location:{lat:r,lng:o}},(m,s)=>{s!=google.maps.GeocoderStatus.OK||!m?l(s):a(m)})}),v=r=>new Promise((o,a)=>{i.getDetails({placeId:r,sessionToken:d,fields:["formatted_address","geometry","address_components","name"]},(l,m)=>{m!=google.maps.places.PlacesServiceStatus.OK||!l?a(m):o(l)})}),F=(r,o)=>{const a=h.find(r,l=>h.some(l.types,m=>m===o));return(a==null?void 0:a.long_name)??""};return{search:u,get:c,reverseSearch:A}},U=D({name:"FSAutocompleteAddress",components:{FSAutocompleteField:K},props:{modelValue:{type:Object,required:!1,default:null},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(t,{emit:n}){const{search:g,get:f}=J(),i=L([]),d=$(()=>{if(t.modelValue){const e=y(t.modelValue),S=i.value.filter(v=>v.id!==e.id);return[e,...S]}return i.value}),p=async e=>e===null?Promise.resolve([]):(i.value=await g(e),Promise.resolve([])),u=async e=>{if(e===null){n("update:modelValue",null);return}Array.isArray(e)&&(e=e[0]);const S=await f(e);n("update:modelValue",S)},{search:c,onUpdate:A}=M(i,[],n,p,u,e=>e.id,e=>e.label,!0,!1,0,500),y=e=>({id:e.placeId,label:e.placeLabel});return{places:i,items:d,search:c,onUpdate:A}}});function Y(t,n,g,f,i,d){var u;const p=q("FSAutocompleteField");return B(),N(p,j({label:t.$props.label??t.$tr("ui.common.address","Address"),clearable:!1,toggleSet:!1,multiple:!1,items:t.items,customFilter:(c,A,y)=>{var e;return y.value!==((e=t.$props.modelValue)==null?void 0:e.placeId)},modelValue:(u=t.$props.modelValue)==null?void 0:u.placeId,"onUpdate:modelValue":t.onUpdate,search:t.search,"onUpdate:search":n[0]||(n[0]=c=>t.search=c)},t.$attrs),null,16,["label","items","customFilter","modelValue","onUpdate:modelValue","search"])}const C=z(U,[["render",Y]]);U.__docgenInfo={displayName:"FSAutocompleteAddress",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"Object as () => Address | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue"]};const go={title:"Foundation/Shared/Autocompletes/AutocompleteAddress",component:C,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},V={args:{modelValue:new w({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})},render:(t,{argTypes:n})=>({components:{FSAutocompleteAddress:C,FSCol:T},props:Object.keys(n),setup(){return{args:t}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})},b={args:{modelValue:null},render:(t,{argTypes:n})=>({components:{FSAutocompleteAddress:C,FSCol:T},props:Object.keys(n),setup(){return{args:t}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})};var P,I,k;V.parameters={...V.parameters,docs:{...(P=V.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(k=(I=V.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var E,O,R;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    modelValue: null
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
}`,...(R=(O=b.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const fo=["Default","VariationEmpty"];export{V as Default,b as VariationEmpty,fo as __namedExportsOrder,go as default};
