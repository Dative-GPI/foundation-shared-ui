import{F as i}from"./FSDateTimeRangeField-B-c9YT0a.js";import{F as g}from"./FSButton-DEqhqb0b.js";import{F}from"./FSForm-Ci9drIy4.js";import{F as d}from"./FSCol-BU2zndN-.js";import{_ as u}from"./FSRow-Bdc52rY8.js";import{u as c}from"./useAppTimeZone-Yy6tN57G.js";import{D as b}from"./rules-BTu8BudJ.js";import"./vue.esm-bundler-BB--BfRN.js";import"./FSDialogSubmit-DCuIz0OX.js";import"./FSFadeOut-BS7VKwj1.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-f5uwzDhq.js";import"./useColors-CeWNZtds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BwQCEo_4.js";import"./css-DoweNwVf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-CsOSQzi_.js";import"./FSCard-CiGLNn7K.js";import"./FSText-RaLR8FTM.js";import"./useSlots-COLyvmal.js";import"./VDialog-bMbnstsA.js";import"./VOverlay-B758aeer.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DIvEt_AX.js";import"./proxiedModel-DMSSa4ZW.js";import"./anchor-C8ooBn8e.js";import"./dimensions-DwY9cRwZ.js";import"./display-DzHu_6W3.js";import"./scopeId-NiaFRIZK.js";import"./locale-CSWC84Vq.js";import"./router-WJHyAZQ9.js";import"./transition-GJJG9yri.js";import"./VDefaultsProvider-BK3j_XEC.js";import"./useTranslations-DvAhn7XV.js";import"./FSCalendarTwin-Dk9yTQam.js";import"./FSSelectField-DqwGnLNL.js";import"./VList-CAfJ4PqY.js";import"./index-9ysw5oGg.js";import"./VIcon-Cl87HT90.js";import"./ssrBoot-DNxkCF-9.js";import"./border-TZTDiA6n.js";import"./density-Xpr_P7nk.js";import"./elevation-S_BtbnzN.js";import"./rounded-BKWlZxOJ.js";import"./index-8zgUIpZ9.js";import"./VImg-DcLzuYY5.js";import"./index--Ye8kcMr.js";import"./FSSlideGroup-DLHspItq.js";import"./FSButtonNextIcon-BwHgwEym.js";import"./VSlideGroupItem-BI1OJQNm.js";import"./group-C8GVwDAJ.js";import"./resizeObserver-CgHguIgR.js";import"./FSToggleSet-D12Sjar_.js";import"./FSWrapGroup-TGBfJRdY.js";import"./VInput-BfMi-lTR.js";import"./FSBaseField-BxMUaAXJ.js";import"./FSSpan-BndtI8AP.js";import"./FSTextField-DmCfYujO.js";import"./useRules-CSYFw_Ue.js";import"./VField-COyetWuv.js";import"./VLabel-Cmax-_yp.js";import"./loader-BKsf8Js6.js";import"./VProgressCircular-DNr7n8jG.js";import"./FSCheckbox-ti2pWVdy.js";import"./FSIcon-BKav6CVU.js";import"./VSelectionControl-KO2lf4xS.js";import"./FSLoader-Cf5HtYZd.js";import"./FSRadio-C1kBTUbb.js";import"./VSelect-fihYAFHR.js";import"./VMenu-DdabqpBj.js";import"./useDateFormat-CLF81prI.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-DVn301Ra.js";import"./VLocaleProvider-jaJMEg04.js";import"./VBtn-CpUNAmWP.js";import"./FSClock-smdRdCOC.js";import"./FSSlider-D48CyF2S.js";import"./VSlider-Bn75Yh_W.js";import"./VSliderTrack-D17LvGqE.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./FSClickable-CwRD7A4m.js";import"./time-DawHGwfT.js";const We={title:"Foundation/Shared/Input fields/DateTimeRangeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{setTimeZone:c().setAppTimeZone,value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(t,{argTypes:o})=>({components:{FSDateTimeRangeField:i,FSButton:g,FSCol:d,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Xe=["Variations","Rules"];export{r as Rules,e as Variations,Xe as __namedExportsOrder,We as default};
