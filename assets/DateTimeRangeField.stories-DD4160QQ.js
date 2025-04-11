import{F as i}from"./FSDateTimeRangeField-lqruXG3I.js";import{F as g}from"./FSButton-YqGArPy2.js";import{F}from"./FSForm-uibijjXy.js";import{F as d}from"./FSCol-qfATdd_b.js";import{_ as u}from"./FSRow-DPcQMiM9.js";import{u as c}from"./useAppTimeZone-DyFwBRoB.js";import{D as b}from"./rules-Bi0-Tpmi.js";import"./vue.esm-bundler-PTWG9x2X.js";import"./FSDialogSubmit-Cxr3ygG4.js";import"./FSFadeOut-CaVJLNvG.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-W7XGW48y.js";import"./useColors-CHEA4ij4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./css-B90wD3BD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-DdNYV5tn.js";import"./FSCard-DkDNRB06.js";import"./FSText-CMVh5ns4.js";import"./useSlots-BG_ZhEqK.js";import"./VDialog-DW8Lwwmu.js";import"./VOverlay-CoK8W0Lk.js";import"./forwardRefs-DWGaNmQL.js";import"./color-CCpgnDIk.js";import"./proxiedModel-CvHSoKPb.js";import"./anchor-BcF6JBj1.js";import"./dimensions-v18atrWI.js";import"./display-CESVul9-.js";import"./scopeId-CROTNdIb.js";import"./locale-Cz_4DTJh.js";import"./router-BQjY5_kj.js";import"./transition-QV8dDJB9.js";import"./VDefaultsProvider-aDgtYDKn.js";import"./useTranslations-BnE68qER.js";import"./FSCalendarTwin-DwejndtR.js";import"./FSSelectField-7K2ABFnn.js";import"./VList-DyUobt4O.js";import"./index-b-ADC_Il.js";import"./VIcon-DIeegzqR.js";import"./ssrBoot-DfimFJGl.js";import"./border-CIYj3WlL.js";import"./density-CznkHGGy.js";import"./elevation-CrSwNJwg.js";import"./rounded-BbPXzFqc.js";import"./index-Dqqa47M6.js";import"./VImg-CBGPWIu-.js";import"./index-BNomsh5u.js";import"./FSSlideGroup-Jp6XGK-I.js";import"./FSButtonNextIcon-GWsRoL9L.js";import"./VSlideGroupItem-C6-4cvTl.js";import"./group-8tJUjatm.js";import"./resizeObserver-C17Kgm90.js";import"./FSToggleSet-DGZa_txS.js";import"./FSWrapGroup-C1TeRipg.js";import"./VInput-C2FcZlE6.js";import"./FSBaseField-DcQpuQod.js";import"./FSSpan-yJEd2pn-.js";import"./FSTextField-Bd-6am9D.js";import"./useRules-D0leB7Wy.js";import"./VField-w4x2OZhg.js";import"./VLabel-BNJ33aDR.js";import"./loader-BqT2mYY7.js";import"./VProgressCircular-eoxb555W.js";import"./FSCheckbox-C5H351bN.js";import"./FSIcon-Df5FR-8G.js";import"./VSelectionControl-Fvr0iuTu.js";import"./FSLoader-DjLBB-ae.js";import"./FSRadio-Co5Zk_Yw.js";import"./VSelect--rnrT-6J.js";import"./VMenu-BiZHvw8b.js";import"./useDateFormat-BIFVETfU.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-tS_QL_TH.js";import"./VLocaleProvider-Dsy-CaZP.js";import"./VBtn-oNOab7rO.js";import"./FSClock-DUc43CvK.js";import"./FSSlider-3pFFuSKx.js";import"./VSlider-Cl-vIKi0.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./FSClickable-TnS9e2Ej.js";import"./time-qmSz82Tz.js";const Ue={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{setTimeZone:c().setAppTimeZone,value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateTimeRangeField:i,FSButton:g,FSCol:d,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSRow>
        <FSButton
          label="Africa/Abidjan"
          @click="args.setTimeZone('Africa/Abidjan')"
        />
        <FSButton
          label="Europe/Paris"
          @click="args.setTimeZone('Europe/Paris')"
        />
        <FSButton
          label="America/Guatemala"
          @click="args.setTimeZone('America/Guatemala')"
        />
        <FSButton
          label="Asia/Kamchatka"
          @click="args.setTimeZone('Asia/Kamchatka')"
        />
      </FSRow>
      <FSDateTimeRangeField
        label="Date & time range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeRangeField
        label="Required date & time range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeRangeField
        label="Disabled date & time range, error color, with description"
        description="Disabled description"
        color="error"
        :disabled="true"
        v-model="args.value3"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:b}},render:(t,{argTypes:o})=>({components:{FSForm:F,FSDateTimeRangeField:i,FSCol:d,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var a,n,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    args: {
      setTimeZone: useAppTimeZone().setAppTimeZone,
      value1: null,
      value2: [1704067200000, 1735603200000],
      value3: [1704067200000, 1735603200000]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateTimeRangeField,
      FSButton,
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
    <FSCol>
      <FSRow>
        <FSButton
          label="Africa/Abidjan"
          @click="args.setTimeZone('Africa/Abidjan')"
        />
        <FSButton
          label="Europe/Paris"
          @click="args.setTimeZone('Europe/Paris')"
        />
        <FSButton
          label="America/Guatemala"
          @click="args.setTimeZone('America/Guatemala')"
        />
        <FSButton
          label="Asia/Kamchatka"
          @click="args.setTimeZone('Asia/Kamchatka')"
        />
      </FSRow>
      <FSDateTimeRangeField
        label="Date & time range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeRangeField
        label="Required date & time range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeRangeField
        label="Disabled date & time range, error color, with description"
        description="Disabled description"
        color="error"
        :disabled="true"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,s,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: null,
      value2: null,
      value3: null,
      rules: DateRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSDateTimeRangeField,
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
        <FSDateTimeRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const We=["Variations","Rules"];export{r as Rules,e as Variations,We as __namedExportsOrder,Ue as default};
