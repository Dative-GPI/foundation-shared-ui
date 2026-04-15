import{F as o}from"./FSTreeView-CWA3GOu9.js";import{F as m}from"./FSIcon-B9MXbR5l.js";import{F as a}from"./FSCol-C3EJfcJX.js";import"./vue.esm-bundler-D_gXonxt.js";import"./FSLoader-CdctsmAF.js";import"./useBreakpoints-BWz07CZT.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./css-Bznx04uW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-DuOnfdFp.js";import"./dimensions-BYDjhYdL.js";import"./elevation-sxxySPKb.js";import"./locale-CEMLpecI.js";import"./proxiedModel-Cl0bR0rs.js";import"./useRender-BE0GCWmZ.js";import"./VList-D8CiLhgs.js";import"./index-aKIkx5xA.js";import"./icons-DiQlgRdj.js";import"./ssrBoot-DpaZqI6q.js";import"./tag-CbMfyUQg.js";import"./transition-CHyhkthg.js";import"./VDefaultsProvider-DJfojugM.js";import"./border-BTzDu4tj.js";import"./density-W7RG4BnT.js";import"./rounded-yhlSUX6x.js";import"./router-hLwSEJDL.js";import"./variant-ftZYcIF1.js";import"./index-ByzLombQ.js";import"./size-WKyNI-v9.js";import"./VImg-ufpttNgj.js";import"./index-CpkyVf-S.js";import"./VIcon-gCapjdof.js";import"./VDivider-CTy1lKut.js";import"./VBtn-DgLqICzT.js";import"./group-BimGXDpZ.js";import"./loader-DM6th8g9.js";import"./VProgressLinear-bxxDRxj8.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./anchor-DrPAsKKU.js";import"./position-mzu5LnMQ.js";import"./VProgressCircular-BomUTxjq.js";import"./resizeObserver-B9WvY7yr.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./VLabel-BCYtLXrQ.js";import"./filter-DB2eMWUq.js";const ie={title:"Foundation/Shared/TreeView",component:o,tags:["autodocs"],argTypes:{}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",icon:"mdi-folder",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(n,{argTypes:p})=>({components:{FSTreeView:o,FSCol:a,FSIcon:m},props:Object.keys(p),setup(){return{...n}},template:`
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
