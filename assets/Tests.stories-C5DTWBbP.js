import e from"./FSIconField-DUmzmBNb.js";import{_ as a}from"./FSSlideGroup-FM6r_xNQ.js";import{_ as F}from"./FSFadeOut-B817LR1t.js";import{F as s}from"./FSButton-2OKi08_r.js";import{_ as d}from"./FSWindow-Be0cwqXj.js";import{F as S}from"./FSText-C92q1_nI.js";import{F as p,a as l}from"./FSTab-BV90pc3K.js";import{F as c}from"./FSCol-DIPgj7wU.js";import"./vue.esm-bundler-CqZ6aK3I.js";import"./FSToggleSet-CzuJHIxU.js";import"./FSWrapGroup-Dpc14vID.js";import"./uuid-DTaye2KM.js";import"./useSlots-BgbXyH5p.js";import"./useColors-BIkRBR7C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CCooKRqg.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-DMC4DYA5.js";import"./group-1sntWZNj.js";import"./proxiedModel-BirLikdP.js";import"./index-BHk1SuU0.js";import"./color-iZFxpsFf.js";import"./display-Cs3Y1ygD.js";import"./locale-BJmdjC_5.js";import"./VIcon-ZzEkeSRE.js";import"./resizeObserver-C7qOORSR.js";import"./VInput-f1leR0eo.js";import"./transition-C13qRIR1.js";import"./density-B3EUR5Bv.js";import"./dimensions-CuS7VcMO.js";import"./FSTextField-CEJP76Sx.js";import"./FSBaseField-eUR0iGRU.js";import"./FSSpan-B7HDTlg9.js";import"./FSRow-udQVJR1p.js";import"./useRules-Cutg_0Yh.js";import"./VField-B2nfi808.js";import"./VLabel-D1qNLyt7.js";import"./loader-Bh1R7Z2A.js";import"./VProgressCircular-cB7gdjsO.js";import"./anchor-DiyvyHyx.js";import"./rounded-T_eKj2ZY.js";import"./VDefaultsProvider-3cG3_dFO.js";import"./forwardRefs-DWGaNmQL.js";import"./index-0XvVa1kA.js";import"./FSIcon-8KcAAKgU.js";import"./FSButtonNextIcon-BR7gWMZw.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-CBfoSsDs.js";import"./FSCard-BH9I8ruU.js";import"./VBtn-3Idlo3fr.js";import"./border-DGybV2oK.js";import"./elevation-DCJceMeT.js";import"./router-C0dK7NvB.js";import"./index-BSoBU6Pm.js";import"./scopeId-BQSHBqq_.js";import"./ssrBoot-B76fNmmB.js";const Wo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Two FSWindow </FSText>
        <FSWindow width="500px" :modelValue="args.tab1">
            <FSIconField />
        </FSWindow>
        <FSWindow width="500px" :modelValue="args.tab2">
            <template v-if="true">
              <FSCol>
                  <FSIconField />
              </FSCol>
            </template>
        </FSWindow>
      </div>
    `})};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      tab1: 0,
      tab2: 0
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTabs,
      FSTab,
      FSText,
      FSWindow,
      FSCol,
      FSFadeOut,
      FSSlideGroup,
      FSButton,
      FSIconField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Two FSWindow </FSText>
        <FSWindow width="500px" :modelValue="args.tab1">
            <FSIconField />
        </FSWindow>
        <FSWindow width="500px" :modelValue="args.tab2">
            <template v-if="true">
              <FSCol>
                  <FSIconField />
              </FSCol>
            </template>
        </FSWindow>
      </div>
    \`
  })
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const _o=["Variations"];export{o as Variations,_o as __namedExportsOrder,Wo as default};
