import{F as t}from"./FSColor-10199f8b.js";import{_ as d}from"./FSRow-64caadb9.js";import"./vue.esm-bundler-6f923154.js";import"./FSCard-32925b42.js";import"./FSCol-5ed907ac.js";import"./css-0cf2e273.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useColors-9144d90e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a8226b2e.js";const y={title:"Foundation/Shared/Global/Colors",tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSColor:t,FSRow:d},template:`
    <div style="display: flex; flex-wrap: wrap; gap: 20px;  margin-bottom: 40px; align-items: center;">
      <div style="display: flex; flex-direction: column;">
        primary #0059E5
        <FSColor color="primary" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        success #6DE038
        <FSColor color="success" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        warning #E6A52E
        <FSColor color="warning" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        error #E01212
        <FSColor color="error" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 40px; align-items: center;">
      <div style="display: flex; flex-direction: column;">
        light #E1E2E3
        <FSColor color="light" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        dark #3F4040
        <FSColor color="dark" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
    </div>`})};var r,l,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSColor,
      FSRow
    },
    template: \`
    <div style="display: flex; flex-wrap: wrap; gap: 20px;  margin-bottom: 40px; align-items: center;">
      <div style="display: flex; flex-direction: column;">
        primary #0059E5
        <FSColor color="primary" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        success #6DE038
        <FSColor color="success" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        warning #E6A52E
        <FSColor color="warning" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        error #E01212
        <FSColor color="error" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 40px; align-items: center;">
      <div style="display: flex; flex-direction: column;">
        light #E1E2E3
        <FSColor color="light" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        dark #3F4040
        <FSColor color="dark" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
    </div>\`
  })
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const b=["DefaultTheme"];export{o as DefaultTheme,b as __namedExportsOrder,y as default};