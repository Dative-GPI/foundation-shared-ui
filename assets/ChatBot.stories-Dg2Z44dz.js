import{a as ae,b as ne}from"./properties-Qw-O9fbT.js";import{o as T,C as B}from"./axiosmock-0oUsrt-o.js";import"./groupings.mock-D2vmqk8O.js";import{F as p}from"./FSRow-BTBqaZ3Z.js";import{d as Y,e as K,c as X,M as S,E as y,H as o,k as r,N as w,O as $,K as j,m as J,L as s,o as ie,G as se,X as me,S as D,U,V}from"./vue.esm-bundler-NVdFPFZB.js";import{F as ue}from"./FSDialog-BBto5ZX2.js";import{F}from"./FSButton-B09KKB4j.js";import{F as Q,C as m}from"./FSChatBotUI-vIv-ivOz.js";import{F as Z}from"./FSCol-ChYB2Oag.js";import{F as le}from"./FSCard-X6BL7IDn.js";import{F as de}from"./FSMenu-BQ9x-9Vx.js";import{F as pe}from"./FSText-DkgFU9ZB.js";import{F as ce}from"./FSProgressBar-BaBPuO-u.js";import{F as he}from"./FSProgressCircle-C6YV-L7T.js";import{u as ge}from"./useDateFormat-BKFE7Nxu.js";import{C as _}from"./useColors-CPKx0SIo.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as fe,u as Ce}from"./FSDialogChatBotUsageLimitBody-CWihjpSn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./dashboardExplorerElements-DYv8N40y.js";import"./subgroupings.mock-Dekau2o5.js";import"./deviceExplorerElements-CvVd83_5.js";import"./css-BA19cdxW.js";import"./useBreakpoints-Trboya0O.js";import"./VDialog-D_wwtbpx.js";import"./VOverlay-flKIXg07.js";import"./proxiedModel-4bJ1saXA.js";import"./theme-CHZNEzUD.js";import"./easing-DY7PVvcf.js";import"./anchor-C-rl7L3L.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./dimensions-BuDdBtmf.js";import"./display-RdUuPsY9.js";import"./lazy-D5C5Y6_6.js";import"./locale-MGWjZjXD.js";import"./router-D2Xcou1T.js";import"./scopeId-CVBASNvj.js";import"./transition-Dqm8buww.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Y-HqWA1J.js";import"./VDefaultsProvider-Cane1ZR3.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSSpan-CffnRYnX.js";import"./useSlots-DEXetpJf.js";import"./FSIcon-D-iWmbKS.js";import"./VIcon-BPCLtKbp.js";import"./icons-AciKn6XY.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./VProgressCircular-D014ccrC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./FSSlideGroup-BKuLzJy_.js";import"./FSButtonNextIcon-B18MCpjl.js";import"./VSlideGroup-DLaaL0Lk.js";import"./index-C0WTB2TM.js";import"./goto-D2YfjHNt.js";import"./group-g6KFhHmW.js";import"./VSlideGroupItem-BNzWd0Zb.js";import"./FSMarkdown-Bee6sF61.js";import"./FSTextArea-Bax-O4jF.js";import"./FSBaseField-DjPNexk7.js";import"./useRules-eFcMZq7y.js";import"./VField-C_JZJuDz.js";import"./VLabel-DOSQu5RP.js";import"./VInput-CBXzUquC.js";import"./density-HajNgXBf.js";import"./loader-DOKDD2NA.js";import"./VProgressLinear-DA0V-MGc.js";import"./rounded-BE8u9DAQ.js";import"./index-D_7bL_IH.js";import"./FSFadeOut-DWR8A1ny.js";import"./VMenu-DfiSs3vJ.js";import"./useTranslations-D5uJM3hx.js";import"./useAppLanguageCode-CFDnQcKu.js";import"./useAppTimeZone-CjwINmn2.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./composableFactory-C8uMcJZX.js";import"./base-CxE7IGU1.js";import"./useAppOrganisationId-DLYVMJh2.js";const ee=Y({name:"FSChatbotUsageMenu",components:{FSCol:Z,FSRow:p,FSCard:le,FSMenu:de,FSText:pe,FSButton:F,FSProgressBar:ce,FSProgressCircle:he},props:{usageAmount:{type:Number,required:!0,default:0},totalAuthorizedAmount:{type:Number,required:!0,default:0},periodStart:{type:Number,required:!1,default:null}},emits:["click:ask-for-authorization"],setup(e){const{epochToMonthYearOnlyFormat:t}=ge(),u=K(!1),l=X(()=>e.totalAuthorizedAmount?e.usageAmount/e.totalAuthorizedAmount:0);return{menu:u,usageRate:l,ColorEnum:_,epochToMonthYearOnlyFormat:t}}});function be(e,t,u,l,oe,re){const v=s("FSProgressCircle"),d=s("FSText"),A=s("FSProgressBar"),k=s("FSCard"),i=s("FSMenu");return S(),y(i,{modelValue:e.menu,"onUpdate:modelValue":t[1]||(t[1]=a=>e.menu=a)},{activator:o(({props:a})=>[r(v,J(a,{padding:"4px",modelValue:e.usageRate,startColor:e.ColorEnum.Primary,endColor:e.ColorEnum.Primary,showValue:!1,thickness:"2.5px",size:"18px",style:{cursor:"pointer"}}),null,16,["modelValue","startColor","endColor"])]),default:o(()=>[r(k,{width:"320px",padding:"16px"},{default:o(()=>[r(Z,{gap:"12px"},{default:o(()=>[r(p,null,{default:o(()=>[r(p,null,{default:o(()=>[r(d,{font:"text-button"},{default:o(()=>[w($(e.$tr("ui.chatbot.usage","AI Credits")),1)]),_:1})]),_:1}),r(p,{width:"hug"},{default:o(()=>[r(d,{font:"text-overline"},{default:o(()=>[w($(e.epochToMonthYearOnlyFormat(e.$props.periodStart??Date.now())),1)]),_:1})]),_:1})]),_:1}),r(A,{modelValue:e.usageRate,startColor:e.ColorEnum.Primary,endColor:e.ColorEnum.Primary},null,8,["modelValue","startColor","endColor"]),e.$props.usageAmount!==void 0&&e.$props.totalAuthorizedAmount?(S(),y(d,{key:0,font:"text-body"},{default:o(()=>[w($(e.$tr("ui.chatbot.usage-amount","{0}€ used out of {1}€ this month",e.$props.usageAmount,e.$props.totalAuthorizedAmount)),1)]),_:1})):j("",!0),r(F,{width:"100%",label:e.$tr("ui.chatbot.ask-for-authorization","Ask for more credits"),onClick:t[0]||(t[0]=a=>e.$emit("click:ask-for-authorization"))},null,8,["label"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}const Se=x(ee,[["render",be]]);ee.__docgenInfo={displayName:"FSChatbotUsageMenu",exportName:"default",description:"",tags:{},props:[{name:"usageAmount",type:{name:"number"},required:!0,defaultValue:{func:!1,value:"0"}},{name:"totalAuthorizedAmount",type:{name:"number"},required:!0,defaultValue:{func:!1,value:"0"}},{name:"periodStart",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"click:ask-for-authorization"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/chatbot/FSChatbotUsageMenu.vue"]};const te=Y({name:"FSChatBot",components:{FSButton:F,FSDialog:ue,FSChatBotUI:Q,FSChatbotUsageMenu:Se,FSDialogChatBotUsageLimitBody:fe},inheritAttrs:!1,props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},placeholder:{type:String,required:!0},modelValue:{type:String,required:!1}},emits:["click:ask-for-authorization","submit","update:modelValue"],setup(){const{fetch:e,entity:t}=Ce(),u=K(!1),l=X(()=>!!t.value&&t.value.remaining<=0);return ie(()=>{e()}),{ColorEnum:_,chatBudget:t,budgetDialog:u,outOfCredits:l}}});function ye(e,t,u,l,oe,re){const v=s("FSChatbotUsageMenu"),d=s("FSDialogChatBotUsageLimitBody"),A=s("FSDialog"),k=s("FSChatBotUI");return S(),y(k,J({title:e.$props.title,subtitle:e.$props.subtitle,placeholder:e.$props.placeholder,modelValue:e.$props.modelValue,disableSubmit:e.outOfCredits,onSubmit:t[5]||(t[5]=i=>e.$emit("submit",i)),"onUpdate:modelValue":t[6]||(t[6]=i=>e.$emit("update:modelValue",i))},e.$attrs),se({"append-inner":o(()=>{var i,a,c;return[r(v,{usageAmount:((i=e.chatBudget)==null?void 0:i.consumed)??0,totalAuthorizedAmount:((a=e.chatBudget)==null?void 0:a.monthlyLimit)??0,periodStart:(c=e.chatBudget)==null?void 0:c.periodStart,"onClick:askForAuthorization":t[0]||(t[0]=h=>e.$emit("click:ask-for-authorization"))},null,8,["usageAmount","totalAuthorizedAmount","periodStart"]),e.outOfCredits?(S(),y(F,{key:0,color:e.ColorEnum.Primary,label:e.$tr("ui.chatbot.ask-for-authorization","Ask for more credits"),onClick:t[1]||(t[1]=()=>e.budgetDialog=!0)},null,8,["color","label"])):j("",!0),D(e.$slots,"append-inner",U(V({dialog:e.budgetDialog})),()=>[r(A,{modelValue:e.budgetDialog,"onUpdate:modelValue":t[4]||(t[4]=h=>e.budgetDialog=h),width:"648",title:e.$tr("ui.chatbot.usage","AI Credits")},{body:o(()=>[r(d,{"onClick:cancel":t[2]||(t[2]=h=>e.budgetDialog=!1),"onClick:askForAuthorization":t[3]||(t[3]=h=>e.$emit("click:ask-for-authorization"))})]),_:1},8,["modelValue","title"])])]}),_:2},[me(e.$slots,(i,a)=>({name:a,fn:o(c=>[D(e.$slots,a,U(V(c)))])}))]),1040,["title","subtitle","placeholder","modelValue","disableSubmit"])}const b=x(te,[["render",ye]]);te.__docgenInfo={displayName:"FSChatBot",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"subtitle",type:{name:"string"},required:!0},{name:"placeholder",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"string"},required:!1}],events:[{name:"submit"},{name:"update:modelValue"},{name:"click:ask-for-authorization"}],slots:[{name:"append-inner",scoped:!0,bindings:[{name:"dialog",title:"binding"}]},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/chatbot/FSChatBot.vue"]};const to={title:"Core/Components/ChatBot",component:b,tags:["autodocs"],argTypes:{...ne([Q],b),...ae(b)}},n={render:e=>({components:{FSChatBot:b,FSRow:p},setup(){return{args:e}},template:`
      <FSRow
        height="100%"
        width="100%"
        align="center-center"
      >
        <FSChatBot
          height="100%"
          v-model="args.modelValue"
          v-bind="args"
        />
      </FSRow>
    `}),args:{title:"How can I help you?",subtitle:"Ask a question about your devices or dashboards",placeholder:"Write a message...",modelValue:""}},g={render:n.render,args:{...n.args,events:[],suggestions:[{icon:"mdi-view-dashboard-outline",title:"Create a dashboard",description:"Build a dashboard from your devices data",prompt:"Create a dashboard for my devices"},{icon:"mdi-chart-line",title:"Analyse a trend",description:"Explain the evolution of a measure over the last week",prompt:"Analyse the temperature trend of last week"},{icon:"mdi-alert-outline",title:"Review alerts",description:"Summarize the alerts raised in the last 24 hours with a description that is a real book because of its length",prompt:"Summarize the alerts of the last 24 hours"},{icon:"mdi-map-marker-outline",title:"Locate devices",description:"Find the devices that went offline today",prompt:"Which devices went offline today?"}]}},Fe=[{type:m.UserMessage,content:"Which devices had a temperature above 30°C this week?"},{type:m.BotToolMessage,content:"Reading devices list"},{type:m.BotToolMessage,content:"Fetching temperature data"},{type:m.BotMessage,content:`Three devices exceeded **30°C** this week:

- **Boiler room** — 34.2°C on Tuesday
- **Warehouse B** — 31.8°C on Wednesday
- **Roof sensor** — 30.4°C on Friday

Do you want me to create an alert for these devices?`},{type:m.UserMessage,content:"Yes, create an alert when the temperature goes above 32°C."},{type:m.BotToolMessage,content:"Creating alert"},{type:m.BotMessage,content:"Done! The alert **High temperature** is now active on the 3 devices. You will be notified by email."}],f={render:n.render,args:{...n.args,events:Array.from({length:10},()=>Fe).flat().map((e,t)=>({...e,timestamp:t}))}},R="/api/foundation/core/v1/organisations/dative/chat-budgets/current",C={render:n.render,args:n.args,beforeEach:()=>(T(R,{...B,consumed:B.monthlyLimit,remaining:0}),()=>T(R,B))};var E,z,M;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSChatBot,
      FSRow
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSRow
        height="100%"
        width="100%"
        align="center-center"
      >
        <FSChatBot
          height="100%"
          v-model="args.modelValue"
          v-bind="args"
        />
      </FSRow>
    \`
  }),
  args: {
    title: "How can I help you?",
    subtitle: "Ask a question about your devices or dashboards",
    placeholder: "Write a message...",
    modelValue: ""
  }
}`,...(M=(z=n.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var q,L,N;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    ...Default.args,
    events: [],
    suggestions: [{
      icon: "mdi-view-dashboard-outline",
      title: "Create a dashboard",
      description: "Build a dashboard from your devices data",
      prompt: "Create a dashboard for my devices"
    }, {
      icon: "mdi-chart-line",
      title: "Analyse a trend",
      description: "Explain the evolution of a measure over the last week",
      prompt: "Analyse the temperature trend of last week"
    }, {
      icon: "mdi-alert-outline",
      title: "Review alerts",
      description: "Summarize the alerts raised in the last 24 hours with a description that is a real book because of its length",
      prompt: "Summarize the alerts of the last 24 hours"
    }, {
      icon: "mdi-map-marker-outline",
      title: "Locate devices",
      description: "Find the devices that went offline today",
      prompt: "Which devices went offline today?"
    }]
  }
}`,...(N=(L=g.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var P,W,G;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    ...Default.args,
    events: Array.from({
      length: 10
    }, () => exchange).flat().map((event, index) => ({
      ...event,
      timestamp: index
    })) as ChatbotEvent[]
  }
}`,...(G=(W=f.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var H,O,I;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: Default.render,
  args: Default.args,
  beforeEach: () => {
    onGetWithRegex(CHAT_BUDGET_URL, {
      ...CURRENT_CHATBUDGET,
      consumed: CURRENT_CHATBUDGET.monthlyLimit,
      remaining: 0
    });
    return () => onGetWithRegex(CHAT_BUDGET_URL, CURRENT_CHATBUDGET);
  }
}`,...(I=(O=C.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};const oo=["Default","WithSuggestions","LongConversation","OutOfCredits"];export{n as Default,f as LongConversation,C as OutOfCredits,g as WithSuggestions,oo as __namedExportsOrder,to as default};
