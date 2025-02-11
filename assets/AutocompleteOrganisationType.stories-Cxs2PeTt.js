var V=Object.defineProperty;var C=(e,t,o)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var a=(e,t,o)=>C(e,typeof t!="symbol"?t+"":t,o);import{d as w,c as p,A as D,l as $,H as I,I as q}from"./vue.esm-bundler-BD3cPSox.js";import{F as _}from"./FSAutocompleteField-DFb3lyeo.js";import{C as U}from"./base-Dl3FgNgM.js";import{C as g}from"./composableFactory-uBEY979O.js";import{S as k}from"./serviceFactory-DMr1GitK.js";import{u as N}from"./useAutocomplete-BGAR7scz.js";import{u as R}from"./useTranslations-aJtH5CGl.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as E}from"./FSCol-C9a7BKGp.js";import"./FSSearchField-C59ZFn1o.js";import"./FSTextField-DHU8-iy6.js";import"./FSBaseField-BvFJ1Ol8.js";import"./FSSpan-CqHf-ny6.js";import"./useBreakpoints-CnZdRDE7.js";import"./useSlots-DhthX9xh.js";import"./FSRow-CopwEayK.js";import"./css-CmnfRCoE.js";import"./useColors-Cu9vf_Ix.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B93wSOzC.js";import"./FSButton-CQA40iQ2.js";import"./FSRouterLink-_G3m0SRF.js";import"./vue-router-Ds_E4c-X.js";import"./FSClickable-BsEc8iHI.js";import"./FSCard-DOwp-V9l.js";import"./VProgressCircular-Ca7Fp11Q.js";import"./color-DAd2dJIE.js";import"./resizeObserver-BdS48m16.js";import"./VIcon-ef9P0Odv.js";import"./FSIcon-BikiybNc.js";import"./useRules-Bpmg6xi7.js";import"./VField-_4f0OeoM.js";import"./index-CcZ3F2bM.js";import"./transition-BVEL_Cnv.js";import"./VLabel-gCKEzUPw.js";import"./VInput-D-36mGWK.js";import"./locale-Cg0C6Moy.js";import"./density-Dp_zkCfD.js";import"./dimensions-DbGEEU80.js";import"./proxiedModel-JzK6JHhO.js";import"./form-DhAzn97I.js";import"./loader-DirtECG2.js";import"./anchor-Ce3a1Oj_.js";import"./rounded-idSslOdv.js";import"./VDefaultsProvider-rHrX99un.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Ov0xN_Hx.js";import"./VList-B1NoTgR2.js";import"./VDialog-BLZ0rQaD.js";import"./VOverlay-D-tSP_Gg.js";import"./display-D74v7vg7.js";import"./scopeId-CdDRBDvT.js";import"./router-BdSI2seK.js";import"./ssrBoot-BSKtbDuI.js";import"./border-CUiZ6XeR.js";import"./elevation-C4p0Fj2B.js";import"./index-BRxggfmq.js";import"./VImg-DqEZxS4C.js";import"./FSSlideGroup-BX0UkKdi.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-B3zS2F8_.js";import"./VSlideGroupItem-BuoHA9mk.js";import"./group-B_AHtZDM.js";import"./FSToggleSet-DDZ_-ts7.js";import"./FSWrapGroup-BXAsHxAi.js";import"./FSCheckbox-CM6E8uCY.js";import"./VSelectionControl-CDPTHhw0.js";import"./FSFadeOut-FPHnkeYn.js";import"./FSLoader-DTAq-3Vo.js";import"./FSRadio-DNoTFnQV.js";import"./VSelect-D40GRNzX.js";import"./VMenu-iLNk3WZy.js";import"./filter-VzgWnVmw.js";import"./useAppOrganisationId-C1bzpuv9.js";import"./lodash-BrWYvtk2.js";class c{constructor(t){a(this,"id");a(this,"mainDashboardId");a(this,"mainDashboardType");a(this,"code");a(this,"label");this.id=t.id,this.mainDashboardId=t.mainDashboardId,this.mainDashboardType=t.mainDashboardType,this.code=t.code,this.label=t.label}}class G extends c{constructor(o){super(o);a(this,"description");this.description=o.description}}const y=()=>`${U()}/organisation-types`,M=e=>`${y()}/${encodeURIComponent(e)}`,f=new k("organisationType",G).create(e=>e.build(e.addGet(M),e.addGetMany(y,c),e.addNotify()));g.get(f);const j=g.getMany(f),b=w({name:"FSAutocompleteOrganisationType",components:{FSAutocompleteField:_},props:{organisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:r,entities:l}=j(),{$tr:s}=R(),n=p(()=>O.value&&r.value),h=p(()=>e.multiple&&e.modelValue?s("autocomplete.organisation-type.placeholder","{0} organisation type(s) selected",e.modelValue.length):null),v=A=>o({...e.organisationTypeFilters,search:A??void 0}),{toggleSet:S,init:O,onUpdate:F}=N(l,[()=>e.organisationTypeFilters],t,v);return{organisationTypes:l,placeholder:h,toggleSet:S,loading:n,onUpdate:F}}});function L(e,t,o,r,l,s){const n=I("FSAutocompleteField");return q(),D(n,$({label:e.$props.label??e.$tr("ui.common.organisation-type","Organisation type"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.organisationTypes,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const T=B(b,[["render",L]]);b.__docgenInfo={displayName:"FSAutocompleteOrganisationType",exportName:"default",description:"",tags:{},props:[{name:"organisationTypeFilters",type:{name:"OrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteOrganisationType.vue"]};const dt={title:"Foundation/Core/Autocompletes/AutocompleteOrganisationType",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteOrganisationType:T,FSCol:E},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteOrganisationType
        label="OrganisationType"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var m,u,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      FSAutocompleteOrganisationType,
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
      <FSAutocompleteOrganisationType
        label="OrganisationType"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const gt=["Variations"];export{i as Variations,gt as __namedExportsOrder,dt as default};
