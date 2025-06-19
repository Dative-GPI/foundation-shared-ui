import{F as e}from"./FSStatus-CSY7-ADX.js";import"./vue.esm-bundler-CqZ6aK3I.js";import"./FSCard-CoFTtRNJ.js";import"./FSCol-DIPgj7wU.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-udQVJR1p.js";import"./useColors-CaMUbg8a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CCooKRqg.js";import"./FSChip-BL9vxD6R.js";import"./FSIcon-Dy1KglKQ.js";import"./VIcon-beNtbbqt.js";import"./color-6mal3hP4.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSText-BvUMyUbP.js";import"./useDateFormat-B0N4tW_S.js";import"./useAppTimeZone-CbCPkuif.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-D1PzUORY.js";import"./useTranslations-D4m4SVfo.js";import"./FSColor-C_MaBJyS.js";import"./FSMenu-Rp1ILhng.js";import"./VMenu-C6lRy5En.js";import"./VOverlay-CHXjpHsK.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-BirLikdP.js";import"./anchor-DiyvyHyx.js";import"./dimensions-CuS7VcMO.js";import"./display-Cs3Y1ygD.js";import"./scopeId-BQSHBqq_.js";import"./locale-BJmdjC_5.js";import"./router-C0dK7NvB.js";import"./transition-C13qRIR1.js";import"./VDefaultsProvider-oq6rnkoo.js";const Y={title:"Foundation/Shared/Status",component:e,tags:["autodocs"],argTypes:{}},m={id:"testId",label:"testLabel",index:1,showDefault:!1},i={label:"testLabelValue",value:"70",unit:"°C",icon:"mdi-thermometer",color:"#E01515",sourceTimestamp:1726547886e3,enqueuedTimestamp:1726547952e3,processedTimestamp:1726547958156},t={args:{modelStatus:m,statusGroup:i,size:"32",padding:"8px"},render:(p,{argTypes:a})=>({components:{FSStatus:e},props:Object.keys(a),setup(){return{args:p}},template:`
      <FSStatus 
        :modelStatus="args.modelStatus" 
        :statusGroup="args.statusGroup" 
        :size="args.size"
        :padding="args.padding"
      />`})};var r,o,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    modelStatus: modelStatus,
    statusGroup: statusGroup,
    size: '32',
    padding: '8px'
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSStatus
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSStatus 
        :modelStatus="args.modelStatus" 
        :statusGroup="args.statusGroup" 
        :size="args.size"
        :padding="args.padding"
      />\`
  })
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const Z=["Default"];export{t as Default,Z as __namedExportsOrder,Y as default};
