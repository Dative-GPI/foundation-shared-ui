import{a as r}from"./properties-DwZ_iDct.js";import{F as t}from"./FSPagination-CqQLw2JD.js";import{F as l}from"./FSButton-DatX9tV0.js";import{F as s}from"./FSText-yCmXS8Mf.js";import"./vue.esm-bundler-CM4TIH-Q.js";import"./FSRow-oDTnIAxc.js";import"./css-BgLnvP7H.js";import"./useBreakpoints-C6JPO-aN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-CXLm7rHe.js";import"./FSCard-BedrH_cK.js";import"./FSCol-BR6T1l1C.js";import"./VProgressCircular-C-4f-PXJ.js";import"./color-Bo6l13w9.js";import"./resizeObserver-Cb3oz2nO.js";import"./VIcon-GfKFLOEw.js";import"./FSSpan-y1Ex52-c.js";import"./useSlots-c6yg-hhg.js";import"./FSIcon-LkE5-ra7.js";const O={title:"Foundation/Shared/Pagination",component:t,tags:["autodocs"],argTypes:{...r(t)}},e={args:{modelValue:4,pages:10,width:"100%"},render:i=>({components:{FSPagination:t,FSButton:l,FSText:s},setup(){return{args:i}},template:`
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
