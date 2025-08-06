import{F as i}from"./FSDateTimeRangeField-C3CjK4RR.js";import{F as g}from"./FSButton-B9T3D7JL.js";import{F}from"./FSForm-BptLXx1c.js";import{F as d}from"./FSCol-79-COv64.js";import{_ as u}from"./FSRow-BvJ7lU5E.js";import{u as c}from"./useAppTimeZone-CyFP2jUy.js";import{D as b}from"./rules-B-1MsapQ.js";import"./vue.esm-bundler-CocPPKUI.js";import"./FSDialogSubmit-CKqlTiu6.js";import"./FSFadeOut-BcV7cYL5.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-DZlz3-56.js";import"./useColors-C1aD-Kb6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1Gcptw7.js";import"./css-mt76hoAn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-SzMD3OVg.js";import"./FSCard-2KUMcI8D.js";import"./FSText-Nj40J67v.js";import"./useSlots-D4bv69lA.js";import"./VDialog-BOSWAwdu.js";import"./VOverlay-C9rlmtj8.js";import"./easing-DY7PVvcf.js";import"./color-D50-hVV_.js";import"./proxiedModel-DW1FRKBO.js";import"./anchor-D4EnoweD.js";import"./dimensions-Cv9Fwl7U.js";import"./display-23tZl-3U.js";import"./lazy-Dahsm7lL.js";import"./locale-_fONYh-8.js";import"./router-CKzlklLc.js";import"./scopeId-BfaO37qo.js";import"./transition-bMLtH-b3.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-CV4ffwSK.js";import"./useTranslations-DJaIYmO0.js";import"./FSCalendarTwin-CLixcsJt.js";import"./FSSelectField-Cc3l2LgY.js";import"./FSDialogMenu-CqfE7T6V.js";import"./FSSlideGroup-BoaCkdx0.js";import"./FSButtonNextIcon-BjCs89jV.js";import"./VSlideGroupItem-nAYd2StP.js";import"./group-MFxThiWx.js";import"./index-hd-xIizf.js";import"./VIcon-ZjKwFcqe.js";import"./resizeObserver-DDOqpSMx.js";import"./FSToggleSet-mQm74CcI.js";import"./FSWrapGroup-DXlgsE59.js";import"./VInput-JSCg5nQs.js";import"./density-2KuMGYl6.js";import"./FSBaseField-Cn3A38Ti.js";import"./FSSpan-CKhKq6E1.js";import"./FSTextField-CdmKROte.js";import"./useRules-C3-AmzzE.js";import"./VField-C42QHTgn.js";import"./VLabel-yrR5w-fx.js";import"./loader-BDqRCawj.js";import"./VProgressCircular-k_tOz5gX.js";import"./rounded-CBYChxif.js";import"./index-5LM_ZUPq.js";import"./FSCheckbox-MGAv1q-u.js";import"./FSIcon-BGuuL0jz.js";import"./VCheckboxBtn-CRTq-u2o.js";import"./VSelectionControl-t1Q43Tu7.js";import"./index-BwBNp3ym.js";import"./FSLoader-JpoH2mis.js";import"./elevation-DUhGVECn.js";import"./FSRadio-D7UyW-G6.js";import"./VSelect-CDoqko5t.js";import"./VList-7u5M4k2B.js";import"./ssrBoot-B-cFki3l.js";import"./border-ZP5ArpGv.js";import"./VImg-C2WY2bzk.js";import"./VMenu-DVt-HGrP.js";import"./useDateFormat-DIxFAYu6.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-yNRdweo3.js";import"./VLocaleProvider-BJaGNJI0.js";import"./VBtn-CT_Tyh1g.js";import"./FSClock-DswYcISI.js";import"./FSSlider-D214cViD.js";import"./VSlider-DynmDTsv.js";import"./VSliderTrack-C6Ch4QSr.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-CqIDwjuA.js";import"./time-DjiI-HV9.js";const er={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{setTimeZone:c().setAppTimeZone,value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateTimeRangeField:i,FSButton:g,FSCol:d,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const rr=["Variations","Rules"];export{r as Rules,e as Variations,rr as __namedExportsOrder,er as default};
