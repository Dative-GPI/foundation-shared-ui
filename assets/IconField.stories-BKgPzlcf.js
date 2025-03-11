import i from"./FSIconField-CcsbyOy0.js";import{F as c}from"./FSForm-BDusjIFO.js";import{F as p}from"./FSCol-BQiFrdcO.js";import{_ as u}from"./FSRow-hpHYWcoJ.js";import{I as g}from"./rules-CDo_Brp5.js";import"./vue.esm-bundler-CUSnV4DE.js";import"./FSToggleSet-gSDjdstT.js";import"./FSSlideGroup-BKtLKoi-.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DC1JdNxL.js";import"./FSButton-BTpAdEE5.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-Bn4xIsxH.js";import"./FSCard-BnVyMFnh.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./css-BnRE2gle.js";import"./useBreakpoints-CQzBW1Q0.js";import"./VProgressCircular-BbyuaGSs.js";import"./color-CgsoZSKd.js";import"./resizeObserver-Hv1_IiVG.js";import"./VIcon-DeLOaNVc.js";import"./FSSpan-M9GEX7v6.js";import"./useSlots-CY84M1fx.js";import"./FSIcon-Cp7BQBW6.js";import"./VSlideGroupItem-G437Dc1S.js";import"./group-CrKBhSLQ.js";import"./proxiedModel-DaBGAliH.js";import"./index-DDQZ-RJM.js";import"./display-DbvBihXn.js";import"./locale-DYN4KMd8.js";import"./FSWrapGroup-DswCzfON.js";import"./VInput-C8lN0V_S.js";import"./transition-C81aHyit.js";import"./density-DAqBVexQ.js";import"./dimensions-BI5CQRk1.js";import"./FSTextField-MbUkXGoG.js";import"./FSBaseField-DwmVeNEG.js";import"./useRules-CYZMRvpC.js";import"./VField-B_GuA4vu.js";import"./VLabel-DSsJm0B6.js";import"./loader-BjfLeESU.js";import"./anchor-MMgLgK3d.js";import"./rounded-DQzQH8wE.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CeZa2hiu.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-BXARN-2X.js";import"./useTranslations-D0SM0QeA.js";import"./useDateFormat-D6A_WgCt.js";import"./useAppLanguageCode-CV1UAuz5.js";import"./useAppTimeZone-CYLIXU2i.js";import"./startOfDay-C4pDH4rb.js";const fo={title:"Foundation/Shared/Input fields/IconField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:"mdi-account",value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSIconField:i,FSCol:p},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSIconField
        label="Icon, primary active color, light button color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Icon, light active color, primary button color, with preselection"
        buttonColor="primary"
        activeColor="light"
        :preSelection="['mdi-chef-hat', 'mdi-knife', 'mdi-stove', 'mdi-fridge-outline', 'mdi-food-steak', 'mdi-food-outline', 'mdi-food-halal', 'mdi-food-kosher']"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Required icon, error active color, warning button color, with description"
        description="Description for this field"
        buttonColor="warning"
        activeColor="error"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Uneditable icon, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,rules:g}},render:(e,{argTypes:t})=>({components:{FSForm:c,FSIconField:i,FSCol:p,FSRow:u},props:Object.keys(t),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSIconField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
      </FSCol>
    </FSForm>`})};var n,l,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    args: {
      value1: "mdi-account",
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSIconField,
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
      <FSIconField
        label="Icon, primary active color, light button color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Icon, light active color, primary button color, with preselection"
        buttonColor="primary"
        activeColor="light"
        :preSelection="['mdi-chef-hat', 'mdi-knife', 'mdi-stove', 'mdi-fridge-outline', 'mdi-food-steak', 'mdi-food-outline', 'mdi-food-halal', 'mdi-food-kosher']"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Required icon, error active color, warning button color, with description"
        description="Description for this field"
        buttonColor="warning"
        activeColor="error"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSIconField
        label="Uneditable icon, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(a=(l=o.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};var d,m,s;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: null,
      rules: IconRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSIconField,
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
        <FSIconField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const wo=["Variations","Rules"];export{r as Rules,o as Variations,wo as __namedExportsOrder,fo as default};
