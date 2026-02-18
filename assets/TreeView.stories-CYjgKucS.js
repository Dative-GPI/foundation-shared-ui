import{F as o}from"./FSTreeView-C1VnzbWP.js";import{F as m}from"./FSIcon-kCffLiJ2.js";import{F as a}from"./FSCol-BwxAijHz.js";import"./vue.esm-bundler-B9lxvfDw.js";import"./FSLoader-FkDR4IbG.js";import"./useBreakpoints-Dc84uxeD.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./css-BHrR5cp2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-CLtf7Qrc.js";import"./dimensions-n1mPaUbN.js";import"./elevation-DZ0Sccyb.js";import"./locale-C647X9dJ.js";import"./proxiedModel-DRvKxps3.js";import"./useRender-DM2jvMPN.js";import"./VList-CuJqKfkq.js";import"./index-7AXDWkBX.js";import"./icons-B5bBvhw0.js";import"./ssrBoot-butIQ2KL.js";import"./transition-Dh_EAQcC.js";import"./VDefaultsProvider-BurwYF19.js";import"./variant-BIgPYL9J.js";import"./density-DvMOIaQw.js";import"./rounded-BrvRf1BO.js";import"./router-BlaQ2-ft.js";import"./index-EdIR5CJS.js";import"./VIcon-DPcX_RaC.js";import"./VImg-UzuohEtG.js";import"./index-Dli51uy9.js";import"./VDivider-CJxliPT_.js";import"./VBtn-CjvfwDqR.js";import"./group-BLkb5Gt4.js";import"./loader-CaGstafT.js";import"./VProgressCircular-DSOzHF7B.js";import"./resizeObserver-DjRdaT-k.js";import"./anchor-ByUPiJZt.js";import"./VCheckboxBtn-BM2tTzJT.js";import"./VSelectionControl-COH1jBNJ.js";import"./VLabel-CT69iMfY.js";import"./filter-7QmGX2th.js";const Y={title:"Foundation/Shared/TreeView",component:o,tags:["autodocs"],argTypes:{}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",icon:"mdi-folder",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(n,{argTypes:p})=>({components:{FSTreeView:o,FSCol:a,FSIcon:m},props:Object.keys(p),setup(){return{...n}},template:`
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Z=["Variations"];export{e as Variations,Z as __namedExportsOrder,Y as default};
