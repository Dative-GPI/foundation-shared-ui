import{F as n}from"./FSErrorToast-B8Yu2_aA.js";import{_ as i}from"./FSRow-CjY3icuR.js";import{F as p}from"./FSButton-Czf3beC8.js";import"./vue.esm-bundler-CC_jVOJ5.js";import"./FSIcon-CeLDRxMK.js";import"./useBreakpoints-BMcJFLA8.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./css-DTGEi_Ca.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-BOLLMMm0.js";import"./color-BM2dSUAO.js";import"./FSSpan-DkNsO5wd.js";import"./useSlots-C8jkAuOW.js";import"./FSCol-DVEaUPKl.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSClickable-DFmwvck2.js";import"./FSCard-twwkVLSp.js";import"./VProgressCircular-B7HKciov.js";import"./resizeObserver-BZ0AJw4z.js";const D={title:"Foundation/Shared/ErrorToast",component:n,tags:["autodocs"]},r={args:{args:{code1:"errors.missingorganisation",code2:"errors.noadminprivilege",code3:"errors.alreadyregistereduser"}},render:(a,{argTypes:s})=>({components:{FSErrorToast:n,FSRow:i,FSButton:p},props:Object.keys(s),setup(){return{...a}},template:`
      <FSRow gap="10px" align="bottom-center">
        <FSErrorToast
          :errorCode="args.code1"
          variant="standard"
        >
        <template #footer>
          <FSRow align="center-center">
            <FSButton
              color="error"
              label="Delete"
              variant="full"
            />
          </FSRow>
        </template>
        </FSErrorToast>
        <FSErrorToast
          :errorCode="args.code2"
        />
        <FSErrorToast
          :errorCode="args.code3"
        />
      </FSRow>`})};var o,e,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    args: {
      code1: "errors.missingorganisation",
      code2: "errors.noadminprivilege",
      code3: "errors.alreadyregistereduser"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSErrorToast,
      FSRow,
      FSButton
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <FSRow gap="10px" align="bottom-center">
        <FSErrorToast
          :errorCode="args.code1"
          variant="standard"
        >
        <template #footer>
          <FSRow align="center-center">
            <FSButton
              color="error"
              label="Delete"
              variant="full"
            />
          </FSRow>
        </template>
        </FSErrorToast>
        <FSErrorToast
          :errorCode="args.code2"
        />
        <FSErrorToast
          :errorCode="args.code3"
        />
      </FSRow>\`
  })
}`,...(t=(e=r.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const V=["Variations"];export{r as Variations,V as __namedExportsOrder,D as default};
