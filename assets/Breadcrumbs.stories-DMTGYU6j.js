import{_ as i}from"./FSBreadcrumbs-qL-rtvMO.js";import"./vue.esm-bundler-B9lxvfDw.js";import"./FSSpan-COYXSDbp.js";import"./useBreakpoints-Dc84uxeD.js";import"./useSlots-BioZKQqg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIcon-kCffLiJ2.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./css-BHrR5cp2.js";import"./VIcon-DPcX_RaC.js";import"./color-CLtf7Qrc.js";import"./useRender-DM2jvMPN.js";import"./icons-B5bBvhw0.js";import"./router-BlaQ2-ft.js";import"./density-DvMOIaQw.js";import"./rounded-BrvRf1BO.js";import"./VDefaultsProvider-BurwYF19.js";const w={title:"Foundation/Shared/Breadcrumbs",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{items1:[{title:"First (clickable)",disabled:!1,to:"/first"},{title:"Second (disabled)",disabled:!0},{title:"Third (clickable)",disabled:!1,to:"/third"},{title:"Last (active)",disabled:!0}],items2:[{title:"First",disabled:!1,to:"/first"},{title:"Second",disabled:!0},{title:"Last with a really long name",disabled:!0}],items3:[{title:"First",disabled:!1,to:"/first"},{title:"Second with a really long name",disabled:!0},{title:"Last",disabled:!0}]}},render:(a,{argTypes:n})=>({components:{FSBreadcrumbs:i},props:Object.keys(n),setup(){return{...a}},template:`
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
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const O=["Standard"];export{t as Standard,O as __namedExportsOrder,w as default};
