var _=Object.defineProperty;var $=(e,o,t)=>o in e?_(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var i=(e,o,t)=>$(e,typeof o!="symbol"?o+"":o,t);import{d as T,c as p,z as d,C as g,m as q,G as N,H as v,E as U,I as D,J as E}from"./vue.esm-bundler-CUSnV4DE.js";import{F as k}from"./FSAutocompleteField-CKnbZeUq.js";import{F as O}from"./FSIcon-Cp7BQBW6.js";import{P as L}from"./permissionInfos-BPDgTHQl.js";import{C as B}from"./base-DyefFz5t.js";import{C as l}from"./composableFactory-DWA25NsU.js";import{S as j}from"./serviceFactory-B3o6Bvwt.js";import{u as x}from"./useAutocomplete-JLCgZTVD.js";import{u as G}from"./useTranslations-D0SM0QeA.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as P}from"./FSCol-BQiFrdcO.js";import"./FSSearchField-eXvJVmGa.js";import"./FSTextField-MbUkXGoG.js";import"./FSBaseField-DwmVeNEG.js";import"./FSSpan-M9GEX7v6.js";import"./useBreakpoints-CQzBW1Q0.js";import"./useSlots-CY84M1fx.js";import"./FSRow-hpHYWcoJ.js";import"./css-BnRE2gle.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./FSButton-BTpAdEE5.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSClickable-Bn4xIsxH.js";import"./FSCard-BnVyMFnh.js";import"./VProgressCircular-BbyuaGSs.js";import"./color-CgsoZSKd.js";import"./resizeObserver-Hv1_IiVG.js";import"./VIcon-DeLOaNVc.js";import"./useRules-CYZMRvpC.js";import"./VField-B_GuA4vu.js";import"./index-DDQZ-RJM.js";import"./transition-C81aHyit.js";import"./VLabel-DSsJm0B6.js";import"./VInput-C8lN0V_S.js";import"./locale-DYN4KMd8.js";import"./density-DAqBVexQ.js";import"./dimensions-BI5CQRk1.js";import"./proxiedModel-DaBGAliH.js";import"./loader-BjfLeESU.js";import"./anchor-MMgLgK3d.js";import"./rounded-DQzQH8wE.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CeZa2hiu.js";import"./VList-0zKlnGxf.js";import"./VDialog-Co_Esry_.js";import"./VOverlay-BKGgaXLT.js";import"./display-DbvBihXn.js";import"./scopeId-DP5cc-6o.js";import"./router-C6XMMO7F.js";import"./ssrBoot-Cb1Ys1Hl.js";import"./border-CdoaLNWv.js";import"./elevation-C08MHLji.js";import"./index-BdaiM53K.js";import"./VImg-DinzZLZB.js";import"./FSSlideGroup-BKtLKoi-.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DC1JdNxL.js";import"./VSlideGroupItem-G437Dc1S.js";import"./group-CrKBhSLQ.js";import"./FSToggleSet-gSDjdstT.js";import"./FSWrapGroup-DswCzfON.js";import"./FSCheckbox-DT2R4my4.js";import"./VSelectionControl-BrUoGkRx.js";import"./FSFadeOut-BguakrVC.js";import"./FSLoader-BxWH0Nmg.js";import"./FSRadio-BICP5Dmr.js";import"./VSelect-CO7kggYd.js";import"./VMenu-BYRtZ3M5.js";import"./filter-BDc_Ne3E.js";import"./useAppOrganisationId-D-BntkEj.js";import"./lodash-BrWYvtk2.js";class R{constructor(o){i(this,"id");i(this,"roleId");i(this,"organisationId");i(this,"userType");i(this,"icon");i(this,"code");i(this,"label");i(this,"tags");i(this,"permissions");this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.permissions=o.permissions.map(t=>new L(t))}}class z extends R{constructor(t){super(t);i(this,"description");this.description=t.description}}const b=()=>`${B()}/service-account-role-organisations`,H=e=>`${b()}/${encodeURIComponent(e)}`,r=new j("serviceAccountOrganisation",z).createComplete(b,H,R);l.get(r);const J=l.getMany(r);l.create(r);l.update(r);l.remove(r);const h=T({name:"FSAutocompleteServiceAccountRoleOrganisation",components:{FSAutocompleteField:k,FSIcon:O},props:{serviceAccountRoleOrganisationsFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:t,fetching:u,entities:s}=J(),{$tr:m}=G(),c=p(()=>V.value&&u.value),n=p(()=>e.multiple&&e.modelValue?m("autocomplete.service-account-role.placeholder","{0} role(s) selected",e.modelValue.length):null),F=w=>t({...e.serviceAccountRoleOrganisationsFilters,search:w??void 0}),{toggleSet:C,init:V,onUpdate:I}=x(s,[()=>e.serviceAccountRoleOrganisationsFilters],o,F);return{serviceAccountRoleOrganisations:s,placeholder:n,toggleSet:C,loading:c,onUpdate:I}}});function K(e,o,t,u,s,m){const c=N("FSAutocompleteField");return v(),d(c,q({label:e.$props.label??e.$tr("ui.common.service-account-role","Service account role"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.serviceAccountRoleOrganisations,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":g(({item:n})=>[n.icon?(v(),d(O,{key:0},{default:g(()=>[D(E(n.icon),1)]),_:2},1024)):U("",!0)]),_:1},16,["label","toggleSet","items","multiple","placeholder","loading","modelValue","onUpdate:modelValue"])}const y=M(h,[["render",K]]);h.__docgenInfo={displayName:"FSAutocompleteServiceAccountRoleOrganisation",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountRoleOrganisationsFilters",type:{name:"ServiceAccountRoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteServiceAccountRoleOrganisation.vue"]};const Oo={title:"Foundation/Core/Autocompletes/AutocompleteServiceAccountRoleOrganisation",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteServiceAccountRoleOrganisation:y,FSCol:P},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteServiceAccountRoleOrganisation
        label="ServiceAccountRoleOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteServiceAccountRoleOrganisation
        label="ServiceAccountRoleOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteServiceAccountRoleOrganisation
        label="ServiceAccountRoleOrganisation with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteServiceAccountRoleOrganisation
        label="ServiceAccountRoleOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var S,f,A;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      FSAutocompleteServiceAccountRoleOrganisation,
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
      <FSAutocompleteServiceAccountRoleOrganisation
        label="ServiceAccountRoleOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteServiceAccountRoleOrganisation
        label="ServiceAccountRoleOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteServiceAccountRoleOrganisation
        label="ServiceAccountRoleOrganisation with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteServiceAccountRoleOrganisation
        label="ServiceAccountRoleOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(A=(f=a.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const Ro=["Variations"];export{a as Variations,Ro as __namedExportsOrder,Oo as default};
