var E=Object.defineProperty;var O=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var p=(e,t,o)=>O(e,typeof t!="symbol"?t+"":t,o);import{d as I,e as q,w as v,G as c,q as r,D as n,F as f,I as l,J as u,U as w,B as $,K as D,L as H}from"./vue.esm-bundler-D5n7z5qz.js";import{_ as L}from"./lodash-DyRFk5BS.js";import{F as V}from"./FSButton-Cpjx6pT4.js";import{F as N}from"./FSDialog-CKjLLSM2.js";import{F as R,a as F}from"./FSMetaValue-CVEfGS1d.js";import{C as U}from"./base-YMsHX0Is.js";import{i as k}from"./datesTools-DpylUQoJ.js";import{C as A}from"./composableFactory-zc0ZsFxC.js";import{S as B}from"./serviceFactory-DGf7dwWo.js";import{u as x}from"./useDateFormat-Be4eIA50.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as g}from"./FSCol-D_lbFmZy.js";import{_ as j}from"./FSRow-DIk8KFbG.js";import{E as G}from"./applications-pqrfQrBX.js";import{P as J}from"./customProperties-DqkON8hk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-CJ7Lhzl1.js";import"./useColors-BM_SKUZx.js";import"./theme-Cdiv_FYE.js";import"./useBreakpoints-CEzKC_o8.js";import"./useSlots-CoecqEnp.js";import"./FSIcon-BJsIM37h.js";import"./css-CxcvJboa.js";import"./VIcon-mGJe0MYK.js";import"./color-BW36qAym.js";import"./useRender-BcOya-6A.js";import"./icons-DR_vovBH.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./FSCard-DLunkI-x.js";import"./VProgressCircular-D6ZFUt0S.js";import"./resizeObserver-Z3fjh7Cv.js";import"./FSSpan-BN7wkmby.js";import"./VDialog-B2OpqrDi.js";import"./VOverlay-DHaepw21.js";import"./easing-DY7PVvcf.js";import"./proxiedModel-BPspb6XO.js";import"./anchor-CPKk15qm.js";import"./dimensions-B7sNhH2O.js";import"./display-D8bdLPBN.js";import"./lazy-C77w73YC.js";import"./locale-DKpA43KM.js";import"./router-BDiSnJ53.js";import"./scopeId-DC5duiFx.js";import"./transition-DbItRNv8.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./useDateExpression-VfhkHpOm.js";import"./useAppTimeZone-tx8M1w-h.js";import"./FSIconCheck-ZrXaqw_4.js";import"./useAppOrganisationId-CFu8M88R.js";import"./startOfWeek-uXTpkxA4.js";import"./uuid-DTaye2KM.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CWFK3Ooe.js";import"./useTranslations-CFCS6HA-.js";class K{constructor(t){p(this,"value");p(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?k(t.timestamp):null}}const Y=(e,t,o)=>`${U()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,Q={...B.addCustom("getMany",(e,t,o,i)=>e.get(Y(t,o,i)),e=>e.map(t=>new K(t)))},W=A.custom(Q.getMany),M=I({name:"FSMetaHistory",components:{FSMetaValue:R,FSButton:V,FSDialog:N},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=x(),{fetch:o,entity:i}=W(),y=q(!1);return v(()=>e.entityId,async(d,m)=>{L.isEqual(d,m)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:i,dialog:y,epochToLongTimeFormat:t}}});function X(e,t,o,i,y,d){const m=l("FSText"),_=l("FSMetaValue"),b=l("FSDialog");return u(),c(f,null,[r(V,{prependIcon:"mdi-history",label:e.$tr("ui.common.history","History"),onClick:t[0]||(t[0]=a=>e.dialog=!e.dialog)},null,8,["label"]),r(b,{width:"500px",label:e.$tr("ui.common.history","History"),modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=a=>e.dialog=a)},{body:n(()=>[r(g,null,{default:n(()=>[(u(!0),c(f,null,w(e.customPropertyValues,(a,h)=>(u(),$(j,{key:h},{default:n(()=>[r(m,null,{default:n(()=>[D(H(e.epochToLongTimeFormat(a.timestamp)),1)]),_:2},1024),r(g,{padding:"0 8px 0 0",align:"center-right"},{default:n(()=>[r(_,{meta:{code:a.value},customProperty:e.$props.customProperty},null,8,["meta","customProperty"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["label","modelValue"])],64)}const P=z(M,[["render",X]]);M.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const at={title:"Foundation/Core/CustomProperties/MetaHistory",component:P,tags:["autodocs"],argTypes:{}},s={args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:J.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:F.MoreOrEqual,filterValues:["5"],color:"#0000FF"},{priority:2,filterType:F.MoreOrEqual,filterValues:["50"],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},entityId:"1",entityType:G.Model},render:e=>({components:{FSMetaHistory:P},setup(){return{args:e}},template:`
      <FSMetaHistory
        v-bind="args"
      />
    `})};var T,S,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const nt=["Default"];export{s as Default,nt as __namedExportsOrder,at as default};
