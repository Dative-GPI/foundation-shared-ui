import{d as Y,c as u,z as g,E as h,C as r,S as Z,k as ee,G as te,H as b,P as C,L as B,I as F,J as y,M as w,N as $}from"./vue.esm-bundler-CM4TIH-Q.js";import{F as O}from"./FSClickable-a8XmDSU8.js";import{F as x}from"./FSCard-CYsPoqay.js";import{F as o}from"./FSChip-BlOrMx6O.js";import{F as ne}from"./FSText-C032WjuG.js";import{F as W}from"./FSCol-Be93XvPD.js";import{u as ae,C as I}from"./useColors-CjA2D2xA.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as l}from"./FSIcon-CIF0zaTI.js";import{_ as oe}from"./FSRow-C47sfGk6.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./css-D38lF7BW.js";import"./useBreakpoints-DsICqL2A.js";import"./VProgressCircular-C-4f-PXJ.js";import"./color-Bo6l13w9.js";import"./theme-d3-Spt7o.js";import"./resizeObserver-Cb3oz2nO.js";import"./VIcon-GfKFLOEw.js";import"./FSSpan-BXQyelfo.js";import"./useSlots-c6yg-hhg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const X=Y({name:"FSStatusRichCard",components:{FSClickable:O,FSCard:x,FSIcon:o,FSText:ne,FSCol:W},props:{height:{type:[Array,String,Number],required:!1,default:"100px"},width:{type:[Array,String,Number],required:!1,default:"160px"},padding:{type:[Array,String,Number],required:!1,default:"12px"},gap:{type:[Array,String,Number],required:!1,default:"8px"},title:{type:[String,null],required:!1,default:null},titleClamp:{type:Number,required:!1,default:2},color:{type:[String,null],required:!1,default:null},fillBackground:{type:Boolean,required:!1,default:!1},modelStatus:{type:Object,required:!0},statusGroup:{type:Object,required:!0}},setup(e){const{getColors:t}=ae(),i=u(()=>{var n,a;return e.color??((n=e.statusGroup)==null?void 0:n.color)??((a=e.modelStatus)==null?void 0:a.colorDefault)??I.Primary}),v=u(()=>{var n,a;return((n=e.statusGroup)==null?void 0:n.icon)??((a=e.modelStatus)==null?void 0:a.iconDefault)??null}),T=u(()=>{var n;return e.title??((n=e.modelStatus)==null?void 0:n.label)??""}),k=u(()=>{var n,a,q,R,D,G;return(n=e.statusGroup)!=null&&n.label?e.statusGroup.label:(a=e.statusGroup)!=null&&a.value&&!isNaN(parseFloat((q=e.statusGroup)==null?void 0:q.value))?`${parseFloat(e.statusGroup.value).toLocaleString("fullwide",{maximumFractionDigits:2})} ${e.statusGroup.unit}`:(R=e.statusGroup)!=null&&R.value?`${(D=e.statusGroup)==null?void 0:D.value} ${(G=e.statusGroup)==null?void 0:G.unit}`:null}),d=u(()=>({"--fs-status-rich-card-background-color":e.fillBackground?t(i.value).light:"transparent","--fs-status-rich-card-border-color":e.fillBackground?t(i.value).base:t(I.Light).dark}));return{FSClickable:O,FSCard:x,color:i,style:d,title:T,value:k,icon:v}}});function le(e,t,i,v,T,k){const d=te("FSText");return e.$props.modelStatus?(b(),g(ee(e.$attrs.onClick?e.FSClickable:e.FSCard),{key:0,class:"fs-status-rich-card",topRightPadding:"2px",variant:"standard",padding:e.$props.padding,height:e.$props.height,width:e.$props.width,color:e.color,style:Z(e.style)},{"top-right":r(()=>[B(e.$slots,"corner",w($({color:e.color})))]),default:r(()=>[C(W,{align:"center-center",gap:e.$props.gap},{default:r(()=>[C(oe,{align:"top-center"},{default:r(()=>[e.icon?(b(),g(l,{key:0},{default:r(()=>[F(y(e.icon),1)]),_:1})):h("",!0),e.value?(b(),g(d,{key:1,font:"text-button"},{default:r(()=>[F(y(e.value),1)]),_:1})):h("",!0)]),_:1}),C(d,{font:"text-overline",align:"center",lineClamp:e.$props.titleClamp},{default:r(()=>[F(y(e.title),1)]),_:1},8,["lineClamp"]),B(e.$slots,"footer",w($({color:e.color})))]),_:3},8,["gap"])]),_:3},8,["padding","height","width","color","style"])):h("",!0)}const s=re(X,[["render",le]]);X.__docgenInfo={displayName:"FSStatusRichCard",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100px"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"160px"'}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"12px"'}},{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"titleClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"2"}},{name:"color",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"fillBackground",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"modelStatus",type:{name:"FSModelStatus | undefined"},required:!0},{name:"statusGroup",type:{name:"FSDeviceStatusGroup | undefined"},required:!0}],slots:[{name:"footer",scoped:!0,bindings:[{name:"color",title:"binding"}]},{name:"corner",scoped:!0,bindings:[{name:"color",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatusRichCard.vue"]};const we={title:"Foundation/Shared/StatusRichCard",component:s,tags:["autodocs"],argTypes:{}},m={args:{modelStatus:{id:"1",label:"Status label that should clamp after two lines",index:1,showDefault:!1},statusGroup:{label:"",value:"70",unit:"°C",icon:"mdi-thermometer",color:"#E01515",sourceTimestamp:1726547886e3,enqueuedTimestamp:1726547952e3,processedTimestamp:1726547958156},title:void 0,titleClamp:2,fillBackground:!1},render:(e,{argTypes:t})=>({components:{FSStatusRichCard:s,FSChip:o,FSIcon:l},props:Object.keys(t),setup(){return{args:e}},template:`
      <FSStatusRichCard
        v-bind="args"
      />`})},c={args:{modelStatus:{id:"1",label:"Status label",index:1,showDefault:!1},statusGroup:{label:"",value:"70",unit:"°C",icon:"mdi-thermometer",color:"#E01515",sourceTimestamp:1726547886e3,enqueuedTimestamp:1726547952e3,processedTimestamp:1726547958156},title:void 0,titleClamp:1,color:"#50CC50",fillBackground:!0},render:(e,{argTypes:t})=>({components:{FSStatusRichCard:s,FSChip:o,FSIcon:l},props:Object.keys(t),setup(){return{args:e}},template:`
      <FSStatusRichCard
        v-bind="args"
      >
        <template
          #footer="{ color }"
        >
          <FSChip
            :color="color"
            label="Target: 69°C"
          />
        </template>
      </FSStatusRichCard>`})},p={args:{modelStatus:{id:"1",label:"Status label",index:1,showDefault:!1},statusGroup:{label:"Too hot",value:"",unit:"",icon:"mdi-thermometer",color:"#E01515",sourceTimestamp:1726547886e3,enqueuedTimestamp:1726547952e3,processedTimestamp:1726547958156},title:void 0,titleClamp:2,color:void 0,fillBackground:!0},render:(e,{argTypes:t})=>({components:{FSStatusRichCard:s,FSChip:o,FSIcon:l},props:Object.keys(t),setup(){return{args:e}},template:`
      <FSStatusRichCard
        v-bind="args"
      >
        <template
          #corner="{ color }"
        >
          <FSIcon
            :color="color"
          >
            mdi-information-outline
          </FSIcon>
        </template>
      </FSStatusRichCard>`})},f={args:{modelStatus:{id:"1",label:"Status label",index:1,iconDefault:"mdi-information-outline",colorDefault:"#00ff00",showDefault:!0},statusGroup:void 0,title:void 0,titleClamp:2,color:void 0,fillBackground:!0},render:(e,{argTypes:t})=>({components:{FSStatusRichCard:s,FSChip:o,FSIcon:l},props:Object.keys(t),setup(){return{args:e}},template:`
      <FSStatusRichCard
        v-bind="args"
        @click
      />`})},S={args:{modelStatus:{id:"1",label:"Status label",index:1,iconDefault:"mdi-information-outline",colorDefault:"#00ff00",showDefault:!0},statusGroup:{label:"Too cold",value:"",unit:"",icon:"mdi-thermometer",color:"#0088BB",sourceTimestamp:1726547886e3,enqueuedTimestamp:1726547952e3,processedTimestamp:1726547958156},title:void 0,titleClamp:2,color:void 0,fillBackground:!0},render:(e,{argTypes:t})=>({components:{FSStatusRichCard:s,FSChip:o,FSIcon:l},props:Object.keys(t),setup(){return{args:e}},template:`
      <FSStatusRichCard
        v-bind="args"
        @click
      />`})};var N,j,V;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    modelStatus: {
      id: '1',
      label: 'Status label that should clamp after two lines',
      index: 1,
      showDefault: false
    },
    statusGroup: {
      label: '',
      value: '70',
      unit: '°C',
      icon: 'mdi-thermometer',
      color: '#E01515',
      sourceTimestamp: 1726547886000,
      enqueuedTimestamp: 1726547952000,
      processedTimestamp: 1726547958156
    },
    title: undefined,
    titleClamp: 2,
    fillBackground: false
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSStatusRichCard,
      FSChip,
      FSIcon
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSStatusRichCard
        v-bind="args"
      />\`
  })
}`,...(V=(j=m.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var E,P,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    modelStatus: {
      id: '1',
      label: 'Status label',
      index: 1,
      showDefault: false
    },
    statusGroup: {
      label: '',
      value: '70',
      unit: '°C',
      icon: 'mdi-thermometer',
      color: '#E01515',
      sourceTimestamp: 1726547886000,
      enqueuedTimestamp: 1726547952000,
      processedTimestamp: 1726547958156
    },
    title: undefined,
    titleClamp: 1,
    color: "#50CC50",
    fillBackground: true
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSStatusRichCard,
      FSChip,
      FSIcon
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSStatusRichCard
        v-bind="args"
      >
        <template
          #footer="{ color }"
        >
          <FSChip
            :color="color"
            label="Target: 69°C"
          />
        </template>
      </FSStatusRichCard>\`
  })
}`,...(A=(P=c.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var _,z,L;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    modelStatus: {
      id: '1',
      label: 'Status label',
      index: 1,
      showDefault: false
    },
    statusGroup: {
      label: 'Too hot',
      value: '',
      unit: '',
      icon: 'mdi-thermometer',
      color: '#E01515',
      sourceTimestamp: 1726547886000,
      enqueuedTimestamp: 1726547952000,
      processedTimestamp: 1726547958156
    },
    title: undefined,
    titleClamp: 2,
    color: undefined,
    fillBackground: true
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSStatusRichCard,
      FSChip,
      FSIcon
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSStatusRichCard
        v-bind="args"
      >
        <template
          #corner="{ color }"
        >
          <FSIcon
            :color="color"
          >
            mdi-information-outline
          </FSIcon>
        </template>
      </FSStatusRichCard>\`
  })
}`,...(L=(z=p.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var M,H,J;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    modelStatus: {
      id: '1',
      label: 'Status label',
      index: 1,
      iconDefault: 'mdi-information-outline',
      colorDefault: '#00ff00',
      showDefault: true
    },
    statusGroup: undefined,
    title: undefined,
    titleClamp: 2,
    color: undefined,
    fillBackground: true
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSStatusRichCard,
      FSChip,
      FSIcon
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSStatusRichCard
        v-bind="args"
        @click
      />\`
  })
}`,...(J=(H=f.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    modelStatus: {
      id: '1',
      label: 'Status label',
      index: 1,
      iconDefault: 'mdi-information-outline',
      colorDefault: '#00ff00',
      showDefault: true
    },
    statusGroup: {
      label: 'Too cold',
      value: '',
      unit: '',
      icon: 'mdi-thermometer',
      color: '#0088BB',
      sourceTimestamp: 1726547886000,
      enqueuedTimestamp: 1726547952000,
      processedTimestamp: 1726547958156
    },
    title: undefined,
    titleClamp: 2,
    color: undefined,
    fillBackground: true
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSStatusRichCard,
      FSChip,
      FSIcon
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSStatusRichCard
        v-bind="args"
        @click
      />\`
  })
}`,...(U=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const $e=["Default","Footer","Corner","Clickable","OtherClickable"];export{f as Clickable,p as Corner,m as Default,c as Footer,S as OtherClickable,$e as __namedExportsOrder,we as default};
