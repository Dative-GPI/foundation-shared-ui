import e from"./FSIconField-BAlGNwhy.js";import{_ as a}from"./FSSlideGroup-CLbrB063.js";import{_ as F}from"./FSFadeOut-C2gEJSut.js";import{F as s}from"./FSButton-B2X9DGvb.js";import{F as d}from"./FSWindow-BmTGXmTr.js";import{F as S}from"./FSText-zXSXSnZG.js";import{F as p,a as l}from"./FSTab-6msQxDem.js";import{F as c}from"./FSCol-BPr0jVzk.js";import"./vue.esm-bundler-CTTOvLCD.js";import"./FSToggleSet-0XsNufiD.js";import"./FSWrapGroup-BCi713M2.js";import"./uuid-DTaye2KM.js";import"./useSlots-NXmwCOLw.js";import"./useColors-D7R-CyI7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./css-D46r6e5F.js";import"./useBreakpoints-Bm7CjYdd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-CyUsoDyC.js";import"./group-CroFFR-b.js";import"./proxiedModel-Da7OD98r.js";import"./index-B698eGq-.js";import"./color-DTA1Qd0w.js";import"./display-BWFgSvI7.js";import"./locale-Guk_W035.js";import"./VIcon-DzkIKThE.js";import"./resizeObserver-Bwa55KU2.js";import"./VInput-BgFKWDn-.js";import"./transition-C1y9a89u.js";import"./density-n-hig0Tg.js";import"./dimensions-DIR9-JzD.js";import"./form-gxFDX6UX.js";import"./FSTextField-Cq5SV0et.js";import"./FSBaseField-BJJzXcrO.js";import"./FSSpan-QNtf4e4q.js";import"./FSRow-C8EFLcn9.js";import"./useRules-DE909mL5.js";import"./VField-Bi2n7Ebd.js";import"./VLabel-DjEMOXzE.js";import"./loader-BcXzPxbu.js";import"./VProgressCircular-it35si_v.js";import"./anchor-KPAVzGxJ.js";import"./rounded-5tkyiosR.js";import"./VDefaultsProvider-45AVpOQL.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CK42gwlP.js";import"./FSIcon-yzGYQgqh.js";import"./FSButtonNextIcon-BC6-OF7l.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSClickable-DznopAj9.js";import"./FSCard-DxhVm8H0.js";import"./VBtn-IPVaR7st.js";import"./border-CjCUMUtA.js";import"./elevation-CqdG4vF6.js";import"./router-SvtovJtL.js";import"./index-Bj6Uq_NX.js";import"./scopeId-DGVhnfG2.js";import"./ssrBoot-C3MoFAVe.js";const yo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const _o=["Variations"];export{o as Variations,_o as __namedExportsOrder,yo as default};
