import i from"./FSIconField-TMKO1fFj.js";import{F as c}from"./FSForm-Ci9drIy4.js";import{F as p}from"./FSCol-BU2zndN-.js";import{_ as u}from"./FSRow-Bdc52rY8.js";import{I as g}from"./rules-BTu8BudJ.js";import"./vue.esm-bundler-BB--BfRN.js";import"./FSToggleSet-D12Sjar_.js";import"./FSSlideGroup-DLHspItq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwHgwEym.js";import"./FSButton-DEqhqb0b.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-CwRD7A4m.js";import"./FSCard-CiGLNn7K.js";import"./useColors-CeWNZtds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BwQCEo_4.js";import"./css-DoweNwVf.js";import"./useBreakpoints-f5uwzDhq.js";import"./VProgressCircular-DNr7n8jG.js";import"./color-DIvEt_AX.js";import"./resizeObserver-CgHguIgR.js";import"./VIcon-Cl87HT90.js";import"./FSSpan-BndtI8AP.js";import"./useSlots-COLyvmal.js";import"./FSIcon-BKav6CVU.js";import"./VSlideGroupItem-BI1OJQNm.js";import"./group-C8GVwDAJ.js";import"./proxiedModel-DMSSa4ZW.js";import"./index-9ysw5oGg.js";import"./display-DzHu_6W3.js";import"./locale-CSWC84Vq.js";import"./FSWrapGroup-TGBfJRdY.js";import"./VInput-BfMi-lTR.js";import"./transition-GJJG9yri.js";import"./density-Xpr_P7nk.js";import"./dimensions-DwY9cRwZ.js";import"./FSTextField-DmCfYujO.js";import"./FSBaseField-BxMUaAXJ.js";import"./useRules-CSYFw_Ue.js";import"./VField-COyetWuv.js";import"./VLabel-Cmax-_yp.js";import"./loader-BKsf8Js6.js";import"./anchor-C8ooBn8e.js";import"./rounded-BKWlZxOJ.js";import"./VDefaultsProvider-BK3j_XEC.js";import"./forwardRefs-DWGaNmQL.js";import"./index--Ye8kcMr.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-DawHGwfT.js";import"./useTranslations-DvAhn7XV.js";import"./useDateFormat-CLF81prI.js";import"./useAppTimeZone-Yy6tN57G.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-DVn301Ra.js";const fo={title:"Foundation/Shared/Input fields/IconField",component:i,tags:["autodocs"],argTypes:{}},o={args:{args:{value1:"mdi-account",value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSIconField:i,FSCol:p},props:Object.keys(t),setup(){return{...e}},template:`
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
