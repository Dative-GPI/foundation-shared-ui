import{F as l}from"./FSSelectField-Q_toR6Uv.js";import{F as u}from"./FSForm-Bvdkm9sz.js";import{F as p}from"./FSCol-D_lbFmZy.js";import{_ as g}from"./FSRow-DIk8KFbG.js";import{S as c}from"./rules-2-0C43Mt.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSDialogMenu-B52P8q-X.js";import"./FSCard-DENSLTM_.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./VDialog-C5WNai-3.js";import"./VOverlay-BApTxsTF.js";import"./proxiedModel-Cv3qT1cZ.js";import"./easing-DY7PVvcf.js";import"./anchor-tlySGI4g.js";import"./dimensions-D_nx6Jbk.js";import"./display-DvHDH61C.js";import"./lazy-Bqido2cx.js";import"./locale-n4v42L7l.js";import"./router-R_WRJyUs.js";import"./scopeId-DI6aT8IG.js";import"./transition-gfLL8RoD.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-CBLjbvr6.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./FSSlideGroup-BnnHyPAm.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BxxPSm84.js";import"./FSButton-M9GMz66l.js";import"./FSText-015IEZHy.js";import"./useSlots-CoecqEnp.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";import"./FSSpan-BN7wkmby.js";import"./VSlideGroup-BJAU1y7G.js";import"./index-Bo6vw90T.js";import"./goto-nADK4Ssb.js";import"./group-Cx5pids1.js";import"./VSlideGroupItem-B1P3g7mq.js";import"./FSToggleSet-BO0lhIHf.js";import"./FSWrapGroup-ES-pUhBN.js";import"./VInput-CbNwc64i.js";import"./density-BTT1solu.js";import"./FSBaseField-C_kMSpMl.js";import"./FSTextField-DVC6JxU9.js";import"./useRules-R3Ldkrx4.js";import"./VField-BWZy72Xk.js";import"./VLabel-DPXmEVvJ.js";import"./loader-CAuY8UYG.js";import"./VProgressLinear-CI-Q4csR.js";import"./rounded-BSNeeq4o.js";import"./index-u79WnTSR.js";import"./FSCheckbox-DMg4fEo0.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./index-C2v-jVLO.js";import"./FSFadeOut-YXyyFCAB.js";import"./FSLoader-uhE9mCg0.js";import"./elevation-62d6MvS5.js";import"./FSRadio-CKU_VsjQ.js";import"./VSelect-Dn3JzDeK.js";import"./VList-C0qufsOv.js";import"./ssrBoot-C79LbZhX.js";import"./border-5JTJ2U38.js";import"./variant-CRuOwF35.js";import"./VImg-CFhtVVj8.js";import"./VDivider-IiSngj1L.js";import"./VMenu-DOme5rNf.js";import"./time-C045-Osl.js";import"./times-CqUFey1a.js";import"./useTranslations-CFCS6HA-.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-Be4eIA50.js";import"./useAppTimeZone-tx8M1w-h.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CWFK3Ooe.js";const Xe={title:"Foundation/Shared/Input fields/SelectField",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:null,value3:["0","1","2"],value4:"2",value5:"2"}},render:(e,{argTypes:i})=>({components:{FSSelectField:l,FSCol:p},props:Object.keys(i),setup(){return{...e}},template:`
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
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const Ye=["Variations","Rules"];export{r as Rules,t as Variations,Ye as __namedExportsOrder,Xe as default};
