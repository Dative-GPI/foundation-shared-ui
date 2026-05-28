import{a as i}from"./FSDateTimeRangeField-KmYXIYth.js";import{F as g}from"./FSButton-CX1uVweX.js";import{F as c}from"./FSForm-kBy3Krb7.js";import{F as d}from"./FSCol-B2uM4vFw.js";import{_ as u}from"./FSRow-C8VtPvPz.js";import{D as F}from"./rules-tbTkbybW.js";import{u as b}from"./useAppTimeZone-fWyn93dw.js";import"./vue.esm-bundler-DR0_aU9U.js";import"./FSDialogSubmit-DXuR5l8T.js";import"./FSFadeOut-DENuqwmT.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-DhvOJkKp.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./css-B9c0ZZC5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-BThV5-rh.js";import"./FSCard--XyliQO3.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./VProgressCircular-CZaehD4X.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSText-CUmuxASa.js";import"./useSlots-p1mkRhuZ.js";import"./VDialog-uOP7gGlh.js";import"./VOverlay-BwyinDfp.js";import"./proxiedModel-DoNoMWaC.js";import"./easing--CnlGZ0M.js";import"./anchor-CT7OU_gq.js";import"./dimensions-DYTrXD1P.js";import"./display-B8Tm0OQZ.js";import"./lazy-DY4Wto-x.js";import"./locale-yWiW8Thx.js";import"./router-CJAgOfLI.js";import"./scopeId-bhuUTgv7.js";import"./transition-CedxoFs4.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-BGzvJBOV.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./useTranslations-CDmrxgqt.js";import"./FSCalendarTwin-DxTE2XXS.js";import"./FSSelectField-CQJ2t4a5.js";import"./FSDialogMenu-qRBioB29.js";import"./FSSlideGroup-DXfM7ZwC.js";import"./FSButtonNextIcon-BPTvjWXT.js";import"./VSlideGroup-BjJJyiAP.js";import"./index-C-lZWyiZ.js";import"./goto-nsb-OfwD.js";import"./group-CUiyutR_.js";import"./icons-CT9uuJgl.js";import"./VIcon-e3y7Ok8e.js";import"./VSlideGroupItem-BDJ1UEY1.js";import"./FSToggleSet-r3-ZJAhZ.js";import"./FSWrapGroup-v391AceI.js";import"./VInput-Cb7sX7IB.js";import"./density-SLEyWIf6.js";import"./FSBaseField-y2QkcP3h.js";import"./FSSpan-9E7WYB2n.js";import"./FSTextField-tianF0jI.js";import"./useRules-2yt7KWSA.js";import"./VTextField-Jo2lzvlt.js";import"./VField-BhclGBdp.js";import"./VLabel-BfwkTHLb.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./rounded-B6-M_5uG.js";import"./index-BLyOCIqB.js";import"./FSCheckbox-D-n0kplZ.js";import"./FSIcon-CBwOL1p5.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./index-Dlqh_ozP.js";import"./FSLoader-DlWbYN_-.js";import"./elevation-DVEOfLMu.js";import"./FSRadio-CAlCR3Pp.js";import"./VSelect-CjSLppM5.js";import"./VList-fBlb7u4-.js";import"./ssrBoot-DbD7MJXH.js";import"./border-CatZixNo.js";import"./variant-BZg-bE5G.js";import"./VImg-DooBjoZC.js";import"./VDivider-g5HOQuaH.js";import"./VMenu-CkdLE1rB.js";import"./useDateFormat-DAnuesY2.js";import"./useAppLanguageCode-BoL-n_ZZ.js";import"./datesTools-B-vlCrHb.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./VLocaleProvider-CTFj-tH0.js";import"./date-CjorgyD7.js";import"./VBtn-hLKUYNZP.js";import"./position-Dh5mOHTG.js";import"./FSClock-Cms7mPkf.js";import"./FSSlider-D_2Q17Vn.js";import"./VSlider-PR8y8RxP.js";import"./VSliderTrack-4fUWbdH1.js";import"./time-DuowFvgO.js";import"./times-CqUFey1a.js";const gr={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{setTimeZone:b().setAppTimeZone,value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateTimeRangeField:i,FSButton:g,FSCol:d,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:F}},render:(t,{argTypes:o})=>({components:{FSForm:c,FSDateTimeRangeField:i,FSCol:d,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSForm>`})};var a,l,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const cr=["Variations","Rules"];export{r as Rules,e as Variations,cr as __namedExportsOrder,gr as default};
