var C=Object.defineProperty;var $=(e,t,o)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>$(e,typeof t!="symbol"?t+"":t,o);import{d as q,c as p,B as s,E as g,m as D,I as _,J as d,H as k,A as U,K as N}from"./vue.esm-bundler-CC_jVOJ5.js";import{F as T}from"./FSAutocompleteField-ChGdda7D.js";import{F as S}from"./FSIcon-CeLDRxMK.js";import{G as B}from"./base-CmdGny12.js";import{C as G}from"./composableFactory-7f7_oyFS.js";import{S as x}from"./serviceFactory-aQiBqOvf.js";import{u as E}from"./useAutocomplete-BT_5GYCQ.js";import{u as I}from"./useTranslations-5XSl7qXA.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as O}from"./FSCol-DVEaUPKl.js";import"./FSSearchField-X1df83qn.js";import"./FSTextField-CTUDqfDL.js";import"./FSBaseField-Bo38Hl_f.js";import"./FSSpan-DkNsO5wd.js";import"./useBreakpoints-BMcJFLA8.js";import"./useSlots-C8jkAuOW.js";import"./FSRow-CjY3icuR.js";import"./css-DTGEi_Ca.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./FSButton-Czf3beC8.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSClickable-DFmwvck2.js";import"./FSCard-twwkVLSp.js";import"./VProgressCircular-B7HKciov.js";import"./color-BM2dSUAO.js";import"./resizeObserver-BZ0AJw4z.js";import"./VIcon-BOLLMMm0.js";import"./useRules-Da0JLBaA.js";import"./VField-CnDxsm3U.js";import"./index-Dylhq_Dl.js";import"./transition-Ucf2Ovas.js";import"./VLabel-kKpu5iXd.js";import"./VInput-0C1kQySn.js";import"./locale-K9DBMW2q.js";import"./density-mssFUWH2.js";import"./dimensions-TKp8HHzB.js";import"./proxiedModel-Nw0LX-ta.js";import"./loader-CbVzlK-r.js";import"./anchor-S0Fc85Gi.js";import"./rounded-Cy4gG01O.js";import"./VDefaultsProvider-CuIagDb9.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B48vLg-P.js";import"./FSDialogMenu-CWcRHPoR.js";import"./VDialog-fWvZSkPk.js";import"./VOverlay-DXMNyzvF.js";import"./display-CpM-3U3n.js";import"./lazy-BrZUVd24.js";import"./router-kuDvkEMM.js";import"./scopeId-BJNiFHH-.js";import"./FSSlideGroup-nu8Cr66q.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CsckSPrB.js";import"./VSlideGroup-DVr5PPvN.js";import"./group-CxQl3dDS.js";import"./VSlideGroupItem-Bl-P3Ech.js";import"./FSToggleSet-CEKaVblF.js";import"./FSWrapGroup-Cr3q9yBs.js";import"./FSCheckbox-D-xuSzdC.js";import"./VCheckboxBtn-C85wpeer.js";import"./VSelectionControl-CvHa2RXZ.js";import"./index-DWDx8SXO.js";import"./FSFadeOut-DU3Ke7qi.js";import"./FSLoader-0nGK1qhA.js";import"./elevation-CjJG1XnK.js";import"./FSRadio-QZhD_0uB.js";import"./VSelect-rJC_8mRT.js";import"./VList-C5ZFMMa0.js";import"./ssrBoot-CyKRGZ4o.js";import"./border-BnR_N-bS.js";import"./VImg-BmPSKt86.js";import"./VMenu-DWktgpYO.js";import"./filter-DunZ8aFg.js";import"./lodash-Zo30T2Bj.js";class v{constructor(t){l(this,"id");l(this,"icon");l(this,"code");l(this,"label");this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class j extends v{constructor(t){super(t)}}const R=()=>`${B()}/languages`,H=new x("language",j).create(e=>e.build(e.addGetMany(R,v),e.addNotify())),J=G.getMany(H),h=q({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:T,FSIcon:S},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:u,entities:n}=J(),{$tr:m}=I(),i=p(()=>A.value&&u.value),a=p(()=>e.multiple&&e.modelValue?m("autocomplete.language.placeholder","{0} language(s) selected",e.modelValue.length):null),y=w=>o({...e.languageFilters,search:w??void 0}),{toggleSet:L,init:A,onUpdate:V}=E(n,[()=>e.languageFilters],t,y);return{placeholder:a,languages:n,toggleSet:L,loading:i,onUpdate:V}}});function K(e,t,o,u,n,m){const i=_("FSAutocompleteField");return d(),s(i,D({label:e.$tr("ui.common.language","Language"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":g(({item:a})=>[a.icon?(d(),s(S,{key:0},{default:g(()=>[U(N(a.icon),1)]),_:2},1024)):k("",!0)]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const F=M(h,[["render",K]]);h.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const ht={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:F,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const Ft=["Variations"];export{r as Variations,Ft as __namedExportsOrder,ht as default};
