var O=Object.defineProperty;var I=(e,t,o)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var m=(e,t,o)=>I(e,typeof t!="symbol"?t+"":t,o);import{d as w,b as E,w as $,A as l,F as f,R as r,D as n,H as F,I as u,S as q,B as H,J as k,K as v}from"./vue.esm-bundler-CTTOvLCD.js";import{_ as R}from"./lodash-BrWYvtk2.js";import{F as P}from"./FSButton-B2X9DGvb.js";import{F as N}from"./FSDialog-B6Z2dUh0.js";import{F as D,a as g}from"./FSMetaValue-B4SEXHRV.js";import{C as L}from"./base-D9u3vc5Q.js";import{i as U}from"./datesTools-CNM18gr4.js";import{S as A}from"./serviceFactory-qtdw0UKd.js";import{C as B}from"./composableFactory-BcaJMM0w.js";import{u as x}from"./useDateFormat-Cunhon6k.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as y}from"./FSCol-BPr0jVzk.js";import{_ as z}from"./FSRow-C8EFLcn9.js";import{P as J}from"./customProperties-DqkON8hk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSClickable-DznopAj9.js";import"./FSCard-DxhVm8H0.js";import"./useColors-D7R-CyI7.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./css-D46r6e5F.js";import"./useBreakpoints-Bm7CjYdd.js";import"./VProgressCircular-it35si_v.js";import"./color-DTA1Qd0w.js";import"./resizeObserver-Bwa55KU2.js";import"./VIcon-DzkIKThE.js";import"./FSSpan-QNtf4e4q.js";import"./useSlots-NXmwCOLw.js";import"./FSIcon-yzGYQgqh.js";import"./FSText-zXSXSnZG.js";import"./VDialog-Cr2bmOLC.js";import"./VOverlay-Bysvo4NF.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-Da7OD98r.js";import"./anchor-KPAVzGxJ.js";import"./dimensions-DIR9-JzD.js";import"./display-BWFgSvI7.js";import"./scopeId-DGVhnfG2.js";import"./locale-Guk_W035.js";import"./router-SvtovJtL.js";import"./transition-C1y9a89u.js";import"./VDefaultsProvider-45AVpOQL.js";import"./useAppTimeZone-Cju-Nbag.js";import"./FSIconCheck-D0Y1Af0d.js";import"./useAppOrganisationId-DS-QKKZa.js";import"./startOfWeek-uXTpkxA4.js";import"./uuid-DTaye2KM.js";import"./useAppLanguageCode-DIMcCLwL.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-Dol6kQeQ.js";class K{constructor(t){m(this,"value");m(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?U(t.timestamp):null}}const Y=(e,t,o)=>`${L()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,G={...A.addCustom("getMany",(e,t,o,i)=>e.get(Y(t,o,i)),e=>e.map(t=>new K(t)))},Q=B.custom(G.getMany),V=w({name:"FSMetaHistory",components:{FSMetaValue:D,FSButton:P,FSDialog:N},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=x(),{fetch:o,entity:i}=Q(),c=E(!1);return $(()=>e.entityId,async(d,p)=>{R.isEqual(d,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:i,dialog:c,epochToLongTimeFormat:t}}});function W(e,t,o,i,c,d){const p=l("FSText"),b=l("FSMetaValue"),_=l("FSDialog");return u(),f(F,null,[r(P,{prependIcon:"mdi-history",label:e.$tr("ui.common.history","History"),onClick:t[0]||(t[0]=a=>e.dialog=!e.dialog)},null,8,["label"]),r(_,{width:"500px",label:e.$tr("ui.common.history","History"),modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=a=>e.dialog=a)},{body:n(()=>[r(y,null,{default:n(()=>[(u(!0),f(F,null,q(e.customPropertyValues,(a,h)=>(u(),H(z,{key:h},{default:n(()=>[r(p,null,{default:n(()=>[k(v(e.epochToLongTimeFormat(a.timestamp)),1)]),_:2},1024),r(y,{padding:"0 8px 0 0",align:"center-right"},{default:n(()=>[r(b,{meta:{code:a.value},customProperty:e.$props.customProperty},null,8,["meta","customProperty"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["label","modelValue"])],64)}const M=j(V,[["render",W]]);V.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const We={title:"Foundation/Core/CustomProperties/MetaHistory",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:J.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:g.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:g.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:M,FSCol:y},props:Object.keys(t),setup(){return{...e}},template:`
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
