var O=Object.defineProperty;var I=(e,t,o)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var m=(e,t,o)=>I(e,typeof t!="symbol"?t+"":t,o);import{d as w,b as E,w as $,A as f,Q as r,C as n,F,G as l,H as u,R as q,z as H,I as k,J as v}from"./vue.esm-bundler-CUSnV4DE.js";import{_ as R}from"./lodash-BrWYvtk2.js";import{F as P}from"./FSButton-BTpAdEE5.js";import{F as N}from"./FSDialog-CDP3ltAg.js";import{F as L,a as g}from"./FSMetaValue-BLajH_o6.js";import{C as U}from"./base-DyefFz5t.js";import{i as D}from"./datesTools-DpylUQoJ.js";import{C as A}from"./composableFactory-DWA25NsU.js";import{S as x}from"./serviceFactory-B3o6Bvwt.js";import{u as B}from"./useDateFormat-D6A_WgCt.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as y}from"./FSCol-BQiFrdcO.js";import{_ as z}from"./FSRow-hpHYWcoJ.js";import{P as G}from"./customProperties-DqkON8hk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSClickable-Bn4xIsxH.js";import"./FSCard-BnVyMFnh.js";import"./useColors-CQZIO9RQ.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./css-BnRE2gle.js";import"./useBreakpoints-CQzBW1Q0.js";import"./VProgressCircular-BbyuaGSs.js";import"./color-CgsoZSKd.js";import"./resizeObserver-Hv1_IiVG.js";import"./VIcon-DeLOaNVc.js";import"./FSSpan-M9GEX7v6.js";import"./useSlots-CY84M1fx.js";import"./FSIcon-Cp7BQBW6.js";import"./FSText-CUkc4ADt.js";import"./VDialog-Co_Esry_.js";import"./VOverlay-BKGgaXLT.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-DaBGAliH.js";import"./anchor-MMgLgK3d.js";import"./dimensions-BI5CQRk1.js";import"./display-DbvBihXn.js";import"./scopeId-DP5cc-6o.js";import"./locale-DYN4KMd8.js";import"./router-C6XMMO7F.js";import"./transition-C81aHyit.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./useAppTimeZone-CYLIXU2i.js";import"./FSIconCheck-B0nL5Kj9.js";import"./useAppOrganisationId-D-BntkEj.js";import"./startOfWeek-uXTpkxA4.js";import"./uuid-DTaye2KM.js";import"./useAppLanguageCode-CV1UAuz5.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-D0SM0QeA.js";class J{constructor(t){m(this,"value");m(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?D(t.timestamp):null}}const Q=(e,t,o)=>`${U()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,Y={...x.addCustom("getMany",(e,t,o,i)=>e.get(Q(t,o,i)),e=>e.map(t=>new J(t)))},K=A.custom(Y.getMany),V=w({name:"FSMetaHistory",components:{FSMetaValue:L,FSButton:P,FSDialog:N},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=B(),{fetch:o,entity:i}=K(),c=E(!1);return $(()=>e.entityId,async(d,p)=>{R.isEqual(d,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:i,dialog:c,epochToLongTimeFormat:t}}});function W(e,t,o,i,c,d){const p=l("FSText"),b=l("FSMetaValue"),_=l("FSDialog");return u(),f(F,null,[r(P,{prependIcon:"mdi-history",label:e.$tr("ui.common.history","History"),onClick:t[0]||(t[0]=a=>e.dialog=!e.dialog)},null,8,["label"]),r(_,{width:"500px",label:e.$tr("ui.common.history","History"),modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=a=>e.dialog=a)},{body:n(()=>[r(y,null,{default:n(()=>[(u(!0),f(F,null,q(e.customPropertyValues,(a,h)=>(u(),H(z,{key:h},{default:n(()=>[r(p,null,{default:n(()=>[k(v(e.epochToLongTimeFormat(a.timestamp)),1)]),_:2},1024),r(y,{padding:"0 8px 0 0",align:"center-right"},{default:n(()=>[r(b,{meta:{code:a.value},customProperty:e.$props.customProperty},null,8,["meta","customProperty"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["label","modelValue"])],64)}const M=j(V,[["render",W]]);V.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const We={title:"Foundation/Core/CustomProperties/MetaHistory",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:G.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:g.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:g.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:M,FSCol:y},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSMetaHistory
        :customProperty="args.customProperty"
        :entityType="1"
        :entityId="'1'" />
    </FSCol>`})};var S,C,T;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
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
          filterValues: [5],
          color: "#0000FF"
        }, {
          priority: 2,
          filterType: FilterType.MoreOrEqual,
          filterValues: [50],
          color: "#FF0000"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMetaHistory,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSMetaHistory
        :customProperty="args.customProperty"
        :entityType="1"
        :entityId="'1'" />
    </FSCol>\`
  })
}`,...(T=(C=s.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const Xe=["Variations"];export{s as Variations,Xe as __namedExportsOrder,We as default};
