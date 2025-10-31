import{F as a}from"./FSTagField-D6nBo6g7.js";import{F as g}from"./FSForm-CSz_UbV2.js";import{F as p}from"./FSCol-DVEaUPKl.js";import{_ as u}from"./FSRow-CjY3icuR.js";import{T as v}from"./rules-BUSk3wMq.js";import"./vue.esm-bundler-CC_jVOJ5.js";import"./FSTextField-CTUDqfDL.js";import"./FSBaseField-Bo38Hl_f.js";import"./FSSpan-DkNsO5wd.js";import"./useBreakpoints-BMcJFLA8.js";import"./useSlots-C8jkAuOW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./FSButton-Czf3beC8.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSClickable-DFmwvck2.js";import"./FSCard-twwkVLSp.js";import"./css-DTGEi_Ca.js";import"./VProgressCircular-B7HKciov.js";import"./color-BM2dSUAO.js";import"./resizeObserver-BZ0AJw4z.js";import"./VIcon-BOLLMMm0.js";import"./FSIcon-CeLDRxMK.js";import"./useRules-Da0JLBaA.js";import"./VField-CnDxsm3U.js";import"./index-Dylhq_Dl.js";import"./transition-Ucf2Ovas.js";import"./VLabel-kKpu5iXd.js";import"./VInput-0C1kQySn.js";import"./locale-K9DBMW2q.js";import"./density-mssFUWH2.js";import"./dimensions-TKp8HHzB.js";import"./proxiedModel-Nw0LX-ta.js";import"./loader-CbVzlK-r.js";import"./anchor-S0Fc85Gi.js";import"./rounded-Cy4gG01O.js";import"./VDefaultsProvider-CuIagDb9.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B48vLg-P.js";import"./FSTagGroup-CayVmUOs.js";import"./FSSlideGroup-nu8Cr66q.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CsckSPrB.js";import"./VSlideGroup-DVr5PPvN.js";import"./display-CpM-3U3n.js";import"./group-CxQl3dDS.js";import"./VSlideGroupItem-Bl-P3Ech.js";import"./FSWrapGroup-Cr3q9yBs.js";import"./FSTag-CYHkH_HL.js";import"./VBtn-BXSaXTUb.js";import"./border-BnR_N-bS.js";import"./elevation-CjJG1XnK.js";import"./router-kuDvkEMM.js";import"./index-DWDx8SXO.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-CEDjUrWj.js";import"./times-CqUFey1a.js";import"./useTranslations-5XSl7qXA.js";import"./useDateFormat-DHrriBQY.js";import"./useAppTimeZone-Bddnv5KM.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-DwRThLpm.js";const Or={title:"Foundation/Shared/Input fields/TagField",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:["full","tag","variant"],value2:["standard","tag","variant"],value3:[],value4:["thou","shalt","not","edit"]}},render:(t,{argTypes:o})=>({components:{FSTagField:a,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSTagField
        label="Tag, full, light color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Tag, standard, light color"
        tagVariant="standard"
        maxWidth="200px"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Required tag, full, warning color, with description"
        description="Description for this field"
        tagColor="warning"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Disabled tag, full, error color, width description"
        description="description"
        tagColor="error"
        :disabled="true"
        v-model="args.value4"
      />
    </FSCol>`})},e={args:{args:{valid:!1,value1:[],value2:["a","b","c"],value3:[],rules:v}},render:(t,{argTypes:o})=>({components:{FSForm:g,FSTagField:a,FSCol:p,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: required & min 2 tags"
          :rules="[args.rules.required(), args.rules.min(2)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: max 5 tags"
          :rules="[args.rules.max(5)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: required & max 10 tags & min 5 tags"
          :rules="[args.rules.required(), args.rules.min(5), args.rules.max(10)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var i,l,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      value1: ["full", "tag", "variant"],
      value2: ["standard", "tag", "variant"],
      value3: [],
      value4: ["thou", "shalt", "not", "edit"]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTagField,
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
      <FSTagField
        label="Tag, full, light color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Tag, standard, light color"
        tagVariant="standard"
        maxWidth="200px"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Required tag, full, warning color, with description"
        description="Description for this field"
        tagColor="warning"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Disabled tag, full, error color, width description"
        description="description"
        tagColor="error"
        :disabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var d,s,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: [],
      value2: ["a", "b", "c"],
      value3: [],
      rules: TagRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTagField,
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
        <FSTagField
          label="Rules: required & min 2 tags"
          :rules="[args.rules.required(), args.rules.min(2)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: max 5 tags"
          :rules="[args.rules.max(5)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTagField
          label="Rules: required & max 10 tags & min 5 tags"
          :rules="[args.rules.required(), args.rules.min(5), args.rules.max(10)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const _r=["Variations","Rules"];export{e as Rules,r as Variations,_r as __namedExportsOrder,Or as default};
