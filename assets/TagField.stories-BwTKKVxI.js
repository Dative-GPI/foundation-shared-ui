import{F as a}from"./FSTagField-COxwOv-s.js";import{F as g}from"./FSForm-kBy3Krb7.js";import{F as p}from"./FSCol-B2uM4vFw.js";import{_ as u}from"./FSRow-C8VtPvPz.js";import{T as v}from"./rules-tbTkbybW.js";import"./vue.esm-bundler-DR0_aU9U.js";import"./FSTextField-tianF0jI.js";import"./FSBaseField-y2QkcP3h.js";import"./FSSpan-9E7WYB2n.js";import"./useBreakpoints-DhvOJkKp.js";import"./useSlots-p1mkRhuZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./FSButton-CX1uVweX.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./FSText-CUmuxASa.js";import"./FSIcon-CBwOL1p5.js";import"./css-B9c0ZZC5.js";import"./VIcon-e3y7Ok8e.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./icons-CT9uuJgl.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSCard--XyliQO3.js";import"./VProgressCircular-CZaehD4X.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./useRules-2yt7KWSA.js";import"./VTextField-Jo2lzvlt.js";import"./VField-BhclGBdp.js";import"./index-C-lZWyiZ.js";import"./transition-CedxoFs4.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./density-SLEyWIf6.js";import"./dimensions-DYTrXD1P.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./anchor-CT7OU_gq.js";import"./rounded-B6-M_5uG.js";import"./easing--CnlGZ0M.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BLyOCIqB.js";import"./FSTagGroup-DBklXDpo.js";import"./FSSlideGroup-DXfM7ZwC.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BPTvjWXT.js";import"./VSlideGroup-BjJJyiAP.js";import"./display-B8Tm0OQZ.js";import"./goto-nsb-OfwD.js";import"./group-CUiyutR_.js";import"./VSlideGroupItem-BDJ1UEY1.js";import"./FSWrapGroup-v391AceI.js";import"./FSTag-C7Sy_SC8.js";import"./VBtn-hLKUYNZP.js";import"./border-CatZixNo.js";import"./elevation-DVEOfLMu.js";import"./variant-BZg-bE5G.js";import"./position-Dh5mOHTG.js";import"./router-CJAgOfLI.js";import"./index-Dlqh_ozP.js";import"./time-DuowFvgO.js";import"./useTranslations-CDmrxgqt.js";import"./times-CqUFey1a.js";import"./datesTools-B-vlCrHb.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-DAnuesY2.js";import"./useAppLanguageCode-BoL-n_ZZ.js";import"./useAppTimeZone-fWyn93dw.js";import"./startOfDay-C4pDH4rb.js";const Ar={title:"Foundation/Shared/Input fields/TagField",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:["full","tag","variant"],value2:["standard","tag","variant"],value3:[],value4:["thou","shalt","not","edit"]}},render:(t,{argTypes:o})=>({components:{FSTagField:a,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
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
