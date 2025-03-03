import{d as Y,c as u,A as g,F as h,D as r,U as Z,x as ee,H as te,I as b,R as C,P as ne,L as G,J as F,K as y,N as w,O}from"./vue.esm-bundler-BD3cPSox.js";import{F as $}from"./FSClickable-BsEc8iHI.js";import{F as x}from"./FSCard-DOwp-V9l.js";import{F as o}from"./FSChip-D4m4Movw.js";import{F as ae}from"./FSText-uZOTHeSC.js";import{F as W}from"./FSCol-C9a7BKGp.js";import{u as re,C as N}from"./useColors-Cu9vf_Ix.js";import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as l}from"./FSIcon-BikiybNc.js";import{_ as le}from"./FSRow-CopwEayK.js";import"./FSRouterLink-_G3m0SRF.js";import"./vue-router-Ds_E4c-X.js";import"./css-CmnfRCoE.js";import"./useBreakpoints-CnZdRDE7.js";import"./VProgressCircular-Ca7Fp11Q.js";import"./color-DAd2dJIE.js";import"./theme-B93wSOzC.js";import"./resizeObserver-BdS48m16.js";import"./VIcon-ef9P0Odv.js";import"./FSSpan-CqHf-ny6.js";import"./useSlots-DhthX9xh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const X=Y({name:"FSStatusRichCard",components:{FSClickable:$,FSCard:x,FSIcon:o,FSText:ae,FSCol:W},props:{height:{type:[Array,String,Number],required:!1,default:"100px"},width:{type:[Array,String,Number],required:!1,default:"160px"},padding:{type:[Array,String,Number],required:!1,default:"12px"},gap:{type:[Array,String,Number],required:!1,default:"8px"},title:{type:[String,null],required:!1,default:null},titleClamp:{type:Number,required:!1,default:2},color:{type:[String,null],required:!1,default:null},fillBackground:{type:Boolean,required:!1,default:!1},modelStatus:{type:Object,required:!0},statusGroup:{type:Object,required:!0}},setup(e){const{getColors:t}=re(),i=u(()=>{var n,a;return e.color??((n=e.statusGroup)==null?void 0:n.color)??((a=e.modelStatus)==null?void 0:a.colorDefault)??N.Primary}),v=u(()=>{var n,a;return((n=e.statusGroup)==null?void 0:n.icon)??((a=e.modelStatus)==null?void 0:a.iconDefault)??null}),T=u(()=>{var n;return e.title??((n=e.modelStatus)==null?void 0:n.label)}),k=u(()=>{var n,a,q,D,R,B;return(n=e.statusGroup)!=null&&n.label?e.statusGroup.label:(a=e.statusGroup)!=null&&a.value&&!isNaN(parseFloat((q=e.statusGroup)==null?void 0:q.value))?`${parseFloat(e.statusGroup.value).toLocaleString("fullwide",{maximumFractionDigits:2})} ${e.statusGroup.unit}`:(D=e.statusGroup)!=null&&D.value?`${(R=e.statusGroup)==null?void 0:R.value} ${(B=e.statusGroup)==null?void 0:B.unit}`:null}),d=u(()=>({"--fs-status-rich-card-background-color":e.fillBackground?t(i.value).light:"transparent","--fs-status-rich-card-border-color":e.fillBackground?t(i.value).base:t(N.Light).dark}));return{FSClickable:$,FSCard:x,color:i,style:d,title:T,value:k,icon:v}}}),se={class:"fs-status-rich-card-corner"};function ue(e,t,i,v,T,k){const d=te("FSText");return e.$props.modelStatus?(b(),g(ee(e.$attrs.onClick?e.FSClickable:e.FSCard),{key:0,class:"fs-status-rich-card",variant:"standard",padding:e.$props.padding,height:e.$props.height,width:e.$props.width,color:e.color,style:Z(e.style)},{default:r(()=>[C(W,{align:"center-center",gap:e.$props.gap},{default:r(()=>[C(le,{align:"top-center"},{default:r(()=>[e.icon?(b(),g(l,{key:0},{default:r(()=>[F(y(e.icon),1)]),_:1})):h("",!0),e.value?(b(),g(d,{key:1,font:"text-button"},{default:r(()=>[F(y(e.value),1)]),_:1})):h("",!0)]),_:1}),C(d,{font:"text-overline",align:"center",lineClamp:e.$props.titleClamp},{default:r(()=>[F(y(e.title),1)]),_:1},8,["lineClamp"]),G(e.$slots,"footer",w(O({color:e.color})))]),_:3},8,["gap"]),ne("div",se,[G(e.$slots,"corner",w(O({color:e.color})))])]),_:3},8,["padding","height","width","color","style"])):h("",!0)}const s=oe(X,[["render",ue]]);X.__docgenInfo={displayName:"FSStatusRichCard",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100px"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"160px"'}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"12px"'}},{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"titleClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"2"}},{name:"color",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"fillBackground",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"modelStatus",type:{name:"FSModelStatus | undefined"},required:!0},{name:"statusGroup",type:{name:"FSDeviceStatusGroup | undefined"},required:!0}],slots:[{name:"footer",scoped:!0,bindings:[{name:"color",title:"binding"}]},{name:"corner",scoped:!0,bindings:[{name:"color",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatusRichCard.vue"]};const $e={title:"Foundation/Shared/StatusRichCard",component:s,tags:["autodocs"],argTypes:{}},m={args:{modelStatus:{id:"1",label:"Status label that should clamp after two lines",index:1,showDefault:!1},statusGroup:{label:"",value:"70",unit:"°C",icon:"mdi-thermometer",color:"#E01515",sourceTimestamp:1726547886e3,enqueuedTimestamp:1726547952e3,processedTimestamp:1726547958156},title:void 0,titleClamp:2,fillBackground:!1},render:(e,{argTypes:t})=>({components:{FSStatusRichCard:s,FSChip:o,FSIcon:l},props:Object.keys(t),setup(){return{args:e}},template:`
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
      />`})};var I,j,V;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(j=m.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var E,_,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(_=c.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var P,L,z;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(z=(L=p.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var H,J,K;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,U,Q;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(Q=(U=S.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};const xe=["Default","Footer","Corner","Clickable","OtherClickable"];export{f as Clickable,p as Corner,m as Default,c as Footer,S as OtherClickable,xe as __namedExportsOrder,$e as default};
