import{d as O,b as T,c as U,A as D,l as N,H as R,I as $}from"./vue.esm-bundler-NAfsqApI.js";import{_ as V}from"./lodash-BrWYvtk2.js";import{A as b}from"./address-CE2z3AEI.js";import{F as j}from"./FSAutocompleteField-Dosoxp9w.js";import{u as L}from"./useAutocomplete-BRqVXZAd.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as k}from"./FSCol-CPY6S-Xd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSearchField-LHGjxxhV.js";import"./FSTextField-Dzov9hcU.js";import"./FSBaseField-CjhswGig.js";import"./FSSpan-CLtVPKpS.js";import"./useBreakpoints-BwxwzcAl.js";import"./useSlots-S0O9Daut.js";import"./FSRow-GjwhmX1p.js";import"./css-DBDqGZ-V.js";import"./useColors-CWqJhoVw.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./FSButton-CnXo3fLV.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSClickable-Dvaj3J5M.js";import"./FSCard-DOESxZy8.js";import"./VProgressCircular-B6p7zTwg.js";import"./color-BvydW9AS.js";import"./resizeObserver-CLnVcpcq.js";import"./VIcon-PiNvAqE-.js";import"./FSIcon-Dq2bxLH5.js";import"./useRules-pqUeO9kt.js";import"./VField-KOKiCRZA.js";import"./index-Dne_26Gx.js";import"./transition-L7INWkz2.js";import"./VLabel-BDFzMscP.js";import"./VInput-B5HH3Lye.js";import"./locale-CAPEya44.js";import"./density-BGeA8UH8.js";import"./dimensions-IFPI4Yq9.js";import"./proxiedModel-sn-eI_a5.js";import"./form-DTsyvZhj.js";import"./loader-DsBOwpms.js";import"./anchor-DvtYZGyi.js";import"./rounded-DwVJT96z.js";import"./VDefaultsProvider-BngNLuXK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DINlpRuJ.js";import"./useTranslations-CxiknF7e.js";import"./VList-Cf1cUG92.js";import"./VDialog-uWe1mq7l.js";import"./VOverlay-CNRAdbgq.js";import"./display-Bn-MFLq6.js";import"./scopeId-CbPxXtFO.js";import"./router-0GC4RTMW.js";import"./ssrBoot-BkO-TPgF.js";import"./border-C5v47RY4.js";import"./elevation-B-XsQHpK.js";import"./index-o6vlk9JB.js";import"./VImg-D7CqP58l.js";import"./FSSlideGroup-Cl7IgSOt.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwecMMW5.js";import"./VSlideGroupItem-BvOdViLK.js";import"./group-Dl43T2CL.js";import"./FSToggleSet-CBrw8ECP.js";import"./FSWrapGroup-C3Z0hZ7U.js";import"./FSCheckbox-CZADXYvb.js";import"./VSelectionControl-CV2pv1R-.js";import"./FSFadeOut-D3iDD7Hj.js";import"./FSLoader-C8dZP0ML.js";import"./FSRadio-Bz6eMy_b.js";import"./VSelect-aoHOo6gx.js";import"./VMenu-D8AvjW2T.js";import"./filter-DH9_huac.js";const B=()=>{let t=!1,n,c,p;const d=async()=>{await window.initMap,n=new google.maps.places.AutocompleteService,c=new google.maps.places.PlacesService(document.getElementById("places")),p=new google.maps.places.AutocompleteSessionToken,t=!0},f=async r=>(t||await d(),g(r).then(o=>V.map(o,a=>({id:a.place_id,label:a.description}))).catch(()=>[])),u=async r=>{var a,s;t||await d();const o=await F(r.id);if(p=new google.maps.places.AutocompleteSessionToken,o.address_components&&o.formatted_address&&o.geometry)return new b({formattedAddress:o.formatted_address,locality:e(o.address_components,"locality"),country:e(o.address_components,"country"),latitude:((a=o.geometry.location)==null?void 0:a.lat())??0,longitude:((s=o.geometry.location)==null?void 0:s.lng())??0,placeId:r.id,placeLabel:r.label});throw new Error("missing informations")},i=async(r,o)=>(t||await d(),A(r,o).then(a=>{var s,l;if(a.length>0){const m=a[0];if(m.address_components&&m.formatted_address&&m.geometry)return new b({formattedAddress:m.formatted_address,locality:e(m.address_components,"locality"),country:e(m.address_components,"country"),latitude:((s=m.geometry.location)==null?void 0:s.lat())??0,longitude:((l=m.geometry.location)==null?void 0:l.lng())??0,placeId:m.place_id,placeLabel:m.formatted_address})}throw new Error("missing informations")})),g=r=>new Promise((o,a)=>{n.getPlacePredictions({input:r,sessionToken:p},function(s,l){l!=google.maps.places.PlacesServiceStatus.OK||!s?a(l):o(s)})}),A=(r,o)=>new Promise((a,s)=>{new google.maps.Geocoder().geocode({location:{lat:r,lng:o}},(l,m)=>{m!=google.maps.GeocoderStatus.OK||!l?s(m):a(l)})}),F=r=>new Promise((o,a)=>{c.getDetails({placeId:r,sessionToken:p,fields:["formatted_address","geometry","address_components","name"]},(s,l)=>{l!=google.maps.places.PlacesServiceStatus.OK||!s?a(l):o(s)})}),e=(r,o)=>{const a=V.find(r,s=>V.some(s.types,l=>l===o));return(a==null?void 0:a.long_name)??""};return{search:f,get:u,reverseSearch:i}},E=O({name:"FSAutocompleteAddress",components:{FSAutocompleteField:j},props:{modelValue:{type:Object,required:!1,default:null},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(t,{emit:n}){const{search:c,get:p}=B(),d=T([]),f=U(()=>{if(t.modelValue){const e=F(t.modelValue),r=d.value.filter(o=>o.id!==e.id);return[e,...r]}return d.value}),u=async e=>e===null?Promise.resolve([]):(d.value=await c(e),Promise.resolve([])),i=async e=>{if(e===null){n("update:modelValue",null);return}Array.isArray(e)&&(e=e[0]);const r=await p(e);n("update:modelValue",r)},{search:g,onUpdate:A}=L(d,[],n,u,i,e=>e.id,e=>e.label,!0,!1,0,500),F=e=>({id:e.placeId,label:e.placeLabel});return{places:d,items:f,search:g,onUpdate:A}}});function K(t,n,c,p,d,f){var i;const u=R("FSAutocompleteField");return $(),D(u,N({label:t.$props.label??t.$tr("ui.common.address","Address"),clearable:!1,toggleSet:!1,multiple:!1,items:t.items,modelValue:(i=t.$props.modelValue)==null?void 0:i.placeId,"onUpdate:modelValue":t.onUpdate,search:t.search,"onUpdate:search":n[0]||(n[0]=g=>t.search=g)},t.$attrs),null,16,["label","items","modelValue","onUpdate:modelValue","search"])}const h=q(E,[["render",K]]);E.__docgenInfo={displayName:"FSAutocompleteAddress",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"Object as () => Address | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue"]};const mo={title:"Foundation/Shared/Autocompletes/AutocompleteAddress",component:h,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},S={args:{modelValue:new b({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})},render:(t,{argTypes:n})=>({components:{FSAutocompleteAddress:h,FSCol:k},props:Object.keys(n),setup(){return{args:t}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})},y={args:{modelValue:null},render:(t,{argTypes:n})=>({components:{FSAutocompleteAddress:h,FSCol:k},props:Object.keys(n),setup(){return{args:t}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})};var v,w,_;S.parameters={...S.parameters,docs:{...(v=S.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(_=(w=S.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var C,P,I;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(P=y.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const po=["Default","VariationEmpty"];export{S as Default,y as VariationEmpty,po as __namedExportsOrder,mo as default};
