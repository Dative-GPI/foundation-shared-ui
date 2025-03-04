import{r as x,b as f,c as r}from"./vue.esm-bundler-BD3cPSox.js";import{F as E}from"./FSCol-C9a7BKGp.js";import{F as A}from"./FSText-uZOTHeSC.js";import{F as g}from"./FSDivider-lpVeL6HJ.js";import{F as S,u as b}from"./FSTermField-CwCUUdit.js";import{F as h}from"./FSTextField-P8lWx7Ri.js";import{F as C}from"./FSAutocompleteTimeZone-wLXHHp-Q.js";import{u as Z}from"./useAppTimeZone-Bsw9evvF.js";import{u as w}from"./useDateFormat-CAYs4N6A.js";import"./css-CmnfRCoE.js";import"./useBreakpoints-CnZdRDE7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-Cu9vf_Ix.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B93wSOzC.js";import"./useSlots-DhthX9xh.js";import"./FSRow-CopwEayK.js";import"./lodash-BrWYvtk2.js";import"./FSSelectField-Bk_8bqCE.js";import"./VList-B1NoTgR2.js";import"./FSCard-DOwp-V9l.js";import"./VDialog-BLZ0rQaD.js";import"./VOverlay-D-tSP_Gg.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DAd2dJIE.js";import"./proxiedModel-JzK6JHhO.js";import"./anchor-Ce3a1Oj_.js";import"./dimensions-DbGEEU80.js";import"./display-D74v7vg7.js";import"./scopeId-CdDRBDvT.js";import"./locale-Cg0C6Moy.js";import"./router-BdSI2seK.js";import"./transition-BVEL_Cnv.js";import"./VDefaultsProvider-rHrX99un.js";import"./index-CcZ3F2bM.js";import"./VIcon-ef9P0Odv.js";import"./ssrBoot-BSKtbDuI.js";import"./border-CUiZ6XeR.js";import"./density-Dp_zkCfD.js";import"./elevation-C4p0Fj2B.js";import"./rounded-idSslOdv.js";import"./index-BRxggfmq.js";import"./VImg-DqEZxS4C.js";import"./index-Ov0xN_Hx.js";import"./FSSlideGroup-BX0UkKdi.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-B3zS2F8_.js";import"./FSButton-CQA40iQ2.js";import"./FSRouterLink-_G3m0SRF.js";import"./vue-router-Ds_E4c-X.js";import"./FSClickable-BsEc8iHI.js";import"./VProgressCircular-Ca7Fp11Q.js";import"./resizeObserver-BdS48m16.js";import"./FSSpan-CqHf-ny6.js";import"./FSIcon-BikiybNc.js";import"./VSlideGroupItem-BuoHA9mk.js";import"./group-B_AHtZDM.js";import"./FSToggleSet-DDZ_-ts7.js";import"./FSWrapGroup-BXAsHxAi.js";import"./VInput-D-36mGWK.js";import"./form-DhAzn97I.js";import"./FSBaseField-04YhYRH0.js";import"./FSCheckbox-DsWNnHeY.js";import"./useRules-Bpmg6xi7.js";import"./VSelectionControl-CDPTHhw0.js";import"./VLabel-gCKEzUPw.js";import"./FSFadeOut-FPHnkeYn.js";import"./FSLoader-DTAq-3Vo.js";import"./FSRadio-C8sbm974.js";import"./VSelect-B9x7lGfo.js";import"./VMenu-iLNk3WZy.js";import"./dates-CU5b-tXh.js";import"./useTranslations-aJtH5CGl.js";import"./FSDateTimeRangeField-CYDC26Je.js";import"./FSDialogSubmit-CntjvFQV.js";import"./FSDialog-C1cJlOKs.js";import"./FSCalendarTwin-BE1IJbsX.js";import"./useAppLanguageCode-DTCWF4CX.js";import"./VLocaleProvider-bC_bnDeo.js";import"./VBtn-BRV4dgeZ.js";import"./loader-DirtECG2.js";import"./FSClock-Bt3qCe4X.js";import"./FSSlider-C2yIw2NI.js";import"./VSlider-sHKFORYg.js";import"./FSNumberField-DOoNEdIv.js";import"./FSForm-BeaFP3IP.js";import"./rules-CTff5T7p.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-CagsiWi1.js";import"./VField-_4f0OeoM.js";import"./FSAutocompleteField-CNziED-u.js";import"./FSSearchField-BpTRPB0M.js";import"./filter-VzgWnVmw.js";import"./FSChip-D4m4Movw.js";import"./base-CmdGny12.js";import"./composableFactory-uBEY979O.js";import"./serviceFactory-B3o6Bvwt.js";import"./useAutocomplete-BGAR7scz.js";import"./startOfDay-C4pDH4rb.js";const he={title:"Foundation/Shared/Input fields/TermField",component:S,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","before-after"]},onUpdate:{action:"update"},"onUpdate:startDate":{action:"update:startDate"},"onUpdate:endDate":{action:"update:endDate"}}},a={args:{label:"Term",description:null,startDate:"now - 1d",endDate:"now",variant:"default",hideHeader:!1,lastPeriod:!1,required:!1,editable:!0},render:(t,{argTypes:U})=>({components:{FSCol:E,FSText:A,FSDivider:g,FSTermField:S,FSTextField:h,FSAutocompleteTimeZone:C},setup(){const e=x({...t}),{setAppTimeZone:u,timeZone:T}=Z(),{convert:i}=b(),{epochToLongTimeFormat:m}=w(),p=f({variable:"now - 2d"}),d=r(()=>i(e.startDate,p.value)),l=r(()=>i(e.endDate,p.value)),v=r(()=>m(d.value)),D=r(()=>m(l.value));return{timeZone:T,variables:p,localArgs:e,convertedEndDate:D,convertedEndEpoch:l,convertedStartDate:v,convertedStartEpoch:d,updateEndDate:o=>{var n;e.endDate=o,(n=t["onUpdate:endDate"])==null||n.call(t,o)},setAppTimeZone:u,updateStartDate:o=>{var n;e.startDate=o,(n=t["onUpdate:startDate"])==null||n.call(t,o)}}},template:`
      <FSCol
        gap="20px"
      >
        <FSTermField
          v-bind="localArgs"
          v-model:startDate="localArgs.startDate"
          v-model:endDate="localArgs.endDate"
          @update="localArgs['onUpdate']"
          @update:startDate="updateStartDate"
          @update:endDate="updateEndDate"
        />
        <FSDivider />
        <FSCol gap="24px">
          <FSText
            font="text-h2"
          >
            Outils supplémentaires:
          </FSText>
          <FSCol>
            <FSText
              font="text-h3"
            >
              App time zone:
            </FSText>
            <FSAutocompleteTimeZone
              :modelValue="timeZone"
              @update:modelValue="setAppTimeZone"
            />
          </FSCol>
          <FSCol>
            <FSText
              font="text-h3"
            >
              Evaluation de la date de début et de fin avec useTermFieldDate:
            </FSText>
            <FSRow>
              <FSText
                font="text-button"
              >
                {{ localArgs.startDate }} :
              </FSText>
              <FSText>{{ convertedStartDate }} ( {{ convertedStartEpoch }} )</FSText>
            </FSRow>
            <FSRow>
              <FSText
                font="text-button"
              >
                {{ localArgs.endDate }} :
              </FSText>
              <FSText>{{ convertedEndDate }} ( {{ convertedEndEpoch }} )</FSText>
            </FSRow>
            <FSText>
              Variables: {{ variables }}
            </FSText>
          <FSCol>
        </FSCol>
      </FSCol>
    `})};var s,c,F;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Term',
    description: null,
    startDate: 'now - 1d',
    endDate: 'now',
    variant: 'default',
    hideHeader: false,
    lastPeriod: false,
    required: false,
    editable: true
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSCol,
      FSText,
      FSDivider,
      FSTermField,
      FSTextField,
      FSAutocompleteTimeZone
    },
    setup() {
      const localArgs = reactive({
        ...args
      });
      const {
        setAppTimeZone,
        timeZone
      } = useAppTimeZone();
      const {
        convert
      } = useTermFieldDate();
      const {
        epochToLongTimeFormat
      } = useDateFormat();
      const variables = ref({
        variable: 'now - 2d'
      });
      const convertedStartEpoch = computed(() => convert(localArgs.startDate, variables.value));
      const convertedEndEpoch = computed(() => convert(localArgs.endDate, variables.value));
      const convertedStartDate = computed(() => epochToLongTimeFormat(convertedStartEpoch.value));
      const convertedEndDate = computed(() => epochToLongTimeFormat(convertedEndEpoch.value));

      // Émet les événements d'update vers Storybook
      const updateStartDate = (value: string) => {
        localArgs.startDate = value;
        args['onUpdate:startDate']?.(value);
      };
      const updateEndDate = (value: string) => {
        localArgs.endDate = value;
        args['onUpdate:endDate']?.(value);
      };
      return {
        timeZone,
        variables,
        localArgs,
        convertedEndDate,
        convertedEndEpoch,
        convertedStartDate,
        convertedStartEpoch,
        updateEndDate,
        setAppTimeZone,
        updateStartDate
      };
    },
    template: \`
      <FSCol
        gap="20px"
      >
        <FSTermField
          v-bind="localArgs"
          v-model:startDate="localArgs.startDate"
          v-model:endDate="localArgs.endDate"
          @update="localArgs['onUpdate']"
          @update:startDate="updateStartDate"
          @update:endDate="updateEndDate"
        />
        <FSDivider />
        <FSCol gap="24px">
          <FSText
            font="text-h2"
          >
            Outils supplémentaires:
          </FSText>
          <FSCol>
            <FSText
              font="text-h3"
            >
              App time zone:
            </FSText>
            <FSAutocompleteTimeZone
              :modelValue="timeZone"
              @update:modelValue="setAppTimeZone"
            />
          </FSCol>
          <FSCol>
            <FSText
              font="text-h3"
            >
              Evaluation de la date de début et de fin avec useTermFieldDate:
            </FSText>
            <FSRow>
              <FSText
                font="text-button"
              >
                {{ localArgs.startDate }} :
              </FSText>
              <FSText>{{ convertedStartDate }} ( {{ convertedStartEpoch }} )</FSText>
            </FSRow>
            <FSRow>
              <FSText
                font="text-button"
              >
                {{ localArgs.endDate }} :
              </FSText>
              <FSText>{{ convertedEndDate }} ( {{ convertedEndEpoch }} )</FSText>
            </FSRow>
            <FSText>
              Variables: {{ variables }}
            </FSText>
          <FSCol>
        </FSCol>
      </FSCol>
    \`
  })
}`,...(F=(c=a.parameters)==null?void 0:c.docs)==null?void 0:F.source}}};const Ce=["Variations"];export{a as Variations,Ce as __namedExportsOrder,he as default};
