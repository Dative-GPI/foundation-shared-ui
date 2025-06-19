import{a as M,b as T}from"./properties-Qw-O9fbT.js";import{F as y}from"./FSMenu-Rp1ILhng.js";import{d as A,b as B,B as z,E as t,m as f,I as s,J as N,O as m,z as a,D as k,A as P,K as W,P as E,Q as _}from"./vue.esm-bundler-CqZ6aK3I.js";import{_ as v}from"./FSRow-udQVJR1p.js";import{F as I}from"./FSCard-CoFTtRNJ.js";import{F as V}from"./FSText-BvUMyUbP.js";import{F as u}from"./FSButton-CMFttM_1.js";import{C as p,u as D}from"./useColors-CaMUbg8a.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as R}from"./VMenu-CtOYTmiA.js";import"./VMenu-C6lRy5En.js";import"./VOverlay-CHXjpHsK.js";import"./forwardRefs-DWGaNmQL.js";import"./color-6mal3hP4.js";import"./theme-CCooKRqg.js";import"./proxiedModel-BirLikdP.js";import"./anchor-DiyvyHyx.js";import"./dimensions-CuS7VcMO.js";import"./display-Cs3Y1ygD.js";import"./scopeId-BQSHBqq_.js";import"./locale-BJmdjC_5.js";import"./router-C0dK7NvB.js";import"./transition-C13qRIR1.js";import"./VDefaultsProvider-oq6rnkoo.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./FSCol-DIPgj7wU.js";import"./useSlots-BgbXyH5p.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-Bc_GnmK1.js";import"./VProgressCircular-DDVR-EZI.js";import"./resizeObserver-C7qOORSR.js";import"./VIcon-beNtbbqt.js";import"./FSSpan-B7HDTlg9.js";import"./FSIcon-Dy1KglKQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./proxiedModel-J4qoWggV.js";import"./theme-DDYe6qij.js";import"./color-9RcjjqqD.js";import"./display-DQd-Mj_g.js";import"./lazy-B941nOD5.js";const b=A({name:"FSInformationsMenu",components:{FSMenu:y,FSCard:I,FSRow:v,FSText:V,FSButton:u},props:{content:{type:String,required:!1,default:null},location:{type:String,default:"top"},width:{type:[Array,String,Number],default:null},maxWidth:{type:[Array,String,Number],default:null},padding:{type:[Array,String,Number],default:"16px 8px"},iconSize:{type:String,default:"18px"},iconColor:{type:String,default:p.Primary},showCloseButton:{type:Boolean,default:!0},lineClamp:{type:Number,default:4}},emits:["update:modelValue"],setup(){const e=B(!1),{getColors:n}=D(),d=n(p.Light);return{ColorEnum:p,modelValue:e,lightColors:d}}});function q(e,n,d,J,K,L){const w=s("FSText"),$=s("FSCard"),x=s("FSMenu");return N(),z(x,f({location:e.$props.location,closeOnContentClick:!1,minWidth:"0",modelValue:e.modelValue,"onUpdate:modelValue":n[1]||(n[1]=o=>e.modelValue=o)},e.$attrs),{activator:t(({props:o})=>[m(e.$slots,"activator",E(_(o)),()=>[a(u,f(o,{color:e.$props.iconColor,iconSize:e.$props.iconSize,variant:"icon",icon:"mdi-information-outline"}),null,16,["color","iconSize"])])]),default:t(()=>[m(e.$slots,"menuContent",{},()=>[a($,{maxWidth:e.$props.maxWidth,width:e.$props.width,padding:e.$props.padding,elevation:!0,align:"center"},k({default:t(()=>[m(e.$slots,"cardContent",{},()=>[a(v,{align:"center-center"},{default:t(()=>[a(w,{font:"text-body",lineClamp:e.$props.lineClamp},{default:t(()=>[P(W(e.$props.content),1)]),_:1},8,["lineClamp"])]),_:1})])]),_:2},[e.$props.showCloseButton?{name:"top-right",fn:t(()=>[a(u,{variant:"icon",icon:"mdi-close",iconSize:"18px",color:e.lightColors.dark,onClick:n[0]||(n[0]=o=>e.modelValue=!1)},null,8,["color"])]),key:"0"}:void 0]),1032,["maxWidth","width","padding"])])]),_:3},16,["location","modelValue"])}const r=O(b,[["render",q]]);b.__docgenInfo={displayName:"FSInformationsMenu",exportName:"default",description:"",tags:{},props:[{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:'"top"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:"null"}},{name:"maxWidth",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:"null"}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:'"16px 8px"'}},{name:"iconSize",type:{name:"string"},defaultValue:{func:!1,value:'"18px"'}},{name:"iconColor",type:{name:"ColorBase"},defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"showCloseButton",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"lineClamp",type:{name:"number"},defaultValue:{func:!1,value:"4"}}],events:[{name:"update:modelValue"}],slots:[{name:"activator",scoped:!0,bindings:[]},{name:"menuContent"},{name:"cardContent"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSInformationsMenu.vue"]};const Pe={title:"Foundation/Shared/InformationsMenu",component:r,tags:["autodocs"],argTypes:{...T([y,R],r),...M(r)}},l={render:e=>({components:{FSInformationsMenu:r},setup(){return{args:e}},template:`
    <FSInformationsMenu
      v-bind="args"
    />`}),args:{content:"I am an helpful text content. Allowed through 4 lines."}},i={render:e=>({components:{FSInformationsMenu:r,FSText:V,FSCard:I},setup(){return{args:e}},template:`
    <FSCard
      width="120"
      padding="8"
    >
      <FSText
        :lineClamp="2"
      >
        I am a card with a really helpful text content.
      </FSText>
      <template #top-right>
        <FSInformationsMenu
          v-bind="args"
        />
      </template>
    </FSCard>
    `}),args:{content:"I am an helpful text content. Allowed through 4 lines."}};var c,g,S;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSInformationsMenu
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSInformationsMenu
      v-bind="args"
    />\`
  }),
  args: {
    content: "I am an helpful text content. Allowed through 4 lines."
  }
}`,...(S=(g=l.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var h,C,F;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSInformationsMenu,
      FSText,
      FSCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSCard
      width="120"
      padding="8"
    >
      <FSText
        :lineClamp="2"
      >
        I am a card with a really helpful text content.
      </FSText>
      <template #top-right>
        <FSInformationsMenu
          v-bind="args"
        />
      </template>
    </FSCard>
    \`
  }),
  args: {
    content: "I am an helpful text content. Allowed through 4 lines."
  }
}`,...(F=(C=i.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const We=["Default","InCardInformationsMenu"];export{l as Default,i as InCardInformationsMenu,We as __namedExportsOrder,Pe as default};
