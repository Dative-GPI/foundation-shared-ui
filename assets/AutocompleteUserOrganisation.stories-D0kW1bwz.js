import{d as C,c as g,A as c,B as f,D as s,j as w,I as b,G as I,P as v,C as $,E as k}from"./vue.esm-bundler-0BaZj8Cy.js";import{F as q}from"./FSAutocompleteField-DyVgj832.js";import{F as O}from"./FSButton-Ca0A16tw.js";import{F as x}from"./FSImage-CRET8ZWw.js";import{a as D}from"./useUserOrganisations-DRUrt61X.js";import{u as _}from"./useAutocomplete-CGqtAfo7.js";import{u as B}from"./useTranslations-DJOHKWsD.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as j}from"./FSCol-D35grUmj.js";import"./FSSearchField-CXQ5durH.js";import"./FSTextField-BJRcNyoA.js";import"./FSBaseField-BMGHZA0m.js";import"./FSSpan-hBzULALq.js";import"./useBreakpoints-2HHUcVIh.js";import"./useSlots-I9K15ysi.js";import"./FSRow-CAJM3FZ0.js";import"./css-Bhvr2onI.js";import"./useColors-SBQj5l4a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./useRules-B-2YsFdr.js";import"./VField-fH-IYcLo.js";import"./index-A-BnjIhl.js";import"./color-v9Utm2wX.js";import"./transition-CCJeTa-A.js";import"./VLabel-B8m3kRrJ.js";import"./VInput-Dz3e_hzB.js";import"./locale-CUGdfosF.js";import"./VIcon-_OtdNVUv.js";import"./density-P84-FGcF.js";import"./dimensions-BEVfeJxO.js";import"./proxiedModel-gKZvE0id.js";import"./form-BxXGwYee.js";import"./loader-BfrQsM5c.js";import"./VProgressCircular-NnNXhC5D.js";import"./resizeObserver-EZycJKNh.js";import"./anchor-B7sx4vRv.js";import"./rounded-BByw44D4.js";import"./VDefaultsProvider-DlfGiSFQ.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BSIzjytc.js";import"./VList-CxEWDEvR.js";import"./FSCard-Dlw97Dqr.js";import"./VDialog-cy2cAeAj.js";import"./VOverlay-CTri8YxJ.js";import"./display-w-mPL_cH.js";import"./scopeId-DtuQcaKf.js";import"./router-DTj21Dkp.js";import"./ssrBoot-YHUJVgIR.js";import"./border-B7ttCXY5.js";import"./elevation-C2OyWM5g.js";import"./index-C_NEyI9V.js";import"./VImg-CiDZbmGb.js";import"./FSSlideGroup-D7P5Hhl4.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Bl8vpUh8.js";import"./VSlideGroupItem-g9Eu1KOy.js";import"./group-BV8nssOR.js";import"./FSToggleSet-DdwsJWnh.js";import"./FSWrapGroup-DcC6Lpyw.js";import"./FSCheckbox-BXQYOoec.js";import"./FSIcon-BwW5Hq8i.js";import"./VSelectionControl-DanrcpVZ.js";import"./FSFadeOut-BlD2fPTA.js";import"./FSLoader-CljC1u5C.js";import"./FSRadio-sGO-DteL.js";import"./VSelect-Di5DH8az.js";import"./VMenu-664v_26-.js";import"./filter-BsWs0jz4.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./FSClickable-CbOr5F2S.js";import"./FSImageUI-C9-ibhOt.js";import"./useImages-M2XVSUqr.js";import"./base-CmdGny12.js";import"./serviceFactory-qtdw0UKd.js";import"./lodash-BrWYvtk2.js";import"./composableFactory-K8W9GIHH.js";import"./useAppAuthToken-CJrsyj37.js";import"./permissionInfos-BPDgTHQl.js";import"./base-KmQLDroH.js";import"./useAppOrganisationId-C2_s9Mh4.js";const y=C({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:q,FSButton:O,FSImage:x},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:m,fetching:u,entities:i}=D(),{$tr:p}=B(),l=g(()=>A.value&&u.value),n=g(()=>e.multiple&&e.modelValue?p("autocomplete.user.placeholder","{0} user(s) selected",e.modelValue.length):null),t=o=>m({...e.userOrganisationFilters,search:o??void 0}),{toggleSet:d,init:A,onUpdate:V}=_(i,[()=>e.userOrganisationFilters],r,t,null,o=>o.id,o=>o.name);return{userOrganisations:i,placeholder:n,toggleSet:d,loading:l,onUpdate:V}}});function N(e,r,m,u,i,p){const l=c("FSImage"),n=c("FSAutocompleteField");return b(),f(n,w({itemTitle:"name",label:e.$props.label??e.$tr("ui.common.user","User"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.userOrganisations,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":s(({item:t})=>[t.imageId?(b(),f(l,{key:0,height:"26px",width:"26px",imageId:t.imageId,thumbnail:!0},null,8,["imageId"])):I("",!0)]),"toggle-set-item":s(t=>[v(O,{padding:t.item.imageId?["6px 16px","4px 12px"]:void 0,variant:t.getVariant(t.item),color:t.getColor(t.item),class:k(t.getClass(t.item)),label:t.item.name,onClick:d=>t.toggle(t.item)},$({_:2},[t.item.imageId?{name:"prepend",fn:s(()=>[v(l,{height:"26px",width:"26px",imageId:t.item.imageId,thumbnail:!0},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const U=T(y,[["render",N]]);y.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const ct={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:U,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:r})=>({components:{FSAutocompleteUserOrganisation:U,FSCol:j},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteUserOrganisation
        label="UserOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
        label="UserOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
          label="UserOrganisation with multiple selection"
          :multiple="true"
          v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
        label="UserOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var h,S,F;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      FSAutocompleteUserOrganisation,
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
      <FSAutocompleteUserOrganisation
        label="UserOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
        label="UserOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
          label="UserOrganisation with multiple selection"
          :multiple="true"
          v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
        label="UserOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(F=(S=a.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const ft=["Variations"];export{a as Variations,ft as __namedExportsOrder,ct as default};
