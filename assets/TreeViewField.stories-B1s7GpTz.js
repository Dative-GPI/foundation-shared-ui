import{F as o}from"./FSTreeViewField-Dn2pPwYZ.js";import{F as u}from"./FSForm-D4JgF9dF.js";import{F as g}from"./FSIcon-BJsIM37h.js";import{F as p}from"./FSCol-D_lbFmZy.js";import{_ as v}from"./FSRow-DIk8KFbG.js";import{c as F}from"./rules-2-0C43Mt.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSDialogMenu-553iq_m_.js";import"./FSCard-BH6GLU3V.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./VProgressCircular-D6ZFUt0S.js";import"./color-BW36qAym.js";import"./useRender-BcOya-6A.js";import"./resizeObserver-Z3fjh7Cv.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./VDialog-B2OpqrDi.js";import"./VOverlay-DHaepw21.js";import"./easing-DY7PVvcf.js";import"./proxiedModel-BPspb6XO.js";import"./anchor-CPKk15qm.js";import"./dimensions-B7sNhH2O.js";import"./display-D8bdLPBN.js";import"./lazy-C77w73YC.js";import"./locale-DKpA43KM.js";import"./router-BDiSnJ53.js";import"./scopeId-DC5duiFx.js";import"./transition-DbItRNv8.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./FSTextField-Cclf6IX8.js";import"./FSBaseField-Buivlp1M.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./FSButton-CZRwWCRJ.js";import"./FSText-CJ7Lhzl1.js";import"./useRules-R3Ldkrx4.js";import"./VField-B1xdFTJF.js";import"./index-6jMyctoo.js";import"./VLabel-D-9L6eJP.js";import"./VInput-bTNISmSY.js";import"./VIcon-mGJe0MYK.js";import"./icons-DR_vovBH.js";import"./density-BnAGl-Nw.js";import"./loader-COXi3ZW_.js";import"./rounded-lfTNxM9v.js";import"./index-BKpPdzm5.js";import"./FSCheckbox-CpWOjTw-.js";import"./VCheckboxBtn-t5XcVMJr.js";import"./VSelectionControl-SdigZO9B.js";import"./index-BYo1BiTt.js";import"./FSTreeView-JZgx-W9a.js";import"./FSLoader-Cl8hDT8j.js";import"./elevation-JukLG-n6.js";import"./VList-DlQk11w2.js";import"./ssrBoot-C79LbZhX.js";import"./variant-j8rFA7nZ.js";import"./VImg-BlUyfKKc.js";import"./VDivider-Yc-HesXU.js";import"./VBtn--7NXzl5z.js";import"./group-BRhJCq_i.js";import"./filter-DlYw_aWm.js";import"./FSFadeOut-C918yX_r.js";import"./uuid-DTaye2KM.js";import"./FSRadio-BXAjRcH_.js";import"./FSMenu-Cl6jFqyD.js";import"./VMenu-en6JpVrG.js";import"./time-C045-Osl.js";import"./times-CqUFey1a.js";import"./useTranslations-CFCS6HA-.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-Be4eIA50.js";import"./useAppTimeZone-tx8M1w-h.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CWFK3Ooe.js";const Ne={title:"Foundation/Shared/Input fields/TreeViewField",component:o,tags:["autodocs"],argTypes:{}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(i,{argTypes:t})=>({components:{FSTreeViewField:o,FSCol:p,FSIcon:g},props:Object.keys(t),setup(){return{...i}},template:`
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Pe=["Variations","Rules"];export{r as Rules,e as Variations,Pe as __namedExportsOrder,Ne as default};
