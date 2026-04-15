import{F as a}from"./FSTagField-ogszvUwI.js";import{F as g}from"./FSForm-7qi1lT_s.js";import{F as p}from"./FSCol-C3EJfcJX.js";import{_ as u}from"./FSRow-cHWWqhhs.js";import{T as v}from"./rules-BzW1_6pp.js";import"./vue.esm-bundler-D_gXonxt.js";import"./FSTextField-CxQWhEox.js";import"./FSBaseField-CGwB2cs2.js";import"./FSSpan-ap0CpdXZ.js";import"./useBreakpoints-BWz07CZT.js";import"./useSlots-CdBAzqCX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./FSButton-cpkpLA7w.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./FSText-DL_5kFi7.js";import"./FSIcon-B9MXbR5l.js";import"./css-Bznx04uW.js";import"./VIcon-gCapjdof.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSCard-Cxfe3-O9.js";import"./VProgressCircular-BomUTxjq.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./useRules-CohX4tE3.js";import"./VTextField-SMQo8Oxu.js";import"./VField-Cr90fIiu.js";import"./index-aKIkx5xA.js";import"./transition-CHyhkthg.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./locale-CEMLpecI.js";import"./proxiedModel-Cl0bR0rs.js";import"./density-W7RG4BnT.js";import"./dimensions-BYDjhYdL.js";import"./loader-DM6th8g9.js";import"./VProgressLinear-bxxDRxj8.js";import"./anchor-DrPAsKKU.js";import"./rounded-yhlSUX6x.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-DJfojugM.js";import"./forwardRefs-C-GTDzx5.js";import"./index-CpkyVf-S.js";import"./FSTagGroup-CaD4we-w.js";import"./FSSlideGroup-DWL-VMav.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CoBpV-yC.js";import"./VSlideGroup-Bqij08hI.js";import"./display-BIN9xr9Q.js";import"./goto-wDz_aHst.js";import"./group-BimGXDpZ.js";import"./VSlideGroupItem-DyiSjx9G.js";import"./FSWrapGroup-D5YRUBcz.js";import"./FSTag-BGZvKzbp.js";import"./VBtn-DgLqICzT.js";import"./border-BTzDu4tj.js";import"./elevation-sxxySPKb.js";import"./variant-ftZYcIF1.js";import"./position-mzu5LnMQ.js";import"./router-hLwSEJDL.js";import"./index-ByzLombQ.js";import"./time-B7nWt_FV.js";import"./useTranslations-D2TwtVAp.js";import"./times-CqUFey1a.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-BQ8h6gVb.js";import"./useAppLanguageCode-ulGHj8Yu.js";import"./useAppTimeZone-Cxxk5HO_.js";import"./startOfDay-C4pDH4rb.js";const Ar={title:"Foundation/Shared/Input fields/TagField",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:["full","tag","variant"],value2:["standard","tag","variant"],value3:[],value4:["thou","shalt","not","edit"]}},render:(t,{argTypes:o})=>({components:{FSTagField:a,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const Br=["Variations","Rules"];export{e as Rules,r as Variations,Br as __namedExportsOrder,Ar as default};
