var E=Object.defineProperty;var O=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var p=(e,t,o)=>O(e,typeof t!="symbol"?t+"":t,o);import{d as I,b as v,w,C as c,z as r,E as n,F as f,I as l,J as u,S as $,B as q,A as H,K as D}from"./vue.esm-bundler-CqZ6aK3I.js";import{_ as N}from"./lodash-Zo30T2Bj.js";import{F as V}from"./FSButton-CMFttM_1.js";import{F as R}from"./FSDialog-CeQybluF.js";import{F as L,a as F}from"./FSMetaValue-C_SZsK6V.js";import{C as U}from"./base-B6WxqUqv.js";import{i as k}from"./datesTools-DpylUQoJ.js";import{C as A}from"./composableFactory-BJClBu0g.js";import{S as B}from"./serviceFactory-aQiBqOvf.js";import{u as x}from"./useDateFormat-B0N4tW_S.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as g}from"./FSCol-DIPgj7wU.js";import{_ as j}from"./FSRow-udQVJR1p.js";import{E as J}from"./applications-pqrfQrBX.js";import{P as K}from"./customProperties-DqkON8hk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-Bc_GnmK1.js";import"./FSCard-CoFTtRNJ.js";import"./useColors-CaMUbg8a.js";import"./index-_Z9wfsFC.js";import"./theme-CCooKRqg.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./VProgressCircular-DDVR-EZI.js";import"./color-6mal3hP4.js";import"./resizeObserver-C7qOORSR.js";import"./VIcon-beNtbbqt.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./FSIcon-Dy1KglKQ.js";import"./FSText-BvUMyUbP.js";import"./VDialog-CJ2sxo0Y.js";import"./VOverlay-CHXjpHsK.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-BirLikdP.js";import"./anchor-DiyvyHyx.js";import"./dimensions-CuS7VcMO.js";import"./display-Cs3Y1ygD.js";import"./scopeId-BQSHBqq_.js";import"./locale-BJmdjC_5.js";import"./router-C0dK7NvB.js";import"./transition-C13qRIR1.js";import"./VDefaultsProvider-oq6rnkoo.js";import"./useDateExpression-Byzx1oYE.js";import"./useAppTimeZone-CbCPkuif.js";import"./FSIconCheck-Dy8x6OBc.js";import"./useAppOrganisationId-oxTtWVij.js";import"./startOfWeek-uXTpkxA4.js";import"./uuid-DTaye2KM.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-D1PzUORY.js";import"./useTranslations-D4m4SVfo.js";class Y{constructor(t){p(this,"value");p(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?k(t.timestamp):null}}const G=(e,t,o)=>`${U()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,Q={...B.addCustom("getMany",(e,t,o,i)=>e.get(G(t,o,i)),e=>e.map(t=>new Y(t)))},W=A.custom(Q.getMany),M=I({name:"FSMetaHistory",components:{FSMetaValue:L,FSButton:V,FSDialog:R},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=x(),{fetch:o,entity:i}=W(),y=v(!1);return w(()=>e.entityId,async(d,m)=>{N.isEqual(d,m)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:i,dialog:y,epochToLongTimeFormat:t}}});function X(e,t,o,i,y,d){const m=l("FSText"),b=l("FSMetaValue"),_=l("FSDialog");return u(),c(f,null,[r(V,{prependIcon:"mdi-history",label:e.$tr("ui.common.history","History"),onClick:t[0]||(t[0]=a=>e.dialog=!e.dialog)},null,8,["label"]),r(_,{width:"500px",label:e.$tr("ui.common.history","History"),modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=a=>e.dialog=a)},{body:n(()=>[r(g,null,{default:n(()=>[(u(!0),c(f,null,$(e.customPropertyValues,(a,h)=>(u(),q(j,{key:h},{default:n(()=>[r(m,null,{default:n(()=>[H(D(e.epochToLongTimeFormat(a.timestamp)),1)]),_:2},1024),r(g,{padding:"0 8px 0 0",align:"center-right"},{default:n(()=>[r(b,{meta:{code:a.value},customProperty:e.$props.customProperty},null,8,["meta","customProperty"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["label","modelValue"])],64)}const P=z(M,[["render",X]]);M.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const et={title:"Foundation/Core/CustomProperties/MetaHistory",component:P,tags:["autodocs"],argTypes:{}},s={args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:K.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:F.MoreOrEqual,filterValues:["5"],color:"#0000FF"},{priority:2,filterType:F.MoreOrEqual,filterValues:["50"],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},entityId:"1",entityType:J.Model},render:e=>({components:{FSMetaHistory:P},setup(){return{args:e}},template:`
      <FSMetaHistory
        v-bind="args"
      />
    `})};var S,T,C;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    customProperty: {
      id: "1",
      code: "code",
      label: "Number",
      categoryLabel: "Category",
      index: 0,
      entity: 1,
      dataType: PropertyDataType.Number,
      readOnlyCore: false,
      readOnlyAdmin: false,
      defaultValue: "",
      history: false,
      historySize: 0,
      colorful: true,
      colorMap: [{
        priority: 1,
        filterType: FilterType.MoreOrEqual,
        filterValues: ["5"],
        color: "#0000FF"
      }, {
        priority: 2,
        filterType: FilterType.MoreOrEqual,
        filterValues: ["50"],
        color: "#FF0000"
      }],
      useOnlyAllowedValues: false,
      allowedValues: {}
    },
    entityId: "1",
    entityType: EntityType.Model
  },
  render: args => ({
    components: {
      FSMetaHistory
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSMetaHistory
        v-bind="args"
      />
    \`
  })
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const tt=["Default"];export{s as Default,tt as __namedExportsOrder,et as default};
