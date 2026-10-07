import{_ as i}from"./FSBreadcrumbs-CK7Nik6e.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSSpan-CffnRYnX.js";import"./useBreakpoints-Trboya0O.js";import"./useSlots-DEXetpJf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIcon-D-iWmbKS.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./css-BA19cdxW.js";import"./VIcon-BPCLtKbp.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./icons-AciKn6XY.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./router-D2Xcou1T.js";import"./density-HajNgXBf.js";import"./rounded-BE8u9DAQ.js";import"./VDefaultsProvider-Cane1ZR3.js";const j={title:"Shared/Components/Breadcrumbs",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{items1:[{title:"First (clickable)",disabled:!1,to:"/first"},{title:"Second (disabled)",disabled:!0},{title:"Third (clickable)",disabled:!1,to:"/third"},{title:"Last (active)",disabled:!0}],items2:[{title:"First",disabled:!1,to:"/first"},{title:"Second",disabled:!0},{title:"Last with a really long name",disabled:!0}],items3:[{title:"First",disabled:!1,to:"/first"},{title:"Second with a really long name",disabled:!0},{title:"Last",disabled:!0}]}},render:(a,{argTypes:n})=>({components:{FSBreadcrumbs:i},props:Object.keys(n),setup(){return{...a}},template:`
        <Breadcrumbs :items="args.items1" />
        <Breadcrumbs :items="args.items2" />
        <Breadcrumbs :items="args.items3" />
    `})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const v=["Standard"];export{t as Standard,v as __namedExportsOrder,j as default};
