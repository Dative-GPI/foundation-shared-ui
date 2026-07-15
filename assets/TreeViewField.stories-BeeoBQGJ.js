import{F as o}from"./FSTreeViewField-_uBIUb8I.js";import{F as u}from"./FSForm-BbHYl82d.js";import{F as g}from"./FSIcon-BcHBVf_o.js";import{F as p}from"./FSCol-KRtq6OYO.js";import{F as v}from"./FSRow-Dg2RhQyl.js";import{c as F}from"./rules-CGa_6Wse.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSDialogMenu-BzRN-uoP.js";import"./FSCard-DxY0aXhp.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./VProgressCircular-Cjpa4WUk.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./VDialog-CmTscL9b.js";import"./VOverlay-BuHPOPgF.js";import"./proxiedModel-VL_RP4zk.js";import"./easing-DY7PVvcf.js";import"./anchor-Se7MGGLO.js";import"./dimensions-CS_qJJhy.js";import"./display-QVN4B5Qw.js";import"./lazy-sPNxwuRm.js";import"./locale-DER8LJer.js";import"./router-D36qODsG.js";import"./scopeId-DEhVAmth.js";import"./transition-a5pzBS6c.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-B9S_00bc.js";import"./VDefaultsProvider-Blv54jCg.js";import"./FSTextField-Cq4gI6mX.js";import"./FSBaseField-Bph8nCfp.js";import"./FSSpan-B28b2m0n.js";import"./useSlots-DEXetpJf.js";import"./FSButton-BqreeKOn.js";import"./FSText-DIbyStIN.js";import"./useRules-eFcMZq7y.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./index-ByfGjSW7.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./density-CE2FkSgs.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./rounded-CS1_z6Jk.js";import"./index-B4rZgXN-.js";import"./FSCheckbox-D4XH1I7L.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./index-B-eFr4Nw.js";import"./FSTreeView-afuY5HNG.js";import"./FSLoader-BoDinVVO.js";import"./elevation-DQ_qKX67.js";import"./VList-BhDySjdU.js";import"./ssrBoot-BimrXMWA.js";import"./border-D8z1QLxT.js";import"./variant-DNfp8Yqp.js";import"./VImg-BdZHkGCX.js";import"./VDivider-B9VczfM4.js";import"./VBtn-Ct4hkl6N.js";import"./group-BLkYT3DE.js";import"./position-O95c9fuD.js";import"./filter-C4s97JnQ.js";import"./FSFadeOut-W61q8jFE.js";import"./uuid-DTaye2KM.js";import"./FSRadio-Dd1EMADi.js";import"./FSMenu-DcCsQXC4.js";import"./VMenu-BCj9c0xY.js";import"./time-D8YoZjka.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./times-CqUFey1a.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-BKFE7Nxu.js";import"./useAppLanguageCode-CFDnQcKu.js";import"./useAppTimeZone-CjwINmn2.js";import"./startOfDay-C4pDH4rb.js";const Ze={title:"Shared/Components/Input fields/TreeViewField",component:o,tags:["autodocs"],argTypes:{}},e={args:{args:{items:[{id:0,label:"Group 1",icon:"mdi-account"},{id:1,label:"Group 2"},{id:2,label:"Group 3"},{id:3,label:"Group 4",parentId:0},{id:4,label:"Group 5",parentId:0},{id:5,label:"Group 6",parentId:3}],value1:null,value2:["0","1","2"],value3:"2",value4:"2"}},render:(i,{argTypes:t})=>({components:{FSTreeViewField:o,FSCol:p,FSIcon:g},props:Object.keys(t),setup(){return{...i}},template:`
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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,m,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const $e=["Variations","Rules"];export{r as Rules,e as Variations,$e as __namedExportsOrder,Ze as default};
