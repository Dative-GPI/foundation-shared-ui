import{d as E,c as d,z as v,C as n,m as U,G as O,H as R,Q as g,D as L,B as P,E as z,I as G,J as H}from"./vue.esm-bundler-CUSnV4DE.js";import{F as J}from"./FSAutocompleteField-CKnbZeUq.js";import{F as A}from"./FSButton-BTpAdEE5.js";import{F as Q}from"./FSChip-B4fQRAFB.js";import{F as q}from"./FSIcon-Cp7BQBW6.js";import{u as W}from"./useRoleOrganisationTypes-sIwYVTcY.js";import{u as K}from"./useRoleOrganisations-BB2-Qrg_.js";import{u as w}from"./useTranslations-D0SM0QeA.js";import{C as c}from"./useColors-CQZIO9RQ.js";import{u as X}from"./useAutocomplete-JLCgZTVD.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Z}from"./FSCol-BQiFrdcO.js";import"./FSSearchField-eXvJVmGa.js";import"./FSTextField-MbUkXGoG.js";import"./FSBaseField-DwmVeNEG.js";import"./FSSpan-M9GEX7v6.js";import"./useBreakpoints-CQzBW1Q0.js";import"./useSlots-CY84M1fx.js";import"./FSRow-hpHYWcoJ.js";import"./css-BnRE2gle.js";import"./useRules-CYZMRvpC.js";import"./VField-B_GuA4vu.js";import"./index-DDQZ-RJM.js";import"./color-CgsoZSKd.js";import"./theme-DGuAngmo.js";import"./transition-C81aHyit.js";import"./VLabel-DSsJm0B6.js";import"./VInput-C8lN0V_S.js";import"./locale-DYN4KMd8.js";import"./VIcon-DeLOaNVc.js";import"./density-DAqBVexQ.js";import"./dimensions-BI5CQRk1.js";import"./proxiedModel-DaBGAliH.js";import"./loader-BjfLeESU.js";import"./VProgressCircular-BbyuaGSs.js";import"./resizeObserver-Hv1_IiVG.js";import"./anchor-MMgLgK3d.js";import"./rounded-DQzQH8wE.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CeZa2hiu.js";import"./VList-0zKlnGxf.js";import"./FSCard-BnVyMFnh.js";import"./VDialog-Co_Esry_.js";import"./VOverlay-BKGgaXLT.js";import"./display-DbvBihXn.js";import"./scopeId-DP5cc-6o.js";import"./router-C6XMMO7F.js";import"./ssrBoot-Cb1Ys1Hl.js";import"./border-CdoaLNWv.js";import"./elevation-C08MHLji.js";import"./index-BdaiM53K.js";import"./VImg-DinzZLZB.js";import"./FSSlideGroup-BKtLKoi-.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DC1JdNxL.js";import"./VSlideGroupItem-G437Dc1S.js";import"./group-CrKBhSLQ.js";import"./FSToggleSet-gSDjdstT.js";import"./FSWrapGroup-DswCzfON.js";import"./FSCheckbox-DT2R4my4.js";import"./VSelectionControl-BrUoGkRx.js";import"./FSFadeOut-BguakrVC.js";import"./FSLoader-BxWH0Nmg.js";import"./FSRadio-BICP5Dmr.js";import"./VSelect-CO7kggYd.js";import"./VMenu-BYRtZ3M5.js";import"./filter-BDc_Ne3E.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSClickable-Bn4xIsxH.js";import"./permissionInfos-BPDgTHQl.js";import"./base-DyefFz5t.js";import"./useAppOrganisationId-D-BntkEj.js";import"./composableFactory-DWA25NsU.js";import"./serviceFactory-B3o6Bvwt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BrWYvtk2.js";import"./index-DfSX31J9.js";var l=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e))(l||{});const{$tr:y}=w(),x=e=>{switch(e){case l.None:return y("ui.common.none","None");case l.Organisation:return y("ui.common.custom","Custom");case l.OrganisationType:return y("ui.common.shared","Shared")}},ee=e=>{switch(e){case l.None:return c.Error;case l.Organisation:return c.Primary;case l.OrganisationType:return c.Warning}},N=E({name:"FSAutocompleteRole",components:{FSAutocompleteField:J,FSButton:A,FSChip:Q,FSIcon:q},props:{roleOrganisationTypeFilters:{type:Object,required:!1,default:null},roleOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:l.None},ignoreRoleOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreRoleOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update","update:modelValue","update:type"],setup(e,{emit:a}){const{getMany:f,fetching:b,entities:F}=W(),{getMany:h,fetching:i,entities:p}=K(),{$tr:o}=w(),m=d(()=>F.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:l.OrganisationType})).concat(p.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:l.Organisation})))),k=d(()=>_.value&&(b.value||i.value)),D=d(()=>e.multiple&&e.modelValue?o("autocomplete.role.placeholder","{0} role(s) selected",e.modelValue.length):null),B=t=>{if(Array.isArray(t)){const r=t.map(u=>u.id),S=t.map(u=>u.type);a("update:modelValue",r),a("update:type",S),a("update",{modelValue:r,type:S})}else a("update:modelValue",t==null?void 0:t.id),a("update:type",t==null?void 0:t.type),a("update",{modelValue:t==null?void 0:t.id,type:t==null?void 0:t.type})},I=t=>{const r=[];return e.ignoreRoleOrganisations||r.push(h({...e.roleOrganisationFilters,search:t??void 0})),e.ignoreRoleOrganisationTypes||r.push(f({...e.roleOrganisationTypeFilters,search:t??void 0})),Promise.all(r)},{toggleSet:M,init:_,onUpdate:j}=X(m,[()=>e.roleOrganisationTypeFilters,()=>e.roleOrganisationFilters],a,I,B);return{placeholder:D,toggleSet:M,RoleType:l,loading:k,roles:m,roleTypeColor:ee,roleTypeLabel:x,onUpdate:j}}});function te(e,a,f,b,F,h){const i=O("FSChip"),p=O("FSAutocompleteField");return R(),v(p,U({label:e.$props.label??e.$tr("ui.common.role","Role"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.roles,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":n(({item:o})=>[o.icon?(R(),v(q,{key:0},{default:n(()=>[G(H(o.icon),1)]),_:2},1024)):z("",!0)]),"item-append":n(({item:o})=>[g(i,{color:e.roleTypeColor(o.type),label:e.roleTypeLabel(o.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":n(o=>[g(A,{prependIcon:o.item.icon,variant:o.getVariant(o.item),color:o.getColor(o.item),class:L(o.getClass(o.item)),label:o.item.label,onClick:m=>o.toggle(o.item)},P({_:2},[o.item.type?{name:"append",fn:n(()=>[g(i,{color:e.roleTypeColor(o.item.type),label:e.roleTypeLabel(o.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const $=Y(N,[["render",te]]);N.__docgenInfo={displayName:"FSAutocompleteRole",exportName:"default",description:"",tags:{},props:[{name:"roleOrganisationTypeFilters",type:{name:"RoleOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationFilters",type:{name:"RoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"RoleType[] | RoleType"},required:!1,defaultValue:{func:!1,value:"RoleType.None"}},{name:"ignoreRoleOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreRoleOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue"]};const At={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:a})=>({components:{FSAutocompleteRole:$,FSCol:Z},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(T=(C=s.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const qt=["Variations"];export{s as Variations,qt as __namedExportsOrder,At as default};
