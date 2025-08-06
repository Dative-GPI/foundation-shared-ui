import{F as i}from"./FSColorField-CQE_r5-p.js";import{F as p}from"./FSCol-79-COv64.js";import"./vue.esm-bundler-CocPPKUI.js";import"./FSBaseField-DIVf3PoW.js";import"./FSSpan-DrSEJIpr.js";import"./useBreakpoints-DZlz3-56.js";import"./useSlots-D4bv69lA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BvJ7lU5E.js";import"./css-mt76hoAn.js";import"./useColors-C1aD-Kb6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1Gcptw7.js";import"./FSCard-2KUMcI8D.js";import"./FSIcon-BGuuL0jz.js";import"./VIcon-ZjKwFcqe.js";import"./color-D50-hVV_.js";import"./FSText-Bxdad9rN.js";import"./FSMenu-D9AFjjKN.js";import"./VMenu-DVt-HGrP.js";import"./VOverlay-C9rlmtj8.js";import"./easing-DY7PVvcf.js";import"./proxiedModel-DW1FRKBO.js";import"./anchor-D4EnoweD.js";import"./dimensions-Cv9Fwl7U.js";import"./display-23tZl-3U.js";import"./lazy-Dahsm7lL.js";import"./locale-_fONYh-8.js";import"./router-CKzlklLc.js";import"./scopeId-BfaO37qo.js";import"./transition-bMLtH-b3.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-CV4ffwSK.js";import"./resizeObserver-DDOqpSMx.js";import"./VBtn-CT_Tyh1g.js";import"./border-ZP5ArpGv.js";import"./density-2KuMGYl6.js";import"./elevation-DUhGVECn.js";import"./rounded-CBYChxif.js";import"./group-MFxThiWx.js";import"./loader-BDqRCawj.js";import"./VProgressCircular-k_tOz5gX.js";import"./index-BwBNp3ym.js";import"./VSlider-DynmDTsv.js";import"./VSliderTrack-C6Ch4QSr.js";import"./index-hd-xIizf.js";import"./VInput-JSCg5nQs.js";import"./VLabel-yrR5w-fx.js";const eo={title:"Foundation/Shared/Input fields/ColorField",component:i,tags:["autodocs"],argTypes:{}},o={args:{args:{value1:"something",opacity1:1,value2:"#00FF12",opacity2:.2,value3:"primary",opacity3:1,value4:"primary",opacity4:.5}},render:(a,{argTypes:l})=>({components:{FSColorField:i,FSCol:p},props:Object.keys(l),setup(){return{...a}},template:`
    <FSCol>
      <FSColorField
        label="Color"
        :allowOpacity="false"
        v-model="args.value1"
        v-model:opacityValue="args.opacity1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Required color, with description"
        description="Description for this field"
        :required="true"
        maxWidth="300px"
        v-model="args.value2"
        v-model:opacityValue="args.opacity2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        :hideHeader="true"
        :onlyBaseColors="false"      
        v-model="args.value3"
        v-model:opacityValue="args.opacity3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Base color picker"
        :disabled="true"
        :onlyBaseColors="false"     
        description="Description for this field"
        v-model="args.value4"
        v-model:opacityValue="args.opacity4"
      />
    </FSCol>`})};var r,t,e;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    args: {
      value1: "something",
      opacity1: 1,
      value2: "#00FF12",
      opacity2: 0.2,
      value3: "primary",
      opacity3: 1,
      value4: "primary",
      opacity4: 0.5
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSColorField,
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
      <FSColorField
        label="Color"
        :allowOpacity="false"
        v-model="args.value1"
        v-model:opacityValue="args.opacity1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Required color, with description"
        description="Description for this field"
        :required="true"
        maxWidth="300px"
        v-model="args.value2"
        v-model:opacityValue="args.opacity2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        :hideHeader="true"
        :onlyBaseColors="false"      
        v-model="args.value3"
        v-model:opacityValue="args.opacity3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Base color picker"
        :disabled="true"
        :onlyBaseColors="false"     
        description="Description for this field"
        v-model="args.value4"
        v-model:opacityValue="args.opacity4"
      />
    </FSCol>\`
  })
}`,...(e=(t=o.parameters)==null?void 0:t.docs)==null?void 0:e.source}}};const io=["Variations"];export{o as Variations,io as __namedExportsOrder,eo as default};
