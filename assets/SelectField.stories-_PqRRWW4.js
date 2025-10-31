import{F as l}from"./FSSelectField-C7he6bYM.js";import{F as u}from"./FSForm-CSz_UbV2.js";import{F as p}from"./FSCol-DVEaUPKl.js";import{_ as g}from"./FSRow-CjY3icuR.js";import{S as c}from"./rules-BUSk3wMq.js";import"./vue.esm-bundler-CC_jVOJ5.js";import"./FSDialogMenu-CWcRHPoR.js";import"./FSCard-twwkVLSp.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./css-DTGEi_Ca.js";import"./useBreakpoints-BMcJFLA8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VDialog-fWvZSkPk.js";import"./VOverlay-DXMNyzvF.js";import"./easing-DY7PVvcf.js";import"./color-BM2dSUAO.js";import"./proxiedModel-Nw0LX-ta.js";import"./anchor-S0Fc85Gi.js";import"./dimensions-TKp8HHzB.js";import"./display-CpM-3U3n.js";import"./lazy-BrZUVd24.js";import"./locale-K9DBMW2q.js";import"./router-kuDvkEMM.js";import"./scopeId-BJNiFHH-.js";import"./transition-Ucf2Ovas.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-CuIagDb9.js";import"./FSSlideGroup-nu8Cr66q.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CsckSPrB.js";import"./FSButton-Czf3beC8.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSClickable-DFmwvck2.js";import"./VProgressCircular-B7HKciov.js";import"./resizeObserver-BZ0AJw4z.js";import"./VIcon-BOLLMMm0.js";import"./FSSpan-DkNsO5wd.js";import"./useSlots-C8jkAuOW.js";import"./FSIcon-CeLDRxMK.js";import"./VSlideGroup-DVr5PPvN.js";import"./index-Dylhq_Dl.js";import"./group-CxQl3dDS.js";import"./VSlideGroupItem-Bl-P3Ech.js";import"./FSToggleSet-CEKaVblF.js";import"./FSWrapGroup-Cr3q9yBs.js";import"./VInput-0C1kQySn.js";import"./density-mssFUWH2.js";import"./FSBaseField-Bo38Hl_f.js";import"./FSTextField-CTUDqfDL.js";import"./useRules-Da0JLBaA.js";import"./VField-CnDxsm3U.js";import"./VLabel-kKpu5iXd.js";import"./loader-CbVzlK-r.js";import"./rounded-Cy4gG01O.js";import"./index-B48vLg-P.js";import"./FSCheckbox-D-xuSzdC.js";import"./VCheckboxBtn-C85wpeer.js";import"./VSelectionControl-CvHa2RXZ.js";import"./index-DWDx8SXO.js";import"./FSFadeOut-DU3Ke7qi.js";import"./FSLoader-0nGK1qhA.js";import"./elevation-CjJG1XnK.js";import"./FSRadio-QZhD_0uB.js";import"./VSelect-rJC_8mRT.js";import"./VList-C5ZFMMa0.js";import"./ssrBoot-CyKRGZ4o.js";import"./border-BnR_N-bS.js";import"./VImg-BmPSKt86.js";import"./VMenu-DWktgpYO.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-CEDjUrWj.js";import"./times-CqUFey1a.js";import"./useTranslations-5XSl7qXA.js";import"./useDateFormat-DHrriBQY.js";import"./useAppTimeZone-Bddnv5KM.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-DwRThLpm.js";const Ge={title:"Foundation/Shared/Input fields/SelectField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:null,value3:["0","1","2"],value4:"2",value5:"2"}},render:(e,{argTypes:i})=>({components:{FSSelectField:l,FSCol:p},props:Object.keys(i),setup(){return{...e}},template:`
    <FSCol>
      <FSSelectField
        label="Select"
        :items="args.items"
        v-model="args.value1"
      />
      <FSSelectField
        label="Select with suffix"
        suffix="Hello there"
        :items="args.items"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        :maxWidth="200"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Disabled select, with description"
        description="description"
        :disabled="true"
        :items="args.items"
        v-model="args.value5"
      />
    </FSCol>`})},r={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:null,value3:null,rules:c}},render:(e,{argTypes:i})=>({components:{FSForm:u,FSSelectField:l,FSCol:p,FSRow:g},props:Object.keys(i),setup(){return{...e}},template:`
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var o,s,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    args: {
      items: Array.from(Array(5).keys()).map(i => ({
        id: i.toString(),
        label: \`Option \${i + 1}\`
      })),
      value1: null,
      value2: null,
      value3: ["0", "1", "2"],
      value4: "2",
      value5: "2"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSelectField,
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
      <FSSelectField
        label="Select"
        :items="args.items"
        v-model="args.value1"
      />
      <FSSelectField
        label="Select with suffix"
        suffix="Hello there"
        :items="args.items"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        :maxWidth="200"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Disabled select, with description"
        description="description"
        :disabled="true"
        :items="args.items"
        v-model="args.value5"
      />
    </FSCol>\`
  })
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var m,a,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      items: Array.from(Array(5).keys()).map(i => ({
        id: i.toString(),
        label: \`Option \${i + 1}\`
      })),
      value1: null,
      value2: null,
      value3: null,
      rules: SelectRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSSelectField,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSSelectField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const Je=["Variations","Rules"];export{r as Rules,t as Variations,Je as __namedExportsOrder,Ge as default};
