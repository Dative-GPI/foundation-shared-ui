import{V as o}from"./vue.esm-bundler-DR0_aU9U.js";import{a as h,b as y}from"./properties-Qw-O9fbT.js";import{F as x}from"./FSSlider-D_2Q17Vn.js";import{F as r}from"./FSClock-Cms7mPkf.js";import{F as w}from"./FSCol-B2uM4vFw.js";import"./FSRow-C8VtPvPz.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSBaseField-y2QkcP3h.js";import"./FSSpan-9E7WYB2n.js";import"./useSlots-p1mkRhuZ.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./VSlider-PR8y8RxP.js";import"./VSliderTrack-4fUWbdH1.js";import"./index-C-lZWyiZ.js";import"./useRender-BLRtLddt.js";import"./color-RD9Ud5Y3.js";import"./elevation-DVEOfLMu.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./index-Dlqh_ozP.js";import"./rounded-B6-M_5uG.js";import"./VInput-Cb7sX7IB.js";import"./VIcon-e3y7Ok8e.js";import"./icons-CT9uuJgl.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./transition-CedxoFs4.js";import"./density-SLEyWIf6.js";import"./dimensions-DYTrXD1P.js";import"./VLabel-BfwkTHLb.js";import"./useDateFormat-DAnuesY2.js";import"./useAppLanguageCode-BoL-n_ZZ.js";import"./useAppTimeZone-fWyn93dw.js";import"./datesTools-B-vlCrHb.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-CDmrxgqt.js";import"./VTextField-Jo2lzvlt.js";import"./VField-BhclGBdp.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./intersectionObserver-DIY-g69O.js";import"./anchor-CT7OU_gq.js";import"./easing--CnlGZ0M.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BLyOCIqB.js";const ye={title:"Foundation/Shared/Clock",component:r,tags:["autodocs"],argTypes:{...y([x],r),...h(r)}},t={args:{modelValue:36e5,slider:!0},render:e=>({components:{FSClock:r},setup(){return{args:e}},template:`
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
