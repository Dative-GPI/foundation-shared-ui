import{F as n}from"./FSTranslateField-BkrKE3M3.js";import{F as u}from"./FSForm-DpdyTVKf.js";import{F as p}from"./FSCol-79-COv64.js";import{_ as g}from"./FSRow-BvJ7lU5E.js";import{a as F}from"./rules-B-1MsapQ.js";import"./vue.esm-bundler-CocPPKUI.js";import"./FSDialogSubmit-D4dVVio-.js";import"./FSFadeOut-BcV7cYL5.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-DZlz3-56.js";import"./useColors-C1aD-Kb6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1Gcptw7.js";import"./css-mt76hoAn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSButton-B9T3D7JL.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-CqIDwjuA.js";import"./FSCard-2KUMcI8D.js";import"./VProgressCircular-k_tOz5gX.js";import"./color-D50-hVV_.js";import"./resizeObserver-DDOqpSMx.js";import"./VIcon-ZjKwFcqe.js";import"./FSSpan-CKhKq6E1.js";import"./useSlots-D4bv69lA.js";import"./FSIcon-BGuuL0jz.js";import"./FSDialog-DH0zR2eI.js";import"./FSText-Nj40J67v.js";import"./VDialog-BpMVGEao.js";import"./VOverlay-BMq2UEr3.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-DW1FRKBO.js";import"./anchor-D4EnoweD.js";import"./dimensions-Cv9Fwl7U.js";import"./display-23tZl-3U.js";import"./lazy-Dahsm7lL.js";import"./locale-_fONYh-8.js";import"./router-CKzlklLc.js";import"./scopeId-BfaO37qo.js";import"./transition-bMLtH-b3.js";import"./VDefaultsProvider-CV4ffwSK.js";import"./useTranslations-DJaIYmO0.js";import"./FSTextField-HkwYV1Vw.js";import"./FSBaseField-Cn3A38Ti.js";import"./useRules-C3-AmzzE.js";import"./VField-CAcTjb6h.js";import"./index-hd-xIizf.js";import"./VLabel-yrR5w-fx.js";import"./VInput-JSCg5nQs.js";import"./density-2KuMGYl6.js";import"./loader-BDqRCawj.js";import"./rounded-CBYChxif.js";import"./index-5LM_ZUPq.js";import"./useAppLanguages-YxeLYIRF.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-DjiI-HV9.js";import"./useDateFormat-DIxFAYu6.js";import"./useAppTimeZone-CyFP2jUy.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-yNRdweo3.js";const xr={title:"Foundation/Shared/Input fields/TranslateField",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(t,{argTypes:o})=>({components:{FSTranslateField:n,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSCol>`})},e={args:{args:{valid:!1,value1:"",translations1:null,value2:"",translations2:null,rules:F}},render:(t,{argTypes:o})=>({components:{FSForm:u,FSTranslateField:n,FSCol:p,FSRow:g},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const fr=["Variations","Rules"];export{e as Rules,r as Variations,fr as __namedExportsOrder,xr as default};
