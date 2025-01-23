import{d as E,c as d,A as O,B as v,D as n,x as U,I as R,J as L,K as P,G as z,R as g,C as G,E as J}from"./vue.esm-bundler-CTTOvLCD.js";import{F as K}from"./FSAutocompleteField-BzAl3brV.js";import{F as A}from"./FSButton-B2X9DGvb.js";import{F as W}from"./FSChip-CVBfHYvV.js";import{F as q}from"./FSIcon-yzGYQgqh.js";import{u as H}from"./useRoleOrganisationTypes-Bdy099et.js";import{u as Q}from"./useRoleOrganisations-CpDRoOjP.js";import{C as c}from"./useColors-D7R-CyI7.js";import{u as w}from"./useTranslations-Dol6kQeQ.js";import{u as X}from"./useAutocomplete-bcE0UiKw.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Z}from"./FSCol-BPr0jVzk.js";import"./FSSearchField-BTXtCPns.js";import"./FSTextField-Cq5SV0et.js";import"./FSBaseField-BJJzXcrO.js";import"./FSSpan-QNtf4e4q.js";import"./useBreakpoints-Bm7CjYdd.js";import"./useSlots-NXmwCOLw.js";import"./FSRow-C8EFLcn9.js";import"./css-D46r6e5F.js";import"./useRules-DE909mL5.js";import"./VField-Bi2n7Ebd.js";import"./index-B698eGq-.js";import"./color-DTA1Qd0w.js";import"./theme-DpYUkAdN.js";import"./transition-C1y9a89u.js";import"./VLabel-DjEMOXzE.js";import"./VInput-BgFKWDn-.js";import"./locale-Guk_W035.js";import"./VIcon-DzkIKThE.js";import"./density-n-hig0Tg.js";import"./dimensions-DIR9-JzD.js";import"./proxiedModel-Da7OD98r.js";import"./form-gxFDX6UX.js";import"./loader-BcXzPxbu.js";import"./VProgressCircular-it35si_v.js";import"./resizeObserver-Bwa55KU2.js";import"./anchor-KPAVzGxJ.js";import"./rounded-5tkyiosR.js";import"./VDefaultsProvider-45AVpOQL.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CK42gwlP.js";import"./VList-DRexluGA.js";import"./FSCard-DxhVm8H0.js";import"./VDialog-Cr2bmOLC.js";import"./VOverlay-Bysvo4NF.js";import"./display-BWFgSvI7.js";import"./scopeId-DGVhnfG2.js";import"./router-SvtovJtL.js";import"./ssrBoot-C3MoFAVe.js";import"./border-CjCUMUtA.js";import"./elevation-CqdG4vF6.js";import"./index-Bj6Uq_NX.js";import"./VImg-C1IcDibP.js";import"./FSSlideGroup-CLbrB063.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BC6-OF7l.js";import"./VSlideGroupItem-CyUsoDyC.js";import"./group-CroFFR-b.js";import"./FSToggleSet-0XsNufiD.js";import"./FSWrapGroup-BCi713M2.js";import"./FSCheckbox-CVOakf5q.js";import"./VSelectionControl-CZi2-uP4.js";import"./FSFadeOut-C2gEJSut.js";import"./FSLoader-AugIw030.js";import"./FSRadio-GwhtOOcI.js";import"./VSelect-BnarcBwl.js";import"./VMenu-DP8ibRhi.js";import"./filter-4zTRfP5f.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSClickable-DznopAj9.js";import"./permissionInfos-BPDgTHQl.js";import"./base-D9u3vc5Q.js";import"./useAppOrganisationId-DS-QKKZa.js";import"./serviceFactory-qtdw0UKd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BrWYvtk2.js";import"./composableFactory-BcaJMM0w.js";import"./index-DfSX31J9.js";var l=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e))(l||{});const{$tr:y}=w(),x=e=>{switch(e){case l.None:return y("ui.common.none","None");case l.Organisation:return y("ui.common.custom","Custom");case l.OrganisationType:return y("ui.common.shared","Shared")}},ee=e=>{switch(e){case l.None:return c.Error;case l.Organisation:return c.Primary;case l.OrganisationType:return c.Warning}},N=E({name:"FSAutocompleteRole",components:{FSAutocompleteField:K,FSButton:A,FSChip:W,FSIcon:q},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:l.None},ignoreRoleOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreRoleOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update","update:modelValue","update:type"],setup(e,{emit:a}){const{getMany:f,fetching:b,entities:F}=H(),{getMany:h,fetching:i,entities:p}=Q(),{$tr:o}=w(),m=d(()=>F.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:l.OrganisationType})).concat(p.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:l.Organisation})))),k=d(()=>_.value&&(b.value||i.value)),D=d(()=>e.multiple&&e.modelValue?o("autocomplete.role.placeholder","{0} role(s) selected",e.modelValue.length):null),B=t=>{if(Array.isArray(t)){const r=t.map(u=>u.id),S=t.map(u=>u.type);a("update:modelValue",r),a("update:type",S),a("update",{modelValue:r,type:S})}else a("update:modelValue",t==null?void 0:t.id),a("update:type",t==null?void 0:t.type),a("update",{modelValue:t==null?void 0:t.id,type:t==null?void 0:t.type})},I=t=>{const r=[];return e.ignoreRoleOrganisations||r.push(h({...e.roleOrganisationFilters,search:t??void 0})),e.ignoreRoleOrganisationTypes||r.push(f({...e.roleOrganisationTypeFilters,search:t??void 0})),Promise.all(r)},{toggleSet:M,init:_,onUpdate:j}=X(m,[()=>e.roleOrganisationTypeFilters,()=>e.roleOrganisationFilters],a,I,B);return{placeholder:D,toggleSet:M,RoleType:l,loading:k,roles:m,roleTypeColor:ee,roleTypeLabel:x,onUpdate:j}}});function te(e,a,f,b,F,h){const i=O("FSChip"),p=O("FSAutocompleteField");return R(),v(p,U({label:e.$props.label??e.$tr("ui.common.role","Role"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.roles,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":n(({item:o})=>[o.icon?(R(),v(q,{key:0},{default:n(()=>[L(P(o.icon),1)]),_:2},1024)):z("",!0)]),"item-append":n(({item:o})=>[g(i,{color:e.roleTypeColor(o.type),label:e.roleTypeLabel(o.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":n(o=>[g(A,{prependIcon:o.item.icon,variant:o.getVariant(o.item),color:o.getColor(o.item),class:J(o.getClass(o.item)),label:o.item.label,onClick:m=>o.toggle(o.item)},G({_:2},[o.item.type?{name:"append",fn:n(()=>[g(i,{color:e.roleTypeColor(o.item.type),label:e.roleTypeLabel(o.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const $=Y(N,[["render",te]]);N.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"RoleType[] | RoleType"},required:!1,defaultValue:{func:!1,value:"RoleType.None"}},{name:"ignoreRoleOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreRoleOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};const qt={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:a})=>({components:{FSAutocompleteRole:$,FSCol:Z},props:Object.keys(a),setup(){return{...e}},template:`
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
