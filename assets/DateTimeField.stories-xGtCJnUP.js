import i from"./FSDateTimeField-BlEPGgvw.js";import{F as c}from"./FSButton-C9qE_hma.js";import{F}from"./FSForm-8KK62jud.js";import{F as n}from"./FSCol-ChYB2Oag.js";import{F as u}from"./FSRow-BTBqaZ3Z.js";import{D as g}from"./rules-CGa_6Wse.js";import{u as b}from"./useAppTimeZone-CjwINmn2.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSDialogMenu-DFLdv4ZH.js";import"./FSCard-X6BL7IDn.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./css-BA19cdxW.js";import"./useBreakpoints-Trboya0O.js";import"./VProgressCircular-D014ccrC.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./VDialog-D_wwtbpx.js";import"./VOverlay-flKIXg07.js";import"./proxiedModel-4bJ1saXA.js";import"./easing-DY7PVvcf.js";import"./anchor-C-rl7L3L.js";import"./dimensions-BuDdBtmf.js";import"./display-RdUuPsY9.js";import"./lazy-D5C5Y6_6.js";import"./locale-MGWjZjXD.js";import"./router-D2Xcou1T.js";import"./scopeId-CVBASNvj.js";import"./transition-Dqm8buww.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Y-HqWA1J.js";import"./VDefaultsProvider-Cane1ZR3.js";import"./FSTextField-CCgGVMUk.js";import"./FSBaseField-DjPNexk7.js";import"./FSSpan-CffnRYnX.js";import"./useSlots-DEXetpJf.js";import"./useRules-eFcMZq7y.js";import"./VTextField-C-VZod1v.js";import"./VField-C_JZJuDz.js";import"./index-C0WTB2TM.js";import"./VLabel-DOSQu5RP.js";import"./VInput-CBXzUquC.js";import"./VIcon-BPCLtKbp.js";import"./icons-AciKn6XY.js";import"./density-HajNgXBf.js";import"./loader-DOKDD2NA.js";import"./VProgressLinear-DA0V-MGc.js";import"./rounded-BE8u9DAQ.js";import"./index-D_7bL_IH.js";import"./FSCalendar-8fQPg-VC.js";import"./FSSelectField-WAavbS0b.js";import"./FSSlideGroup-BLif3f0e.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-D5s36be0.js";import"./VSlideGroup-DLaaL0Lk.js";import"./goto-D2YfjHNt.js";import"./group-g6KFhHmW.js";import"./VSlideGroupItem-BNzWd0Zb.js";import"./FSToggleSet-BsHkDw8a.js";import"./FSWrapGroup-CZDPgZeJ.js";import"./FSCheckbox-BEgzMGmB.js";import"./FSIcon-D-iWmbKS.js";import"./VCheckboxBtn-BT3SzIyH.js";import"./VSelectionControl-TRNlUp1F.js";import"./index-CDgYZebE.js";import"./FSFadeOut-DWR8A1ny.js";import"./FSLoader-DRppy7ch.js";import"./elevation-DyTGrbk9.js";import"./FSRadio-BJhcq_TI.js";import"./VSelect-CfYUtP1Q.js";import"./VList-Bkkbsc6W.js";import"./ssrBoot-BimrXMWA.js";import"./border-D-0PuVU0.js";import"./variant-De5GYaDP.js";import"./VImg-CF0d7Fd2.js";import"./VDivider-sEPw-6oz.js";import"./VMenu-DfiSs3vJ.js";import"./useDateFormat-BKFE7Nxu.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./useAppLanguageCode-CFDnQcKu.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./VLocaleProvider-Dq2VqTAK.js";import"./date-PwlpMbc3.js";import"./VBtn-CvpLyLjZ.js";import"./position-BAHmyhJU.js";import"./FSWindow-7nqQW9YX.js";import"./FSText-DkgFU9ZB.js";import"./VWindowItem-e5v8cqfr.js";import"./FSClock-XIt3-5GF.js";import"./FSSlider-Dnh-YYao.js";import"./VSlider-so1FrUic.js";import"./VSliderTrack-Bx_4yzUt.js";import"./FSMenu-BQ9x-9Vx.js";import"./time-D8YoZjka.js";import"./times-CqUFey1a.js";const gr={title:"Shared/Components/Input fields/DateTimeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{setTimeZone:b().setAppTimeZone,value1:null,value2:1701234e6,value3:1701234e6}},render:(t,{argTypes:o})=>({components:{FSDateTimeField:i,FSButton:c,FSCol:n,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:g}},render:(t,{argTypes:o})=>({components:{FSForm:F,FSDateTimeField:i,FSCol:n,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
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
    </FSForm>`})};var a,l,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var s,p,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const br=["Variations","Rules"];export{r as Rules,e as Variations,br as __namedExportsOrder,gr as default};
