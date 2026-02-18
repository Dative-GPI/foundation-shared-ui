import{a as r}from"./properties-Qw-O9fbT.js";import{F as t}from"./FSPagination-CSaW1Noe.js";import{F as l}from"./FSButton-CxA5c6KR.js";import{F as s}from"./FSText-DZJhh1AD.js";import"./vue.esm-bundler-B9lxvfDw.js";import"./FSRow-CFa9RNor.js";import"./css-BHrR5cp2.js";import"./useBreakpoints-Dc84uxeD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./FSCard-BwbWypiX.js";import"./FSCol-BwxAijHz.js";import"./VProgressCircular-DSOzHF7B.js";import"./color-CLtf7Qrc.js";import"./useRender-DM2jvMPN.js";import"./resizeObserver-DjRdaT-k.js";import"./VIcon-DPcX_RaC.js";import"./icons-B5bBvhw0.js";import"./FSSpan-COYXSDbp.js";import"./useSlots-BioZKQqg.js";import"./FSIcon-kCffLiJ2.js";const q={title:"Foundation/Shared/Pagination",component:t,tags:["autodocs"],argTypes:{...r(t)}},e={args:{modelValue:4,pages:10,width:"100%"},render:i=>({components:{FSPagination:t,FSButton:l,FSText:s},setup(){return{args:i}},template:`
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
    `})};var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const z=["Variations"];export{e as Variations,z as __namedExportsOrder,q as default};
