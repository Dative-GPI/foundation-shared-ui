import{F as n}from"./FSErrorToast-BSPCIpzZ.js";import{_ as i}from"./FSRow-DPcQMiM9.js";import{F as p}from"./FSButton-YqGArPy2.js";import"./vue.esm-bundler-PTWG9x2X.js";import"./FSIcon-Df5FR-8G.js";import"./useBreakpoints-W7XGW48y.js";import"./useColors-CHEA4ij4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./css-B90wD3BD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-DIeegzqR.js";import"./color-CCpgnDIk.js";import"./FSSpan-yJEd2pn-.js";import"./useSlots-BG_ZhEqK.js";import"./FSCol-qfATdd_b.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./FSClickable-TnS9e2Ej.js";import"./FSCard-DkDNRB06.js";import"./VProgressCircular-eoxb555W.js";import"./resizeObserver-C17Kgm90.js";const D={title:"Foundation/Shared/ErrorToast",component:n,tags:["autodocs"]},r={args:{args:{code1:"errors.missingorganisation",code2:"errors.noadminprivilege",code3:"errors.alreadyregistereduser"}},render:(a,{argTypes:s})=>({components:{FSErrorToast:n,FSRow:i,FSButton:p},props:Object.keys(s),setup(){return{...a}},template:`
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
