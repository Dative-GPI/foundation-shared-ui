import{e as o}from"./vue.esm-bundler-D_gXonxt.js";import{a as h,b as y}from"./properties-Qw-O9fbT.js";import{F as x}from"./FSSlider-Bh8WGjOj.js";import{F as r}from"./FSClock-DfKYiLZa.js";import{F as w}from"./FSCol-C3EJfcJX.js";import"./FSRow-cHWWqhhs.js";import"./css-Bznx04uW.js";import"./useBreakpoints-BWz07CZT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSBaseField-CGwB2cs2.js";import"./FSSpan-ap0CpdXZ.js";import"./useSlots-CdBAzqCX.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./VSlider-BXIeuNcZ.js";import"./VSliderTrack-K2dqvxwJ.js";import"./index-aKIkx5xA.js";import"./useRender-BE0GCWmZ.js";import"./color-DuOnfdFp.js";import"./elevation-sxxySPKb.js";import"./locale-CEMLpecI.js";import"./proxiedModel-Cl0bR0rs.js";import"./index-ByzLombQ.js";import"./rounded-yhlSUX6x.js";import"./VInput-By-nMj_W.js";import"./VIcon-gCapjdof.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./transition-CHyhkthg.js";import"./density-W7RG4BnT.js";import"./dimensions-BYDjhYdL.js";import"./VLabel-BCYtLXrQ.js";import"./useDateFormat-BQ8h6gVb.js";import"./useAppLanguageCode-ulGHj8Yu.js";import"./useAppTimeZone-Cxxk5HO_.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-D2TwtVAp.js";import"./VTextField-SMQo8Oxu.js";import"./VField-Cr90fIiu.js";import"./loader-DM6th8g9.js";import"./VProgressLinear-bxxDRxj8.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./anchor-DrPAsKKU.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-DJfojugM.js";import"./forwardRefs-C-GTDzx5.js";import"./index-CpkyVf-S.js";const ye={title:"Foundation/Shared/Clock",component:r,tags:["autodocs"],argTypes:{...y([x],r),...h(r)}},t={args:{modelValue:36e5,slider:!0},render:e=>({components:{FSClock:r},setup(){return{args:e}},template:`
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
}`,...(C=(F=a.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const xe=["Default","WithoutSlider","Disabled","Variations"];export{t as Default,l as Disabled,a as Variations,n as WithoutSlider,xe as __namedExportsOrder,ye as default};
