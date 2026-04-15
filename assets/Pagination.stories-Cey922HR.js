import{a as r}from"./properties-Qw-O9fbT.js";import{F as e}from"./FSPagination-CznX4UlG.js";import{F as l}from"./FSButton-cpkpLA7w.js";import{F as s}from"./FSText-DL_5kFi7.js";import"./vue.esm-bundler-D_gXonxt.js";import"./FSRow-cHWWqhhs.js";import"./css-Bznx04uW.js";import"./useBreakpoints-BWz07CZT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./FSIcon-B9MXbR5l.js";import"./VIcon-gCapjdof.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSCard-Cxfe3-O9.js";import"./VProgressCircular-BomUTxjq.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./FSCol-C3EJfcJX.js";import"./FSSpan-ap0CpdXZ.js";import"./useSlots-CdBAzqCX.js";const A={title:"Foundation/Shared/Pagination",component:e,tags:["autodocs"],argTypes:{...r(e)}},t={args:{modelValue:4,pages:10,width:"100%"},render:a=>({components:{FSPagination:e,FSButton:l,FSText:s},setup(){return{args:a}},template:`
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
    `})};var n,o,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const D=["Variations"];export{t as Variations,D as __namedExportsOrder,A as default};
