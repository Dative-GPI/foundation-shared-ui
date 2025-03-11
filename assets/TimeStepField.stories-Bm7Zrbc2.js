import o from"./FSTimeStepField-BX0XkuEg.js";import{F as n}from"./FSCol-BQiFrdcO.js";import"./vue.esm-bundler-CUSnV4DE.js";import"./FSNumberField-BY6SO-Md.js";import"./FSTextField-MbUkXGoG.js";import"./FSBaseField-DwmVeNEG.js";import"./FSSpan-M9GEX7v6.js";import"./useBreakpoints-CQzBW1Q0.js";import"./useSlots-CY84M1fx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-hpHYWcoJ.js";import"./css-BnRE2gle.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./FSButton-BTpAdEE5.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSClickable-Bn4xIsxH.js";import"./FSCard-BnVyMFnh.js";import"./VProgressCircular-BbyuaGSs.js";import"./color-CgsoZSKd.js";import"./resizeObserver-Hv1_IiVG.js";import"./VIcon-DeLOaNVc.js";import"./FSIcon-Cp7BQBW6.js";import"./useRules-CYZMRvpC.js";import"./VField-B_GuA4vu.js";import"./index-DDQZ-RJM.js";import"./transition-C81aHyit.js";import"./VLabel-DSsJm0B6.js";import"./VInput-C8lN0V_S.js";import"./locale-DYN4KMd8.js";import"./density-DAqBVexQ.js";import"./dimensions-BI5CQRk1.js";import"./proxiedModel-DaBGAliH.js";import"./loader-BjfLeESU.js";import"./anchor-MMgLgK3d.js";import"./rounded-DQzQH8wE.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CeZa2hiu.js";import"./FSSelectField-GcoemPSS.js";import"./VList-0zKlnGxf.js";import"./VDialog-Co_Esry_.js";import"./VOverlay-BKGgaXLT.js";import"./display-DbvBihXn.js";import"./scopeId-DP5cc-6o.js";import"./router-C6XMMO7F.js";import"./ssrBoot-Cb1Ys1Hl.js";import"./border-CdoaLNWv.js";import"./elevation-C08MHLji.js";import"./index-BdaiM53K.js";import"./VImg-DinzZLZB.js";import"./FSSlideGroup-BKtLKoi-.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DC1JdNxL.js";import"./VSlideGroupItem-G437Dc1S.js";import"./group-CrKBhSLQ.js";import"./FSToggleSet-gSDjdstT.js";import"./FSWrapGroup-DswCzfON.js";import"./FSCheckbox-DT2R4my4.js";import"./VSelectionControl-BrUoGkRx.js";import"./FSFadeOut-BguakrVC.js";import"./FSLoader-BxWH0Nmg.js";import"./FSRadio-BICP5Dmr.js";import"./VSelect-CO7kggYd.js";import"./VMenu-BYRtZ3M5.js";import"./time-BXARN-2X.js";import"./useTranslations-D0SM0QeA.js";const xt={title:"Foundation/Shared/Input fields/TimeStepField",component:o,tags:["autodocs"]},t={args:{args:{value1:{unit:2,value:0},value2:{unit:4,value:1},value3:{unit:5,value:1}}},render:(p,{argTypes:m})=>({components:{FSTimeStepField:o,FSCol:n},props:Object.keys(m),setup(){return{...p}},template:`
    <FSCol>
      <FSTimeStepField
        label="Time"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Required time, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Uneditable time, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})};var i,e,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      value1: {
        unit: 2,
        value: 0
      },
      value2: {
        unit: 4,
        value: 1
      },
      value3: {
        unit: 5,
        value: 1
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTimeStepField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSTimeStepField
        label="Time"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Required time, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Uneditable time, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const Ct=["Variations"];export{t as Variations,Ct as __namedExportsOrder,xt as default};
