import i from"./FSIconField-OcppTbWX.js";import{F as c}from"./FSForm-C3WOsd9u.js";import{F as p}from"./FSCol-CPY6S-Xd.js";import{_ as u}from"./FSRow-GjwhmX1p.js";import{I as g}from"./rules-DXGz8S5V.js";import"./vue.esm-bundler-NAfsqApI.js";import"./FSToggleSet-CBrw8ECP.js";import"./FSSlideGroup-Cl7IgSOt.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwecMMW5.js";import"./FSButton-CnXo3fLV.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-Dvaj3J5M.js";import"./FSCard-DOESxZy8.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./css-DBDqGZ-V.js";import"./useBreakpoints-BwxwzcAl.js";import"./VProgressCircular-B6p7zTwg.js";import"./color-BvydW9AS.js";import"./resizeObserver-CLnVcpcq.js";import"./VIcon-PiNvAqE-.js";import"./FSSpan-CLtVPKpS.js";import"./useSlots-S0O9Daut.js";import"./FSIcon-Dq2bxLH5.js";import"./VSlideGroupItem-BvOdViLK.js";import"./group-Dl43T2CL.js";import"./proxiedModel-sn-eI_a5.js";import"./index-Dne_26Gx.js";import"./display-Bn-MFLq6.js";import"./locale-CAPEya44.js";import"./FSWrapGroup-C3Z0hZ7U.js";import"./VInput-B5HH3Lye.js";import"./transition-L7INWkz2.js";import"./density-BGeA8UH8.js";import"./dimensions-IFPI4Yq9.js";import"./form-DTsyvZhj.js";import"./FSTextField-Dzov9hcU.js";import"./FSBaseField-CjhswGig.js";import"./useRules-pqUeO9kt.js";import"./VField-KOKiCRZA.js";import"./VLabel-BDFzMscP.js";import"./loader-DsBOwpms.js";import"./anchor-DvtYZGyi.js";import"./rounded-DwVJT96z.js";import"./VDefaultsProvider-BngNLuXK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DINlpRuJ.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-Bbs-Eu8-.js";import"./useTranslations-CxiknF7e.js";import"./useDateFormat-Ci8JB6DS.js";import"./useAppLanguageCode-DW7Tteig.js";import"./useAppTimeZone-UiqNElH2.js";import"./startOfDay-C4pDH4rb.js";const wo={title:"Foundation/Shared/Input fields/IconField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:"mdi-account",value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSIconField:i,FSCol:p},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const Io=["Variations","Rules"];export{r as Rules,o as Variations,Io as __namedExportsOrder,wo as default};
