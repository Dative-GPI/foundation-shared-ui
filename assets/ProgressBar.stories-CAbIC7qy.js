import{d as V,c as o,A as i,D as m,U as b,H as v,I as c,P as p,F as B,J as w,K as x}from"./vue.esm-bundler-BD3cPSox.js";import{_ as h}from"./FSRow-CopwEayK.js";import{F as P}from"./FSText-uZOTHeSC.js";import{u as q,C as n}from"./useColors-Cu9vf_Ix.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-CmnfRCoE.js";import"./useBreakpoints-CnZdRDE7.js";import"./useSlots-DhthX9xh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B93wSOzC.js";const C=V({name:"FSProgressBar",components:{FSText:P,FSRow:h},props:{modelValue:{type:Number,required:!0},startColor:{type:String,required:!1},endColor:{type:String,required:!1},showValue:{type:Boolean,required:!1,default:!0}},setup(e){const{getColors:r}=q(),l=r(n.Light),u=r(n.Success),d=r(n.Error),s=o(()=>(e.modelValue*100).toFixed(0)),a=o(()=>e.modelValue?100/e.modelValue:0),_=o(()=>e.startColor??d.base),F=o(()=>e.endColor??u.base);return{style:o(()=>({"--progress-bar-background-color":l.dark,"--progress-bar-gradient-start-color":_.value,"--progress-bar-gradient-end-color":F.value,"--progress-bar-gradient-width":`min(100%, ${s.value}%)`,"--progress-bar-total-relative-width":`${a.value}%`})),fixedRate:s}}}),$=p("div",{class:"fs-progress-bar-gradient"},[p("div")],-1);function k(e,r,l,u,d,s){const a=v("FSText");return c(),i(h,{align:"center-center",style:b(e.style)},{default:m(()=>[$,e.$props.showValue?(c(),i(a,{key:0,font:"text-button"},{default:m(()=>[w(x(e.fixedRate)+"% ",1)]),_:1})):B("",!0)]),_:1},8,["style"])}const S=T(C,[["render",k]]);C.__docgenInfo={displayName:"FSProgressBar",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},required:!0},{name:"startColor",type:{name:"string"},required:!1},{name:"endColor",type:{name:"string"},required:!1},{name:"showValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSProgressBar.vue"]};const U={title:"Foundation/Shared/ProgressBar",component:S,tags:["autodocs"],argTypes:{}},t={args:{modelValue:.7,showValue:!0},render:(e,{argTypes:r})=>({components:{FSProgressBar:S},setup(){return{args:e}},template:`
      <FSProgressBar
        v-bind="args"
      />
    `})};var g,f,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    modelValue: 0.70,
    showValue: true
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSProgressBar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSProgressBar
        v-bind="args"
      />
    \`
  })
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const W=["Default"];export{t as Default,W as __namedExportsOrder,U as default};
