var C=Object.defineProperty;var $=(e,t,o)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>$(e,typeof t!="symbol"?t+"":t,o);import{d as q,c as p,B as s,E as g,m as D,I as _,J as d,H as k,A as U,K as N}from"./vue.esm-bundler-CocPPKUI.js";import{F as T}from"./FSAutocompleteField-BeyvUnEw.js";import{F as S}from"./FSIcon-BGuuL0jz.js";import{G as B}from"./base-CmdGny12.js";import{C as G}from"./composableFactory-DRFDSLtA.js";import{S as x}from"./serviceFactory-aQiBqOvf.js";import{u as E}from"./useAutocomplete-_-lhaEIP.js";import{u as I}from"./useTranslations-DJaIYmO0.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as O}from"./FSCol-79-COv64.js";import"./FSSearchField-xkilxT3T.js";import"./FSTextField-HkwYV1Vw.js";import"./FSBaseField-Cn3A38Ti.js";import"./FSSpan-CKhKq6E1.js";import"./useBreakpoints-DZlz3-56.js";import"./useSlots-D4bv69lA.js";import"./FSRow-BvJ7lU5E.js";import"./css-mt76hoAn.js";import"./useColors-C1aD-Kb6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1Gcptw7.js";import"./FSButton-B9T3D7JL.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-CqIDwjuA.js";import"./FSCard-2KUMcI8D.js";import"./VProgressCircular-k_tOz5gX.js";import"./color-D50-hVV_.js";import"./resizeObserver-DDOqpSMx.js";import"./VIcon-ZjKwFcqe.js";import"./useRules-C3-AmzzE.js";import"./VField-CAcTjb6h.js";import"./index-hd-xIizf.js";import"./transition-bMLtH-b3.js";import"./VLabel-yrR5w-fx.js";import"./VInput-JSCg5nQs.js";import"./locale-_fONYh-8.js";import"./density-2KuMGYl6.js";import"./dimensions-Cv9Fwl7U.js";import"./proxiedModel-DW1FRKBO.js";import"./loader-BDqRCawj.js";import"./anchor-D4EnoweD.js";import"./rounded-CBYChxif.js";import"./VDefaultsProvider-CV4ffwSK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-5LM_ZUPq.js";import"./FSDialogMenu-BpQhlEn9.js";import"./VDialog-BpMVGEao.js";import"./VOverlay-BMq2UEr3.js";import"./display-23tZl-3U.js";import"./lazy-Dahsm7lL.js";import"./router-CKzlklLc.js";import"./scopeId-BfaO37qo.js";import"./FSSlideGroup-BoaCkdx0.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BjCs89jV.js";import"./VSlideGroupItem-nAYd2StP.js";import"./group-MFxThiWx.js";import"./FSToggleSet-mQm74CcI.js";import"./FSWrapGroup-DXlgsE59.js";import"./FSCheckbox-MGAv1q-u.js";import"./VCheckboxBtn-CRTq-u2o.js";import"./VSelectionControl-t1Q43Tu7.js";import"./index-BwBNp3ym.js";import"./FSFadeOut-BcV7cYL5.js";import"./FSLoader-JpoH2mis.js";import"./elevation-DUhGVECn.js";import"./FSRadio-D7UyW-G6.js";import"./VSelect-iFfd9zu0.js";import"./VList-7u5M4k2B.js";import"./ssrBoot-B-cFki3l.js";import"./border-ZP5ArpGv.js";import"./VImg-C2WY2bzk.js";import"./VMenu-DLjuHJDK.js";import"./filter-ROZ4nnRZ.js";import"./lodash-Zo30T2Bj.js";class v{constructor(t){l(this,"id");l(this,"icon");l(this,"code");l(this,"label");this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class j extends v{constructor(t){super(t)}}const R=()=>`${B()}/languages`,H=new x("language",j).create(e=>e.build(e.addGetMany(R,v),e.addNotify())),J=G.getMany(H),h=q({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:T,FSIcon:S},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:u,entities:n}=J(),{$tr:m}=I(),i=p(()=>A.value&&u.value),a=p(()=>e.multiple&&e.modelValue?m("autocomplete.language.placeholder","{0} language(s) selected",e.modelValue.length):null),y=w=>o({...e.languageFilters,search:w??void 0}),{toggleSet:L,init:A,onUpdate:V}=E(n,[()=>e.languageFilters],t,y);return{placeholder:a,languages:n,toggleSet:L,loading:i,onUpdate:V}}});function K(e,t,o,u,n,m){const i=_("FSAutocompleteField");return d(),s(i,D({label:e.$tr("ui.common.language","Language"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":g(({item:a})=>[a.icon?(d(),s(S,{key:0},{default:g(()=>[U(N(a.icon),1)]),_:2},1024)):k("",!0)]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const F=M(h,[["render",K]]);h.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const St={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:F,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteLanguage
        label="Language"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var c,f,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      FSAutocompleteLanguage,
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
      <FSAutocompleteLanguage
        label="Language"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const vt=["Variations"];export{r as Variations,vt as __namedExportsOrder,St as default};
