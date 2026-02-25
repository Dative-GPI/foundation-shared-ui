import{a as x,b as T}from"./properties-Qw-O9fbT.js";import{F as y}from"./FSMenu-mE5omh8N.js";import{d as B,e as A,B as N,D as t,m as f,I as s,J as k,P as m,q as a,C as z,K as P,L as W,Q as _,R as D}from"./vue.esm-bundler-D5n7z5qz.js";import{_ as v}from"./FSRow-DIk8KFbG.js";import{F as I}from"./FSCard-DENSLTM_.js";import{F as V}from"./FSText-015IEZHy.js";import{F as u}from"./FSButton-M9GMz66l.js";import{C as p,u as E}from"./useColors-COEXNh00.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as q}from"./VMenu-DOme5rNf.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./theme-BcqfMidt.js";import"./useRender-Dce1Ng4u.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./useSlots-CoecqEnp.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";import"./FSCol-D_lbFmZy.js";import"./FSSpan-BN7wkmby.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VOverlay-BApTxsTF.js";import"./proxiedModel-Cv3qT1cZ.js";import"./easing-DY7PVvcf.js";import"./anchor-tlySGI4g.js";import"./dimensions-D_nx6Jbk.js";import"./display-DvHDH61C.js";import"./lazy-Bqido2cx.js";import"./locale-n4v42L7l.js";import"./router-R_WRJyUs.js";import"./scopeId-DI6aT8IG.js";import"./transition-gfLL8RoD.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./dialog-transition-CBLjbvr6.js";const b=B({name:"FSInformationsMenu",components:{FSMenu:y,FSCard:I,FSRow:v,FSText:V,FSButton:u},props:{content:{type:String,required:!1,default:null},location:{type:String,default:"top"},width:{type:[Array,String,Number],default:null},maxWidth:{type:[Array,String,Number],default:null},padding:{type:[Array,String,Number],default:"16px 8px"},iconSize:{type:String,default:"18px"},iconColor:{type:String,default:p.Primary},showCloseButton:{type:Boolean,default:!0},lineClamp:{type:Number,default:4}},emits:["update:modelValue"],setup(){const e=A(!1),{getColors:n}=E(),d=n(p.Light);return{ColorEnum:p,modelValue:e,lightColors:d}}});function L(e,n,d,O,J,K){const w=s("FSText"),M=s("FSCard"),$=s("FSMenu");return k(),N($,f({location:e.$props.location,closeOnContentClick:!1,minWidth:"0",modelValue:e.modelValue,"onUpdate:modelValue":n[1]||(n[1]=o=>e.modelValue=o)},e.$attrs),{activator:t(({props:o})=>[m(e.$slots,"activator",_(D(o)),()=>[a(u,f(o,{color:e.$props.iconColor,iconSize:e.$props.iconSize,variant:"icon",icon:"mdi-information-outline"}),null,16,["color","iconSize"])])]),default:t(()=>[m(e.$slots,"menuContent",{},()=>[a(M,{maxWidth:e.$props.maxWidth,width:e.$props.width,padding:e.$props.padding,elevation:!0,align:"center"},z({default:t(()=>[m(e.$slots,"cardContent",{},()=>[a(v,{align:"center-center"},{default:t(()=>[a(w,{font:"text-body",lineClamp:e.$props.lineClamp},{default:t(()=>[P(W(e.$props.content),1)]),_:1},8,["lineClamp"])]),_:1})])]),_:2},[e.$props.showCloseButton?{name:"top-right",fn:t(()=>[a(u,{variant:"icon",icon:"mdi-close",iconSize:"18px",color:e.lightColors.dark,onClick:n[0]||(n[0]=o=>e.modelValue=!1)},null,8,["color"])]),key:"0"}:void 0]),1032,["maxWidth","width","padding"])])]),_:3},16,["location","modelValue"])}const r=R(b,[["render",L]]);b.__docgenInfo={displayName:"FSInformationsMenu",exportName:"default",description:"",tags:{},props:[{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:'"top"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:"null"}},{name:"maxWidth",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:"null"}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:'"16px 8px"'}},{name:"iconSize",type:{name:"string"},defaultValue:{func:!1,value:'"18px"'}},{name:"iconColor",type:{name:"ColorBase"},defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"showCloseButton",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"lineClamp",type:{name:"number"},defaultValue:{func:!1,value:"4"}}],events:[{name:"update:modelValue"}],slots:[{name:"activator",scoped:!0,bindings:[]},{name:"menuContent"},{name:"cardContent"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSInformationsMenu.vue"]};const ze={title:"Foundation/Shared/Menu/InformationsMenu",component:r,tags:["autodocs"],argTypes:{...T([y,q],r),...x(r)}},l={render:e=>({components:{FSInformationsMenu:r},setup(){return{args:e}},template:`
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
}`,...(F=(h=i.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};const Pe=["Default","InCardInformationsMenu"];export{l as Default,i as InCardInformationsMenu,Pe as __namedExportsOrder,ze as default};
