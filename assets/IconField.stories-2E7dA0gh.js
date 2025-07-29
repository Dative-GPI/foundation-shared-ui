import i from"./FSIconField-BQUCOYib.js";import{F as c}from"./FSForm-CLe5Lp0x.js";import{F as p}from"./FSCol-Bfhiyt6Y.js";import{_ as u}from"./FSRow-C-b-hpWa.js";import{I as g}from"./rules-DRXW83Bb.js";import"./vue.esm-bundler-PONd4AmC.js";import"./FSToggleSet-CRtePpT3.js";import"./FSSlideGroup-CGqp6f7y.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Dkus99PH.js";import"./FSButton-CZKySWW0.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-CyhgWkHC.js";import"./FSCard-DYD9Tm3w.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./VProgressCircular-CDK6zSYw.js";import"./color-_AiH45em.js";import"./resizeObserver-UZYihl4g.js";import"./VIcon-DIMW80nW.js";import"./FSSpan-DxKJLsSl.js";import"./useSlots-nyIcwo6G.js";import"./FSIcon-bsX1r_Ci.js";import"./VSlideGroupItem-B5H5Uw6w.js";import"./group-CvGRLeFV.js";import"./proxiedModel-vOB1Q9Gh.js";import"./index-CANKuvlL.js";import"./display-BXzLC06Y.js";import"./locale-CoLhg8Wl.js";import"./FSWrapGroup-CpwsD4SA.js";import"./VInput-ClaXJMCA.js";import"./transition-BXZIGKil.js";import"./density-CNNumQ_A.js";import"./dimensions-CNbPgA3L.js";import"./FSTextField-D-U5ryYn.js";import"./FSBaseField-DMW1nZy-.js";import"./useRules-CT5DWk6c.js";import"./VField-So_guaQm.js";import"./VLabel-5AeJpfXJ.js";import"./loader-DGoLn0VY.js";import"./anchor-D2WyvgD_.js";import"./rounded-BBFi0CuG.js";import"./VDefaultsProvider-BsWh58B_.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bb4mSIJO.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-Cavyfpwa.js";import"./useTranslations-_Q1DYra_.js";import"./useDateFormat-BhCCrheZ.js";import"./useAppTimeZone-BXRoybOo.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-fPbUdbod.js";const fo={title:"Foundation/Shared/Input fields/IconField",component:i,tags:["autodocs"],argTypes:{}},o={args:{args:{value1:"mdi-account",value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSIconField:i,FSCol:p},props:Object.keys(t),setup(){return{...e}},template:`
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
