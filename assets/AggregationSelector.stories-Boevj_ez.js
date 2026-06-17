import{d,c,E as f,m as S,L as F,M as y}from"./vue.esm-bundler-NVdFPFZB.js";import{F as A}from"./FSAutocompleteField-1hSZVlcl.js";import{g as m,A as p}from"./chartsTools-i6M79ioQ.js";import{g as v}from"./enumTools-BEsapygt.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as V}from"./FSCol-KRtq6OYO.js";import"./FSSearchField-UKNz29K-.js";import"./FSTextField-DFareS9q.js";import"./FSBaseField-CishEyxh.js";import"./FSSpan-B28b2m0n.js";import"./useBreakpoints-DO2FQykY.js";import"./useSlots-DEXetpJf.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useColors-B9SkzYFF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./FSButton-CdKzPvIq.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DR713pSR.js";import"./FSIcon-DzQOa56z.js";import"./VIcon-Cu6WQqXu.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSCard-ghpSlWxI.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./useRules-eFcMZq7y.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./index-ByfGjSW7.js";import"./transition-a5pzBS6c.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./density-CE2FkSgs.js";import"./dimensions-CS_qJJhy.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./anchor-Se7MGGLO.js";import"./rounded-CS1_z6Jk.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Blv54jCg.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B4rZgXN-.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./FSDialogMenu-HNK7X8ju.js";import"./VDialog-CmTscL9b.js";import"./VOverlay-BuHPOPgF.js";import"./display-QVN4B5Qw.js";import"./lazy-sPNxwuRm.js";import"./router-D36qODsG.js";import"./scopeId-DEhVAmth.js";import"./dialog-transition-B9S_00bc.js";import"./FSSlideGroup-BYhxS2B0.js";import"./FSButtonNextIcon-BffFRYRL.js";import"./VSlideGroup-B-JqmwGu.js";import"./goto-CvfYl6LX.js";import"./group-BLkYT3DE.js";import"./VSlideGroupItem-DS171Ouj.js";import"./FSToggleSet-CZYm0d1o.js";import"./FSWrapGroup-jHFOEYDl.js";import"./FSCheckbox-D5kCrb66.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./index-B-eFr4Nw.js";import"./FSFadeOut-VhSFSAo6.js";import"./FSLoader-DOgbrYCd.js";import"./elevation-DQ_qKX67.js";import"./FSRadio-C94-RoOx.js";import"./VSelect-CVWNfrM9.js";import"./VList-BhDySjdU.js";import"./ssrBoot-BimrXMWA.js";import"./border-D8z1QLxT.js";import"./variant-DNfp8Yqp.js";import"./VImg-BdZHkGCX.js";import"./VDivider-B9VczfM4.js";import"./VMenu-BCj9c0xY.js";import"./filter-C4s97JnQ.js";import"./applications-WAjZkOx7.js";const l=d({components:{FSAutocompleteField:A},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1},allowedAggregation:{type:Array,required:!1,default:null}},emits:["update:modelValue"],setup(e){return{aggregationTypeItems:c(()=>e.allowedAggregation!=null?e.allowedAggregation.map(o=>({id:o,label:m(o)})):v(p).filter(o=>o.value!=p.None).map(o=>({id:o.value,label:m(o.value)})))}}});function C(e,r,o,T,k,_){const g=F("FSAutocompleteField");return y(),f(g,S({label:e.label??e.$tr("autocomplete.aggregation.label","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":r[0]||(r[0]=u=>e.$emit("update:modelValue",u))},e.$attrs),null,16,["label","items","modelValue"])}const s=b(l,[["render",C]]);l.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1},{name:"allowedAggregation",type:{name:"AggregationType[]"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/chartSelectors/FSAggregationSelector.vue"]};const ao={title:"Shared/Components/Selects/AggregationSelector",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value:null}},render:(e,{argTypes:r})=>({components:{FSAggregationSelector:s,FSCol:V},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSAggregationSelector
        v-model="args.value"
      />
    </FSCol>`})};var i,a,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const no=["Variations"];export{t as Variations,no as __namedExportsOrder,ao as default};
