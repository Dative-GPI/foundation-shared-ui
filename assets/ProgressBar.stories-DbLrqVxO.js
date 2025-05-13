import{d as V,c as o,z as i,C as m,S as b,G as v,H as c,R as p,E as B,I as w,J as x}from"./vue.esm-bundler-CM4TIH-Q.js";import{_ as C}from"./FSRow-C47sfGk6.js";import{F as q}from"./FSText-C032WjuG.js";import{u as P,C as n}from"./useColors-CjA2D2xA.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-D38lF7BW.js";import"./useBreakpoints-DsICqL2A.js";import"./useSlots-c6yg-hhg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";const S=V({name:"FSProgressBar",components:{FSText:q,FSRow:C},props:{modelValue:{type:Number,required:!0},startColor:{type:String,required:!1},endColor:{type:String,required:!1},showValue:{type:Boolean,required:!1,default:!0}},setup(e){const{getColors:r}=P(),l=r(n.Light),u=r(n.Success),d=r(n.Error),s=o(()=>(e.modelValue*100).toFixed(0)),a=o(()=>e.modelValue?100/e.modelValue:0),_=o(()=>e.startColor??d.base),F=o(()=>e.endColor??u.base);return{style:o(()=>({"--progress-bar-background-color":l.dark,"--progress-bar-gradient-start-color":_.value,"--progress-bar-gradient-end-color":F.value,"--progress-bar-gradient-width":`min(100%, ${s.value}%)`,"--progress-bar-total-relative-width":`${a.value}%`})),fixedRate:s}}}),$=p("div",{class:"fs-progress-bar-gradient"},[p("div")],-1);function k(e,r,l,u,d,s){const a=v("FSText");return c(),i(C,{align:"center-center",style:b(e.style)},{default:m(()=>[$,e.$props.showValue?(c(),i(a,{key:0,font:"text-button"},{default:m(()=>[w(x(e.fixedRate)+"% ",1)]),_:1})):B("",!0)]),_:1},8,["style"])}const h=T(S,[["render",k]]);S.__docgenInfo={displayName:"FSProgressBar",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},required:!0},{name:"startColor",type:{name:"string"},required:!1},{name:"endColor",type:{name:"string"},required:!1},{name:"showValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSProgressBar.vue"]};const j={title:"Foundation/Shared/ProgressBar",component:h,tags:["autodocs"],argTypes:{}},t={args:{modelValue:.7,showValue:!0},render:(e,{argTypes:r})=>({components:{FSProgressBar:h},setup(){return{args:e}},template:`
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
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,j as default};
