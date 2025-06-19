import{F as i}from"./FSColorField-DFu32G1-.js";import{F as p}from"./FSCol-BU2zndN-.js";import"./vue.esm-bundler-BB--BfRN.js";import"./FSBaseField-BxMUaAXJ.js";import"./FSSpan-BndtI8AP.js";import"./useBreakpoints-f5uwzDhq.js";import"./useSlots-COLyvmal.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-Bdc52rY8.js";import"./css-DoweNwVf.js";import"./useColors-CeWNZtds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BwQCEo_4.js";import"./FSCard-CiGLNn7K.js";import"./FSIcon-BKav6CVU.js";import"./VIcon-Cl87HT90.js";import"./color-DIvEt_AX.js";import"./FSText-RaLR8FTM.js";import"./FSMenu-BwDA4EdU.js";import"./VMenu-DdabqpBj.js";import"./VOverlay-B758aeer.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-DMSSa4ZW.js";import"./anchor-C8ooBn8e.js";import"./dimensions-DwY9cRwZ.js";import"./display-DzHu_6W3.js";import"./scopeId-NiaFRIZK.js";import"./locale-CSWC84Vq.js";import"./router-WJHyAZQ9.js";import"./transition-GJJG9yri.js";import"./VDefaultsProvider-BK3j_XEC.js";import"./resizeObserver-CgHguIgR.js";import"./VBtn-CpUNAmWP.js";import"./border-TZTDiA6n.js";import"./density-Xpr_P7nk.js";import"./elevation-S_BtbnzN.js";import"./rounded-BKWlZxOJ.js";import"./group-C8GVwDAJ.js";import"./loader-BKsf8Js6.js";import"./VProgressCircular-DNr7n8jG.js";import"./index-8zgUIpZ9.js";import"./VSlider-Bn75Yh_W.js";import"./VSliderTrack-D17LvGqE.js";import"./index-9ysw5oGg.js";import"./VInput-BfMi-lTR.js";import"./VLabel-Cmax-_yp.js";const ro={title:"Foundation/Shared/Input fields/ColorField",component:i,tags:["autodocs"],argTypes:{}},o={args:{args:{value1:"something",opacity1:1,value2:"#00FF12",opacity2:.2,value3:"primary",opacity3:1,value4:"primary",opacity4:.5}},render:(a,{argTypes:l})=>({components:{FSColorField:i,FSCol:p},props:Object.keys(l),setup(){return{...a}},template:`
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
    </FSCol>`})};var r,e,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(t=(e=o.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const eo=["Variations"];export{o as Variations,eo as __namedExportsOrder,ro as default};
