import r from"./FSSwitch-D5bgjNBx.js";import{F as s}from"./FSText-B2RNQvtL.js";import"./vue.esm-bundler-CC_jVOJ5.js";import"./FSSpan-DkNsO5wd.js";import"./useBreakpoints-BMcJFLA8.js";import"./useSlots-C8jkAuOW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCol-DVEaUPKl.js";import"./css-DTGEi_Ca.js";import"./FSRow-CjY3icuR.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./useRules-Da0JLBaA.js";import"./index-Dylhq_Dl.js";import"./color-BM2dSUAO.js";import"./VDefaultsProvider-CuIagDb9.js";import"./VInput-0C1kQySn.js";import"./locale-K9DBMW2q.js";import"./VIcon-BOLLMMm0.js";import"./transition-Ucf2Ovas.js";import"./density-mssFUWH2.js";import"./dimensions-TKp8HHzB.js";import"./proxiedModel-Nw0LX-ta.js";import"./VSelectionControl-CvHa2RXZ.js";import"./index-DWDx8SXO.js";import"./VLabel-kKpu5iXd.js";import"./loader-CbVzlK-r.js";import"./VProgressCircular-B7HKciov.js";import"./resizeObserver-BZ0AJw4z.js";import"./anchor-S0Fc85Gi.js";import"./rounded-Cy4gG01O.js";const J={title:"Foundation/Shared/Toggles/Switch",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(o,{argTypes:a})=>({components:{FSSwitch:r,FSText:s},props:Object.keys(a),setup(){return{...o}},template:`
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
