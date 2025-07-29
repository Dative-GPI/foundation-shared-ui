import{F as i}from"./FSAutocompleteTimeZone-CGfmGgMG.js";import{F as p}from"./FSCol-Bfhiyt6Y.js";import"./vue.esm-bundler-PONd4AmC.js";import"./FSAutocompleteField-BG1Iouz7.js";import"./FSSearchField-D3E8Wwt2.js";import"./FSTextField-D-U5ryYn.js";import"./FSBaseField-DMW1nZy-.js";import"./FSSpan-DxKJLsSl.js";import"./useBreakpoints-RTs-XAJF.js";import"./useSlots-nyIcwo6G.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-C-b-hpWa.js";import"./css-BeoQuAfr.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./FSButton-CZKySWW0.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-CyhgWkHC.js";import"./FSCard-DYD9Tm3w.js";import"./VProgressCircular-CDK6zSYw.js";import"./color-_AiH45em.js";import"./resizeObserver-UZYihl4g.js";import"./VIcon-DIMW80nW.js";import"./FSIcon-bsX1r_Ci.js";import"./useRules-CT5DWk6c.js";import"./VField-So_guaQm.js";import"./index-CANKuvlL.js";import"./transition-BXZIGKil.js";import"./VLabel-5AeJpfXJ.js";import"./VInput-ClaXJMCA.js";import"./locale-CoLhg8Wl.js";import"./density-CNNumQ_A.js";import"./dimensions-CNbPgA3L.js";import"./proxiedModel-vOB1Q9Gh.js";import"./loader-DGoLn0VY.js";import"./anchor-D2WyvgD_.js";import"./rounded-BBFi0CuG.js";import"./VDefaultsProvider-BsWh58B_.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bb4mSIJO.js";import"./useTranslations-_Q1DYra_.js";import"./FSDialogMenu-Czm1Jubp.js";import"./VDialog-CJNHz4BJ.js";import"./VOverlay-U8N3Tt4W.js";import"./display-BXzLC06Y.js";import"./scopeId-CWp-k_S_.js";import"./router-6tzIEQS-.js";import"./FSSlideGroup-CGqp6f7y.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Dkus99PH.js";import"./VSlideGroupItem-B5H5Uw6w.js";import"./group-CvGRLeFV.js";import"./FSToggleSet-CRtePpT3.js";import"./FSWrapGroup-CpwsD4SA.js";import"./FSCheckbox-CQphVYdu.js";import"./VCheckboxBtn-B-CDiKqR.js";import"./VSelectionControl-HwS3bHvU.js";import"./index-B8vPsAiL.js";import"./FSFadeOut-CtUd8oOA.js";import"./FSLoader-UOJfN8Qb.js";import"./elevation-CL0Py7Fp.js";import"./FSRadio-BKiTm18z.js";import"./VSelect-BUWJeJyh.js";import"./VList-B9UxDYwK.js";import"./ssrBoot-DufuUSU7.js";import"./border-z35mRDPS.js";import"./VImg-DKyIpwU2.js";import"./VMenu-D11N5TPJ.js";import"./filter-MyCPMQzE.js";import"./FSChip-CfNKsjD1.js";import"./base-CmdGny12.js";import"./composableFactory-B2U31qfW.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./useAutocomplete-Dt5fcbEj.js";const Vt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(m,{argTypes:l})=>({components:{FSAutocompleteTimeZone:i,FSCol:p},props:Object.keys(l),setup(){return{...m}},template:`
    <FSCol>
      <FSAutocompleteTimeZone
        label="TimeZone"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteTimeZone,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteTimeZone
        label="TimeZone"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const _t=["Variations"];export{t as Variations,_t as __namedExportsOrder,Vt as default};
