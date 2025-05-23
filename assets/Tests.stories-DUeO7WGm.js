import e from"./FSIconField-D53L5CLG.js";import{_ as a}from"./FSSlideGroup-CY-QwtGT.js";import{_ as F}from"./FSFadeOut-PZiJk41N.js";import{F as s}from"./FSButton-hPdQnp5M.js";import{_ as d}from"./FSWindow-9NEmh219.js";import{F as S}from"./FSText-C032WjuG.js";import{F as p,a as l}from"./FSTab-DzhzNH1d.js";import{F as c}from"./FSCol-Be93XvPD.js";import"./vue.esm-bundler-CM4TIH-Q.js";import"./FSToggleSet-BZUH8mQe.js";import"./FSWrapGroup-Fe7qxaBI.js";import"./uuid-DTaye2KM.js";import"./useSlots-c6yg-hhg.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./css-D38lF7BW.js";import"./useBreakpoints-DsICqL2A.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-41bDxGuE.js";import"./group-3MU8bQUc.js";import"./proxiedModel-DKx29MO-.js";import"./index-BJH4L2FX.js";import"./color-Bo6l13w9.js";import"./display-CUGteI3_.js";import"./locale-BqFH1fBg.js";import"./VIcon-GfKFLOEw.js";import"./resizeObserver-Cb3oz2nO.js";import"./VInput-DXPqvHKO.js";import"./transition-DMoMR0kB.js";import"./density-Dl4v3sM7.js";import"./dimensions-DW-k5kP_.js";import"./FSTextField-iAMyMq3d.js";import"./FSBaseField-B4z0jav7.js";import"./FSSpan-BXQyelfo.js";import"./FSRow-C47sfGk6.js";import"./useRules-B12Yr5ve.js";import"./VField-D97ztcGG.js";import"./VLabel-Ca5QW7tf.js";import"./loader-CQB_6PPx.js";import"./VProgressCircular-C-4f-PXJ.js";import"./anchor-DCFmATqq.js";import"./rounded-CDCr0BOq.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DWgrY6Dg.js";import"./FSIcon-B4J40lse.js";import"./FSButtonNextIcon-DPE-Eee3.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-Cg52tyx-.js";import"./FSCard-BmFmHVy0.js";import"./VBtn-DqO4-7PD.js";import"./border-CvDIZQGy.js";import"./elevation-DgpWsjTu.js";import"./router-BXF-7Xxx.js";import"./index-BkfcJ8bv.js";import"./scopeId-COl1Iexy.js";import"./ssrBoot-BDHgcVA9.js";const Wo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
