import e from"./FSIconField-CJWIAEaG.js";import{_ as a}from"./FSSlideGroup-DaeYUKJp.js";import{_ as F}from"./FSFadeOut-okmKwNuP.js";import{F as s}from"./FSButton-q8xhuZjd.js";import{_ as d}from"./FSWindow-DaTXgSvH.js";import{F as S}from"./FSText-CyTnv_LZ.js";import{F as p,a as l}from"./FSTab-BobTvKIW.js";import{F as c}from"./FSCol-D6yYDi9X.js";import"./vue.esm-bundler-DtArtqdn.js";import"./FSToggleSet-CojuCZxM.js";import"./FSWrapGroup-BBSbZNqu.js";import"./uuid-DTaye2KM.js";import"./useSlots-DbyfVVj5.js";import"./useColors-P6sW9vWR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BTycGIF1.js";import"./css-Byt5yd9p.js";import"./useBreakpoints-DjafNA1e.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-XSA54cuy.js";import"./group-B-yFvi8t.js";import"./proxiedModel-DNPVb8sx.js";import"./index-YdMT2sR1.js";import"./color-DKVd81aj.js";import"./display-H53nrFTM.js";import"./locale-EnvrzLNX.js";import"./VIcon-_X0ionFS.js";import"./resizeObserver-Bx252tqU.js";import"./VInput-Dw4F_0vm.js";import"./transition-POm6u0ds.js";import"./density-96HGjcby.js";import"./dimensions-Dt4h5jdR.js";import"./FSTextField-Dwg3bGtr.js";import"./FSBaseField-COfiqIR8.js";import"./FSSpan-Btkwe66a.js";import"./FSRow-C-mN1bTt.js";import"./useRules-eDN7Chft.js";import"./VField-OtS-Js_u.js";import"./VLabel-D5MHSYH0.js";import"./loader-CJlqftns.js";import"./VProgressCircular-vkSDrwPD.js";import"./anchor-CbVlxldO.js";import"./rounded-B9giz-GX.js";import"./VDefaultsProvider-ChCmi1O1.js";import"./forwardRefs-DWGaNmQL.js";import"./index-ShtRROw2.js";import"./FSIcon-DAU03b1P.js";import"./FSButtonNextIcon-Bvnrx82W.js";import"./FSRouterLink-BnjgQQHT.js";import"./vue-router-D25_MSGh.js";import"./FSClickable-Lp9mb8CD.js";import"./FSCard-oEcmHswj.js";import"./VBtn-YNAwppzK.js";import"./border--9_J8r4E.js";import"./elevation-DuPJjm1T.js";import"./router-DPM6bvc5.js";import"./index-DWcj--5B.js";import"./scopeId-DRx9AlMK.js";import"./ssrBoot-BOTKrwq8.js";const Wo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
