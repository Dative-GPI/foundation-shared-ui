import{F as t}from"./FSCheckbox-zoBL9ZjY.js";import{F as d}from"./FSText-DL_5kFi7.js";import"./vue.esm-bundler-D_gXonxt.js";import"./FSIcon-B9MXbR5l.js";import"./useBreakpoints-BWz07CZT.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./css-Bznx04uW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-gCapjdof.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSSpan-ap0CpdXZ.js";import"./useSlots-CdBAzqCX.js";import"./FSCol-C3EJfcJX.js";import"./FSRow-cHWWqhhs.js";import"./useRules-CohX4tE3.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./density-W7RG4BnT.js";import"./proxiedModel-Cl0bR0rs.js";import"./index-ByzLombQ.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./locale-CEMLpecI.js";import"./index-aKIkx5xA.js";import"./transition-CHyhkthg.js";import"./dimensions-BYDjhYdL.js";const I={title:"Foundation/Shared/Toggles/Checkbox",component:t,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(i,{argTypes:a})=>({components:{FSCheckbox:t,FSText:d},props:Object.keys(a),setup(){return{...i}},template:`
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
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const J=["Variations"];export{e as Variations,J as __namedExportsOrder,I as default};
