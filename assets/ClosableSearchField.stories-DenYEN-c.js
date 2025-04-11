import{a as F,b as C}from"./properties-DwZ_iDct.js";import{F as b}from"./FSCol-qfATdd_b.js";import{F as g}from"./FSTextField-Bd-6am9D.js";import{F as d}from"./FSSearchField-Dt9Y52Jr.js";import{d as V,z as h,B as y,Q as v,m as I,G as k,H as q,C as $,L as O,M as _,N as B}from"./vue.esm-bundler-PTWG9x2X.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-B90wD3BD.js";import"./useBreakpoints-W7XGW48y.js";import"./FSBaseField-DcQpuQod.js";import"./FSSpan-yJEd2pn-.js";import"./useSlots-BG_ZhEqK.js";import"./FSRow-DPcQMiM9.js";import"./useColors-CHEA4ij4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./FSButton-YqGArPy2.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./FSClickable-TnS9e2Ej.js";import"./FSCard-DkDNRB06.js";import"./VProgressCircular-eoxb555W.js";import"./color-CCpgnDIk.js";import"./resizeObserver-C17Kgm90.js";import"./VIcon-DIeegzqR.js";import"./FSIcon-Df5FR-8G.js";import"./useRules-D0leB7Wy.js";import"./VField-w4x2OZhg.js";import"./index-b-ADC_Il.js";import"./transition-QV8dDJB9.js";import"./VLabel-BNJ33aDR.js";import"./VInput-C2FcZlE6.js";import"./locale-Cz_4DTJh.js";import"./density-CznkHGGy.js";import"./dimensions-v18atrWI.js";import"./proxiedModel-CvHSoKPb.js";import"./loader-BqT2mYY7.js";import"./anchor-BcF6JBj1.js";import"./rounded-BbPXzFqc.js";import"./VDefaultsProvider-aDgtYDKn.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BNomsh5u.js";import"./useTranslations-BnE68qER.js";const u=V({name:"FSClosableSearchField",components:{FSSearchField:d},props:{closable:{type:Boolean,required:!1,default:!0},unfocusOnClose:{type:Boolean,required:!1,default:!0},clearOnClose:{type:Boolean,required:!1,default:!0},modelValue:{type:String,required:!1,default:null},appendInnerIcon:{type:String,required:!1,default:"mdi-close"}},emits:["update:modelValue","close"],setup(e,{emit:o}){return{onCloseClicked:n=>{var l;e.closable&&(e.unfocusOnClose&&(n.preventDefault(),n.stopPropagation(),(l=document.activeElement)==null||l.blur()),e.clearOnClose&&o("update:modelValue",null),o("close"))}}}});function P(e,o,c,n,l,E){const f=k("FSSearchField");return q(),h(f,I({modelValue:e.$props.modelValue,appendInnerIcon:e.$props.closable?e.$props.appendInnerIcon:null,clearable:!1,"onClick:appendInner":e.onCloseClicked,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),y({_:2},[v(e.$slots,(t,s)=>({name:s,fn:$(S=>[O(e.$slots,s,_(B(S)))])}))]),1040,["modelValue","appendInnerIcon","onClick:appendInner"])}const r=T(u,[["render",P]]);u.__docgenInfo={displayName:"FSClosableSearchField",exportName:"default",description:"",tags:{},props:[{name:"closable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"unfocusOnClose",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"clearOnClose",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendInnerIcon",type:{name:"string | undefined"},required:!1,defaultValue:{func:!1,value:"'mdi-close'"}}],events:[{name:"update:modelValue"},{name:"close"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSClosableSearchField.vue"]};const ve={title:"Foundation/Shared/Input fields/ClosableSearchField",component:r,tags:["autodocs"],argTypes:{...C([g,d],r),...F(r)}},a={args:{},render:(e,{argTypes:o})=>({components:{FSClosableSearchField:r,FSCol:b},props:Object.keys(o),setup(){return{args:e}},template:`
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
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ie=["Variations"];export{a as Variations,Ie as __namedExportsOrder,ve as default};
