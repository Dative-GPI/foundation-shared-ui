import{a as x,b as T}from"./properties-Qw-O9fbT.js";import{F as y}from"./FSMenu-Dpr7CvAm.js";import{r as B,V as A,j as N,ac as t,B as c,Y as s,P as k,X as m,p as a,m as z,o as P,a1 as W,G as _,u as E}from"./vue.esm-bundler-DR0_aU9U.js";import{_ as v}from"./FSRow-C8VtPvPz.js";import{F as V}from"./FSCard--XyliQO3.js";import{F as I}from"./FSText-CUmuxASa.js";import{F as u}from"./FSButton-CX1uVweX.js";import{a as p,u as D}from"./useColors-CvhpHTRO.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as q}from"./VMenu-CkdLE1rB.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./VProgressCircular-CZaehD4X.js";import"./color-RD9Ud5Y3.js";import"./theme-Dfllckn6.js";import"./useRender-BLRtLddt.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./useSlots-p1mkRhuZ.js";import"./FSSpan-9E7WYB2n.js";import"./FSIcon-CBwOL1p5.js";import"./VIcon-e3y7Ok8e.js";import"./icons-CT9uuJgl.js";import"./FSCol-B2uM4vFw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VOverlay-BwyinDfp.js";import"./proxiedModel-DoNoMWaC.js";import"./easing--CnlGZ0M.js";import"./anchor-CT7OU_gq.js";import"./dimensions-DYTrXD1P.js";import"./display-B8Tm0OQZ.js";import"./lazy-DY4Wto-x.js";import"./locale-yWiW8Thx.js";import"./router-CJAgOfLI.js";import"./scopeId-bhuUTgv7.js";import"./transition-CedxoFs4.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./dialog-transition-BGzvJBOV.js";const b=B({name:"FSInformationsMenu",components:{FSMenu:y,FSCard:V,FSRow:v,FSText:I,FSButton:u},props:{content:{type:String,required:!1,default:null},location:{type:String,default:"top"},width:{type:[Array,String,Number],default:null},maxWidth:{type:[Array,String,Number],default:null},padding:{type:[Array,String,Number],default:"16px 8px"},iconSize:{type:String,default:"18px"},iconColor:{type:String,default:p.Primary},showCloseButton:{type:Boolean,default:!0},lineClamp:{type:Number,default:4}},emits:["update:modelValue"],setup(){const e=A(!1),{getColors:n}=D(),d=n(p.Light);return{ColorEnum:p,modelValue:e,lightColors:d}}});function O(e,n,d,j,G,L){const w=s("FSText"),M=s("FSCard"),$=s("FSMenu");return k(),N($,c({location:e.$props.location,closeOnContentClick:!1,minWidth:"0",modelValue:e.modelValue,"onUpdate:modelValue":n[1]||(n[1]=o=>e.modelValue=o)},e.$attrs),{activator:t(({props:o})=>[m(e.$slots,"activator",_(E(o)),()=>[a(u,c(o,{color:e.$props.iconColor,iconSize:e.$props.iconSize,variant:"icon",icon:"mdi-information-outline"}),null,16,["color","iconSize"])])]),default:t(()=>[m(e.$slots,"menuContent",{},()=>[a(M,{maxWidth:e.$props.maxWidth,width:e.$props.width,padding:e.$props.padding,elevation:!0,align:"center"},z({default:t(()=>[m(e.$slots,"cardContent",{},()=>[a(v,{align:"center-center"},{default:t(()=>[a(w,{font:"text-body",lineClamp:e.$props.lineClamp},{default:t(()=>[P(W(e.$props.content),1)]),_:1},8,["lineClamp"])]),_:1})])]),_:2},[e.$props.showCloseButton?{name:"top-right",fn:t(()=>[a(u,{variant:"icon",icon:"mdi-close",iconSize:"18px",color:e.lightColors.dark,onClick:n[0]||(n[0]=o=>e.modelValue=!1)},null,8,["color"])]),key:"0"}:void 0]),1032,["maxWidth","width","padding"])])]),_:3},16,["location","modelValue"])}const r=R(b,[["render",O]]);b.__docgenInfo={displayName:"FSInformationsMenu",exportName:"default",description:"",tags:{},props:[{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:'"top"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:"null"}},{name:"maxWidth",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:"null"}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:'"16px 8px"'}},{name:"iconSize",type:{name:"string"},defaultValue:{func:!1,value:'"18px"'}},{name:"iconColor",type:{name:"ColorBase"},defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"showCloseButton",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"lineClamp",type:{name:"number"},defaultValue:{func:!1,value:"4"}}],events:[{name:"update:modelValue"}],slots:[{name:"activator",scoped:!0,bindings:[]},{name:"menuContent"},{name:"cardContent"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSInformationsMenu.vue"]};const Pe={title:"Foundation/Shared/Menu/InformationsMenu",component:r,tags:["autodocs"],argTypes:{...T([y,q],r),...x(r)}},l={render:e=>({components:{FSInformationsMenu:r},setup(){return{args:e}},template:`
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
    `}),args:{content:"I am an helpful text content. Allowed through 4 lines."}};var f,g,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
