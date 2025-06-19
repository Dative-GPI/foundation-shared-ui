import{a as r}from"./properties-Qw-O9fbT.js";import{F as t}from"./FSPagination-nAB5oThW.js";import{F as l}from"./FSButton-CMFttM_1.js";import{F as s}from"./FSText-BvUMyUbP.js";import"./vue.esm-bundler-CqZ6aK3I.js";import"./FSRow-udQVJR1p.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CaMUbg8a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CCooKRqg.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-Bc_GnmK1.js";import"./FSCard-CoFTtRNJ.js";import"./FSCol-DIPgj7wU.js";import"./VProgressCircular-DDVR-EZI.js";import"./color-6mal3hP4.js";import"./resizeObserver-C7qOORSR.js";import"./VIcon-beNtbbqt.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./FSIcon-Dy1KglKQ.js";const O={title:"Foundation/Shared/Pagination",component:t,tags:["autodocs"],argTypes:{...r(t)}},e={args:{modelValue:4,pages:10,width:"100%"},render:i=>({components:{FSPagination:t,FSButton:l,FSText:s},setup(){return{args:i}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <div style="display: flex; width: 100%; flex-direction: column; gap: 8px; justify-content: center;">
          <FSPagination
            v-model="args.modelValue"
            v-bind="args"
          />
          <div style="display: flex; width: 100%; gap: 8px; justify-content: center;">
            <FSButton
              label="Previous"
              :disabled="args.modelValue === 0"
              @click="args.modelValue--"
            />
            <FSButton
              label="Next"
              :disabled="args.modelValue >= args.pages - 1"
              @click="args.modelValue++"
            />
          </div>
        </div>
      </div>
    `})};var n,a,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    modelValue: 4,
    pages: 10,
    width: "100%"
  },
  render: args => ({
    components: {
      FSPagination,
      FSButton,
      FSText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <div style="display: flex; width: 100%; flex-direction: column; gap: 8px; justify-content: center;">
          <FSPagination
            v-model="args.modelValue"
            v-bind="args"
          />
          <div style="display: flex; width: 100%; gap: 8px; justify-content: center;">
            <FSButton
              label="Previous"
              :disabled="args.modelValue === 0"
              @click="args.modelValue--"
            />
            <FSButton
              label="Next"
              :disabled="args.modelValue >= args.pages - 1"
              @click="args.modelValue++"
            />
          </div>
        </div>
      </div>
    \`
  })
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const q=["Variations"];export{e as Variations,q as __namedExportsOrder,O as default};
