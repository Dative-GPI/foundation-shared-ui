import{F as e}from"./FSChartTileUI-Cf3rPr30.js";import"./vue.esm-bundler-NAfsqApI.js";import"./FSImage-pL2n9Qiy.js";import"./FSImageUI-5vzo4bHr.js";import"./FSLoader-C8dZP0ML.js";import"./useBreakpoints-BwxwzcAl.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./css-DBDqGZ-V.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-BvydW9AS.js";import"./dimensions-IFPI4Yq9.js";import"./elevation-B-XsQHpK.js";import"./locale-CAPEya44.js";import"./VImg-D7CqP58l.js";import"./rounded-DwVJT96z.js";import"./transition-L7INWkz2.js";import"./index-DINlpRuJ.js";import"./useImages-V3peuH-V.js";import"./base-CmdGny12.js";import"./composableFactory-WcheuuwI.js";import"./serviceFactory-DMr1GitK.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DQih8RjT.js";import"./FSTile-DVIPkavo.js";import"./FSClickable-Dvaj3J5M.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSCard-DOESxZy8.js";import"./FSCol-CPY6S-Xd.js";import"./FSRow-GjwhmX1p.js";import"./VProgressCircular-B6p7zTwg.js";import"./resizeObserver-CLnVcpcq.js";import"./VIcon-PiNvAqE-.js";import"./FSCheckbox-CZADXYvb.js";import"./FSIcon-Dq2bxLH5.js";import"./FSSpan-CLtVPKpS.js";import"./useSlots-S0O9Daut.js";import"./useRules-pqUeO9kt.js";import"./VSelectionControl-CV2pv1R-.js";import"./density-BGeA8UH8.js";import"./proxiedModel-sn-eI_a5.js";import"./index-o6vlk9JB.js";import"./VLabel-BDFzMscP.js";import"./VInput-B5HH3Lye.js";import"./index-Dne_26Gx.js";import"./form-DTsyvZhj.js";import"./chartsTools-l63nn86N.js";import"./useTranslations-CxiknF7e.js";const nt={title:"Foundation/Shared/Tiles/Chart",component:e,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:[{id:"1",label:"Tile 1",icon:"mdi-wifi",type:2},{id:"2",label:"Chart Icon tile 2",icon:"mdi-account",type:4},{id:"3",label:"Chart Icon tile with color",icon:"mdi-chart-line",type:3}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSChartTileUI:e},props:Object.keys(p),setup(){return{...n}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSChartTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        v-bind="entity"
      />
    </div>`})};var i,r,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const pt=["Variations"];export{t as Variations,pt as __namedExportsOrder,nt as default};
