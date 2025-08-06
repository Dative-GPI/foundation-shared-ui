import e from"./FSIconField-DQMJnyMG.js";import{_ as a}from"./FSSlideGroup-BoaCkdx0.js";import{_ as F}from"./FSFadeOut-BcV7cYL5.js";import{F as s}from"./FSButton-B9T3D7JL.js";import{_ as d}from"./FSWindow-CvRw_nNN.js";import{F as S}from"./FSText-Nj40J67v.js";import{F as p,a as l}from"./FSTab-BZ4SGv5s.js";import{F as c}from"./FSCol-79-COv64.js";import"./vue.esm-bundler-CocPPKUI.js";import"./FSToggleSet-mQm74CcI.js";import"./FSWrapGroup-DXlgsE59.js";import"./uuid-DTaye2KM.js";import"./useSlots-D4bv69lA.js";import"./useColors-C1aD-Kb6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1Gcptw7.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-nAYd2StP.js";import"./group-MFxThiWx.js";import"./proxiedModel-DW1FRKBO.js";import"./index-hd-xIizf.js";import"./color-D50-hVV_.js";import"./display-23tZl-3U.js";import"./locale-_fONYh-8.js";import"./VIcon-ZjKwFcqe.js";import"./resizeObserver-DDOqpSMx.js";import"./VInput-JSCg5nQs.js";import"./transition-bMLtH-b3.js";import"./density-2KuMGYl6.js";import"./dimensions-Cv9Fwl7U.js";import"./FSTextField-CdmKROte.js";import"./FSBaseField-Cn3A38Ti.js";import"./FSSpan-CKhKq6E1.js";import"./FSRow-BvJ7lU5E.js";import"./useRules-C3-AmzzE.js";import"./VField-C42QHTgn.js";import"./VLabel-yrR5w-fx.js";import"./loader-BDqRCawj.js";import"./VProgressCircular-k_tOz5gX.js";import"./anchor-D4EnoweD.js";import"./rounded-CBYChxif.js";import"./VDefaultsProvider-CV4ffwSK.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-5LM_ZUPq.js";import"./FSIcon-BGuuL0jz.js";import"./FSButtonNextIcon-BjCs89jV.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-CqIDwjuA.js";import"./FSCard-2KUMcI8D.js";import"./VWindowItem-bVm6GL_p.js";import"./lazy-Dahsm7lL.js";import"./ssrBoot-B-cFki3l.js";import"./VBtn-CT_Tyh1g.js";import"./border-ZP5ArpGv.js";import"./elevation-DUhGVECn.js";import"./router-CKzlklLc.js";import"./index-BwBNp3ym.js";import"./scopeId-BfaO37qo.js";const Co={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const vo=["Variations"];export{o as Variations,vo as __namedExportsOrder,Co as default};
