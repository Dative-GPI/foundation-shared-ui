import{d as A,c,A as y,B as a,D as p,x as V,I as l,R as $,E as w}from"./vue.esm-bundler-CTTOvLCD.js";import{F as q}from"./FSAutocompleteField-CMs8DQou.js";import{F as v}from"./FSButton-B2X9DGvb.js";import{F as E}from"./FSChip-CVBfHYvV.js";import{u as B}from"./useDataCategories-WvPzRlQU.js";import{u as I}from"./useAutocomplete-bcE0UiKw.js";import{C as N}from"./useColors-D7R-CyI7.js";import{u as O}from"./useTranslations-Dol6kQeQ.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as U}from"./FSCol-BPr0jVzk.js";import"./FSSearchField-BTXtCPns.js";import"./FSTextField-Cq5SV0et.js";import"./FSBaseField-BJJzXcrO.js";import"./FSSpan-QNtf4e4q.js";import"./useBreakpoints-Bm7CjYdd.js";import"./useSlots-NXmwCOLw.js";import"./FSRow-C8EFLcn9.js";import"./css-D46r6e5F.js";import"./useRules-DE909mL5.js";import"./VField-Bi2n7Ebd.js";import"./index-B698eGq-.js";import"./color-DTA1Qd0w.js";import"./theme-DpYUkAdN.js";import"./transition-C1y9a89u.js";import"./VLabel-DjEMOXzE.js";import"./VInput-BgFKWDn-.js";import"./locale-Guk_W035.js";import"./VIcon-DzkIKThE.js";import"./density-n-hig0Tg.js";import"./dimensions-DIR9-JzD.js";import"./proxiedModel-Da7OD98r.js";import"./form-gxFDX6UX.js";import"./loader-BcXzPxbu.js";import"./VProgressCircular-it35si_v.js";import"./resizeObserver-Bwa55KU2.js";import"./anchor-KPAVzGxJ.js";import"./rounded-5tkyiosR.js";import"./VDefaultsProvider-45AVpOQL.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CK42gwlP.js";import"./VList-Bd0Q6LvF.js";import"./FSCard-DxhVm8H0.js";import"./VDialog-Cr2bmOLC.js";import"./VOverlay-Bysvo4NF.js";import"./display-BWFgSvI7.js";import"./scopeId-DGVhnfG2.js";import"./router-SvtovJtL.js";import"./ssrBoot-C3MoFAVe.js";import"./border-CjCUMUtA.js";import"./elevation-CqdG4vF6.js";import"./index-Bj6Uq_NX.js";import"./VImg-C1IcDibP.js";import"./FSSlideGroup-CLbrB063.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BC6-OF7l.js";import"./VSlideGroupItem-CyUsoDyC.js";import"./group-CroFFR-b.js";import"./FSToggleSet-0XsNufiD.js";import"./FSWrapGroup-BCi713M2.js";import"./FSCheckbox-CVOakf5q.js";import"./FSIcon-yzGYQgqh.js";import"./VSelectionControl-CZi2-uP4.js";import"./FSFadeOut-C2gEJSut.js";import"./FSLoader-AugIw030.js";import"./FSRadio-GwhtOOcI.js";import"./VSelect-bKA6IP2d.js";import"./VMenu-DP8ibRhi.js";import"./filter-4zTRfP5f.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSClickable-DznopAj9.js";import"./base-D9u3vc5Q.js";import"./useAppOrganisationId-DS-QKKZa.js";import"./serviceFactory-qtdw0UKd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BrWYvtk2.js";import"./composableFactory-BcaJMM0w.js";import"./index-DfSX31J9.js";const S=A({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:q,FSButton:v,FSChip:E},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:u,fetching:s,entities:n}=B(),{$tr:d}=O(),o=c(()=>h.value&&s.value),m=c(()=>e.multiple&&e.modelValue?d("autocomplete.data-category.placeholder","{0} data category(ies) selected",e.modelValue.length):null),t=k=>u({...e.dataCategoriesFilters,search:k??void 0}),{toggleSet:g,init:h,onUpdate:D}=I(n,[()=>e.dataCategoriesFilters],r,t);return{dataCategories:n,placeholder:m,ColorEnum:N,toggleSet:g,loading:o,onUpdate:D}}});function j(e,r,u,s,n,d){const o=y("FSChip"),m=y("FSAutocompleteField");return l(),a(m,V({label:e.$props.label??e.$tr("ui.common.data-category","Data category"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":p(({item:t})=>[t.correlated?(l(),a(o,{key:0,prependIcon:"mdi-link",label:e.$tr("autocomplete.data-category.linked","Linked"),color:e.ColorEnum.Success},null,8,["label","color"])):(l(),a(o,{key:1,prependIcon:"mdi-link-off",label:e.$tr("autocomplete.data-category.not-linked","Not linked"),color:e.ColorEnum.Warning},null,8,["label","color"]))]),"toggle-set-item":p(t=>[$(v,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:w(t.getClass(t.item)),label:t.item.label,onClick:g=>t.toggle(t.item)},{append:p(()=>[t.item.correlated?(l(),a(o,{key:0,prependIcon:"mdi-link",label:e.$tr("autocomplete.data-category.linked","Linked"),color:e.ColorEnum.Success},null,8,["label","color"])):(l(),a(o,{key:1,prependIcon:"mdi-link-off",label:e.$tr("autocomplete.data-category.not-linked","Not linked"),color:e.ColorEnum.Warning},null,8,["label","color"]))]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const F=T(S,[["render",j]]);S.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const mt={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:r})=>({components:{FSAutocompleteDataCategory:F,FSCol:U},props:Object.keys(r),setup(){return{...e}},template:`
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
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
    </FSCol>`})};var f,C,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
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
}`,...(b=(C=i.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const pt=["Variations"];export{i as Variations,pt as __namedExportsOrder,mt as default};
