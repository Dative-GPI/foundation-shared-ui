import{F as r}from"./FSSimpleTileUI-Boz4MTP-.js";import"./leaflet-src-CCqwBO6N.js";import"./vue.esm-bundler-D_gXonxt.js";import"./FSIconCard-orS5KPa9.js";import"./FSCard-Cxfe3-O9.js";import"./FSRow-cHWWqhhs.js";import"./css-Bznx04uW.js";import"./useBreakpoints-BWz07CZT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./VProgressCircular-BomUTxjq.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSIcon-B9MXbR5l.js";import"./VIcon-gCapjdof.js";import"./icons-DiQlgRdj.js";import"./FSImage-DWYQvpU3.js";import"./FSImageUI-C_EkTaPS.js";import"./FSLoader-CdctsmAF.js";import"./dimensions-BYDjhYdL.js";import"./elevation-sxxySPKb.js";import"./locale-CEMLpecI.js";import"./proxiedModel-Cl0bR0rs.js";import"./VImg-ufpttNgj.js";import"./rounded-yhlSUX6x.js";import"./transition-CHyhkthg.js";import"./index-CpkyVf-S.js";import"./useImages-pCcsdsIl.js";import"./composableFactory-DkrZ_DEM.js";import"./serviceFactory-BqFXSmrg.js";import"./lodash-5Yh5OMmr.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-DU8AzEWU.js";import"./FSSpan-ap0CpdXZ.js";import"./useSlots-CdBAzqCX.js";import"./FSTile-Dc7IleRl.js";import"./FSCheckbox-zoBL9ZjY.js";import"./FSCol-C3EJfcJX.js";import"./useRules-CohX4tE3.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./density-W7RG4BnT.js";import"./index-ByzLombQ.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./index-aKIkx5xA.js";const li={title:"Foundation/Shared/Tiles/SimpleTile",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2",icon:"mdi-account",singleSelect:!0},{id:"3",label:"Simple tile with color",bottomColor:["#0000FF","#FFFFFF"]},{id:"4",label:"Simple tile with color",icon:"mdi-account",bottomColor:["#0000FF","#FF0000"],iconBackgroundColor:["#0000FF","#FF0000"],iconBackgroundVariant:"gradient"}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
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
