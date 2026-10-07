import e from"./FSIconField-DLZ4FDTJ.js";import{_ as a}from"./FSSlideGroup-BLif3f0e.js";import{_ as s}from"./FSFadeOut-DWR8A1ny.js";import{F}from"./FSButton-C9qE_hma.js";import{_ as d}from"./FSWindow-7nqQW9YX.js";import{F as S}from"./FSText-DkgFU9ZB.js";import{_ as l,a as p}from"./FSTab-BFTttQgk.js";import{F as c}from"./FSCol-ChYB2Oag.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSToggleSet-BsHkDw8a.js";import"./FSWrapGroup-CZDPgZeJ.js";import"./uuid-DTaye2KM.js";import"./useSlots-DEXetpJf.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./css-BA19cdxW.js";import"./useBreakpoints-Trboya0O.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroup-DLaaL0Lk.js";import"./index-C0WTB2TM.js";import"./useRender-C5CA_XPC.js";import"./display-RdUuPsY9.js";import"./goto-D2YfjHNt.js";import"./locale-MGWjZjXD.js";import"./proxiedModel-4bJ1saXA.js";import"./group-g6KFhHmW.js";import"./icons-AciKn6XY.js";import"./resizeObserver-ZKSQVJHV.js";import"./tag-BLKDmAVb.js";import"./VIcon-BPCLtKbp.js";import"./color-Cx3XlwVF.js";import"./size-kKHvqn_O.js";import"./VSlideGroupItem-BNzWd0Zb.js";import"./VInput-CBXzUquC.js";import"./transition-Dqm8buww.js";import"./density-HajNgXBf.js";import"./dimensions-BuDdBtmf.js";import"./FSTextField-CCgGVMUk.js";import"./FSBaseField-DjPNexk7.js";import"./FSSpan-CffnRYnX.js";import"./FSRow-BTBqaZ3Z.js";import"./useRules-eFcMZq7y.js";import"./VTextField-C-VZod1v.js";import"./VField-C_JZJuDz.js";import"./VLabel-DOSQu5RP.js";import"./loader-DOKDD2NA.js";import"./VProgressLinear-DA0V-MGc.js";import"./intersectionObserver-DHmVtmN7.js";import"./anchor-C-rl7L3L.js";import"./rounded-BE8u9DAQ.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Cane1ZR3.js";import"./forwardRefs-C-GTDzx5.js";import"./index-D_7bL_IH.js";import"./FSIcon-D-iWmbKS.js";import"./FSButtonNextIcon-D5s36be0.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSCard-X6BL7IDn.js";import"./VProgressCircular-D014ccrC.js";import"./VWindowItem-e5v8cqfr.js";import"./lazy-D5C5Y6_6.js";import"./ssrBoot-BimrXMWA.js";import"./VBtn-CvpLyLjZ.js";import"./border-D-0PuVU0.js";import"./elevation-DyTGrbk9.js";import"./variant-De5GYaDP.js";import"./position-BAHmyhJU.js";import"./router-D2Xcou1T.js";import"./index-CDgYZebE.js";import"./scopeId-CVBASNvj.js";const Bo={title:"Shared/Components/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:s,FSSlideGroup:a,FSButton:F,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
