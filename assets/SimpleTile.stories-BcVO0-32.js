import{F as r}from"./FSSimpleTileUI-CcRMbNDG.js";import"./leaflet-src-Dw1OyN9w.js";import"./vue.esm-bundler-C5-CUMHT.js";import"./FSIconCard-C8bYj-2A.js";import"./FSCard-DYe1QD8j.js";import"./FSRow-C8aYwBu-.js";import"./css-DSFbdPon.js";import"./useBreakpoints-pPMhsL5T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./VProgressCircular-D7Gk7a1O.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSIcon-CNpmwcOd.js";import"./VIcon-IlEzlDWp.js";import"./icons-CucLNLjN.js";import"./FSImage-CTV3ARHO.js";import"./FSImageUI-DrqF_CxM.js";import"./FSLoader-BTZOtjrt.js";import"./dimensions-Bm76csmg.js";import"./elevation-DfTZ1KyC.js";import"./locale-BNkeanE6.js";import"./proxiedModel-CV-HTW34.js";import"./VImg-DXeUU_wB.js";import"./rounded-Ctowy803.js";import"./transition-CgRUW3r8.js";import"./index-B3ZVJx30.js";import"./useImages-CyYFl-Jz.js";import"./composableFactory-Cxup7bUM.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-DMcDmCCx.js";import"./FSSpan-D6aG51_c.js";import"./useSlots-ol4Nk6ew.js";import"./FSTile-DmLtcb1O.js";import"./FSCheckbox-BwFpn-kB.js";import"./FSCol-DedFW0nl.js";import"./useRules-D4S0gmXa.js";import"./VCheckboxBtn-ODJx5um2.js";import"./VSelectionControl-D13_Swsb.js";import"./density-qUtw3dk7.js";import"./index-asyjLxvi.js";import"./VLabel-COLF1QPQ.js";import"./VInput-Y0iB4nur.js";import"./index-pS3mXfMR.js";const li={title:"Shared/Components/Tiles/SimpleTile",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2",icon:"mdi-account",singleSelect:!0},{id:"3",label:"Simple tile with color",bottomColor:["#0000FF","#FFFFFF"]},{id:"4",label:"Simple tile with color",icon:"mdi-account",bottomColor:["#0000FF","#FF0000"],iconBackgroundColor:["#0000FF","#FF0000"],iconBackgroundVariant:"gradient"}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSSimpleTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        v-model="args.selected[index]"
        v-bind="entity"
      />
    </div>`})};var o,t,e;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "Tile 1",
        code: "code"
      }, {
        id: "2",
        label: "Simple Icon tile 2",
        icon: "mdi-account",
        singleSelect: true
      }, {
        id: "3",
        label: "Simple tile with color",
        bottomColor: ["#0000FF", "#FFFFFF"]
      }, {
        id: "4",
        label: "Simple tile with color",
        icon: "mdi-account",
        bottomColor: ["#0000FF", "#FF0000"],
        iconBackgroundColor: ["#0000FF", "#FF0000"],
        iconBackgroundVariant: "gradient"
      }],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSimpleTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSSimpleTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        v-model="args.selected[index]"
        v-bind="entity"
      />
    </div>\`
  })
}`,...(e=(t=i.parameters)==null?void 0:t.docs)==null?void 0:e.source}}};const ai=["Variations"];export{i as Variations,ai as __namedExportsOrder,li as default};
