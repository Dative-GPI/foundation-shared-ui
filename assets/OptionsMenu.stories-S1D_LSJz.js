import{a as E,b as T}from"./properties-Qw-O9fbT.js";import{F as _}from"./FSMenu-0Xerd8-Y.js";import{d as W,b as L,B as c,E as t,m as u,I as i,J as l,k as r,O as g,C as R,F as q,S as H,H as J,A as K,K as Q,P as U,Q as j}from"./vue.esm-bundler-PONd4AmC.js";import{_ as M}from"./FSRow-C-b-hpWa.js";import{F as D}from"./FSCol-Bfhiyt6Y.js";import{F as w}from"./FSIcon-bsX1r_Ci.js";import{F as G}from"./FSCard-DYD9Tm3w.js";import{F as X}from"./FSText-C7hkL3As.js";import{F as I}from"./FSButton-CZKySWW0.js";import{F as Y}from"./FSClickable-CyhgWkHC.js";import{C as f,u as Z}from"./useColors-Dytl_X2F.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ne}from"./FSFadeOut-CtUd8oOA.js";import{V as te}from"./VMenu-CPBRiML2.js";import"./VMenu-D11N5TPJ.js";import"./VOverlay-U8N3Tt4W.js";import"./forwardRefs-DWGaNmQL.js";import"./color-_AiH45em.js";import"./theme-CTzRPxOi.js";import"./proxiedModel-vOB1Q9Gh.js";import"./anchor-D2WyvgD_.js";import"./dimensions-CNbPgA3L.js";import"./display-BXzLC06Y.js";import"./scopeId-CWp-k_S_.js";import"./locale-CoLhg8Wl.js";import"./router-6tzIEQS-.js";import"./transition-BXZIGKil.js";import"./VDefaultsProvider-BsWh58B_.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./VIcon-DIMW80nW.js";import"./useSlots-nyIcwo6G.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSSpan-DxKJLsSl.js";import"./VProgressCircular-CDK6zSYw.js";import"./resizeObserver-UZYihl4g.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./uuid-DTaye2KM.js";import"./proxiedModel-YDID3p5t.js";import"./theme-CYBW1gqf.js";import"./color-BjNiHHj9.js";import"./dimensions-Bhowz3j9.js";import"./display-iOw8Yit5.js";import"./lazy-6CyKxEg9.js";import"./transition-BLc6SjwQ.js";const A=W({name:"FSInformationsMenu",components:{FSMenu:_,FSCard:G,FSRow:M,FSText:X,FSButton:I,FSCol:D,FSIcon:w,FSClickable:Y},props:{items:{type:Array,default:()=>[]},location:{type:String,default:"bottom"},width:{type:[Array,String,Number],default:null},maxWidth:{type:[Array,String,Number],default:"90dvw"},icon:{type:String,default:"mdi-dots-horizontal"},iconSize:{type:String,default:"18px"},buttonColor:{type:String,default:f.Light},buttonVariant:{type:String,required:!1,default:"icon"}},emits:["update:modelValue"],setup(){const e=L(!1),{getColors:o}=Z(),b=o(f.Light);return{ColorEnum:f,modelValue:e,lightColors:b,onClickItem:d=>{d.onClick(),d.closeOnContentClick!==!1&&(e.value=!1)}}}});function oe(e,o,b,N,d,re){const x=i("FSText"),z=i("FSClickable"),B=i("FSCard"),P=i("FSMenu");return l(),c(P,u({location:e.$props.location,closeOnContentClick:!0,contained:!1,minWidth:"0",modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=n=>e.modelValue=n)},e.$attrs),{activator:t(({props:n})=>[g(e.$slots,"activator",U(j(n)),()=>[r(I,u(n,{icon:e.$props.icon,iconSize:e.$props.iconSize,color:e.$props.buttonColor,variant:e.$props.buttonVariant}),null,16,["icon","iconSize","color","variant"])])]),default:t(()=>[r(B,{maxWidth:e.$props.maxWidth,width:e.$props.width,padding:"2px",border:!1,elevation:!0,align:"center-center"},{default:t(()=>[g(e.$slots,"content",{},()=>[r(D,{gap:"0px"},{default:t(()=>[r(ne,{scrollOutside:!1,maxHeight:"80dvh"},{default:t(()=>[(l(!0),R(q,null,H(e.$props.items,(n,C)=>(l(),c(z,{width:"100%",padding:"8px",height:"40px",key:C,border:!1,onClick:ae=>e.onClickItem(n)},{default:t(()=>[g(e.$slots,"item",u({ref_for:!0},{item:n,index:C}),()=>[r(M,{align:"center-left"},{default:t(()=>[n.icon?(l(),c(w,{key:0,icon:n.icon},null,8,["icon"])):J("",!0),r(x,{font:"text-body"},{default:t(()=>[K(Q(n.label),1)]),_:2},1024)]),_:2},1024)])]),_:2},1032,["onClick"]))),128))]),_:3})]),_:3})])]),_:3},8,["maxWidth","width"])]),_:3},16,["location","modelValue"])}const a=ee(A,[["render",oe]]);A.__docgenInfo={displayName:"FSInformationsMenu",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"{label: string, icon?: string, onClick: () => void, closeOnContentClick?: boolean}[]"},defaultValue:{func:!0,value:"() => []"}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:'"bottom"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:"null"}},{name:"maxWidth",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:'"90dvw"'}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"mdi-dots-horizontal"'}},{name:"iconSize",type:{name:"string"},defaultValue:{func:!1,value:'"18px"'}},{name:"buttonColor",type:{name:"ColorBase"},defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"icon"'}}],events:[{name:"update:modelValue"}],slots:[{name:"activator",scoped:!0,bindings:[]},{name:"content"},{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSOptionsMenu.vue"]};const Ze={title:"Foundation/Shared/Menu/OptionsMenu",component:a,tags:["autodocs"],argTypes:{...T([_,te],a),...E(a)}},s={render:e=>({components:{FSOptionsMenu:a},setup(){return{args:e}},template:`
    <FSOptionsMenu
      v-bind="args"
    />`}),args:{items:[{label:"Display alert",icon:"mdi-alert",onClick:()=>alert("Alert triggered!")},{label:"Display notification",icon:"mdi-bell",onClick:()=>alert("Notification triggered!")},{label:"Display print",icon:"mdi-printer",onClick:()=>alert("Print triggered!")}]}},m={render:e=>({components:{FSOptionsMenu:a},setup(){return{args:e}},template:`
    <FSOptionsMenu
      v-bind="args"
    />`}),args:{buttonVariant:"standard",icon:"mdi-dots-vertical",items:[{label:"Display alert",icon:"mdi-alert",onClick:()=>alert("Alert triggered!")},{label:"Display notification with a longer longer name and longer and longer and longer and longer",onClick:()=>alert("Notification triggered!")},{label:"Display print",onClick:()=>alert("Print triggered!")}]}},p={render:e=>({components:{FSOptionsMenu:a},setup(){return{args:e}},template:`
    <FSOptionsMenu
      v-bind="args"
    />`}),args:{buttonVariant:"standard",icon:"mdi-dots-vertical",items:Array.from({length:80},(e,o)=>({label:`Item ${o+1}`,icon:"mdi-check",onClick:()=>alert(`Item ${o+1} clicked!`),closeOnContentClick:!1}))}};var S,F,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(F=s.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var y,v,h;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...($=(O=p.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};const en=["Default","Button","ItemsFadeOut"];export{m as Button,s as Default,p as ItemsFadeOut,en as __namedExportsOrder,Ze as default};
