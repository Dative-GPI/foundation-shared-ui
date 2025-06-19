import i from"./FSIconField-D0uhGbL1.js";import{F as c}from"./FSForm-B6XvHFOH.js";import{F as p}from"./FSCol-DIPgj7wU.js";import{_ as u}from"./FSRow-udQVJR1p.js";import{I as g}from"./rules-B2dA6v7x.js";import"./vue.esm-bundler-CqZ6aK3I.js";import"./FSToggleSet-CHUHElBL.js";import"./FSSlideGroup-CXGL0bk9.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CYg1KVZY.js";import"./FSButton-CMFttM_1.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-Bc_GnmK1.js";import"./FSCard-CoFTtRNJ.js";import"./useColors-CaMUbg8a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CCooKRqg.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./VProgressCircular-DDVR-EZI.js";import"./color-6mal3hP4.js";import"./resizeObserver-C7qOORSR.js";import"./VIcon-beNtbbqt.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./FSIcon-Dy1KglKQ.js";import"./VSlideGroupItem-BXZ5gf7q.js";import"./group-1sntWZNj.js";import"./proxiedModel-BirLikdP.js";import"./index-BNfVP6r5.js";import"./display-Cs3Y1ygD.js";import"./locale-BJmdjC_5.js";import"./FSWrapGroup-nrJVBSUF.js";import"./VInput-XpqL7_rK.js";import"./transition-C13qRIR1.js";import"./density-B3EUR5Bv.js";import"./dimensions-CuS7VcMO.js";import"./FSTextField-DckKQdCq.js";import"./FSBaseField-DDV1bgDk.js";import"./useRules-Cutg_0Yh.js";import"./VField-CIUPtZ0k.js";import"./VLabel-BhsUugfE.js";import"./loader-zbNw4pum.js";import"./anchor-DiyvyHyx.js";import"./rounded-T_eKj2ZY.js";import"./VDefaultsProvider-oq6rnkoo.js";import"./forwardRefs-DWGaNmQL.js";import"./index-0XvVa1kA.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-CwdNr9Ch.js";import"./useTranslations-D4m4SVfo.js";import"./useDateFormat-B0N4tW_S.js";import"./useAppTimeZone-CbCPkuif.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-D1PzUORY.js";const fo={title:"Foundation/Shared/Input fields/IconField",component:i,tags:["autodocs"],argTypes:{}},o={args:{args:{value1:"mdi-account",value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSIconField:i,FSCol:p},props:Object.keys(t),setup(){return{...e}},template:`
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
        label="Disabled icon, with description"
        :maxWidth="null"
        :disabled="true"
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
        label="Disabled icon, with description"
        :maxWidth="null"
        :disabled="true"
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
