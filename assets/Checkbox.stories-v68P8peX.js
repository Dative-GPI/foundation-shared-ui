import{F as t}from"./FSCheckbox-D615kJWP.js";import{F as d}from"./FSText-CyTnv_LZ.js";import"./vue.esm-bundler-DtArtqdn.js";import"./FSIcon-DAU03b1P.js";import"./useBreakpoints-DjafNA1e.js";import"./useColors-P6sW9vWR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BTycGIF1.js";import"./css-Byt5yd9p.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-_X0ionFS.js";import"./color-DKVd81aj.js";import"./FSSpan-Btkwe66a.js";import"./useSlots-DbyfVVj5.js";import"./FSCol-D6yYDi9X.js";import"./FSRow-C-mN1bTt.js";import"./useRules-eDN7Chft.js";import"./VSelectionControl-D_AGLwLV.js";import"./density-96HGjcby.js";import"./proxiedModel-DNPVb8sx.js";import"./index-DWcj--5B.js";import"./VLabel-D5MHSYH0.js";import"./VInput-Dw4F_0vm.js";import"./locale-EnvrzLNX.js";import"./index-YdMT2sR1.js";import"./transition-POm6u0ds.js";import"./dimensions-Dt4h5jdR.js";const A={title:"Foundation/Shared/Toggles/Checkbox",component:t,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(i,{argTypes:a})=>({components:{FSCheckbox:t,FSText:d},props:Object.keys(a),setup(){return{...i}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox v-model="args.value1" />
        <FSCheckbox v-model="args.value2" label="Second checkbox" />
        <FSCheckbox v-model="args.value3" label="Third checkbox"  description="Description of the third checkbox" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Error color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox v-model="args.value4" color="error" />
        <FSCheckbox v-model="args.value5" color="error" label="Second checkbox" />
        <FSCheckbox v-model="args.value6" color="error" label="Third checkbox"  description="Description of the third checkbox" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, disabled </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox :modelValue="false" :disabled="true" />
        <FSCheckbox :modelValue="true" :disabled="true" label="Second checkbox (disabled)" />
        <FSCheckbox :modelValue="false" :disabled="true" label="Third checkbox (disabled)" description="Description of the third checkbox" />
      </div>
    </div>`})};var o,r,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
      FSCheckbox,
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
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox v-model="args.value1" />
        <FSCheckbox v-model="args.value2" label="Second checkbox" />
        <FSCheckbox v-model="args.value3" label="Third checkbox"  description="Description of the third checkbox" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Error color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox v-model="args.value4" color="error" />
        <FSCheckbox v-model="args.value5" color="error" label="Second checkbox" />
        <FSCheckbox v-model="args.value6" color="error" label="Third checkbox"  description="Description of the third checkbox" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, disabled </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSCheckbox :modelValue="false" :disabled="true" />
        <FSCheckbox :modelValue="true" :disabled="true" label="Second checkbox (disabled)" />
        <FSCheckbox :modelValue="false" :disabled="true" label="Third checkbox (disabled)" description="Description of the third checkbox" />
      </div>
    </div>\`
  })
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const B=["Variations"];export{e as Variations,B as __namedExportsOrder,A as default};
