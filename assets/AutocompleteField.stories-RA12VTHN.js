import{F as l}from"./FSAutocompleteField-BG1Iouz7.js";import{F as p}from"./FSForm-CLe5Lp0x.js";import{F as d}from"./FSCol-Bfhiyt6Y.js";import{_ as g}from"./FSRow-C-b-hpWa.js";import{A as v}from"./rules-DRXW83Bb.js";import"./vue.esm-bundler-PONd4AmC.js";import"./FSSearchField-D3E8Wwt2.js";import"./FSTextField-D-U5ryYn.js";import"./FSBaseField-DMW1nZy-.js";import"./FSSpan-DxKJLsSl.js";import"./useBreakpoints-RTs-XAJF.js";import"./useSlots-nyIcwo6G.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./FSButton-CZKySWW0.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-CyhgWkHC.js";import"./FSCard-DYD9Tm3w.js";import"./css-BeoQuAfr.js";import"./VProgressCircular-CDK6zSYw.js";import"./color-_AiH45em.js";import"./resizeObserver-UZYihl4g.js";import"./VIcon-DIMW80nW.js";import"./FSIcon-bsX1r_Ci.js";import"./useRules-CT5DWk6c.js";import"./VField-So_guaQm.js";import"./index-CANKuvlL.js";import"./transition-BXZIGKil.js";import"./VLabel-5AeJpfXJ.js";import"./VInput-ClaXJMCA.js";import"./locale-CoLhg8Wl.js";import"./density-CNNumQ_A.js";import"./dimensions-CNbPgA3L.js";import"./proxiedModel-vOB1Q9Gh.js";import"./loader-DGoLn0VY.js";import"./anchor-D2WyvgD_.js";import"./rounded-BBFi0CuG.js";import"./VDefaultsProvider-BsWh58B_.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bb4mSIJO.js";import"./useTranslations-_Q1DYra_.js";import"./FSDialogMenu-Czm1Jubp.js";import"./VDialog-CJNHz4BJ.js";import"./VOverlay-U8N3Tt4W.js";import"./display-BXzLC06Y.js";import"./scopeId-CWp-k_S_.js";import"./router-6tzIEQS-.js";import"./FSSlideGroup-CGqp6f7y.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Dkus99PH.js";import"./VSlideGroupItem-B5H5Uw6w.js";import"./group-CvGRLeFV.js";import"./FSToggleSet-CRtePpT3.js";import"./FSWrapGroup-CpwsD4SA.js";import"./FSCheckbox-CQphVYdu.js";import"./VCheckboxBtn-B-CDiKqR.js";import"./VSelectionControl-HwS3bHvU.js";import"./index-B8vPsAiL.js";import"./FSFadeOut-CtUd8oOA.js";import"./FSLoader-UOJfN8Qb.js";import"./elevation-CL0Py7Fp.js";import"./FSRadio-BKiTm18z.js";import"./VSelect-BUWJeJyh.js";import"./VList-B9UxDYwK.js";import"./ssrBoot-DufuUSU7.js";import"./border-z35mRDPS.js";import"./VImg-DKyIpwU2.js";import"./VMenu-D11N5TPJ.js";import"./filter-MyCPMQzE.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-Cavyfpwa.js";import"./useDateFormat-BhCCrheZ.js";import"./useAppTimeZone-BXRoybOo.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-fPbUdbod.js";const F=["Alpha","Beta","Charly","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"],Ge={title:"Foundation/Shared/Input fields/AutocompleteField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{items:Array.from(Array(30).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:null,value3:["0","1","2"],value4:"2",value5:"2",value6:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteField:l,FSCol:d},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteField
        label="Autocomplete"
        :items="args.items"
        v-model="args.value1"
      />
      <FSAutocompleteField
        label="Autocomplete with suffix"
        suffix="Hello there"
        :items="args.items"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        :maxWidth="null"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Disabled select"
        :disabled="true"
        :items="args.items"
        v-model="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="With toggle set enabled"
        :items="args.items"
        :toggleSet="true"
        v-model="args.value6"
      />
    </FSCol>`})},r={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${F[e]}`})),value1:null,value2:null,value3:null,value4:null,rules:v}},render:(e,{argTypes:o})=>({components:{FSForm:p,FSAutocompleteField:l,FSCol:d,FSRow:g},props:Object.keys(o),setup(){return{...e}},template:`
    <FSForm v-model="args.valid"
      variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
          Form validity: {{ args.valid ?? "false" }}
          </div>
          </FSRow>
          <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
          <FSAutocompleteField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :toggleSet="true"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value4"
        />
      </FSCol>
    </FSForm>`})};var i,s,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      items: Array.from(Array(30).keys()).map(i => ({
        id: i.toString(),
        label: \`Option \${i + 1}\`
      })),
      value1: null,
      value2: null,
      value3: ["0", "1", "2"],
      value4: "2",
      value5: "2",
      value6: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteField,
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
      <FSAutocompleteField
        label="Autocomplete"
        :items="args.items"
        v-model="args.value1"
      />
      <FSAutocompleteField
        label="Autocomplete with suffix"
        suffix="Hello there"
        :items="args.items"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        :maxWidth="null"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Disabled select"
        :disabled="true"
        :items="args.items"
        v-model="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="With toggle set enabled"
        :items="args.items"
        :toggleSet="true"
        v-model="args.value6"
      />
    </FSCol>\`
  })
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var n,a,u;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      items: Array.from(Array(5).keys()).map(i => ({
        id: i.toString(),
        label: \`Option \${international[i]}\`
      })),
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      rules: AutocompleteRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSAutocompleteField,
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
    <FSForm v-model="args.valid"
      variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
          Form validity: {{ args.valid ?? "false" }}
          </div>
          </FSRow>
          <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
          <FSAutocompleteField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :toggleSet="true"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value4"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(u=(a=r.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const Je=["Variations","Rules"];export{r as Rules,t as Variations,Je as __namedExportsOrder,Ge as default};
