import{F as l}from"./FSTextField-8af1deda.js";import{F as u}from"./FSForm-25bb07d2.js";import{_ as m}from"./FSCol-ff457bc3.js";import{_ as g}from"./FSRow-1d7c2545.js";import{a as c}from"./rules-fd87a465.js";import"./vue.esm-bundler-cd768bc3.js";import"./VField-d090f013.js";import"./FSSpan-da6dde8e.js";import"./useSlots-2af30a3d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./VSpacer-0c52efc7.js";import"./useRender-b3fd6f8b.js";import"./index-055d6469.js";import"./transition-2948fa2b.js";import"./VLabel-a834020c.js";import"./VInput-5fe9e616.js";import"./locale-d1b7e37d.js";import"./proxiedModel-80cf7d0e.js";import"./VIcon-3b9ab711.js";import"./color-4e667524.js";import"./tag-bc86e39f.js";import"./density-80e773e2.js";import"./dimensions-9d1d90d7.js";import"./loader-3bcfb6cd.js";import"./VProgressCircular-f6ca2848.js";import"./resizeObserver-054c2f9a.js";import"./anchor-9469ffd7.js";import"./rounded-c9c22222.js";import"./VDefaultsProvider-22eb0e57.js";import"./forwardRefs-e658ad70.js";import"./FSButton-ecc11eb7.js";import"./FSClickable-95c940f4.js";import"./FSCard-0de7b634.js";import"./css-c2ea3b68.js";import"./FSIcon-203715fb.js";import"./useRules-bb9e9594.js";import"./VTextField-d2eba149.js";import"./index-cc35ebf5.js";import"./useAppTimeZone-d6a8f46f.js";import"./useTranslations-3c37761e.js";const ae={title:"Foundation/Shared/Input fields/TextField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:"Hello there",value3:"General Kenobi"}},render:(t,{argTypes:o})=>({components:{FSTextField:l,FSCol:m},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSTextField
        label="Text"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        label="Required text, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        label="Uneditable text, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:c}},render:(t,{argTypes:o})=>({components:{FSForm:u,FSTextField:l,FSCol:m,FSRow:g},props:Object.keys(o),setup(){return{...t}},template:`
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextField
          label="Rules: required & min 10 characters & at least one special & at least one uppercase & at least one lowercase & at least one digit"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.special(), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Hello there",
      value3: "General Kenobi"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTextField,
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
      <FSTextField
        label="Text"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        label="Required text, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextField
        label="Uneditable text, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var n,d,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: "",
      value2: "",
      value3: "",
      rules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTextField,
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
        <FSTextField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextField
          label="Rules: required & min 10 characters & at least one special & at least one uppercase & at least one lowercase & at least one digit"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.special(), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const se=["Variations","Rules"];export{r as Rules,e as Variations,se as __namedExportsOrder,ae as default};