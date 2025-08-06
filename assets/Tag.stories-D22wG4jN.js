import{F as t}from"./FSText-Nj40J67v.js";import{F as l}from"./FSIcon-BGuuL0jz.js";import{_ as s}from"./FSSpan-CKhKq6E1.js";import{F as n}from"./FSTag-BmhfWI4N.js";import"./vue.esm-bundler-CocPPKUI.js";import"./useColors-C1aD-Kb6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1Gcptw7.js";import"./useBreakpoints-DZlz3-56.js";import"./useSlots-D4bv69lA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-mt76hoAn.js";import"./VIcon-ZjKwFcqe.js";import"./color-D50-hVV_.js";import"./FSRow-BvJ7lU5E.js";import"./VBtn-CT_Tyh1g.js";import"./border-ZP5ArpGv.js";import"./density-2KuMGYl6.js";import"./elevation-DUhGVECn.js";import"./rounded-CBYChxif.js";import"./group-MFxThiWx.js";import"./proxiedModel-DW1FRKBO.js";import"./dimensions-Cv9Fwl7U.js";import"./loader-BDqRCawj.js";import"./VProgressCircular-k_tOz5gX.js";import"./resizeObserver-DDOqpSMx.js";import"./locale-_fONYh-8.js";import"./anchor-D4EnoweD.js";import"./router-CKzlklLc.js";import"./index-BwBNp3ym.js";import"./VDefaultsProvider-CV4ffwSK.js";const B={title:"Foundation/Shared/Tag",component:n,tags:["autodocs"],argTypes:{}},a={render:()=>({components:{FSTag:n,FSText:t,FSSpan:s,FSIcon:l},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots (default & button) </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSTag color="primary">
          <FSSpan> Primary, full, removable </FSSpan>
        </FSTag>
        <FSTag color="success" variant="standard" :showRemove="false">
          <FSSpan> Success, standard, unremovable </FSSpan>
        </FSTag>
        <FSTag color="warning">
          <FSSpan> Warning, full, removable </FSSpan>
          <template #button>
            <FSIcon style="cursor: pointer;"> mdi-emoticon-cool-outline </FSIcon>
          </template>
        </FSTag>
        <FSTag color="error" variant="standard" :showRemove="false">
          <FSSpan> Error, standard, unremovable </FSSpan>
        </FSTag>
        <FSTag color="light" :showRemove="false">
          <FSSpan> Light, full, unremovable </FSSpan>
        </FSTag>
        <FSTag color="dark" variant="standard">
          <FSSpan> Dark, standard, removable </FSSpan>
        </FSTag>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSTag color="primary" variant="standard" :showRemove="false" label="Primary, standard, unremovable" />
        <FSTag color="success" label="Success, full, removable"     />
        <FSTag color="warning" variant="standard" :showRemove="false" label="Warning, standard, unremovable" />
        <FSTag color="error" label="Error, full, removable"       />
        <FSTag color="light" variant="standard" label="Light, standard, removable" />
        <FSTag color="dark" :showRemove="false" label="Dark, standard, unremovable" />
      </div>
    </div>`})};var r,o,e;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSTag,
      FSText,
      FSSpan,
      FSIcon
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots (default & button) </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSTag color="primary">
          <FSSpan> Primary, full, removable </FSSpan>
        </FSTag>
        <FSTag color="success" variant="standard" :showRemove="false">
          <FSSpan> Success, standard, unremovable </FSSpan>
        </FSTag>
        <FSTag color="warning">
          <FSSpan> Warning, full, removable </FSSpan>
          <template #button>
            <FSIcon style="cursor: pointer;"> mdi-emoticon-cool-outline </FSIcon>
          </template>
        </FSTag>
        <FSTag color="error" variant="standard" :showRemove="false">
          <FSSpan> Error, standard, unremovable </FSSpan>
        </FSTag>
        <FSTag color="light" :showRemove="false">
          <FSSpan> Light, full, unremovable </FSSpan>
        </FSTag>
        <FSTag color="dark" variant="standard">
          <FSSpan> Dark, standard, removable </FSSpan>
        </FSTag>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSTag color="primary" variant="standard" :showRemove="false" label="Primary, standard, unremovable" />
        <FSTag color="success" label="Success, full, removable"     />
        <FSTag color="warning" variant="standard" :showRemove="false" label="Warning, standard, unremovable" />
        <FSTag color="error" label="Error, full, removable"       />
        <FSTag color="light" variant="standard" label="Light, standard, removable" />
        <FSTag color="dark" :showRemove="false" label="Dark, standard, unremovable" />
      </div>
    </div>\`
  })
}`,...(e=(o=a.parameters)==null?void 0:o.docs)==null?void 0:e.source}}};const C=["Variations"];export{a as Variations,C as __namedExportsOrder,B as default};
