import{F as i}from"./FSIconCard-Df7qPY01.js";import"./vue.esm-bundler-CocPPKUI.js";import"./FSCard-2KUMcI8D.js";import"./FSCol-79-COv64.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BvJ7lU5E.js";import"./useColors-C1aD-Kb6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1Gcptw7.js";import"./FSIcon-BGuuL0jz.js";import"./VIcon-ZjKwFcqe.js";import"./color-D50-hVV_.js";const v={title:"Foundation/Shared/IconCard",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{values:[{id:"1",iconColor:"#FF0000",iconVariant:"base",backgroundColor:["#0000FF","#FFFFFF"],backgroundVariant:"gradient"},{id:"2"},{id:"3",icon:"mdi-account",backgroundColor:["#0000FF"],backgroundVariant:"standard"},{id:"4",icon:"mdi-account",backgroundColor:["#0000FF","#FF0000"],backgroundVariant:"gradient"},{id:"5",icon:"mdi-account",backgroundColor:["#0000FF"],backgroundVariant:"full"},{id:"6",icon:"mdi-account",backgroundColor:"#FFFF8F",backgroundVariant:"full"},{id:"6",icon:"mdi-account",backgroundColor:["#FFFF8F","#FF0000"],backgroundVariant:"gradient"},{id:"7",icon:"mdi-account",backgroundColor:["#FFFF8F","#FF0000","#FFFF8F"],backgroundVariant:"gradient"},{id:"8",icon:"mdi-account",backgroundColor:["#FF0000","#FFFF8F","#FF0000"],backgroundVariant:"gradient"}],selected:[!1,!1,!1]}},render:(d,{argTypes:F})=>({components:{FSIconCard:i},props:Object.keys(F),setup(){return{...d}},template:`
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
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const x=["Variations"];export{n as Variations,x as __namedExportsOrder,v as default};
