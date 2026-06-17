import{e as o}from"./vue.esm-bundler-C5-CUMHT.js";import{a as h,b as y}from"./properties-Qw-O9fbT.js";import{F as x}from"./FSSlider-xFnx_m0H.js";import{F as r}from"./FSClock-DYGPHEb1.js";import{F as w}from"./FSCol-DedFW0nl.js";import"./FSRow-C8aYwBu-.js";import"./css-DSFbdPon.js";import"./useBreakpoints-pPMhsL5T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSBaseField-B1fPD4-R.js";import"./FSSpan-D6aG51_c.js";import"./useSlots-ol4Nk6ew.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./VSlider-d79sl-Sm.js";import"./VSliderTrack-C4ylwxyo.js";import"./index-pS3mXfMR.js";import"./useRender-_COxrB9K.js";import"./color-D7ZCcSxD.js";import"./elevation-DfTZ1KyC.js";import"./locale-BNkeanE6.js";import"./proxiedModel-CV-HTW34.js";import"./index-asyjLxvi.js";import"./rounded-Ctowy803.js";import"./VInput-Y0iB4nur.js";import"./VIcon-IlEzlDWp.js";import"./icons-CucLNLjN.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./transition-CgRUW3r8.js";import"./density-qUtw3dk7.js";import"./dimensions-Bm76csmg.js";import"./VLabel-COLF1QPQ.js";import"./useDateFormat-D3hpfVqH.js";import"./useTranslations-DAi7IZoP.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./useAppLanguageCode-CembXc6P.js";import"./useAppTimeZone-s1RlKu8w.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./VTextField-CPakm9mu.js";import"./VField-Cbr0bjXl.js";import"./loader-CVb0Ac9O.js";import"./VProgressLinear-F46fcvb0.js";import"./intersectionObserver-D1RZdbEq.js";import"./anchor-Dj2AEc5N.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B3ZVJx30.js";const we={title:"Shared/Components/Clock",component:r,tags:["autodocs"],argTypes:{...y([x],r),...h(r)}},t={args:{modelValue:36e5,slider:!0},render:e=>({components:{FSClock:r},setup(){return{args:e}},template:`
      <FSClock
        v-bind="args"
        v-model="args.modelValue"
      />
    `})},n={args:{modelValue:54e5,slider:!1},render:e=>({components:{FSClock:r},setup(){return{args:e}},template:`
      <FSClock
        v-bind="args"
        v-model="args.modelValue"
      />
    `})},l={args:{modelValue:72e5,slider:!0,disabled:!0},render:e=>({components:{FSClock:r},setup(){return{args:e}},template:`
      <FSClock
        v-bind="args"
        v-model="args.modelValue"
      />
    `})},a={args:{modelValue:0},render:e=>({components:{FSClock:r,FSCol:w},setup(){const b=o(0),k=o(36e5),f=o(459e5),V=o(72e5);return{args:e,value1:b,value2:k,value3:f,value4:V}},template:`
      <FSCol gap="20px">
        <FSClock
          v-model="value1"
          :slider="true"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSClock
          v-model="value2"
          :slider="true"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSClock
          v-model="value3"
          :slider="false"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSClock
          v-model="value4"
          :disabled="true"
          :slider="true"
        />
      </FSCol>
    `})};var s,m,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    modelValue: 3600000,
    slider: true
  },
  render: args => ({
    components: {
      FSClock
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSClock
        v-bind="args"
        v-model="args.modelValue"
      />
    \`
  })
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var i,p,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    modelValue: 5400000,
    slider: false
  },
  render: args => ({
    components: {
      FSClock
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSClock
        v-bind="args"
        v-model="args.modelValue"
      />
    \`
  })
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,g,v;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    modelValue: 7200000,
    slider: true,
    disabled: true
  },
  render: args => ({
    components: {
      FSClock
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSClock
        v-bind="args"
        v-model="args.modelValue"
      />
    \`
  })
}`,...(v=(g=l.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,F,C;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    modelValue: 0
  },
  render: args => ({
    components: {
      FSClock,
      FSCol
    },
    setup() {
      const value1 = ref(0);
      const value2 = ref(3600000);
      const value3 = ref(45900000);
      const value4 = ref(7200000);
      return {
        args,
        value1,
        value2,
        value3,
        value4
      };
    },
    template: \`
      <FSCol gap="20px">
        <FSClock
          v-model="value1"
          :slider="true"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSClock
          v-model="value2"
          :slider="true"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSClock
          v-model="value3"
          :slider="false"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSClock
          v-model="value4"
          :disabled="true"
          :slider="true"
        />
      </FSCol>
    \`
  })
}`,...(C=(F=a.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const De=["Default","WithoutSlider","Disabled","Variations"];export{t as Default,l as Disabled,a as Variations,n as WithoutSlider,De as __namedExportsOrder,we as default};
