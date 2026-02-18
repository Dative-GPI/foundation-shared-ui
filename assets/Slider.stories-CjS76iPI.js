import{F as i}from"./FSSlider-D_gTL9Q0.js";import{F as a}from"./FSCol-D_lbFmZy.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSBaseField-Buivlp1M.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./VSlider-CeqmblEU.js";import"./VSliderTrack-D8v_upRY.js";import"./index-6jMyctoo.js";import"./useRender-BcOya-6A.js";import"./color-BW36qAym.js";import"./elevation-JukLG-n6.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./index-BYo1BiTt.js";import"./rounded-lfTNxM9v.js";import"./VInput-bTNISmSY.js";import"./VIcon-mGJe0MYK.js";import"./icons-DR_vovBH.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./transition-DbItRNv8.js";import"./density-BnAGl-Nw.js";import"./dimensions-B7sNhH2O.js";import"./VLabel-D-9L6eJP.js";const I={title:"Foundation/Shared/Slider",component:i,tags:["autodocs"],argTypes:{}},r={args:{args:{value1:0,value2:5,value3:15,value4:50}},render:(l,{argTypes:n})=>({components:{FSSlider:i,FSCol:a},props:Object.keys(n),setup(){return{...l}},template:`
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
