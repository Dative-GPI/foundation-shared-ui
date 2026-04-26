import{F as i}from"./FSIconCard-CmOhk6fq.js";import"./vue.esm-bundler-D_gXonxt.js";import"./FSCard-Cxfe3-O9.js";import"./FSRow-cHWWqhhs.js";import"./css-Bznx04uW.js";import"./useBreakpoints-BWz07CZT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./VProgressCircular-BomUTxjq.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSIcon-B9MXbR5l.js";import"./VIcon-gCapjdof.js";import"./icons-DiQlgRdj.js";const T={title:"Foundation/Shared/IconCard",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{values:[{id:"1",iconColor:"#FF0000",iconVariant:"base",backgroundColor:["#0000FF","#FFFFFF"],backgroundVariant:"gradient"},{id:"2"},{id:"3",icon:"mdi-account",backgroundColor:["#0000FF"],backgroundVariant:"standard"},{id:"4",icon:"mdi-account",backgroundColor:["#0000FF","#FF0000"],backgroundVariant:"gradient"},{id:"5",icon:"mdi-account",backgroundColor:["#0000FF"],backgroundVariant:"full"},{id:"6",icon:"mdi-account",backgroundColor:"#FFFF8F",backgroundVariant:"full"},{id:"6",icon:"mdi-account",backgroundColor:["#FFFF8F","#FF0000"],backgroundVariant:"gradient"},{id:"7",icon:"mdi-account",backgroundColor:["#FFFF8F","#FF0000","#FFFF8F"],backgroundVariant:"gradient"},{id:"8",icon:"mdi-account",backgroundColor:["#FF0000","#FFFF8F","#FF0000"],backgroundVariant:"gradient"}],selected:[!1,!1,!1]}},render:(t,{argTypes:d})=>({components:{FSIconCard:i},props:Object.keys(d),setup(){return{...t}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSIconCard
        v-for="(entity, index) in args.values"
        :key="index"
        v-bind="entity"
      />
    </div>`})};var o,a,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        iconColor: "#FF0000",
        iconVariant: "base",
        backgroundColor: ["#0000FF", "#FFFFFF"],
        backgroundVariant: "gradient"
      }, {
        id: "2"
      }, {
        id: "3",
        icon: "mdi-account",
        backgroundColor: ["#0000FF"],
        backgroundVariant: "standard"
      }, {
        id: "4",
        icon: "mdi-account",
        backgroundColor: ["#0000FF", "#FF0000"],
        backgroundVariant: "gradient"
      }, {
        id: "5",
        icon: "mdi-account",
        backgroundColor: ["#0000FF"],
        backgroundVariant: "full"
      }, {
        id: "6",
        icon: "mdi-account",
        backgroundColor: "#FFFF8F",
        backgroundVariant: "full"
      }, {
        id: "6",
        icon: "mdi-account",
        backgroundColor: ["#FFFF8F", "#FF0000"],
        backgroundVariant: "gradient"
      }, {
        id: "7",
        icon: "mdi-account",
        backgroundColor: ["#FFFF8F", "#FF0000", "#FFFF8F"],
        backgroundVariant: "gradient"
      }, {
        id: "8",
        icon: "mdi-account",
        backgroundColor: ["#FF0000", "#FFFF8F", "#FF0000"],
        backgroundVariant: "gradient"
      }],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSIconCard
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSIconCard
        v-for="(entity, index) in args.values"
        :key="index"
        v-bind="entity"
      />
    </div>\`
  })
}`,...(r=(a=n.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const j=["Variations"];export{n as Variations,j as __namedExportsOrder,T as default};
