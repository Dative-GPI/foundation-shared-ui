import{F as i}from"./FSColorField-CQyMoAOH.js";import{F as l}from"./FSCol-B2uM4vFw.js";import"./vue.esm-bundler-DR0_aU9U.js";import"./FSBaseField-y2QkcP3h.js";import"./FSSpan-9E7WYB2n.js";import"./useBreakpoints-DhvOJkKp.js";import"./useSlots-p1mkRhuZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-C8VtPvPz.js";import"./css-B9c0ZZC5.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./FSCard--XyliQO3.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./VProgressCircular-CZaehD4X.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSIcon-CBwOL1p5.js";import"./VIcon-e3y7Ok8e.js";import"./icons-CT9uuJgl.js";import"./FSText-CUmuxASa.js";import"./FSMenu-Dpr7CvAm.js";import"./VMenu-CkdLE1rB.js";import"./VOverlay-BwyinDfp.js";import"./proxiedModel-DoNoMWaC.js";import"./easing--CnlGZ0M.js";import"./anchor-CT7OU_gq.js";import"./dimensions-DYTrXD1P.js";import"./display-B8Tm0OQZ.js";import"./lazy-DY4Wto-x.js";import"./locale-yWiW8Thx.js";import"./router-CJAgOfLI.js";import"./scopeId-bhuUTgv7.js";import"./transition-CedxoFs4.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./dialog-transition-BGzvJBOV.js";import"./VBtn-hLKUYNZP.js";import"./border-CatZixNo.js";import"./density-SLEyWIf6.js";import"./elevation-DVEOfLMu.js";import"./rounded-B6-M_5uG.js";import"./variant-BZg-bE5G.js";import"./group-CUiyutR_.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./position-Dh5mOHTG.js";import"./index-Dlqh_ozP.js";import"./VSlider-PR8y8RxP.js";import"./VSliderTrack-4fUWbdH1.js";import"./index-C-lZWyiZ.js";import"./VInput-Cb7sX7IB.js";import"./VLabel-BfwkTHLb.js";const uo={title:"Foundation/Shared/Input fields/ColorField",component:i,tags:["autodocs"],argTypes:{}},o={args:{args:{value1:"something",opacity1:1,value2:"#00FF12",opacity2:.2,value3:"primary",opacity3:1,value4:"primary",opacity4:.5}},render:(a,{argTypes:p})=>({components:{FSColorField:i,FSCol:l},props:Object.keys(p),setup(){return{...a}},template:`
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
}`,...(e=(t=o.parameters)==null?void 0:t.docs)==null?void 0:e.source}}};const go=["Variations"];export{o as Variations,go as __namedExportsOrder,uo as default};
