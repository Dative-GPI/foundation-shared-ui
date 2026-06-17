var O=Object.defineProperty;var _=(e,t,o)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var p=(e,t,o)=>_(e,typeof t!="symbol"?t+"":t,o);import{d as I,e as v,w,J as c,k as r,H as n,F as f,L as l,M as u,X as $,E as q,N as H,O as N}from"./vue.esm-bundler-C5-CUMHT.js";import{_ as D}from"./eventQueue-D85hWBFd.js";import{F as M}from"./FSButton-DohpVEzP.js";import{F as L}from"./FSDialog-BXShlDnV.js";import{F as R,a as F}from"./FSMetaValue-0K0R-BuY.js";import{u as U}from"./useDateFormat-D3hpfVqH.js";import{C as k}from"./composableFactory-Cxup7bUM.js";import{S as A}from"./serviceFactory-DI_gyWBF.js";import{C as x}from"./base-BFVjoMA-.js";import{i as B}from"./datesTools-DpylUQoJ.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as g}from"./FSCol-DedFW0nl.js";import{F as j}from"./FSRow-C8aYwBu-.js";import{E as J}from"./applications-WAjZkOx7.js";import{P as X}from"./customProperties-DqkON8hk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./uuid-DTaye2KM.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./FSText-C8rmUTxK.js";import"./useColors-BAnxS_-e.js";import"./theme-CB6As9Cd.js";import"./useBreakpoints-pPMhsL5T.js";import"./useSlots-ol4Nk6ew.js";import"./FSSpan-D6aG51_c.js";import"./FSIcon-CNpmwcOd.js";import"./css-DSFbdPon.js";import"./VIcon-IlEzlDWp.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./icons-CucLNLjN.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSCard-DYe1QD8j.js";import"./VProgressCircular-D7Gk7a1O.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./VDialog-CSacG24V.js";import"./VOverlay-CG3iG1zZ.js";import"./proxiedModel-CV-HTW34.js";import"./easing-DY7PVvcf.js";import"./anchor-Dj2AEc5N.js";import"./dimensions-Bm76csmg.js";import"./display-IUfV935l.js";import"./lazy-DXVvciW4.js";import"./locale-BNkeanE6.js";import"./router-CTGX-puL.js";import"./scopeId-DKs4U9S0.js";import"./transition-CgRUW3r8.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DRDndVEC.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./useDateExpression-DhMGXbh8.js";import"./useAppTimeZone-s1RlKu8w.js";import"./FSIconCheck-CHC00Pxg.js";import"./useTranslations-DAi7IZoP.js";import"./useAppLanguageCode-CembXc6P.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppOrganisationId-CSdtG-as.js";class Y{constructor(t){p(this,"value");p(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?B(t.timestamp):null}}const G=(e,t,o)=>`${x()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,K={...A.addCustom("getMany",(e,t,o,i)=>e.get(G(t,o,i)),e=>e.map(t=>new Y(t)))},Q=k.custom(K.getMany),V=I({name:"FSMetaHistory",components:{FSMetaValue:R,FSButton:M,FSDialog:L},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=U(),{fetch:o,entity:i}=Q(),y=v(!1);return w(()=>e.entityId,async(d,m)=>{D.isEqual(d,m)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:i,dialog:y,epochToLongTimeFormat:t}}});function W(e,t,o,i,y,d){const m=l("FSText"),b=l("FSMetaValue"),h=l("FSDialog");return u(),c(f,null,[r(M,{prependIcon:"mdi-history",label:e.$tr("ui.common.history","History"),onClick:t[0]||(t[0]=a=>e.dialog=!e.dialog)},null,8,["label"]),r(h,{width:"500px",label:e.$tr("ui.common.history","History"),modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=a=>e.dialog=a)},{body:n(()=>[r(g,null,{default:n(()=>[(u(!0),c(f,null,$(e.customPropertyValues,(a,E)=>(u(),q(j,{key:E},{default:n(()=>[r(m,null,{default:n(()=>[H(N(e.epochToLongTimeFormat(a.timestamp)),1)]),_:2},1024),r(g,{padding:"0 8px 0 0",align:"center-right"},{default:n(()=>[r(b,{meta:{code:a.value},customProperty:e.$props.customProperty},null,8,["meta","customProperty"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["label","modelValue"])],64)}const P=z(V,[["render",W]]);V.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const it={title:"Core/Components/CustomProperties/MetaHistory",component:P,tags:["autodocs"],argTypes:{}},s={args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:X.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:F.MoreOrEqual,filterValues:["5"],color:"#0000FF"},{priority:2,filterType:F.MoreOrEqual,filterValues:["50"],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},entityId:"1",entityType:J.Model},render:e=>({components:{FSMetaHistory:P},setup(){return{args:e}},template:`
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
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const st=["Default"];export{s as Default,st as __namedExportsOrder,it as default};
