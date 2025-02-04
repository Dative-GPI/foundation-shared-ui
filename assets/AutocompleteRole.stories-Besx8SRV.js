import{d as E,c as d,A as O,D as n,l as U,H as v,I as R,R as g,E as L,C as P,F as z,J as H,K as J}from"./vue.esm-bundler-NAfsqApI.js";import{F as K}from"./FSAutocompleteField-Dosoxp9w.js";import{F as A}from"./FSButton-CnXo3fLV.js";import{F as W}from"./FSChip-DFWe0C6o.js";import{F as q}from"./FSIcon-Dq2bxLH5.js";import{u as G}from"./useRoleOrganisationTypes-Bo88-NVs.js";import{u as Q}from"./useRoleOrganisations-C4Ldt_nQ.js";import{u as w}from"./useTranslations-CxiknF7e.js";import{C as c}from"./useColors-CWqJhoVw.js";import{u as X}from"./useAutocomplete-BRqVXZAd.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Z}from"./FSCol-CPY6S-Xd.js";import"./FSSearchField-LHGjxxhV.js";import"./FSTextField-Dzov9hcU.js";import"./FSBaseField-CjhswGig.js";import"./FSSpan-CLtVPKpS.js";import"./useBreakpoints-BwxwzcAl.js";import"./useSlots-S0O9Daut.js";import"./FSRow-GjwhmX1p.js";import"./css-DBDqGZ-V.js";import"./useRules-pqUeO9kt.js";import"./VField-KOKiCRZA.js";import"./index-Dne_26Gx.js";import"./color-BvydW9AS.js";import"./theme-F_JAsCzs.js";import"./transition-L7INWkz2.js";import"./VLabel-BDFzMscP.js";import"./VInput-B5HH3Lye.js";import"./locale-CAPEya44.js";import"./VIcon-PiNvAqE-.js";import"./density-BGeA8UH8.js";import"./dimensions-IFPI4Yq9.js";import"./proxiedModel-sn-eI_a5.js";import"./form-DTsyvZhj.js";import"./loader-DsBOwpms.js";import"./VProgressCircular-B6p7zTwg.js";import"./resizeObserver-CLnVcpcq.js";import"./anchor-DvtYZGyi.js";import"./rounded-DwVJT96z.js";import"./VDefaultsProvider-BngNLuXK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DINlpRuJ.js";import"./VList-Cf1cUG92.js";import"./FSCard-DOESxZy8.js";import"./VDialog-uWe1mq7l.js";import"./VOverlay-CNRAdbgq.js";import"./display-Bn-MFLq6.js";import"./scopeId-CbPxXtFO.js";import"./router-0GC4RTMW.js";import"./ssrBoot-BkO-TPgF.js";import"./border-C5v47RY4.js";import"./elevation-B-XsQHpK.js";import"./index-o6vlk9JB.js";import"./VImg-D7CqP58l.js";import"./FSSlideGroup-Cl7IgSOt.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwecMMW5.js";import"./VSlideGroupItem-BvOdViLK.js";import"./group-Dl43T2CL.js";import"./FSToggleSet-CBrw8ECP.js";import"./FSWrapGroup-C3Z0hZ7U.js";import"./FSCheckbox-CZADXYvb.js";import"./VSelectionControl-CV2pv1R-.js";import"./FSFadeOut-D3iDD7Hj.js";import"./FSLoader-C8dZP0ML.js";import"./FSRadio-Bz6eMy_b.js";import"./VSelect-aoHOo6gx.js";import"./VMenu-D8AvjW2T.js";import"./filter-DH9_huac.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSClickable-Dvaj3J5M.js";import"./permissionInfos-BPDgTHQl.js";import"./base-D1kf-R5n.js";import"./useAppOrganisationId-CZPUgkT3.js";import"./composableFactory-WcheuuwI.js";import"./serviceFactory-DMr1GitK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BrWYvtk2.js";import"./index-DfSX31J9.js";var l=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e))(l||{});const{$tr:y}=w(),x=e=>{switch(e){case l.None:return y("ui.common.none","None");case l.Organisation:return y("ui.common.custom","Custom");case l.OrganisationType:return y("ui.common.shared","Shared")}},ee=e=>{switch(e){case l.None:return c.Error;case l.Organisation:return c.Primary;case l.OrganisationType:return c.Warning}},N=E({name:"FSAutocompleteRole",components:{FSAutocompleteField:K,FSButton:A,FSChip:W,FSIcon:q},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:l.None},ignoreRoleOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreRoleOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update","update:modelValue","update:type"],setup(e,{emit:a}){const{getMany:f,fetching:b,entities:F}=G(),{getMany:h,fetching:i,entities:p}=Q(),{$tr:o}=w(),m=d(()=>F.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:l.OrganisationType})).concat(p.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:l.Organisation})))),k=d(()=>_.value&&(b.value||i.value)),D=d(()=>e.multiple&&e.modelValue?o("autocomplete.role.placeholder","{0} role(s) selected",e.modelValue.length):null),B=t=>{if(Array.isArray(t)){const r=t.map(u=>u.id),S=t.map(u=>u.type);a("update:modelValue",r),a("update:type",S),a("update",{modelValue:r,type:S})}else a("update:modelValue",t==null?void 0:t.id),a("update:type",t==null?void 0:t.type),a("update",{modelValue:t==null?void 0:t.id,type:t==null?void 0:t.type})},I=t=>{const r=[];return e.ignoreRoleOrganisations||r.push(h({...e.roleOrganisationFilters,search:t??void 0})),e.ignoreRoleOrganisationTypes||r.push(f({...e.roleOrganisationTypeFilters,search:t??void 0})),Promise.all(r)},{toggleSet:M,init:_,onUpdate:j}=X(m,[()=>e.roleOrganisationTypeFilters,()=>e.roleOrganisationFilters],a,I,B);return{placeholder:D,toggleSet:M,RoleType:l,loading:k,roles:m,roleTypeColor:ee,roleTypeLabel:x,onUpdate:j}}});function te(e,a,f,b,F,h){const i=v("FSChip"),p=v("FSAutocompleteField");return R(),O(p,U({label:e.$props.label??e.$tr("ui.common.role","Role"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.roles,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":n(({item:o})=>[o.icon?(R(),O(q,{key:0},{default:n(()=>[H(J(o.icon),1)]),_:2},1024)):z("",!0)]),"item-append":n(({item:o})=>[g(i,{color:e.roleTypeColor(o.type),label:e.roleTypeLabel(o.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":n(o=>[g(A,{prependIcon:o.item.icon,variant:o.getVariant(o.item),color:o.getColor(o.item),class:L(o.getClass(o.item)),label:o.item.label,onClick:m=>o.toggle(o.item)},P({_:2},[o.item.type?{name:"append",fn:n(()=>[g(i,{color:e.roleTypeColor(o.item.type),label:e.roleTypeLabel(o.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const $=Y(N,[["render",te]]);N.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"RoleType[] | RoleType"},required:!1,defaultValue:{func:!1,value:"RoleType.None"}},{name:"ignoreRoleOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreRoleOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};const qt={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:a})=>({components:{FSAutocompleteRole:$,FSCol:Z},props:Object.keys(a),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteRole
        label="Role"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with multiple selection"
        :multiple="true"
        v-model="args.value3"
        v-model:type="args.type3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
        v-model:type="args.type4"
      />
    </FSCol>`})};var V,C,T;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
      FSAutocompleteRole,
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
      <FSAutocompleteRole
        label="Role"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with multiple selection"
        :multiple="true"
        v-model="args.value3"
        v-model:type="args.type3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
        v-model:type="args.type4"
      />
    </FSCol>\`
  })
}`,...(T=(C=s.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const wt=["Variations"];export{s as Variations,wt as __namedExportsOrder,qt as default};
