import{a as H,b as J}from"./properties-Qw-O9fbT.js";import{F as e,a as W,b as L}from"./FSRichTextField-B4EoZynh.js";import{F as M}from"./FSCol-ChYB2Oag.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSAutocompleteField-DW0bzsVk.js";import"./FSSearchField-ChOHSOKQ.js";import"./FSTextField-B_pu4u9u.js";import"./FSBaseField-DjPNexk7.js";import"./FSSpan-CffnRYnX.js";import"./useBreakpoints-Trboya0O.js";import"./useSlots-DEXetpJf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BTBqaZ3Z.js";import"./css-BA19cdxW.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./FSButton-B09KKB4j.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DkgFU9ZB.js";import"./FSIcon-D-iWmbKS.js";import"./VIcon-BPCLtKbp.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./icons-AciKn6XY.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./FSCard-X6BL7IDn.js";import"./VProgressCircular-D014ccrC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./useRules-eFcMZq7y.js";import"./VTextField-C-VZod1v.js";import"./VField-C_JZJuDz.js";import"./index-C0WTB2TM.js";import"./transition-Dqm8buww.js";import"./VLabel-DOSQu5RP.js";import"./VInput-CBXzUquC.js";import"./locale-MGWjZjXD.js";import"./proxiedModel-4bJ1saXA.js";import"./density-HajNgXBf.js";import"./dimensions-BuDdBtmf.js";import"./loader-DOKDD2NA.js";import"./VProgressLinear-DA0V-MGc.js";import"./anchor-C-rl7L3L.js";import"./rounded-BE8u9DAQ.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Cane1ZR3.js";import"./forwardRefs-C-GTDzx5.js";import"./index-D_7bL_IH.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./FSDialogMenu-DFLdv4ZH.js";import"./VDialog-D_wwtbpx.js";import"./VOverlay-flKIXg07.js";import"./display-RdUuPsY9.js";import"./lazy-D5C5Y6_6.js";import"./router-D2Xcou1T.js";import"./scopeId-CVBASNvj.js";import"./dialog-transition-Y-HqWA1J.js";import"./FSSlideGroup-BKuLzJy_.js";import"./FSButtonNextIcon-B18MCpjl.js";import"./VSlideGroup-DLaaL0Lk.js";import"./goto-D2YfjHNt.js";import"./group-g6KFhHmW.js";import"./VSlideGroupItem-BNzWd0Zb.js";import"./FSToggleSet-BxDbx0CL.js";import"./FSWrapGroup-CZDPgZeJ.js";import"./FSCheckbox-BEgzMGmB.js";import"./VCheckboxBtn-BT3SzIyH.js";import"./VSelectionControl-TRNlUp1F.js";import"./index-CDgYZebE.js";import"./FSFadeOut-DWR8A1ny.js";import"./FSLoader-DRppy7ch.js";import"./elevation-DyTGrbk9.js";import"./FSRadio-BJhcq_TI.js";import"./VSelect-CfYUtP1Q.js";import"./VList-Bkkbsc6W.js";import"./ssrBoot-BimrXMWA.js";import"./border-D-0PuVU0.js";import"./variant-De5GYaDP.js";import"./VImg-CF0d7Fd2.js";import"./VDivider-sEPw-6oz.js";import"./VMenu-DfiSs3vJ.js";import"./filter-CEUeuq74.js";import"./FSMenu-BQ9x-9Vx.js";import"./FSTextArea-Bax-O4jF.js";import"./FSMarkdown-Bee6sF61.js";const xt={title:"Shared/Components/Input fields/RichTextField",component:e,tags:["autodocs"],argTypes:{...J([W,L,M],e),...H(e)}},T=[{code:"name",defaultValue:"DefaultName",label:"Name"},{code:"age",defaultValue:"18",label:"Age"},{code:"country",defaultValue:"World",label:"Country"},{code:"city",defaultValue:"Capital",label:"City"}],E=s=>({components:{FSRichTextField:e,FSCol:M},setup(){return{args:s}},template:`
    <FSCol
      gap="24px"
    >
      <FSRichTextField
        v-model="args.modelValue"
        v-bind="args"
      />
      <FSRichTextField
        v-bind="args"
        variant="readonly"
      />
    </FSCol>
  `}),t=s=>({components:{FSRichTextField:e},setup(){return{args:s}},template:`
    <FSRichTextField
      v-model="args.modelValue"
      v-bind="args"
    />
  `}),r={render:E,args:{label:"Rich text",modelValue:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello I am ","type":"text","version":1},{"type":"variable","version":1,"code":"name","defaultValue":"defaultName"}],"direction":"ltr","format":"","indent":0,"type":"heading","version":1,"tag":"h1"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"I come from ","type":"text","version":1},{"type":"variable","version":1,"code":"country","defaultValue":"World"},{"detail":0,"format":0,"mode":"normal","style":"","text":" and I am ","type":"text","version":1},{"type":"variable","version":1,"code":"age","defaultValue":"defaultAge"},{"detail":0,"format":0,"mode":"normal","style":"","text":".","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1},{"children":[],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',variableReferences:T,variableValues:{name:"John",age:"25"}}},o={render:E,args:{label:"Markdown",format:"markdown",modelValue:`# Hello I am {{name}}

I come from **{{country}}** and I am {{age}}.

- Click [here](https://www.dative-gpi.com/) to visit a _marvelous_ website
- Raw HTML such as <script>alert(1)<\/script> is escaped`,variableReferences:T,variableValues:{name:"John",age:"25"}}},a={render:t,args:{label:"Rich text, 2 rows",rows:2,modelValue:null}},i={render:t,args:{label:"Disabled rich text, with description",description:"Description",disabled:!0,modelValue:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'}},n={render:t,args:{variant:"readonly",modelValue:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'}},l={render:t,args:{variant:"readonly",modelValue:`# Hello I am {{name}}

Click [here](https://www.dative-gpi.com/) to visit a **marvelous** website`,variableValues:{name:"John"}}},m={render:t,args:{variant:"readonly",emptyLabel:"Empty label",modelValue:null}};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: renderWithResult,
  args: {
    label: "Rich text",
    modelValue: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Hello I am \\",\\"type\\":\\"text\\",\\"version\\":1},{\\"type\\":\\"variable\\",\\"version\\":1,\\"code\\":\\"name\\",\\"defaultValue\\":\\"defaultName\\"}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"heading\\",\\"version\\":1,\\"tag\\":\\"h1\\"},{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"I come from \\",\\"type\\":\\"text\\",\\"version\\":1},{\\"type\\":\\"variable\\",\\"version\\":1,\\"code\\":\\"country\\",\\"defaultValue\\":\\"World\\"},{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\" and I am \\",\\"type\\":\\"text\\",\\"version\\":1},{\\"type\\":\\"variable\\",\\"version\\":1,\\"code\\":\\"age\\",\\"defaultValue\\":\\"defaultAge\\"},{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\".\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1},{\\"children\\":[],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}",
    variableReferences,
    variableValues: {
      name: "John",
      age: "25"
    }
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,v,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: renderWithResult,
  args: {
    label: "Markdown",
    format: "markdown",
    modelValue: "# Hello I am {{name}}\\n\\nI come from **{{country}}** and I am {{age}}.\\n\\n- Click [here](https://www.dative-gpi.com/) to visit a _marvelous_ website\\n- Raw HTML such as <script>alert(1)<\/script> is escaped",
    variableReferences,
    variableValues: {
      name: "John",
      age: "25"
    }
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,h,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render,
  args: {
    label: "Rich text, 2 rows",
    rows: 2,
    modelValue: null
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,x,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render,
  args: {
    label: "Disabled rich text, with description",
    description: "Description",
    disabled: true,
    modelValue: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Click \\",\\"type\\":\\"text\\",\\"version\\":1},{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"here\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"link\\",\\"version\\":1,\\"rel\\":\\"noreferrer\\",\\"target\\":\\"_blank\\",\\"title\\":\\"\\",\\"url\\":\\"https://www.dative-gpi.com/\\"},{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\" to visit a marvelous website\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}"
  }
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var V,k,R;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render,
  args: {
    variant: "readonly",
    modelValue: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Click \\",\\"type\\":\\"text\\",\\"version\\":1},{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"here\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"link\\",\\"version\\":1,\\"rel\\":\\"noreferrer\\",\\"target\\":\\"_blank\\",\\"title\\":\\"\\",\\"url\\":\\"https://www.dative-gpi.com/\\"},{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\" to visit a marvelous website\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}"
  }
}`,...(R=(k=n.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var F,S,C;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render,
  args: {
    variant: "readonly",
    modelValue: "# Hello I am {{name}}\\n\\nClick [here](https://www.dative-gpi.com/) to visit a **marvelous** website",
    variableValues: {
      name: "John"
    }
  }
}`,...(C=(S=l.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var I,_,D;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render,
  args: {
    variant: "readonly",
    emptyLabel: "Empty label",
    modelValue: null
  }
}`,...(D=(_=m.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const wt=["Default","Markdown","Empty","Disabled","Readonly","ReadonlyMarkdown","ReadonlyEmpty"];export{r as Default,i as Disabled,a as Empty,o as Markdown,n as Readonly,m as ReadonlyEmpty,l as ReadonlyMarkdown,wt as __namedExportsOrder,xt as default};
