import{F as r}from"./FSSimpleTileUI-CEjcoOEX.js";import"./leaflet-src-CVI3lIVZ.js";import"./vue.esm-bundler-CTTOvLCD.js";import"./FSIconCard-CGvq_r_x.js";import"./FSCard-DxhVm8H0.js";import"./FSCol-BPr0jVzk.js";import"./css-D46r6e5F.js";import"./useBreakpoints-Bm7CjYdd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-C8EFLcn9.js";import"./useColors-D7R-CyI7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./FSIcon-yzGYQgqh.js";import"./VIcon-DzkIKThE.js";import"./color-DTA1Qd0w.js";import"./FSImage-BOQw5jYK.js";import"./FSImageUI-DYFwVBnb.js";import"./FSLoader-AugIw030.js";import"./dimensions-DIR9-JzD.js";import"./elevation-CqdG4vF6.js";import"./locale-Guk_W035.js";import"./VImg-C1IcDibP.js";import"./rounded-5tkyiosR.js";import"./transition-C1y9a89u.js";import"./index-CK42gwlP.js";import"./useImages-B6xLFcwg.js";import"./base-CmdGny12.js";import"./serviceFactory-qtdw0UKd.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./composableFactory-BcaJMM0w.js";import"./useAppAuthToken-CysW3k_e.js";import"./FSSpan-QNtf4e4q.js";import"./useSlots-NXmwCOLw.js";import"./FSTile-CbnAVjso.js";import"./FSClickable-DznopAj9.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./VProgressCircular-it35si_v.js";import"./resizeObserver-Bwa55KU2.js";import"./FSCheckbox-CVOakf5q.js";import"./useRules-DE909mL5.js";import"./VSelectionControl-CZi2-uP4.js";import"./density-n-hig0Tg.js";import"./proxiedModel-Da7OD98r.js";import"./index-Bj6Uq_NX.js";import"./VLabel-DjEMOXzE.js";import"./VInput-BgFKWDn-.js";import"./index-B698eGq-.js";import"./form-gxFDX6UX.js";const ni={title:"Foundation/Shared/Tiles/SimpleTile",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2",icon:"mdi-account",singleSelect:!0},{id:"3",label:"Simple tile with color",bottomColor:["#0000FF","#FFFFFF"]},{id:"4",label:"Simple tile with color",icon:"mdi-account",bottomColor:["#0000FF","#FF0000"],iconBackgroundColor:["#0000FF","#FF0000"],iconBackgroundVariant:"gradient"}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
