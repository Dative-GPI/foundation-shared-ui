import{r as A,b,c as r}from"./vue.esm-bundler-CC_jVOJ5.js";import{a as h}from"./properties-Qw-O9fbT.js";import{F as C}from"./FSCol-DVEaUPKl.js";import{F as w}from"./FSText-B2RNQvtL.js";import{F as Z}from"./FSDivider-BNinaqtk.js";import{F as m}from"./FSTermField-Dm8j_AaD.js";import{F as R}from"./FSTextField-CTUDqfDL.js";import{F as U}from"./FSAutocompleteTimeZone-NLESfjfx.js";import{u as V}from"./useAppTimeZone-Bddnv5KM.js";import{u as L}from"./useDateExpression-CWjnhewb.js";import{u as y}from"./useDateFormat-DHrriBQY.js";import"./css-DTGEi_Ca.js";import"./useBreakpoints-BMcJFLA8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./useSlots-C8jkAuOW.js";import"./FSRow-CjY3icuR.js";import"./lodash-Zo30T2Bj.js";import"./FSSelectField-CN0uswF4.js";import"./FSDialogMenu-CWcRHPoR.js";import"./FSCard-twwkVLSp.js";import"./VDialog-fWvZSkPk.js";import"./VOverlay-DXMNyzvF.js";import"./easing-DY7PVvcf.js";import"./color-BM2dSUAO.js";import"./proxiedModel-Nw0LX-ta.js";import"./anchor-S0Fc85Gi.js";import"./dimensions-TKp8HHzB.js";import"./display-CpM-3U3n.js";import"./lazy-BrZUVd24.js";import"./locale-K9DBMW2q.js";import"./router-kuDvkEMM.js";import"./scopeId-BJNiFHH-.js";import"./transition-Ucf2Ovas.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-CuIagDb9.js";import"./FSSlideGroup-nu8Cr66q.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CsckSPrB.js";import"./FSButton-Czf3beC8.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSClickable-DFmwvck2.js";import"./VProgressCircular-B7HKciov.js";import"./resizeObserver-BZ0AJw4z.js";import"./VIcon-BOLLMMm0.js";import"./FSSpan-DkNsO5wd.js";import"./FSIcon-CeLDRxMK.js";import"./VSlideGroup-DVr5PPvN.js";import"./index-Dylhq_Dl.js";import"./group-CxQl3dDS.js";import"./VSlideGroupItem-Bl-P3Ech.js";import"./FSToggleSet-CEKaVblF.js";import"./FSWrapGroup-Cr3q9yBs.js";import"./VInput-0C1kQySn.js";import"./density-mssFUWH2.js";import"./FSBaseField-Bo38Hl_f.js";import"./FSCheckbox-D-xuSzdC.js";import"./useRules-Da0JLBaA.js";import"./VCheckboxBtn-C85wpeer.js";import"./VSelectionControl-CvHa2RXZ.js";import"./index-DWDx8SXO.js";import"./VLabel-kKpu5iXd.js";import"./FSFadeOut-DU3Ke7qi.js";import"./FSLoader-0nGK1qhA.js";import"./elevation-CjJG1XnK.js";import"./FSRadio-QZhD_0uB.js";import"./VSelect-rJC_8mRT.js";import"./VList-C5ZFMMa0.js";import"./ssrBoot-CyKRGZ4o.js";import"./border-BnR_N-bS.js";import"./rounded-Cy4gG01O.js";import"./VImg-BmPSKt86.js";import"./index-B48vLg-P.js";import"./VMenu-DWktgpYO.js";import"./dates-CU5b-tXh.js";import"./useTranslations-5XSl7qXA.js";import"./FSDateTimeRangeField-B0HLaToO.js";import"./FSDialogSubmit-DLaEkr55.js";import"./FSDialog-CS4QDqZQ.js";import"./FSCalendarTwin-BNcSWnfZ.js";import"./useAppLanguageCode-DwRThLpm.js";import"./VLocaleProvider-Dw-Dn45Q.js";import"./VBtn-BXSaXTUb.js";import"./loader-CbVzlK-r.js";import"./FSClock-C3N8E7ei.js";import"./FSSlider-DtkoFt9l.js";import"./VSlider-CtHw7pV_.js";import"./VSliderTrack-CTwlVHTX.js";import"./FSNumberField-DJYvT1hq.js";import"./FSForm-CSz_UbV2.js";import"./rules-BUSk3wMq.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-CEDjUrWj.js";import"./times-CqUFey1a.js";import"./VField-CnDxsm3U.js";import"./FSAutocompleteField-ChGdda7D.js";import"./FSSearchField-X1df83qn.js";import"./filter-DunZ8aFg.js";import"./FSChip-DtJe-ffy.js";import"./base-CmdGny12.js";import"./composableFactory-7f7_oyFS.js";import"./serviceFactory-CakgBvEM.js";import"./useAutocomplete-BT_5GYCQ.js";import"./startOfDay-C4pDH4rb.js";const ke={title:"Foundation/Shared/Input fields/TermField",component:m,tags:["autodocs"],argTypes:{...h(m),variant:{control:{type:"select"},options:["default","before-after"]}}},a={args:{startDate:"now - 1d",endDate:"now",variant:"default"},render:t=>({components:{FSTermField:m},setup(){return{args:t}},template:`
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
}`,...(T=(v=p.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const Ie=["Default","UseDateExpression"];export{a as Default,p as UseDateExpression,Ie as __namedExportsOrder,ke as default};
