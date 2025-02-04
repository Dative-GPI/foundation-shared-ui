var _=Object.defineProperty;var $=(e,o,t)=>o in e?_(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var i=(e,o,t)=>$(e,typeof o!="symbol"?o+"":o,t);import{d as T,c as p,A as d,D as g,l as q,H as D,I as v,F as N,J as U,K as k}from"./vue.esm-bundler-NAfsqApI.js";import{F as E}from"./FSAutocompleteField-Dosoxp9w.js";import{F as O}from"./FSIcon-Dq2bxLH5.js";import{P as L}from"./permissionInfos-BPDgTHQl.js";import{C as B}from"./base-D1kf-R5n.js";import{C as l}from"./composableFactory-WcheuuwI.js";import{S as j}from"./serviceFactory-DMr1GitK.js";import{u as x}from"./useAutocomplete-BRqVXZAd.js";import{u as M}from"./useTranslations-CxiknF7e.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as G}from"./FSCol-CPY6S-Xd.js";import"./FSSearchField-LHGjxxhV.js";import"./FSTextField-Dzov9hcU.js";import"./FSBaseField-CjhswGig.js";import"./FSSpan-CLtVPKpS.js";import"./useBreakpoints-BwxwzcAl.js";import"./useSlots-S0O9Daut.js";import"./FSRow-GjwhmX1p.js";import"./css-DBDqGZ-V.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./FSButton-CnXo3fLV.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSClickable-Dvaj3J5M.js";import"./FSCard-DOESxZy8.js";import"./VProgressCircular-B6p7zTwg.js";import"./color-BvydW9AS.js";import"./resizeObserver-CLnVcpcq.js";import"./VIcon-PiNvAqE-.js";import"./useRules-pqUeO9kt.js";import"./VField-KOKiCRZA.js";import"./index-Dne_26Gx.js";import"./transition-L7INWkz2.js";import"./VLabel-BDFzMscP.js";import"./VInput-B5HH3Lye.js";import"./locale-CAPEya44.js";import"./density-BGeA8UH8.js";import"./dimensions-IFPI4Yq9.js";import"./proxiedModel-sn-eI_a5.js";import"./form-DTsyvZhj.js";import"./loader-DsBOwpms.js";import"./anchor-DvtYZGyi.js";import"./rounded-DwVJT96z.js";import"./VDefaultsProvider-BngNLuXK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DINlpRuJ.js";import"./VList-Cf1cUG92.js";import"./VDialog-uWe1mq7l.js";import"./VOverlay-CNRAdbgq.js";import"./display-Bn-MFLq6.js";import"./scopeId-CbPxXtFO.js";import"./router-0GC4RTMW.js";import"./ssrBoot-BkO-TPgF.js";import"./border-C5v47RY4.js";import"./elevation-B-XsQHpK.js";import"./index-o6vlk9JB.js";import"./VImg-D7CqP58l.js";import"./FSSlideGroup-Cl7IgSOt.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwecMMW5.js";import"./VSlideGroupItem-BvOdViLK.js";import"./group-Dl43T2CL.js";import"./FSToggleSet-CBrw8ECP.js";import"./FSWrapGroup-C3Z0hZ7U.js";import"./FSCheckbox-CZADXYvb.js";import"./VSelectionControl-CV2pv1R-.js";import"./FSFadeOut-D3iDD7Hj.js";import"./FSLoader-C8dZP0ML.js";import"./FSRadio-Bz6eMy_b.js";import"./VSelect-aoHOo6gx.js";import"./VMenu-D8AvjW2T.js";import"./filter-DH9_huac.js";import"./useAppOrganisationId-CZPUgkT3.js";import"./lodash-BrWYvtk2.js";class R{constructor(o){i(this,"id");i(this,"roleId");i(this,"organisationId");i(this,"userType");i(this,"icon");i(this,"code");i(this,"label");i(this,"tags");i(this,"permissions");this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.permissions=o.permissions.map(t=>new L(t))}}class H extends R{constructor(t){super(t);i(this,"description");this.description=t.description}}const b=()=>`${B()}/service-account-role-organisations`,J=e=>`${b()}/${encodeURIComponent(e)}`,r=new j("serviceAccountOrganisation",H).createComplete(b,J,R);l.get(r);const K=l.getMany(r);l.create(r);l.update(r);l.remove(r);const h=T({name:"FSAutocompleteServiceAccountRoleOrganisation",components:{FSAutocompleteField:E,FSIcon:O},props:{serviceAccountRoleOrganisationsFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:t,fetching:u,entities:s}=K(),{$tr:m}=M(),c=p(()=>V.value&&u.value),n=p(()=>e.multiple&&e.modelValue?m("autocomplete.service-account-role.placeholder","{0} role(s) selected",e.modelValue.length):null),F=w=>t({...e.serviceAccountRoleOrganisationsFilters,search:w??void 0}),{toggleSet:C,init:V,onUpdate:I}=x(s,[()=>e.serviceAccountRoleOrganisationsFilters],o,F);return{serviceAccountRoleOrganisations:s,placeholder:n,toggleSet:C,loading:c,onUpdate:I}}});function z(e,o,t,u,s,m){const c=D("FSAutocompleteField");return v(),d(c,q({label:e.$props.label??e.$tr("ui.common.service-account-role","Service account role"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.serviceAccountRoleOrganisations,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":g(({item:n})=>[n.icon?(v(),d(O,{key:0},{default:g(()=>[U(k(n.icon),1)]),_:2},1024)):N("",!0)]),_:1},16,["label","toggleSet","items","multiple","placeholder","loading","modelValue","onUpdate:modelValue"])}const y=P(h,[["render",z]]);h.__docgenInfo={displayName:"FSAutocompleteServiceAccountRoleOrganisation",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountRoleOrganisationsFilters",type:{name:"ServiceAccountRoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteServiceAccountRoleOrganisation.vue"]};const Ro={title:"Foundation/Core/Autocompletes/AutocompleteServiceAccountRoleOrganisation",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteServiceAccountRoleOrganisation:y,FSCol:G},props:Object.keys(o),setup(){return{...e}},template:`
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
