import{d,c,E as f,m as S,L as F,M as y}from"./vue.esm-bundler-NVdFPFZB.js";import{F as A}from"./FSAutocompleteField-CfIbenZ4.js";import{g as m,A as p}from"./chartsTools-DsG0_Mln.js";import{g as v}from"./enumTools-BEsapygt.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as V}from"./FSCol-ChYB2Oag.js";import"./FSSearchField-TAeMrCJx.js";import"./FSTextField-CCgGVMUk.js";import"./FSBaseField-DjPNexk7.js";import"./FSSpan-CffnRYnX.js";import"./useBreakpoints-Trboya0O.js";import"./useSlots-DEXetpJf.js";import"./FSRow-BTBqaZ3Z.js";import"./css-BA19cdxW.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./FSButton-C9qE_hma.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DkgFU9ZB.js";import"./FSIcon-D-iWmbKS.js";import"./VIcon-BPCLtKbp.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./icons-AciKn6XY.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./FSCard-X6BL7IDn.js";import"./VProgressCircular-D014ccrC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./useRules-eFcMZq7y.js";import"./VTextField-C-VZod1v.js";import"./VField-C_JZJuDz.js";import"./index-C0WTB2TM.js";import"./transition-Dqm8buww.js";import"./VLabel-DOSQu5RP.js";import"./VInput-CBXzUquC.js";import"./locale-MGWjZjXD.js";import"./proxiedModel-4bJ1saXA.js";import"./density-HajNgXBf.js";import"./dimensions-BuDdBtmf.js";import"./loader-DOKDD2NA.js";import"./VProgressLinear-DA0V-MGc.js";import"./anchor-C-rl7L3L.js";import"./rounded-BE8u9DAQ.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Cane1ZR3.js";import"./forwardRefs-C-GTDzx5.js";import"./index-D_7bL_IH.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./FSDialogMenu-DFLdv4ZH.js";import"./VDialog-D_wwtbpx.js";import"./VOverlay-flKIXg07.js";import"./display-RdUuPsY9.js";import"./lazy-D5C5Y6_6.js";import"./router-D2Xcou1T.js";import"./scopeId-CVBASNvj.js";import"./dialog-transition-Y-HqWA1J.js";import"./FSSlideGroup-BLif3f0e.js";import"./FSButtonNextIcon-D5s36be0.js";import"./VSlideGroup-DLaaL0Lk.js";import"./goto-D2YfjHNt.js";import"./group-g6KFhHmW.js";import"./VSlideGroupItem-BNzWd0Zb.js";import"./FSToggleSet-BsHkDw8a.js";import"./FSWrapGroup-CZDPgZeJ.js";import"./FSCheckbox-BEgzMGmB.js";import"./VCheckboxBtn-BT3SzIyH.js";import"./VSelectionControl-TRNlUp1F.js";import"./index-CDgYZebE.js";import"./FSFadeOut-DWR8A1ny.js";import"./FSLoader-DRppy7ch.js";import"./elevation-DyTGrbk9.js";import"./FSRadio-BJhcq_TI.js";import"./VSelect-CfYUtP1Q.js";import"./VList-Bkkbsc6W.js";import"./ssrBoot-BimrXMWA.js";import"./border-D-0PuVU0.js";import"./variant-De5GYaDP.js";import"./VImg-CF0d7Fd2.js";import"./VDivider-sEPw-6oz.js";import"./VMenu-DfiSs3vJ.js";import"./filter-CEUeuq74.js";import"./applications-WAjZkOx7.js";const l=d({components:{FSAutocompleteField:A},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1},allowedAggregation:{type:Array,required:!1,default:null}},emits:["update:modelValue"],setup(e){return{aggregationTypeItems:c(()=>e.allowedAggregation!=null?e.allowedAggregation.map(o=>({id:o,label:m(o)})):v(p).filter(o=>o.value!=p.None).map(o=>({id:o.value,label:m(o.value)})))}}});function C(e,r,o,T,k,_){const g=F("FSAutocompleteField");return y(),f(g,S({label:e.label??e.$tr("autocomplete.aggregation.label","Aggregation"),items:e.aggregationTypeItems,modelValue:e.modelValue,"onUpdate:modelValue":r[0]||(r[0]=u=>e.$emit("update:modelValue",u))},e.$attrs),null,16,["label","items","modelValue"])}const s=b(l,[["render",C]]);l.__docgenInfo={exportName:"default",displayName:"FSAggregationSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"AggregationType"},required:!1},{name:"label",type:{name:"string"},required:!1},{name:"allowedAggregation",type:{name:"AggregationType[]"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/chartSelectors/FSAggregationSelector.vue"]};const ao={title:"Shared/Components/Selects/AggregationSelector",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value:null}},render:(e,{argTypes:r})=>({components:{FSAggregationSelector:s,FSCol:V},props:Object.keys(r),setup(){return{...e}},template:`
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
