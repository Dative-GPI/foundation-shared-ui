import{F as i}from"./FSRadioGroup-BRFIp4ur.js";import{F as l}from"./FSText-BwKgSTLP.js";import"./vue.esm-bundler-l-siv0w9.js";import"./FSRadio-CqjI9hQz.js";import"./FSIcon-uIr9VdFq.js";import"./useBreakpoints-C5IzU8MC.js";import"./useColors-Bs2u1_6J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./css-CP2C2-Fe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-D6ql3n-m.js";import"./color-De-77ojK.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./FSCol-BvqytbKT.js";import"./FSRow-CbEgVN08.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";const V={title:"Foundation/Shared/Toggles/Radio",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:0,value3:1,options1:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options2:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options3:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}]}},render:(r,{argTypes:a})=>({components:{FSRadioGroup:i,FSText:l},props:Object.keys(a),setup(){return{...r}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <FSRadioGroup :values="args.options1" v-model="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Warning color </FSText>
      <FSRadioGroup :values="args.options2" v-model="args.value2" color="warning" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <FSRadioGroup :values="args.options3" v-model="args.value3" :editable="false" />
    </div>`})};var e,t,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: 0,
      value3: 1,
      options1: [{
        value: 0
      }, {
        value: 1,
        label: "Second option"
      }, {
        value: 2,
        label: "Third option",
        description: "Description of the third option"
      }],
      options2: [{
        value: 0
      }, {
        value: 1,
        label: "Second option"
      }, {
        value: 2,
        label: "Third option",
        description: "Description of the third option"
      }],
      options3: [{
        value: 0
      }, {
        value: 1,
        label: "Second option"
      }, {
        value: 2,
        label: "Third option",
        description: "Description of the third option"
      }]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSRadioGroup,
      FSText
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <FSRadioGroup :values="args.options1" v-model="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Warning color </FSText>
      <FSRadioGroup :values="args.options2" v-model="args.value2" color="warning" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <FSRadioGroup :values="args.options3" v-model="args.value3" :editable="false" />
    </div>\`
  })
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const W=["Variations"];export{o as Variations,W as __namedExportsOrder,V as default};