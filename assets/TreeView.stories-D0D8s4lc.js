import{F as o}from"./FSTreeView-JZgx-W9a.js";import{F as m}from"./FSIcon-BJsIM37h.js";import{F as a}from"./FSCol-D_lbFmZy.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSLoader-Cl8hDT8j.js";import"./useBreakpoints-CEzKC_o8.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./css-CxcvJboa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-BW36qAym.js";import"./dimensions-B7sNhH2O.js";import"./elevation-JukLG-n6.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./useRender-BcOya-6A.js";import"./VList-DlQk11w2.js";import"./index-6jMyctoo.js";import"./icons-DR_vovBH.js";import"./ssrBoot-C79LbZhX.js";import"./tag-BOR-k4cz.js";import"./transition-DbItRNv8.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./variant-j8rFA7nZ.js";import"./density-BnAGl-Nw.js";import"./rounded-lfTNxM9v.js";import"./router-BDiSnJ53.js";import"./index-BYo1BiTt.js";import"./size-CaXETvDn.js";import"./VImg-BlUyfKKc.js";import"./index-BKpPdzm5.js";import"./VIcon-mGJe0MYK.js";import"./VDivider-Yc-HesXU.js";import"./VBtn--7NXzl5z.js";import"./group-BRhJCq_i.js";import"./loader-COXi3ZW_.js";import"./VProgressCircular-D6ZFUt0S.js";import"./resizeObserver-Z3fjh7Cv.js";import"./anchor-CPKk15qm.js";import"./VCheckboxBtn-t5XcVMJr.js";import"./VSelectionControl-SdigZO9B.js";import"./VLabel-D-9L6eJP.js";import"./filter-DlYw_aWm.js";const $={title:"Foundation/Shared/TreeView",component:o,tags:["autodocs"],argTypes:{}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",icon:"mdi-folder",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(n,{argTypes:p})=>({components:{FSTreeView:o,FSCol:a,FSIcon:m},props:Object.keys(p),setup(){return{...n}},template:`
    <FSCol>
      <FSTreeView
        width="100%"
        :items="args.items"

      >
        <template
          #prepend="{ item }"
        >
          <FSIcon :icon="item.icon" />
        </template>
      </FSTreeView>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeView
        :items="args.items"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeView
        :items="args.items"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeView
        :items="args.items"
      />
    </FSCol>`})};var t,r,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        id: 0,
        label: "Group 1",
        icon: "mdi-account"
      }, {
        id: 1,
        label: "Group 2"
      }, {
        id: 2,
        label: "Group 3"
      }, {
        id: 3,
        label: "Group 4",
        icon: "mdi-folder",
        parentId: 0
      }, {
        id: 4,
        label: "Group 5",
        parentId: 0
      }, {
        id: 5,
        label: "Group 6",
        parentId: 3
      }],
      value1: null,
      value2: ["0", "1", "2"],
      value3: "2",
      value4: "2"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTreeView,
      FSCol,
      FSIcon
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSTreeView
        width="100%"
        :items="args.items"

      >
        <template
          #prepend="{ item }"
        >
          <FSIcon :icon="item.icon" />
        </template>
      </FSTreeView>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeView
        :items="args.items"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeView
        :items="args.items"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeView
        :items="args.items"
      />
    </FSCol>\`
  })
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const ee=["Variations"];export{e as Variations,ee as __namedExportsOrder,$ as default};
