import{f as R,g as q,D as O,E as d,F as g,G as a,A as T,M as l,K as n,L as m,I as v,N as U,O as N,Y as E}from"./vue.esm-bundler-838daa40.js";import{F as B}from"./FSAutocompleteField-730efa84.js";import{F as _}from"./FSCheckbox-884ec95b.js";import{F as A}from"./FSButton-b3e7898e.js";import{_ as c}from"./FSIcon-48205264.js";import{_ as f}from"./FSSpan-3df08200.js";import{_ as C}from"./FSRow-753b58e5.js";import{C as G}from"./base-ef43f4ed.js";import{S as L}from"./serviceFactory-2dfad3af.js";import{C as M}from"./composableFactory-5509dfbf.js";import{u as j}from"./useAutocomplete-f4f2ca8a.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{V as x}from"./VSelect-73f86563.js";import{_ as z}from"./FSCol-44fe82a9.js";import"./FSSearchField-fd4e58de.js";import"./FSTextField-5838a9fc.js";import"./VField-b5e232d6.js";import"./useColors-8c9c4d1e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-f9f3e2d4.js";import"./useSlots-6ce8c1a9.js";import"./VSpacer-7ad9c022.js";import"./useRender-f6a4770d.js";import"./index-6fa9bdc1.js";import"./transition-ee4dd36d.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./VIcon-281b119b.js";import"./color-3e53cf3d.js";import"./tag-d73e64d5.js";import"./density-e1cdced2.js";import"./dimensions-be952165.js";import"./loader-62f4df25.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./anchor-dbd6e54f.js";import"./rounded-94d04543.js";import"./VDefaultsProvider-a165414e.js";import"./forwardRefs-e658ad70.js";import"./useRules-cda8e231.js";import"./index-e75f540f.js";import"./useTranslations-419c1021.js";import"./FSDialogMenu-fb154c77.js";import"./FSCard-b76495e8.js";import"./css-67cfec15.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./display-ba09a035.js";import"./lazy-f517c978.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./FSRadioGroup-9a5da185.js";import"./VSelectionControl-b5e8c167.js";import"./index-a755b9d6.js";import"./FSToggleSet-89f81a7c.js";import"./FSSlideGroup-9fadb36c.js";import"./uuid-08309875.js";import"./VSlideGroup-41b1c0c0.js";import"./goto-76862adb.js";import"./group-d31dd239.js";import"./FSWrapGroup-d7904dc1.js";import"./FSFadeOut-ce6cecc6.js";import"./FSLoader-d60b60c7.js";import"./elevation-c2192325.js";import"./filter-e8ac40d9.js";import"./VMenu-ec057191.js";import"./FSClickable-104d21f2.js";import"./useAppOrganisationId-ac05104a.js";import"./lodash-569b8a6d.js";import"./ssrBoot-00bf1891.js";import"./border-749eb26c.js";import"./VImg-26cf6021.js";import"./VDivider-7a82f108.js";class V{constructor(o){this.id=o.id,this.modelId=o.modelId,this.code=o.code,this.label=o.label,this.correlated=o.correlated}}class Y extends V{constructor(o){super(o)}}const k=()=>`${G()}/data-categories`,K=e=>`${k()}/${encodeURIComponent(e)}`,H=new L("dataCategory",Y).create(e=>e.build(e.addGet(K),e.addGetMany(k,V),e.addNotify())),J=M.getMany(H),w=R({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:B,FSCheckbox:_,FSButton:A,FSIcon:c,FSSpan:f,FSRow:C},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:y,fetching:S,entities:p}=J(),F=q(()=>r.value&&S.value),u=I=>y({...e.dataCategoriesFilters,search:I??void 0}),{toggleSet:t,init:r,onUpdate:i}=j(p,[()=>e.dataCategoriesFilters],o,u);return{dataCategories:p,toggleSet:t,loading:F,onUpdate:i}}});function Q(e,o,y,S,p,F){const u=O("FSAutocompleteField");return d(),g(u,T({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:t})=>[e.$props.modelValue?(d(),g(C,{key:0,align:"center-center",wrap:!1},{default:a(()=>[l(c,null,{default:a(()=>[n(m(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(f,null,{default:a(()=>[n(m(t.raw.label),1)]),_:2},1024)]),_:2},1024)):v("",!0)]),"autocomplete-item":a(({props:t,item:r})=>[l(x,U(N({...t,title:""})),{default:a(()=>[l(C,{align:"center-left",wrap:!1},{default:a(()=>{var i;return[e.$props.multiple?(d(),g(_,{key:0,modelValue:(i=e.$props.modelValue)==null?void 0:i.includes(r.value),onClick:t.onClick},null,8,["modelValue","onClick"])):v("",!0),l(c,null,{default:a(()=>[n(m(r.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(f,null,{default:a(()=>[n(m(r.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":a(t=>[l(A,{prependIcon:t.item.correlated?"mdi-link":"mdi-link-off",variant:t.getVariant(t.item),color:t.getColor(t.item),class:E(t.getClass(t.item)),label:t.item.label,onClick:r=>t.toggle(t.item)},null,8,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const $=P(w,[["render",Q]]);w.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const Ft={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataCategory:$,FSCol:z},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteDataCategory
        label="DataCategory"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteDataCategory
        label="DataCategory with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var b,D,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      FSAutocompleteDataCategory,
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
      <FSAutocompleteDataCategory
        label="DataCategory"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteDataCategory
        label="DataCategory with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const vt=["Variations"];export{s as Variations,vt as __namedExportsOrder,Ft as default};