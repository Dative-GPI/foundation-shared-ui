import{F as i}from"./FSTreeView-C3awIJUj.js";import{F as m}from"./FSIcon-CNpmwcOd.js";import{F as a}from"./FSCol-DedFW0nl.js";import"./vue.esm-bundler-C5-CUMHT.js";import"./FSLoader-BTZOtjrt.js";import"./useBreakpoints-pPMhsL5T.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./css-DSFbdPon.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-D7ZCcSxD.js";import"./dimensions-Bm76csmg.js";import"./elevation-DfTZ1KyC.js";import"./locale-BNkeanE6.js";import"./proxiedModel-CV-HTW34.js";import"./useRender-_COxrB9K.js";import"./VList-BVDcEHsi.js";import"./index-pS3mXfMR.js";import"./icons-CucLNLjN.js";import"./ssrBoot-ClVRhrXI.js";import"./tag-enhOFdJJ.js";import"./transition-CgRUW3r8.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./border-DJaidMiz.js";import"./density-qUtw3dk7.js";import"./rounded-Ctowy803.js";import"./router-CTGX-puL.js";import"./variant-BJccJztY.js";import"./index-asyjLxvi.js";import"./size-DwliOKuO.js";import"./VImg-DXeUU_wB.js";import"./index-B3ZVJx30.js";import"./VIcon-IlEzlDWp.js";import"./VDivider-Ck2C5rfW.js";import"./VBtn-CvDmdLsi.js";import"./group-B4VRq_l_.js";import"./loader-CVb0Ac9O.js";import"./VProgressLinear-F46fcvb0.js";import"./intersectionObserver-D1RZdbEq.js";import"./anchor-Dj2AEc5N.js";import"./position-CTxKpBLl.js";import"./VProgressCircular-D7Gk7a1O.js";import"./resizeObserver-hE1ulDL8.js";import"./VCheckboxBtn-ODJx5um2.js";import"./VSelectionControl-D13_Swsb.js";import"./VLabel-COLF1QPQ.js";import"./filter-BTy0FM8E.js";const oe={title:"Shared/Components/TreeView",component:i,tags:["autodocs"],argTypes:{}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",icon:"mdi-folder",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(n,{argTypes:p})=>({components:{FSTreeView:i,FSCol:a,FSIcon:m},props:Object.keys(p),setup(){return{...n}},template:`
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
