import{d as W,E as n,H as t,L as s,M as d,k as p,N as m,O as c,K as y}from"./vue.esm-bundler-D_gXonxt.js";import{F as _}from"./FSCard-Cxfe3-O9.js";import{F as T}from"./FSCol-C3EJfcJX.js";import{F as b}from"./FSIcon-B9MXbR5l.js";import{F as U}from"./FSText-DL_5kFi7.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-cHWWqhhs.js";import"./css-Bznx04uW.js";import"./useBreakpoints-BWz07CZT.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./VProgressCircular-BomUTxjq.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./VIcon-gCapjdof.js";import"./icons-DiQlgRdj.js";import"./useSlots-CdBAzqCX.js";const C=W({name:"FSWidgetTemplateCardUI",components:{FSCard:_,FSCol:T,FSIcon:b,FSText:U},props:{icon:{type:String,required:!1,default:"mdi-chart-bar"},label:{type:String,required:!0}}});function $(e,k,q,V,D,L){const w=s("FSText"),I=s("FSCard");return d(),n(I,{height:"100px",width:"100%"},{default:t(()=>[p(T,{align:"center-center"},{default:t(()=>[e.icon?(d(),n(b,{key:0,size:"32px"},{default:t(()=>[m(c(e.$props.icon),1)]),_:1})):y("",!0),p(w,{font:"text-overline"},{default:t(()=>[m(c(e.$props.label),1)]),_:1})]),_:1})]),_:1})}const i=N(C,[["render",$]]);C.__docgenInfo={displayName:"FSWidgetTemplateCardUI",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-chart-bar"'}},{name:"label",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSWidgetTemplateCardUI.vue"]};const se={title:"Foundation/Shared/WidgetTemplateCard",component:i,tags:["autodocs"],argTypes:{icon:{control:"text",description:"The icon to display in the widget card"},label:{control:"text",description:"The text label to display in the widget card"}},args:{icon:"mdi-chart-bar",label:"Widget Template"}},r={args:{icon:"mdi-chart-bar",label:"Statistics"},render:e=>({components:{FSWidgetTemplateCardUI:i},setup(){return{args:e}},template:`<div style="width: 300px; height: 200px">
      <FSWidgetTemplateCardUI v-bind="args" />
    </div>`})},a={args:{icon:void 0,label:"No Icon Widget"},render:e=>({components:{FSWidgetTemplateCardUI:i},setup(){return{args:e}},template:`<div style="width: 300px; height: 200px">
      <FSWidgetTemplateCardUI v-bind="args" />
    </div>`})},o={args:{icon:"mdi-information",label:"This is a widget with a very long description text to show how it handles overflow"},render:e=>({components:{FSWidgetTemplateCardUI:i},setup(){return{args:e}},template:`<div style="width: 300px; height: 200px">
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
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,f,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var x,v,F;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(F=(v=o.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const de=["Default","WithoutIcon","LongText"];export{r as Default,o as LongText,a as WithoutIcon,de as __namedExportsOrder,se as default};
