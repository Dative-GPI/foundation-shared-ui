var x=Object.defineProperty;var _=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var o=(e,t,r)=>_(e,typeof t!="symbol"?t+"":t,r);import{d as q,c,A as g,B as f,D as m,x as R,I as b,G as D,R as h,C as N,E as B}from"./vue.esm-bundler-CTTOvLCD.js";import{F as T}from"./FSAutocompleteField-BzAl3brV.js";import{F as y}from"./FSButton-B2X9DGvb.js";import{F as E}from"./FSImage-BOQw5jYK.js";import{C as O}from"./base-D9u3vc5Q.js";import{S as j}from"./serviceFactory-qtdw0UKd.js";import{C as M}from"./composableFactory-BcaJMM0w.js";import{u as G}from"./useAutocomplete-bcE0UiKw.js";import{u as L}from"./useTranslations-Dol6kQeQ.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as P}from"./FSCol-BPr0jVzk.js";import"./FSSearchField-BTXtCPns.js";import"./FSTextField-Cq5SV0et.js";import"./FSBaseField-BJJzXcrO.js";import"./FSSpan-QNtf4e4q.js";import"./useBreakpoints-Bm7CjYdd.js";import"./useSlots-NXmwCOLw.js";import"./FSRow-C8EFLcn9.js";import"./css-D46r6e5F.js";import"./useColors-D7R-CyI7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./useRules-DE909mL5.js";import"./VField-Bi2n7Ebd.js";import"./index-B698eGq-.js";import"./color-DTA1Qd0w.js";import"./transition-C1y9a89u.js";import"./VLabel-DjEMOXzE.js";import"./VInput-BgFKWDn-.js";import"./locale-Guk_W035.js";import"./VIcon-DzkIKThE.js";import"./density-n-hig0Tg.js";import"./dimensions-DIR9-JzD.js";import"./proxiedModel-Da7OD98r.js";import"./form-gxFDX6UX.js";import"./loader-BcXzPxbu.js";import"./VProgressCircular-it35si_v.js";import"./resizeObserver-Bwa55KU2.js";import"./anchor-KPAVzGxJ.js";import"./rounded-5tkyiosR.js";import"./VDefaultsProvider-45AVpOQL.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CK42gwlP.js";import"./VList-DRexluGA.js";import"./FSCard-DxhVm8H0.js";import"./VDialog-Cr2bmOLC.js";import"./VOverlay-Bysvo4NF.js";import"./display-BWFgSvI7.js";import"./scopeId-DGVhnfG2.js";import"./router-SvtovJtL.js";import"./ssrBoot-C3MoFAVe.js";import"./border-CjCUMUtA.js";import"./elevation-CqdG4vF6.js";import"./index-Bj6Uq_NX.js";import"./VImg-C1IcDibP.js";import"./FSSlideGroup-CLbrB063.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BC6-OF7l.js";import"./VSlideGroupItem-CyUsoDyC.js";import"./group-CroFFR-b.js";import"./FSToggleSet-0XsNufiD.js";import"./FSWrapGroup-BCi713M2.js";import"./FSCheckbox-CVOakf5q.js";import"./FSIcon-yzGYQgqh.js";import"./VSelectionControl-CZi2-uP4.js";import"./FSFadeOut-C2gEJSut.js";import"./FSLoader-AugIw030.js";import"./FSRadio-GwhtOOcI.js";import"./VSelect-BnarcBwl.js";import"./VMenu-DP8ibRhi.js";import"./filter-4zTRfP5f.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSClickable-DznopAj9.js";import"./FSImageUI-DYFwVBnb.js";import"./useImages-B6xLFcwg.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CysW3k_e.js";import"./useAppOrganisationId-DS-QKKZa.js";import"./lodash-BrWYvtk2.js";class A{constructor(t){o(this,"id");o(this,"imageId");o(this,"label");this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class H extends A{constructor(r){super(r);o(this,"description");this.description=r.description}}const C=()=>`${O()}/manufacturers`,J=e=>`${C()}/${encodeURIComponent(e)}`,V=new j("manufacturer",H).create(e=>e.build(e.addGet(J),e.addGetMany(C,A),e.addNotify()));M.get(V);const K=M.getMany(V),I=q({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:T,FSButton:y,FSImage:E},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:s,entities:u}=K(),{$tr:p}=L(),l=c(()=>$.value&&s.value),i=c(()=>e.multiple&&e.modelValue?p("ui.autocomplete-manufacturer.placeholder","{0} manufacturer(s) selected",e.modelValue.length):null),a=k=>r({...e.manufacturerFilters,search:k??void 0}),{toggleSet:d,init:$,onUpdate:U}=G(u,[()=>e.manufacturerFilters],t,a);return{manufacturers:u,placeholder:i,toggleSet:d,loading:l,onUpdate:U}}});function Q(e,t,r,s,u,p){const l=g("FSImage"),i=g("FSAutocompleteField");return b(),f(i,R({label:e.$props.label??e.$tr("ui.common.manufacturer","Manufacturer"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:a})=>[a.imageId?(b(),f(l,{key:0,height:"26px",width:"26px",imageId:a.imageId,thumbnail:!0},null,8,["imageId"])):D("",!0)]),"toggle-set-item":m(a=>[h(y,{padding:a.item.imageId?["6px 16px","4px 12px"]:void 0,variant:a.getVariant(a.item),color:a.getColor(a.item),class:B(a.getClass(a.item)),label:a.item.label,onClick:d=>a.toggle(a.item)},N({_:2},[a.item.imageId?{name:"prepend",fn:m(()=>[h(l,{height:"26px",width:"26px",imageId:a.item.imageId,thumbnail:!0},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const w=z(I,[["render",Q]]);I.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const Ct={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:w,FSCol:P},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteManufacturer
        label="Manufacturer"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var v,F,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
      FSAutocompleteManufacturer,
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
      <FSAutocompleteManufacturer
        label="Manufacturer"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(S=(F=n.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const Vt=["Variations"];export{n as Variations,Vt as __namedExportsOrder,Ct as default};
