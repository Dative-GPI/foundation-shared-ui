var M=Object.defineProperty;var y=(e,t,o)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var r=(e,t,o)=>y(e,typeof t!="symbol"?t+"":t,o);import{d as h,c as A,y as C,z as V,A as _,m as w}from"./vue.esm-bundler-DeSao-KJ.js";import{F as U}from"./FSAutocompleteField-BK95k7Ah.js";import{C as $}from"./base-Db9bJp6t.js";import{S as R}from"./serviceFactory-Bd5jifNi.js";import{C as D}from"./composableFactory-rrf4GM2L.js";import{u as k}from"./useAutocomplete-DIOO3j-W.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as I}from"./FSCol-CA6NzDpV.js";import"./FSSearchField-Bk9E08WQ.js";import"./FSTextField-BoGA7VT8.js";import"./VField-C-8g7gy8.js";import"./FSSpan-t6bMdSRn.js";import"./useSlots-DPxV8yUU.js";import"./FSRow-JJutUvlP.js";import"./css-BnhLLynS.js";import"./useColors-C3YrZIBy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-RQK62Xub.js";import"./VSpacer-CFNx9InD.js";import"./useRender-CIdmfI-I.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./VIcon-B0BI55vc.js";import"./color-XZPyE2lN.js";import"./tag-BL1d6r1f.js";import"./density-4sjlTnVP.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./anchor-LC_hEQAj.js";import"./rounded-BOBir3aK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-F4U-An3c.js";import"./FSClickable-CtyeoOHr.js";import"./FSCard-Cr3VWqvL.js";import"./FSIcon-DnAZkNNf.js";import"./useRules-DQ31e--d.js";import"./index-CrTEBV4I.js";import"./useTranslations-DAApg7Ob.js";import"./FSDialogMenu-CtAO0Sgc.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./FSRadioGroup-F53nrXFK.js";import"./FSRadio-DlvvITIU.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./FSToggleSet-BmzhnM61.js";import"./FSSlideGroup-BNPQrUcW.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./FSWrapGroup-D1ZJoYu1.js";import"./FSCheckbox-Dba0sDeH.js";import"./FSFadeOut-D6QzK9Bb.js";import"./FSLoader-BG9q5Y9c.js";import"./elevation-BBJMtRPf.js";import"./VSelect-Bw07qUGf.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VMenu-CbRbHjmn.js";import"./filter-De_Yj-mJ.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./lodash-BiW_TGGX.js";class c{constructor(t){r(this,"id");r(this,"imageId");r(this,"label");this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class N extends c{constructor(o){super(o);r(this,"description");this.description=o.description}}const d=()=>`${$()}/manufacturers`,O=e=>`${d()}/${encodeURIComponent(e)}`,T=new R("manufacturer",N).create(e=>e.build(e.addGet(O),e.addGetMany(d,c),e.addNotify())),E=D.getMany(T),f=h({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:U},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:u,entities:l}=E(),i=b=>o({...e.manufacturerFilters,search:b??void 0}),{toggleSet:n,init:F,onUpdate:S}=k(l,[()=>e.manufacturerFilters],t,i),v=A(()=>F.value&&u.value);return{manufacturers:l,toggleSet:n,loading:v,onUpdate:S}}});function j(e,t,o,u,l,i){const n=C("FSAutocompleteField");return V(),_(n,w({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","items","loading","modelValue","onUpdate:modelValue"])}const g=q(f,[["render",j]]);f.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const mt={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:g,FSCol:I},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var m,p,s;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(p=a.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const pt=["Variations"];export{a as Variations,pt as __namedExportsOrder,mt as default};