import{_ as i}from"./FSBreadcrumbs-BsgwtEmR.js";import"./vue.esm-bundler-CC_jVOJ5.js";import"./FSSpan-DkNsO5wd.js";import"./useBreakpoints-BMcJFLA8.js";import"./useSlots-C8jkAuOW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIcon-CeLDRxMK.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./css-DTGEi_Ca.js";import"./VIcon-BOLLMMm0.js";import"./color-BM2dSUAO.js";import"./router-kuDvkEMM.js";import"./density-mssFUWH2.js";import"./rounded-Cy4gG01O.js";import"./VDefaultsProvider-CuIagDb9.js";const _={title:"Foundation/Shared/Breadcrumbs",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{items1:[{title:"First (clickable)",disabled:!1,to:"/first"},{title:"Second (disabled)",disabled:!0},{title:"Third (clickable)",disabled:!1,to:"/third"},{title:"Last (active)",disabled:!0}],items2:[{title:"First",disabled:!1,to:"/first"},{title:"Second",disabled:!0},{title:"Last with a really long name",disabled:!0}],items3:[{title:"First",disabled:!1,to:"/first"},{title:"Second with a really long name",disabled:!0},{title:"Last",disabled:!0}]}},render:(a,{argTypes:n})=>({components:{FSBreadcrumbs:i},props:Object.keys(n),setup(){return{...a}},template:`
        <Breadcrumbs :items="args.items1" />
        <Breadcrumbs :items="args.items2" />
        <Breadcrumbs :items="args.items3" />
    `})};var e,s,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    args: {
      items1: [{
        title: "First (clickable)",
        disabled: false,
        to: "/first"
      }, {
        title: "Second (disabled)",
        disabled: true
      }, {
        title: "Third (clickable)",
        disabled: false,
        to: "/third"
      }, {
        title: "Last (active)",
        disabled: true
      }],
      items2: [{
        title: "First",
        disabled: false,
        to: "/first"
      }, {
        title: "Second",
        disabled: true
      }, {
        title: "Last with a really long name",
        disabled: true
      }],
      items3: [{
        title: "First",
        disabled: false,
        to: "/first"
      }, {
        title: "Second with a really long name",
        disabled: true
      }, {
        title: "Last",
        disabled: true
      }]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSBreadcrumbs
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
        <Breadcrumbs :items="args.items1" />
        <Breadcrumbs :items="args.items2" />
        <Breadcrumbs :items="args.items3" />
    \`
  })
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const w=["Standard"];export{t as Standard,w as __namedExportsOrder,_ as default};
