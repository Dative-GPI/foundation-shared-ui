import{F as i}from"./FSIconCard-CGvq_r_x.js";import"./vue.esm-bundler-CTTOvLCD.js";import"./FSCard-DxhVm8H0.js";import"./FSCol-BPr0jVzk.js";import"./css-D46r6e5F.js";import"./useBreakpoints-Bm7CjYdd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-C8EFLcn9.js";import"./useColors-D7R-CyI7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./FSIcon-yzGYQgqh.js";import"./VIcon-DzkIKThE.js";import"./color-DTA1Qd0w.js";const v={title:"Foundation/Shared/IconCard",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{values:[{id:"1",iconColor:"#FF0000",iconVariant:"base",backgroundColor:["#0000FF","#FFFFFF"],backgroundVariant:"gradient"},{id:"2"},{id:"3",icon:"mdi-account",backgroundColor:["#0000FF"],backgroundVariant:"standard"},{id:"4",icon:"mdi-account",backgroundColor:["#0000FF","#FF0000"],backgroundVariant:"gradient"},{id:"5",icon:"mdi-account",backgroundColor:["#0000FF"],backgroundVariant:"full"},{id:"6",icon:"mdi-account",backgroundColor:["#FFFF8F"],backgroundVariant:"full"},{id:"6",icon:"mdi-account",backgroundColor:["#FFFF8F","#FF0000"],backgroundVariant:"gradient"},{id:"7",icon:"mdi-account",backgroundColor:["#FFFF8F","#FF0000","#FFFF8F"],backgroundVariant:"gradient"},{id:"8",icon:"mdi-account",backgroundColor:["#FF0000","#FFFF8F","#FF0000"],backgroundVariant:"gradient"}],selected:[!1,!1,!1]}},render:(d,{argTypes:F})=>({components:{FSIconCard:i},props:Object.keys(F),setup(){return{...d}},template:`
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
        backgroundColor: ["#FFFF8F"],
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
