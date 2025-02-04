import{d as L,c as m,A as S,D as r,l as E,H as F,I as v,R as u,E as P,C as z,F as H,J,K}from"./vue.esm-bundler-NAfsqApI.js";import{F as R}from"./FSAutocompleteField-Dosoxp9w.js";import{F as w}from"./FSButton-CnXo3fLV.js";import{F as G}from"./FSChip-DFWe0C6o.js";import{F as A}from"./FSIcon-Dq2bxLH5.js";import{u as Q}from"./useDashboardOrganisationTypes-Blw2v_vD.js";import{u as W}from"./useDashboardOrganisations-CVFCrCrR.js";import{u as X}from"./useDashboardShallows-BJQKssUU.js";import{d as Y,a as Z}from"./dashboards-BtQF5l0U.js";import{D as s}from"./dashboards-JSNI7pIu.js";import{u as x}from"./useAutocomplete-BRqVXZAd.js";import{u as ee}from"./useTranslations-CxiknF7e.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as te}from"./FSCol-CPY6S-Xd.js";import"./FSSearchField-LHGjxxhV.js";import"./FSTextField-Dzov9hcU.js";import"./FSBaseField-CjhswGig.js";import"./FSSpan-CLtVPKpS.js";import"./useBreakpoints-BwxwzcAl.js";import"./useSlots-S0O9Daut.js";import"./FSRow-GjwhmX1p.js";import"./css-DBDqGZ-V.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./useRules-pqUeO9kt.js";import"./VField-KOKiCRZA.js";import"./index-Dne_26Gx.js";import"./color-BvydW9AS.js";import"./transition-L7INWkz2.js";import"./VLabel-BDFzMscP.js";import"./VInput-B5HH3Lye.js";import"./locale-CAPEya44.js";import"./VIcon-PiNvAqE-.js";import"./density-BGeA8UH8.js";import"./dimensions-IFPI4Yq9.js";import"./proxiedModel-sn-eI_a5.js";import"./form-DTsyvZhj.js";import"./loader-DsBOwpms.js";import"./VProgressCircular-B6p7zTwg.js";import"./resizeObserver-CLnVcpcq.js";import"./anchor-DvtYZGyi.js";import"./rounded-DwVJT96z.js";import"./VDefaultsProvider-BngNLuXK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DINlpRuJ.js";import"./VList-Cf1cUG92.js";import"./FSCard-DOESxZy8.js";import"./VDialog-uWe1mq7l.js";import"./VOverlay-CNRAdbgq.js";import"./display-Bn-MFLq6.js";import"./scopeId-CbPxXtFO.js";import"./router-0GC4RTMW.js";import"./ssrBoot-BkO-TPgF.js";import"./border-C5v47RY4.js";import"./elevation-B-XsQHpK.js";import"./index-o6vlk9JB.js";import"./VImg-D7CqP58l.js";import"./FSSlideGroup-Cl7IgSOt.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwecMMW5.js";import"./VSlideGroupItem-BvOdViLK.js";import"./group-Dl43T2CL.js";import"./FSToggleSet-CBrw8ECP.js";import"./FSWrapGroup-C3Z0hZ7U.js";import"./FSCheckbox-CZADXYvb.js";import"./VSelectionControl-CV2pv1R-.js";import"./FSFadeOut-D3iDD7Hj.js";import"./FSLoader-C8dZP0ML.js";import"./FSRadio-Bz6eMy_b.js";import"./VSelect-aoHOo6gx.js";import"./VMenu-D8AvjW2T.js";import"./filter-DH9_huac.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSClickable-Dvaj3J5M.js";import"./dashboardTranslation-BHnlXi67.js";import"./useAppLanguageCode-DW7Tteig.js";import"./lodash-BrWYvtk2.js";import"./base-D1kf-R5n.js";import"./useAppOrganisationId-CZPUgkT3.js";import"./composableFactory-WcheuuwI.js";import"./serviceFactory-DMr1GitK.js";import"./pathCrumb-Db-cq5HI.js";const C=L({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:R,FSButton:w,FSChip:G,FSIcon:A},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:s.None},ignoreDashboardOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreDashboardOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update","update:modelValue","update:type"],setup(a,{emit:o}){const{getMany:b,fetching:g,entities:h}=Q(),{getMany:c,fetching:n,entities:d}=W(),{getMany:t,fetching:y,entities:$}=X(),{$tr:k}=ee(),f=m(()=>h.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:s.OrganisationType})).concat(d.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:s.Organisation}))).concat($.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:s.Shallow})))),N=m(()=>_.value&&(g.value||n.value||y.value)),B=m(()=>a.multiple&&a.modelValue?k("autocomplete.dashboard.placeholder","{0} dashboard(s) selected",a.modelValue.length):null),M=e=>{if(Array.isArray(e)){const l=e.map(p=>p.id),D=e.map(p=>p.type);o("update:modelValue",l),o("update:type",D),o("update",{modelValue:l,type:D})}else o("update:modelValue",e==null?void 0:e.id),o("update:type",e==null?void 0:e.type),o("update",{modelValue:e==null?void 0:e.id,type:e==null?void 0:e.type})},j=e=>{const l=[];return a.ignoreDashboardOrganisationTypes||l.push(b({...a.dashboardOrganisationTypeFilters,search:e??void 0})),a.ignoreDashboardOrganisations||(l.push(c({...a.dashboardOrganisationFilters,search:e??void 0})),l.push(t({...a.dashboardShallowFilters,search:e??void 0}))),Promise.all(l)},{toggleSet:I,init:_,onUpdate:U}=x(f,[()=>a.dashboardOrganisationTypeFilters,()=>a.dashboardOrganisationFilters,()=>a.dashboardShallowFilters],o,j,M);return{placeholder:B,dashboards:f,toggleSet:I,loading:N,dashboardTypeColor:Z,dashboardTypeLabel:Y,onUpdate:U}}});function oe(a,o,b,g,h,c){const n=F("FSChip"),d=F("FSAutocompleteField");return v(),S(d,E({label:a.$props.label??a.$tr("ui.common.dashboard","Dashboard"),toggleSet:!a.$props.toggleSetDisabled&&a.toggleSet,multiple:a.$props.multiple,placeholder:a.placeholder,items:a.dashboards,loading:a.loading,modelValue:a.$props.modelValue,"onUpdate:modelValue":a.onUpdate},a.$attrs),{"item-prepend":r(({item:t})=>[t.icon?(v(),S(A,{key:0},{default:r(()=>[J(K(t.icon),1)]),_:2},1024)):H("",!0)]),"item-append":r(({item:t})=>[u(n,{color:a.dashboardTypeColor(t.type),label:a.dashboardTypeLabel(t.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":r(t=>[u(w,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:P(t.getClass(t.item)),label:t.item.label,onClick:y=>t.toggle(t.item)},z({_:2},[t.item.type?{name:"append",fn:r(()=>[u(n,{color:a.dashboardTypeColor(t.item.type),label:a.dashboardTypeLabel(t.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const q=ae(C,[["render",oe]]);C.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType[] | DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"ignoreDashboardOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreDashboardOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const ja={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(a,{argTypes:o})=>({components:{FSAutocompleteDashboard:q,FSCol:te},props:Object.keys(o),setup(){return{...a}},template:`
    <FSCol>
      <FSAutocompleteDashboard
        label="Dashboard"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with multiple"
        :multiple="true"
        v-model="args.value3"
        v-model:type="args.type3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
        v-model:type="args.type4"
      />
    </FSCol>`})};var O,V,T;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      type1: 0,
      value2: null,
      type2: 0,
      value3: null,
      type3: 0,
      value4: null,
      type4: 0
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteDashboard,
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
      <FSAutocompleteDashboard
        label="Dashboard"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with multiple"
        :multiple="true"
        v-model="args.value3"
        v-model:type="args.type3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
        v-model:type="args.type4"
      />
    </FSCol>\`
  })
}`,...(T=(V=i.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const Ia=["Variations"];export{i as Variations,Ia as __namedExportsOrder,ja as default};
