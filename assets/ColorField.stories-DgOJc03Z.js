import{F as i}from"./FSColorField-CwAw0DvQ.js";import{F as l}from"./FSCol-DedFW0nl.js";import"./vue.esm-bundler-C5-CUMHT.js";import"./FSBaseField-B1fPD4-R.js";import"./FSSpan-D6aG51_c.js";import"./useBreakpoints-pPMhsL5T.js";import"./useSlots-ol4Nk6ew.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-C8aYwBu-.js";import"./css-DSFbdPon.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./FSCard-DYe1QD8j.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./VProgressCircular-D7Gk7a1O.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSIcon-CNpmwcOd.js";import"./VIcon-IlEzlDWp.js";import"./icons-CucLNLjN.js";import"./FSText-C8rmUTxK.js";import"./FSMenu-5jQDuEvO.js";import"./VMenu-dxHuUw__.js";import"./VOverlay-CG3iG1zZ.js";import"./proxiedModel-CV-HTW34.js";import"./easing-DY7PVvcf.js";import"./anchor-Dj2AEc5N.js";import"./dimensions-Bm76csmg.js";import"./display-IUfV935l.js";import"./lazy-DXVvciW4.js";import"./locale-BNkeanE6.js";import"./router-CTGX-puL.js";import"./scopeId-DKs4U9S0.js";import"./transition-CgRUW3r8.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./dialog-transition-DRDndVEC.js";import"./VBtn-CvDmdLsi.js";import"./border-DJaidMiz.js";import"./density-qUtw3dk7.js";import"./elevation-DfTZ1KyC.js";import"./rounded-Ctowy803.js";import"./variant-BJccJztY.js";import"./group-B4VRq_l_.js";import"./loader-CVb0Ac9O.js";import"./VProgressLinear-F46fcvb0.js";import"./position-CTxKpBLl.js";import"./index-asyjLxvi.js";import"./VSlider-d79sl-Sm.js";import"./VSliderTrack-C4ylwxyo.js";import"./index-pS3mXfMR.js";import"./VInput-Y0iB4nur.js";import"./VLabel-COLF1QPQ.js";const uo={title:"Shared/Components/Input fields/ColorField",component:i,tags:["autodocs"],argTypes:{}},o={args:{args:{value1:"something",opacity1:1,value2:"#00FF12",opacity2:.2,value3:"primary",opacity3:1,value4:"primary",opacity4:.5}},render:(p,{argTypes:a})=>({components:{FSColorField:i,FSCol:l},props:Object.keys(a),setup(){return{...p}},template:`
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
