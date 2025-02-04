import{F as i}from"./FSColorField-CMYxt5HR.js";import{F as p}from"./FSCol-CPY6S-Xd.js";import"./vue.esm-bundler-NAfsqApI.js";import"./FSBaseField-CjhswGig.js";import"./FSSpan-CLtVPKpS.js";import"./useBreakpoints-BwxwzcAl.js";import"./useSlots-S0O9Daut.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-GjwhmX1p.js";import"./css-DBDqGZ-V.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./FSCard-DOESxZy8.js";import"./FSIcon-Dq2bxLH5.js";import"./VIcon-PiNvAqE-.js";import"./color-BvydW9AS.js";import"./FSText-Bp70TDSF.js";import"./VMenu-D8AvjW2T.js";import"./VOverlay-CNRAdbgq.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-sn-eI_a5.js";import"./anchor-DvtYZGyi.js";import"./dimensions-IFPI4Yq9.js";import"./display-Bn-MFLq6.js";import"./scopeId-CbPxXtFO.js";import"./locale-CAPEya44.js";import"./router-0GC4RTMW.js";import"./transition-L7INWkz2.js";import"./VDefaultsProvider-BngNLuXK.js";import"./resizeObserver-CLnVcpcq.js";import"./VBtn-DqFLTMVy.js";import"./border-C5v47RY4.js";import"./density-BGeA8UH8.js";import"./elevation-B-XsQHpK.js";import"./rounded-DwVJT96z.js";import"./group-Dl43T2CL.js";import"./loader-DsBOwpms.js";import"./VProgressCircular-B6p7zTwg.js";import"./index-o6vlk9JB.js";import"./VSlider-BZyCF8pi.js";import"./index-Dne_26Gx.js";import"./VInput-B5HH3Lye.js";import"./form-DTsyvZhj.js";import"./VLabel-BDFzMscP.js";const oo={title:"Foundation/Shared/Input fields/ColorField",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:"something",opacity1:1,value2:"#00FF12",opacity2:.2,value3:"primary",opacity3:1,value4:"primary",opacity4:.5}},render:(l,{argTypes:a})=>({components:{FSColorField:i,FSCol:p},props:Object.keys(a),setup(){return{...l}},template:`
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
        :editable="false"
        :onlyBaseColors="false"     
        description="Description for this field"
        v-model="args.value4"
        v-model:opacityValue="args.opacity4"
      />
    </FSCol>`})};var e,r,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
        :editable="false"
        :onlyBaseColors="false"     
        description="Description for this field"
        v-model="args.value4"
        v-model:opacityValue="args.opacity4"
      />
    </FSCol>\`
  })
}`,...(t=(r=o.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const eo=["Variations"];export{o as Variations,eo as __namedExportsOrder,oo as default};
