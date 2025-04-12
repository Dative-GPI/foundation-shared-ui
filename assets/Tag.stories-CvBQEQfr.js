import{F as t}from"./FSText-Da5isN0I.js";import{F as l}from"./FSIcon-DQMOs0-E.js";import{_ as s}from"./FSSpan-yJEd2pn-.js";import{F as n}from"./FSTag-CFGgNd-A.js";import"./vue.esm-bundler-PTWG9x2X.js";import"./useColors-DSUu_QQ4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./useBreakpoints-W7XGW48y.js";import"./useSlots-BG_ZhEqK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-B90wD3BD.js";import"./VIcon-DIeegzqR.js";import"./color-CCpgnDIk.js";import"./FSRow-DPcQMiM9.js";import"./VBtn-oNOab7rO.js";import"./border-CIYj3WlL.js";import"./density-CznkHGGy.js";import"./elevation-CrSwNJwg.js";import"./rounded-BbPXzFqc.js";import"./group-8tJUjatm.js";import"./proxiedModel-CvHSoKPb.js";import"./dimensions-v18atrWI.js";import"./loader-BqT2mYY7.js";import"./VProgressCircular-eoxb555W.js";import"./resizeObserver-C17Kgm90.js";import"./locale-Cz_4DTJh.js";import"./anchor-BcF6JBj1.js";import"./router-BQjY5_kj.js";import"./index-Dqqa47M6.js";import"./VDefaultsProvider-aDgtYDKn.js";const B={title:"Foundation/Shared/Tag",component:n,tags:["autodocs"],argTypes:{}},a={render:()=>({components:{FSTag:n,FSText:t,FSSpan:s,FSIcon:l},template:`
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
