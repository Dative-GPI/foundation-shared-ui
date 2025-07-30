import{d as g,c as u,B as d,m as c,I as S,J as F}from"./vue.esm-bundler-PONd4AmC.js";import{F as f}from"./FSAutocompleteField-DJcNVJsm.js";import{A as t,g as y}from"./chartsTools-vZO2cNJl.js";import{g as A}from"./enumTools-BEsapygt.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as b}from"./FSCol-Bfhiyt6Y.js";import"./FSSearchField-ChPOPxqV.js";import"./FSTextField-Du9Dg0zN.js";import"./FSBaseField-C48d8q8m.js";import"./FSSpan-DxKJLsSl.js";import"./useBreakpoints-RTs-XAJF.js";import"./useSlots-nyIcwo6G.js";import"./FSRow-C-b-hpWa.js";import"./css-BeoQuAfr.js";import"./useColors-WMY9wD-z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DW7AHeJn.js";import"./FSButton-C_cDbGvj.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-BpeLEfG7.js";import"./FSCard-B7av1ouT.js";import"./VProgressCircular-D57tYVQX.js";import"./color-CQ7P2KsY.js";import"./resizeObserver-BAwzmH4Y.js";import"./VIcon-shEmQARK.js";import"./FSIcon-wf_hiRKr.js";import"./useRules-CT5DWk6c.js";import"./VField-D3hGYPrZ.js";import"./index-COu1mqSp.js";import"./transition-BpYTYsmy.js";import"./VLabel-B2dMuALu.js";import"./VInput-CX-j4Zl6.js";import"./locale-CoLhg8Wl.js";import"./density-DM1TPnyn.js";import"./dimensions-D04OQyPe.js";import"./proxiedModel-BMHfYIia.js";import"./loader-zqGHJTJd.js";import"./anchor-rLQXsCC5.js";import"./rounded-Cwlpymxx.js";import"./VDefaultsProvider--dbql3OT.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CzkqP9_q.js";import"./useTranslations-_Q1DYra_.js";import"./FSDialogMenu-Crze0iUo.js";import"./VDialog-CkmtLqSZ.js";import"./VOverlay-C4y2redN.js";import"./display-D1WOGNJY.js";import"./lazy-PL0gnfDR.js";import"./router-DS8hXbpn.js";import"./scopeId-DFcjERLl.js";import"./FSSlideGroup-G-1eJ8xl.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BfAvcYY6.js";import"./VSlideGroupItem-B4B7QRhR.js";import"./group-QLjCrFp5.js";import"./FSToggleSet-BSMIUsc9.js";import"./FSWrapGroup-Dayjp45z.js";import"./FSCheckbox-B1Q6_lSw.js";import"./VCheckboxBtn-CYnHxMSC.js";import"./VSelectionControl-BAKsAS1a.js";import"./index-aCfcr9Gd.js";import"./FSFadeOut-Dik6Imqk.js";import"./FSLoader-B0jwcdOS.js";import"./elevation-D2k7D5K3.js";import"./FSRadio-CdtLWkJD.js";import"./VSelect-CyCOXYrT.js";import"./VList-BCmGq4kQ.js";import"./ssrBoot-DufuUSU7.js";import"./border-BL_XAYaf.js";import"./VImg-AonvEV9k.js";import"./VMenu-DAcX0VlQ.js";import"./filter-D4n0RRF9.js";import"./applications-pqrfQrBX.js";const a=g({components:{FSAutocompleteField:f},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:u(()=>A(t).filter(o=>o.value!=t.None).map(o=>({id:o.value,label:y(o.value)})))}}});function V(e,o,C,T,k,_){const s=S("FSAutocompleteField");return F(),d(s,c({label:e.label??e.$tr("autocomplete.aggregation.label","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},e.$attrs),null,16,["label","items","modelValue"])}const n=v(a,[["render",V]]);a.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/chartSelectors/FSAggregationSelector.vue"]};const Re={title:"Foundation/Shared/Selects/AggregationSelector",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value:null}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:n,FSCol:b},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const We=["Variations"];export{r as Variations,We as __namedExportsOrder,Re as default};
