import{d as W,B as i,E as t,I as s,J as d,k as p,H as y,A as m,K as c}from"./vue.esm-bundler-CC_jVOJ5.js";import{F as _}from"./FSCard-twwkVLSp.js";import{F as T}from"./FSCol-DVEaUPKl.js";import{F as b}from"./FSIcon-CeLDRxMK.js";import{F as U}from"./FSText-B2RNQvtL.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CjY3icuR.js";import"./css-DTGEi_Ca.js";import"./useBreakpoints-BMcJFLA8.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./VIcon-BOLLMMm0.js";import"./color-BM2dSUAO.js";import"./useSlots-C8jkAuOW.js";const C=W({name:"FSWidgetTemplateCardUI",components:{FSCard:_,FSCol:T,FSIcon:b,FSText:U},props:{icon:{type:String,required:!1,default:"mdi-chart-bar"},label:{type:String,required:!0}}});function $(e,k,q,V,B,D){const w=s("FSText"),I=s("FSCard");return d(),i(I,{height:"100px",width:"100%"},{default:t(()=>[p(T,{align:"center-center"},{default:t(()=>[e.icon?(d(),i(b,{key:0,size:"32px"},{default:t(()=>[m(c(e.$props.icon),1)]),_:1})):y("",!0),p(w,{font:"text-overline"},{default:t(()=>[m(c(e.$props.label),1)]),_:1})]),_:1})]),_:1})}const o=N(C,[["render",$]]);C.__docgenInfo={displayName:"FSWidgetTemplateCardUI",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-chart-bar"'}},{name:"label",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSWidgetTemplateCardUI.vue"]};const Z={title:"Foundation/Shared/WidgetTemplateCard",component:o,tags:["autodocs"],argTypes:{icon:{control:"text",description:"The icon to display in the widget card"},label:{control:"text",description:"The text label to display in the widget card"}},args:{icon:"mdi-chart-bar",label:"Widget Template"}},r={args:{icon:"mdi-chart-bar",label:"Statistics"},render:e=>({components:{FSWidgetTemplateCardUI:o},setup(){return{args:e}},template:`<div style="width: 300px; height: 200px">
      <FSWidgetTemplateCardUI v-bind="args" />
    </div>`})},n={args:{icon:void 0,label:"No Icon Widget"},render:e=>({components:{FSWidgetTemplateCardUI:o},setup(){return{args:e}},template:`<div style="width: 300px; height: 200px">
      <FSWidgetTemplateCardUI v-bind="args" />
    </div>`})},a={args:{icon:"mdi-information",label:"This is a widget with a very long description text to show how it handles overflow"},render:e=>({components:{FSWidgetTemplateCardUI:o},setup(){return{args:e}},template:`<div style="width: 300px; height: 200px">
      <FSWidgetTemplateCardUI v-bind="args" />
    </div>`})};var l,g,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    icon: 'mdi-chart-bar',
    label: 'Statistics'
  },
  render: args => ({
    components: {
      FSWidgetTemplateCardUI
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="width: 300px; height: 200px">
      <FSWidgetTemplateCardUI v-bind="args" />
    </div>\`
  })
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,f,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    icon: undefined,
    label: 'No Icon Widget'
  },
  render: args => ({
    components: {
      FSWidgetTemplateCardUI
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="width: 300px; height: 200px">
      <FSWidgetTemplateCardUI v-bind="args" />
    </div>\`
  })
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var x,v,F;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    icon: 'mdi-information',
    label: 'This is a widget with a very long description text to show how it handles overflow'
  },
  render: args => ({
    components: {
      FSWidgetTemplateCardUI
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="width: 300px; height: 200px">
      <FSWidgetTemplateCardUI v-bind="args" />
    </div>\`
  })
}`,...(F=(v=a.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const ee=["Default","WithoutIcon","LongText"];export{r as Default,a as LongText,n as WithoutIcon,ee as __namedExportsOrder,Z as default};
