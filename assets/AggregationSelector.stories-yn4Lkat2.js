import{d as g,c as u,B as d,m as c,I as S,J as F}from"./vue.esm-bundler-CocPPKUI.js";import{F as f}from"./FSAutocompleteField-DyV5nib5.js";import{A as t,g as y}from"./chartsTools-DJr2nDUI.js";import{g as A}from"./enumTools-BEsapygt.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as b}from"./FSCol-79-COv64.js";import"./FSSearchField-BChNb6vP.js";import"./FSTextField-CrSrBFtk.js";import"./FSBaseField-BHCTmkg_.js";import"./FSSpan-DrSEJIpr.js";import"./useBreakpoints-DZlz3-56.js";import"./useSlots-D4bv69lA.js";import"./FSRow-BvJ7lU5E.js";import"./css-mt76hoAn.js";import"./useColors-DUufJJPH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DhcBBMcp.js";import"./FSButton-VjwKfCr9.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-6FPdriKA.js";import"./FSCard-JQNJPDhp.js";import"./VProgressCircular-BMkR7ln7.js";import"./color-yBCdco2I.js";import"./resizeObserver-QYhQJr79.js";import"./VIcon-Qz-Il978.js";import"./FSIcon-CKNHHVc2.js";import"./useRules-C3-AmzzE.js";import"./VField-CEhz-0ZK.js";import"./index-DfBdMsnv.js";import"./transition-BuKnRONq.js";import"./VLabel-HvE-XSAC.js";import"./VInput-DhPQv4YC.js";import"./locale-_fONYh-8.js";import"./density-DZuLaB-B.js";import"./dimensions-C9PuMYcl.js";import"./proxiedModel-DvocDLKO.js";import"./loader-B3-0Tc48.js";import"./anchor-C7UfIAXa.js";import"./rounded-Cjf6r1y4.js";import"./VDefaultsProvider-Clc0K3gC.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-lkzvYdnq.js";import"./useTranslations-DJaIYmO0.js";import"./FSDialogMenu-CeOfi1Vz.js";import"./VDialog-Cy-8Xjn8.js";import"./VOverlay-BofqjN94.js";import"./display-BmuJHlI4.js";import"./lazy-CpkO2kQj.js";import"./router-Btsphvl6.js";import"./scopeId-LQkRlG9f.js";import"./FSSlideGroup-BpYleAPY.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BGw3zb-K.js";import"./VSlideGroup-D3ZQzm0f.js";import"./group-CbiZXdYV.js";import"./VSlideGroupItem-BQNaTCX0.js";import"./FSToggleSet-BAu9OVEz.js";import"./FSWrapGroup-CR1U-5kP.js";import"./FSCheckbox-ChCYq6Yz.js";import"./VCheckboxBtn-B3VCaA0L.js";import"./VSelectionControl-BneTlqNp.js";import"./index-BgX1FNqJ.js";import"./FSFadeOut-BaaWP8Xe.js";import"./FSLoader-BeIlBGG_.js";import"./elevation-CsFMJmSN.js";import"./FSRadio-DSN2e6_O.js";import"./VSelect-CKWfJZu2.js";import"./VList-BU_HHy4r.js";import"./ssrBoot-B-cFki3l.js";import"./border-B0huqYee.js";import"./VImg-BaN5zAl6.js";import"./VMenu-uiC9_CJ1.js";import"./filter-CdJ0RAiZ.js";import"./applications-pqrfQrBX.js";const a=g({components:{FSAutocompleteField:f},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{aggregationTypeItems:u(()=>A(t).filter(o=>o.value!=t.None).map(o=>({id:o.value,label:y(o.value)})))}}});function V(e,o,C,T,k,_){const s=S("FSAutocompleteField");return F(),d(s,c({label:e.label??e.$tr("autocomplete.aggregation.label","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},e.$attrs),null,16,["label","items","modelValue"])}const n=v(a,[["render",V]]);a.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/chartSelectors/FSAggregationSelector.vue"]};const Xe={title:"Foundation/Shared/Selects/AggregationSelector",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value:null}},render:(e,{argTypes:o})=>({components:{FSAggregationSelector:n,FSCol:b},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const Ye=["Variations"];export{r as Variations,Ye as __namedExportsOrder,Xe as default};
