import i from"./FSIconField-D0LkXVAV.js";import{F as c}from"./FSForm-D4JgF9dF.js";import{F as p}from"./FSCol-D_lbFmZy.js";import{_ as u}from"./FSRow-DIk8KFbG.js";import{I as g}from"./rules-2-0C43Mt.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSToggleSet-BOI7_zgs.js";import"./FSSlideGroup-IW38j_vX.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BE_tlhjQ.js";import"./FSButton-CZRwWCRJ.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSText-CJ7Lhzl1.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./useBreakpoints-CEzKC_o8.js";import"./useSlots-CoecqEnp.js";import"./FSIcon-BJsIM37h.js";import"./css-CxcvJboa.js";import"./VIcon-mGJe0MYK.js";import"./color-BW36qAym.js";import"./useRender-BcOya-6A.js";import"./icons-DR_vovBH.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./FSCard-BH6GLU3V.js";import"./VProgressCircular-D6ZFUt0S.js";import"./resizeObserver-Z3fjh7Cv.js";import"./FSSpan-BN7wkmby.js";import"./VSlideGroup-BxUK8FWF.js";import"./index-6jMyctoo.js";import"./display-D8bdLPBN.js";import"./goto-BwndLEHi.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./group-BRhJCq_i.js";import"./VSlideGroupItem-CYOAdS4m.js";import"./FSWrapGroup-DzpSjUDj.js";import"./VInput-bTNISmSY.js";import"./transition-DbItRNv8.js";import"./density-BnAGl-Nw.js";import"./dimensions-B7sNhH2O.js";import"./FSTextField-Cclf6IX8.js";import"./FSBaseField-Buivlp1M.js";import"./useRules-R3Ldkrx4.js";import"./VField-B1xdFTJF.js";import"./VLabel-D-9L6eJP.js";import"./loader-COXi3ZW_.js";import"./anchor-CPKk15qm.js";import"./rounded-lfTNxM9v.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BKpPdzm5.js";import"./time-C045-Osl.js";import"./times-CqUFey1a.js";import"./useTranslations-CFCS6HA-.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-Be4eIA50.js";import"./useAppTimeZone-tx8M1w-h.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CWFK3Ooe.js";const qo={title:"Foundation/Shared/Input fields/IconField",component:i,tags:["autodocs"],argTypes:{}},o={args:{args:{value1:"mdi-account",value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSIconField:i,FSCol:p},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSForm>`})};var l,a,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var m,n,s;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const Oo=["Variations","Rules"];export{r as Rules,o as Variations,Oo as __namedExportsOrder,qo as default};
