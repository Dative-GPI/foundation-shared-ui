import{F as o}from"./FSTreeViewField-e8ipHHyk.js";import{F as u}from"./FSForm-Ci9drIy4.js";import{F as g}from"./FSIcon-BKav6CVU.js";import{F as p}from"./FSCol-BU2zndN-.js";import{_ as v}from"./FSRow-Bdc52rY8.js";import{c as F}from"./rules-BTu8BudJ.js";import"./vue.esm-bundler-BB--BfRN.js";import"./VList-CAfJ4PqY.js";import"./FSCard-CiGLNn7K.js";import"./useColors-CeWNZtds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BwQCEo_4.js";import"./css-DoweNwVf.js";import"./useBreakpoints-f5uwzDhq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VDialog-bMbnstsA.js";import"./VOverlay-B758aeer.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DIvEt_AX.js";import"./proxiedModel-DMSSa4ZW.js";import"./anchor-C8ooBn8e.js";import"./dimensions-DwY9cRwZ.js";import"./display-DzHu_6W3.js";import"./scopeId-NiaFRIZK.js";import"./locale-CSWC84Vq.js";import"./router-WJHyAZQ9.js";import"./transition-GJJG9yri.js";import"./VDefaultsProvider-BK3j_XEC.js";import"./index-9ysw5oGg.js";import"./VIcon-Cl87HT90.js";import"./ssrBoot-DNxkCF-9.js";import"./border-TZTDiA6n.js";import"./density-Xpr_P7nk.js";import"./elevation-S_BtbnzN.js";import"./rounded-BKWlZxOJ.js";import"./index-8zgUIpZ9.js";import"./VImg-DcLzuYY5.js";import"./index--Ye8kcMr.js";import"./FSTextField-DmCfYujO.js";import"./FSBaseField-BxMUaAXJ.js";import"./FSSpan-BndtI8AP.js";import"./useSlots-COLyvmal.js";import"./FSButton-DEqhqb0b.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./FSClickable-CwRD7A4m.js";import"./VProgressCircular-DNr7n8jG.js";import"./resizeObserver-CgHguIgR.js";import"./useRules-CSYFw_Ue.js";import"./VField-COyetWuv.js";import"./VLabel-Cmax-_yp.js";import"./VInput-BfMi-lTR.js";import"./loader-BKsf8Js6.js";import"./FSCheckbox-ti2pWVdy.js";import"./VSelectionControl-KO2lf4xS.js";import"./FSFadeOut-BS7VKwj1.js";import"./uuid-DTaye2KM.js";import"./FSLoader-Cf5HtYZd.js";import"./FSRadio-C1kBTUbb.js";import"./FSMenu-BwDA4EdU.js";import"./VMenu-DdabqpBj.js";import"./VBtn-CpUNAmWP.js";import"./group-C8GVwDAJ.js";import"./filter-Cz8pNtBH.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-DawHGwfT.js";import"./useTranslations-DvAhn7XV.js";import"./useDateFormat-CLF81prI.js";import"./useAppTimeZone-Yy6tN57G.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-DVn301Ra.js";const De={title:"Foundation/Shared/Input fields/TreeViewField",component:o,tags:["autodocs"],argTypes:{}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(i,{argTypes:t})=>({components:{FSTreeViewField:o,FSCol:p,FSIcon:g},props:Object.keys(t),setup(){return{...i}},template:`
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Me=["Variations","Rules"];export{r as Rules,e as Variations,Me as __namedExportsOrder,De as default};
