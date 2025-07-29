import{F as o}from"./FSTreeView-3aAbakgi.js";import{F as m}from"./FSIcon-bsX1r_Ci.js";import{F as a}from"./FSCol-Bfhiyt6Y.js";import"./vue.esm-bundler-PONd4AmC.js";import"./FSLoader-UOJfN8Qb.js";import"./useBreakpoints-RTs-XAJF.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./css-BeoQuAfr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-_AiH45em.js";import"./dimensions-CNbPgA3L.js";import"./elevation-CL0Py7Fp.js";import"./locale-CoLhg8Wl.js";import"./VList-B9UxDYwK.js";import"./index-CANKuvlL.js";import"./VIcon-DIMW80nW.js";import"./proxiedModel-vOB1Q9Gh.js";import"./ssrBoot-DufuUSU7.js";import"./transition-BXZIGKil.js";import"./VDefaultsProvider-BsWh58B_.js";import"./border-z35mRDPS.js";import"./density-CNNumQ_A.js";import"./rounded-BBFi0CuG.js";import"./router-6tzIEQS-.js";import"./index-B8vPsAiL.js";import"./VImg-DKyIpwU2.js";import"./index-Bb4mSIJO.js";import"./VBtn-PodE2DV2.js";import"./group-CvGRLeFV.js";import"./loader-DGoLn0VY.js";import"./VProgressCircular-CDK6zSYw.js";import"./resizeObserver-UZYihl4g.js";import"./anchor-D2WyvgD_.js";import"./VCheckboxBtn-B-CDiKqR.js";import"./VSelectionControl-HwS3bHvU.js";import"./VLabel-5AeJpfXJ.js";import"./filter-MyCPMQzE.js";const W={title:"Foundation/Shared/TreeView",component:o,tags:["autodocs"],argTypes:{}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",icon:"mdi-folder",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(n,{argTypes:p})=>({components:{FSTreeView:o,FSCol:a,FSIcon:m},props:Object.keys(p),setup(){return{...n}},template:`
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
