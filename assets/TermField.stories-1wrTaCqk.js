import{r as A,b,c as r}from"./vue.esm-bundler-PONd4AmC.js";import{a as h}from"./properties-Qw-O9fbT.js";import{F as C}from"./FSCol-Bfhiyt6Y.js";import{F as w}from"./FSText-EpsxHg8Z.js";import{F as Z}from"./FSDivider-Bb3704DE.js";import{F as m}from"./FSTermField-CpoWSr1l.js";import{F as R}from"./FSTextField-Du9Dg0zN.js";import{F as U}from"./FSAutocompleteTimeZone-D5Vat14l.js";import{u as V}from"./useAppTimeZone-BXRoybOo.js";import{u as L}from"./useDateExpression-Dghvwhpf.js";import{u as y}from"./useDateFormat-BhCCrheZ.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-WMY9wD-z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DW7AHeJn.js";import"./useSlots-nyIcwo6G.js";import"./FSRow-C-b-hpWa.js";import"./lodash-Zo30T2Bj.js";import"./FSSelectField-DwgBs-gj.js";import"./FSDialogMenu-Crze0iUo.js";import"./FSCard-B7av1ouT.js";import"./VDialog-CkmtLqSZ.js";import"./VOverlay-C4y2redN.js";import"./forwardRefs-DWGaNmQL.js";import"./color-CQ7P2KsY.js";import"./proxiedModel-BMHfYIia.js";import"./anchor-rLQXsCC5.js";import"./dimensions-D04OQyPe.js";import"./display-D1WOGNJY.js";import"./lazy-PL0gnfDR.js";import"./locale-CoLhg8Wl.js";import"./router-DS8hXbpn.js";import"./scopeId-DFcjERLl.js";import"./transition-BpYTYsmy.js";import"./VDefaultsProvider--dbql3OT.js";import"./FSSlideGroup-G-1eJ8xl.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BfAvcYY6.js";import"./FSButton-C_cDbGvj.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-BpeLEfG7.js";import"./VProgressCircular-D57tYVQX.js";import"./resizeObserver-BAwzmH4Y.js";import"./VIcon-shEmQARK.js";import"./FSSpan-DxKJLsSl.js";import"./FSIcon-wf_hiRKr.js";import"./VSlideGroupItem-B4B7QRhR.js";import"./group-QLjCrFp5.js";import"./index-COu1mqSp.js";import"./FSToggleSet-BSMIUsc9.js";import"./FSWrapGroup-Dayjp45z.js";import"./VInput-CX-j4Zl6.js";import"./density-DM1TPnyn.js";import"./FSBaseField-C48d8q8m.js";import"./FSCheckbox-B1Q6_lSw.js";import"./useRules-CT5DWk6c.js";import"./VCheckboxBtn-CYnHxMSC.js";import"./VSelectionControl-BAKsAS1a.js";import"./index-aCfcr9Gd.js";import"./VLabel-B2dMuALu.js";import"./FSFadeOut-Dik6Imqk.js";import"./FSLoader-B0jwcdOS.js";import"./elevation-D2k7D5K3.js";import"./FSRadio-CdtLWkJD.js";import"./VSelect-CyCOXYrT.js";import"./VList-BCmGq4kQ.js";import"./ssrBoot-DufuUSU7.js";import"./border-BL_XAYaf.js";import"./rounded-Cwlpymxx.js";import"./VImg-AonvEV9k.js";import"./index-CzkqP9_q.js";import"./VMenu-DAcX0VlQ.js";import"./dates-CU5b-tXh.js";import"./useTranslations-_Q1DYra_.js";import"./FSDateTimeRangeField-jFIk8D5d.js";import"./FSDialogSubmit-cn64sMNf.js";import"./FSDialog-Bbg7NKIH.js";import"./FSCalendarTwin-2XSRFss0.js";import"./useAppLanguageCode-fPbUdbod.js";import"./VLocaleProvider-DuC_hjm3.js";import"./VBtn-Bcg5Dpfx.js";import"./loader-zqGHJTJd.js";import"./FSClock-BEHv37gt.js";import"./FSSlider-BhaeFDb4.js";import"./VSlider-Bmuy3_wt.js";import"./VSliderTrack-BIpfvBIE.js";import"./FSNumberField-DcU9MMue.js";import"./FSForm-FEtkMzcr.js";import"./rules-DRXW83Bb.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-Cavyfpwa.js";import"./VField-D3hGYPrZ.js";import"./FSAutocompleteField-DJcNVJsm.js";import"./FSSearchField-ChPOPxqV.js";import"./filter-D4n0RRF9.js";import"./FSChip-CS2j_Mvh.js";import"./base-CmdGny12.js";import"./composableFactory-B2U31qfW.js";import"./serviceFactory-aQiBqOvf.js";import"./useAutocomplete-DsvrErHM.js";import"./startOfDay-C4pDH4rb.js";const Oe={title:"Foundation/Shared/Input fields/TermField",component:m,tags:["autodocs"],argTypes:{...h(m),variant:{control:{type:"select"},options:["default","before-after"]}}},a={args:{startDate:"now - 1d",endDate:"now",variant:"default"},render:t=>({components:{FSTermField:m},setup(){return{args:t}},template:`
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
}`,...(T=(v=p.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const ze=["Default","UseDateExpression"];export{a as Default,p as UseDateExpression,ze as __namedExportsOrder,Oe as default};
