import{a as E,b as P}from"./properties-Qw-O9fbT.js";import{F as D}from"./FSMenu-DcCsQXC4.js";import{d as L,e as T,E as d,H as n,m as u,L as c,M as i,k as r,S as g,J as W,F as q,X as H,K as R,N as U,O as J,U as K,V as X}from"./vue.esm-bundler-NVdFPFZB.js";import{F as _}from"./FSRow-Dg2RhQyl.js";import{F as w}from"./FSCol-KRtq6OYO.js";import{F as I}from"./FSIcon-BcHBVf_o.js";import{F as j,C as G}from"./FSCard-DxY0aXhp.js";import{F as Q}from"./FSText-DIbyStIN.js";import{F as N}from"./FSButton-BqreeKOn.js";import{C as f,u as Y}from"./useColors-v3I-6cBg.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ee}from"./FSFadeOut-W61q8jFE.js";import{V as te}from"./VMenu-BCj9c0xY.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./VIcon-Cu6WQqXu.js";import"./color-BS29f5Yp.js";import"./theme-DuZszYeY.js";import"./useRender-CaGCh2Xu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./useSlots-DEXetpJf.js";import"./FSSpan-B28b2m0n.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./uuid-DTaye2KM.js";import"./VOverlay-BuHPOPgF.js";import"./proxiedModel-VL_RP4zk.js";import"./easing-DY7PVvcf.js";import"./anchor-Se7MGGLO.js";import"./dimensions-CS_qJJhy.js";import"./display-QVN4B5Qw.js";import"./lazy-sPNxwuRm.js";import"./locale-DER8LJer.js";import"./router-D36qODsG.js";import"./scopeId-DEhVAmth.js";import"./transition-a5pzBS6c.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-Blv54jCg.js";import"./dialog-transition-B9S_00bc.js";const A=L({name:"FSInformationsMenu",components:{FSMenu:D,FSCard:j,FSRow:_,FSText:Q,FSButton:N,FSCol:w,FSIcon:I},props:{items:{type:Array,default:()=>[]},location:{type:String,default:"bottom"},width:{type:[Array,String,Number],default:null},maxWidth:{type:[Array,String,Number],default:"90dvw"},icon:{type:String,default:"mdi-dots-horizontal"},iconSize:{type:String,default:"18px"},buttonColor:{type:String,default:f.Light},buttonVariant:{type:String,required:!1,default:"icon"}},emits:["update:modelValue"],setup(){const e=T(!1),{getColors:o}=Y(),C=o(f.Light);return{ColorEnum:f,modelValue:e,lightColors:C,CardVariants:G,onClickItem:p=>{p.onClick(),p.closeOnContentClick!==!1&&(e.value=!1)}}}});function ne(e,o,C,z,p,oe){const x=c("FSText"),b=c("FSCard"),B=c("FSMenu");return i(),d(B,u({location:e.$props.location,closeOnContentClick:!0,contained:!1,minWidth:"0",modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.modelValue=t)},e.$attrs),{activator:n(({props:t})=>[g(e.$slots,"activator",K(X(t)),()=>[r(N,u(t,{icon:e.$props.icon,iconSize:e.$props.iconSize,color:e.$props.buttonColor,variant:e.$props.buttonVariant}),null,16,["icon","iconSize","color","variant"])])]),default:n(()=>[r(b,{maxWidth:e.$props.maxWidth,width:e.$props.width,padding:"2px",border:!1,elevation:!0,align:"center-center"},{default:n(()=>[g(e.$slots,"content",{},()=>[r(w,{gap:"0px"},{default:n(()=>[r(ee,{scrollOutside:!1,maxHeight:"80dvh"},{default:n(()=>[(i(!0),W(q,null,H(e.$props.items,(t,S)=>(i(),d(b,{width:"100%",padding:"8px",height:"40px",key:S,color:e.ColorEnum.Light,border:!1,onClick:re=>e.onClickItem(t)},{default:n(()=>[g(e.$slots,"item",u({ref_for:!0},{item:t,index:S}),()=>[r(_,{align:"center-left"},{default:n(()=>[t.icon?(i(),d(I,{key:0,icon:t.icon},null,8,["icon"])):R("",!0),r(x,{font:"text-body"},{default:n(()=>[U(J(t.label),1)]),_:2},1024)]),_:2},1024)])]),_:2},1032,["color","onClick"]))),128))]),_:3})]),_:3})])]),_:3},8,["maxWidth","width"])]),_:3},16,["location","modelValue"])}const a=Z(A,[["render",ne]]);A.__docgenInfo={displayName:"FSInformationsMenu",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"{label: string, icon?: string, onClick: () => void, closeOnContentClick?: boolean}[]"},defaultValue:{func:!0,value:"() => []"}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:'"bottom"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:"null"}},{name:"maxWidth",type:{name:"string[] | number[] | string | number | null"},defaultValue:{func:!1,value:'"90dvw"'}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"mdi-dots-horizontal"'}},{name:"iconSize",type:{name:"string"},defaultValue:{func:!1,value:'"18px"'}},{name:"buttonColor",type:{name:"ColorBase"},defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"icon"'}}],events:[{name:"update:modelValue"}],slots:[{name:"activator",scoped:!0,bindings:[]},{name:"content"},{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSOptionsMenu.vue"]};const Ge={title:"Shared/Components/Menu/OptionsMenu",component:a,tags:["autodocs"],argTypes:{...P([D,te],a),...E(a)}},l={render:e=>({components:{FSOptionsMenu:a},setup(){return{args:e}},template:`
    <FSOptionsMenu
      v-bind="args"
    />`}),args:{items:[{label:"Display alert",icon:"mdi-alert",onClick:()=>alert("Alert triggered!")},{label:"Display notification",icon:"mdi-bell",onClick:()=>alert("Notification triggered!")},{label:"Display print",icon:"mdi-printer",onClick:()=>alert("Print triggered!")}]}},s={render:e=>({components:{FSOptionsMenu:a},setup(){return{args:e}},template:`
    <FSOptionsMenu
      v-bind="args"
    />`}),args:{buttonVariant:"standard",icon:"mdi-dots-vertical",items:[{label:"Display alert",icon:"mdi-alert",onClick:()=>alert("Alert triggered!")},{label:"Display notification with a longer longer name and longer and longer and longer and longer",onClick:()=>alert("Notification triggered!")},{label:"Display print",onClick:()=>alert("Print triggered!")}]}},m={render:e=>({components:{FSOptionsMenu:a},setup(){return{args:e}},template:`
    <FSOptionsMenu
      v-bind="args"
    />`}),args:{buttonVariant:"standard",icon:"mdi-dots-vertical",items:Array.from({length:80},(e,o)=>({label:`Item ${o+1}`,icon:"mdi-check",onClick:()=>alert(`Item ${o+1} clicked!`),closeOnContentClick:!1}))}};var y,F,k;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(F=l.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var h,v,V;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(M=($=m.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};const Qe=["Default","Button","ItemsFadeOut"];export{s as Button,l as Default,m as ItemsFadeOut,Qe as __namedExportsOrder,Ge as default};
