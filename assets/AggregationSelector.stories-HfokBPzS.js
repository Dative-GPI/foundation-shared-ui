import{d,c,B as f,m as S,I as F,J as y}from"./vue.esm-bundler-D5n7z5qz.js";import{F as A}from"./FSAutocompleteField-GC0-NSch.js";import{g as i,A as m}from"./chartsTools-BM63X4UT.js";import{g as v}from"./enumTools-BEsapygt.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as V}from"./FSCol-D_lbFmZy.js";import"./FSSearchField-CpphZadi.js";import"./FSTextField-Cclf6IX8.js";import"./FSBaseField-Buivlp1M.js";import"./FSSpan-BN7wkmby.js";import"./useBreakpoints-CEzKC_o8.js";import"./useSlots-CoecqEnp.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./FSButton-CZRwWCRJ.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-CJ7Lhzl1.js";import"./FSIcon-BJsIM37h.js";import"./VIcon-mGJe0MYK.js";import"./color-BW36qAym.js";import"./useRender-BcOya-6A.js";import"./icons-DR_vovBH.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./FSCard-BH6GLU3V.js";import"./VProgressCircular-D6ZFUt0S.js";import"./resizeObserver-Z3fjh7Cv.js";import"./useRules-R3Ldkrx4.js";import"./VField-B1xdFTJF.js";import"./index-6jMyctoo.js";import"./transition-DbItRNv8.js";import"./VLabel-D-9L6eJP.js";import"./VInput-bTNISmSY.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./density-BnAGl-Nw.js";import"./dimensions-B7sNhH2O.js";import"./loader-COXi3ZW_.js";import"./anchor-CPKk15qm.js";import"./rounded-lfTNxM9v.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BKpPdzm5.js";import"./useTranslations-CFCS6HA-.js";import"./FSDialogMenu-553iq_m_.js";import"./VDialog-B2OpqrDi.js";import"./VOverlay-DHaepw21.js";import"./display-D8bdLPBN.js";import"./lazy-C77w73YC.js";import"./router-BDiSnJ53.js";import"./scopeId-DC5duiFx.js";import"./FSSlideGroup-IW38j_vX.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BE_tlhjQ.js";import"./VSlideGroup-BxUK8FWF.js";import"./goto-BwndLEHi.js";import"./group-BRhJCq_i.js";import"./VSlideGroupItem-CYOAdS4m.js";import"./FSToggleSet-BOI7_zgs.js";import"./FSWrapGroup-DzpSjUDj.js";import"./FSCheckbox-CpWOjTw-.js";import"./VCheckboxBtn-t5XcVMJr.js";import"./VSelectionControl-SdigZO9B.js";import"./index-BYo1BiTt.js";import"./FSFadeOut-C918yX_r.js";import"./FSLoader-Cl8hDT8j.js";import"./elevation-JukLG-n6.js";import"./FSRadio-BXAjRcH_.js";import"./VSelect-tiqwHlQo.js";import"./VList-DlQk11w2.js";import"./ssrBoot-C79LbZhX.js";import"./variant-j8rFA7nZ.js";import"./VImg-BlUyfKKc.js";import"./VDivider-Yc-HesXU.js";import"./VMenu-en6JpVrG.js";import"./filter-DlYw_aWm.js";import"./applications-pqrfQrBX.js";const l=d({components:{FSAutocompleteField:A},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1},allowedAggregation:{type:Array,required:!1,default:null}},emits:["update:modelValue"],setup(e){return{aggregationTypeItems:c(()=>e.allowedAggregation!=null?e.allowedAggregation.map(o=>({id:o,label:i(o)})):v(m).filter(o=>o.value!=m.None).map(o=>({id:o.value,label:i(o.value)})))}}});function T(e,r,o,C,k,_){const g=F("FSAutocompleteField");return y(),f(g,S({label:e.label??e.$tr("autocomplete.aggregation.label","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":r[0]||(r[0]=u=>e.$emit("update:modelValue",u))},e.$attrs),null,16,["label","items","modelValue"])}const s=b(l,[["render",T]]);l.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1},{name:"allowedAggregation",type:{name:"AggregationType[]"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/chartSelectors/FSAggregationSelector.vue"]};const oo={title:"Foundation/Shared/Selects/AggregationSelector",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value:null}},render:(e,{argTypes:r})=>({components:{FSAggregationSelector:s,FSCol:V},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const ro=["Variations"];export{t as Variations,ro as __namedExportsOrder,oo as default};
