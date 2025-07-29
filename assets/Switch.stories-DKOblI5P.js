import r from"./FSSwitch-BrfAaS2N.js";import{F as s}from"./FSText-C7hkL3As.js";import"./vue.esm-bundler-PONd4AmC.js";import"./FSSpan-DxKJLsSl.js";import"./useBreakpoints-RTs-XAJF.js";import"./useSlots-nyIcwo6G.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCol-Bfhiyt6Y.js";import"./css-BeoQuAfr.js";import"./FSRow-C-b-hpWa.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./useRules-CT5DWk6c.js";import"./index-CANKuvlL.js";import"./color-_AiH45em.js";import"./VDefaultsProvider-BsWh58B_.js";import"./VInput-ClaXJMCA.js";import"./locale-CoLhg8Wl.js";import"./VIcon-DIMW80nW.js";import"./transition-BXZIGKil.js";import"./density-CNNumQ_A.js";import"./dimensions-CNbPgA3L.js";import"./proxiedModel-vOB1Q9Gh.js";import"./VSelectionControl-HwS3bHvU.js";import"./index-B8vPsAiL.js";import"./VLabel-5AeJpfXJ.js";import"./loader-DGoLn0VY.js";import"./VProgressCircular-CDK6zSYw.js";import"./resizeObserver-UZYihl4g.js";import"./anchor-D2WyvgD_.js";import"./rounded-BBFi0CuG.js";const J={title:"Foundation/Shared/Toggles/Switch",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(o,{argTypes:a})=>({components:{FSSwitch:r,FSText:s},props:Object.keys(a),setup(){return{...o}},template:`
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
