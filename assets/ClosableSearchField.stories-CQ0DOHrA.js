import{a as F,b as C}from"./properties-Qw-O9fbT.js";import{F as b}from"./FSCol-DVEaUPKl.js";import{F as g}from"./FSTextField-CTUDqfDL.js";import{F as d}from"./FSSearchField-X1df83qn.js";import{d as V,B as h,D as y,S as I,m as v,I as k,J as q,E as O,O as $,P as _,Q as B}from"./vue.esm-bundler-CC_jVOJ5.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-DTGEi_Ca.js";import"./useBreakpoints-BMcJFLA8.js";import"./FSBaseField-Bo38Hl_f.js";import"./FSSpan-DkNsO5wd.js";import"./useSlots-C8jkAuOW.js";import"./FSRow-CjY3icuR.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./FSButton-Czf3beC8.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSClickable-DFmwvck2.js";import"./FSCard-twwkVLSp.js";import"./VProgressCircular-B7HKciov.js";import"./color-BM2dSUAO.js";import"./resizeObserver-BZ0AJw4z.js";import"./VIcon-BOLLMMm0.js";import"./FSIcon-CeLDRxMK.js";import"./useRules-Da0JLBaA.js";import"./VField-CnDxsm3U.js";import"./index-Dylhq_Dl.js";import"./transition-Ucf2Ovas.js";import"./VLabel-kKpu5iXd.js";import"./VInput-0C1kQySn.js";import"./locale-K9DBMW2q.js";import"./density-mssFUWH2.js";import"./dimensions-TKp8HHzB.js";import"./proxiedModel-Nw0LX-ta.js";import"./loader-CbVzlK-r.js";import"./anchor-S0Fc85Gi.js";import"./rounded-Cy4gG01O.js";import"./VDefaultsProvider-CuIagDb9.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B48vLg-P.js";import"./useTranslations-5XSl7qXA.js";const u=V({name:"FSClosableSearchField",components:{FSSearchField:d},props:{closable:{type:Boolean,required:!1,default:!0},unfocusOnClose:{type:Boolean,required:!1,default:!0},clearOnClose:{type:Boolean,required:!1,default:!0},modelValue:{type:String,required:!1,default:null},appendInnerIcon:{type:String,required:!1,default:"mdi-close"}},emits:["update:modelValue","close"],setup(e,{emit:o}){return{onCloseClicked:n=>{var l;e.closable&&(e.unfocusOnClose&&(n.preventDefault(),n.stopPropagation(),(l=document.activeElement)==null||l.blur()),e.clearOnClose&&o("update:modelValue",null),o("close"))}}}});function T(e,o,c,n,l,E){const f=k("FSSearchField");return q(),h(f,v({modelValue:e.$props.modelValue,appendInnerIcon:e.$props.closable?e.$props.appendInnerIcon:null,clearable:!1,"onClick:appendInner":e.onCloseClicked,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),y({_:2},[I(e.$slots,(t,s)=>({name:s,fn:O(S=>[$(e.$slots,s,_(B(S)))])}))]),1040,["modelValue","appendInnerIcon","onClick:appendInner"])}const a=P(u,[["render",T]]);u.__docgenInfo={displayName:"FSClosableSearchField",exportName:"default",description:"",tags:{},props:[{name:"closable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"unfocusOnClose",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"clearOnClose",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendInnerIcon",type:{name:"string | undefined"},required:!1,defaultValue:{func:!1,value:"'mdi-close'"}}],events:[{name:"update:modelValue"},{name:"close"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSClosableSearchField.vue"]};const ve={title:"Foundation/Shared/Input fields/ClosableSearchField",component:a,tags:["autodocs"],argTypes:{...C([g,d],a),...F(a)}},r={args:{},render:(e,{argTypes:o})=>({components:{FSClosableSearchField:a,FSCol:b},props:Object.keys(o),setup(){return{args:e}},template:`
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
