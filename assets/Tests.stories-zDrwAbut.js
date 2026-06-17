import e from"./FSIconField-63mb2PdW.js";import{_ as a}from"./FSSlideGroup-5yThapiu.js";import{_ as s}from"./FSFadeOut-DOLGFW1u.js";import{F}from"./FSButton-DohpVEzP.js";import{_ as d}from"./FSWindow-BM-m8I4D.js";import{F as S}from"./FSText-C8rmUTxK.js";import{_ as l,a as p}from"./FSTab-CL5pCHSo.js";import{F as c}from"./FSCol-DedFW0nl.js";import"./vue.esm-bundler-C5-CUMHT.js";import"./FSToggleSet-yqzW0yBe.js";import"./FSWrapGroup-DMf-egfq.js";import"./uuid-DTaye2KM.js";import"./useSlots-ol4Nk6ew.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./css-DSFbdPon.js";import"./useBreakpoints-pPMhsL5T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroup-Bd_pvRRU.js";import"./index-pS3mXfMR.js";import"./useRender-_COxrB9K.js";import"./display-IUfV935l.js";import"./goto-Ba_J3Vzv.js";import"./locale-BNkeanE6.js";import"./proxiedModel-CV-HTW34.js";import"./group-B4VRq_l_.js";import"./icons-CucLNLjN.js";import"./resizeObserver-hE1ulDL8.js";import"./tag-enhOFdJJ.js";import"./VIcon-IlEzlDWp.js";import"./color-D7ZCcSxD.js";import"./size-DwliOKuO.js";import"./VSlideGroupItem-BppNUl7y.js";import"./VInput-Y0iB4nur.js";import"./transition-CgRUW3r8.js";import"./density-qUtw3dk7.js";import"./dimensions-Bm76csmg.js";import"./FSTextField-V-eBW8wn.js";import"./FSBaseField-B1fPD4-R.js";import"./FSSpan-D6aG51_c.js";import"./FSRow-C8aYwBu-.js";import"./useRules-D4S0gmXa.js";import"./VTextField-CPakm9mu.js";import"./VField-Cbr0bjXl.js";import"./VLabel-COLF1QPQ.js";import"./loader-CVb0Ac9O.js";import"./VProgressLinear-F46fcvb0.js";import"./intersectionObserver-D1RZdbEq.js";import"./anchor-Dj2AEc5N.js";import"./rounded-Ctowy803.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B3ZVJx30.js";import"./FSIcon-CNpmwcOd.js";import"./FSButtonNextIcon-TA3Aju3l.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./FSCard-DYe1QD8j.js";import"./VProgressCircular-D7Gk7a1O.js";import"./VWindowItem-G-NH8qmz.js";import"./lazy-DXVvciW4.js";import"./ssrBoot-ClVRhrXI.js";import"./VBtn-CvDmdLsi.js";import"./border-DJaidMiz.js";import"./elevation-DfTZ1KyC.js";import"./variant-BJccJztY.js";import"./position-CTxKpBLl.js";import"./router-CTGX-puL.js";import"./index-asyjLxvi.js";import"./scopeId-DKs4U9S0.js";const Bo={title:"Shared/Components/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:s,FSSlideGroup:a,FSButton:F,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
