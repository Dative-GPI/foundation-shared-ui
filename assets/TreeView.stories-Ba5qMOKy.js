import{F as o}from"./FSTreeView-xDluSq8n.js";import{F as m}from"./FSIcon-CBwOL1p5.js";import{F as a}from"./FSCol-B2uM4vFw.js";import"./vue.esm-bundler-DR0_aU9U.js";import"./FSLoader-DlWbYN_-.js";import"./useBreakpoints-DhvOJkKp.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./css-B9c0ZZC5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-RD9Ud5Y3.js";import"./dimensions-DYTrXD1P.js";import"./elevation-DVEOfLMu.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./useRender-BLRtLddt.js";import"./VList-fBlb7u4-.js";import"./index-C-lZWyiZ.js";import"./icons-CT9uuJgl.js";import"./ssrBoot-DbD7MJXH.js";import"./tag-mR0sHpgP.js";import"./transition-CedxoFs4.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./border-CatZixNo.js";import"./density-SLEyWIf6.js";import"./rounded-B6-M_5uG.js";import"./router-CJAgOfLI.js";import"./variant-BZg-bE5G.js";import"./index-Dlqh_ozP.js";import"./size-BQpWkrb5.js";import"./VImg-DooBjoZC.js";import"./index-BLyOCIqB.js";import"./VIcon-e3y7Ok8e.js";import"./VDivider-g5HOQuaH.js";import"./VBtn-hLKUYNZP.js";import"./group-CUiyutR_.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./intersectionObserver-DIY-g69O.js";import"./anchor-CT7OU_gq.js";import"./position-Dh5mOHTG.js";import"./VProgressCircular-CZaehD4X.js";import"./resizeObserver-BES9Ltqd.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./VLabel-BfwkTHLb.js";import"./filter-CXrqG-Z2.js";const ie={title:"Foundation/Shared/TreeView",component:o,tags:["autodocs"],argTypes:{}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",icon:"mdi-folder",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(n,{argTypes:p})=>({components:{FSTreeView:o,FSCol:a,FSIcon:m},props:Object.keys(p),setup(){return{...n}},template:`
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const oe=["Variations"];export{e as Variations,oe as __namedExportsOrder,ie as default};
