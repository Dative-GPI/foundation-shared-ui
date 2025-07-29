import{r as A,b,c as r}from"./vue.esm-bundler-PONd4AmC.js";import{a as h}from"./properties-Qw-O9fbT.js";import{F as C}from"./FSCol-Bfhiyt6Y.js";import{F as w}from"./FSText-C7hkL3As.js";import{F as Z}from"./FSDivider-B_antRd7.js";import{F as m}from"./FSTermField-l5pzQTBE.js";import{F as R}from"./FSTextField-D-U5ryYn.js";import{F as U}from"./FSAutocompleteTimeZone-CGfmGgMG.js";import{u as V}from"./useAppTimeZone-BXRoybOo.js";import{u as L}from"./useDateExpression-Dghvwhpf.js";import{u as y}from"./useDateFormat-BhCCrheZ.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./useSlots-nyIcwo6G.js";import"./FSRow-C-b-hpWa.js";import"./lodash-Zo30T2Bj.js";import"./FSSelectField-Bqm7POVY.js";import"./FSDialogMenu-Czm1Jubp.js";import"./FSCard-DYD9Tm3w.js";import"./VDialog-CJNHz4BJ.js";import"./VOverlay-U8N3Tt4W.js";import"./forwardRefs-DWGaNmQL.js";import"./color-_AiH45em.js";import"./proxiedModel-vOB1Q9Gh.js";import"./anchor-D2WyvgD_.js";import"./dimensions-CNbPgA3L.js";import"./display-BXzLC06Y.js";import"./scopeId-CWp-k_S_.js";import"./locale-CoLhg8Wl.js";import"./router-6tzIEQS-.js";import"./transition-BXZIGKil.js";import"./VDefaultsProvider-BsWh58B_.js";import"./FSSlideGroup-CGqp6f7y.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Dkus99PH.js";import"./FSButton-CZKySWW0.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-CyhgWkHC.js";import"./VProgressCircular-CDK6zSYw.js";import"./resizeObserver-UZYihl4g.js";import"./VIcon-DIMW80nW.js";import"./FSSpan-DxKJLsSl.js";import"./FSIcon-bsX1r_Ci.js";import"./VSlideGroupItem-B5H5Uw6w.js";import"./group-CvGRLeFV.js";import"./index-CANKuvlL.js";import"./FSToggleSet-CRtePpT3.js";import"./FSWrapGroup-CpwsD4SA.js";import"./VInput-ClaXJMCA.js";import"./density-CNNumQ_A.js";import"./FSBaseField-DMW1nZy-.js";import"./FSCheckbox-CQphVYdu.js";import"./useRules-CT5DWk6c.js";import"./VCheckboxBtn-B-CDiKqR.js";import"./VSelectionControl-HwS3bHvU.js";import"./index-B8vPsAiL.js";import"./VLabel-5AeJpfXJ.js";import"./FSFadeOut-CtUd8oOA.js";import"./FSLoader-UOJfN8Qb.js";import"./elevation-CL0Py7Fp.js";import"./FSRadio-BKiTm18z.js";import"./VSelect-BUWJeJyh.js";import"./VList-B9UxDYwK.js";import"./ssrBoot-DufuUSU7.js";import"./border-z35mRDPS.js";import"./rounded-BBFi0CuG.js";import"./VImg-DKyIpwU2.js";import"./index-Bb4mSIJO.js";import"./VMenu-D11N5TPJ.js";import"./dates-CU5b-tXh.js";import"./useTranslations-_Q1DYra_.js";import"./FSDateTimeRangeField-gIet2_RK.js";import"./FSDialogSubmit-BPHhd3-P.js";import"./FSDialog-Iu1wYtKv.js";import"./FSCalendarTwin-ONwWZT4N.js";import"./useAppLanguageCode-fPbUdbod.js";import"./VLocaleProvider-BW20Lu4A.js";import"./VBtn-PodE2DV2.js";import"./loader-DGoLn0VY.js";import"./FSClock-E7QFA3KD.js";import"./FSSlider-D514dNG_.js";import"./VSlider-brHfwJlg.js";import"./VSliderTrack-D_7OwznJ.js";import"./FSNumberField-Bfz5R9tT.js";import"./FSForm-CLe5Lp0x.js";import"./rules-DRXW83Bb.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-Cavyfpwa.js";import"./VField-So_guaQm.js";import"./FSAutocompleteField-BG1Iouz7.js";import"./FSSearchField-D3E8Wwt2.js";import"./filter-MyCPMQzE.js";import"./FSChip-CfNKsjD1.js";import"./base-CmdGny12.js";import"./composableFactory-B2U31qfW.js";import"./serviceFactory-aQiBqOvf.js";import"./useAutocomplete-Dt5fcbEj.js";import"./startOfDay-C4pDH4rb.js";const ye={title:"Foundation/Shared/Input fields/TermField",component:m,tags:["autodocs"],argTypes:{...h(m),variant:{control:{type:"select"},options:["default","before-after"]}}},a={args:{startDate:"now - 1d",endDate:"now",variant:"default"},render:t=>({components:{FSTermField:m},setup(){return{args:t}},template:`
      <FSTermField
        v-bind="args"
        v-model:startDate="args.startDate"
        v-model:endDate="args.endDate"
      />
    `})},p={args:{startDate:"now - 1d",endDate:"now",variant:"default"},render:t=>({components:{FSCol:C,FSText:w,FSDivider:Z,FSTermField:m,FSTextField:R,FSAutocompleteTimeZone:U},setup(){const e=A({...t}),{setAppTimeZone:x,timeZone:E}=V(),{convert:s}=L(),{epochToLongTimeFormat:d}=y(),i=b({variable:"now - 2d"}),l=r(()=>s(e.startDate,i.value)),c=r(()=>s(e.endDate,i.value)),g=r(()=>d(l.value)),f=r(()=>d(c.value));return{timeZone:E,variables:i,localArgs:e,convertedEndDate:f,convertedEndEpoch:c,convertedStartDate:g,convertedStartEpoch:l,updateEndDate:o=>{var n;e.endDate=o,(n=t["onUpdate:endDate"])==null||n.call(t,o)},setAppTimeZone:x,updateStartDate:o=>{var n;e.startDate=o,(n=t["onUpdate:startDate"])==null||n.call(t,o)}}},template:`
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
              Evaluation de la date de début et de fin avec useDateExpression:
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
      } = useDateExpression();
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
              Evaluation de la date de début et de fin avec useDateExpression:
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
}`,...(T=(v=p.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const Oe=["Default","UseDateExpression"];export{a as Default,p as UseDateExpression,Oe as __namedExportsOrder,ye as default};
