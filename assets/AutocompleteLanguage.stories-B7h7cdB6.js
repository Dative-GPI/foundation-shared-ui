var C=Object.defineProperty;var $=(e,t,o)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>$(e,typeof t!="symbol"?t+"":t,o);import{d as q,c as p,E as s,H as g,m as D,L as _,M as d,N as k,O as N,K as U}from"./vue.esm-bundler-C5-CUMHT.js";import{F as T}from"./FSAutocompleteField-Dd-bVP0e.js";import{F as S}from"./FSIcon-CNpmwcOd.js";import{C as G}from"./composableFactory-Cxup7bUM.js";import{S as M}from"./serviceFactory-DI_gyWBF.js";import{G as O}from"./base-CmdGny12.js";import{u as x}from"./useAutocomplete-Cfsu5mWD.js";import{u as B}from"./useTranslations-DAi7IZoP.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as j}from"./FSCol-DedFW0nl.js";import"./FSSearchField-DfSRPhxD.js";import"./FSTextField-V-eBW8wn.js";import"./FSBaseField-B1fPD4-R.js";import"./FSSpan-D6aG51_c.js";import"./useBreakpoints-pPMhsL5T.js";import"./useSlots-ol4Nk6ew.js";import"./FSRow-C8aYwBu-.js";import"./css-DSFbdPon.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./FSButton-DohpVEzP.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./FSText-C8rmUTxK.js";import"./FSCard-DYe1QD8j.js";import"./VProgressCircular-D7Gk7a1O.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./useRules-D4S0gmXa.js";import"./VTextField-CPakm9mu.js";import"./VField-Cbr0bjXl.js";import"./index-pS3mXfMR.js";import"./transition-CgRUW3r8.js";import"./VLabel-COLF1QPQ.js";import"./VInput-Y0iB4nur.js";import"./locale-BNkeanE6.js";import"./proxiedModel-CV-HTW34.js";import"./VIcon-IlEzlDWp.js";import"./icons-CucLNLjN.js";import"./density-qUtw3dk7.js";import"./dimensions-Bm76csmg.js";import"./loader-CVb0Ac9O.js";import"./VProgressLinear-F46fcvb0.js";import"./anchor-Dj2AEc5N.js";import"./rounded-Ctowy803.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B3ZVJx30.js";import"./FSDialogMenu-D2-2fAf2.js";import"./VDialog-CSacG24V.js";import"./VOverlay-CG3iG1zZ.js";import"./display-IUfV935l.js";import"./lazy-DXVvciW4.js";import"./router-CTGX-puL.js";import"./scopeId-DKs4U9S0.js";import"./dialog-transition-DRDndVEC.js";import"./FSSlideGroup-5yThapiu.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-TA3Aju3l.js";import"./VSlideGroup-Bd_pvRRU.js";import"./goto-Ba_J3Vzv.js";import"./group-B4VRq_l_.js";import"./VSlideGroupItem-BppNUl7y.js";import"./FSToggleSet-yqzW0yBe.js";import"./FSWrapGroup-DMf-egfq.js";import"./FSCheckbox-BwFpn-kB.js";import"./VCheckboxBtn-ODJx5um2.js";import"./VSelectionControl-D13_Swsb.js";import"./index-asyjLxvi.js";import"./FSFadeOut-DOLGFW1u.js";import"./FSLoader-BTZOtjrt.js";import"./elevation-DfTZ1KyC.js";import"./FSRadio-msJSYj1I.js";import"./VSelect-BkR6mgZ1.js";import"./VList-BVDcEHsi.js";import"./ssrBoot-ClVRhrXI.js";import"./border-DJaidMiz.js";import"./variant-BJccJztY.js";import"./VImg-DXeUU_wB.js";import"./VDivider-Ck2C5rfW.js";import"./VMenu-dxHuUw__.js";import"./filter-BTy0FM8E.js";import"./eventQueue-D85hWBFd.js";class v{constructor(t){l(this,"id");l(this,"icon");l(this,"code");l(this,"label");this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class I extends v{constructor(t){super(t)}}const R=()=>`${O()}/languages`,H=new M("language",I).create(e=>e.build(e.addGetMany(R,v),e.addNotify())),K=G.getMany(H),h=q({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:T,FSIcon:S},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:u,entities:n}=K(),{$tr:m}=B(),i=p(()=>A.value&&u.value),a=p(()=>e.multiple&&e.modelValue?m("autocomplete.language.placeholder","{0} language(s) selected",e.modelValue.length):null),y=w=>o({...e.languageFilters,search:w??void 0}),{toggleSet:L,init:A,onUpdate:V}=x(n,[()=>e.languageFilters],t,y);return{placeholder:a,languages:n,toggleSet:L,loading:i,onUpdate:V}}});function P(e,t,o,u,n,m){const i=_("FSAutocompleteField");return d(),s(i,D({label:e.$tr("ui.common.language","Language"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":g(({item:a})=>[a.icon?(d(),s(S,{key:0},{default:g(()=>[k(N(a.icon),1)]),_:2},1024)):U("",!0)]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const F=E(h,[["render",P]]);h.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const Dt={title:"Shared/Components/Autocompletes/AutocompleteLanguage",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:F,FSCol:j},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const _t=["Variations"];export{r as Variations,_t as __namedExportsOrder,Dt as default};
