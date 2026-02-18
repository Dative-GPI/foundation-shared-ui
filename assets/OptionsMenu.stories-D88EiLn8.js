import{a as T,b as W}from"./properties-Qw-O9fbT.js";import{F as _}from"./FSMenu-7I4odqF7.js";import{d as E,e as L,B as c,D as t,m as u,I as i,J as l,q as r,P as g,G as R,F as q,U as H,H as U,K as G,L as J,Q as K,R as Q}from"./vue.esm-bundler-B9lxvfDw.js";import{_ as M}from"./FSRow-CFa9RNor.js";import{F as D}from"./FSCol-BwxAijHz.js";import{F as w}from"./FSIcon-kCffLiJ2.js";import{F as j}from"./FSCard-BwbWypiX.js";import{F as X}from"./FSText-DZJhh1AD.js";import{F as I}from"./FSButton-CxA5c6KR.js";import{F as Y}from"./FSClickable-zRgeWTkl.js";import{C as f,u as Z}from"./useColors-B5aYgogF.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ne}from"./FSFadeOut-DwiC6ECo.js";import{V as te}from"./VMenu-etFegoZJ.js";import"./css-BHrR5cp2.js";import"./useBreakpoints-Dc84uxeD.js";import"./VIcon-DPcX_RaC.js";import"./color-CLtf7Qrc.js";import"./theme-Bz5xEpqh.js";import"./useRender-DM2jvMPN.js";import"./icons-B5bBvhw0.js";import"./useSlots-BioZKQqg.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSSpan-COYXSDbp.js";import"./VProgressCircular-DSOzHF7B.js";import"./resizeObserver-DjRdaT-k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./uuid-DTaye2KM.js";import"./VOverlay-DhmZjj8a.js";import"./easing-DY7PVvcf.js";import"./proxiedModel-DRvKxps3.js";import"./anchor-ByUPiJZt.js";import"./dimensions-n1mPaUbN.js";import"./display-BzNfeHa8.js";import"./lazy-B_HJlRZe.js";import"./locale-C647X9dJ.js";import"./router-BlaQ2-ft.js";import"./scopeId-4Hx_BsCg.js";import"./transition-Dh_EAQcC.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-BurwYF19.js";const N=E({name:"FSInformationsMenu",components:{FSMenu:_,FSCard:j,FSRow:M,FSText:X,FSButton:I,FSCol:D,FSIcon:w,FSClickable:Y},props:{items:{type:Array,default:()=>[]},location:{type:String,default:"bottom"},width:{type:[Array,String,Number],default:null},maxWidth:{type:[Array,String,Number],default:"90dvw"},icon:{type:String,default:"mdi-dots-horizontal"},iconSize:{type:String,default:"18px"},buttonColor:{type:String,default:f.Light},buttonVariant:{type:String,required:!1,default:"icon"}},emits:["update:modelValue"],setup(){const e=L(!1),{getColors:o}=Z(),b=o(f.Light);return{ColorEnum:f,modelValue:e,lightColors:b,onClickItem:d=>{d.onClick(),d.closeOnContentClick!==!1&&(e.value=!1)}}}});function oe(e,o,b,A,d,re){const x=i("FSText"),z=i("FSClickable"),B=i("FSCard"),P=i("FSMenu");return l(),c(P,u({location:e.$props.location,closeOnContentClick:!0,contained:!1,minWidth:"0",modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=n=>e.modelValue=n)},e.$attrs),{activator:t(({props:n})=>[g(e.$slots,"activator",K(Q(n)),()=>[r(I,u(n,{icon:e.$props.icon,iconSize:e.$props.iconSize,color:e.$props.buttonColor,variant:e.$props.buttonVariant}),null,16,["icon","iconSize","color","variant"])])]),default:t(()=>[r(B,{maxWidth:e.$props.maxWidth,width:e.$props.width,padding:"2px",border:!1,elevation:!0,align:"center-center"},{default:t(()=>[g(e.$slots,"content",{},()=>[r(D,{gap:"0px"},{default:t(()=>[r(ne,{scrollOutside:!1,maxHeight:"80dvh"},{default:t(()=>[(l(!0),R(q,null,H(e.$props.items,(n,C)=>(l(),c(z,{width:"100%",padding:"8px",height:"40px",key:C,border:!1,onClick:ae=>e.onClickItem(n)},{default:t(()=>[g(e.$slots,"item",u({ref_for:!0},{item:n,index:C}),()=>[r(M,{align:"center-left"},{default:t(()=>[n.icon?(l(),c(w,{key:0,icon:n.icon},null,8,["icon"])):U("",!0),r(x,{font:"text-body"},{default:t(()=>[G(J(n.label),1)]),_:2},1024)]),_:2},1024)])]),_:2},1032,["onClick"]))),128))]),_:3})]),_:3})])]),_:3},8,["maxWidth","width"])]),_:3},16,["location","modelValue"])}const a=ee(N,[["render",oe]]);N.__docgenInfo={displayName:"FSInformationsMenu",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"{label: string, icon?: string, onClick: () => void, closeOnContentClick?: boolean}[]"},defaultValue:{func:!0,value:"() => []"}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:'"bottom"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:"null"}},{name:"maxWidth",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:'"90dvw"'}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"mdi-dots-horizontal"'}},{name:"iconSize",type:{name:"string"},defaultValue:{func:!1,value:'"18px"'}},{name:"buttonColor",type:{name:"ColorBase"},defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"icon"'}}],events:[{name:"update:modelValue"}],slots:[{name:"activator",scoped:!0,bindings:[]},{name:"content"},{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSOptionsMenu.vue"]};const Ke={title:"Foundation/Shared/Menu/OptionsMenu",component:a,tags:["autodocs"],argTypes:{...W([_,te],a),...T(a)}},s={render:e=>({components:{FSOptionsMenu:a},setup(){return{args:e}},template:`
    <FSOptionsMenu
      v-bind="args"
    />`}),args:{items:[{label:"Display alert",icon:"mdi-alert",onClick:()=>alert("Alert triggered!")},{label:"Display notification",icon:"mdi-bell",onClick:()=>alert("Notification triggered!")},{label:"Display print",icon:"mdi-printer",onClick:()=>alert("Print triggered!")}]}},m={render:e=>({components:{FSOptionsMenu:a},setup(){return{args:e}},template:`
    <FSOptionsMenu
      v-bind="args"
    />`}),args:{buttonVariant:"standard",icon:"mdi-dots-vertical",items:[{label:"Display alert",icon:"mdi-alert",onClick:()=>alert("Alert triggered!")},{label:"Display notification with a longer longer name and longer and longer and longer and longer",onClick:()=>alert("Notification triggered!")},{label:"Display print",onClick:()=>alert("Print triggered!")}]}},p={render:e=>({components:{FSOptionsMenu:a},setup(){return{args:e}},template:`
    <FSOptionsMenu
      v-bind="args"
    />`}),args:{buttonVariant:"standard",icon:"mdi-dots-vertical",items:Array.from({length:80},(e,o)=>({label:`Item ${o+1}`,icon:"mdi-check",onClick:()=>alert(`Item ${o+1} clicked!`),closeOnContentClick:!1}))}};var S,F,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(F=s.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};var k,v,h;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(h=(v=m.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var V,O,$;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...($=(O=p.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};const Qe=["Default","Button","ItemsFadeOut"];export{m as Button,s as Default,p as ItemsFadeOut,Qe as __namedExportsOrder,Ke as default};
