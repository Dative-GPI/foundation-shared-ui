import{F as a}from"./FSTagField-Bd6M1W8F.js";import{F as p}from"./FSForm-LfcAIV6X.js";import{F as g}from"./FSCol-Be93XvPD.js";import{_ as u}from"./FSRow-C47sfGk6.js";import{T as v}from"./rules-DnnTrRzM.js";import"./vue.esm-bundler-CM4TIH-Q.js";import"./FSTextField-D1GTNUtI.js";import"./FSBaseField-B4z0jav7.js";import"./FSSpan-BXQyelfo.js";import"./useBreakpoints-DsICqL2A.js";import"./useSlots-c6yg-hhg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./FSButton-OpnenzvL.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-DsGMo-Qs.js";import"./FSCard-ByrGPHX6.js";import"./css-D38lF7BW.js";import"./VProgressCircular-C-4f-PXJ.js";import"./color-Bo6l13w9.js";import"./resizeObserver-Cb3oz2nO.js";import"./VIcon-GfKFLOEw.js";import"./FSIcon-B4J40lse.js";import"./useRules-B12Yr5ve.js";import"./VField-D97ztcGG.js";import"./index-BJH4L2FX.js";import"./transition-DMoMR0kB.js";import"./VLabel-Ca5QW7tf.js";import"./VInput-DXPqvHKO.js";import"./locale-BqFH1fBg.js";import"./density-Dl4v3sM7.js";import"./dimensions-DW-k5kP_.js";import"./proxiedModel-DKx29MO-.js";import"./loader-CQB_6PPx.js";import"./anchor-DCFmATqq.js";import"./rounded-CDCr0BOq.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DWgrY6Dg.js";import"./FSTagGroup-B3pa7p_r.js";import"./FSWrapGroup-Fe7qxaBI.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-41bDxGuE.js";import"./group-3MU8bQUc.js";import"./display-CUGteI3_.js";import"./FSTag-BC28rCef.js";import"./VBtn-DqO4-7PD.js";import"./border-CvDIZQGy.js";import"./elevation-DgpWsjTu.js";import"./router-BXF-7Xxx.js";import"./index-BkfcJ8bv.js";import"./FSSlideGroup-BA1MtzDE.js";import"./FSButtonNextIcon-COmxHR4E.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-s3B59H5y.js";import"./useTranslations-CLqRehXT.js";import"./useDateFormat-hcE1Scoo.js";import"./useAppTimeZone-CP1Ic-gf.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CN6bsmo6.js";const qr={title:"Foundation/Shared/Input fields/TagField",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:["full","tag","variant"],value2:["standard","tag","variant"],value3:[],value4:["thou","shalt","not","edit"]}},render:(t,{argTypes:o})=>({components:{FSTagField:a,FSCol:g},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSTagField
        label="Tag, full, light color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTagField
        label="Tag, standard, light color"
        tagVariant="standard"
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
    </FSCol>`})},e={args:{args:{valid:!1,value1:[],value2:["a","b","c"],value3:[],rules:v}},render:(t,{argTypes:o})=>({components:{FSForm:p,FSTagField:a,FSCol:g,FSRow:u},props:Object.keys(o),setup(){return{...t}},template:`
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
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var s,d,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Cr=["Variations","Rules"];export{e as Rules,r as Variations,Cr as __namedExportsOrder,qr as default};
