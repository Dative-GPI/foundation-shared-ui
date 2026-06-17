import{a as r}from"./properties-Qw-O9fbT.js";import{F as t}from"./FSPagination-CI2tC3zv.js";import{F as l}from"./FSButton-DohpVEzP.js";import{F as s}from"./FSText-C8rmUTxK.js";import"./vue.esm-bundler-C5-CUMHT.js";import"./FSRow-C8aYwBu-.js";import"./css-DSFbdPon.js";import"./useBreakpoints-pPMhsL5T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./FSSpan-D6aG51_c.js";import"./useSlots-ol4Nk6ew.js";import"./FSIcon-CNpmwcOd.js";import"./VIcon-IlEzlDWp.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./icons-CucLNLjN.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSCard-DYe1QD8j.js";import"./VProgressCircular-D7Gk7a1O.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./FSCol-DedFW0nl.js";const A={title:"Shared/Components/Pagination",component:t,tags:["autodocs"],argTypes:{...r(t)}},e={args:{modelValue:4,pages:10,width:"100%"},render:a=>({components:{FSPagination:t,FSButton:l,FSText:s},setup(){return{args:a}},template:`
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
    `})};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const D=["Variations"];export{e as Variations,D as __namedExportsOrder,A as default};
