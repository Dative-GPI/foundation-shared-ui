import{F as i}from"./FSSlider-MrCtwS3U.js";import{F as a}from"./FSCol-CPY6S-Xd.js";import"./vue.esm-bundler-NAfsqApI.js";import"./FSSpan-CLtVPKpS.js";import"./useBreakpoints-BwxwzcAl.js";import"./useSlots-S0O9Daut.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-GjwhmX1p.js";import"./css-DBDqGZ-V.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./VSlider-BZyCF8pi.js";import"./elevation-B-XsQHpK.js";import"./locale-CAPEya44.js";import"./rounded-DwVJT96z.js";import"./index-Dne_26Gx.js";import"./color-BvydW9AS.js";import"./index-o6vlk9JB.js";import"./VInput-B5HH3Lye.js";import"./VIcon-PiNvAqE-.js";import"./transition-L7INWkz2.js";import"./density-BGeA8UH8.js";import"./dimensions-IFPI4Yq9.js";import"./proxiedModel-sn-eI_a5.js";import"./form-DTsyvZhj.js";import"./VLabel-BDFzMscP.js";const z={title:"Foundation/Shared/Slider",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:0,value2:5,value3:15,value4:50}},render:(n,{argTypes:l})=>({components:{FSSlider:i,FSCol:a},props:Object.keys(l),setup(){return{...n}},template:`
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const A=["Variations"];export{e as Variations,A as __namedExportsOrder,z as default};
