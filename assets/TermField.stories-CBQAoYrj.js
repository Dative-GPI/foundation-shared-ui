import{r as x,b as f,c as r}from"./vue.esm-bundler-0BaZj8Cy.js";import{F as E}from"./FSCol-D35grUmj.js";import{F as A}from"./FSText-BX0Tt0y-.js";import{F as g}from"./FSDivider-C9NsWnAJ.js";import{F as S,u as b}from"./FSTermField-DlpOPLJm.js";import{F as h}from"./FSTextField-BJRcNyoA.js";import{F as C}from"./FSAutocompleteTimeZone-Bc7TQcK2.js";import{u as Z}from"./useAppTimeZone-DjPZmopE.js";import{u as w}from"./useDateFormat-CNMspjvu.js";import"./css-Bhvr2onI.js";import"./useBreakpoints-2HHUcVIh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-SBQj5l4a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./useSlots-I9K15ysi.js";import"./FSRow-CAJM3FZ0.js";import"./lodash-BrWYvtk2.js";import"./FSSelectField-DV_aK3ld.js";import"./VList-CxEWDEvR.js";import"./FSCard-Dlw97Dqr.js";import"./VDialog-cy2cAeAj.js";import"./VOverlay-CTri8YxJ.js";import"./forwardRefs-DWGaNmQL.js";import"./color-v9Utm2wX.js";import"./proxiedModel-gKZvE0id.js";import"./anchor-B7sx4vRv.js";import"./dimensions-BEVfeJxO.js";import"./display-w-mPL_cH.js";import"./scopeId-DtuQcaKf.js";import"./locale-CUGdfosF.js";import"./router-DTj21Dkp.js";import"./transition-CCJeTa-A.js";import"./VDefaultsProvider-DlfGiSFQ.js";import"./index-A-BnjIhl.js";import"./VIcon-_OtdNVUv.js";import"./ssrBoot-YHUJVgIR.js";import"./border-B7ttCXY5.js";import"./density-P84-FGcF.js";import"./elevation-C2OyWM5g.js";import"./rounded-BByw44D4.js";import"./index-C_NEyI9V.js";import"./VImg-CiDZbmGb.js";import"./index-BSIzjytc.js";import"./FSSlideGroup-D7P5Hhl4.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Bl8vpUh8.js";import"./FSButton-Ca0A16tw.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./FSClickable-CbOr5F2S.js";import"./VProgressCircular-NnNXhC5D.js";import"./resizeObserver-EZycJKNh.js";import"./FSSpan-hBzULALq.js";import"./FSIcon-BwW5Hq8i.js";import"./VSlideGroupItem-g9Eu1KOy.js";import"./group-BV8nssOR.js";import"./FSToggleSet-DdwsJWnh.js";import"./FSWrapGroup-DcC6Lpyw.js";import"./VInput-Dz3e_hzB.js";import"./form-BxXGwYee.js";import"./FSBaseField-BMGHZA0m.js";import"./FSCheckbox-BXQYOoec.js";import"./useRules-B-2YsFdr.js";import"./VSelectionControl-DanrcpVZ.js";import"./VLabel-B8m3kRrJ.js";import"./FSFadeOut-BlD2fPTA.js";import"./FSLoader-CljC1u5C.js";import"./FSRadio-sGO-DteL.js";import"./VSelect-Di5DH8az.js";import"./VMenu-664v_26-.js";import"./dates-DFP4a3ym.js";import"./useTranslations-DJOHKWsD.js";import"./FSDateTimeRangeField-xzpJEJmv.js";import"./FSDialogSubmit-By0tRZD3.js";import"./FSDialog-_cc109cU.js";import"./FSCalendarTwin-BRlYo7Dd.js";import"./useAppLanguageCode-DX4nWmzx.js";import"./VLocaleProvider-B05T5O77.js";import"./VBtn-C1BhuyNn.js";import"./loader-BfrQsM5c.js";import"./FSClock-DATSA24b.js";import"./FSSlider-B9kFZA-g.js";import"./VSlider-CFrT1Yc4.js";import"./FSNumberField-Bin1360D.js";import"./FSForm-Bl5Uhcs5.js";import"./rules-DoenPXnB.js";import"./datesTools-CNM18gr4.js";import"./startOfWeek-uXTpkxA4.js";import"./time-BTEENFnf.js";import"./VField-fH-IYcLo.js";import"./FSAutocompleteField-DyVgj832.js";import"./FSSearchField-CXQ5durH.js";import"./filter-BsWs0jz4.js";import"./FSChip-CBSowMc1.js";import"./base-CmdGny12.js";import"./serviceFactory-qtdw0UKd.js";import"./composableFactory-K8W9GIHH.js";import"./useAutocomplete-CGqtAfo7.js";import"./startOfDay-C4pDH4rb.js";const he={title:"Foundation/Shared/Input fields/TermField",component:S,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","before-after"]},onUpdate:{action:"update"},"onUpdate:startDate":{action:"update:startDate"},"onUpdate:endDate":{action:"update:endDate"}}},a={args:{label:"Term",description:null,startDate:"now - 1d",endDate:"now",variant:"default",hideHeader:!1,lastPeriod:!1,required:!1,editable:!0},render:(t,{argTypes:U})=>({components:{FSCol:E,FSText:A,FSDivider:g,FSTermField:S,FSTextField:h,FSAutocompleteTimeZone:C},setup(){const e=x({...t}),{setAppTimeZone:u,timeZone:T}=Z(),{convert:i}=b(),{epochToLongTimeFormat:m}=w(),p=f({variable:"now - 2d"}),d=r(()=>i(e.startDate,p.value)),l=r(()=>i(e.endDate,p.value)),v=r(()=>m(d.value)),D=r(()=>m(l.value));return{timeZone:T,variables:p,localArgs:e,convertedEndDate:D,convertedEndEpoch:l,convertedStartDate:v,convertedStartEpoch:d,updateEndDate:o=>{var n;e.endDate=o,(n=t["onUpdate:endDate"])==null||n.call(t,o)},setAppTimeZone:u,updateStartDate:o=>{var n;e.startDate=o,(n=t["onUpdate:startDate"])==null||n.call(t,o)}}},template:`
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
