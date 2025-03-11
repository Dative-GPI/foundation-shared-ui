import{F as i}from"./FSSlider-DZM1caa4.js";import{F as a}from"./FSCol-BQiFrdcO.js";import"./vue.esm-bundler-CUSnV4DE.js";import"./FSSpan-M9GEX7v6.js";import"./useBreakpoints-CQzBW1Q0.js";import"./useSlots-CY84M1fx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-hpHYWcoJ.js";import"./css-BnRE2gle.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./VSlider-d1EMo4YV.js";import"./elevation-C08MHLji.js";import"./locale-DYN4KMd8.js";import"./rounded-DQzQH8wE.js";import"./index-DDQZ-RJM.js";import"./color-CgsoZSKd.js";import"./index-BdaiM53K.js";import"./VInput-C8lN0V_S.js";import"./VIcon-DeLOaNVc.js";import"./transition-C81aHyit.js";import"./density-DAqBVexQ.js";import"./dimensions-BI5CQRk1.js";import"./proxiedModel-DaBGAliH.js";import"./VLabel-DSsJm0B6.js";const E={title:"Foundation/Shared/Slider",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:0,value2:5,value3:15,value4:50}},render:(n,{argTypes:l})=>({components:{FSSlider:i,FSCol:a},props:Object.keys(l),setup(){return{...n}},template:`
    <FSCol>
      <FSSlider
        label="Slider - dark color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSlider
        color="primary"
        label="Slider - min: 0 - max: 10 - step: 1 - primary color"
        :min="0"
        :max="10"
        :step="1"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSlider
        color="warning"
        label="Required slider - min: 0 - max: 10 - step: 1 - ticks - warning color"
        description="Description for this field"
        :required="true"
        :showTicks="'always'"
        :min="0"
        :max="25"
        :step="1"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSlider
        label="Uneditable"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    args: {
      value1: 0,
      value2: 5,
      value3: 15,
      value4: 50
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSlider,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSSlider
        label="Slider - dark color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSlider
        color="primary"
        label="Slider - min: 0 - max: 10 - step: 1 - primary color"
        :min="0"
        :max="10"
        :step="1"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSlider
        color="warning"
        label="Required slider - min: 0 - max: 10 - step: 1 - ticks - warning color"
        description="Description for this field"
        :required="true"
        :showTicks="'always'"
        :min="0"
        :max="25"
        :step="1"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSlider
        label="Uneditable"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const z=["Variations"];export{e as Variations,z as __namedExportsOrder,E as default};
