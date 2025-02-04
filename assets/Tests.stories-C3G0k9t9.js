import e from"./FSIconField-OcppTbWX.js";import{_ as a}from"./FSSlideGroup-Cl7IgSOt.js";import{_ as F}from"./FSFadeOut-D3iDD7Hj.js";import{F as s}from"./FSButton-CnXo3fLV.js";import{F as d}from"./FSWindow-DzxBgxK_.js";import{F as S}from"./FSText-Bp70TDSF.js";import{F as p,a as l}from"./FSTab-B4BZtsoN.js";import{F as c}from"./FSCol-CPY6S-Xd.js";import"./vue.esm-bundler-NAfsqApI.js";import"./FSToggleSet-CBrw8ECP.js";import"./FSWrapGroup-C3Z0hZ7U.js";import"./uuid-DTaye2KM.js";import"./useSlots-S0O9Daut.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./css-DBDqGZ-V.js";import"./useBreakpoints-BwxwzcAl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-BvOdViLK.js";import"./group-Dl43T2CL.js";import"./proxiedModel-sn-eI_a5.js";import"./index-Dne_26Gx.js";import"./color-BvydW9AS.js";import"./display-Bn-MFLq6.js";import"./locale-CAPEya44.js";import"./VIcon-PiNvAqE-.js";import"./resizeObserver-CLnVcpcq.js";import"./VInput-B5HH3Lye.js";import"./transition-L7INWkz2.js";import"./density-BGeA8UH8.js";import"./dimensions-IFPI4Yq9.js";import"./form-DTsyvZhj.js";import"./FSTextField-Dzov9hcU.js";import"./FSBaseField-CjhswGig.js";import"./FSSpan-CLtVPKpS.js";import"./FSRow-GjwhmX1p.js";import"./useRules-pqUeO9kt.js";import"./VField-KOKiCRZA.js";import"./VLabel-BDFzMscP.js";import"./loader-DsBOwpms.js";import"./VProgressCircular-B6p7zTwg.js";import"./anchor-DvtYZGyi.js";import"./rounded-DwVJT96z.js";import"./VDefaultsProvider-BngNLuXK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DINlpRuJ.js";import"./FSIcon-Dq2bxLH5.js";import"./FSButtonNextIcon-BwecMMW5.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSClickable-Dvaj3J5M.js";import"./FSCard-DOESxZy8.js";import"./VBtn-DqFLTMVy.js";import"./border-C5v47RY4.js";import"./elevation-B-XsQHpK.js";import"./router-0GC4RTMW.js";import"./index-o6vlk9JB.js";import"./scopeId-CbPxXtFO.js";import"./ssrBoot-BkO-TPgF.js";const yo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
