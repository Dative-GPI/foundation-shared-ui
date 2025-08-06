import{a as F,b as C}from"./properties-Qw-O9fbT.js";import{F as b}from"./FSCol-Bfhiyt6Y.js";import{F as g}from"./FSTextField-DpTxivyj.js";import{F as d}from"./FSSearchField-sQ9DfSvh.js";import{d as V,B as h,D as y,S as I,m as v,I as k,J as q,E as O,O as $,P as _,Q as B}from"./vue.esm-bundler-PONd4AmC.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./FSBaseField-ynwJeuM4.js";import"./FSSpan-DqsaA-ji.js";import"./useSlots-nyIcwo6G.js";import"./FSRow-C-b-hpWa.js";import"./useColors-WMY9wD-z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DW7AHeJn.js";import"./FSButton-BtOsEP4C.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-BpeLEfG7.js";import"./FSCard-B7av1ouT.js";import"./VProgressCircular-D57tYVQX.js";import"./color-CQ7P2KsY.js";import"./resizeObserver-BAwzmH4Y.js";import"./VIcon-shEmQARK.js";import"./FSIcon-wf_hiRKr.js";import"./useRules-CT5DWk6c.js";import"./VField-BsvLa1Vn.js";import"./index-COu1mqSp.js";import"./transition-BpYTYsmy.js";import"./VLabel-B2dMuALu.js";import"./VInput-CX-j4Zl6.js";import"./locale-CoLhg8Wl.js";import"./density-DM1TPnyn.js";import"./dimensions-D04OQyPe.js";import"./proxiedModel-BMHfYIia.js";import"./loader-zqGHJTJd.js";import"./anchor-rLQXsCC5.js";import"./rounded-Cwlpymxx.js";import"./VDefaultsProvider--dbql3OT.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-CzkqP9_q.js";import"./useTranslations-_Q1DYra_.js";const u=V({name:"FSClosableSearchField",components:{FSSearchField:d},props:{closable:{type:Boolean,required:!1,default:!0},unfocusOnClose:{type:Boolean,required:!1,default:!0},clearOnClose:{type:Boolean,required:!1,default:!0},modelValue:{type:String,required:!1,default:null},appendInnerIcon:{type:String,required:!1,default:"mdi-close"}},emits:["update:modelValue","close"],setup(e,{emit:o}){return{onCloseClicked:n=>{var l;e.closable&&(e.unfocusOnClose&&(n.preventDefault(),n.stopPropagation(),(l=document.activeElement)==null||l.blur()),e.clearOnClose&&o("update:modelValue",null),o("close"))}}}});function T(e,o,c,n,l,E){const f=k("FSSearchField");return q(),h(f,v({modelValue:e.$props.modelValue,appendInnerIcon:e.$props.closable?e.$props.appendInnerIcon:null,clearable:!1,"onClick:appendInner":e.onCloseClicked,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),y({_:2},[I(e.$slots,(t,s)=>({name:s,fn:O(S=>[$(e.$slots,s,_(B(S)))])}))]),1040,["modelValue","appendInnerIcon","onClick:appendInner"])}const a=P(u,[["render",T]]);u.__docgenInfo={displayName:"FSClosableSearchField",exportName:"default",description:"",tags:{},props:[{name:"closable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"unfocusOnClose",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"clearOnClose",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendInnerIcon",type:{name:"string | undefined"},required:!1,defaultValue:{func:!1,value:"'mdi-close'"}}],events:[{name:"update:modelValue"},{name:"close"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSClosableSearchField.vue"]};const ve={title:"Foundation/Shared/Input fields/ClosableSearchField",component:a,tags:["autodocs"],argTypes:{...C([g,d],a),...F(a)}},r={args:{},render:(e,{argTypes:o})=>({components:{FSClosableSearchField:a,FSCol:b},props:Object.keys(o),setup(){return{args:e}},template:`
    <FSCol>
      <FSClosableSearchField
        v-model="args.modelValue"
        v-bind="args"
      />
    </FSCol>`})};var p,i,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ke=["Variations"];export{r as Variations,ke as __namedExportsOrder,ve as default};
