import e from"./FSIconField-9yW7eww0.js";import{_ as a}from"./FSSlideGroup-BKLRFR6r.js";import{_ as F}from"./FSFadeOut-Dik6Imqk.js";import{F as s}from"./FSButton-BtOsEP4C.js";import{_ as d}from"./FSWindow-JOz0GisI.js";import{F as S}from"./FSText-CaGosnIl.js";import{F as p,a as l}from"./FSTab-_C9cmNeF.js";import{F as c}from"./FSCol-Bfhiyt6Y.js";import"./vue.esm-bundler-PONd4AmC.js";import"./FSToggleSet-DoOlvhp-.js";import"./FSWrapGroup-Dayjp45z.js";import"./uuid-DTaye2KM.js";import"./useSlots-nyIcwo6G.js";import"./useColors-WMY9wD-z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DW7AHeJn.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-B4B7QRhR.js";import"./group-QLjCrFp5.js";import"./proxiedModel-BMHfYIia.js";import"./index-COu1mqSp.js";import"./color-CQ7P2KsY.js";import"./display-D1WOGNJY.js";import"./locale-CoLhg8Wl.js";import"./VIcon-shEmQARK.js";import"./resizeObserver-BAwzmH4Y.js";import"./VInput-CX-j4Zl6.js";import"./transition-BpYTYsmy.js";import"./density-DM1TPnyn.js";import"./dimensions-D04OQyPe.js";import"./FSTextField-DpTxivyj.js";import"./FSBaseField-ynwJeuM4.js";import"./FSSpan-DqsaA-ji.js";import"./FSRow-C-b-hpWa.js";import"./useRules-CT5DWk6c.js";import"./VField-BsvLa1Vn.js";import"./VLabel-B2dMuALu.js";import"./loader-zqGHJTJd.js";import"./VProgressCircular-D57tYVQX.js";import"./anchor-rLQXsCC5.js";import"./rounded-Cwlpymxx.js";import"./VDefaultsProvider--dbql3OT.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-CzkqP9_q.js";import"./FSIcon-wf_hiRKr.js";import"./FSButtonNextIcon-PE5YDRXp.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-BpeLEfG7.js";import"./FSCard-B7av1ouT.js";import"./VWindowItem-DqS-XBSX.js";import"./lazy-PL0gnfDR.js";import"./ssrBoot-DufuUSU7.js";import"./VBtn-Bcg5Dpfx.js";import"./border-BL_XAYaf.js";import"./elevation-D2k7D5K3.js";import"./router-DS8hXbpn.js";import"./index-aCfcr9Gd.js";import"./scopeId-DFcjERLl.js";const Co={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
