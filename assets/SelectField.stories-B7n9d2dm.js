import{F as l}from"./FSSelectField-D3jDhMc4.js";import{F as u}from"./FSForm-7qi1lT_s.js";import{F as p}from"./FSCol-C3EJfcJX.js";import{_ as g}from"./FSRow-cHWWqhhs.js";import{S as c}from"./rules-BzW1_6pp.js";import"./vue.esm-bundler-D_gXonxt.js";import"./FSDialogMenu-CYc22LXB.js";import"./FSCard-Cxfe3-O9.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./css-Bznx04uW.js";import"./useBreakpoints-BWz07CZT.js";import"./VProgressCircular-BomUTxjq.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./VDialog-BTFeiENf.js";import"./VOverlay-CrMgAm2W.js";import"./proxiedModel-Cl0bR0rs.js";import"./easing-DY7PVvcf.js";import"./anchor-DrPAsKKU.js";import"./dimensions-BYDjhYdL.js";import"./display-BIN9xr9Q.js";import"./lazy-aXB44k01.js";import"./locale-CEMLpecI.js";import"./router-hLwSEJDL.js";import"./scopeId-BwxBN6Au.js";import"./transition-CHyhkthg.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-d5ANZlFh.js";import"./VDefaultsProvider-DJfojugM.js";import"./FSSlideGroup-DWL-VMav.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CoBpV-yC.js";import"./FSButton-cpkpLA7w.js";import"./FSText-DL_5kFi7.js";import"./useSlots-CdBAzqCX.js";import"./FSIcon-B9MXbR5l.js";import"./VIcon-gCapjdof.js";import"./icons-DiQlgRdj.js";import"./FSSpan-ap0CpdXZ.js";import"./VSlideGroup-Bqij08hI.js";import"./index-aKIkx5xA.js";import"./goto-wDz_aHst.js";import"./group-BimGXDpZ.js";import"./VSlideGroupItem-DyiSjx9G.js";import"./FSToggleSet-C7biUZpu.js";import"./FSWrapGroup-D5YRUBcz.js";import"./VInput-By-nMj_W.js";import"./density-W7RG4BnT.js";import"./FSBaseField-CGwB2cs2.js";import"./FSTextField-CxQWhEox.js";import"./useRules-CohX4tE3.js";import"./VTextField-SMQo8Oxu.js";import"./VField-Cr90fIiu.js";import"./VLabel-BCYtLXrQ.js";import"./loader-DM6th8g9.js";import"./VProgressLinear-bxxDRxj8.js";import"./rounded-yhlSUX6x.js";import"./index-CpkyVf-S.js";import"./FSCheckbox-zoBL9ZjY.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./index-ByzLombQ.js";import"./FSFadeOut-z7-cnvK3.js";import"./FSLoader-CdctsmAF.js";import"./elevation-sxxySPKb.js";import"./FSRadio-Bk5L3sqZ.js";import"./VSelect-BdqVvZBK.js";import"./VList-D8CiLhgs.js";import"./ssrBoot-DpaZqI6q.js";import"./border-BTzDu4tj.js";import"./variant-ftZYcIF1.js";import"./VImg-ufpttNgj.js";import"./VDivider-CTy1lKut.js";import"./VMenu-KvKUKA1I.js";import"./time-B7nWt_FV.js";import"./useTranslations-D2TwtVAp.js";import"./times-CqUFey1a.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-BQ8h6gVb.js";import"./useAppLanguageCode-ulGHj8Yu.js";import"./useAppTimeZone-Cxxk5HO_.js";import"./startOfDay-C4pDH4rb.js";const Ze={title:"Foundation/Shared/Input fields/SelectField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:null,value3:["0","1","2"],value4:"2",value5:"2"}},render:(e,{argTypes:i})=>({components:{FSSelectField:l,FSCol:p},props:Object.keys(i),setup(){return{...e}},template:`
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
    </FSForm>`})};var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var n,a,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const et=["Variations","Rules"];export{r as Rules,t as Variations,et as __namedExportsOrder,Ze as default};
