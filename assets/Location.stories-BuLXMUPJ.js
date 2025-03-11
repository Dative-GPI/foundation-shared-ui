import{F as s}from"./FSTile-CrH2i7Zg.js";import{F as i}from"./FSLocationTileUI-DrkKn-mT.js";import"./vue.esm-bundler-CUSnV4DE.js";import"./FSClickable-Bn4xIsxH.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCard-BnVyMFnh.js";import"./FSCol-BQiFrdcO.js";import"./css-BnRE2gle.js";import"./useBreakpoints-CQzBW1Q0.js";import"./FSRow-hpHYWcoJ.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./VProgressCircular-BbyuaGSs.js";import"./color-CgsoZSKd.js";import"./resizeObserver-Hv1_IiVG.js";import"./VIcon-DeLOaNVc.js";import"./FSCheckbox-DT2R4my4.js";import"./FSIcon-Cp7BQBW6.js";import"./FSSpan-M9GEX7v6.js";import"./useSlots-CY84M1fx.js";import"./useRules-CYZMRvpC.js";import"./VSelectionControl-BrUoGkRx.js";import"./density-DAqBVexQ.js";import"./proxiedModel-DaBGAliH.js";import"./index-BdaiM53K.js";import"./VLabel-DSsJm0B6.js";import"./VInput-C8lN0V_S.js";import"./locale-DYN4KMd8.js";import"./index-DDQZ-RJM.js";import"./transition-C81aHyit.js";import"./dimensions-BI5CQRk1.js";import"./FSIconCard-DzysKg3d.js";import"./FSColor-D-t7tRtb.js";const K={title:"Foundation/Shared/Tiles/Location",component:i,subcomponents:{FSTile:s},tags:["autodocs"],argTypes:{color:{control:"color"},height:{control:"number"},width:{control:"number"}}},e={render:n=>({components:{FSLocationTileUI:i},setup(){return{args:n}},template:`
      <FSLocationTileUI
        :label="args.label"
        :code="args.code"
        :address="args.address"
        :color="args.color"
        :icon="args.icon"
        :deviceCount="args.deviceCount"
        :width="args.width"
        :height="args.height"
        :singleSelect="args.singleSelect"
        :selected="args.selected"
        :modelValue="args.modelValue"
      />
    `}),args:{label:"Location test 2",code:"location-test-code-long-format-with-description",color:"#9F2424",icon:"mdi-cog",deviceCount:1,address:"50 rue des Vignes, 75000 Paris",width:418,height:140,singleSelect:!1,modelValue:!1}};var o,t,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSLocationTileUI
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSLocationTileUI
        :label="args.label"
        :code="args.code"
        :address="args.address"
        :color="args.color"
        :icon="args.icon"
        :deviceCount="args.deviceCount"
        :width="args.width"
        :height="args.height"
        :singleSelect="args.singleSelect"
        :selected="args.selected"
        :modelValue="args.modelValue"
      />
    \`
  }),
  args: {
    label: 'Location test 2',
    code: 'location-test-code-long-format-with-description',
    color: '#9F2424',
    icon: 'mdi-cog',
    deviceCount: 1,
    address: '50 rue des Vignes, 75000 Paris',
    width: 418,
    height: 140,
    singleSelect: false,
    modelValue: false
  }
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,K as default};
