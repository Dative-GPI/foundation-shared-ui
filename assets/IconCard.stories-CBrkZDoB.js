import{F as i}from"./FSIconCard-BlsFbvOA.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSCard-DENSLTM_.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";const O={title:"Foundation/Shared/IconCard",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{values:[{id:"1",iconColor:"#FF0000",iconVariant:"base",backgroundColor:["#0000FF","#FFFFFF"],backgroundVariant:"gradient"},{id:"2"},{id:"3",icon:"mdi-account",backgroundColor:["#0000FF"],backgroundVariant:"standard"},{id:"4",icon:"mdi-account",backgroundColor:["#0000FF","#FF0000"],backgroundVariant:"gradient"},{id:"5",icon:"mdi-account",backgroundColor:["#0000FF"],backgroundVariant:"full"},{id:"6",icon:"mdi-account",backgroundColor:"#FFFF8F",backgroundVariant:"full"},{id:"6",icon:"mdi-account",backgroundColor:["#FFFF8F","#FF0000"],backgroundVariant:"gradient"},{id:"7",icon:"mdi-account",backgroundColor:["#FFFF8F","#FF0000","#FFFF8F"],backgroundVariant:"gradient"},{id:"8",icon:"mdi-account",backgroundColor:["#FF0000","#FFFF8F","#FF0000"],backgroundVariant:"gradient"}],selected:[!1,!1,!1]}},render:(d,{argTypes:t})=>({components:{FSIconCard:i},props:Object.keys(t),setup(){return{...d}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSIconCard
        v-for="(entity, index) in args.values"
        :key="index"
        v-bind="entity"
      />
    </div>`})};var a,o,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const T=["Variations"];export{n as Variations,T as __namedExportsOrder,O as default};
