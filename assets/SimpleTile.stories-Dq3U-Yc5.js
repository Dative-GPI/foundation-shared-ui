import{F as r}from"./FSSimpleTileUI-NTI_Cssm.js";import"./leaflet-src-CCqwBO6N.js";import"./vue.esm-bundler-B9lxvfDw.js";import"./FSIconCard-B96S8Zdc.js";import"./FSCard-BwbWypiX.js";import"./FSCol-BwxAijHz.js";import"./css-BHrR5cp2.js";import"./useBreakpoints-Dc84uxeD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CFa9RNor.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./FSIcon-kCffLiJ2.js";import"./VIcon-DPcX_RaC.js";import"./color-CLtf7Qrc.js";import"./useRender-DM2jvMPN.js";import"./icons-B5bBvhw0.js";import"./FSImage-BdRbjk_B.js";import"./FSImageUI-Dstvh29N.js";import"./FSLoader-FkDR4IbG.js";import"./dimensions-n1mPaUbN.js";import"./elevation-DZ0Sccyb.js";import"./locale-C647X9dJ.js";import"./proxiedModel-DRvKxps3.js";import"./VImg-UzuohEtG.js";import"./rounded-BrvRf1BO.js";import"./transition-Dh_EAQcC.js";import"./index-Dli51uy9.js";import"./useImages-CXY-OT-0.js";import"./base-CmdGny12.js";import"./composableFactory-CzIPMomJ.js";import"./serviceFactory-DGf7dwWo.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-Cnww6a6j.js";import"./FSSpan-COYXSDbp.js";import"./useSlots-BioZKQqg.js";import"./FSTile-05t0iUHJ.js";import"./FSClickable-zRgeWTkl.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./VProgressCircular-DSOzHF7B.js";import"./resizeObserver-DjRdaT-k.js";import"./FSCheckbox-8fnFFMk6.js";import"./useRules-Cun-4MZo.js";import"./VCheckboxBtn-BM2tTzJT.js";import"./VSelectionControl-COH1jBNJ.js";import"./density-DvMOIaQw.js";import"./index-EdIR5CJS.js";import"./VLabel-CT69iMfY.js";import"./VInput-DcZY3iGt.js";import"./index-7AXDWkBX.js";const pi={title:"Foundation/Shared/Tiles/SimpleTile",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2",icon:"mdi-account",singleSelect:!0},{id:"3",label:"Simple tile with color",bottomColor:["#0000FF","#FFFFFF"]},{id:"4",label:"Simple tile with color",icon:"mdi-account",bottomColor:["#0000FF","#FF0000"],iconBackgroundColor:["#0000FF","#FF0000"],iconBackgroundVariant:"gradient"}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
}`,...(e=(t=i.parameters)==null?void 0:t.docs)==null?void 0:e.source}}};const li=["Variations"];export{i as Variations,li as __namedExportsOrder,pi as default};
