import{F as i}from"./FSSlider-Dnh-YYao.js";import{F as a}from"./FSCol-ChYB2Oag.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSRow-BTBqaZ3Z.js";import"./css-BA19cdxW.js";import"./useBreakpoints-Trboya0O.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSBaseField-DjPNexk7.js";import"./FSSpan-CffnRYnX.js";import"./useSlots-DEXetpJf.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./VSlider-so1FrUic.js";import"./VSliderTrack-Bx_4yzUt.js";import"./index-C0WTB2TM.js";import"./useRender-C5CA_XPC.js";import"./color-Cx3XlwVF.js";import"./elevation-DyTGrbk9.js";import"./locale-MGWjZjXD.js";import"./proxiedModel-4bJ1saXA.js";import"./index-CDgYZebE.js";import"./rounded-BE8u9DAQ.js";import"./VInput-CBXzUquC.js";import"./VIcon-BPCLtKbp.js";import"./icons-AciKn6XY.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./transition-Dqm8buww.js";import"./density-HajNgXBf.js";import"./dimensions-BuDdBtmf.js";import"./VLabel-DOSQu5RP.js";const I={title:"Shared/Components/Slider",component:i,tags:["autodocs"],argTypes:{}},r={args:{args:{value1:0,value2:5,value3:15,value4:50}},render:(l,{argTypes:n})=>({components:{FSSlider:i,FSCol:a},props:Object.keys(n),setup(){return{...l}},template:`
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
        label="Disabled"
        :disabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var e,o,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
        label="Disabled"
        :disabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const J=["Variations"];export{r as Variations,J as __namedExportsOrder,I as default};
