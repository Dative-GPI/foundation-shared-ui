import{d as A,c as m,A as p,D as d,l as V,H as w,I as u,F as C,J as $,K as q}from"./vue.esm-bundler-NAfsqApI.js";import{F as k}from"./FSAutocompleteField-Dosoxp9w.js";import{F as h}from"./FSIcon-Dq2bxLH5.js";import{u as _}from"./useDashboardOrganisations-CVFCrCrR.js";import{u as T}from"./useAutocomplete-BRqVXZAd.js";import{u as B}from"./useTranslations-CxiknF7e.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as U}from"./FSCol-CPY6S-Xd.js";import"./FSSearchField-LHGjxxhV.js";import"./FSTextField-Dzov9hcU.js";import"./FSBaseField-CjhswGig.js";import"./FSSpan-CLtVPKpS.js";import"./useBreakpoints-BwxwzcAl.js";import"./useSlots-S0O9Daut.js";import"./FSRow-GjwhmX1p.js";import"./css-DBDqGZ-V.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./FSButton-CnXo3fLV.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSClickable-Dvaj3J5M.js";import"./FSCard-DOESxZy8.js";import"./VProgressCircular-B6p7zTwg.js";import"./color-BvydW9AS.js";import"./resizeObserver-CLnVcpcq.js";import"./VIcon-PiNvAqE-.js";import"./useRules-pqUeO9kt.js";import"./VField-KOKiCRZA.js";import"./index-Dne_26Gx.js";import"./transition-L7INWkz2.js";import"./VLabel-BDFzMscP.js";import"./VInput-B5HH3Lye.js";import"./locale-CAPEya44.js";import"./density-BGeA8UH8.js";import"./dimensions-IFPI4Yq9.js";import"./proxiedModel-sn-eI_a5.js";import"./form-DTsyvZhj.js";import"./loader-DsBOwpms.js";import"./anchor-DvtYZGyi.js";import"./rounded-DwVJT96z.js";import"./VDefaultsProvider-BngNLuXK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DINlpRuJ.js";import"./VList-Cf1cUG92.js";import"./VDialog-uWe1mq7l.js";import"./VOverlay-CNRAdbgq.js";import"./display-Bn-MFLq6.js";import"./scopeId-CbPxXtFO.js";import"./router-0GC4RTMW.js";import"./ssrBoot-BkO-TPgF.js";import"./border-C5v47RY4.js";import"./elevation-B-XsQHpK.js";import"./index-o6vlk9JB.js";import"./VImg-D7CqP58l.js";import"./FSSlideGroup-Cl7IgSOt.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwecMMW5.js";import"./VSlideGroupItem-BvOdViLK.js";import"./group-Dl43T2CL.js";import"./FSToggleSet-CBrw8ECP.js";import"./FSWrapGroup-C3Z0hZ7U.js";import"./FSCheckbox-CZADXYvb.js";import"./VSelectionControl-CV2pv1R-.js";import"./FSFadeOut-D3iDD7Hj.js";import"./FSLoader-C8dZP0ML.js";import"./FSRadio-Bz6eMy_b.js";import"./VSelect-aoHOo6gx.js";import"./VMenu-D8AvjW2T.js";import"./filter-DH9_huac.js";import"./dashboardTranslation-BHnlXi67.js";import"./useAppLanguageCode-DW7Tteig.js";import"./lodash-BrWYvtk2.js";import"./pathCrumb-Db-cq5HI.js";import"./base-D1kf-R5n.js";import"./useAppOrganisationId-CZPUgkT3.js";import"./composableFactory-WcheuuwI.js";import"./serviceFactory-DMr1GitK.js";const f=A({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:k,FSIcon:h},props:{dashboardOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:i,fetching:n,entities:r}=_(),{$tr:s}=B(),l=m(()=>D.value&&n.value),o=m(()=>e.multiple&&e.modelValue?s("autocomplete.dashboard.placeholder","{0} dashboard(s) selected",e.modelValue.length):null),S=y=>i({...e.dashboardOrganisationFilters,search:y??void 0}),{toggleSet:F,init:D,onUpdate:O}=T(r,[()=>e.dashboardOrganisationFilters],t,S);return{dashboardOrganisations:r,placeholder:o,toggleSet:F,loading:l,onUpdate:O}}});function j(e,t,i,n,r,s){const l=w("FSAutocompleteField");return u(),p(l,V({label:e.$props.label??e.$tr("ui.common.dashboard","Dashboard"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.dashboardOrganisations,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:o})=>[o.icon?(u(),p(h,{key:0},{default:d(()=>[$(q(o.icon),1)]),_:2},1024)):C("",!0)]),_:1},16,["label","toggleSet","items","multiple","placeholder","loading","modelValue","onUpdate:modelValue"])}const v=N(f,[["render",j]]);f.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboardOrganisation.vue"]};const mt={title:"Foundation/Core/Autocompletes/AutocompleteDashboardOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDashboardOrganisation:v,FSCol:U},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var g,c,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      FSAutocompleteDashboardOrganisation,
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
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(b=(c=a.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const pt=["Variations"];export{a as Variations,pt as __namedExportsOrder,mt as default};
