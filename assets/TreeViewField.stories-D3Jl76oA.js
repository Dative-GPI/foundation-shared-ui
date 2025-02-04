import{F as o}from"./FSTreeViewField-BkYPD59K.js";import{F as u}from"./FSForm-C3WOsd9u.js";import{F as g}from"./FSIcon-Dq2bxLH5.js";import{F as p}from"./FSCol-CPY6S-Xd.js";import{_ as v}from"./FSRow-GjwhmX1p.js";import{c as b}from"./rules-DXGz8S5V.js";import"./vue.esm-bundler-NAfsqApI.js";import"./VList-Cf1cUG92.js";import"./FSCard-DOESxZy8.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./css-DBDqGZ-V.js";import"./useBreakpoints-BwxwzcAl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VDialog-uWe1mq7l.js";import"./VOverlay-CNRAdbgq.js";import"./forwardRefs-DWGaNmQL.js";import"./color-BvydW9AS.js";import"./proxiedModel-sn-eI_a5.js";import"./anchor-DvtYZGyi.js";import"./dimensions-IFPI4Yq9.js";import"./display-Bn-MFLq6.js";import"./scopeId-CbPxXtFO.js";import"./locale-CAPEya44.js";import"./router-0GC4RTMW.js";import"./transition-L7INWkz2.js";import"./VDefaultsProvider-BngNLuXK.js";import"./index-Dne_26Gx.js";import"./VIcon-PiNvAqE-.js";import"./ssrBoot-BkO-TPgF.js";import"./border-C5v47RY4.js";import"./density-BGeA8UH8.js";import"./elevation-B-XsQHpK.js";import"./rounded-DwVJT96z.js";import"./index-o6vlk9JB.js";import"./VImg-D7CqP58l.js";import"./index-DINlpRuJ.js";import"./FSTextField-Dzov9hcU.js";import"./FSBaseField-CjhswGig.js";import"./FSSpan-CLtVPKpS.js";import"./useSlots-S0O9Daut.js";import"./FSButton-CnXo3fLV.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSClickable-Dvaj3J5M.js";import"./VProgressCircular-B6p7zTwg.js";import"./resizeObserver-CLnVcpcq.js";import"./useRules-pqUeO9kt.js";import"./VField-KOKiCRZA.js";import"./VLabel-BDFzMscP.js";import"./VInput-B5HH3Lye.js";import"./form-DTsyvZhj.js";import"./loader-DsBOwpms.js";import"./FSCheckbox-CZADXYvb.js";import"./VSelectionControl-CV2pv1R-.js";import"./FSFadeOut-D3iDD7Hj.js";import"./uuid-DTaye2KM.js";import"./FSLoader-C8dZP0ML.js";import"./FSRadio-Bz6eMy_b.js";import"./VBtn-DqFLTMVy.js";import"./group-Dl43T2CL.js";import"./filter-DH9_huac.js";import"./VMenu-D8AvjW2T.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-Bbs-Eu8-.js";import"./useTranslations-CxiknF7e.js";import"./useDateFormat-Ci8JB6DS.js";import"./useAppLanguageCode-DW7Tteig.js";import"./useAppTimeZone-UiqNElH2.js";import"./startOfDay-C4pDH4rb.js";const Ue={title:"Foundation/Shared/Input fields/TreeViewField",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(i,{argTypes:t})=>({components:{FSTreeViewField:o,FSCol:p,FSIcon:g},props:Object.keys(t),setup(){return{...i}},template:`
    <FSCol>
      <FSTreeViewField
        label="Tree view"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewField
        label="Multiple tree view"
        :items="args.items"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewField
        label="Required tree view, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewField
        label="Uneditable tree view, with description"
        description="Uneditable description"
        :editable="false"
        :items="args.items"
        v-model="args.value4"
      />
    </FSCol>`})},r={args:{args:{valid:!1,items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:null,value3:null,rules:b}},render:(i,{argTypes:t})=>({components:{FSForm:u,FSTreeViewField:o,FSCol:p,FSRow:v},props:Object.keys(t),setup(){return{...i}},template:`
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTreeViewField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTreeViewField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTreeViewField
          label="Rules: required & min 2 options & max 3 options"
          :rules="[args.rules.required(), args.rules.min(2), args.rules.max(3)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var l,n,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        id: 0,
        label: "Group 1",
        icon: "mdi-account"
      }, {
        id: 1,
        label: "Group 2"
      }, {
        id: 2,
        label: "Group 3"
      }, {
        id: 3,
        label: "Group 4",
        parentId: 0
      }, {
        id: 4,
        label: "Group 5",
        parentId: 0
      }, {
        id: 5,
        label: "Group 6",
        parentId: 3
      }],
      value1: null,
      value2: ["0", "1", "2"],
      value3: "2",
      value4: "2"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTreeViewField,
      FSCol,
      FSIcon
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSTreeViewField
        label="Tree view"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewField
        label="Multiple tree view"
        :items="args.items"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewField
        label="Required tree view, with description"
        description="Description for this field"
        :required="true"
        :items="args.items"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewField
        label="Uneditable tree view, with description"
        description="Uneditable description"
        :editable="false"
        :items="args.items"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var s,d,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      items: [{
        id: 0,
        label: "Group 1",
        icon: "mdi-account"
      }, {
        id: 1,
        label: "Group 2"
      }, {
        id: 2,
        label: "Group 3"
      }, {
        id: 3,
        label: "Group 4",
        parentId: 0
      }, {
        id: 4,
        label: "Group 5",
        parentId: 0
      }, {
        id: 5,
        label: "Group 6",
        parentId: 3
      }],
      value1: null,
      value2: null,
      value3: null,
      rules: TreeViewRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTreeViewField,
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
        <FSTreeViewField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :items="args.items"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTreeViewField
          label="Rules: min 2 options"
          :rules="[args.rules.min(2)]"
          :items="args.items"
          :multiple="true"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTreeViewField
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const De=["Variations","Rules"];export{r as Rules,e as Variations,De as __namedExportsOrder,Ue as default};
