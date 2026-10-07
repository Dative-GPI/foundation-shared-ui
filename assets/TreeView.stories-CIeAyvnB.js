import{F as i}from"./FSTreeView-BeywA2om.js";import{F as m}from"./FSIcon-D-iWmbKS.js";import{F as a}from"./FSCol-ChYB2Oag.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSLoader-DRppy7ch.js";import"./useBreakpoints-Trboya0O.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./css-BA19cdxW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-Cx3XlwVF.js";import"./dimensions-BuDdBtmf.js";import"./elevation-DyTGrbk9.js";import"./locale-MGWjZjXD.js";import"./proxiedModel-4bJ1saXA.js";import"./useRender-C5CA_XPC.js";import"./VList-Bkkbsc6W.js";import"./index-C0WTB2TM.js";import"./icons-AciKn6XY.js";import"./ssrBoot-BimrXMWA.js";import"./tag-BLKDmAVb.js";import"./transition-Dqm8buww.js";import"./VDefaultsProvider-Cane1ZR3.js";import"./border-D-0PuVU0.js";import"./density-HajNgXBf.js";import"./rounded-BE8u9DAQ.js";import"./router-D2Xcou1T.js";import"./variant-De5GYaDP.js";import"./index-CDgYZebE.js";import"./size-kKHvqn_O.js";import"./VImg-CF0d7Fd2.js";import"./index-D_7bL_IH.js";import"./VIcon-BPCLtKbp.js";import"./VDivider-sEPw-6oz.js";import"./VBtn-CvpLyLjZ.js";import"./group-g6KFhHmW.js";import"./loader-DOKDD2NA.js";import"./VProgressLinear-DA0V-MGc.js";import"./intersectionObserver-DHmVtmN7.js";import"./anchor-C-rl7L3L.js";import"./position-BAHmyhJU.js";import"./VProgressCircular-D014ccrC.js";import"./resizeObserver-ZKSQVJHV.js";import"./VCheckboxBtn-BT3SzIyH.js";import"./VSelectionControl-TRNlUp1F.js";import"./VLabel-DOSQu5RP.js";import"./filter-CEUeuq74.js";const oe={title:"Shared/Components/TreeView",component:i,tags:["autodocs"],argTypes:{}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",icon:"mdi-folder",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(n,{argTypes:p})=>({components:{FSTreeView:i,FSCol:a,FSIcon:m},props:Object.keys(p),setup(){return{...n}},template:`
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
