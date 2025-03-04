var _=Object.defineProperty;var $=(e,o,t)=>o in e?_(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var i=(e,o,t)=>$(e,typeof o!="symbol"?o+"":o,t);import{d as T,c as p,A as d,D as g,l as q,H as D,I as v,F as N,J as U,K as k}from"./vue.esm-bundler-BD3cPSox.js";import{F as E}from"./FSAutocompleteField-CNziED-u.js";import{F as O}from"./FSIcon-BikiybNc.js";import{P as L}from"./permissionInfos-BPDgTHQl.js";import{C as B}from"./base-Dl3FgNgM.js";import{C as l}from"./composableFactory-uBEY979O.js";import{S as j}from"./serviceFactory-B3o6Bvwt.js";import{u as x}from"./useAutocomplete-BGAR7scz.js";import{u as M}from"./useTranslations-aJtH5CGl.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as G}from"./FSCol-C9a7BKGp.js";import"./FSSearchField-BpTRPB0M.js";import"./FSTextField-P8lWx7Ri.js";import"./FSBaseField-04YhYRH0.js";import"./FSSpan-CqHf-ny6.js";import"./useBreakpoints-CnZdRDE7.js";import"./useSlots-DhthX9xh.js";import"./FSRow-CopwEayK.js";import"./css-CmnfRCoE.js";import"./useColors-Cu9vf_Ix.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B93wSOzC.js";import"./FSButton-CQA40iQ2.js";import"./FSRouterLink-_G3m0SRF.js";import"./vue-router-Ds_E4c-X.js";import"./FSClickable-BsEc8iHI.js";import"./FSCard-DOwp-V9l.js";import"./VProgressCircular-Ca7Fp11Q.js";import"./color-DAd2dJIE.js";import"./resizeObserver-BdS48m16.js";import"./VIcon-ef9P0Odv.js";import"./useRules-Bpmg6xi7.js";import"./VField-_4f0OeoM.js";import"./index-CcZ3F2bM.js";import"./transition-BVEL_Cnv.js";import"./VLabel-gCKEzUPw.js";import"./VInput-D-36mGWK.js";import"./locale-Cg0C6Moy.js";import"./density-Dp_zkCfD.js";import"./dimensions-DbGEEU80.js";import"./proxiedModel-JzK6JHhO.js";import"./form-DhAzn97I.js";import"./loader-DirtECG2.js";import"./anchor-Ce3a1Oj_.js";import"./rounded-idSslOdv.js";import"./VDefaultsProvider-rHrX99un.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Ov0xN_Hx.js";import"./VList-B1NoTgR2.js";import"./VDialog-BLZ0rQaD.js";import"./VOverlay-D-tSP_Gg.js";import"./display-D74v7vg7.js";import"./scopeId-CdDRBDvT.js";import"./router-BdSI2seK.js";import"./ssrBoot-BSKtbDuI.js";import"./border-CUiZ6XeR.js";import"./elevation-C4p0Fj2B.js";import"./index-BRxggfmq.js";import"./VImg-DqEZxS4C.js";import"./FSSlideGroup-BX0UkKdi.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-B3zS2F8_.js";import"./VSlideGroupItem-BuoHA9mk.js";import"./group-B_AHtZDM.js";import"./FSToggleSet-DDZ_-ts7.js";import"./FSWrapGroup-BXAsHxAi.js";import"./FSCheckbox-DsWNnHeY.js";import"./VSelectionControl-CDPTHhw0.js";import"./FSFadeOut-FPHnkeYn.js";import"./FSLoader-DTAq-3Vo.js";import"./FSRadio-C8sbm974.js";import"./VSelect-B9x7lGfo.js";import"./VMenu-iLNk3WZy.js";import"./filter-VzgWnVmw.js";import"./useAppOrganisationId-C1bzpuv9.js";import"./lodash-BrWYvtk2.js";class R{constructor(o){i(this,"id");i(this,"roleId");i(this,"organisationId");i(this,"userType");i(this,"icon");i(this,"code");i(this,"label");i(this,"tags");i(this,"permissions");this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.permissions=o.permissions.map(t=>new L(t))}}class H extends R{constructor(t){super(t);i(this,"description");this.description=t.description}}const b=()=>`${B()}/service-account-role-organisations`,J=e=>`${b()}/${encodeURIComponent(e)}`,r=new j("serviceAccountOrganisation",H).createComplete(b,J,R);l.get(r);const K=l.getMany(r);l.create(r);l.update(r);l.remove(r);const h=T({name:"FSAutocompleteServiceAccountRoleOrganisation",components:{FSAutocompleteField:E,FSIcon:O},props:{serviceAccountRoleOrganisationsFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:t,fetching:u,entities:s}=K(),{$tr:m}=M(),c=p(()=>V.value&&u.value),n=p(()=>e.multiple&&e.modelValue?m("autocomplete.service-account-role.placeholder","{0} role(s) selected",e.modelValue.length):null),F=w=>t({...e.serviceAccountRoleOrganisationsFilters,search:w??void 0}),{toggleSet:C,init:V,onUpdate:I}=x(s,[()=>e.serviceAccountRoleOrganisationsFilters],o,F);return{serviceAccountRoleOrganisations:s,placeholder:n,toggleSet:C,loading:c,onUpdate:I}}});function z(e,o,t,u,s,m){const c=D("FSAutocompleteField");return v(),d(c,q({label:e.$props.label??e.$tr("ui.common.service-account-role","Service account role"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.serviceAccountRoleOrganisations,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":g(({item:n})=>[n.icon?(v(),d(O,{key:0},{default:g(()=>[U(k(n.icon),1)]),_:2},1024)):N("",!0)]),_:1},16,["label","toggleSet","items","multiple","placeholder","loading","modelValue","onUpdate:modelValue"])}const y=P(h,[["render",z]]);h.__docgenInfo={displayName:"FSAutocompleteServiceAccountRoleOrganisation",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountRoleOrganisationsFilters",type:{name:"ServiceAccountRoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteServiceAccountRoleOrganisation.vue"]};const Ro={title:"Foundation/Core/Autocompletes/AutocompleteServiceAccountRoleOrganisation",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteServiceAccountRoleOrganisation:y,FSCol:G},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(A=(f=a.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const bo=["Variations"];export{a as Variations,bo as __namedExportsOrder,Ro as default};
