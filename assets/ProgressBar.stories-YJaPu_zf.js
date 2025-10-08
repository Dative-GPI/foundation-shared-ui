import{d as F,c as o,B as i,E as m,V as b,I as v,J as c,U as p,H as B,A as w,K as x}from"./vue.esm-bundler-CocPPKUI.js";import{_ as h}from"./FSRow-BvJ7lU5E.js";import{F as q}from"./FSText-U805njuH.js";import{u as P,C as n}from"./useColors-DUufJJPH.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./useSlots-D4bv69lA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DhcBBMcp.js";const C=F({name:"FSProgressBar",components:{FSText:q,FSRow:h},props:{modelValue:{type:Number,required:!0},startColor:{type:String,required:!1},endColor:{type:String,required:!1},showValue:{type:Boolean,required:!1,default:!0}},setup(e){const{getColors:r}=P(),l=r(n.Light),u=r(n.Success),d=r(n.Error),s=o(()=>(e.modelValue*100).toFixed(0)),a=o(()=>e.modelValue?100/e.modelValue:0),_=o(()=>e.startColor??d.base),V=o(()=>e.endColor??u.base);return{style:o(()=>({"--progress-bar-background-color":l.dark,"--progress-bar-gradient-start-color":_.value,"--progress-bar-gradient-end-color":V.value,"--progress-bar-gradient-width":`min(100%, ${s.value}%)`,"--progress-bar-total-relative-width":`${a.value}%`})),fixedRate:s}}}),$=p("div",{class:"fs-progress-bar-gradient"},[p("div")],-1);function k(e,r,l,u,d,s){const a=v("FSText");return c(),i(h,{align:"center-center",style:b(e.style)},{default:m(()=>[$,e.$props.showValue?(c(),i(a,{key:0,font:"text-button"},{default:m(()=>[w(x(e.fixedRate)+"% ",1)]),_:1})):B("",!0)]),_:1},8,["style"])}const S=T(C,[["render",k]]);C.__docgenInfo={displayName:"FSProgressBar",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},required:!0},{name:"startColor",type:{name:"string"},required:!1},{name:"endColor",type:{name:"string"},required:!1},{name:"showValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSProgressBar.vue"]};const U={title:"Foundation/Shared/ProgressBar",component:S,tags:["autodocs"],argTypes:{}},t={args:{modelValue:.7,showValue:!0},render:(e,{argTypes:r})=>({components:{FSProgressBar:S},setup(){return{args:e}},template:`
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
