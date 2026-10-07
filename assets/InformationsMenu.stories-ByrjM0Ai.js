import{a as x,b as T}from"./properties-Qw-O9fbT.js";import{F as y}from"./FSMenu-BQ9x-9Vx.js";import{d as N,e as k,E as A,H as t,m as f,L as s,M as B,S as m,k as a,G as z,N as W,O as E,U as P,V as D}from"./vue.esm-bundler-NVdFPFZB.js";import{F as v}from"./FSRow-BTBqaZ3Z.js";import{F as V}from"./FSCard-X6BL7IDn.js";import{F as I}from"./FSText-DkgFU9ZB.js";import{F as u}from"./FSButton-C9qE_hma.js";import{C as p,u as O}from"./useColors-CPKx0SIo.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as L}from"./VMenu-DfiSs3vJ.js";import"./css-BA19cdxW.js";import"./useBreakpoints-Trboya0O.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./VProgressCircular-D014ccrC.js";import"./color-Cx3XlwVF.js";import"./theme-CHZNEzUD.js";import"./useRender-C5CA_XPC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./useSlots-DEXetpJf.js";import"./FSSpan-CffnRYnX.js";import"./FSIcon-D-iWmbKS.js";import"./VIcon-BPCLtKbp.js";import"./icons-AciKn6XY.js";import"./FSCol-ChYB2Oag.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VOverlay-flKIXg07.js";import"./proxiedModel-4bJ1saXA.js";import"./easing-DY7PVvcf.js";import"./anchor-C-rl7L3L.js";import"./dimensions-BuDdBtmf.js";import"./display-RdUuPsY9.js";import"./lazy-D5C5Y6_6.js";import"./locale-MGWjZjXD.js";import"./router-D2Xcou1T.js";import"./scopeId-CVBASNvj.js";import"./transition-Dqm8buww.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Y-HqWA1J.js";import"./VDefaultsProvider-Cane1ZR3.js";const b=N({name:"FSInformationsMenu",components:{FSMenu:y,FSCard:V,FSRow:v,FSText:I,FSButton:u},props:{content:{type:String,required:!1,default:null},location:{type:String,default:"top"},width:{type:[Array,String,Number],default:null},maxWidth:{type:[Array,String,Number],default:null},padding:{type:[Array,String,Number],default:"16px 8px"},iconSize:{type:String,default:"18px"},iconColor:{type:String,default:p.Primary},showCloseButton:{type:Boolean,default:!0},lineClamp:{type:Number,default:4}},emits:["update:modelValue"],setup(){const e=k(!1),{getColors:n}=O(),d=n(p.Light);return{ColorEnum:p,modelValue:e,lightColors:d}}});function R(e,n,d,U,_,G){const w=s("FSText"),M=s("FSCard"),$=s("FSMenu");return B(),A($,f({location:e.$props.location,closeOnContentClick:!1,minWidth:"0",modelValue:e.modelValue,"onUpdate:modelValue":n[1]||(n[1]=o=>e.modelValue=o)},e.$attrs),{activator:t(({props:o})=>[m(e.$slots,"activator",P(D(o)),()=>[a(u,f(o,{color:e.$props.iconColor,iconSize:e.$props.iconSize,variant:"icon",icon:"mdi-information-outline"}),null,16,["color","iconSize"])])]),default:t(()=>[m(e.$slots,"menuContent",{},()=>[a(M,{maxWidth:e.$props.maxWidth,width:e.$props.width,padding:e.$props.padding,elevation:!0,align:"center"},z({default:t(()=>[m(e.$slots,"cardContent",{},()=>[a(v,{align:"center-center"},{default:t(()=>[a(w,{font:"text-body",lineClamp:e.$props.lineClamp},{default:t(()=>[W(E(e.$props.content),1)]),_:1},8,["lineClamp"])]),_:1})])]),_:2},[e.$props.showCloseButton?{name:"top-right",fn:t(()=>[a(u,{variant:"icon",icon:"mdi-close",iconSize:"18px",color:e.lightColors.dark,onClick:n[0]||(n[0]=o=>e.modelValue=!1)},null,8,["color"])]),key:"0"}:void 0]),1032,["maxWidth","width","padding"])])]),_:3},16,["location","modelValue"])}const r=q(b,[["render",R]]);b.__docgenInfo={displayName:"FSInformationsMenu",exportName:"default",description:"",tags:{},props:[{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:'"top"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:"null"}},{name:"maxWidth",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:"null"}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:'"16px 8px"'}},{name:"iconSize",type:{name:"string"},defaultValue:{func:!1,value:'"18px"'}},{name:"iconColor",type:{name:"ColorBase"},defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"showCloseButton",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"lineClamp",type:{name:"number"},defaultValue:{func:!1,value:"4"}}],events:[{name:"update:modelValue"}],slots:[{name:"activator",scoped:!0,bindings:[]},{name:"menuContent"},{name:"cardContent"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSInformationsMenu.vue"]};const We={title:"Shared/Components/Menu/InformationsMenu",component:r,tags:["autodocs"],argTypes:{...T([y,L],r),...x(r)}},l={render:e=>({components:{FSInformationsMenu:r},setup(){return{args:e}},template:`
    <FSInformationsMenu
      v-bind="args"
    />`}),args:{content:"I am an helpful text content. Allowed through 4 lines."}},i={render:e=>({components:{FSInformationsMenu:r,FSText:I,FSCard:V},setup(){return{args:e}},template:`
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
}`,...(S=(g=l.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var C,h,F;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(h=i.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};const Ee=["Default","InCardInformationsMenu"];export{l as Default,i as InCardInformationsMenu,Ee as __namedExportsOrder,We as default};
