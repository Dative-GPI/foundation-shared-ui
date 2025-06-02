import{F as r}from"./FSSimpleTileUI-Ji75yLFi.js";import"./leaflet-src-CVI3lIVZ.js";import"./vue.esm-bundler-CqZ6aK3I.js";import"./FSIconCard-Dqsqzdxg.js";import"./FSCard-BH9I8ruU.js";import"./FSCol-DIPgj7wU.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-udQVJR1p.js";import"./useColors-BIkRBR7C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CCooKRqg.js";import"./FSIcon-8KcAAKgU.js";import"./VIcon-ZzEkeSRE.js";import"./color-iZFxpsFf.js";import"./FSImage-DLNm9-cY.js";import"./FSImageUI-B_rD9Cl-.js";import"./FSLoader-0ho3eZau.js";import"./dimensions-CuS7VcMO.js";import"./elevation-DCJceMeT.js";import"./locale-BJmdjC_5.js";import"./VImg-UKGkvK5A.js";import"./rounded-T_eKj2ZY.js";import"./transition-C13qRIR1.js";import"./index-0XvVa1kA.js";import"./useImages-k0iD--OD.js";import"./base-CmdGny12.js";import"./composableFactory-BJClBu0g.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-nTw6pyPT.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./FSTile-DIm7BUL1.js";import"./FSClickable-CBfoSsDs.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./VProgressCircular-cB7gdjsO.js";import"./resizeObserver-C7qOORSR.js";import"./FSCheckbox-tSiw0lhZ.js";import"./useRules-Cutg_0Yh.js";import"./VSelectionControl-Dw5vpEc6.js";import"./density-B3EUR5Bv.js";import"./proxiedModel-BirLikdP.js";import"./index-BSoBU6Pm.js";import"./VLabel-D1qNLyt7.js";import"./VInput-f1leR0eo.js";import"./index-BHk1SuU0.js";const ri={title:"Foundation/Shared/Tiles/SimpleTile",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2",icon:"mdi-account",singleSelect:!0},{id:"3",label:"Simple tile with color",bottomColor:["#0000FF","#FFFFFF"]},{id:"4",label:"Simple tile with color",icon:"mdi-account",bottomColor:["#0000FF","#FF0000"],iconBackgroundColor:["#0000FF","#FF0000"],iconBackgroundVariant:"gradient"}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSSimpleTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        v-model="args.selected[index]"
        v-bind="entity"
      />
    </div>`})};var o,e,t;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(t=(e=i.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const ni=["Variations"];export{i as Variations,ni as __namedExportsOrder,ri as default};
