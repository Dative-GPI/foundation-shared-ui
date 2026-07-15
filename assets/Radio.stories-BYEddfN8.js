import{F as i}from"./FSRadioGroup-hTTTyxvs.js";import{F as l}from"./FSText-DIbyStIN.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSRadio-Dd1EMADi.js";import"./FSIcon-BcHBVf_o.js";import"./useBreakpoints-DO2FQykY.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./css-CUVOJ3aO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-Cu6WQqXu.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSSpan-B28b2m0n.js";import"./useSlots-DEXetpJf.js";import"./FSCol-KRtq6OYO.js";import"./FSRow-Dg2RhQyl.js";import"./useRules-eFcMZq7y.js";import"./VSelectionControl-BqUEMQy8.js";import"./density-CE2FkSgs.js";import"./proxiedModel-VL_RP4zk.js";import"./index-B-eFr4Nw.js";import"./VLabel-BtnooUPU.js";const _={title:"Shared/Components/Toggles/Radio",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:0,value3:1,options1:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options2:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options3:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}]}},render:(n,{argTypes:a})=>({components:{FSRadioGroup:i,FSText:l},props:Object.keys(a),setup(){return{...n}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <FSRadioGroup :values="args.options1" v-model="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Warning color </FSText>
      <FSRadioGroup :values="args.options2" v-model="args.value2" color="warning" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, disabled </FSText>
      <FSRadioGroup :values="args.options3" v-model="args.value3" :disabled="true" />
    </div>`})};var e,t,r;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(r=(t=o.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const E=["Variations"];export{o as Variations,E as __namedExportsOrder,_ as default};
