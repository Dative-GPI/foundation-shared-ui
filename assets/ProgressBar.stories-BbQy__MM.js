import{d as b,c as o,B as i,D as m,X as _,I as v,J as p,V as c,K as B,L as w,H as x}from"./vue.esm-bundler-D5n7z5qz.js";import{_ as C}from"./FSRow-DIk8KFbG.js";import{F as q}from"./FSText-015IEZHy.js";import{u as P,C as n}from"./useColors-COEXNh00.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./useSlots-CoecqEnp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";const S=b({name:"FSProgressBar",components:{FSText:q,FSRow:C},props:{modelValue:{type:Number,required:!0},startColor:{type:String,required:!1},endColor:{type:String,required:!1},showValue:{type:Boolean,required:!1,default:!0}},setup(e){const{getColors:r}=P(),l=r(n.Light),u=r(n.Success),d=r(n.Error),s=o(()=>(e.modelValue*100).toFixed(0)),a=o(()=>e.modelValue?100/e.modelValue:0),h=o(()=>e.startColor??d.base),F=o(()=>e.endColor??u.base);return{style:o(()=>({"--progress-bar-background-color":l.dark,"--progress-bar-gradient-start-color":h.value,"--progress-bar-gradient-end-color":F.value,"--progress-bar-gradient-width":`min(100%, ${s.value}%)`,"--progress-bar-total-relative-width":`${a.value}%`})),fixedRate:s}}});function $(e,r,l,u,d,s){const a=v("FSText");return p(),i(C,{align:"center-center",style:_(e.style)},{default:m(()=>[r[0]||(r[0]=c("div",{class:"fs-progress-bar-gradient"},[c("div")],-1)),e.$props.showValue?(p(),i(a,{key:0,font:"text-button"},{default:m(()=>[B(w(e.fixedRate)+"% ",1)]),_:1})):x("",!0)]),_:1},8,["style"])}const V=T(S,[["render",$]]);S.__docgenInfo={displayName:"FSProgressBar",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},required:!0},{name:"startColor",type:{name:"string"},required:!1},{name:"endColor",type:{name:"string"},required:!1},{name:"showValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSProgressBar.vue"]};const O={title:"Foundation/Shared/ProgressBar",component:V,tags:["autodocs"],argTypes:{}},t={args:{modelValue:.7,showValue:!0},render:(e,{argTypes:r})=>({components:{FSProgressBar:V},setup(){return{args:e}},template:`
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
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const W=["Default"];export{t as Default,W as __namedExportsOrder,O as default};
