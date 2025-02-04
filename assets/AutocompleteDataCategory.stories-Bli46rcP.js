import{d as A,c,A as a,D as p,l as V,H as y,I as l,R as $,E as w}from"./vue.esm-bundler-NAfsqApI.js";import{F as q}from"./FSAutocompleteField-Dosoxp9w.js";import{F as v}from"./FSButton-CnXo3fLV.js";import{F as E}from"./FSChip-DFWe0C6o.js";import{u as I}from"./useDataCategories-B6_IO8Nw.js";import{u as B}from"./useAutocomplete-BRqVXZAd.js";import{C as N}from"./useColors-CWqJhoVw.js";import{u as O}from"./useTranslations-CxiknF7e.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as U}from"./FSCol-CPY6S-Xd.js";import"./FSSearchField-LHGjxxhV.js";import"./FSTextField-Dzov9hcU.js";import"./FSBaseField-CjhswGig.js";import"./FSSpan-CLtVPKpS.js";import"./useBreakpoints-BwxwzcAl.js";import"./useSlots-S0O9Daut.js";import"./FSRow-GjwhmX1p.js";import"./css-DBDqGZ-V.js";import"./useRules-pqUeO9kt.js";import"./VField-KOKiCRZA.js";import"./index-Dne_26Gx.js";import"./color-BvydW9AS.js";import"./theme-F_JAsCzs.js";import"./transition-L7INWkz2.js";import"./VLabel-BDFzMscP.js";import"./VInput-B5HH3Lye.js";import"./locale-CAPEya44.js";import"./VIcon-PiNvAqE-.js";import"./density-BGeA8UH8.js";import"./dimensions-IFPI4Yq9.js";import"./proxiedModel-sn-eI_a5.js";import"./form-DTsyvZhj.js";import"./loader-DsBOwpms.js";import"./VProgressCircular-B6p7zTwg.js";import"./resizeObserver-CLnVcpcq.js";import"./anchor-DvtYZGyi.js";import"./rounded-DwVJT96z.js";import"./VDefaultsProvider-BngNLuXK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DINlpRuJ.js";import"./VList-Cf1cUG92.js";import"./FSCard-DOESxZy8.js";import"./VDialog-uWe1mq7l.js";import"./VOverlay-CNRAdbgq.js";import"./display-Bn-MFLq6.js";import"./scopeId-CbPxXtFO.js";import"./router-0GC4RTMW.js";import"./ssrBoot-BkO-TPgF.js";import"./border-C5v47RY4.js";import"./elevation-B-XsQHpK.js";import"./index-o6vlk9JB.js";import"./VImg-D7CqP58l.js";import"./FSSlideGroup-Cl7IgSOt.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwecMMW5.js";import"./VSlideGroupItem-BvOdViLK.js";import"./group-Dl43T2CL.js";import"./FSToggleSet-CBrw8ECP.js";import"./FSWrapGroup-C3Z0hZ7U.js";import"./FSCheckbox-CZADXYvb.js";import"./FSIcon-Dq2bxLH5.js";import"./VSelectionControl-CV2pv1R-.js";import"./FSFadeOut-D3iDD7Hj.js";import"./FSLoader-C8dZP0ML.js";import"./FSRadio-Bz6eMy_b.js";import"./VSelect-aoHOo6gx.js";import"./VMenu-D8AvjW2T.js";import"./filter-DH9_huac.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSClickable-Dvaj3J5M.js";import"./base-D1kf-R5n.js";import"./useAppOrganisationId-CZPUgkT3.js";import"./composableFactory-WcheuuwI.js";import"./serviceFactory-DMr1GitK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BrWYvtk2.js";import"./index-DfSX31J9.js";const S=A({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:q,FSButton:v,FSChip:E},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:u,fetching:s,entities:n}=I(),{$tr:d}=O(),o=c(()=>h.value&&s.value),m=c(()=>e.multiple&&e.modelValue?d("autocomplete.data-category.placeholder","{0} data category(ies) selected",e.modelValue.length):null),t=k=>u({...e.dataCategoriesFilters,search:k??void 0}),{toggleSet:g,init:h,onUpdate:D}=B(n,[()=>e.dataCategoriesFilters],r,t);return{dataCategories:n,placeholder:m,ColorEnum:N,toggleSet:g,loading:o,onUpdate:D}}});function j(e,r,u,s,n,d){const o=y("FSChip"),m=y("FSAutocompleteField");return l(),a(m,V({label:e.$props.label??e.$tr("ui.common.data-category","Data category"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":p(({item:t})=>[t.correlated?(l(),a(o,{key:0,prependIcon:"mdi-link",label:e.$tr("autocomplete.data-category.linked","Linked"),color:e.ColorEnum.Success},null,8,["label","color"])):(l(),a(o,{key:1,prependIcon:"mdi-link-off",label:e.$tr("autocomplete.data-category.not-linked","Not linked"),color:e.ColorEnum.Warning},null,8,["label","color"]))]),"toggle-set-item":p(t=>[$(v,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:w(t.getClass(t.item)),label:t.item.label,onClick:g=>t.toggle(t.item)},{append:p(()=>[t.item.correlated?(l(),a(o,{key:0,prependIcon:"mdi-link",label:e.$tr("autocomplete.data-category.linked","Linked"),color:e.ColorEnum.Success},null,8,["label","color"])):(l(),a(o,{key:1,prependIcon:"mdi-link-off",label:e.$tr("autocomplete.data-category.not-linked","Not linked"),color:e.ColorEnum.Warning},null,8,["label","color"]))]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const F=T(S,[["render",j]]);S.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const mt={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:r})=>({components:{FSAutocompleteDataCategory:F,FSCol:U},props:Object.keys(r),setup(){return{...e}},template:`
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
