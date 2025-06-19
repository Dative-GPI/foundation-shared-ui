import{r as A,b,c as r}from"./vue.esm-bundler-BB--BfRN.js";import{a as h}from"./properties-Qw-O9fbT.js";import{F as C}from"./FSCol-BU2zndN-.js";import{F as w}from"./FSText-RaLR8FTM.js";import{F as Z}from"./FSDivider-BZaGiy0h.js";import{F as m}from"./FSTermField-g-NFrZ-l.js";import{F as R}from"./FSTextField-DmCfYujO.js";import{F as U}from"./FSAutocompleteTimeZone-CnhezblH.js";import{u as V}from"./useAppTimeZone-Yy6tN57G.js";import{u as L}from"./useDateExpression-BnqG0Oit.js";import{u as y}from"./useDateFormat-CLF81prI.js";import"./css-DoweNwVf.js";import"./useBreakpoints-f5uwzDhq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CeWNZtds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BwQCEo_4.js";import"./useSlots-COLyvmal.js";import"./FSRow-Bdc52rY8.js";import"./lodash-Zo30T2Bj.js";import"./FSSelectField-DqwGnLNL.js";import"./VList-CAfJ4PqY.js";import"./FSCard-CiGLNn7K.js";import"./VDialog-bMbnstsA.js";import"./VOverlay-B758aeer.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DIvEt_AX.js";import"./proxiedModel-DMSSa4ZW.js";import"./anchor-C8ooBn8e.js";import"./dimensions-DwY9cRwZ.js";import"./display-DzHu_6W3.js";import"./scopeId-NiaFRIZK.js";import"./locale-CSWC84Vq.js";import"./router-WJHyAZQ9.js";import"./transition-GJJG9yri.js";import"./VDefaultsProvider-BK3j_XEC.js";import"./index-9ysw5oGg.js";import"./VIcon-Cl87HT90.js";import"./ssrBoot-DNxkCF-9.js";import"./border-TZTDiA6n.js";import"./density-Xpr_P7nk.js";import"./elevation-S_BtbnzN.js";import"./rounded-BKWlZxOJ.js";import"./index-8zgUIpZ9.js";import"./VImg-DcLzuYY5.js";import"./index--Ye8kcMr.js";import"./FSSlideGroup-DLHspItq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwHgwEym.js";import"./FSButton-DEqhqb0b.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./FSClickable-CwRD7A4m.js";import"./VProgressCircular-DNr7n8jG.js";import"./resizeObserver-CgHguIgR.js";import"./FSSpan-BndtI8AP.js";import"./FSIcon-BKav6CVU.js";import"./VSlideGroupItem-BI1OJQNm.js";import"./group-C8GVwDAJ.js";import"./FSToggleSet-D12Sjar_.js";import"./FSWrapGroup-TGBfJRdY.js";import"./VInput-BfMi-lTR.js";import"./FSBaseField-BxMUaAXJ.js";import"./FSCheckbox-ti2pWVdy.js";import"./useRules-CSYFw_Ue.js";import"./VSelectionControl-KO2lf4xS.js";import"./VLabel-Cmax-_yp.js";import"./FSFadeOut-BS7VKwj1.js";import"./FSLoader-Cf5HtYZd.js";import"./FSRadio-C1kBTUbb.js";import"./VSelect-fihYAFHR.js";import"./VMenu-DdabqpBj.js";import"./dates-CU5b-tXh.js";import"./useTranslations-DvAhn7XV.js";import"./FSDateTimeRangeField-B-c9YT0a.js";import"./FSDialogSubmit-DCuIz0OX.js";import"./FSDialog-CsOSQzi_.js";import"./FSCalendarTwin-Dk9yTQam.js";import"./useAppLanguageCode-DVn301Ra.js";import"./VLocaleProvider-jaJMEg04.js";import"./VBtn-CpUNAmWP.js";import"./loader-BKsf8Js6.js";import"./FSClock-smdRdCOC.js";import"./FSSlider-D48CyF2S.js";import"./VSlider-Bn75Yh_W.js";import"./VSliderTrack-D17LvGqE.js";import"./FSNumberField-CCJJ15Eq.js";import"./FSForm-Ci9drIy4.js";import"./rules-BTu8BudJ.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-DawHGwfT.js";import"./VField-COyetWuv.js";import"./FSAutocompleteField-D0xJEWg5.js";import"./FSSearchField-CJDKUSod.js";import"./filter-Cz8pNtBH.js";import"./FSChip-fXKFC3cO.js";import"./base-CmdGny12.js";import"./composableFactory-DwIj5O2m.js";import"./serviceFactory-aQiBqOvf.js";import"./useAutocomplete-Cwzj1BuR.js";import"./startOfDay-C4pDH4rb.js";const Ve={title:"Foundation/Shared/Input fields/TermField",component:m,tags:["autodocs"],argTypes:{...h(m),variant:{control:{type:"select"},options:["default","before-after"]}}},a={args:{startDate:"now - 1d",endDate:"now",variant:"default"},render:t=>({components:{FSTermField:m},setup(){return{args:t}},template:`
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
}`,...(T=(v=p.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const Le=["Default","UseDateExpression"];export{a as Default,p as UseDateExpression,Le as __namedExportsOrder,Ve as default};
