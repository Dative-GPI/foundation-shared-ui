import{a as r}from"./properties-Qw-O9fbT.js";import{F as t}from"./FSPagination-fR6FUjCx.js";import{F as l}from"./FSButton-VjwKfCr9.js";import{F as s}from"./FSText-U805njuH.js";import"./vue.esm-bundler-CocPPKUI.js";import"./FSRow-BvJ7lU5E.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-DUufJJPH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DhcBBMcp.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-6FPdriKA.js";import"./FSCard-JQNJPDhp.js";import"./FSCol-79-COv64.js";import"./VProgressCircular-BMkR7ln7.js";import"./color-yBCdco2I.js";import"./resizeObserver-QYhQJr79.js";import"./VIcon-Qz-Il978.js";import"./FSSpan-DrSEJIpr.js";import"./useSlots-D4bv69lA.js";import"./FSIcon-CKNHHVc2.js";const O={title:"Foundation/Shared/Pagination",component:t,tags:["autodocs"],argTypes:{...r(t)}},e={args:{modelValue:4,pages:10,width:"100%"},render:i=>({components:{FSPagination:t,FSButton:l,FSText:s},setup(){return{args:i}},template:`
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
