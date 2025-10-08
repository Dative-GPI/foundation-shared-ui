var E=Object.defineProperty;var O=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var p=(e,t,o)=>O(e,typeof t!="symbol"?t+"":t,o);import{d as I,b as v,w,C as c,k as r,E as n,F as f,I as l,J as u,S as $,B as q,A as H,K as D}from"./vue.esm-bundler-CocPPKUI.js";import{_ as N}from"./lodash-Zo30T2Bj.js";import{F as V}from"./FSButton-VjwKfCr9.js";import{F as R}from"./FSDialog-Da78Hskl.js";import{F as L,a as F}from"./FSMetaValue-BLSkgYEf.js";import{C as U}from"./base-D6U4mRRi.js";import{i as k}from"./datesTools-DpylUQoJ.js";import{C as A}from"./composableFactory-DRFDSLtA.js";import{S as B}from"./serviceFactory-aQiBqOvf.js";import{u as x}from"./useDateFormat-DIxFAYu6.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as g}from"./FSCol-79-COv64.js";import{_ as j}from"./FSRow-BvJ7lU5E.js";import{E as J}from"./applications-pqrfQrBX.js";import{P as K}from"./customProperties-DqkON8hk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-6FPdriKA.js";import"./FSCard-JQNJPDhp.js";import"./useColors-DUufJJPH.js";import"./index-_Z9wfsFC.js";import"./theme-DhcBBMcp.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./VProgressCircular-BMkR7ln7.js";import"./color-yBCdco2I.js";import"./resizeObserver-QYhQJr79.js";import"./VIcon-Qz-Il978.js";import"./FSSpan-DrSEJIpr.js";import"./useSlots-D4bv69lA.js";import"./FSIcon-CKNHHVc2.js";import"./FSText-U805njuH.js";import"./VDialog-Cy-8Xjn8.js";import"./VOverlay-BofqjN94.js";import"./easing-DY7PVvcf.js";import"./proxiedModel-DvocDLKO.js";import"./anchor-C7UfIAXa.js";import"./dimensions-C9PuMYcl.js";import"./display-BmuJHlI4.js";import"./lazy-CpkO2kQj.js";import"./locale-_fONYh-8.js";import"./router-Btsphvl6.js";import"./scopeId-LQkRlG9f.js";import"./transition-BuKnRONq.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-Clc0K3gC.js";import"./useDateExpression-DXBXD926.js";import"./useAppTimeZone-CyFP2jUy.js";import"./FSIconCheck-CQm6Qfx8.js";import"./useAppOrganisationId-DacmST4-.js";import"./startOfWeek-uXTpkxA4.js";import"./uuid-DTaye2KM.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-yNRdweo3.js";import"./useTranslations-DJaIYmO0.js";class Y{constructor(t){p(this,"value");p(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?k(t.timestamp):null}}const G=(e,t,o)=>`${U()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,Q={...B.addCustom("getMany",(e,t,o,i)=>e.get(G(t,o,i)),e=>e.map(t=>new Y(t)))},W=A.custom(Q.getMany),M=I({name:"FSMetaHistory",components:{FSMetaValue:L,FSButton:V,FSDialog:R},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=x(),{fetch:o,entity:i}=W(),y=v(!1);return w(()=>e.entityId,async(d,m)=>{N.isEqual(d,m)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:i,dialog:y,epochToLongTimeFormat:t}}});function X(e,t,o,i,y,d){const m=l("FSText"),b=l("FSMetaValue"),_=l("FSDialog");return u(),c(f,null,[r(V,{prependIcon:"mdi-history",label:e.$tr("ui.common.history","History"),onClick:t[0]||(t[0]=a=>e.dialog=!e.dialog)},null,8,["label"]),r(_,{width:"500px",label:e.$tr("ui.common.history","History"),modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=a=>e.dialog=a)},{body:n(()=>[r(g,null,{default:n(()=>[(u(!0),c(f,null,$(e.customPropertyValues,(a,h)=>(u(),q(j,{key:h},{default:n(()=>[r(m,null,{default:n(()=>[H(D(e.epochToLongTimeFormat(a.timestamp)),1)]),_:2},1024),r(g,{padding:"0 8px 0 0",align:"center-right"},{default:n(()=>[r(b,{meta:{code:a.value},customProperty:e.$props.customProperty},null,8,["meta","customProperty"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["label","modelValue"])],64)}const P=z(M,[["render",X]]);M.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const ot={title:"Foundation/Core/CustomProperties/MetaHistory",component:P,tags:["autodocs"],argTypes:{}},s={args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:K.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:F.MoreOrEqual,filterValues:["5"],color:"#0000FF"},{priority:2,filterType:F.MoreOrEqual,filterValues:["50"],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},entityId:"1",entityType:J.Model},render:e=>({components:{FSMetaHistory:P},setup(){return{args:e}},template:`
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
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const rt=["Default"];export{s as Default,rt as __namedExportsOrder,ot as default};
