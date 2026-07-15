import o from"./FSTextField-Cq4gI6mX.js";import{F as u}from"./FSForm-BbHYl82d.js";import{F as p}from"./FSCol-KRtq6OYO.js";import{F as g}from"./FSRow-Dg2RhQyl.js";import{a as F}from"./rules-CGa_6Wse.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSBaseField-Bph8nCfp.js";import"./FSSpan-B28b2m0n.js";import"./useBreakpoints-DO2FQykY.js";import"./useSlots-DEXetpJf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./FSButton-BqreeKOn.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DIbyStIN.js";import"./FSIcon-BcHBVf_o.js";import"./css-CUVOJ3aO.js";import"./VIcon-Cu6WQqXu.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSCard-DxY0aXhp.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./useRules-eFcMZq7y.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./index-ByfGjSW7.js";import"./transition-a5pzBS6c.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./density-CE2FkSgs.js";import"./dimensions-CS_qJJhy.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./anchor-Se7MGGLO.js";import"./rounded-CS1_z6Jk.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Blv54jCg.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B4rZgXN-.js";import"./time-D8YoZjka.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./times-CqUFey1a.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-BKFE7Nxu.js";import"./useAppLanguageCode-CFDnQcKu.js";import"./useAppTimeZone-CjwINmn2.js";import"./startOfDay-C4pDH4rb.js";const ye={title:"Shared/Components/Input fields/TextField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:null,value3:"Hello there",value4:"General Kenobi"}},render:(t,{argTypes:l})=>({components:{FSTextField:o,FSCol:p},props:Object.keys(l),setup(){return{...t}},template:`
    <FSCol>
      <FSTextField
        label="Text"
        v-model="args.value1"
      />
      <FSTextField
        label="Text with suffix"
        suffix="Hello there"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        label="Required text, with description"
        description="Description for this field"
        :required="true"
        :maxWidth="null"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        label="Disabled text, with description"
        description="description"
        :disabled="true"
        v-model="args.value4"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:F}},render:(t,{argTypes:l})=>({components:{FSForm:u,FSTextField:o,FSCol:p,FSRow:g},props:Object.keys(l),setup(){return{...t}},template:`
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextField
          label="Rules: required & min 10 characters & at least one special & at least one uppercase & at least one lowercase & at least one digit"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.special(), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var i,a,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
      value3: "Hello there",
      value4: "General Kenobi"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTextField,
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
      <FSTextField
        label="Text"
        v-model="args.value1"
      />
      <FSTextField
        label="Text with suffix"
        suffix="Hello there"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        label="Required text, with description"
        description="Description for this field"
        :required="true"
        :maxWidth="null"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        label="Disabled text, with description"
        description="description"
        :disabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var n,d,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: "",
      value2: "",
      value3: "",
      rules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTextField,
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
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextField
          label="Rules: required & min 10 characters & at least one special & at least one uppercase & at least one lowercase & at least one digit"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.special(), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Te=["Variations","Rules"];export{r as Rules,e as Variations,Te as __namedExportsOrder,ye as default};
