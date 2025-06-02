import{d as y,b,c,w as F,B as S,D as C,S as A,m as w,I as T,J as k,E as _,O as $,P as I,Q as q}from"./vue.esm-bundler-CqZ6aK3I.js";import{F as B}from"./FSAutocompleteField-D7kTrWBx.js";import{u as P}from"./uuid-DTaye2KM.js";import{u as K}from"./useTranslations-D4m4SVfo.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as O}from"./FSCol-DIPgj7wU.js";import"./FSSearchField-VvMfG9Mz.js";import"./FSTextField-CEJP76Sx.js";import"./FSBaseField-eUR0iGRU.js";import"./FSSpan-B7HDTlg9.js";import"./useBreakpoints-DMrtgY61.js";import"./useSlots-BgbXyH5p.js";import"./FSRow-udQVJR1p.js";import"./css-BZjDzSZ1.js";import"./useColors-BIkRBR7C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CCooKRqg.js";import"./FSButton-2OKi08_r.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-CBfoSsDs.js";import"./FSCard-BH9I8ruU.js";import"./VProgressCircular-cB7gdjsO.js";import"./color-iZFxpsFf.js";import"./resizeObserver-C7qOORSR.js";import"./VIcon-ZzEkeSRE.js";import"./FSIcon-8KcAAKgU.js";import"./useRules-Cutg_0Yh.js";import"./VField-B2nfi808.js";import"./index-BHk1SuU0.js";import"./transition-C13qRIR1.js";import"./VLabel-D1qNLyt7.js";import"./VInput-f1leR0eo.js";import"./locale-BJmdjC_5.js";import"./density-B3EUR5Bv.js";import"./dimensions-CuS7VcMO.js";import"./proxiedModel-BirLikdP.js";import"./loader-Bh1R7Z2A.js";import"./anchor-DiyvyHyx.js";import"./rounded-T_eKj2ZY.js";import"./VDefaultsProvider-3cG3_dFO.js";import"./forwardRefs-DWGaNmQL.js";import"./index-0XvVa1kA.js";import"./VList-BdRSj6hM.js";import"./VDialog-BjO_95QL.js";import"./VOverlay-CrPt6Ctk.js";import"./display-Cs3Y1ygD.js";import"./scopeId-BQSHBqq_.js";import"./router-C0dK7NvB.js";import"./ssrBoot-B76fNmmB.js";import"./border-DGybV2oK.js";import"./elevation-DCJceMeT.js";import"./index-BSoBU6Pm.js";import"./VImg-UKGkvK5A.js";import"./FSSlideGroup-FM6r_xNQ.js";import"./FSButtonNextIcon-BR7gWMZw.js";import"./VSlideGroupItem-DMC4DYA5.js";import"./group-1sntWZNj.js";import"./FSToggleSet-CzuJHIxU.js";import"./FSWrapGroup-Dpc14vID.js";import"./FSCheckbox-tSiw0lhZ.js";import"./VSelectionControl-Dw5vpEc6.js";import"./FSFadeOut-B817LR1t.js";import"./FSLoader-0ho3eZau.js";import"./FSRadio-DU7kdJ5e.js";import"./VSelect-Bvdm_LMp.js";import"./VMenu-B5kDinlh.js";import"./filter-DhzaDDBp.js";const V=y({components:{FSAutocompleteField:B},props:{placeholder:{type:String,required:!1,default:null},items:{type:Array,required:!1,default:()=>[]},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:o}){const{$tr:u}=K(),m=b([]),i=c(()=>e.items.concat(m.value)),d=c(()=>{var t;return!e.modelValue||e.modelValue.length===0?null:e.placeholder??u("autocomplete.tag.selecteds","{0} item(s) selected",((t=e.modelValue)==null?void 0:t.length)??0)}),s=t=>{o("update:modelValue",t==null?void 0:t.map(a=>i.value.find(p=>p.id===a)))},r=t=>{o("update:modelValue",[...e.modelValue??[],{id:P(),label:t,isCustom:!0}])},l=t=>{t.key==="Backspace"&&o("update:modelValue",[...e.modelValue??[]])};return F(()=>e.modelValue,t=>{var a;t&&(m.value=((a=e.modelValue)==null?void 0:a.filter(p=>p.isCustom))??[])},{immediate:!0}),{innerPlaceholder:d,innerItems:i,onUpdateModelValue:s,onAddItem:r,onKeydown:l}}});function U(e,o,u,m,i,d){var r;const s=T("FSAutocompleteField");return k(),S(s,w({placeholder:e.innerPlaceholder,items:e.innerItems,showSearch:!0,multiple:!0,modelValue:(r=e.modelValue)==null?void 0:r.map(l=>l.id),"onUpdate:modelValue":e.onUpdateModelValue,"onAdd:item":e.onAddItem,onKeydown:e.onKeydown},e.$attrs),C({_:2},[A(e.$slots,(l,t)=>({name:t,fn:_(a=>[$(e.$slots,t,I(q(a)))])}))]),1040,["placeholder","items","modelValue","onUpdate:modelValue","onAdd:item","onKeydown"])}const v=N(V,[["render",U]]);V.__docgenInfo={exportName:"default",displayName:"FSAutocompleteTag",description:"",tags:{},props:[{name:"placeholder",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"{id: string, label: string, isCustom: boolean}[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"{id: string, label: string, isCustom: boolean}[] | null"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteTag.vue"]};const xe={title:"Foundation/Shared/Input fields/AutocompleteTag",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{items:[{id:"1",label:"Alpha",isCustom:!1},{id:"2",label:"Beta",isCustom:!1},{id:"3",label:"Charly",isCustom:!1}],value1:null,value2:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteTag:v,FSCol:O},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteTag
        label="Default items and new value"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTag
        label="New value"
        v-model="args.value2"
      />
    </FSCol>`})};var f,g,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        id: "1",
        label: "Alpha",
        isCustom: false
      }, {
        id: "2",
        label: "Beta",
        isCustom: false
      }, {
        id: "3",
        label: "Charly",
        isCustom: false
      }],
      value1: null,
      value2: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteTag,
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
      <FSAutocompleteTag
        label="Default items and new value"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTag
        label="New value"
        v-model="args.value2"
      />
    </FSCol>\`
  })
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const et=["Variations"];export{n as Variations,et as __namedExportsOrder,xe as default};
