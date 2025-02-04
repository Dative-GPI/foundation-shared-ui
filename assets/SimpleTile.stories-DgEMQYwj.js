import{F as r}from"./FSSimpleTileUI-D4Sas0yr.js";import"./leaflet-src-CVI3lIVZ.js";import"./vue.esm-bundler-NAfsqApI.js";import"./FSIconCard-B7o102Mb.js";import"./FSCard-DOESxZy8.js";import"./FSCol-CPY6S-Xd.js";import"./css-DBDqGZ-V.js";import"./useBreakpoints-BwxwzcAl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-GjwhmX1p.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./FSIcon-Dq2bxLH5.js";import"./VIcon-PiNvAqE-.js";import"./color-BvydW9AS.js";import"./FSImage-pL2n9Qiy.js";import"./FSImageUI-5vzo4bHr.js";import"./FSLoader-C8dZP0ML.js";import"./dimensions-IFPI4Yq9.js";import"./elevation-B-XsQHpK.js";import"./locale-CAPEya44.js";import"./VImg-D7CqP58l.js";import"./rounded-DwVJT96z.js";import"./transition-L7INWkz2.js";import"./index-DINlpRuJ.js";import"./useImages-V3peuH-V.js";import"./base-CmdGny12.js";import"./composableFactory-WcheuuwI.js";import"./serviceFactory-DMr1GitK.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DQih8RjT.js";import"./FSSpan-CLtVPKpS.js";import"./useSlots-S0O9Daut.js";import"./FSTile-DVIPkavo.js";import"./FSClickable-Dvaj3J5M.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./VProgressCircular-B6p7zTwg.js";import"./resizeObserver-CLnVcpcq.js";import"./FSCheckbox-CZADXYvb.js";import"./useRules-pqUeO9kt.js";import"./VSelectionControl-CV2pv1R-.js";import"./density-BGeA8UH8.js";import"./proxiedModel-sn-eI_a5.js";import"./index-o6vlk9JB.js";import"./VLabel-BDFzMscP.js";import"./VInput-B5HH3Lye.js";import"./index-Dne_26Gx.js";import"./form-DTsyvZhj.js";const ni={title:"Foundation/Shared/Tiles/SimpleTile",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2",icon:"mdi-account",singleSelect:!0},{id:"3",label:"Simple tile with color",bottomColor:["#0000FF","#FFFFFF"]},{id:"4",label:"Simple tile with color",icon:"mdi-account",bottomColor:["#0000FF","#FF0000"],iconBackgroundColor:["#0000FF","#FF0000"],iconBackgroundVariant:"gradient"}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
