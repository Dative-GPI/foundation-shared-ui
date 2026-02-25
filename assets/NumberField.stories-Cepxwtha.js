import i from"./FSNumberField-CP2hYV8g.js";import{F as p}from"./FSForm-Bvdkm9sz.js";import{F as u}from"./FSCol-D_lbFmZy.js";import{_ as g}from"./FSRow-DIk8KFbG.js";import{N as b}from"./rules-2-0C43Mt.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSTextField-DVC6JxU9.js";import"./FSBaseField-C_kMSpMl.js";import"./FSSpan-BN7wkmby.js";import"./useBreakpoints-CEzKC_o8.js";import"./useSlots-CoecqEnp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./FSButton-M9GMz66l.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-015IEZHy.js";import"./FSIcon-DFkRD0af.js";import"./css-CxcvJboa.js";import"./VIcon-C3cN4B51.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./icons-DbptYgqQ.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSCard-DENSLTM_.js";import"./VProgressCircular-BsmUxqlD.js";import"./resizeObserver-CpF7iUII.js";import"./useRules-R3Ldkrx4.js";import"./VField-BWZy72Xk.js";import"./index-Bo6vw90T.js";import"./transition-gfLL8RoD.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./locale-n4v42L7l.js";import"./proxiedModel-Cv3qT1cZ.js";import"./density-BTT1solu.js";import"./dimensions-D_nx6Jbk.js";import"./loader-CAuY8UYG.js";import"./VProgressLinear-CI-Q4csR.js";import"./anchor-tlySGI4g.js";import"./rounded-BSNeeq4o.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-u79WnTSR.js";import"./time-C045-Osl.js";import"./times-CqUFey1a.js";import"./useTranslations-CFCS6HA-.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-Be4eIA50.js";import"./useAppTimeZone-tx8M1w-h.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CWFK3Ooe.js";const ce={title:"Foundation/Shared/Input fields/NumberField",component:i,tags:["autodocs"],argTypes:{}},e={args:{args:{value1:0,value2:500,value3:1500}},render:(t,{argTypes:o})=>({components:{FSNumberField:i,FSCol:u},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(a=(d=r.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};const ye=["Variations","Rules"];export{r as Rules,e as Variations,ye as __namedExportsOrder,ce as default};
