import{d as V,c as f,E as g,H as s,L as d,M as b,A as h,K as M,k as n}from"./vue.esm-bundler-NVdFPFZB.js";import{F as w}from"./FSButtonRemoveIcon-j-Zi2Z3i.js";import{F as k}from"./FSButtonAddIcon-D-jNT3I2.js";import{F as N}from"./FSTranslateField-CbE83q4B.js";import{F as r}from"./FSRow-BTBqaZ3Z.js";import{M as l,u as I}from"./useMagicFieldProvider-CWNU0ImL.js";import{A as q,d as $,b as P,I as x,D as R,a as B,N as A}from"./rules-CGa_6Wse.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as J}from"./FSCol-ChYB2Oag.js";import"./FSButton-C9qE_hma.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DkgFU9ZB.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./useBreakpoints-Trboya0O.js";import"./useSlots-DEXetpJf.js";import"./FSSpan-CffnRYnX.js";import"./FSIcon-D-iWmbKS.js";import"./css-BA19cdxW.js";import"./VIcon-BPCLtKbp.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./icons-AciKn6XY.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./FSCard-X6BL7IDn.js";import"./VProgressCircular-D014ccrC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./FSDialogSubmit-CKeqPWSD.js";import"./FSFadeOut-DWR8A1ny.js";import"./uuid-DTaye2KM.js";import"./FSDialog-CUz09xcb.js";import"./VDialog-D_wwtbpx.js";import"./VOverlay-flKIXg07.js";import"./proxiedModel-4bJ1saXA.js";import"./easing-DY7PVvcf.js";import"./anchor-C-rl7L3L.js";import"./dimensions-BuDdBtmf.js";import"./display-RdUuPsY9.js";import"./lazy-D5C5Y6_6.js";import"./locale-MGWjZjXD.js";import"./router-D2Xcou1T.js";import"./scopeId-CVBASNvj.js";import"./transition-Dqm8buww.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Y-HqWA1J.js";import"./VDefaultsProvider-Cane1ZR3.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./FSTextField-CCgGVMUk.js";import"./FSBaseField-DjPNexk7.js";import"./useRules-eFcMZq7y.js";import"./VTextField-C-VZod1v.js";import"./VField-C_JZJuDz.js";import"./index-C0WTB2TM.js";import"./VLabel-DOSQu5RP.js";import"./VInput-CBXzUquC.js";import"./density-HajNgXBf.js";import"./loader-DOKDD2NA.js";import"./VProgressLinear-DA0V-MGc.js";import"./rounded-BE8u9DAQ.js";import"./index-D_7bL_IH.js";import"./useAppLanguages-dZeL6CW7.js";import"./iframe-CcuVKb3f.js";import"./time-D8YoZjka.js";import"./times-CqUFey1a.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-BKFE7Nxu.js";import"./useAppLanguageCode-CFDnQcKu.js";import"./useAppTimeZone-CjwINmn2.js";import"./startOfDay-C4pDH4rb.js";const y=V({name:"FSMagicConfigField",components:{FSButtonRemoveIcon:w,FSTranslateField:N,FSButtonAddIcon:k,FSRow:r},props:{type:{type:Number,required:!1,default:l.TextField},labelDefault:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1,default:!1}},emits:["click:remove","click:add","update:modelValue","update:labelDefault","update:translations"],setup(e,{emit:a}){const{get:u}=I(),m=f(()=>{switch(e.type){case l.NumberField:return[A.required()];case l.TextField:return[B.required()];case l.DateTimeField:return[R.required()];case l.IconField:return[x.required()];case l.TimeField:return[P.required()];case l.TimeStepField:return[$.required()];case l.PlotPerField:return[q.required()]}return[]}),p=f(()=>{if(!e.modelValue)return null;switch(e.type){case l.NumberField:case l.DateTimeField:case l.TimeField:return isNaN(parseFloat(e.modelValue))?null:parseFloat(e.modelValue);case l.Switch:return e.modelValue==="true";case l.TimeStepField:return JSON.parse(e.modelValue);case l.PlotPerField:return JSON.parse(e.modelValue);default:return e.modelValue}});return{MagicFieldType:l,valueToInput:p,rules:m,inputToValue:t=>{switch(t||a("update:modelValue",null),e.type){case l.NumberField:case l.Switch:case l.DateTimeField:case l.TimeField:a("update:modelValue",t.toString());break;case l.TimeStepField:a("update:modelValue",JSON.stringify(t));break;case l.PlotPerField:a("update:modelValue",JSON.stringify(t));break;default:a("update:modelValue",t);break}},get:u}}});function U(e,a,u,m,p,S){const t=d("FSTranslateField"),T=d("FSButtonRemoveIcon"),C=d("FSButtonAddIcon");return b(),g(r,{class:"fs-magic-config-field"},{default:s(()=>[e.$props.type?(b(),g(h(e.get(e.$props.type)),{key:0,class:"fs-magic-config-field-value",label:e.$tr("ui.common.value","Value"),disabled:e.$props.disabled,required:!0,rules:e.rules,modelValue:e.valueToInput,"onUpdate:modelValue":e.inputToValue},null,8,["label","disabled","rules","modelValue","onUpdate:modelValue"])):M("",!0),n(r,{gap:"24px"},{default:s(()=>[n(t,{label:e.$tr("entity.common.label","Label"),disabled:e.$props.disabled,modelValue:e.$props.labelDefault,translations:e.$props.translations,"onUpdate:modelValue":a[0]||(a[0]=o=>e.$emit("update:labelDefault",o)),"onUpdate:translations":a[1]||(a[1]=o=>e.$emit("update:translations",o))},null,8,["label","disabled","modelValue","translations"]),n(r,{class:"fs-magic-config-field-actions",width:"hug",wrap:!1},{default:s(()=>[n(T,{onClick:a[2]||(a[2]=o=>e.$emit("click:remove"))}),n(C,{onClick:a[3]||(a[3]=o=>e.$emit("click:add"))})]),_:1})]),_:1})]),_:1})}const D=O(y,[["render",U]]);y.__docgenInfo={displayName:"FSMagicConfigField",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"MagicFieldType"},required:!1,defaultValue:{func:!1,value:"MagicFieldType.TextField"}},{name:"labelDefault",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:"{ languageCode: string; label: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:labelDefault"},{name:"update:translations"},{name:"click:remove"},{name:"click:add"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/fields/FSMagicConfigField.vue"]};const sl={title:"Core/Components/Input fields/MagicConfigField",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{labelDefault1:"NumberField",translations1:[],value1:"",labelDefault2:"Switch",translations2:[],value2:"",labelDefault3:"TextField",translations3:[],value3:"",labelDefault4:"DateTimeField",translations4:[],value4:"",labelDefault5:"IconField",translations5:[],value5:"",labelDefault6:"TimeField",translations6:[],value6:"",labelDefault7:"TimeStepField",translations7:[],value7:"",labelDefault8:"PlotPerField",value8:'{"plotPer":3,"groupingId":null}',translations8:[]}},render:(e,{argTypes:a})=>({components:{FSMagicConfigField:D,FSCol:J},props:Object.keys(a),setup(){return{...e}},template:`
    <FSCol>
      <FSMagicConfigField
        label="Number field"
        :type="1"
        v-model:translations="args.translations1"
        v-model:labelDefault="args.labelDefault1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Switch"
        :type="2"
        v-model:translations="args.translations2"
        v-model:labelDefault="args.labelDefault2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Text field"
        :type="3"
        v-model:translations="args.translations3"
        v-model:labelDefault="args.labelDefault3"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Date time field"
        :type="4"
        v-model:translations="args.translations4"
        v-model:labelDefault="args.labelDefault4"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Icon field"
        :type="5"
        v-model:translations="args.translations5"
        v-model:labelDefault="args.labelDefault5"
        v-model="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Time field"
        :type="6"
        v-model:translations="args.translations6"
        v-model:labelDefault="args.labelDefault6"
        v-model="args.value6"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Time step field"
        :type="7"
        v-model:translations="args.translations7"
        v-model:labelDefault="args.labelDefault7"
        v-model="args.value7"
      />
      <FSMagicConfigField
        label="Plot per field"
        :type="8"
        v-model:translations="args.translations8"
        v-model:labelDefault="args.labelDefault8"
        v-model="args.value8"
      />
    </FSCol>`})};var c,v,F;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    args: {
      labelDefault1: "NumberField",
      translations1: [],
      value1: "",
      labelDefault2: "Switch",
      translations2: [],
      value2: "",
      labelDefault3: "TextField",
      translations3: [],
      value3: "",
      labelDefault4: "DateTimeField",
      translations4: [],
      value4: "",
      labelDefault5: "IconField",
      translations5: [],
      value5: "",
      labelDefault6: "TimeField",
      translations6: [],
      value6: "",
      labelDefault7: "TimeStepField",
      translations7: [],
      value7: "",
      labelDefault8: "PlotPerField",
      value8: "{\\"plotPer\\":3,\\"groupingId\\":null}",
      translations8: []
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMagicConfigField,
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
      <FSMagicConfigField
        label="Number field"
        :type="1"
        v-model:translations="args.translations1"
        v-model:labelDefault="args.labelDefault1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Switch"
        :type="2"
        v-model:translations="args.translations2"
        v-model:labelDefault="args.labelDefault2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Text field"
        :type="3"
        v-model:translations="args.translations3"
        v-model:labelDefault="args.labelDefault3"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Date time field"
        :type="4"
        v-model:translations="args.translations4"
        v-model:labelDefault="args.labelDefault4"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Icon field"
        :type="5"
        v-model:translations="args.translations5"
        v-model:labelDefault="args.labelDefault5"
        v-model="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Time field"
        :type="6"
        v-model:translations="args.translations6"
        v-model:labelDefault="args.labelDefault6"
        v-model="args.value6"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Time step field"
        :type="7"
        v-model:translations="args.translations7"
        v-model:labelDefault="args.labelDefault7"
        v-model="args.value7"
      />
      <FSMagicConfigField
        label="Plot per field"
        :type="8"
        v-model:translations="args.translations8"
        v-model:labelDefault="args.labelDefault8"
        v-model="args.value8"
      />
    </FSCol>\`
  })
}`,...(F=(v=i.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const dl=["Variations"];export{i as Variations,dl as __namedExportsOrder,sl as default};
