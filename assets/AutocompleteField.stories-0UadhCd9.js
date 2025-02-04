import{F as i}from"./FSAutocompleteField-Dosoxp9w.js";import{F as u}from"./FSForm-C3WOsd9u.js";import{F as p}from"./FSCol-CPY6S-Xd.js";import{_ as g}from"./FSRow-GjwhmX1p.js";import{A as v}from"./rules-DXGz8S5V.js";import"./vue.esm-bundler-NAfsqApI.js";import"./FSSearchField-LHGjxxhV.js";import"./FSTextField-Dzov9hcU.js";import"./FSBaseField-CjhswGig.js";import"./FSSpan-CLtVPKpS.js";import"./useBreakpoints-BwxwzcAl.js";import"./useSlots-S0O9Daut.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./FSButton-CnXo3fLV.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSClickable-Dvaj3J5M.js";import"./FSCard-DOESxZy8.js";import"./css-DBDqGZ-V.js";import"./VProgressCircular-B6p7zTwg.js";import"./color-BvydW9AS.js";import"./resizeObserver-CLnVcpcq.js";import"./VIcon-PiNvAqE-.js";import"./FSIcon-Dq2bxLH5.js";import"./useRules-pqUeO9kt.js";import"./VField-KOKiCRZA.js";import"./index-Dne_26Gx.js";import"./transition-L7INWkz2.js";import"./VLabel-BDFzMscP.js";import"./VInput-B5HH3Lye.js";import"./locale-CAPEya44.js";import"./density-BGeA8UH8.js";import"./dimensions-IFPI4Yq9.js";import"./proxiedModel-sn-eI_a5.js";import"./form-DTsyvZhj.js";import"./loader-DsBOwpms.js";import"./anchor-DvtYZGyi.js";import"./rounded-DwVJT96z.js";import"./VDefaultsProvider-BngNLuXK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DINlpRuJ.js";import"./useTranslations-CxiknF7e.js";import"./VList-Cf1cUG92.js";import"./VDialog-uWe1mq7l.js";import"./VOverlay-CNRAdbgq.js";import"./display-Bn-MFLq6.js";import"./scopeId-CbPxXtFO.js";import"./router-0GC4RTMW.js";import"./ssrBoot-BkO-TPgF.js";import"./border-C5v47RY4.js";import"./elevation-B-XsQHpK.js";import"./index-o6vlk9JB.js";import"./VImg-D7CqP58l.js";import"./FSSlideGroup-Cl7IgSOt.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwecMMW5.js";import"./VSlideGroupItem-BvOdViLK.js";import"./group-Dl43T2CL.js";import"./FSToggleSet-CBrw8ECP.js";import"./FSWrapGroup-C3Z0hZ7U.js";import"./FSCheckbox-CZADXYvb.js";import"./VSelectionControl-CV2pv1R-.js";import"./FSFadeOut-D3iDD7Hj.js";import"./FSLoader-C8dZP0ML.js";import"./FSRadio-Bz6eMy_b.js";import"./VSelect-aoHOo6gx.js";import"./VMenu-D8AvjW2T.js";import"./filter-DH9_huac.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-Bbs-Eu8-.js";import"./useDateFormat-Ci8JB6DS.js";import"./useAppLanguageCode-DW7Tteig.js";import"./useAppTimeZone-UiqNElH2.js";import"./startOfDay-C4pDH4rb.js";const c=["Alpha","Beta","Charly","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"],Ie={title:"Foundation/Shared/Input fields/AutocompleteField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{items:Array.from(Array(30).keys()).map(e=>({id:e.toString(),label:`Option ${e+1}`})),value1:null,value2:null,value3:["0","1","2"],value4:"2",value5:"2",value6:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteField:i,FSCol:p},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteField
        label="Autocomplete"
        :items="args.items"
        v-model="args.value1"
      />
      <FSAutocompleteField
        label="Autocomplete with suffix"
        suffix="Hello there"
        :items="args.items"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Uneditable select, with description"
        description="Uneditable description"
        :editable="false"
        :items="args.items"
        v-model="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="With toggle set enabled"
        :items="args.items"
        :toggleSet="true"
        v-model="args.value6"
      />
    </FSCol>`})},r={args:{args:{valid:!1,items:Array.from(Array(5).keys()).map(e=>({id:e.toString(),label:`Option ${c[e]}`})),value1:null,value2:null,value3:null,value4:null,rules:v}},render:(e,{argTypes:o})=>({components:{FSForm:u,FSAutocompleteField:i,FSCol:p,FSRow:g},props:Object.keys(o),setup(){return{...e}},template:`
    <FSForm v-model="args.valid"
      variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
          Form validity: {{ args.valid ?? "false" }}
          </div>
          </FSRow>
          <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
          <FSAutocompleteField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :toggleSet="true"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value4"
        />
      </FSCol>
    </FSForm>`})};var l,s,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      items: Array.from(Array(30).keys()).map(i => ({
        id: i.toString(),
        label: \`Option \${i + 1}\`
      })),
      value1: null,
      value2: null,
      value3: ["0", "1", "2"],
      value4: "2",
      value5: "2",
      value6: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteField,
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
      <FSAutocompleteField
        label="Autocomplete"
        :items="args.items"
        v-model="args.value1"
      />
      <FSAutocompleteField
        label="Autocomplete with suffix"
        suffix="Hello there"
        :items="args.items"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Multiple select"
        :items="args.items"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Required select, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="Uneditable select, with description"
        description="Uneditable description"
        :editable="false"
        :items="args.items"
        v-model="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteField
        label="With toggle set enabled"
        :items="args.items"
        :toggleSet="true"
        v-model="args.value6"
      />
    </FSCol>\`
  })
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var n,a,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      items: Array.from(Array(5).keys()).map(i => ({
        id: i.toString(),
        label: \`Option \${international[i]}\`
      })),
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      rules: AutocompleteRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSAutocompleteField,
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
    <FSForm v-model="args.valid"
      variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
          Form validity: {{ args.valid ?? "false" }}
          </div>
          </FSRow>
          <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
          <FSAutocompleteField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :toggleSet="true"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value4"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const Be=["Variations","Rules"];export{r as Rules,t as Variations,Be as __namedExportsOrder,Ie as default};
