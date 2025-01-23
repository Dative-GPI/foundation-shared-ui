import{r as x,b as f,c as r}from"./vue.esm-bundler-CTTOvLCD.js";import{F as E}from"./FSCol-BPr0jVzk.js";import{F as A}from"./FSText-zXSXSnZG.js";import{F as g}from"./FSDivider-Da6ewG1k.js";import{F as S,u as b}from"./FSTermField-Ck5N6gA4.js";import{F as h}from"./FSTextField-Cq5SV0et.js";import{F as C}from"./FSAutocompleteTimeZone-DI2QOCxu.js";import{u as Z}from"./useAppTimeZone-Cju-Nbag.js";import{u as w}from"./useDateFormat-Cunhon6k.js";import"./css-D46r6e5F.js";import"./useBreakpoints-Bm7CjYdd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-D7R-CyI7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./useSlots-NXmwCOLw.js";import"./FSRow-C8EFLcn9.js";import"./lodash-BrWYvtk2.js";import"./FSSelectField-D7N68CWE.js";import"./VList-DRexluGA.js";import"./FSCard-DxhVm8H0.js";import"./VDialog-Cr2bmOLC.js";import"./VOverlay-Bysvo4NF.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DTA1Qd0w.js";import"./proxiedModel-Da7OD98r.js";import"./anchor-KPAVzGxJ.js";import"./dimensions-DIR9-JzD.js";import"./display-BWFgSvI7.js";import"./scopeId-DGVhnfG2.js";import"./locale-Guk_W035.js";import"./router-SvtovJtL.js";import"./transition-C1y9a89u.js";import"./VDefaultsProvider-45AVpOQL.js";import"./index-B698eGq-.js";import"./VIcon-DzkIKThE.js";import"./ssrBoot-C3MoFAVe.js";import"./border-CjCUMUtA.js";import"./density-n-hig0Tg.js";import"./elevation-CqdG4vF6.js";import"./rounded-5tkyiosR.js";import"./index-Bj6Uq_NX.js";import"./VImg-C1IcDibP.js";import"./index-CK42gwlP.js";import"./FSSlideGroup-CLbrB063.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BC6-OF7l.js";import"./FSButton-B2X9DGvb.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSClickable-DznopAj9.js";import"./VProgressCircular-it35si_v.js";import"./resizeObserver-Bwa55KU2.js";import"./FSSpan-QNtf4e4q.js";import"./FSIcon-yzGYQgqh.js";import"./VSlideGroupItem-CyUsoDyC.js";import"./group-CroFFR-b.js";import"./FSToggleSet-0XsNufiD.js";import"./FSWrapGroup-BCi713M2.js";import"./VInput-BgFKWDn-.js";import"./form-gxFDX6UX.js";import"./FSBaseField-BJJzXcrO.js";import"./FSCheckbox-CVOakf5q.js";import"./useRules-DE909mL5.js";import"./VSelectionControl-CZi2-uP4.js";import"./VLabel-DjEMOXzE.js";import"./FSFadeOut-C2gEJSut.js";import"./FSLoader-AugIw030.js";import"./FSRadio-GwhtOOcI.js";import"./VSelect-BnarcBwl.js";import"./VMenu-DP8ibRhi.js";import"./dates-DFP4a3ym.js";import"./useTranslations-Dol6kQeQ.js";import"./FSDateTimeRangeField-VWSFgJVQ.js";import"./FSDialogSubmit-C9CBWnXJ.js";import"./FSDialog-B6Z2dUh0.js";import"./FSCalendarTwin-CIFisW6w.js";import"./useAppLanguageCode-DIMcCLwL.js";import"./VLocaleProvider-rATLO7p0.js";import"./VBtn-IPVaR7st.js";import"./loader-BcXzPxbu.js";import"./FSClock-Bxnx2TrG.js";import"./FSSlider-BXMQcCf8.js";import"./VSlider-BKd0H04Q.js";import"./FSNumberField-CUiF7dbQ.js";import"./FSForm-BAYt8fPx.js";import"./rules-DkrQAdil.js";import"./datesTools-CNM18gr4.js";import"./startOfWeek-uXTpkxA4.js";import"./time-LFtvL5m_.js";import"./VField-Bi2n7Ebd.js";import"./FSAutocompleteField-BzAl3brV.js";import"./FSSearchField-BTXtCPns.js";import"./filter-4zTRfP5f.js";import"./FSChip-CVBfHYvV.js";import"./base-CmdGny12.js";import"./serviceFactory-qtdw0UKd.js";import"./composableFactory-BcaJMM0w.js";import"./useAutocomplete-bcE0UiKw.js";import"./startOfDay-C4pDH4rb.js";const he={title:"Foundation/Shared/Input fields/TermField",component:S,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","before-after"]},onUpdate:{action:"update"},"onUpdate:startDate":{action:"update:startDate"},"onUpdate:endDate":{action:"update:endDate"}}},a={args:{label:"Term",description:null,startDate:"now - 1d",endDate:"now",variant:"default",hideHeader:!1,lastPeriod:!1,required:!1,editable:!0},render:(t,{argTypes:U})=>({components:{FSCol:E,FSText:A,FSDivider:g,FSTermField:S,FSTextField:h,FSAutocompleteTimeZone:C},setup(){const e=x({...t}),{setAppTimeZone:u,timeZone:T}=Z(),{convert:i}=b(),{epochToLongTimeFormat:m}=w(),p=f({variable:"now - 2d"}),d=r(()=>i(e.startDate,p.value)),l=r(()=>i(e.endDate,p.value)),v=r(()=>m(d.value)),D=r(()=>m(l.value));return{timeZone:T,variables:p,localArgs:e,convertedEndDate:D,convertedEndEpoch:l,convertedStartDate:v,convertedStartEpoch:d,updateEndDate:o=>{var n;e.endDate=o,(n=t["onUpdate:endDate"])==null||n.call(t,o)},setAppTimeZone:u,updateStartDate:o=>{var n;e.startDate=o,(n=t["onUpdate:startDate"])==null||n.call(t,o)}}},template:`
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
