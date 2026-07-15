import e from"./FSIconField-BjF4jLWs.js";import{_ as a}from"./FSSlideGroup-BbqArISU.js";import{_ as s}from"./FSFadeOut-W61q8jFE.js";import{F}from"./FSButton-BqreeKOn.js";import{_ as d}from"./FSWindow-DpNTIdrK.js";import{F as S}from"./FSText-DIbyStIN.js";import{_ as l,a as p}from"./FSTab-C0nT7I_5.js";import{F as c}from"./FSCol-KRtq6OYO.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSToggleSet-D0wxZ1Az.js";import"./FSWrapGroup-Ddblgb9F.js";import"./uuid-DTaye2KM.js";import"./useSlots-DEXetpJf.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroup-B-JqmwGu.js";import"./index-ByfGjSW7.js";import"./useRender-CaGCh2Xu.js";import"./display-QVN4B5Qw.js";import"./goto-CvfYl6LX.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./group-BLkYT3DE.js";import"./icons-Cl0t_6pZ.js";import"./resizeObserver-Df0UXoOw.js";import"./tag-DuA9585q.js";import"./VIcon-Cu6WQqXu.js";import"./color-BS29f5Yp.js";import"./size-D7Cgj1jW.js";import"./VSlideGroupItem-DS171Ouj.js";import"./VInput-BA20Y-wG.js";import"./transition-a5pzBS6c.js";import"./density-CE2FkSgs.js";import"./dimensions-CS_qJJhy.js";import"./FSTextField-Cq4gI6mX.js";import"./FSBaseField-Bph8nCfp.js";import"./FSSpan-B28b2m0n.js";import"./FSRow-Dg2RhQyl.js";import"./useRules-eFcMZq7y.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./VLabel-BtnooUPU.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./intersectionObserver-DwVsweQn.js";import"./anchor-Se7MGGLO.js";import"./rounded-CS1_z6Jk.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Blv54jCg.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B4rZgXN-.js";import"./FSIcon-BcHBVf_o.js";import"./FSButtonNextIcon-CyemLlRb.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSCard-DxY0aXhp.js";import"./VProgressCircular-Cjpa4WUk.js";import"./VWindowItem-CArm1FTd.js";import"./lazy-sPNxwuRm.js";import"./ssrBoot-BimrXMWA.js";import"./VBtn-Ct4hkl6N.js";import"./border-D8z1QLxT.js";import"./elevation-DQ_qKX67.js";import"./variant-DNfp8Yqp.js";import"./position-O95c9fuD.js";import"./router-D36qODsG.js";import"./index-B-eFr4Nw.js";import"./scopeId-DEhVAmth.js";const Bo={title:"Shared/Components/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:s,FSSlideGroup:a,FSButton:F,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
