var E=Object.defineProperty;var O=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var p=(e,t,o)=>O(e,typeof t!="symbol"?t+"":t,o);import{d as I,b as v,w,A as c,P as r,C as n,F as f,G as l,H as u,Q as $,z as q,I as H,J as D}from"./vue.esm-bundler-PTWG9x2X.js";import{_ as N}from"./lodash-BrWYvtk2.js";import{F as V}from"./FSButton-YqGArPy2.js";import{F as R}from"./FSDialog-DdNYV5tn.js";import{F as L,a as F}from"./FSMetaValue-cYApfVSo.js";import{C as U}from"./base-BJ27TNVe.js";import{i as k}from"./datesTools-DpylUQoJ.js";import{C as A}from"./composableFactory-BVozujU4.js";import{S as x}from"./serviceFactory-B3o6Bvwt.js";import{u as B}from"./useDateFormat-BIFVETfU.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as g}from"./FSCol-qfATdd_b.js";import{_ as j}from"./FSRow-DPcQMiM9.js";import{E as G}from"./applications-pqrfQrBX.js";import{P as J}from"./customProperties-DqkON8hk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./FSClickable-TnS9e2Ej.js";import"./FSCard-DkDNRB06.js";import"./useColors-CHEA4ij4.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./css-B90wD3BD.js";import"./useBreakpoints-W7XGW48y.js";import"./VProgressCircular-eoxb555W.js";import"./color-CCpgnDIk.js";import"./resizeObserver-C17Kgm90.js";import"./VIcon-DIeegzqR.js";import"./FSSpan-yJEd2pn-.js";import"./useSlots-BG_ZhEqK.js";import"./FSIcon-Df5FR-8G.js";import"./FSText-CMVh5ns4.js";import"./VDialog-DW8Lwwmu.js";import"./VOverlay-CoK8W0Lk.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-CvHSoKPb.js";import"./anchor-BcF6JBj1.js";import"./dimensions-v18atrWI.js";import"./display-CESVul9-.js";import"./scopeId-CROTNdIb.js";import"./locale-Cz_4DTJh.js";import"./router-BQjY5_kj.js";import"./transition-QV8dDJB9.js";import"./VDefaultsProvider-aDgtYDKn.js";import"./useAppTimeZone-DyFwBRoB.js";import"./FSIconCheck-CvhFR3Ch.js";import"./useAppOrganisationId-CurthI5S.js";import"./startOfWeek-uXTpkxA4.js";import"./uuid-DTaye2KM.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-tS_QL_TH.js";import"./useTranslations-BnE68qER.js";class Q{constructor(t){p(this,"value");p(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?k(t.timestamp):null}}const Y=(e,t,o)=>`${U()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,K={...x.addCustom("getMany",(e,t,o,i)=>e.get(Y(t,o,i)),e=>e.map(t=>new Q(t)))},W=A.custom(K.getMany),M=I({name:"FSMetaHistory",components:{FSMetaValue:L,FSButton:V,FSDialog:R},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=B(),{fetch:o,entity:i}=W(),y=v(!1);return w(()=>e.entityId,async(d,m)=>{N.isEqual(d,m)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:i,dialog:y,epochToLongTimeFormat:t}}});function X(e,t,o,i,y,d){const m=l("FSText"),b=l("FSMetaValue"),_=l("FSDialog");return u(),c(f,null,[r(V,{prependIcon:"mdi-history",label:e.$tr("ui.common.history","History"),onClick:t[0]||(t[0]=a=>e.dialog=!e.dialog)},null,8,["label"]),r(_,{width:"500px",label:e.$tr("ui.common.history","History"),modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=a=>e.dialog=a)},{body:n(()=>[r(g,null,{default:n(()=>[(u(!0),c(f,null,$(e.customPropertyValues,(a,h)=>(u(),q(j,{key:h},{default:n(()=>[r(m,null,{default:n(()=>[H(D(e.epochToLongTimeFormat(a.timestamp)),1)]),_:2},1024),r(g,{padding:"0 8px 0 0",align:"center-right"},{default:n(()=>[r(b,{meta:{code:a.value},customProperty:e.$props.customProperty},null,8,["meta","customProperty"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["label","modelValue"])],64)}const P=z(M,[["render",X]]);M.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const Ze={title:"Foundation/Core/CustomProperties/MetaHistory",component:P,tags:["autodocs"],argTypes:{}},s={args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:J.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:F.MoreOrEqual,filterValues:["5"],color:"#0000FF"},{priority:2,filterType:F.MoreOrEqual,filterValues:["50"],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},entityId:"1",entityType:G.Model},render:e=>({components:{FSMetaHistory:P},setup(){return{args:e}},template:`
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
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const et=["Default"];export{s as Default,et as __namedExportsOrder,Ze as default};
