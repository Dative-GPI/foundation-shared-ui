import{F as o}from"./FSTranslateField-d1VN7fUv.js";import{F as u}from"./FSForm-B6XvHFOH.js";import{F as p}from"./FSCol-DIPgj7wU.js";import{_ as g}from"./FSRow-udQVJR1p.js";import{a as F}from"./rules-B2dA6v7x.js";import"./vue.esm-bundler-CqZ6aK3I.js";import"./FSDialogSubmit-BdT7chvP.js";import"./FSFadeOut-cwNcN6_P.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-DMrtgY61.js";import"./useColors-CaMUbg8a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CCooKRqg.js";import"./css-BZjDzSZ1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSButton-CMFttM_1.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-Bc_GnmK1.js";import"./FSCard-CoFTtRNJ.js";import"./VProgressCircular-DDVR-EZI.js";import"./color-6mal3hP4.js";import"./resizeObserver-C7qOORSR.js";import"./VIcon-beNtbbqt.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./FSIcon-Dy1KglKQ.js";import"./FSDialog-CeQybluF.js";import"./FSText-BvUMyUbP.js";import"./VDialog-CJ2sxo0Y.js";import"./VOverlay-CHXjpHsK.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-BirLikdP.js";import"./anchor-DiyvyHyx.js";import"./dimensions-CuS7VcMO.js";import"./display-Cs3Y1ygD.js";import"./scopeId-BQSHBqq_.js";import"./locale-BJmdjC_5.js";import"./router-C0dK7NvB.js";import"./transition-C13qRIR1.js";import"./VDefaultsProvider-oq6rnkoo.js";import"./useTranslations-D4m4SVfo.js";import"./FSTextField-DckKQdCq.js";import"./FSBaseField-DDV1bgDk.js";import"./useRules-Cutg_0Yh.js";import"./VField-CIUPtZ0k.js";import"./index-BNfVP6r5.js";import"./VLabel-BhsUugfE.js";import"./VInput-XpqL7_rK.js";import"./density-B3EUR5Bv.js";import"./loader-zbNw4pum.js";import"./rounded-T_eKj2ZY.js";import"./index-0XvVa1kA.js";import"./useAppLanguages-DP6ibxSz.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-CwdNr9Ch.js";import"./useDateFormat-B0N4tW_S.js";import"./useAppTimeZone-CbCPkuif.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-D1PzUORY.js";const Rr={title:"Foundation/Shared/Input fields/TranslateField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(t,{argTypes:n})=>({components:{FSTranslateField:o,FSCol:p},props:Object.keys(n),setup(){return{...t}},template:`
    <FSCol>
      <FSTranslateField
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Disabled translation, with description"
        description=" description"
        :disabled="true"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>`})},e={args:{args:{valid:!1,value1:"",translations1:null,value2:"",translations2:null,rules:F}},render:(t,{argTypes:n})=>({components:{FSForm:u,FSTranslateField:o,FSCol:p,FSRow:g},props:Object.keys(n),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
          v-model="args.translations1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
          v-model="args.translations2"
        />
      </FSCol>
    </FSForm>`})};var a,l,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      translations1: null,
      value2: "Hello there",
      translations2: [{
        languageCode: "fr-FR",
        label: "Bonjour ici"
      }],
      value3: "General Kenobi",
      translations3: []
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTranslateField,
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
      <FSTranslateField
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Disabled translation, with description"
        description=" description"
        :disabled="true"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>\`
  })
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var i,d,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: "",
      translations1: null,
      value2: "",
      translations2: null,
      rules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTranslateField,
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
        <FSTranslateField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
          v-model="args.translations1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
          v-model="args.translations2"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const xr=["Variations","Rules"];export{e as Rules,r as Variations,xr as __namedExportsOrder,Rr as default};
