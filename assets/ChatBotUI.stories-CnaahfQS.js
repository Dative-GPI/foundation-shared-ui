import{a as c,b as l}from"./properties-Qw-O9fbT.js";import{C as e,F as o}from"./FSChatBotUI-vIv-ivOz.js";import{F as h}from"./FSCard-X6BL7IDn.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSSlideGroup-BKuLzJy_.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-B18MCpjl.js";import"./FSButton-B09KKB4j.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSText-DkgFU9ZB.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./useBreakpoints-Trboya0O.js";import"./useSlots-DEXetpJf.js";import"./FSSpan-CffnRYnX.js";import"./FSIcon-D-iWmbKS.js";import"./css-BA19cdxW.js";import"./VIcon-BPCLtKbp.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./icons-AciKn6XY.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./FSCol-ChYB2Oag.js";import"./FSRow-BTBqaZ3Z.js";import"./VProgressCircular-D014ccrC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./VSlideGroup-DLaaL0Lk.js";import"./index-C0WTB2TM.js";import"./display-RdUuPsY9.js";import"./goto-D2YfjHNt.js";import"./locale-MGWjZjXD.js";import"./proxiedModel-4bJ1saXA.js";import"./group-g6KFhHmW.js";import"./VSlideGroupItem-BNzWd0Zb.js";import"./FSMarkdown-Bee6sF61.js";import"./FSTextArea-Bax-O4jF.js";import"./FSBaseField-DjPNexk7.js";import"./useRules-eFcMZq7y.js";import"./VField-C_JZJuDz.js";import"./transition-Dqm8buww.js";import"./VLabel-DOSQu5RP.js";import"./VInput-CBXzUquC.js";import"./density-HajNgXBf.js";import"./dimensions-BuDdBtmf.js";import"./loader-DOKDD2NA.js";import"./VProgressLinear-DA0V-MGc.js";import"./anchor-C-rl7L3L.js";import"./rounded-BE8u9DAQ.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Cane1ZR3.js";import"./forwardRefs-C-GTDzx5.js";import"./index-D_7bL_IH.js";import"./FSFadeOut-DWR8A1ny.js";const va={title:"Shared/Components/ChatBot/ChatBotUI",component:o,tags:["autodocs"],argTypes:{...l([h],o),...c(o)}},a={render:d=>({components:{FSChatBotUI:o},setup(){return{args:d}},template:`
      <FSChatBotUI
        height="100%"
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{title:"How can I help you?",subtitle:"Ask a question about your devices or dashboards",placeholder:"Write a message...",modelValue:"",suggestions:[{icon:"mdi-view-dashboard-outline",title:"Create a dashboard",description:"Build a dashboard from your devices data",prompt:"Create a dashboard for my devices"},{icon:"mdi-chart-line",title:"Analyse a trend",description:"Explain the evolution of a measure over the last week",prompt:"Analyse the temperature trend of last week"}],events:[{type:e.UserMessage,content:"Create a dashboard for my devices",timestamp:0},{type:e.BotToolMessage,content:"Reading devices list",timestamp:1},{type:e.BotMessage,content:`Here is your dashboard, with:

- a **map** of your devices
- a chart of the last 7 days`,timestamp:2}]}},t={render:a.render,args:{...a.args,suggestions:[],events:[{type:e.UserMessage,content:`First line
Second line

Fourth line after an empty one`,timestamp:0},{type:e.UserMessage,content:"Can you check this link https://app.dative-gpi.com/organisations/dative/dashboards/0f8b6c2e-4d1a-4b7e-9c3f-8a2d5e6f7b1c?variables=temperature,humidity,pressure&range=last-7-days",timestamp:1},{type:e.UserMessage,content:"Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",timestamp:2}]}};var r,s,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSChatBotUI
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSChatBotUI
        height="100%"
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    title: "How can I help you?",
    subtitle: "Ask a question about your devices or dashboards",
    placeholder: "Write a message...",
    modelValue: "",
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
    }],
    events: [{
      type: ChatbotEventType.UserMessage,
      content: "Create a dashboard for my devices",
      timestamp: 0
    }, {
      type: ChatbotEventType.BotToolMessage,
      content: "Reading devices list",
      timestamp: 1
    }, {
      type: ChatbotEventType.BotMessage,
      content: "Here is your dashboard, with:\\n\\n- a **map** of your devices\\n- a chart of the last 7 days",
      timestamp: 2
    }]
  }
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    ...Default.args,
    suggestions: [],
    events: [{
      type: ChatbotEventType.UserMessage,
      content: "First line\\nSecond line\\n\\nFourth line after an empty one",
      timestamp: 0
    }, {
      type: ChatbotEventType.UserMessage,
      content: "Can you check this link https://app.dative-gpi.com/organisations/dative/dashboards/0f8b6c2e-4d1a-4b7e-9c3f-8a2d5e6f7b1c?variables=temperature,humidity,pressure&range=last-7-days",
      timestamp: 1
    }, {
      type: ChatbotEventType.UserMessage,
      content: "Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      timestamp: 2
    }]
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const fa=["Default","LongUserMessages"];export{a as Default,t as LongUserMessages,fa as __namedExportsOrder,va as default};
