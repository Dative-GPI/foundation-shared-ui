import{a as x,b as W}from"./properties-Qw-O9fbT.js";import{F as _}from"./FSMenu-Dpr7CvAm.js";import{r as E,V as T,j as d,ac as n,B as u,Y as c,P as i,p as r,X as g,l as L,F as R,W as q,k as j,o as G,a1 as H,G as U,u as X}from"./vue.esm-bundler-DR0_aU9U.js";import{_ as D}from"./FSRow-C8VtPvPz.js";import{F as w}from"./FSCol-B2uM4vFw.js";import{F as I}from"./FSIcon-CBwOL1p5.js";import{F as Y,C as J}from"./FSCard--XyliQO3.js";import{F as K}from"./FSText-CUmuxASa.js";import{F as N}from"./FSButton-CX1uVweX.js";import{a as f,u as Q}from"./useColors-CvhpHTRO.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ee}from"./FSFadeOut-DENuqwmT.js";import{V as te}from"./VMenu-CkdLE1rB.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./VIcon-e3y7Ok8e.js";import"./color-RD9Ud5Y3.js";import"./theme-Dfllckn6.js";import"./useRender-BLRtLddt.js";import"./icons-CT9uuJgl.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./VProgressCircular-CZaehD4X.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./useSlots-p1mkRhuZ.js";import"./FSSpan-9E7WYB2n.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./uuid-DTaye2KM.js";import"./VOverlay-BwyinDfp.js";import"./proxiedModel-DoNoMWaC.js";import"./easing--CnlGZ0M.js";import"./anchor-CT7OU_gq.js";import"./dimensions-DYTrXD1P.js";import"./display-B8Tm0OQZ.js";import"./lazy-DY4Wto-x.js";import"./locale-yWiW8Thx.js";import"./router-CJAgOfLI.js";import"./scopeId-bhuUTgv7.js";import"./transition-CedxoFs4.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./dialog-transition-BGzvJBOV.js";const A=E({name:"FSInformationsMenu",components:{FSMenu:_,FSCard:Y,FSRow:D,FSText:K,FSButton:N,FSCol:w,FSIcon:I},props:{items:{type:Array,default:()=>[]},location:{type:String,default:"bottom"},width:{type:[Array,String,Number],default:null},maxWidth:{type:[Array,String,Number],default:"90dvw"},icon:{type:String,default:"mdi-dots-horizontal"},iconSize:{type:String,default:"18px"},buttonColor:{type:String,default:f.Light},buttonVariant:{type:String,required:!1,default:"icon"}},emits:["update:modelValue"],setup(){const e=T(!1),{getColors:o}=Q(),b=o(f.Light);return{ColorEnum:f,modelValue:e,lightColors:b,CardVariants:J,onClickItem:p=>{p.onClick(),p.closeOnContentClick!==!1&&(e.value=!1)}}}});function ne(e,o,b,z,p,oe){const B=c("FSText"),C=c("FSCard"),P=c("FSMenu");return i(),d(P,u({location:e.$props.location,closeOnContentClick:!0,contained:!1,minWidth:"0",modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.modelValue=t)},e.$attrs),{activator:n(({props:t})=>[g(e.$slots,"activator",U(X(t)),()=>[r(N,u(t,{icon:e.$props.icon,iconSize:e.$props.iconSize,color:e.$props.buttonColor,variant:e.$props.buttonVariant}),null,16,["icon","iconSize","color","variant"])])]),default:n(()=>[r(C,{maxWidth:e.$props.maxWidth,width:e.$props.width,padding:"2px",border:!1,elevation:!0,align:"center-center"},{default:n(()=>[g(e.$slots,"content",{},()=>[r(w,{gap:"0px"},{default:n(()=>[r(ee,{scrollOutside:!1,maxHeight:"80dvh"},{default:n(()=>[(i(!0),L(R,null,q(e.$props.items,(t,S)=>(i(),d(C,{width:"100%",padding:"8px",height:"40px",key:S,color:e.ColorEnum.Light,border:!1,onClick:re=>e.onClickItem(t)},{default:n(()=>[g(e.$slots,"item",u({ref_for:!0},{item:t,index:S}),()=>[r(D,{align:"center-left"},{default:n(()=>[t.icon?(i(),d(I,{key:0,icon:t.icon},null,8,["icon"])):j("",!0),r(B,{font:"text-body"},{default:n(()=>[G(H(t.label),1)]),_:2},1024)]),_:2},1024)])]),_:2},1032,["color","onClick"]))),128))]),_:3})]),_:3})])]),_:3},8,["maxWidth","width"])]),_:3},16,["location","modelValue"])}const a=Z(A,[["render",ne]]);A.__docgenInfo={displayName:"FSInformationsMenu",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"{label: string, icon?: string, onClick: () => void, closeOnContentClick?: boolean}[]"},defaultValue:{func:!0,value:"() => []"}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:'"bottom"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:"null"}},{name:"maxWidth",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:'"90dvw"'}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"mdi-dots-horizontal"'}},{name:"iconSize",type:{name:"string"},defaultValue:{func:!1,value:'"18px"'}},{name:"buttonColor",type:{name:"ColorBase"},defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"icon"'}}],events:[{name:"update:modelValue"}],slots:[{name:"activator",scoped:!0,bindings:[]},{name:"content"},{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSOptionsMenu.vue"]};const Je={title:"Foundation/Shared/Menu/OptionsMenu",component:a,tags:["autodocs"],argTypes:{...W([_,te],a),...x(a)}},l={render:e=>({components:{FSOptionsMenu:a},setup(){return{args:e}},template:`
    <FSOptionsMenu
      v-bind="args"
    />`}),args:{items:[{label:"Display alert",icon:"mdi-alert",onClick:()=>alert("Alert triggered!")},{label:"Display notification",icon:"mdi-bell",onClick:()=>alert("Notification triggered!")},{label:"Display print",icon:"mdi-printer",onClick:()=>alert("Print triggered!")}]}},s={render:e=>({components:{FSOptionsMenu:a},setup(){return{args:e}},template:`
    <FSOptionsMenu
      v-bind="args"
    />`}),args:{buttonVariant:"standard",icon:"mdi-dots-vertical",items:[{label:"Display alert",icon:"mdi-alert",onClick:()=>alert("Alert triggered!")},{label:"Display notification with a longer longer name and longer and longer and longer and longer",onClick:()=>alert("Notification triggered!")},{label:"Display print",onClick:()=>alert("Print triggered!")}]}},m={render:e=>({components:{FSOptionsMenu:a},setup(){return{args:e}},template:`
    <FSOptionsMenu
      v-bind="args"
    />`}),args:{buttonVariant:"standard",icon:"mdi-dots-vertical",items:Array.from({length:80},(e,o)=>({label:`Item ${o+1}`,icon:"mdi-check",onClick:()=>alert(`Item ${o+1} clicked!`),closeOnContentClick:!1}))}};var F,y,k;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSOptionsMenu
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSOptionsMenu
      v-bind="args"
    />\`
  }),
  args: {
    items: [{
      label: 'Display alert',
      icon: 'mdi-alert',
      onClick: () => alert('Alert triggered!')
    }, {
      label: 'Display notification',
      icon: 'mdi-bell',
      onClick: () => alert('Notification triggered!')
    }, {
      label: 'Display print',
      icon: 'mdi-printer',
      onClick: () => alert('Print triggered!')
    }]
  }
}`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var h,v,V;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSOptionsMenu
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSOptionsMenu
      v-bind="args"
    />\`
  }),
  args: {
    buttonVariant: 'standard',
    icon: "mdi-dots-vertical",
    items: [{
      label: 'Display alert',
      icon: 'mdi-alert',
      onClick: () => alert('Alert triggered!')
    }, {
      label: 'Display notification with a longer longer name and longer and longer and longer and longer',
      onClick: () => alert('Notification triggered!')
    }, {
      label: 'Display print',
      onClick: () => alert('Print triggered!')
    }]
  }
}`,...(V=(v=s.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var O,$,M;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSOptionsMenu
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSOptionsMenu
      v-bind="args"
    />\`
  }),
  args: {
    buttonVariant: 'standard',
    icon: "mdi-dots-vertical",
    items: Array.from({
      length: 80
    }, (_, i) => ({
      label: \`Item \${i + 1}\`,
      icon: 'mdi-check',
      onClick: () => alert(\`Item \${i + 1} clicked!\`),
      closeOnContentClick: false
    }))
  }
}`,...(M=($=m.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};const Ke=["Default","Button","ItemsFadeOut"];export{s as Button,l as Default,m as ItemsFadeOut,Ke as __namedExportsOrder,Je as default};
