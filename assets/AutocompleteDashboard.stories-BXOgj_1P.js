import{d as I,c as p,y as f,z as S,A as D,B as r,m as L,E as U,G as P,D as z,L as m,M as E,P as G}from"./vue.esm-bundler-BSyvBTC9.js";import{F as x}from"./FSAutocompleteField-BTvU7R8d.js";import{F as T}from"./FSButton-BVWlNylM.js";import{F as H}from"./FSChip-vR1IHQ3P.js";import{_ as V}from"./FSIcon-DHDofKUo.js";import{u as J}from"./useDashboardOrganisationTypes-BwvTnTaA.js";import{u as K}from"./useDashboardOrganisations-QK1n8jHf.js";import{u as Q}from"./useDashboardShallows-DeHwXP_Z.js";import{d as R,a as W}from"./dashboards-BoeXcGJx.js";import{D as s}from"./dashboards-JSNI7pIu.js";import{u as X}from"./useAutocomplete-CCT8PdrG.js";import{u as Y}from"./useTranslations-CdSqQFV3.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ee}from"./FSCol-YmDykHL-.js";import"./FSSearchField-DFF89qPo.js";import"./FSTextField-zMIFz9nB.js";import"./FSBaseField-DnC2dzvH.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSRow-CVY2l52N.js";import"./css-DLfrm0pR.js";import"./useColors-B5ivMAr9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D4rXHj3O.js";import"./VSpacer-C4plVoTE.js";import"./color-BygXFKwQ.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./locale-C-s_GJlL.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-pPiux2KM.js";import"./VProgressCircular-Dh9H7lZx.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./FSDialogMenu-CjU7jTTU.js";import"./FSCard-DAS46KTX.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-DCqEyw4i.js";import"./uuid-DTaye2KM.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-Y4-ows8F.js";import"./FSWrapGroup-DnBpx7nY.js";import"./FSCheckbox-YoHHo_JV.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";import"./FSFadeOut-I9nnIcBb.js";import"./FSLoader-DIRgKG_M.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-BknZZMeV.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-VfM2CROL.js";import"./VMenu-BVgNprPc.js";import"./filter-DuGNEgHB.js";import"./FSClickable-DVS7KdyM.js";import"./dashboardTranslation-C8Wdb1gl.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./lodash-BiW_TGGX.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./pathCrumb-Db-cq5HI.js";const w=I({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:x,FSButton:T,FSChip:H,FSIcon:V},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:s.None},ignoreDashboardOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreDashboardOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:u,fetching:g,entities:b}=J(),{getMany:c,fetching:i,entities:d}=K(),{getMany:t,fetching:h,entities:C}=Q(),{$tr:q}=Y(),y=p(()=>b.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:s.OrganisationType})).concat(d.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:s.Organisation}))).concat(C.value.map(a=>({id:a.id,icon:a.icon,label:a.label,type:s.Shallow})))),_=p(()=>M.value&&(g.value||i.value||h.value)),k=p(()=>e.multiple&&e.modelValue?q("ui.autocomplete-dashboard.placeholder","{0} dashboard(s) selected",e.modelValue.length):null),$=a=>{Array.isArray(a)?(o("update:modelValue",a.map(l=>l.id)),o("update:type",a.map(l=>l.type))):(o("update:modelValue",a==null?void 0:a.id),o("update:type",a==null?void 0:a.type))},B=a=>{const l=[];return e.ignoreDashboardOrganisationTypes||l.push(u({...e.dashboardOrganisationTypeFilters,search:a??void 0})),e.ignoreDashboardOrganisations||(l.push(c({...e.dashboardOrganisationFilters,search:a??void 0})),l.push(t({...e.dashboardShallowFilters,search:a??void 0}))),Promise.all(l)},{toggleSet:N,init:M,onUpdate:j}=X(y,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],o,B,$);return{placeholder:k,dashboards:y,toggleSet:N,loading:_,dashboardTypeColor:R,dashboardTypeLabel:W,onUpdate:j}}});function ae(e,o,u,g,b,c){const i=f("FSChip"),d=f("FSAutocompleteField");return S(),D(d,L({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dashboards,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":r(({item:t})=>[t.icon?(S(),D(V,{key:0},{default:r(()=>[U(P(t.icon),1)]),_:2},1024)):z("",!0)]),"item-append":r(({item:t})=>[m(i,{color:e.dashboardTypeColor(t.type),label:e.dashboardTypeLabel(t.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":r(t=>[m(T,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:G(t.getClass(t.item)),label:t.item.label,onClick:h=>t.toggle(t.item)},E({_:2},[t.item.type?{name:"append",fn:r(()=>[m(i,{color:e.dashboardTypeColor(t.item.type),label:e.dashboardTypeLabel(t.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const A=Z(w,[["render",ae]]);w.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType[] | DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"ignoreDashboardOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreDashboardOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const _a={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDashboard:A,FSCol:ee},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var v,F,O;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(O=(F=n.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const ka=["Variations"];export{n as Variations,ka as __namedExportsOrder,_a as default};