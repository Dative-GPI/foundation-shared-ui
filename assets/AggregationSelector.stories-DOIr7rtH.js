import{r as d,g as c,j as f,B as S,Y as F,P as y}from"./vue.esm-bundler-DR0_aU9U.js";import{F as A}from"./FSAutocompleteField-TSSWDRN2.js";import{b as i,A as p}from"./chartsTools-DieruEcR.js";import{g as b}from"./enumTools-BEsapygt.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as V}from"./FSCol-B2uM4vFw.js";import"./FSSearchField-DM7Wv8W0.js";import"./FSTextField-tianF0jI.js";import"./FSBaseField-y2QkcP3h.js";import"./FSSpan-9E7WYB2n.js";import"./useBreakpoints-DhvOJkKp.js";import"./useSlots-p1mkRhuZ.js";import"./FSRow-C8VtPvPz.js";import"./css-B9c0ZZC5.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./FSButton-CX1uVweX.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./FSText-CUmuxASa.js";import"./FSIcon-CBwOL1p5.js";import"./VIcon-e3y7Ok8e.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./icons-CT9uuJgl.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSCard--XyliQO3.js";import"./VProgressCircular-CZaehD4X.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./useRules-2yt7KWSA.js";import"./VTextField-Jo2lzvlt.js";import"./VField-BhclGBdp.js";import"./index-C-lZWyiZ.js";import"./transition-CedxoFs4.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./density-SLEyWIf6.js";import"./dimensions-DYTrXD1P.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./anchor-CT7OU_gq.js";import"./rounded-B6-M_5uG.js";import"./easing--CnlGZ0M.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BLyOCIqB.js";import"./useTranslations-CDmrxgqt.js";import"./FSDialogMenu-qRBioB29.js";import"./VDialog-uOP7gGlh.js";import"./VOverlay-BwyinDfp.js";import"./display-B8Tm0OQZ.js";import"./lazy-DY4Wto-x.js";import"./router-CJAgOfLI.js";import"./scopeId-bhuUTgv7.js";import"./dialog-transition-BGzvJBOV.js";import"./FSSlideGroup-DXfM7ZwC.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BPTvjWXT.js";import"./VSlideGroup-BjJJyiAP.js";import"./goto-nsb-OfwD.js";import"./group-CUiyutR_.js";import"./VSlideGroupItem-BDJ1UEY1.js";import"./FSToggleSet-r3-ZJAhZ.js";import"./FSWrapGroup-v391AceI.js";import"./FSCheckbox-D-n0kplZ.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./index-Dlqh_ozP.js";import"./FSFadeOut-DENuqwmT.js";import"./FSLoader-DlWbYN_-.js";import"./elevation-DVEOfLMu.js";import"./FSRadio-CAlCR3Pp.js";import"./VSelect-CjSLppM5.js";import"./VList-fBlb7u4-.js";import"./ssrBoot-DbD7MJXH.js";import"./border-CatZixNo.js";import"./variant-BZg-bE5G.js";import"./VImg-DooBjoZC.js";import"./VDivider-g5HOQuaH.js";import"./VMenu-CkdLE1rB.js";import"./filter-CXrqG-Z2.js";import"./applications-WAjZkOx7.js";const l=d({components:{FSAutocompleteField:A},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1},allowedAggregation:{type:Array,required:!1,default:null}},emits:["update:modelValue"],setup(e){return{aggregationTypeItems:c(()=>e.allowedAggregation!=null?e.allowedAggregation.map(o=>({id:o,label:i(o)})):b(p).filter(o=>o.value!=p.None).map(o=>({id:o.value,label:i(o.value)})))}}});function T(e,r,o,C,k,_){const g=F("FSAutocompleteField");return y(),f(g,S({label:e.label??e.$tr("autocomplete.aggregation.label","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":r[0]||(r[0]=u=>e.$emit("update:modelValue",u))},e.$attrs),null,16,["label","items","modelValue"])}const s=v(l,[["render",T]]);l.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1},{name:"allowedAggregation",type:{name:"AggregationType[]"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/chartSelectors/FSAggregationSelector.vue"]};const mo={title:"Foundation/Shared/Selects/AggregationSelector",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value:null}},render:(e,{argTypes:r})=>({components:{FSAggregationSelector:s,FSCol:V},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSAggregationSelector
        v-model="args.value"
      />
    </FSCol>`})};var m,a,n;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const ao=["Variations"];export{t as Variations,ao as __namedExportsOrder,mo as default};
