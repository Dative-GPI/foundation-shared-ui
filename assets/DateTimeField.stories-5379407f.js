import{F as i}from"./FSDateTimeField-b0100197.js";import{F as u}from"./FSForm-7d2059d4.js";import{_ as p}from"./FSCol-5ed907ac.js";import{_ as g}from"./FSRow-64caadb9.js";import{D as F}from"./rules-56abbd16.js";import"./vue.esm-bundler-6f923154.js";import"./FSDialogMenu-7aaa5a49.js";import"./FSCard-32925b42.js";import"./useColors-9144d90e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a8226b2e.js";import"./css-0cf2e273.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VDialog-42abd477.js";import"./VOverlay-c286b1ab.js";import"./forwardRefs-e658ad70.js";import"./useRender-1cb09274.js";import"./proxiedModel-c8904091.js";import"./anchor-52e92869.js";import"./color-a262cadc.js";import"./dimensions-dec12c77.js";import"./display-1e14778f.js";import"./lazy-43993a1b.js";import"./locale-577543b5.js";import"./router-ed3d0311.js";import"./scopeId-a438f35a.js";import"./transition-e76cd387.js";import"./VDefaultsProvider-a08a9a42.js";import"./FSTextField-add61627.js";import"./VField-d1f54092.js";import"./FSSpan-7bb94541.js";import"./useSlots-21493751.js";import"./VSpacer-54f0d5ce.js";import"./index-4caca680.js";import"./VLabel-737017e3.js";import"./VInput-125993fa.js";import"./VIcon-d1c19518.js";import"./tag-a7b67944.js";import"./density-03404b67.js";import"./loader-1a97481f.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./rounded-1f8e51a9.js";import"./FSButton-ff673895.js";import"./FSClickable-e71ee20f.js";import"./FSIcon-93774118.js";import"./useRules-8e3c4a4a.js";import"./index-114ba00f.js";import"./FSCalendar-8d3f2196.js";import"./useAppTimeZone-dc793336.js";import"./useTranslations-59cd146d.js";import"./VLocaleProvider-01c79f28.js";import"./date-99b258a4.js";import"./VBtn-b1e611a0.js";import"./border-f53cef89.js";import"./elevation-2c5be1c3.js";import"./group-91945d16.js";import"./index-55248dcb.js";import"./FSWindow-28c33761.js";import"./ssrBoot-082b8501.js";import"./FSClock-36b5b44d.js";import"./FSSlider-a3faf322.js";import"./VSlider-0b927851.js";import"./VMenu-31bd6e5f.js";const qe={title:"Foundation/Shared/Input fields/DateTimeField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{value1:null,value2:1701234e6,value3:1701234e6}},render:(t,{argTypes:o})=>({components:{FSDateTimeField:i,FSCol:p},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSDateTimeField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},r={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:F}},render:(t,{argTypes:o})=>({components:{FSForm:u,FSDateTimeField:i,FSCol:p,FSRow:g},props:Object.keys(o),setup(){return{...t}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var l,a,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: 1701234000000,
      value3: 1701234000000
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateTimeField,
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
      <FSDateTimeField
        label="Date & time, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Required date & time, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateTimeField
        label="Uneditable date & time, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,m,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: null,
      value2: null,
      value3: null,
      rules: DateRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSDateTimeField,
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
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateTimeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const xe=["Variations","Rules"];export{r as Rules,e as Variations,xe as __namedExportsOrder,qe as default};