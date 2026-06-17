import{e as o}from"./vue.esm-bundler-NVdFPFZB.js";import{a as h,b as y}from"./properties-Qw-O9fbT.js";import{F as x}from"./FSSlider-BGwqsXDf.js";import{F as r}from"./FSClock-DfXIuyJ6.js";import{F as w}from"./FSCol-KRtq6OYO.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSBaseField-CishEyxh.js";import"./FSSpan-B28b2m0n.js";import"./useSlots-DEXetpJf.js";import"./useColors-B9SkzYFF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./VSlider-B3ymumPR.js";import"./VSliderTrack-DOx_w6yS.js";import"./index-ByfGjSW7.js";import"./useRender-CaGCh2Xu.js";import"./color-BS29f5Yp.js";import"./elevation-DQ_qKX67.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./index-B-eFr4Nw.js";import"./rounded-CS1_z6Jk.js";import"./VInput-BA20Y-wG.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./transition-a5pzBS6c.js";import"./density-CE2FkSgs.js";import"./dimensions-CS_qJJhy.js";import"./VLabel-BtnooUPU.js";import"./useDateFormat-BKFE7Nxu.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./useAppLanguageCode-CFDnQcKu.js";import"./useAppTimeZone-CjwINmn2.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./intersectionObserver-DwVsweQn.js";import"./anchor-Se7MGGLO.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Blv54jCg.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B4rZgXN-.js";const we={title:"Shared/Components/Clock",component:r,tags:["autodocs"],argTypes:{...y([x],r),...h(r)}},t={args:{modelValue:36e5,slider:!0},render:e=>({components:{FSClock:r},setup(){return{args:e}},template:`
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
