import{d as E,c as d,A as v,D as n,l as U,H as O,I as R,R as g,E as L,C as P,F as z,J as H,K as J}from"./vue.esm-bundler-BD3cPSox.js";import{F as K}from"./FSAutocompleteField-DFb3lyeo.js";import{F as A}from"./FSButton-CQA40iQ2.js";import{F as W}from"./FSChip-D4m4Movw.js";import{F as q}from"./FSIcon-BikiybNc.js";import{u as G}from"./useRoleOrganisationTypes-YgCwxvQx.js";import{u as Q}from"./useRoleOrganisations-7ogudTuf.js";import{u as w}from"./useTranslations-aJtH5CGl.js";import{C as c}from"./useColors-Cu9vf_Ix.js";import{u as X}from"./useAutocomplete-BGAR7scz.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Z}from"./FSCol-C9a7BKGp.js";import"./FSSearchField-C59ZFn1o.js";import"./FSTextField-DHU8-iy6.js";import"./FSBaseField-BvFJ1Ol8.js";import"./FSSpan-CqHf-ny6.js";import"./useBreakpoints-CnZdRDE7.js";import"./useSlots-DhthX9xh.js";import"./FSRow-CopwEayK.js";import"./css-CmnfRCoE.js";import"./useRules-Bpmg6xi7.js";import"./VField-_4f0OeoM.js";import"./index-CcZ3F2bM.js";import"./color-DAd2dJIE.js";import"./theme-B93wSOzC.js";import"./transition-BVEL_Cnv.js";import"./VLabel-gCKEzUPw.js";import"./VInput-D-36mGWK.js";import"./locale-Cg0C6Moy.js";import"./VIcon-ef9P0Odv.js";import"./density-Dp_zkCfD.js";import"./dimensions-DbGEEU80.js";import"./proxiedModel-JzK6JHhO.js";import"./form-DhAzn97I.js";import"./loader-DirtECG2.js";import"./VProgressCircular-Ca7Fp11Q.js";import"./resizeObserver-BdS48m16.js";import"./anchor-Ce3a1Oj_.js";import"./rounded-idSslOdv.js";import"./VDefaultsProvider-rHrX99un.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Ov0xN_Hx.js";import"./VList-B1NoTgR2.js";import"./FSCard-DOwp-V9l.js";import"./VDialog-BLZ0rQaD.js";import"./VOverlay-D-tSP_Gg.js";import"./display-D74v7vg7.js";import"./scopeId-CdDRBDvT.js";import"./router-BdSI2seK.js";import"./ssrBoot-BSKtbDuI.js";import"./border-CUiZ6XeR.js";import"./elevation-C4p0Fj2B.js";import"./index-BRxggfmq.js";import"./VImg-DqEZxS4C.js";import"./FSSlideGroup-BX0UkKdi.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-B3zS2F8_.js";import"./VSlideGroupItem-BuoHA9mk.js";import"./group-B_AHtZDM.js";import"./FSToggleSet-DDZ_-ts7.js";import"./FSWrapGroup-BXAsHxAi.js";import"./FSCheckbox-CM6E8uCY.js";import"./VSelectionControl-CDPTHhw0.js";import"./FSFadeOut-FPHnkeYn.js";import"./FSLoader-DTAq-3Vo.js";import"./FSRadio-DNoTFnQV.js";import"./VSelect-D40GRNzX.js";import"./VMenu-iLNk3WZy.js";import"./filter-VzgWnVmw.js";import"./FSRouterLink-_G3m0SRF.js";import"./vue-router-Ds_E4c-X.js";import"./FSClickable-BsEc8iHI.js";import"./permissionInfos-BPDgTHQl.js";import"./base-Dl3FgNgM.js";import"./useAppOrganisationId-C1bzpuv9.js";import"./composableFactory-uBEY979O.js";import"./serviceFactory-B3o6Bvwt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BrWYvtk2.js";import"./index-DfSX31J9.js";var l=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e))(l||{});const{$tr:y}=w(),x=e=>{switch(e){case l.None:return y("ui.common.none","None");case l.Organisation:return y("ui.common.custom","Custom");case l.OrganisationType:return y("ui.common.shared","Shared")}},ee=e=>{switch(e){case l.None:return c.Error;case l.Organisation:return c.Primary;case l.OrganisationType:return c.Warning}},N=E({name:"FSAutocompleteRole",components:{FSAutocompleteField:K,FSButton:A,FSChip:W,FSIcon:q},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:l.None},ignoreRoleOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreRoleOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update","update:modelValue","update:type"],setup(e,{emit:a}){const{getMany:f,fetching:b,entities:F}=G(),{getMany:h,fetching:i,entities:p}=Q(),{$tr:o}=w(),m=d(()=>F.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:l.OrganisationType})).concat(p.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:l.Organisation})))),k=d(()=>_.value&&(b.value||i.value)),D=d(()=>e.multiple&&e.modelValue?o("autocomplete.role.placeholder","{0} role(s) selected",e.modelValue.length):null),B=t=>{if(Array.isArray(t)){const r=t.map(u=>u.id),S=t.map(u=>u.type);a("update:modelValue",r),a("update:type",S),a("update",{modelValue:r,type:S})}else a("update:modelValue",t==null?void 0:t.id),a("update:type",t==null?void 0:t.type),a("update",{modelValue:t==null?void 0:t.id,type:t==null?void 0:t.type})},I=t=>{const r=[];return e.ignoreRoleOrganisations||r.push(h({...e.roleOrganisationFilters,search:t??void 0})),e.ignoreRoleOrganisationTypes||r.push(f({...e.roleOrganisationTypeFilters,search:t??void 0})),Promise.all(r)},{toggleSet:M,init:_,onUpdate:j}=X(m,[()=>e.roleOrganisationTypeFilters,()=>e.roleOrganisationFilters],a,I,B);return{placeholder:D,toggleSet:M,RoleType:l,loading:k,roles:m,roleTypeColor:ee,roleTypeLabel:x,onUpdate:j}}});function te(e,a,f,b,F,h){const i=O("FSChip"),p=O("FSAutocompleteField");return R(),v(p,U({label:e.$props.label??e.$tr("ui.common.role","Role"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.roles,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":n(({item:o})=>[o.icon?(R(),v(q,{key:0},{default:n(()=>[H(J(o.icon),1)]),_:2},1024)):z("",!0)]),"item-append":n(({item:o})=>[g(i,{color:e.roleTypeColor(o.type),label:e.roleTypeLabel(o.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":n(o=>[g(A,{prependIcon:o.item.icon,variant:o.getVariant(o.item),color:o.getColor(o.item),class:L(o.getClass(o.item)),label:o.item.label,onClick:m=>o.toggle(o.item)},P({_:2},[o.item.type?{name:"append",fn:n(()=>[g(i,{color:e.roleTypeColor(o.item.type),label:e.roleTypeLabel(o.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const $=Y(N,[["render",te]]);N.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"RoleType[] | RoleType"},required:!1,defaultValue:{func:!1,value:"RoleType.None"}},{name:"ignoreRoleOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreRoleOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};const qt={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:a})=>({components:{FSAutocompleteRole:$,FSCol:Z},props:Object.keys(a),setup(){return{...e}},template:`
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
