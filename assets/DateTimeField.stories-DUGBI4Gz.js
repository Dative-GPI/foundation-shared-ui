import i from"./FSDateTimeField-5zEqglMa.js";import{F as c}from"./FSButton-VjwKfCr9.js";import{F}from"./FSForm-DtfEUZJL.js";import{F as d}from"./FSCol-79-COv64.js";import{_ as u}from"./FSRow-BvJ7lU5E.js";import{u as g}from"./useAppTimeZone-CyFP2jUy.js";import{D as b}from"./rules-BRs3Lhuu.js";import"./vue.esm-bundler-CocPPKUI.js";import"./FSDialogMenu-CeOfi1Vz.js";import"./FSCard-JQNJPDhp.js";import"./useColors-DUufJJPH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DhcBBMcp.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VDialog-Cy-8Xjn8.js";import"./VOverlay-BofqjN94.js";import"./easing-DY7PVvcf.js";import"./color-yBCdco2I.js";import"./proxiedModel-DvocDLKO.js";import"./anchor-C7UfIAXa.js";import"./dimensions-C9PuMYcl.js";import"./display-BmuJHlI4.js";import"./lazy-CpkO2kQj.js";import"./locale-_fONYh-8.js";import"./router-Btsphvl6.js";import"./scopeId-LQkRlG9f.js";import"./transition-BuKnRONq.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-Clc0K3gC.js";import"./FSTextField-CrSrBFtk.js";import"./FSBaseField-BHCTmkg_.js";import"./FSSpan-DrSEJIpr.js";import"./useSlots-D4bv69lA.js";import"./useRules-C3-AmzzE.js";import"./VField-CEhz-0ZK.js";import"./index-DfBdMsnv.js";import"./VLabel-HvE-XSAC.js";import"./VInput-DhPQv4YC.js";import"./VIcon-Qz-Il978.js";import"./density-DZuLaB-B.js";import"./loader-B3-0Tc48.js";import"./VProgressCircular-BMkR7ln7.js";import"./resizeObserver-QYhQJr79.js";import"./rounded-Cjf6r1y4.js";import"./index-lkzvYdnq.js";import"./FSCalendar-fEckLg33.js";import"./FSSelectField-DzMtmuD3.js";import"./FSSlideGroup-BpYleAPY.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BGw3zb-K.js";import"./VSlideGroup-D3ZQzm0f.js";import"./group-CbiZXdYV.js";import"./VSlideGroupItem-BQNaTCX0.js";import"./FSToggleSet-BAu9OVEz.js";import"./FSWrapGroup-CR1U-5kP.js";import"./FSCheckbox-ChCYq6Yz.js";import"./FSIcon-CKNHHVc2.js";import"./VCheckboxBtn-B3VCaA0L.js";import"./VSelectionControl-BneTlqNp.js";import"./index-BgX1FNqJ.js";import"./FSFadeOut-BaaWP8Xe.js";import"./FSLoader-BeIlBGG_.js";import"./elevation-CsFMJmSN.js";import"./FSRadio-DSN2e6_O.js";import"./VSelect-CKWfJZu2.js";import"./VList-BU_HHy4r.js";import"./ssrBoot-B-cFki3l.js";import"./border-B0huqYee.js";import"./VImg-BaN5zAl6.js";import"./VMenu-uiC9_CJ1.js";import"./useDateFormat-DIxFAYu6.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-yNRdweo3.js";import"./useTranslations-DJaIYmO0.js";import"./VLocaleProvider-B6NC48_S.js";import"./VBtn-Cjbcb1KM.js";import"./FSWindow-D3STb6jq.js";import"./FSText-U805njuH.js";import"./VWindowItem-Dr9-Ppmb.js";import"./FSClock-xDXvcUTi.js";import"./FSSlider-Bnz1_knh.js";import"./VSlider-xkXf3j8e.js";import"./VSliderTrack-BIaLI1BH.js";import"./FSMenu-ymP5KhuL.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-6FPdriKA.js";import"./time-BAqNPYOD.js";import"./times-CqUFey1a.js";const or={title:"Foundation/Shared/Input fields/DateTimeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{setTimeZone:g().setAppTimeZone,value1:null,value2:1701234e6,value3:1701234e6}},render:(t,{argTypes:o})=>({components:{FSDateTimeField:i,FSButton:c,FSCol:d,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
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
      <FSDateTimeField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Disabled date & time, error color, with description"
        description="Disabled description"
        color="error"
        :disabled="true"
        v-model="args.value3"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:b}},render:(t,{argTypes:o})=>({components:{FSForm:F,FSDateTimeField:i,FSCol:d,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var a,l,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    args: {
      setTimeZone: useAppTimeZone().setAppTimeZone,
      value1: null,
      value2: 1701234000000,
      value3: 1701234000000
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateTimeField,
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
      <FSDateTimeField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Disabled date & time, error color, with description"
        description="Disabled description"
        color="error"
        :disabled="true"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var m,s,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      FSDateTimeField,
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
        <FSDateTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const ir=["Variations","Rules"];export{r as Rules,e as Variations,ir as __namedExportsOrder,or as default};
