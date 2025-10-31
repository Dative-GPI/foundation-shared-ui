import{F as i}from"./FSAutocompleteTimeZone-BtCDcGdt.js";import{F as l}from"./FSCol-DVEaUPKl.js";import"./vue.esm-bundler-CC_jVOJ5.js";import"./FSAutocompleteField-ChGdda7D.js";import"./FSSearchField-X1df83qn.js";import"./FSTextField-CTUDqfDL.js";import"./FSBaseField-Bo38Hl_f.js";import"./FSSpan-DkNsO5wd.js";import"./useBreakpoints-BMcJFLA8.js";import"./useSlots-C8jkAuOW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CjY3icuR.js";import"./css-DTGEi_Ca.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./FSButton-Czf3beC8.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSClickable-DFmwvck2.js";import"./FSCard-twwkVLSp.js";import"./VProgressCircular-B7HKciov.js";import"./color-BM2dSUAO.js";import"./resizeObserver-BZ0AJw4z.js";import"./VIcon-BOLLMMm0.js";import"./FSIcon-CeLDRxMK.js";import"./useRules-Da0JLBaA.js";import"./VField-CnDxsm3U.js";import"./index-Dylhq_Dl.js";import"./transition-Ucf2Ovas.js";import"./VLabel-kKpu5iXd.js";import"./VInput-0C1kQySn.js";import"./locale-K9DBMW2q.js";import"./density-mssFUWH2.js";import"./dimensions-TKp8HHzB.js";import"./proxiedModel-Nw0LX-ta.js";import"./loader-CbVzlK-r.js";import"./anchor-S0Fc85Gi.js";import"./rounded-Cy4gG01O.js";import"./VDefaultsProvider-CuIagDb9.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B48vLg-P.js";import"./useTranslations-5XSl7qXA.js";import"./FSDialogMenu-CWcRHPoR.js";import"./VDialog-fWvZSkPk.js";import"./VOverlay-DXMNyzvF.js";import"./display-CpM-3U3n.js";import"./lazy-BrZUVd24.js";import"./router-kuDvkEMM.js";import"./scopeId-BJNiFHH-.js";import"./FSSlideGroup-nu8Cr66q.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CsckSPrB.js";import"./VSlideGroup-DVr5PPvN.js";import"./group-CxQl3dDS.js";import"./VSlideGroupItem-Bl-P3Ech.js";import"./FSToggleSet-CEKaVblF.js";import"./FSWrapGroup-Cr3q9yBs.js";import"./FSCheckbox-D-xuSzdC.js";import"./VCheckboxBtn-C85wpeer.js";import"./VSelectionControl-CvHa2RXZ.js";import"./index-DWDx8SXO.js";import"./FSFadeOut-DU3Ke7qi.js";import"./FSLoader-0nGK1qhA.js";import"./elevation-CjJG1XnK.js";import"./FSRadio-QZhD_0uB.js";import"./VSelect-rJC_8mRT.js";import"./VList-C5ZFMMa0.js";import"./ssrBoot-CyKRGZ4o.js";import"./border-BnR_N-bS.js";import"./VImg-BmPSKt86.js";import"./VMenu-DWktgpYO.js";import"./filter-DunZ8aFg.js";import"./FSChip-DtJe-ffy.js";import"./base-CmdGny12.js";import"./composableFactory-7f7_oyFS.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./useAutocomplete-BT_5GYCQ.js";const qt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(m,{argTypes:p})=>({components:{FSAutocompleteTimeZone:i,FSCol:l},props:Object.keys(p),setup(){return{...m}},template:`
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
    </FSCol>`})};var o,e,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const zt=["Variations"];export{t as Variations,zt as __namedExportsOrder,qt as default};
