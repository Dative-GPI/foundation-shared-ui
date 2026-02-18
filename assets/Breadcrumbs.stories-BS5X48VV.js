import{_ as i}from"./FSBreadcrumbs-C7ZQoXwK.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSSpan-BN7wkmby.js";import"./useBreakpoints-CEzKC_o8.js";import"./useSlots-CoecqEnp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIcon-BJsIM37h.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./css-CxcvJboa.js";import"./VIcon-mGJe0MYK.js";import"./color-BW36qAym.js";import"./useRender-BcOya-6A.js";import"./icons-DR_vovBH.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./router-BDiSnJ53.js";import"./density-BnAGl-Nw.js";import"./rounded-lfTNxM9v.js";import"./VDefaultsProvider-6Z-RVAh9.js";const j={title:"Foundation/Shared/Breadcrumbs",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{items1:[{title:"First (clickable)",disabled:!1,to:"/first"},{title:"Second (disabled)",disabled:!0},{title:"Third (clickable)",disabled:!1,to:"/third"},{title:"Last (active)",disabled:!0}],items2:[{title:"First",disabled:!1,to:"/first"},{title:"Second",disabled:!0},{title:"Last with a really long name",disabled:!0}],items3:[{title:"First",disabled:!1,to:"/first"},{title:"Second with a really long name",disabled:!0},{title:"Last",disabled:!0}]}},render:(a,{argTypes:n})=>({components:{FSBreadcrumbs:i},props:Object.keys(n),setup(){return{...a}},template:`
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
