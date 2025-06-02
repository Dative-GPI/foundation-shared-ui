import{d as g,c as u,B as d,m as c,I as S,J as f}from"./vue.esm-bundler-CqZ6aK3I.js";import{F}from"./FSAutocompleteField-D7kTrWBx.js";import{A as t,f as y}from"./chartsTools-BCNkwpFT.js";import{g as A}from"./enumTools-BEsapygt.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as b}from"./FSCol-DIPgj7wU.js";import"./FSSearchField-VvMfG9Mz.js";import"./FSTextField-CEJP76Sx.js";import"./FSBaseField-eUR0iGRU.js";import"./FSSpan-B7HDTlg9.js";import"./useBreakpoints-DMrtgY61.js";import"./useSlots-BgbXyH5p.js";import"./FSRow-udQVJR1p.js";import"./css-BZjDzSZ1.js";import"./useColors-BIkRBR7C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CCooKRqg.js";import"./FSButton-2OKi08_r.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-CBfoSsDs.js";import"./FSCard-BH9I8ruU.js";import"./VProgressCircular-cB7gdjsO.js";import"./color-iZFxpsFf.js";import"./resizeObserver-C7qOORSR.js";import"./VIcon-ZzEkeSRE.js";import"./FSIcon-8KcAAKgU.js";import"./useRules-Cutg_0Yh.js";import"./VField-B2nfi808.js";import"./index-BHk1SuU0.js";import"./transition-C13qRIR1.js";import"./VLabel-D1qNLyt7.js";import"./VInput-f1leR0eo.js";import"./locale-BJmdjC_5.js";import"./density-B3EUR5Bv.js";import"./dimensions-CuS7VcMO.js";import"./proxiedModel-BirLikdP.js";import"./loader-Bh1R7Z2A.js";import"./anchor-DiyvyHyx.js";import"./rounded-T_eKj2ZY.js";import"./VDefaultsProvider-3cG3_dFO.js";import"./forwardRefs-DWGaNmQL.js";import"./index-0XvVa1kA.js";import"./useTranslations-D4m4SVfo.js";import"./VList-BdRSj6hM.js";import"./VDialog-BjO_95QL.js";import"./VOverlay-CrPt6Ctk.js";import"./display-Cs3Y1ygD.js";import"./scopeId-BQSHBqq_.js";import"./router-C0dK7NvB.js";import"./ssrBoot-B76fNmmB.js";import"./border-DGybV2oK.js";import"./elevation-DCJceMeT.js";import"./index-BSoBU6Pm.js";import"./VImg-UKGkvK5A.js";import"./FSSlideGroup-FM6r_xNQ.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BR7gWMZw.js";import"./VSlideGroupItem-DMC4DYA5.js";import"./group-1sntWZNj.js";import"./FSToggleSet-CzuJHIxU.js";import"./FSWrapGroup-Dpc14vID.js";import"./FSCheckbox-tSiw0lhZ.js";import"./VSelectionControl-Dw5vpEc6.js";import"./FSFadeOut-B817LR1t.js";import"./FSLoader-0ho3eZau.js";import"./FSRadio-DU7kdJ5e.js";import"./VSelect-Bvdm_LMp.js";import"./VMenu-B5kDinlh.js";import"./filter-DhzaDDBp.js";const a=g({components:{FSAutocompleteField:F},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:u(()=>A(t).filter(o=>o.value!=t.None).map(o=>({id:o.value,label:y(o.value)})))}}});function V(e,o,C,T,k,_){const s=S("FSAutocompleteField");return f(),d(s,c({label:e.label??e.$tr("autocomplete.aggregation.label","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},e.$attrs),null,16,["label","items","modelValue"])}const n=v(a,[["render",V]]);a.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/chartSelectors/FSAggregationSelector.vue"]};const He={title:"Foundation/Shared/Selects/AggregationSelector",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value:null}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:n,FSCol:b},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAggregationSelector
        v-model="args.value"
      />
    </FSCol>`})};var p,m,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    args: {
      value: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAggregationSelector,
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
      <FSAggregationSelector
        v-model="args.value"
      />
    </FSCol>\`
  })
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const Ke=["Variations"];export{r as Variations,Ke as __namedExportsOrder,He as default};
