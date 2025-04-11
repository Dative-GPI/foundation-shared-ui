import{F as o}from"./FSTreeViewField-x1UoyY3w.js";import{F as u}from"./FSForm-uibijjXy.js";import{F as g}from"./FSIcon-Df5FR-8G.js";import{F as p}from"./FSCol-qfATdd_b.js";import{_ as v}from"./FSRow-DPcQMiM9.js";import{c as F}from"./rules-Bi0-Tpmi.js";import"./vue.esm-bundler-PTWG9x2X.js";import"./VList-DyUobt4O.js";import"./FSCard-DkDNRB06.js";import"./useColors-CHEA4ij4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./css-B90wD3BD.js";import"./useBreakpoints-W7XGW48y.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VDialog-DW8Lwwmu.js";import"./VOverlay-CoK8W0Lk.js";import"./forwardRefs-DWGaNmQL.js";import"./color-CCpgnDIk.js";import"./proxiedModel-CvHSoKPb.js";import"./anchor-BcF6JBj1.js";import"./dimensions-v18atrWI.js";import"./display-CESVul9-.js";import"./scopeId-CROTNdIb.js";import"./locale-Cz_4DTJh.js";import"./router-BQjY5_kj.js";import"./transition-QV8dDJB9.js";import"./VDefaultsProvider-aDgtYDKn.js";import"./index-b-ADC_Il.js";import"./VIcon-DIeegzqR.js";import"./ssrBoot-DfimFJGl.js";import"./border-CIYj3WlL.js";import"./density-CznkHGGy.js";import"./elevation-CrSwNJwg.js";import"./rounded-BbPXzFqc.js";import"./index-Dqqa47M6.js";import"./VImg-CBGPWIu-.js";import"./index-BNomsh5u.js";import"./FSTextField-Bd-6am9D.js";import"./FSBaseField-DcQpuQod.js";import"./FSSpan-yJEd2pn-.js";import"./useSlots-BG_ZhEqK.js";import"./FSButton-YqGArPy2.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./FSClickable-TnS9e2Ej.js";import"./VProgressCircular-eoxb555W.js";import"./resizeObserver-C17Kgm90.js";import"./useRules-D0leB7Wy.js";import"./VField-w4x2OZhg.js";import"./VLabel-BNJ33aDR.js";import"./VInput-C2FcZlE6.js";import"./loader-BqT2mYY7.js";import"./FSCheckbox-C5H351bN.js";import"./VSelectionControl-Fvr0iuTu.js";import"./FSFadeOut-CaVJLNvG.js";import"./uuid-DTaye2KM.js";import"./FSLoader-DjLBB-ae.js";import"./FSRadio-Co5Zk_Yw.js";import"./VBtn-oNOab7rO.js";import"./group-8tJUjatm.js";import"./filter-qsWrMVs0.js";import"./VMenu-BiZHvw8b.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-qmSz82Tz.js";import"./useTranslations-BnE68qER.js";import"./useDateFormat-BIFVETfU.js";import"./useAppTimeZone-DyFwBRoB.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-tS_QL_TH.js";const ke={title:"Foundation/Shared/Input fields/TreeViewField",component:o,tags:["autodocs"],argTypes:{}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(i,{argTypes:t})=>({components:{FSTreeViewField:o,FSCol:p,FSIcon:g},props:Object.keys(t),setup(){return{...i}},template:`
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
        label="Disabled tree view, with description"
        description="description"
        :disabled="true"
        :items="args.items"
        v-model="args.value4"
      />
    </FSCol>`})},r={args:{args:{valid:!1,items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:null,value3:null,rules:F}},render:(i,{argTypes:t})=>({components:{FSForm:u,FSTreeViewField:o,FSCol:p,FSRow:v},props:Object.keys(t),setup(){return{...i}},template:`
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
    </FSForm>`})};var l,n,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
        label="Disabled tree view, with description"
        description="description"
        :disabled="true"
        :items="args.items"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,d,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const De=["Variations","Rules"];export{r as Rules,e as Variations,De as __namedExportsOrder,ke as default};
