import{F as n}from"./FSTranslateField-Dv__9WNv.js";import{F as u}from"./FSForm-DtfEUZJL.js";import{F as p}from"./FSCol-79-COv64.js";import{_ as g}from"./FSRow-BvJ7lU5E.js";import{a as F}from"./rules-BRs3Lhuu.js";import"./vue.esm-bundler-CocPPKUI.js";import"./FSDialogSubmit-na6ulupt.js";import"./FSFadeOut-BaaWP8Xe.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-DZlz3-56.js";import"./useColors-DUufJJPH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DhcBBMcp.js";import"./css-mt76hoAn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSButton-VjwKfCr9.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-6FPdriKA.js";import"./FSCard-JQNJPDhp.js";import"./VProgressCircular-BMkR7ln7.js";import"./color-yBCdco2I.js";import"./resizeObserver-QYhQJr79.js";import"./VIcon-Qz-Il978.js";import"./FSSpan-DrSEJIpr.js";import"./useSlots-D4bv69lA.js";import"./FSIcon-CKNHHVc2.js";import"./FSDialog-Da78Hskl.js";import"./FSText-U805njuH.js";import"./VDialog-Cy-8Xjn8.js";import"./VOverlay-BofqjN94.js";import"./easing-DY7PVvcf.js";import"./proxiedModel-DvocDLKO.js";import"./anchor-C7UfIAXa.js";import"./dimensions-C9PuMYcl.js";import"./display-BmuJHlI4.js";import"./lazy-CpkO2kQj.js";import"./locale-_fONYh-8.js";import"./router-Btsphvl6.js";import"./scopeId-LQkRlG9f.js";import"./transition-BuKnRONq.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-Clc0K3gC.js";import"./useTranslations-DJaIYmO0.js";import"./FSTextField-CrSrBFtk.js";import"./FSBaseField-BHCTmkg_.js";import"./useRules-C3-AmzzE.js";import"./VField-CEhz-0ZK.js";import"./index-DfBdMsnv.js";import"./VLabel-HvE-XSAC.js";import"./VInput-DhPQv4YC.js";import"./density-DZuLaB-B.js";import"./loader-B3-0Tc48.js";import"./rounded-Cjf6r1y4.js";import"./index-lkzvYdnq.js";import"./useAppLanguages-YxeLYIRF.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-BAqNPYOD.js";import"./times-CqUFey1a.js";import"./useDateFormat-DIxFAYu6.js";import"./useAppTimeZone-CyFP2jUy.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-yNRdweo3.js";const Cr={title:"Foundation/Shared/Input fields/TranslateField",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(e,{argTypes:o})=>({components:{FSTranslateField:n,FSCol:p},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})},t={args:{args:{valid:!1,value1:"",translations1:null,value2:"",translations2:null,rules:F}},render:(e,{argTypes:o})=>({components:{FSForm:u,FSTranslateField:n,FSCol:p,FSRow:g},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var i,d,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const qr=["Variations","Rules"];export{t as Rules,r as Variations,qr as __namedExportsOrder,Cr as default};
