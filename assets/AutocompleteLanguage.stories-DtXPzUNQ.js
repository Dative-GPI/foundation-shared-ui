var C=Object.defineProperty;var $=(e,t,o)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>$(e,typeof t!="symbol"?t+"":t,o);import{d as q,c as p,B as s,D as g,m as D,I as _,J as d,K as k,L as U,H as N}from"./vue.esm-bundler-B9lxvfDw.js";import{F as T}from"./FSAutocompleteField-CPNDx3_i.js";import{F as S}from"./FSIcon-kCffLiJ2.js";import{G as B}from"./base-CmdGny12.js";import{C as G}from"./composableFactory-CzIPMomJ.js";import{S as x}from"./serviceFactory-DGf7dwWo.js";import{u as I}from"./useAutocomplete-DCXZYzKe.js";import{u as M}from"./useTranslations-AmWs0SAL.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as j}from"./FSCol-BwxAijHz.js";import"./FSSearchField-OT9cCDCH.js";import"./FSTextField-mjFAiq2r.js";import"./FSBaseField-CSo0Z4y4.js";import"./FSSpan-COYXSDbp.js";import"./useBreakpoints-Dc84uxeD.js";import"./useSlots-BioZKQqg.js";import"./FSRow-CFa9RNor.js";import"./css-BHrR5cp2.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./FSButton-CxA5c6KR.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./FSCard-BwbWypiX.js";import"./VProgressCircular-DSOzHF7B.js";import"./color-CLtf7Qrc.js";import"./useRender-DM2jvMPN.js";import"./resizeObserver-DjRdaT-k.js";import"./VIcon-DPcX_RaC.js";import"./icons-B5bBvhw0.js";import"./useRules-Cun-4MZo.js";import"./VField-BoZICv48.js";import"./index-7AXDWkBX.js";import"./transition-Dh_EAQcC.js";import"./VLabel-CT69iMfY.js";import"./VInput-DcZY3iGt.js";import"./locale-C647X9dJ.js";import"./proxiedModel-DRvKxps3.js";import"./density-DvMOIaQw.js";import"./dimensions-n1mPaUbN.js";import"./loader-CaGstafT.js";import"./anchor-ByUPiJZt.js";import"./rounded-BrvRf1BO.js";import"./VDefaultsProvider-BurwYF19.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-Dli51uy9.js";import"./FSDialogMenu-DW8xl5CQ.js";import"./VDialog-CdFKtTkF.js";import"./VOverlay-DhmZjj8a.js";import"./display-BzNfeHa8.js";import"./lazy-B_HJlRZe.js";import"./router-BlaQ2-ft.js";import"./scopeId-4Hx_BsCg.js";import"./FSSlideGroup-CS_aA5Ur.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BETncHzg.js";import"./VSlideGroup-6AACxYIN.js";import"./goto-BiKnNwZ0.js";import"./group-BLkb5Gt4.js";import"./VSlideGroupItem-C_H8qOqk.js";import"./FSToggleSet-ByYfXxag.js";import"./FSWrapGroup-rn2r_UVH.js";import"./FSCheckbox-8fnFFMk6.js";import"./VCheckboxBtn-BM2tTzJT.js";import"./VSelectionControl-COH1jBNJ.js";import"./index-EdIR5CJS.js";import"./FSFadeOut-DwiC6ECo.js";import"./FSLoader-FkDR4IbG.js";import"./elevation-DZ0Sccyb.js";import"./FSRadio-0LKeB0Ro.js";import"./VSelect-DVFoBPCa.js";import"./VList-CuJqKfkq.js";import"./ssrBoot-butIQ2KL.js";import"./variant-BIgPYL9J.js";import"./VImg-UzuohEtG.js";import"./VDivider-CJxliPT_.js";import"./VMenu-etFegoZJ.js";import"./filter-7QmGX2th.js";import"./lodash-DyRFk5BS.js";class v{constructor(t){l(this,"id");l(this,"icon");l(this,"code");l(this,"label");this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class E extends v{constructor(t){super(t)}}const R=()=>`${B()}/languages`,H=new x("language",E).create(e=>e.build(e.addGetMany(R,v),e.addNotify())),J=G.getMany(H),h=q({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:T,FSIcon:S},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:u,entities:n}=J(),{$tr:m}=M(),i=p(()=>A.value&&u.value),a=p(()=>e.multiple&&e.modelValue?m("autocomplete.language.placeholder","{0} language(s) selected",e.modelValue.length):null),y=w=>o({...e.languageFilters,search:w??void 0}),{toggleSet:L,init:A,onUpdate:V}=I(n,[()=>e.languageFilters],t,y);return{placeholder:a,languages:n,toggleSet:L,loading:i,onUpdate:V}}});function K(e,t,o,u,n,m){const i=_("FSAutocompleteField");return d(),s(i,D({label:e.$tr("ui.common.language","Language"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":g(({item:a})=>[a.icon?(d(),s(S,{key:0},{default:g(()=>[k(U(a.icon),1)]),_:2},1024)):N("",!0)]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const F=O(h,[["render",K]]);h.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const Lt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:F,FSCol:j},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const At=["Variations"];export{r as Variations,At as __namedExportsOrder,Lt as default};
