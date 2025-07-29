import e from"./FSIconField-BQUCOYib.js";import{_ as a}from"./FSSlideGroup-CGqp6f7y.js";import{_ as F}from"./FSFadeOut-CtUd8oOA.js";import{F as s}from"./FSButton-CZKySWW0.js";import{_ as d}from"./FSWindow-sJd0tDre.js";import{F as S}from"./FSText-C7hkL3As.js";import{F as p,a as l}from"./FSTab-BSM2PqAf.js";import{F as c}from"./FSCol-Bfhiyt6Y.js";import"./vue.esm-bundler-PONd4AmC.js";import"./FSToggleSet-CRtePpT3.js";import"./FSWrapGroup-CpwsD4SA.js";import"./uuid-DTaye2KM.js";import"./useSlots-nyIcwo6G.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-B5H5Uw6w.js";import"./group-CvGRLeFV.js";import"./proxiedModel-vOB1Q9Gh.js";import"./index-CANKuvlL.js";import"./color-_AiH45em.js";import"./display-BXzLC06Y.js";import"./locale-CoLhg8Wl.js";import"./VIcon-DIMW80nW.js";import"./resizeObserver-UZYihl4g.js";import"./VInput-ClaXJMCA.js";import"./transition-BXZIGKil.js";import"./density-CNNumQ_A.js";import"./dimensions-CNbPgA3L.js";import"./FSTextField-D-U5ryYn.js";import"./FSBaseField-DMW1nZy-.js";import"./FSSpan-DxKJLsSl.js";import"./FSRow-C-b-hpWa.js";import"./useRules-CT5DWk6c.js";import"./VField-So_guaQm.js";import"./VLabel-5AeJpfXJ.js";import"./loader-DGoLn0VY.js";import"./VProgressCircular-CDK6zSYw.js";import"./anchor-D2WyvgD_.js";import"./rounded-BBFi0CuG.js";import"./VDefaultsProvider-BsWh58B_.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bb4mSIJO.js";import"./FSIcon-bsX1r_Ci.js";import"./FSButtonNextIcon-Dkus99PH.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-CyhgWkHC.js";import"./FSCard-DYD9Tm3w.js";import"./VBtn-PodE2DV2.js";import"./border-z35mRDPS.js";import"./elevation-CL0Py7Fp.js";import"./router-6tzIEQS-.js";import"./index-B8vPsAiL.js";import"./scopeId-CWp-k_S_.js";import"./ssrBoot-DufuUSU7.js";const Wo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
