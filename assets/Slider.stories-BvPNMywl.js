import{F as i}from"./FSSlider-DtkoFt9l.js";import{F as a}from"./FSCol-DVEaUPKl.js";import"./vue.esm-bundler-CC_jVOJ5.js";import"./FSRow-CjY3icuR.js";import"./css-DTGEi_Ca.js";import"./useBreakpoints-BMcJFLA8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSBaseField-Bo38Hl_f.js";import"./FSSpan-DkNsO5wd.js";import"./useSlots-C8jkAuOW.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./VSlider-CtHw7pV_.js";import"./VSliderTrack-CTwlVHTX.js";import"./index-Dylhq_Dl.js";import"./color-BM2dSUAO.js";import"./elevation-CjJG1XnK.js";import"./locale-K9DBMW2q.js";import"./index-DWDx8SXO.js";import"./rounded-Cy4gG01O.js";import"./VInput-0C1kQySn.js";import"./VIcon-BOLLMMm0.js";import"./transition-Ucf2Ovas.js";import"./density-mssFUWH2.js";import"./dimensions-TKp8HHzB.js";import"./proxiedModel-Nw0LX-ta.js";import"./VLabel-kKpu5iXd.js";const B={title:"Foundation/Shared/Slider",component:i,tags:["autodocs"],argTypes:{}},r={args:{args:{value1:0,value2:5,value3:15,value4:50}},render:(l,{argTypes:n})=>({components:{FSSlider:i,FSCol:a},props:Object.keys(n),setup(){return{...l}},template:`
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
