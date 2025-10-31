import e from"./FSIconField-CRfexuIW.js";import{_ as a}from"./FSSlideGroup-nu8Cr66q.js";import{_ as F}from"./FSFadeOut-DU3Ke7qi.js";import{F as s}from"./FSButton-Czf3beC8.js";import{_ as d}from"./FSWindow-DsNw3XIm.js";import{F as S}from"./FSText-B2RNQvtL.js";import{_ as p,a as l}from"./FSTab-CWA-iySZ.js";import{F as c}from"./FSCol-DVEaUPKl.js";import"./vue.esm-bundler-CC_jVOJ5.js";import"./FSToggleSet-CEKaVblF.js";import"./FSWrapGroup-Cr3q9yBs.js";import"./uuid-DTaye2KM.js";import"./useSlots-C8jkAuOW.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./css-DTGEi_Ca.js";import"./useBreakpoints-BMcJFLA8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroup-DVr5PPvN.js";import"./index-Dylhq_Dl.js";import"./color-BM2dSUAO.js";import"./display-CpM-3U3n.js";import"./locale-K9DBMW2q.js";import"./group-CxQl3dDS.js";import"./proxiedModel-Nw0LX-ta.js";import"./VIcon-BOLLMMm0.js";import"./resizeObserver-BZ0AJw4z.js";import"./VSlideGroupItem-Bl-P3Ech.js";import"./VInput-0C1kQySn.js";import"./transition-Ucf2Ovas.js";import"./density-mssFUWH2.js";import"./dimensions-TKp8HHzB.js";import"./FSTextField-CTUDqfDL.js";import"./FSBaseField-Bo38Hl_f.js";import"./FSSpan-DkNsO5wd.js";import"./FSRow-CjY3icuR.js";import"./useRules-Da0JLBaA.js";import"./VField-CnDxsm3U.js";import"./VLabel-kKpu5iXd.js";import"./loader-CbVzlK-r.js";import"./VProgressCircular-B7HKciov.js";import"./anchor-S0Fc85Gi.js";import"./rounded-Cy4gG01O.js";import"./VDefaultsProvider-CuIagDb9.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B48vLg-P.js";import"./FSIcon-CeLDRxMK.js";import"./FSButtonNextIcon-CsckSPrB.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSClickable-DFmwvck2.js";import"./FSCard-twwkVLSp.js";import"./VWindowItem-DAmycCPb.js";import"./lazy-BrZUVd24.js";import"./ssrBoot-CyKRGZ4o.js";import"./VBtn-BXSaXTUb.js";import"./border-BnR_N-bS.js";import"./elevation-CjJG1XnK.js";import"./router-kuDvkEMM.js";import"./index-DWDx8SXO.js";import"./scopeId-BJNiFHH-.js";const vo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Io=["Variations"];export{o as Variations,Io as __namedExportsOrder,vo as default};
