import{F as a}from"./FSTranslateField-mcCQoeKM.js";import{F as u}from"./FSForm-BDusjIFO.js";import{F as p}from"./FSCol-BQiFrdcO.js";import{_ as g}from"./FSRow-hpHYWcoJ.js";import{a as F}from"./rules-CDo_Brp5.js";import"./vue.esm-bundler-CUSnV4DE.js";import"./FSDialogSubmit-B8zuuo-y.js";import"./FSFadeOut-BguakrVC.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-CQzBW1Q0.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./css-BnRE2gle.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSButton-BTpAdEE5.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSClickable-Bn4xIsxH.js";import"./FSCard-BnVyMFnh.js";import"./VProgressCircular-BbyuaGSs.js";import"./color-CgsoZSKd.js";import"./resizeObserver-Hv1_IiVG.js";import"./VIcon-DeLOaNVc.js";import"./FSSpan-M9GEX7v6.js";import"./useSlots-CY84M1fx.js";import"./FSIcon-Cp7BQBW6.js";import"./FSDialog-CDP3ltAg.js";import"./FSText-CUkc4ADt.js";import"./VDialog-Co_Esry_.js";import"./VOverlay-BKGgaXLT.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-DaBGAliH.js";import"./anchor-MMgLgK3d.js";import"./dimensions-BI5CQRk1.js";import"./display-DbvBihXn.js";import"./scopeId-DP5cc-6o.js";import"./locale-DYN4KMd8.js";import"./router-C6XMMO7F.js";import"./transition-C81aHyit.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./useTranslations-D0SM0QeA.js";import"./FSTextField-MbUkXGoG.js";import"./FSBaseField-DwmVeNEG.js";import"./useRules-CYZMRvpC.js";import"./VField-B_GuA4vu.js";import"./index-DDQZ-RJM.js";import"./VLabel-DSsJm0B6.js";import"./VInput-C8lN0V_S.js";import"./density-DAqBVexQ.js";import"./loader-BjfLeESU.js";import"./rounded-DQzQH8wE.js";import"./index-CeZa2hiu.js";import"./useAppLanguages-BSjDFg7X.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-BXARN-2X.js";import"./useDateFormat-D6A_WgCt.js";import"./useAppLanguageCode-CV1UAuz5.js";import"./useAppTimeZone-CYLIXU2i.js";import"./startOfDay-C4pDH4rb.js";const wr={title:"Foundation/Shared/Input fields/TranslateField",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(t,{argTypes:n})=>({components:{FSTranslateField:a,FSCol:p},props:Object.keys(n),setup(){return{...t}},template:`
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
        label="Uneditable translation, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>`})},e={args:{args:{valid:!1,value1:"",translations1:null,value2:"",translations2:null,rules:F}},render:(t,{argTypes:n})=>({components:{FSForm:u,FSTranslateField:a,FSCol:p,FSRow:g},props:Object.keys(n),setup(){return{...t}},template:`
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
    </FSForm>`})};var o,l,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        label="Uneditable translation, with description"
        description="Uneditable description"
        :editable="false"
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
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Rr=["Variations","Rules"];export{e as Rules,r as Variations,Rr as __namedExportsOrder,wr as default};
