import{F as r}from"./FSSimpleTileUI-BngyDIi8.js";import"./leaflet-src-CVI3lIVZ.js";import"./vue.esm-bundler-DtArtqdn.js";import"./FSIconCard-xSQPsDVw.js";import"./FSCard-D0sb_KqI.js";import"./FSCol-D6yYDi9X.js";import"./css-Byt5yd9p.js";import"./useBreakpoints-DjafNA1e.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-C-mN1bTt.js";import"./useColors-P6sW9vWR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BTycGIF1.js";import"./FSIcon-DAU03b1P.js";import"./VIcon-_X0ionFS.js";import"./color-DKVd81aj.js";import"./FSImage-DyJ7YE9e.js";import"./FSImageUI-CJROiAZk.js";import"./FSLoader-C5CmIvK9.js";import"./dimensions-Dt4h5jdR.js";import"./elevation-DuPJjm1T.js";import"./locale-EnvrzLNX.js";import"./VImg-DB10nKT8.js";import"./rounded-B9giz-GX.js";import"./transition-POm6u0ds.js";import"./index-ShtRROw2.js";import"./useImages-Ob47Tzpe.js";import"./base-CmdGny12.js";import"./composableFactory-D6jnN1uy.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-CqNI4hgs.js";import"./FSSpan-Btkwe66a.js";import"./useSlots-DbyfVVj5.js";import"./FSTile-Apfu2Xut.js";import"./FSClickable-Bp3-EsMW.js";import"./FSRouterLink-BnjgQQHT.js";import"./vue-router-D25_MSGh.js";import"./VProgressCircular-vkSDrwPD.js";import"./resizeObserver-Bx252tqU.js";import"./FSCheckbox-D615kJWP.js";import"./useRules-eDN7Chft.js";import"./VSelectionControl-D_AGLwLV.js";import"./density-96HGjcby.js";import"./proxiedModel-DNPVb8sx.js";import"./index-DWcj--5B.js";import"./VLabel-D5MHSYH0.js";import"./VInput-Dw4F_0vm.js";import"./index-YdMT2sR1.js";const ri={title:"Foundation/Shared/Tiles/SimpleTile",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2",icon:"mdi-account",singleSelect:!0},{id:"3",label:"Simple tile with color",bottomColor:["#0000FF","#FFFFFF"]},{id:"4",label:"Simple tile with color",icon:"mdi-account",bottomColor:["#0000FF","#FF0000"],iconBackgroundColor:["#0000FF","#FF0000"],iconBackgroundVariant:"gradient"}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
