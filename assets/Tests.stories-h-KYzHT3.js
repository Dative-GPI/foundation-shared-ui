import e from"./FSIconField-TMKO1fFj.js";import{_ as a}from"./FSSlideGroup-DLHspItq.js";import{_ as F}from"./FSFadeOut-BS7VKwj1.js";import{F as s}from"./FSButton-DEqhqb0b.js";import{_ as d}from"./FSWindow-CSdvB1Nb.js";import{F as S}from"./FSText-RaLR8FTM.js";import{F as p,a as l}from"./FSTab-BIpB8isL.js";import{F as c}from"./FSCol-BU2zndN-.js";import"./vue.esm-bundler-BB--BfRN.js";import"./FSToggleSet-D12Sjar_.js";import"./FSWrapGroup-TGBfJRdY.js";import"./uuid-DTaye2KM.js";import"./useSlots-COLyvmal.js";import"./useColors-CeWNZtds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BwQCEo_4.js";import"./css-DoweNwVf.js";import"./useBreakpoints-f5uwzDhq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-BI1OJQNm.js";import"./group-C8GVwDAJ.js";import"./proxiedModel-DMSSa4ZW.js";import"./index-9ysw5oGg.js";import"./color-DIvEt_AX.js";import"./display-DzHu_6W3.js";import"./locale-CSWC84Vq.js";import"./VIcon-Cl87HT90.js";import"./resizeObserver-CgHguIgR.js";import"./VInput-BfMi-lTR.js";import"./transition-GJJG9yri.js";import"./density-Xpr_P7nk.js";import"./dimensions-DwY9cRwZ.js";import"./FSTextField-DmCfYujO.js";import"./FSBaseField-BxMUaAXJ.js";import"./FSSpan-BndtI8AP.js";import"./FSRow-Bdc52rY8.js";import"./useRules-CSYFw_Ue.js";import"./VField-COyetWuv.js";import"./VLabel-Cmax-_yp.js";import"./loader-BKsf8Js6.js";import"./VProgressCircular-DNr7n8jG.js";import"./anchor-C8ooBn8e.js";import"./rounded-BKWlZxOJ.js";import"./VDefaultsProvider-BK3j_XEC.js";import"./forwardRefs-DWGaNmQL.js";import"./index--Ye8kcMr.js";import"./FSIcon-BKav6CVU.js";import"./FSButtonNextIcon-BwHgwEym.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./FSClickable-CwRD7A4m.js";import"./FSCard-CiGLNn7K.js";import"./VBtn-CpUNAmWP.js";import"./border-TZTDiA6n.js";import"./elevation-S_BtbnzN.js";import"./router-WJHyAZQ9.js";import"./index-8zgUIpZ9.js";import"./scopeId-NiaFRIZK.js";import"./ssrBoot-DNxkCF-9.js";const Wo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
