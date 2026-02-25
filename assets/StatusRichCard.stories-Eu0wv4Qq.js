import{d as W,c as u,B as g,D as n,X as Y,H as h,I as B,J as b,q as C,K as F,L as y,P as w,Q as O,R as $}from"./vue.esm-bundler-D5n7z5qz.js";import{F as Z}from"./FSCard-BCuiauGe.js";import{F as o}from"./FSChip-BAG_v8gF.js";import{F as ee}from"./FSText-015IEZHy.js";import{F as X}from"./FSCol-D_lbFmZy.js";import{u as te,C as x}from"./useColors-COEXNh00.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as l}from"./FSIcon-DFkRD0af.js";import{_ as re}from"./FSRow-DIk8KFbG.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./theme-BcqfMidt.js";import"./useRender-Dce1Ng4u.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";const U=W({name:"FSStatusRichCard",components:{FSCard:Z,FSIcon:o,FSText:ee,FSCol:X},props:{height:{type:[Array,String,Number],required:!1,default:"100px"},width:{type:[Array,String,Number],required:!1,default:"160px"},padding:{type:[Array,String,Number],required:!1,default:"12px"},gap:{type:[Array,String,Number],required:!1,default:"8px"},title:{type:[String,null],required:!1,default:null},titleClamp:{type:Number,required:!1,default:2},color:{type:[String,null],required:!1,default:null},fillBackground:{type:Boolean,required:!1,default:!1},modelStatus:{type:Object,required:!0},statusGroup:{type:Object,required:!0}},setup(e){const{getColors:t}=te(),i=u(()=>{var a,r;return e.color??((a=e.statusGroup)==null?void 0:a.color)??((r=e.modelStatus)==null?void 0:r.colorDefault)??x.Primary}),v=u(()=>{var a,r;return((a=e.statusGroup)==null?void 0:a.icon)??((r=e.modelStatus)==null?void 0:r.iconDefault)??null}),T=u(()=>{var a;return e.title??((a=e.modelStatus)==null?void 0:a.label)??""}),k=u(()=>{var a,r,q,R,D,G;return(a=e.statusGroup)!=null&&a.label?e.statusGroup.label:(r=e.statusGroup)!=null&&r.value&&!isNaN(parseFloat((q=e.statusGroup)==null?void 0:q.value))?`${parseFloat(e.statusGroup.value).toLocaleString("fullwide",{maximumFractionDigits:2})} ${e.statusGroup.unit}`:(R=e.statusGroup)!=null&&R.value?`${(D=e.statusGroup)==null?void 0:D.value} ${(G=e.statusGroup)==null?void 0:G.unit}`:null}),d=u(()=>({"--fs-status-rich-card-background-color":e.fillBackground?t(i.value).light:"transparent","--fs-status-rich-card-border-color":e.fillBackground?t(i.value).base:t(x.Light).dark}));return{color:i,style:d,title:T,value:k,icon:v}}});function ne(e,t,i,v,T,k){const d=B("FSText"),a=B("FSCard");return e.$props.modelStatus?(b(),g(a,{key:0,class:"fs-status-rich-card",topRightPadding:"2px",variant:"standard",padding:e.$props.padding,height:e.$props.height,width:e.$props.width,color:e.color,style:Y(e.style)},{"top-right":n(()=>[w(e.$slots,"corner",O($({color:e.color})))]),default:n(()=>[C(X,{align:"center-center",gap:e.$props.gap},{default:n(()=>[C(re,{align:"top-center"},{default:n(()=>[e.icon?(b(),g(l,{key:0},{default:n(()=>[F(y(e.icon),1)]),_:1})):h("",!0),e.value?(b(),g(d,{key:1,font:"text-button"},{default:n(()=>[F(y(e.value),1)]),_:1})):h("",!0)]),_:1}),C(d,{font:"text-overline",align:"center",lineClamp:e.$props.titleClamp},{default:n(()=>[F(y(e.title),1)]),_:1},8,["lineClamp"]),w(e.$slots,"footer",O($({color:e.color})))]),_:3},8,["gap"])]),_:3},8,["padding","height","width","color","style"])):h("",!0)}const s=ae(U,[["render",ne]]);U.__docgenInfo={displayName:"FSStatusRichCard",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100px"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"160px"'}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"12px"'}},{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"titleClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"2"}},{name:"color",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"fillBackground",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"modelStatus",type:{name:"FSModelStatus | undefined"},required:!0},{name:"statusGroup",type:{name:"FSDeviceStatusGroup | undefined"},required:!0}],slots:[{name:"footer",scoped:!0,bindings:[{name:"color",title:"binding"}]},{name:"corner",scoped:!0,bindings:[{name:"color",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatusRichCard.vue"]};const we={title:"Foundation/Shared/StatusRichCard",component:s,tags:["autodocs"],argTypes:{}},m={args:{modelStatus:{id:"1",label:"Status label that should clamp after two lines",index:1,showDefault:!1},statusGroup:{label:"",value:"70",unit:"°C",icon:"mdi-thermometer",color:"#E01515",sourceTimestamp:1726547886e3,enqueuedTimestamp:1726547952e3,processedTimestamp:1726547958156},title:void 0,titleClamp:2,fillBackground:!1},render:(e,{argTypes:t})=>({components:{FSStatusRichCard:s,FSChip:o,FSIcon:l},props:Object.keys(t),setup(){return{args:e}},template:`
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
      />`})};var I,j,N;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(N=(j=m.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var V,_,E;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(_=c.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var P,A,L;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var z,H,J;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(H=f.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,Q;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(M=S.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const Oe=["Default","Footer","Corner","Clickable","OtherClickable"];export{f as Clickable,p as Corner,m as Default,c as Footer,S as OtherClickable,Oe as __namedExportsOrder,we as default};
