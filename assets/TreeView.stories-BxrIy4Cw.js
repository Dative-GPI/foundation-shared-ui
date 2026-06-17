import{F as i}from"./FSTreeView-C0Tbsxgx.js";import{F as m}from"./FSIcon-DzQOa56z.js";import{F as a}from"./FSCol-KRtq6OYO.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSLoader-DOgbrYCd.js";import"./useBreakpoints-DO2FQykY.js";import"./useColors-B9SkzYFF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./css-CUVOJ3aO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-BS29f5Yp.js";import"./dimensions-CS_qJJhy.js";import"./elevation-DQ_qKX67.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./useRender-CaGCh2Xu.js";import"./VList-BhDySjdU.js";import"./index-ByfGjSW7.js";import"./icons-Cl0t_6pZ.js";import"./ssrBoot-BimrXMWA.js";import"./tag-DuA9585q.js";import"./transition-a5pzBS6c.js";import"./VDefaultsProvider-Blv54jCg.js";import"./border-D8z1QLxT.js";import"./density-CE2FkSgs.js";import"./rounded-CS1_z6Jk.js";import"./router-D36qODsG.js";import"./variant-DNfp8Yqp.js";import"./index-B-eFr4Nw.js";import"./size-D7Cgj1jW.js";import"./VImg-BdZHkGCX.js";import"./index-B4rZgXN-.js";import"./VIcon-Cu6WQqXu.js";import"./VDivider-B9VczfM4.js";import"./VBtn-Ct4hkl6N.js";import"./group-BLkYT3DE.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./intersectionObserver-DwVsweQn.js";import"./anchor-Se7MGGLO.js";import"./position-O95c9fuD.js";import"./VProgressCircular-Cjpa4WUk.js";import"./resizeObserver-Df0UXoOw.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./VLabel-BtnooUPU.js";import"./filter-C4s97JnQ.js";const oe={title:"Shared/Components/TreeView",component:i,tags:["autodocs"],argTypes:{}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",icon:"mdi-folder",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(n,{argTypes:p})=>({components:{FSTreeView:i,FSCol:a,FSIcon:m},props:Object.keys(p),setup(){return{...n}},template:`
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
    </FSCol>`})};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const ie=["Variations"];export{e as Variations,ie as __namedExportsOrder,oe as default};
