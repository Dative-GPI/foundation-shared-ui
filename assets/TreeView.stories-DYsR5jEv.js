import{F as o}from"./FSTreeView-V-PucEwk.js";import{F as m}from"./FSIcon-wf_hiRKr.js";import{F as a}from"./FSCol-Bfhiyt6Y.js";import"./vue.esm-bundler-PONd4AmC.js";import"./FSLoader-B0jwcdOS.js";import"./useBreakpoints-RTs-XAJF.js";import"./useColors-WMY9wD-z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DW7AHeJn.js";import"./css-BeoQuAfr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-CQ7P2KsY.js";import"./dimensions-D04OQyPe.js";import"./elevation-D2k7D5K3.js";import"./locale-CoLhg8Wl.js";import"./VList-BCmGq4kQ.js";import"./index-COu1mqSp.js";import"./VIcon-shEmQARK.js";import"./proxiedModel-BMHfYIia.js";import"./ssrBoot-DufuUSU7.js";import"./transition-BpYTYsmy.js";import"./VDefaultsProvider--dbql3OT.js";import"./border-BL_XAYaf.js";import"./density-DM1TPnyn.js";import"./rounded-Cwlpymxx.js";import"./router-DS8hXbpn.js";import"./index-aCfcr9Gd.js";import"./VImg-AonvEV9k.js";import"./index-CzkqP9_q.js";import"./VBtn-Bcg5Dpfx.js";import"./group-QLjCrFp5.js";import"./loader-zqGHJTJd.js";import"./VProgressCircular-D57tYVQX.js";import"./resizeObserver-BAwzmH4Y.js";import"./anchor-rLQXsCC5.js";import"./VCheckboxBtn-CYnHxMSC.js";import"./VSelectionControl-BAKsAS1a.js";import"./VLabel-B2dMuALu.js";import"./filter-D4n0RRF9.js";const W={title:"Foundation/Shared/TreeView",component:o,tags:["autodocs"],argTypes:{}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",icon:"mdi-folder",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(n,{argTypes:p})=>({components:{FSTreeView:o,FSCol:a,FSIcon:m},props:Object.keys(p),setup(){return{...n}},template:`
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const X=["Variations"];export{e as Variations,X as __namedExportsOrder,W as default};
