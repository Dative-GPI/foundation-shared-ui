import e from"./FSIconField-FOAh0OPs.js";import{_ as a}from"./FSSlideGroup-BpYleAPY.js";import{_ as F}from"./FSFadeOut-BaaWP8Xe.js";import{F as s}from"./FSButton-VjwKfCr9.js";import{_ as d}from"./FSWindow-D3STb6jq.js";import{F as S}from"./FSText-U805njuH.js";import{_ as p,a as l}from"./FSTab-DFPQ5bpA.js";import{F as c}from"./FSCol-79-COv64.js";import"./vue.esm-bundler-CocPPKUI.js";import"./FSToggleSet-BAu9OVEz.js";import"./FSWrapGroup-CR1U-5kP.js";import"./uuid-DTaye2KM.js";import"./useSlots-D4bv69lA.js";import"./useColors-DUufJJPH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DhcBBMcp.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroup-D3ZQzm0f.js";import"./index-DfBdMsnv.js";import"./color-yBCdco2I.js";import"./display-BmuJHlI4.js";import"./locale-_fONYh-8.js";import"./group-CbiZXdYV.js";import"./proxiedModel-DvocDLKO.js";import"./VIcon-Qz-Il978.js";import"./resizeObserver-QYhQJr79.js";import"./VSlideGroupItem-BQNaTCX0.js";import"./VInput-DhPQv4YC.js";import"./transition-BuKnRONq.js";import"./density-DZuLaB-B.js";import"./dimensions-C9PuMYcl.js";import"./FSTextField-CrSrBFtk.js";import"./FSBaseField-BHCTmkg_.js";import"./FSSpan-DrSEJIpr.js";import"./FSRow-BvJ7lU5E.js";import"./useRules-C3-AmzzE.js";import"./VField-CEhz-0ZK.js";import"./VLabel-HvE-XSAC.js";import"./loader-B3-0Tc48.js";import"./VProgressCircular-BMkR7ln7.js";import"./anchor-C7UfIAXa.js";import"./rounded-Cjf6r1y4.js";import"./VDefaultsProvider-Clc0K3gC.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-lkzvYdnq.js";import"./FSIcon-CKNHHVc2.js";import"./FSButtonNextIcon-BGw3zb-K.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-6FPdriKA.js";import"./FSCard-JQNJPDhp.js";import"./VWindowItem-Dr9-Ppmb.js";import"./lazy-CpkO2kQj.js";import"./ssrBoot-B-cFki3l.js";import"./VBtn-Cjbcb1KM.js";import"./border-B0huqYee.js";import"./elevation-CsFMJmSN.js";import"./router-Btsphvl6.js";import"./index-BgX1FNqJ.js";import"./scopeId-LQkRlG9f.js";const vo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
