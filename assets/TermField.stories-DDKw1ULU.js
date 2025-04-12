import{r as A,b,c as r}from"./vue.esm-bundler-PTWG9x2X.js";import{a as h}from"./properties-DwZ_iDct.js";import{F as C}from"./FSCol-qfATdd_b.js";import{F as w}from"./FSText-Da5isN0I.js";import{F as Z}from"./FSDivider-D-FRSUwM.js";import{F as m,u as R}from"./FSTermField-DXScT8ni.js";import{F as U}from"./FSTextField-Du_6UKzN.js";import{F as V}from"./FSAutocompleteTimeZone-ClMs-b-M.js";import{u as L}from"./useAppTimeZone-DyFwBRoB.js";import{u as y}from"./useDateFormat-BIFVETfU.js";import"./css-B90wD3BD.js";import"./useBreakpoints-W7XGW48y.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-DSUu_QQ4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./useSlots-BG_ZhEqK.js";import"./FSRow-DPcQMiM9.js";import"./lodash-BrWYvtk2.js";import"./FSSelectField-CdRtA_Eu.js";import"./VList-Dqx2Wq64.js";import"./FSCard-CRoBY3gL.js";import"./VDialog-DW8Lwwmu.js";import"./VOverlay-CoK8W0Lk.js";import"./forwardRefs-DWGaNmQL.js";import"./color-CCpgnDIk.js";import"./proxiedModel-CvHSoKPb.js";import"./anchor-BcF6JBj1.js";import"./dimensions-v18atrWI.js";import"./display-CESVul9-.js";import"./scopeId-CROTNdIb.js";import"./locale-Cz_4DTJh.js";import"./router-BQjY5_kj.js";import"./transition-QV8dDJB9.js";import"./VDefaultsProvider-aDgtYDKn.js";import"./index-b-ADC_Il.js";import"./VIcon-DIeegzqR.js";import"./ssrBoot-DfimFJGl.js";import"./border-CIYj3WlL.js";import"./density-CznkHGGy.js";import"./elevation-CrSwNJwg.js";import"./rounded-BbPXzFqc.js";import"./index-Dqqa47M6.js";import"./VImg-CBGPWIu-.js";import"./index-BNomsh5u.js";import"./FSSlideGroup-Cnb4B0wP.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BgOE6pA_.js";import"./FSButton-CqjbOz0n.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./FSClickable-KpP1cmTZ.js";import"./VProgressCircular-eoxb555W.js";import"./resizeObserver-C17Kgm90.js";import"./FSSpan-yJEd2pn-.js";import"./FSIcon-DQMOs0-E.js";import"./VSlideGroupItem-C6-4cvTl.js";import"./group-8tJUjatm.js";import"./FSToggleSet-2ksJh9hi.js";import"./FSWrapGroup-8ynKQ69u.js";import"./VInput-C2FcZlE6.js";import"./FSBaseField-BF-P1IfK.js";import"./FSCheckbox-D0eLEsDk.js";import"./useRules-D0leB7Wy.js";import"./VSelectionControl-Fvr0iuTu.js";import"./VLabel-BNJ33aDR.js";import"./FSFadeOut-BR2NoxgI.js";import"./FSLoader-DnFcYh1x.js";import"./FSRadio-dWKh4KJE.js";import"./VSelect-D-RlUgcB.js";import"./VMenu-BiZHvw8b.js";import"./dates-CU5b-tXh.js";import"./useTranslations-BnE68qER.js";import"./FSDateTimeRangeField-ByFydOYK.js";import"./FSDialogSubmit-D5gpKzhX.js";import"./FSDialog-QnzECwDB.js";import"./FSCalendarTwin-BW7R6pA0.js";import"./useAppLanguageCode-tS_QL_TH.js";import"./VLocaleProvider-Dsy-CaZP.js";import"./VBtn-oNOab7rO.js";import"./loader-BqT2mYY7.js";import"./FSClock-y2Z6_8_R.js";import"./FSSlider-HwvZiE0y.js";import"./VSlider-Cl-vIKi0.js";import"./FSNumberField-CeC60SXw.js";import"./FSForm-uibijjXy.js";import"./rules-Bi0-Tpmi.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-qmSz82Tz.js";import"./VField-w4x2OZhg.js";import"./FSAutocompleteField-B675gFER.js";import"./FSSearchField-BeidTVNh.js";import"./filter-qsWrMVs0.js";import"./FSChip-CFp_uIHK.js";import"./base-CmdGny12.js";import"./composableFactory-BVozujU4.js";import"./serviceFactory-B3o6Bvwt.js";import"./useAutocomplete-DNfysV-Y.js";import"./startOfDay-C4pDH4rb.js";const Re={title:"Foundation/Shared/Input fields/TermField",component:m,tags:["autodocs"],argTypes:{...h(m),variant:{control:{type:"select"},options:["default","before-after"]}}},a={args:{startDate:"now - 1d",endDate:"now",variant:"default"},render:t=>({components:{FSTermField:m},setup(){return{args:t}},template:`
      <FSTermField
        v-bind="args"
        v-model:startDate="args.startDate"
        v-model:endDate="args.endDate"
      />
    `})},p={args:{startDate:"now - 1d",endDate:"now",variant:"default"},render:t=>({components:{FSCol:C,FSText:w,FSDivider:Z,FSTermField:m,FSTextField:U,FSAutocompleteTimeZone:V},setup(){const e=A({...t}),{setAppTimeZone:x,timeZone:g}=L(),{convert:d}=R(),{epochToLongTimeFormat:s}=y(),i=b({variable:"now - 2d"}),l=r(()=>d(e.startDate,i.value)),c=r(()=>d(e.endDate,i.value)),E=r(()=>s(l.value)),f=r(()=>s(c.value));return{timeZone:g,variables:i,localArgs:e,convertedEndDate:f,convertedEndEpoch:c,convertedStartDate:E,convertedStartEpoch:l,updateEndDate:o=>{var n;e.endDate=o,(n=t["onUpdate:endDate"])==null||n.call(t,o)},setAppTimeZone:x,updateStartDate:o=>{var n;e.startDate=o,(n=t["onUpdate:startDate"])==null||n.call(t,o)}}},template:`
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
    `})};var F,S,u;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    startDate: 'now - 1d',
    endDate: 'now',
    variant: 'default'
  },
  render: args => ({
    components: {
      FSTermField
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSTermField
        v-bind="args"
        v-model:startDate="args.startDate"
        v-model:endDate="args.endDate"
      />
    \`
  })
}`,...(u=(S=a.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};var D,v,T;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    startDate: 'now - 1d',
    endDate: 'now',
    variant: 'default'
  },
  render: args => ({
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
}`,...(T=(v=p.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const Ue=["Default","UseTermField"];export{a as Default,p as UseTermField,Ue as __namedExportsOrder,Re as default};
