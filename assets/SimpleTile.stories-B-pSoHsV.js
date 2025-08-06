import{F as r}from"./FSSimpleTileUI-JlViAhdT.js";import"./leaflet-src-BqBfykqS.js";import"./vue.esm-bundler-CocPPKUI.js";import"./FSIconCard-Df7qPY01.js";import"./FSCard-2KUMcI8D.js";import"./FSCol-79-COv64.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BvJ7lU5E.js";import"./useColors-C1aD-Kb6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1Gcptw7.js";import"./FSIcon-BGuuL0jz.js";import"./VIcon-ZjKwFcqe.js";import"./color-D50-hVV_.js";import"./FSImage-BNGlz8LX.js";import"./FSImageUI-i6dq6NUa.js";import"./FSLoader-JpoH2mis.js";import"./dimensions-Cv9Fwl7U.js";import"./elevation-DUhGVECn.js";import"./locale-_fONYh-8.js";import"./VImg-C2WY2bzk.js";import"./rounded-CBYChxif.js";import"./transition-bMLtH-b3.js";import"./index-5LM_ZUPq.js";import"./useImages-ImHO88Nc.js";import"./base-CmdGny12.js";import"./composableFactory-DRFDSLtA.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DuOSULz9.js";import"./FSSpan-CKhKq6E1.js";import"./useSlots-D4bv69lA.js";import"./FSTile-CP6rjFw-.js";import"./FSClickable-CqIDwjuA.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./VProgressCircular-k_tOz5gX.js";import"./resizeObserver-DDOqpSMx.js";import"./FSCheckbox-MGAv1q-u.js";import"./useRules-C3-AmzzE.js";import"./VCheckboxBtn-CRTq-u2o.js";import"./VSelectionControl-t1Q43Tu7.js";import"./density-2KuMGYl6.js";import"./proxiedModel-DW1FRKBO.js";import"./index-BwBNp3ym.js";import"./VLabel-yrR5w-fx.js";import"./VInput-JSCg5nQs.js";import"./index-hd-xIizf.js";const ni={title:"Foundation/Shared/Tiles/SimpleTile",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2",icon:"mdi-account",singleSelect:!0},{id:"3",label:"Simple tile with color",bottomColor:["#0000FF","#FFFFFF"]},{id:"4",label:"Simple tile with color",icon:"mdi-account",bottomColor:["#0000FF","#FF0000"],iconBackgroundColor:["#0000FF","#FF0000"],iconBackgroundVariant:"gradient"}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
}`,...(t=(e=i.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const pi=["Variations"];export{i as Variations,pi as __namedExportsOrder,ni as default};
