import r from"./FSSwitch-BBMKzoNv.js";import{F as s}from"./FSText-BvUMyUbP.js";import"./vue.esm-bundler-CqZ6aK3I.js";import"./FSSpan-B7HDTlg9.js";import"./useBreakpoints-DMrtgY61.js";import"./useSlots-BgbXyH5p.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCol-DIPgj7wU.js";import"./css-BZjDzSZ1.js";import"./FSRow-udQVJR1p.js";import"./useColors-CaMUbg8a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CCooKRqg.js";import"./useRules-Cutg_0Yh.js";import"./index-BNfVP6r5.js";import"./color-6mal3hP4.js";import"./VDefaultsProvider-oq6rnkoo.js";import"./VInput-XpqL7_rK.js";import"./locale-BJmdjC_5.js";import"./VIcon-beNtbbqt.js";import"./transition-C13qRIR1.js";import"./density-B3EUR5Bv.js";import"./dimensions-CuS7VcMO.js";import"./proxiedModel-BirLikdP.js";import"./VSelectionControl-asaj2cFo.js";import"./index-BSoBU6Pm.js";import"./VLabel-BhsUugfE.js";import"./loader-zbNw4pum.js";import"./VProgressCircular-DDVR-EZI.js";import"./resizeObserver-C7qOORSR.js";import"./anchor-DiyvyHyx.js";import"./rounded-T_eKj2ZY.js";const J={title:"Foundation/Shared/Toggles/Switch",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(o,{argTypes:a})=>({components:{FSSwitch:r,FSText:s},props:Object.keys(a),setup(){return{...o}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText font="text-h3"> Primary color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model="args.value1" />
        <FSSwitch v-model="args.value2" label="Second switch" />
        <FSSwitch v-model="args.value3" label="Third switch"  description="Description of the third switch" />
      </div>
      <FSText font="text-h3"> Variant right </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch variant="right" v-model="args.value1" />
        <FSSwitch variant="right" v-model="args.value2" label="Second switch" />
        <FSSwitch variant="right" v-model="args.value3" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> Success color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model="args.value4" color="success" />
        <FSSwitch v-model="args.value5" color="success" label="Second switch" />
        <FSSwitch v-model="args.value6" color="success" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> Primary color, disabled </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch :modelValue="false" :disabled="true" />
        <FSSwitch :modelValue="true" :disabled="true" label="Second switch (disabled)" />
        <FSSwitch :modelValue="false" :disabled="true" label="Third switch (disabled)" description="Description of the third switch" />
      </div>
    </div>`})};var t,i,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false,
      value2: false,
      value3: false,
      value4: true,
      value5: false,
      value6: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSwitch,
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
      <FSText font="text-h3"> Primary color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model="args.value1" />
        <FSSwitch v-model="args.value2" label="Second switch" />
        <FSSwitch v-model="args.value3" label="Third switch"  description="Description of the third switch" />
      </div>
      <FSText font="text-h3"> Variant right </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch variant="right" v-model="args.value1" />
        <FSSwitch variant="right" v-model="args.value2" label="Second switch" />
        <FSSwitch variant="right" v-model="args.value3" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> Success color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model="args.value4" color="success" />
        <FSSwitch v-model="args.value5" color="success" label="Second switch" />
        <FSSwitch v-model="args.value6" color="success" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> Primary color, disabled </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch :modelValue="false" :disabled="true" />
        <FSSwitch :modelValue="true" :disabled="true" label="Second switch (disabled)" />
        <FSSwitch :modelValue="false" :disabled="true" label="Third switch (disabled)" description="Description of the third switch" />
      </div>
    </div>\`
  })
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const K=["Variations"];export{e as Variations,K as __namedExportsOrder,J as default};
