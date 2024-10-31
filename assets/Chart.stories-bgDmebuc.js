import{F as o}from"./FSChartTileUI-BaOaytww.js";import"./vue.esm-bundler-l-siv0w9.js";import"./FSImage-yMh7QIr7.js";import"./FSImageUI-CFHBCxhz.js";import"./FSLoader-t85MEsQz.js";import"./useBreakpoints-C5IzU8MC.js";import"./useColors-r8nvatqt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-C2MnUTNI.js";import"./css-CP2C2-Fe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-De-77ojK.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./VImg-CZhZqiQJ.js";import"./rounded-uHrmshEX.js";import"./transition-AZsQzdUZ.js";import"./index-C6OXlV61.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-C5FI4e55.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSTile-DITjMSfT.js";import"./FSClickable-Dv9jZ2SG.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./FSCard-CBOjzTDC.js";import"./FSCol-BvqytbKT.js";import"./FSRow-CbEgVN08.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSCheckbox-BuNOyTVK.js";import"./FSIcon-CvjHaRpL.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./form-CLJq5y5w.js";import"./chartsTools-DVhw5-4T.js";import"./useTranslations-CJK8D24x.js";const ot={title:"Foundation/Shared/Tiles/Chart",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:[{id:"1",label:"Tile 1",icon:"mdi-wifi",type:2},{id:"2",label:"Chart Icon tile 2",icon:"mdi-account",type:4},{id:"3",label:"Chart Icon tile with color",icon:"mdi-chart-line",type:3}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSChartTileUI:o},props:Object.keys(p),setup(){return{...n}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSChartTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        v-bind="entity"
      />
    </div>`})};var i,r,e;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "Tile 1",
        icon: "mdi-wifi",
        type: 2
      }, {
        id: "2",
        label: "Chart Icon tile 2",
        icon: "mdi-account",
        type: 4
      }, {
        id: "3",
        label: "Chart Icon tile with color",
        icon: "mdi-chart-line",
        type: 3
      }],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSChartTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSChartTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        v-bind="entity"
      />
    </div>\`
  })
}`,...(e=(r=t.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const nt=["Variations"];export{t as Variations,nt as __namedExportsOrder,ot as default};