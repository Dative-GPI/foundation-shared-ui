import{F as r}from"./FSRadioGroup-B4Mh6qyn.js";import{F as l}from"./FSText-DL_5kFi7.js";import"./vue.esm-bundler-D_gXonxt.js";import"./FSRadio-Bk5L3sqZ.js";import"./FSIcon-B9MXbR5l.js";import"./useBreakpoints-BWz07CZT.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./css-Bznx04uW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-gCapjdof.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSSpan-ap0CpdXZ.js";import"./useSlots-CdBAzqCX.js";import"./FSCol-C3EJfcJX.js";import"./FSRow-cHWWqhhs.js";import"./useRules-CohX4tE3.js";import"./VSelectionControl-Bhob2ZN1.js";import"./density-W7RG4BnT.js";import"./proxiedModel-Cl0bR0rs.js";import"./index-ByzLombQ.js";import"./VLabel-BCYtLXrQ.js";const C={title:"Foundation/Shared/Toggles/Radio",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:0,value3:1,options1:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options2:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options3:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}]}},render:(n,{argTypes:a})=>({components:{FSRadioGroup:r,FSText:l},props:Object.keys(a),setup(){return{...n}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <FSRadioGroup :values="args.options1" v-model="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Warning color </FSText>
      <FSRadioGroup :values="args.options2" v-model="args.value2" color="warning" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, disabled </FSText>
      <FSRadioGroup :values="args.options3" v-model="args.value3" :disabled="true" />
    </div>`})};var e,t,i;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
      <FSText> Primary color, disabled </FSText>
      <FSRadioGroup :values="args.options3" v-model="args.value3" :disabled="true" />
    </div>\`
  })
}`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const E=["Variations"];export{o as Variations,E as __namedExportsOrder,C as default};
