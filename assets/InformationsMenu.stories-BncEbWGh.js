import{a as $,b as T}from"./properties-DwZ_iDct.js";import{F as I}from"./FSMenu-Da0q64tf.js";import{d as z,b as _,z as k,C as t,m as d,G as l,H as A,L as m,P as r,I as N,J as P,M as B,N as D}from"./vue.esm-bundler-CM4TIH-Q.js";import{_ as v}from"./FSRow-oDTnIAxc.js";import{F as y}from"./FSCard-BedrH_cK.js";import{F as M}from"./FSText-yCmXS8Mf.js";import{F as p}from"./FSButton-DatX9tV0.js";import{u as E,C as c}from"./useColors-CjA2D2xA.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as q}from"./VMenu-BXLqflw9.js";import"./VMenu-sKuqJ8jm.js";import"./VOverlay-DtEUynQC.js";import"./forwardRefs-DWGaNmQL.js";import"./color-Bo6l13w9.js";import"./theme-d3-Spt7o.js";import"./proxiedModel-DKx29MO-.js";import"./anchor-DCFmATqq.js";import"./dimensions-DW-k5kP_.js";import"./display-CUGteI3_.js";import"./scopeId-COl1Iexy.js";import"./locale-BqFH1fBg.js";import"./router-BXF-7Xxx.js";import"./transition-DMoMR0kB.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./css-BgLnvP7H.js";import"./useBreakpoints-C6JPO-aN.js";import"./FSCol-BR6T1l1C.js";import"./useSlots-c6yg-hhg.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-CXLm7rHe.js";import"./VProgressCircular-C-4f-PXJ.js";import"./resizeObserver-Cb3oz2nO.js";import"./VIcon-GfKFLOEw.js";import"./FSSpan-y1Ex52-c.js";import"./FSIcon-LkE5-ra7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./display-3DMk9Rra.js";import"./theme-DXeyMPXT.js";import"./color-CNG8pFwQ.js";const V=z({name:"FSInformationsMenu",components:{FSMenu:I,FSCard:y,FSRow:v,FSText:M,FSButton:p},props:{content:{type:String,required:!1,default:null},location:{type:String,default:"top"},width:{type:[Array,String,Number],default:182},padding:{type:[Array,String,Number],default:"16px 8px"},iconSize:{type:String,default:"18px"}},emits:["update:modelValue"],setup(){const n=_(!1),{getColors:e}=E(),u=e(c.Light);return{ColorEnum:c,modelValue:n,lightColors:u}}});function L(n,e,u,O,G,H){const w=l("FSText"),x=l("FSCard"),b=l("FSMenu");return A(),k(b,d({location:n.$props.location,closeOnContentClick:!1,minWidth:"0",modelValue:n.modelValue,"onUpdate:modelValue":e[1]||(e[1]=o=>n.modelValue=o)},n.$attrs),{activator:t(({props:o})=>[m(n.$slots,"activator",B(D(o)),()=>[r(p,d(o,{color:n.lightColors.dark,iconSize:n.$props.iconSize,variant:"icon",icon:"mdi-information-outline"}),null,16,["color","iconSize"])])]),default:t(()=>[m(n.$slots,"menuContent",{},()=>[r(x,{width:n.$props.width,padding:n.$props.padding,elevation:!0,align:"center"},{"top-right":t(()=>[r(p,{variant:"icon",icon:"mdi-close",iconSize:"18px",color:n.lightColors.dark,onClick:e[0]||(e[0]=o=>n.modelValue=!1)},null,8,["color"])]),default:t(()=>[m(n.$slots,"cardContent",{},()=>[r(v,{align:"center-center"},{default:t(()=>[r(w,{font:"text-overline",lineClamp:4},{default:t(()=>[N(P(n.$props.content),1)]),_:1})]),_:1})])]),_:3},8,["width","padding"])])]),_:3},16,["location","modelValue"])}const a=R(V,[["render",L]]);V.__docgenInfo={displayName:"FSInformationsMenu",exportName:"default",description:"",tags:{},props:[{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:'"top"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:"182"}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:'"16px 8px"'}},{name:"iconSize",type:{name:"string"},defaultValue:{func:!1,value:'"18px"'}}],events:[{name:"update:modelValue"}],slots:[{name:"activator",scoped:!0,bindings:[]},{name:"menuContent"},{name:"cardContent"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSInformationsMenu.vue"]};const An={title:"Foundation/Shared/InformationsMenu",component:a,tags:["autodocs"],argTypes:{...T([I,q],a),...$(a)}},i={render:n=>({components:{FSInformationsMenu:a},setup(){return{args:n}},template:`
    <FSInformationsMenu
      v-bind="args"
    />`}),args:{content:"I am an helpful text content. Allowed through 4 lines."}},s={render:n=>({components:{FSInformationsMenu:a,FSText:M,FSCard:y},setup(){return{args:n}},template:`
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
    `}),args:{content:"I am an helpful text content. Allowed through 4 lines."}};var f,g,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(g=i.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var F,h,C;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const Nn=["Default","InCardInformationsMenu"];export{i as Default,s as InCardInformationsMenu,Nn as __namedExportsOrder,An as default};
