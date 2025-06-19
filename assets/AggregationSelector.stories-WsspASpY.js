import{d as g,c as u,B as d,m as c,I as S,J as F}from"./vue.esm-bundler-BB--BfRN.js";import{F as f}from"./FSAutocompleteField-D0xJEWg5.js";import{A as t,g as y}from"./chartsTools-SYU6DBGL.js";import{g as A}from"./enumTools-BEsapygt.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as b}from"./FSCol-BU2zndN-.js";import"./FSSearchField-CJDKUSod.js";import"./FSTextField-DmCfYujO.js";import"./FSBaseField-BxMUaAXJ.js";import"./FSSpan-BndtI8AP.js";import"./useBreakpoints-f5uwzDhq.js";import"./useSlots-COLyvmal.js";import"./FSRow-Bdc52rY8.js";import"./css-DoweNwVf.js";import"./useColors-CeWNZtds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BwQCEo_4.js";import"./FSButton-DEqhqb0b.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./FSClickable-CwRD7A4m.js";import"./FSCard-CiGLNn7K.js";import"./VProgressCircular-DNr7n8jG.js";import"./color-DIvEt_AX.js";import"./resizeObserver-CgHguIgR.js";import"./VIcon-Cl87HT90.js";import"./FSIcon-BKav6CVU.js";import"./useRules-CSYFw_Ue.js";import"./VField-COyetWuv.js";import"./index-9ysw5oGg.js";import"./transition-GJJG9yri.js";import"./VLabel-Cmax-_yp.js";import"./VInput-BfMi-lTR.js";import"./locale-CSWC84Vq.js";import"./density-Xpr_P7nk.js";import"./dimensions-DwY9cRwZ.js";import"./proxiedModel-DMSSa4ZW.js";import"./loader-BKsf8Js6.js";import"./anchor-C8ooBn8e.js";import"./rounded-BKWlZxOJ.js";import"./VDefaultsProvider-BK3j_XEC.js";import"./forwardRefs-DWGaNmQL.js";import"./index--Ye8kcMr.js";import"./useTranslations-DvAhn7XV.js";import"./VList-CAfJ4PqY.js";import"./VDialog-bMbnstsA.js";import"./VOverlay-B758aeer.js";import"./display-DzHu_6W3.js";import"./scopeId-NiaFRIZK.js";import"./router-WJHyAZQ9.js";import"./ssrBoot-DNxkCF-9.js";import"./border-TZTDiA6n.js";import"./elevation-S_BtbnzN.js";import"./index-8zgUIpZ9.js";import"./VImg-DcLzuYY5.js";import"./FSSlideGroup-DLHspItq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwHgwEym.js";import"./VSlideGroupItem-BI1OJQNm.js";import"./group-C8GVwDAJ.js";import"./FSToggleSet-D12Sjar_.js";import"./FSWrapGroup-TGBfJRdY.js";import"./FSCheckbox-ti2pWVdy.js";import"./VSelectionControl-KO2lf4xS.js";import"./FSFadeOut-BS7VKwj1.js";import"./FSLoader-Cf5HtYZd.js";import"./FSRadio-C1kBTUbb.js";import"./VSelect-fihYAFHR.js";import"./VMenu-DdabqpBj.js";import"./filter-Cz8pNtBH.js";import"./applications-pqrfQrBX.js";const a=g({components:{FSAutocompleteField:f},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:u(()=>A(t).filter(o=>o.value!=t.None).map(o=>({id:o.value,label:y(o.value)})))}}});function V(e,o,C,T,k,_){const s=S("FSAutocompleteField");return F(),d(s,c({label:e.label??e.$tr("autocomplete.aggregation.label","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},e.$attrs),null,16,["label","items","modelValue"])}const n=v(a,[["render",V]]);a.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/chartSelectors/FSAggregationSelector.vue"]};const Ke={title:"Foundation/Shared/Selects/AggregationSelector",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value:null}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:n,FSCol:b},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const Me=["Variations"];export{r as Variations,Me as __namedExportsOrder,Ke as default};
