import{F as n}from"./FSTranslateField-D3SJNU2h.js";import{F as u}from"./FSForm-CSz_UbV2.js";import{F as p}from"./FSCol-DVEaUPKl.js";import{_ as g}from"./FSRow-CjY3icuR.js";import{a as F}from"./rules-BUSk3wMq.js";import"./vue.esm-bundler-CC_jVOJ5.js";import"./FSDialogSubmit-DLaEkr55.js";import"./FSFadeOut-DU3Ke7qi.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-BMcJFLA8.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./css-DTGEi_Ca.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSButton-Czf3beC8.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSClickable-DFmwvck2.js";import"./FSCard-twwkVLSp.js";import"./VProgressCircular-B7HKciov.js";import"./color-BM2dSUAO.js";import"./resizeObserver-BZ0AJw4z.js";import"./VIcon-BOLLMMm0.js";import"./FSSpan-DkNsO5wd.js";import"./useSlots-C8jkAuOW.js";import"./FSIcon-CeLDRxMK.js";import"./FSDialog-CS4QDqZQ.js";import"./FSText-B2RNQvtL.js";import"./VDialog-fWvZSkPk.js";import"./VOverlay-DXMNyzvF.js";import"./easing-DY7PVvcf.js";import"./proxiedModel-Nw0LX-ta.js";import"./anchor-S0Fc85Gi.js";import"./dimensions-TKp8HHzB.js";import"./display-CpM-3U3n.js";import"./lazy-BrZUVd24.js";import"./locale-K9DBMW2q.js";import"./router-kuDvkEMM.js";import"./scopeId-BJNiFHH-.js";import"./transition-Ucf2Ovas.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-CuIagDb9.js";import"./useTranslations-5XSl7qXA.js";import"./FSTextField-CTUDqfDL.js";import"./FSBaseField-Bo38Hl_f.js";import"./useRules-Da0JLBaA.js";import"./VField-CnDxsm3U.js";import"./index-Dylhq_Dl.js";import"./VLabel-kKpu5iXd.js";import"./VInput-0C1kQySn.js";import"./density-mssFUWH2.js";import"./loader-CbVzlK-r.js";import"./rounded-Cy4gG01O.js";import"./index-B48vLg-P.js";import"./useAppLanguages-CY5Dd5qs.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-CEDjUrWj.js";import"./times-CqUFey1a.js";import"./useDateFormat-DHrriBQY.js";import"./useAppTimeZone-Bddnv5KM.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-DwRThLpm.js";const Cr={title:"Foundation/Shared/Input fields/TranslateField",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(e,{argTypes:o})=>({components:{FSTranslateField:n,FSCol:p},props:Object.keys(o),setup(){return{...e}},template:`
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
