import r from"./FSSwitch-CU8UV0HO.js";import{F as s}from"./FSText-DZJhh1AD.js";import"./vue.esm-bundler-B9lxvfDw.js";import"./FSSpan-COYXSDbp.js";import"./useBreakpoints-Dc84uxeD.js";import"./useSlots-BioZKQqg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCol-BwxAijHz.js";import"./css-BHrR5cp2.js";import"./FSRow-CFa9RNor.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./useRules-Cun-4MZo.js";import"./index-7AXDWkBX.js";import"./useRender-DM2jvMPN.js";import"./VDefaultsProvider-BurwYF19.js";import"./VInput-DcZY3iGt.js";import"./locale-C647X9dJ.js";import"./proxiedModel-DRvKxps3.js";import"./VIcon-DPcX_RaC.js";import"./color-CLtf7Qrc.js";import"./icons-B5bBvhw0.js";import"./transition-Dh_EAQcC.js";import"./density-DvMOIaQw.js";import"./dimensions-n1mPaUbN.js";import"./VSelectionControl-COH1jBNJ.js";import"./index-EdIR5CJS.js";import"./VLabel-CT69iMfY.js";import"./loader-CaGstafT.js";import"./VProgressCircular-DSOzHF7B.js";import"./resizeObserver-DjRdaT-k.js";import"./anchor-ByUPiJZt.js";import"./rounded-BrvRf1BO.js";const K={title:"Foundation/Shared/Toggles/Switch",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(o,{argTypes:a})=>({components:{FSSwitch:r,FSText:s},props:Object.keys(a),setup(){return{...o}},template:`
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
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const L=["Variations"];export{e as Variations,L as __namedExportsOrder,K as default};
