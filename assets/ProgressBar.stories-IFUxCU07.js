import{d as _,c as o,E as i,H as m,_ as b,L as v,M as p,Y as c,N as B,O as w,K as x}from"./vue.esm-bundler-D_gXonxt.js";import{_ as C}from"./FSRow-cHWWqhhs.js";import{F as q}from"./FSText-DL_5kFi7.js";import{u as P,C as n}from"./useColors-B49MKafH.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-Bznx04uW.js";import"./useBreakpoints-BWz07CZT.js";import"./useSlots-CdBAzqCX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";const S=_({name:"FSProgressBar",components:{FSText:q,FSRow:C},props:{modelValue:{type:Number,required:!0},startColor:{type:String,required:!1},endColor:{type:String,required:!1},showValue:{type:Boolean,required:!1,default:!0}},setup(e){const{getColors:r}=P(),l=r(n.Light),u=r(n.Success),d=r(n.Error),s=o(()=>(e.modelValue*100).toFixed(0)),a=o(()=>e.modelValue?100/e.modelValue:0),F=o(()=>e.startColor??d.base),V=o(()=>e.endColor??u.base);return{style:o(()=>({"--progress-bar-background-color":l.dark,"--progress-bar-gradient-start-color":F.value,"--progress-bar-gradient-end-color":V.value,"--progress-bar-gradient-width":`min(100%, ${s.value}%)`,"--progress-bar-total-relative-width":`${a.value}%`})),fixedRate:s}}});function T(e,r,l,u,d,s){const a=v("FSText");return p(),i(C,{align:"center-center",style:b(e.style)},{default:m(()=>[r[0]||(r[0]=c("div",{class:"fs-progress-bar-gradient"},[c("div")],-1)),e.$props.showValue?(p(),i(a,{key:0,font:"text-button"},{default:m(()=>[B(w(e.fixedRate)+"% ",1)]),_:1})):x("",!0)]),_:1},8,["style"])}const h=N(S,[["render",T]]);S.__docgenInfo={displayName:"FSProgressBar",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},required:!0},{name:"startColor",type:{name:"string"},required:!1},{name:"endColor",type:{name:"string"},required:!1},{name:"showValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSProgressBar.vue"]};const M={title:"Foundation/Shared/ProgressBar",component:h,tags:["autodocs"],argTypes:{}},t={args:{modelValue:.7,showValue:!0},render:(e,{argTypes:r})=>({components:{FSProgressBar:h},setup(){return{args:e}},template:`
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
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const W=["Default"];export{t as Default,W as __namedExportsOrder,M as default};
