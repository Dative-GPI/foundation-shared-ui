import{r as W,g as u,j as g,ac as n,H as Z,k as h,Y as w,P as b,p as C,o as F,a1 as y,X as B,G as O,u as $}from"./vue.esm-bundler-DR0_aU9U.js";import{F as ee}from"./FSCard--XyliQO3.js";import{F as o}from"./FSChip-ShmCCKc7.js";import{F as te}from"./FSText-CUmuxASa.js";import{_ as K}from"./FSRow-C8VtPvPz.js";import{F as Q}from"./FSCol-B2uM4vFw.js";import{u as ae,a as x}from"./useColors-CvhpHTRO.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as l}from"./FSIcon-CBwOL1p5.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./VProgressCircular-CZaehD4X.js";import"./color-RD9Ud5Y3.js";import"./theme-Dfllckn6.js";import"./useRender-BLRtLddt.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSSpan-9E7WYB2n.js";import"./useSlots-p1mkRhuZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VIcon-e3y7Ok8e.js";import"./icons-CT9uuJgl.js";const U=W({name:"FSStatusRichCard",components:{FSCard:ee,FSIcon:o,FSText:te,FSRow:K,FSCol:Q},props:{height:{type:[Array,String,Number],required:!1,default:"100px"},width:{type:[Array,String,Number],required:!1,default:"160px"},padding:{type:[Array,String,Number],required:!1,default:"12px"},gap:{type:[Array,String,Number],required:!1,default:"8px"},title:{type:[String,null],required:!1,default:null},titleClamp:{type:Number,required:!1,default:2},color:{type:[String,null],required:!1,default:null},fillBackground:{type:Boolean,required:!1,default:!1},modelStatus:{type:Object,required:!0},statusGroup:{type:Object,required:!0}},setup(e){const{getColors:t}=ae(),i=u(()=>{var a,r;return e.color??((a=e.statusGroup)==null?void 0:a.color)??((r=e.modelStatus)==null?void 0:r.colorDefault)??x.Primary}),v=u(()=>{var a,r;return((a=e.statusGroup)==null?void 0:a.icon)??((r=e.modelStatus)==null?void 0:r.iconDefault)??null}),T=u(()=>{var a;return e.title??((a=e.modelStatus)==null?void 0:a.label)??""}),k=u(()=>{var a,r,q,R,D,G;return(a=e.statusGroup)!=null&&a.label?e.statusGroup.label:(r=e.statusGroup)!=null&&r.value&&!isNaN(parseFloat((q=e.statusGroup)==null?void 0:q.value))?`${parseFloat(e.statusGroup.value).toLocaleString("fullwide",{maximumFractionDigits:2})} ${e.statusGroup.unit}`:(R=e.statusGroup)!=null&&R.value?`${(D=e.statusGroup)==null?void 0:D.value} ${(G=e.statusGroup)==null?void 0:G.unit}`:null}),d=u(()=>({"--fs-status-rich-card-background-color":e.fillBackground?t(i.value).light:"transparent","--fs-status-rich-card-border-color":e.fillBackground?t(i.value).base:t(x.Light).dark}));return{color:i,style:d,title:T,value:k,icon:v}}});function ne(e,t,i,v,T,k){const d=w("FSText"),a=w("FSCard");return e.$props.modelStatus?(b(),g(a,{key:0,class:"fs-status-rich-card",topRightPadding:"2px",variant:"standard",padding:e.$props.padding,height:e.$props.height,width:e.$props.width,color:e.color,style:Z(e.style)},{"top-right":n(()=>[B(e.$slots,"corner",O($({color:e.color})))]),default:n(()=>[C(Q,{align:"center-center",gap:e.$props.gap},{default:n(()=>[C(K,{align:"top-center"},{default:n(()=>[e.icon?(b(),g(l,{key:0},{default:n(()=>[F(y(e.icon),1)]),_:1})):h("",!0),e.value?(b(),g(d,{key:1,font:"text-button"},{default:n(()=>[F(y(e.value),1)]),_:1})):h("",!0)]),_:1}),C(d,{font:"text-overline",align:"center",lineClamp:e.$props.titleClamp},{default:n(()=>[F(y(e.title),1)]),_:1},8,["lineClamp"]),B(e.$slots,"footer",O($({color:e.color})))]),_:3},8,["gap"])]),_:3},8,["padding","height","width","color","style"])):h("",!0)}const s=re(U,[["render",ne]]);U.__docgenInfo={displayName:"FSStatusRichCard",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100px"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"160px"'}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"12px"'}},{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"titleClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"2"}},{name:"color",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"fillBackground",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"modelStatus",type:{name:"FSModelStatus | undefined"},required:!0},{name:"statusGroup",type:{name:"FSDeviceStatusGroup | undefined"},required:!0}],slots:[{name:"footer",scoped:!0,bindings:[{name:"color",title:"binding"}]},{name:"corner",scoped:!0,bindings:[{name:"color",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatusRichCard.vue"]};const Oe={title:"Foundation/Shared/StatusRichCard",component:s,tags:["autodocs"],argTypes:{}},m={args:{modelStatus:{id:"1",label:"Status label that should clamp after two lines",index:1,showDefault:!1},statusGroup:{label:"",value:"70",unit:"°C",icon:"mdi-thermometer",color:"#E01515",sourceTimestamp:1726547886e3,enqueuedTimestamp:1726547952e3,processedTimestamp:1726547958156},title:void 0,titleClamp:2,fillBackground:!1},render:(e,{argTypes:t})=>({components:{FSStatusRichCard:s,FSChip:o,FSIcon:l},props:Object.keys(t),setup(){return{args:e}},template:`
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
      />`})};var j,I,N;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(I=m.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var V,_,E;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(_=c.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var P,A,z;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(z=(A=p.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var L,H,M;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(M=(H=f.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var X,Y,J;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};const $e=["Default","Footer","Corner","Clickable","OtherClickable"];export{f as Clickable,p as Corner,m as Default,c as Footer,S as OtherClickable,$e as __namedExportsOrder,Oe as default};
