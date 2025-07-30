import{F as t}from"./FSText-EpsxHg8Z.js";import{F as l}from"./FSIcon-wf_hiRKr.js";import{_ as s}from"./FSSpan-DxKJLsSl.js";import{F as n}from"./FSTag-D0nY84TF.js";import"./vue.esm-bundler-PONd4AmC.js";import"./useColors-WMY9wD-z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DW7AHeJn.js";import"./useBreakpoints-RTs-XAJF.js";import"./useSlots-nyIcwo6G.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-BeoQuAfr.js";import"./VIcon-shEmQARK.js";import"./color-CQ7P2KsY.js";import"./FSRow-C-b-hpWa.js";import"./VBtn-Bcg5Dpfx.js";import"./border-BL_XAYaf.js";import"./density-DM1TPnyn.js";import"./elevation-D2k7D5K3.js";import"./rounded-Cwlpymxx.js";import"./group-QLjCrFp5.js";import"./proxiedModel-BMHfYIia.js";import"./dimensions-D04OQyPe.js";import"./loader-zqGHJTJd.js";import"./VProgressCircular-D57tYVQX.js";import"./resizeObserver-BAwzmH4Y.js";import"./locale-CoLhg8Wl.js";import"./anchor-rLQXsCC5.js";import"./router-DS8hXbpn.js";import"./index-aCfcr9Gd.js";import"./VDefaultsProvider--dbql3OT.js";const B={title:"Foundation/Shared/Tag",component:n,tags:["autodocs"],argTypes:{}},a={render:()=>({components:{FSTag:n,FSText:t,FSSpan:s,FSIcon:l},template:`
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
