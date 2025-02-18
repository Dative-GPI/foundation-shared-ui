var O=Object.defineProperty;var I=(e,t,o)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var m=(e,t,o)=>I(e,typeof t!="symbol"?t+"":t,o);import{d as w,b as E,w as $,B as f,R as r,D as n,G as F,H as l,I as u,S as q,A as H,J as k,K as v}from"./vue.esm-bundler-BD3cPSox.js";import{_ as R}from"./lodash-BrWYvtk2.js";import{F as P}from"./FSButton-CQA40iQ2.js";import{F as N}from"./FSDialog-C1cJlOKs.js";import{F as D,a as g}from"./FSMetaValue-DoAACclv.js";import{C as L}from"./base-Dl3FgNgM.js";import{i as U}from"./datesTools-DpylUQoJ.js";import{C as A}from"./composableFactory-uBEY979O.js";import{S as B}from"./serviceFactory-B3o6Bvwt.js";import{u as x}from"./useDateFormat-CAYs4N6A.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as y}from"./FSCol-C9a7BKGp.js";import{_ as z}from"./FSRow-CopwEayK.js";import{P as G}from"./customProperties-DqkON8hk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSRouterLink-_G3m0SRF.js";import"./vue-router-Ds_E4c-X.js";import"./FSClickable-BsEc8iHI.js";import"./FSCard-DOwp-V9l.js";import"./useColors-Cu9vf_Ix.js";import"./index-DfSX31J9.js";import"./theme-B93wSOzC.js";import"./css-CmnfRCoE.js";import"./useBreakpoints-CnZdRDE7.js";import"./VProgressCircular-Ca7Fp11Q.js";import"./color-DAd2dJIE.js";import"./resizeObserver-BdS48m16.js";import"./VIcon-ef9P0Odv.js";import"./FSSpan-CqHf-ny6.js";import"./useSlots-DhthX9xh.js";import"./FSIcon-BikiybNc.js";import"./FSText-uZOTHeSC.js";import"./VDialog-BLZ0rQaD.js";import"./VOverlay-D-tSP_Gg.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-JzK6JHhO.js";import"./anchor-Ce3a1Oj_.js";import"./dimensions-DbGEEU80.js";import"./display-D74v7vg7.js";import"./scopeId-CdDRBDvT.js";import"./locale-Cg0C6Moy.js";import"./router-BdSI2seK.js";import"./transition-BVEL_Cnv.js";import"./VDefaultsProvider-rHrX99un.js";import"./useAppTimeZone-Bsw9evvF.js";import"./FSIconCheck-C2EvnRE_.js";import"./useAppOrganisationId-C1bzpuv9.js";import"./startOfWeek-uXTpkxA4.js";import"./uuid-DTaye2KM.js";import"./useAppLanguageCode-DTCWF4CX.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-aJtH5CGl.js";class J{constructor(t){m(this,"value");m(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?U(t.timestamp):null}}const K=(e,t,o)=>`${L()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,Y={...B.addCustom("getMany",(e,t,o,i)=>e.get(K(t,o,i)),e=>e.map(t=>new J(t)))},Q=A.custom(Y.getMany),V=w({name:"FSMetaHistory",components:{FSMetaValue:D,FSButton:P,FSDialog:N},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=x(),{fetch:o,entity:i}=Q(),c=E(!1);return $(()=>e.entityId,async(d,p)=>{R.isEqual(d,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:i,dialog:c,epochToLongTimeFormat:t}}});function W(e,t,o,i,c,d){const p=l("FSText"),b=l("FSMetaValue"),_=l("FSDialog");return u(),f(F,null,[r(P,{prependIcon:"mdi-history",label:e.$tr("ui.common.history","History"),onClick:t[0]||(t[0]=a=>e.dialog=!e.dialog)},null,8,["label"]),r(_,{width:"500px",label:e.$tr("ui.common.history","History"),modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=a=>e.dialog=a)},{body:n(()=>[r(y,null,{default:n(()=>[(u(!0),f(F,null,q(e.customPropertyValues,(a,h)=>(u(),H(z,{key:h},{default:n(()=>[r(p,null,{default:n(()=>[k(v(e.epochToLongTimeFormat(a.timestamp)),1)]),_:2},1024),r(y,{padding:"0 8px 0 0",align:"center-right"},{default:n(()=>[r(b,{meta:{code:a.value},customProperty:e.$props.customProperty},null,8,["meta","customProperty"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["label","modelValue"])],64)}const M=j(V,[["render",W]]);V.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const We={title:"Foundation/Core/CustomProperties/MetaHistory",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:G.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:g.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:g.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:M,FSCol:y},props:Object.keys(t),setup(){return{...e}},template:`
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
