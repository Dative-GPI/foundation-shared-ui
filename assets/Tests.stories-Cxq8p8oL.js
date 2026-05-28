import e from"./FSIconField-DqNTdFsV.js";import{_ as a}from"./FSSlideGroup-DXfM7ZwC.js";import{_ as F}from"./FSFadeOut-DENuqwmT.js";import{F as s}from"./FSButton-CX1uVweX.js";import{_ as d}from"./FSWindow-CqXjLMvf.js";import{F as S}from"./FSText-CUmuxASa.js";import{_ as l,a as p}from"./FSTab-CMfj-7Kd.js";import{F as c}from"./FSCol-B2uM4vFw.js";import"./vue.esm-bundler-DR0_aU9U.js";import"./FSToggleSet-r3-ZJAhZ.js";import"./FSWrapGroup-v391AceI.js";import"./uuid-DTaye2KM.js";import"./useSlots-p1mkRhuZ.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroup-BjJJyiAP.js";import"./index-C-lZWyiZ.js";import"./useRender-BLRtLddt.js";import"./display-B8Tm0OQZ.js";import"./goto-nsb-OfwD.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./group-CUiyutR_.js";import"./icons-CT9uuJgl.js";import"./resizeObserver-BES9Ltqd.js";import"./tag-mR0sHpgP.js";import"./VIcon-e3y7Ok8e.js";import"./color-RD9Ud5Y3.js";import"./size-BQpWkrb5.js";import"./VSlideGroupItem-BDJ1UEY1.js";import"./VInput-Cb7sX7IB.js";import"./transition-CedxoFs4.js";import"./density-SLEyWIf6.js";import"./dimensions-DYTrXD1P.js";import"./FSTextField-tianF0jI.js";import"./FSBaseField-y2QkcP3h.js";import"./FSSpan-9E7WYB2n.js";import"./FSRow-C8VtPvPz.js";import"./useRules-2yt7KWSA.js";import"./VTextField-Jo2lzvlt.js";import"./VField-BhclGBdp.js";import"./VLabel-BfwkTHLb.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./intersectionObserver-DIY-g69O.js";import"./anchor-CT7OU_gq.js";import"./rounded-B6-M_5uG.js";import"./easing--CnlGZ0M.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BLyOCIqB.js";import"./FSIcon-CBwOL1p5.js";import"./FSButtonNextIcon-BPTvjWXT.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./FSCard--XyliQO3.js";import"./VProgressCircular-CZaehD4X.js";import"./VWindowItem-D6b_Aeub.js";import"./lazy-DY4Wto-x.js";import"./ssrBoot-DbD7MJXH.js";import"./VBtn-hLKUYNZP.js";import"./border-CatZixNo.js";import"./elevation-DVEOfLMu.js";import"./variant-BZg-bE5G.js";import"./position-Dh5mOHTG.js";import"./router-CJAgOfLI.js";import"./index-Dlqh_ozP.js";import"./scopeId-bhuUTgv7.js";const Bo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Eo=["Variations"];export{o as Variations,Eo as __namedExportsOrder,Bo as default};
