import{F as t}from"./FSText-C7hkL3As.js";import{F as l}from"./FSIcon-bsX1r_Ci.js";import{_ as s}from"./FSSpan-DxKJLsSl.js";import{F as n}from"./FSTag-Bq0CtxRJ.js";import"./vue.esm-bundler-PONd4AmC.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./useBreakpoints-RTs-XAJF.js";import"./useSlots-nyIcwo6G.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-BeoQuAfr.js";import"./VIcon-DIMW80nW.js";import"./color-_AiH45em.js";import"./FSRow-C-b-hpWa.js";import"./VBtn-PodE2DV2.js";import"./border-z35mRDPS.js";import"./density-CNNumQ_A.js";import"./elevation-CL0Py7Fp.js";import"./rounded-BBFi0CuG.js";import"./group-CvGRLeFV.js";import"./proxiedModel-vOB1Q9Gh.js";import"./dimensions-CNbPgA3L.js";import"./loader-DGoLn0VY.js";import"./VProgressCircular-CDK6zSYw.js";import"./resizeObserver-UZYihl4g.js";import"./locale-CoLhg8Wl.js";import"./anchor-D2WyvgD_.js";import"./router-6tzIEQS-.js";import"./index-B8vPsAiL.js";import"./VDefaultsProvider-BsWh58B_.js";const B={title:"Foundation/Shared/Tag",component:n,tags:["autodocs"],argTypes:{}},a={render:()=>({components:{FSTag:n,FSText:t,FSSpan:s,FSIcon:l},template:`
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
