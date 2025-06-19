import{F as i}from"./FSSlider-D48CyF2S.js";import{F as a}from"./FSCol-BU2zndN-.js";import"./vue.esm-bundler-BB--BfRN.js";import"./FSRow-Bdc52rY8.js";import"./css-DoweNwVf.js";import"./useBreakpoints-f5uwzDhq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSBaseField-BxMUaAXJ.js";import"./FSSpan-BndtI8AP.js";import"./useSlots-COLyvmal.js";import"./useColors-CeWNZtds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BwQCEo_4.js";import"./VSlider-Bn75Yh_W.js";import"./VSliderTrack-D17LvGqE.js";import"./index-9ysw5oGg.js";import"./color-DIvEt_AX.js";import"./elevation-S_BtbnzN.js";import"./locale-CSWC84Vq.js";import"./index-8zgUIpZ9.js";import"./rounded-BKWlZxOJ.js";import"./VInput-BfMi-lTR.js";import"./VIcon-Cl87HT90.js";import"./transition-GJJG9yri.js";import"./density-Xpr_P7nk.js";import"./dimensions-DwY9cRwZ.js";import"./proxiedModel-DMSSa4ZW.js";import"./VLabel-Cmax-_yp.js";const B={title:"Foundation/Shared/Slider",component:i,tags:["autodocs"],argTypes:{}},r={args:{args:{value1:0,value2:5,value3:15,value4:50}},render:(l,{argTypes:n})=>({components:{FSSlider:i,FSCol:a},props:Object.keys(n),setup(){return{...l}},template:`
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
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const G=["Variations"];export{r as Variations,G as __namedExportsOrder,B as default};
