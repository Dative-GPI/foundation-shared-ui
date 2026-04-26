import{d,c,E as f,m as S,L as F,M as y}from"./vue.esm-bundler-D_gXonxt.js";import{F as A}from"./FSAutocompleteField-CfoV1NhN.js";import{g as i,A as m}from"./chartsTools-8fmD3rad.js";import{g as v}from"./enumTools-BEsapygt.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as V}from"./FSCol-C3EJfcJX.js";import"./FSSearchField-HtJ7es4F.js";import"./FSTextField-CvqetqWm.js";import"./FSBaseField-CGwB2cs2.js";import"./FSSpan-ap0CpdXZ.js";import"./useBreakpoints-BWz07CZT.js";import"./useSlots-CdBAzqCX.js";import"./FSRow-cHWWqhhs.js";import"./css-Bznx04uW.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./FSButton-DHeuA-BH.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./FSText-DL_5kFi7.js";import"./FSIcon-B9MXbR5l.js";import"./VIcon-gCapjdof.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSCard-Cxfe3-O9.js";import"./VProgressCircular-BomUTxjq.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./useRules-CohX4tE3.js";import"./VTextField-SMQo8Oxu.js";import"./VField-Cr90fIiu.js";import"./index-aKIkx5xA.js";import"./transition-CHyhkthg.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./locale-CEMLpecI.js";import"./proxiedModel-Cl0bR0rs.js";import"./density-W7RG4BnT.js";import"./dimensions-BYDjhYdL.js";import"./loader-DM6th8g9.js";import"./VProgressLinear-bxxDRxj8.js";import"./anchor-DrPAsKKU.js";import"./rounded-yhlSUX6x.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-DJfojugM.js";import"./forwardRefs-C-GTDzx5.js";import"./index-CpkyVf-S.js";import"./useTranslations-D2TwtVAp.js";import"./FSDialogMenu-CYc22LXB.js";import"./VDialog-BTFeiENf.js";import"./VOverlay-CrMgAm2W.js";import"./display-BIN9xr9Q.js";import"./lazy-aXB44k01.js";import"./router-hLwSEJDL.js";import"./scopeId-BwxBN6Au.js";import"./dialog-transition-d5ANZlFh.js";import"./FSSlideGroup-CeCO9XCC.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Dgxxr9ql.js";import"./VSlideGroup-Bqij08hI.js";import"./goto-wDz_aHst.js";import"./group-BimGXDpZ.js";import"./VSlideGroupItem-DyiSjx9G.js";import"./FSToggleSet-DaMIvypa.js";import"./FSWrapGroup-D5YRUBcz.js";import"./FSCheckbox-zoBL9ZjY.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./index-ByzLombQ.js";import"./FSFadeOut-z7-cnvK3.js";import"./FSLoader-CdctsmAF.js";import"./elevation-sxxySPKb.js";import"./FSRadio-Bk5L3sqZ.js";import"./VSelect-BdqVvZBK.js";import"./VList-D8CiLhgs.js";import"./ssrBoot-DpaZqI6q.js";import"./border-BTzDu4tj.js";import"./variant-ftZYcIF1.js";import"./VImg-ufpttNgj.js";import"./VDivider-CTy1lKut.js";import"./VMenu-KvKUKA1I.js";import"./filter-DB2eMWUq.js";import"./applications-WAjZkOx7.js";const l=d({components:{FSAutocompleteField:A},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1},allowedAggregation:{type:Array,required:!1,default:null}},emits:["update:modelValue"],setup(e){return{aggregationTypeItems:c(()=>e.allowedAggregation!=null?e.allowedAggregation.map(o=>({id:o,label:i(o)})):v(m).filter(o=>o.value!=m.None).map(o=>({id:o.value,label:i(o.value)})))}}});function T(e,r,o,C,k,_){const g=F("FSAutocompleteField");return y(),f(g,S({label:e.label??e.$tr("autocomplete.aggregation.label","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":r[0]||(r[0]=u=>e.$emit("update:modelValue",u))},e.$attrs),null,16,["label","items","modelValue"])}const s=b(l,[["render",T]]);l.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1},{name:"allowedAggregation",type:{name:"AggregationType[]"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/chartSelectors/FSAggregationSelector.vue"]};const po={title:"Foundation/Shared/Selects/AggregationSelector",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value:null}},render:(e,{argTypes:r})=>({components:{FSAggregationSelector:s,FSCol:V},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSAggregationSelector
        v-model="args.value"
      />
    </FSCol>`})};var p,a,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const ao=["Variations"];export{t as Variations,ao as __namedExportsOrder,po as default};
