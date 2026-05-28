import i from"./FSNumberField-CgKAjoME.js";import{F as p}from"./FSForm-kBy3Krb7.js";import{F as u}from"./FSCol-B2uM4vFw.js";import{_ as g}from"./FSRow-C8VtPvPz.js";import{N as b}from"./rules-tbTkbybW.js";import"./vue.esm-bundler-DR0_aU9U.js";import"./FSTextField-tianF0jI.js";import"./FSBaseField-y2QkcP3h.js";import"./FSSpan-9E7WYB2n.js";import"./useBreakpoints-DhvOJkKp.js";import"./useSlots-p1mkRhuZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./FSButton-CX1uVweX.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./FSText-CUmuxASa.js";import"./FSIcon-CBwOL1p5.js";import"./css-B9c0ZZC5.js";import"./VIcon-e3y7Ok8e.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./icons-CT9uuJgl.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSCard--XyliQO3.js";import"./VProgressCircular-CZaehD4X.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./useRules-2yt7KWSA.js";import"./VTextField-Jo2lzvlt.js";import"./VField-BhclGBdp.js";import"./index-C-lZWyiZ.js";import"./transition-CedxoFs4.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./density-SLEyWIf6.js";import"./dimensions-DYTrXD1P.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./anchor-CT7OU_gq.js";import"./rounded-B6-M_5uG.js";import"./easing--CnlGZ0M.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BLyOCIqB.js";import"./time-DuowFvgO.js";import"./useTranslations-CDmrxgqt.js";import"./times-CqUFey1a.js";import"./datesTools-B-vlCrHb.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-DAnuesY2.js";import"./useAppLanguageCode-BoL-n_ZZ.js";import"./useAppTimeZone-fWyn93dw.js";import"./startOfDay-C4pDH4rb.js";const he={title:"Foundation/Shared/Input fields/NumberField",component:i,tags:["autodocs"],argTypes:{}},e={args:{args:{value1:0,value2:500,value3:1500}},render:(t,{argTypes:o})=>({components:{FSNumberField:i,FSCol:u},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSNumberField
        label="Number"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        label="Required number, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        label="Disabled number, with description"
        :disabled="true"
        v-model="args.value3"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:0,value2:500,value3:1500,rules:b}},render:(t,{argTypes:o})=>({components:{FSForm:p,FSNumberField:i,FSCol:u,FSRow:g},props:Object.keys(o),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: required & min 10"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: max 10"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: required & min 10 & integer"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.integer()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var l,s,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      value1: 0,
      value2: 500,
      value3: 1500
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSNumberField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSNumberField
        label="Number"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        label="Required number, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField
        label="Disabled number, with description"
        :disabled="true"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var m,d,a;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: 0,
      value2: 500,
      value3: 1500,
      rules: NumberRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSNumberField,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: required & min 10"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: max 10"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSNumberField
          label="Rules: required & min 10 & integer"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.integer()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(a=(d=r.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};const we=["Variations","Rules"];export{r as Rules,e as Variations,we as __namedExportsOrder,he as default};
