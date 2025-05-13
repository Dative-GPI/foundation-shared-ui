import{r as A,b,c as r}from"./vue.esm-bundler-CM4TIH-Q.js";import{a as h}from"./properties-DwZ_iDct.js";import{F as C}from"./FSCol-Be93XvPD.js";import{F as w}from"./FSText-C032WjuG.js";import{F as Z}from"./FSDivider-CI8bGHV5.js";import{F as m}from"./FSTermField-C4yhtXaW.js";import{F as R}from"./FSTextField-DAhSqlNI.js";import{F as U}from"./FSAutocompleteTimeZone-C_U30pte.js";import{u as V}from"./useAppTimeZone-CP1Ic-gf.js";import{u as L}from"./useDateExpression-ByhEGtnK.js";import{u as y}from"./useDateFormat-hcE1Scoo.js";import"./css-D38lF7BW.js";import"./useBreakpoints-DsICqL2A.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./useSlots-c6yg-hhg.js";import"./FSRow-C47sfGk6.js";import"./lodash-BrWYvtk2.js";import"./FSSelectField-BY8R2J8_.js";import"./VList-DEzGjKAB.js";import"./FSCard-CYsPoqay.js";import"./VDialog-CgsoTmCe.js";import"./VOverlay-DtEUynQC.js";import"./forwardRefs-DWGaNmQL.js";import"./color-Bo6l13w9.js";import"./proxiedModel-DKx29MO-.js";import"./anchor-DCFmATqq.js";import"./dimensions-DW-k5kP_.js";import"./display-CUGteI3_.js";import"./scopeId-COl1Iexy.js";import"./locale-BqFH1fBg.js";import"./router-BXF-7Xxx.js";import"./transition-DMoMR0kB.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./index-BJH4L2FX.js";import"./VIcon-GfKFLOEw.js";import"./ssrBoot-BDHgcVA9.js";import"./border-CvDIZQGy.js";import"./density-Dl4v3sM7.js";import"./elevation-DgpWsjTu.js";import"./rounded-CDCr0BOq.js";import"./index-BkfcJ8bv.js";import"./VImg-D7XF-hIS.js";import"./index-DWgrY6Dg.js";import"./FSSlideGroup-DeB5Ds_m.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BMwpXNyX.js";import"./FSButton-CnIlx-fc.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-a8XmDSU8.js";import"./VProgressCircular-C-4f-PXJ.js";import"./resizeObserver-Cb3oz2nO.js";import"./FSSpan-BXQyelfo.js";import"./FSIcon-CIF0zaTI.js";import"./VSlideGroupItem-41bDxGuE.js";import"./group-3MU8bQUc.js";import"./FSToggleSet-CwbYA91K.js";import"./FSWrapGroup-Fe7qxaBI.js";import"./VInput-DXPqvHKO.js";import"./FSBaseField-B4z0jav7.js";import"./FSCheckbox-cl9Reorp.js";import"./useRules-B12Yr5ve.js";import"./VSelectionControl-MVg9W9ha.js";import"./VLabel-Ca5QW7tf.js";import"./FSFadeOut-PZiJk41N.js";import"./FSLoader-_1jWS2ee.js";import"./FSRadio-Cpv_pdl7.js";import"./VSelect-D2RjpGxv.js";import"./VMenu-sKuqJ8jm.js";import"./dates-CU5b-tXh.js";import"./useTranslations-CLqRehXT.js";import"./FSDateTimeRangeField-O7AjTwDx.js";import"./FSDialogSubmit-CasSXhZ5.js";import"./FSDialog-CtrH8fi0.js";import"./FSCalendarTwin-BtHAEWbh.js";import"./useAppLanguageCode-CN6bsmo6.js";import"./VLocaleProvider-JJ3Zr1Af.js";import"./VBtn-DqO4-7PD.js";import"./loader-CQB_6PPx.js";import"./FSClock-h7Fdf4ly.js";import"./FSSlider-D1TKHvyI.js";import"./VSlider-HZEqctk3.js";import"./FSNumberField-B8whYfg7.js";import"./FSForm-LfcAIV6X.js";import"./rules-DnnTrRzM.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-s3B59H5y.js";import"./VField-D97ztcGG.js";import"./FSAutocompleteField-BlU48-Qq.js";import"./FSSearchField-dSfUt31U.js";import"./filter-DHa7wap7.js";import"./FSChip-DNTt-MXE.js";import"./base-CmdGny12.js";import"./composableFactory-B6T2dm2_.js";import"./serviceFactory-B3o6Bvwt.js";import"./useAutocomplete-C46pWvzP.js";import"./startOfDay-C4pDH4rb.js";const Ue={title:"Foundation/Shared/Input fields/TermField",component:m,tags:["autodocs"],argTypes:{...h(m),variant:{control:{type:"select"},options:["default","before-after"]}}},a={args:{startDate:"now - 1d",endDate:"now",variant:"default"},render:t=>({components:{FSTermField:m},setup(){return{args:t}},template:`
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
}`,...(T=(v=p.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const Ve=["Default","UseDateExpression"];export{a as Default,p as UseDateExpression,Ve as __namedExportsOrder,Ue as default};
