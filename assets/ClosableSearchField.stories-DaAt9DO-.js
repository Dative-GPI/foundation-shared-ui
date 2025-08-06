import{a as F,b as C}from"./properties-Qw-O9fbT.js";import{F as b}from"./FSCol-79-COv64.js";import{F as g}from"./FSTextField-HkwYV1Vw.js";import{F as d}from"./FSSearchField-xkilxT3T.js";import{d as V,B as h,D as y,S as I,m as v,I as k,J as q,E as O,O as $,P as _,Q as B}from"./vue.esm-bundler-CocPPKUI.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./FSBaseField-Cn3A38Ti.js";import"./FSSpan-CKhKq6E1.js";import"./useSlots-D4bv69lA.js";import"./FSRow-BvJ7lU5E.js";import"./useColors-C1aD-Kb6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1Gcptw7.js";import"./FSButton-B9T3D7JL.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-CqIDwjuA.js";import"./FSCard-2KUMcI8D.js";import"./VProgressCircular-k_tOz5gX.js";import"./color-D50-hVV_.js";import"./resizeObserver-DDOqpSMx.js";import"./VIcon-ZjKwFcqe.js";import"./FSIcon-BGuuL0jz.js";import"./useRules-C3-AmzzE.js";import"./VField-CAcTjb6h.js";import"./index-hd-xIizf.js";import"./transition-bMLtH-b3.js";import"./VLabel-yrR5w-fx.js";import"./VInput-JSCg5nQs.js";import"./locale-_fONYh-8.js";import"./density-2KuMGYl6.js";import"./dimensions-Cv9Fwl7U.js";import"./proxiedModel-DW1FRKBO.js";import"./loader-BDqRCawj.js";import"./anchor-D4EnoweD.js";import"./rounded-CBYChxif.js";import"./VDefaultsProvider-CV4ffwSK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-5LM_ZUPq.js";import"./useTranslations-DJaIYmO0.js";const u=V({name:"FSClosableSearchField",components:{FSSearchField:d},props:{closable:{type:Boolean,required:!1,default:!0},unfocusOnClose:{type:Boolean,required:!1,default:!0},clearOnClose:{type:Boolean,required:!1,default:!0},modelValue:{type:String,required:!1,default:null},appendInnerIcon:{type:String,required:!1,default:"mdi-close"}},emits:["update:modelValue","close"],setup(e,{emit:o}){return{onCloseClicked:n=>{var l;e.closable&&(e.unfocusOnClose&&(n.preventDefault(),n.stopPropagation(),(l=document.activeElement)==null||l.blur()),e.clearOnClose&&o("update:modelValue",null),o("close"))}}}});function T(e,o,c,n,l,E){const f=k("FSSearchField");return q(),h(f,v({modelValue:e.$props.modelValue,appendInnerIcon:e.$props.closable?e.$props.appendInnerIcon:null,clearable:!1,"onClick:appendInner":e.onCloseClicked,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),y({_:2},[I(e.$slots,(t,s)=>({name:s,fn:O(S=>[$(e.$slots,s,_(B(S)))])}))]),1040,["modelValue","appendInnerIcon","onClick:appendInner"])}const r=P(u,[["render",T]]);u.__docgenInfo={displayName:"FSClosableSearchField",exportName:"default",description:"",tags:{},props:[{name:"closable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"unfocusOnClose",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"clearOnClose",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendInnerIcon",type:{name:"string | undefined"},required:!1,defaultValue:{func:!1,value:"'mdi-close'"}}],events:[{name:"update:modelValue"},{name:"close"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSClosableSearchField.vue"]};const Ie={title:"Foundation/Shared/Input fields/ClosableSearchField",component:r,tags:["autodocs"],argTypes:{...C([g,d],r),...F(r)}},a={args:{},render:(e,{argTypes:o})=>({components:{FSClosableSearchField:r,FSCol:b},props:Object.keys(o),setup(){return{args:e}},template:`
    <FSCol>
      <FSClosableSearchField
        v-model="args.modelValue"
        v-bind="args"
      />
    </FSCol>`})};var p,i,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSClosableSearchField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSCol>
      <FSClosableSearchField
        v-model="args.modelValue"
        v-bind="args"
      />
    </FSCol>\`
  })
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ve=["Variations"];export{a as Variations,ve as __namedExportsOrder,Ie as default};
