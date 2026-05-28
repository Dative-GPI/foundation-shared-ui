import{F as r}from"./FSSimpleTileUI-Ca1kk7vw.js";import"./leaflet-src-Dw1OyN9w.js";import"./vue.esm-bundler-DR0_aU9U.js";import"./FSIconCard-D8RPikTZ.js";import"./FSCard--XyliQO3.js";import"./FSRow-C8VtPvPz.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./VProgressCircular-CZaehD4X.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSIcon-CBwOL1p5.js";import"./VIcon-e3y7Ok8e.js";import"./icons-CT9uuJgl.js";import"./FSImage-DA9vOKQh.js";import"./FSImageUI-ErX_r_YE.js";import"./FSLoader-DlWbYN_-.js";import"./dimensions-DYTrXD1P.js";import"./elevation-DVEOfLMu.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./VImg-DooBjoZC.js";import"./rounded-B6-M_5uG.js";import"./transition-CedxoFs4.js";import"./index-BLyOCIqB.js";import"./useImages-F1kPEKZ4.js";import"./composableFactory-yqpAgWWK.js";import"./serviceFactory-CnLiFQ6s.js";import"./lodash-5Yh5OMmr.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-B2Z_WWk7.js";import"./FSSpan-9E7WYB2n.js";import"./useSlots-p1mkRhuZ.js";import"./FSTile-DyIXnIBo.js";import"./FSCheckbox-D-n0kplZ.js";import"./FSCol-B2uM4vFw.js";import"./useRules-2yt7KWSA.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./density-SLEyWIf6.js";import"./index-Dlqh_ozP.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./index-C-lZWyiZ.js";const li={title:"Foundation/Shared/Tiles/SimpleTile",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2",icon:"mdi-account",singleSelect:!0},{id:"3",label:"Simple tile with color",bottomColor:["#0000FF","#FFFFFF"]},{id:"4",label:"Simple tile with color",icon:"mdi-account",bottomColor:["#0000FF","#FF0000"],iconBackgroundColor:["#0000FF","#FF0000"],iconBackgroundVariant:"gradient"}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
