import{F as r}from"./FSSimpleTileUI-DHO-hVc4.js";import"./leaflet-src-BqBfykqS.js";import"./vue.esm-bundler-CocPPKUI.js";import"./FSIconCard-DGOl3Irp.js";import"./FSCard-JQNJPDhp.js";import"./FSCol-79-COv64.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BvJ7lU5E.js";import"./useColors-DUufJJPH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DhcBBMcp.js";import"./FSIcon-CKNHHVc2.js";import"./VIcon-Qz-Il978.js";import"./color-yBCdco2I.js";import"./FSImage-BWKdCiW7.js";import"./FSImageUI-CFqUtuMS.js";import"./FSLoader-BeIlBGG_.js";import"./dimensions-C9PuMYcl.js";import"./elevation-CsFMJmSN.js";import"./locale-_fONYh-8.js";import"./VImg-BaN5zAl6.js";import"./rounded-Cjf6r1y4.js";import"./transition-BuKnRONq.js";import"./index-lkzvYdnq.js";import"./useImages-ImHO88Nc.js";import"./base-CmdGny12.js";import"./composableFactory-DRFDSLtA.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DuOSULz9.js";import"./FSSpan-DrSEJIpr.js";import"./useSlots-D4bv69lA.js";import"./FSTile-Cm9Anp65.js";import"./FSClickable-6FPdriKA.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./VProgressCircular-BMkR7ln7.js";import"./resizeObserver-QYhQJr79.js";import"./FSCheckbox-ChCYq6Yz.js";import"./useRules-C3-AmzzE.js";import"./VCheckboxBtn-B3VCaA0L.js";import"./VSelectionControl-BneTlqNp.js";import"./density-DZuLaB-B.js";import"./proxiedModel-DvocDLKO.js";import"./index-BgX1FNqJ.js";import"./VLabel-HvE-XSAC.js";import"./VInput-DhPQv4YC.js";import"./index-DfBdMsnv.js";const ni={title:"Foundation/Shared/Tiles/SimpleTile",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2",icon:"mdi-account",singleSelect:!0},{id:"3",label:"Simple tile with color",bottomColor:["#0000FF","#FFFFFF"]},{id:"4",label:"Simple tile with color",icon:"mdi-account",bottomColor:["#0000FF","#FF0000"],iconBackgroundColor:["#0000FF","#FF0000"],iconBackgroundVariant:"gradient"}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
