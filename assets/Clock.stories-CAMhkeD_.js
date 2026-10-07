import{e as o}from"./vue.esm-bundler-NVdFPFZB.js";import{a as h,b as y}from"./properties-Qw-O9fbT.js";import{F as x}from"./FSSlider-Dnh-YYao.js";import{F as r}from"./FSClock-XIt3-5GF.js";import{F as w}from"./FSCol-ChYB2Oag.js";import"./FSRow-BTBqaZ3Z.js";import"./css-BA19cdxW.js";import"./useBreakpoints-Trboya0O.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSBaseField-DjPNexk7.js";import"./FSSpan-CffnRYnX.js";import"./useSlots-DEXetpJf.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./VSlider-so1FrUic.js";import"./VSliderTrack-Bx_4yzUt.js";import"./index-C0WTB2TM.js";import"./useRender-C5CA_XPC.js";import"./color-Cx3XlwVF.js";import"./elevation-DyTGrbk9.js";import"./locale-MGWjZjXD.js";import"./proxiedModel-4bJ1saXA.js";import"./index-CDgYZebE.js";import"./rounded-BE8u9DAQ.js";import"./VInput-CBXzUquC.js";import"./VIcon-BPCLtKbp.js";import"./icons-AciKn6XY.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./transition-Dqm8buww.js";import"./density-HajNgXBf.js";import"./dimensions-BuDdBtmf.js";import"./VLabel-DOSQu5RP.js";import"./useDateFormat-BKFE7Nxu.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./useAppLanguageCode-CFDnQcKu.js";import"./useAppTimeZone-CjwINmn2.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./VTextField-C-VZod1v.js";import"./VField-C_JZJuDz.js";import"./loader-DOKDD2NA.js";import"./VProgressLinear-DA0V-MGc.js";import"./intersectionObserver-DHmVtmN7.js";import"./anchor-C-rl7L3L.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Cane1ZR3.js";import"./forwardRefs-C-GTDzx5.js";import"./index-D_7bL_IH.js";const we={title:"Shared/Components/Clock",component:r,tags:["autodocs"],argTypes:{...y([x],r),...h(r)}},t={args:{modelValue:36e5,slider:!0},render:e=>({components:{FSClock:r},setup(){return{args:e}},template:`
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
