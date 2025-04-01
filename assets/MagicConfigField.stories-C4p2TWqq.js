import{d as h,c as f,z as g,C as s,G as d,H as b,Q as n,q as V}from"./vue.esm-bundler-CUSnV4DE.js";import{M as l,u as w}from"./useMagicFieldProvider-nCH-rzRg.js";import{F as M}from"./FSButtonRemoveIcon-Dn3DJfjm.js";import{F as k}from"./FSButtonAddIcon-BJARCzCc.js";import{F as q}from"./FSTranslateField-mcCQoeKM.js";import{_ as r}from"./FSRow-hpHYWcoJ.js";import{A as I,d as N,b as $,I as P,D as x,a as R,N as B}from"./rules-CDo_Brp5.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as O}from"./FSCol-BQiFrdcO.js";import"./iframe-ByjZEVqf.js";import"../sb-preview/runtime.js";import"./FSButton-BTpAdEE5.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSClickable-Bn4xIsxH.js";import"./FSCard-BnVyMFnh.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./css-BnRE2gle.js";import"./useBreakpoints-CQzBW1Q0.js";import"./VProgressCircular-BbyuaGSs.js";import"./color-CgsoZSKd.js";import"./resizeObserver-Hv1_IiVG.js";import"./VIcon-DeLOaNVc.js";import"./FSSpan-M9GEX7v6.js";import"./useSlots-CY84M1fx.js";import"./FSIcon-Cp7BQBW6.js";import"./FSDialogSubmit-B8zuuo-y.js";import"./FSFadeOut-BguakrVC.js";import"./uuid-DTaye2KM.js";import"./FSDialog-CDP3ltAg.js";import"./FSText-CUkc4ADt.js";import"./VDialog-Co_Esry_.js";import"./VOverlay-BKGgaXLT.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-DaBGAliH.js";import"./anchor-MMgLgK3d.js";import"./dimensions-BI5CQRk1.js";import"./display-DbvBihXn.js";import"./scopeId-DP5cc-6o.js";import"./locale-DYN4KMd8.js";import"./router-C6XMMO7F.js";import"./transition-C81aHyit.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./useTranslations-D0SM0QeA.js";import"./FSTextField-MbUkXGoG.js";import"./FSBaseField-DwmVeNEG.js";import"./useRules-CYZMRvpC.js";import"./VField-B_GuA4vu.js";import"./index-DDQZ-RJM.js";import"./VLabel-DSsJm0B6.js";import"./VInput-C8lN0V_S.js";import"./density-DAqBVexQ.js";import"./loader-BjfLeESU.js";import"./rounded-DQzQH8wE.js";import"./index-CeZa2hiu.js";import"./useAppLanguages-BSjDFg7X.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-BXARN-2X.js";import"./useDateFormat-D6A_WgCt.js";import"./useAppLanguageCode-CV1UAuz5.js";import"./useAppTimeZone-CYLIXU2i.js";import"./startOfDay-C4pDH4rb.js";const y=h({name:"FSMagicConfigField",components:{FSButtonRemoveIcon:M,FSTranslateField:q,FSButtonAddIcon:k,FSRow:r},props:{type:{type:Number,required:!1,default:l.TextField},labelDefault:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["click:remove","click:add","update:modelValue","update:labelDefault","update:translations"],setup(e,{emit:a}){const{get:u}=w(),m=f(()=>{switch(e.type){case l.NumberField:return[B.required()];case l.TextField:return[R.required()];case l.DateTimeField:return[x.required()];case l.IconField:return[P.required()];case l.TimeField:return[$.required()];case l.TimeStepField:return[N.required()];case l.PlotPerField:return[I.required()]}return[]}),p=f(()=>{if(!e.modelValue)return null;switch(e.type){case l.NumberField:case l.DateTimeField:case l.TimeField:return isNaN(parseFloat(e.modelValue))?null:parseFloat(e.modelValue);case l.Switch:return e.modelValue==="true";case l.TimeStepField:return JSON.parse(e.modelValue);case l.PlotPerField:return parseInt(e.modelValue);default:return e.modelValue}});return{MagicFieldType:l,valueToInput:p,rules:m,inputToValue:t=>{switch(t||a("update:modelValue",null),e.type){case l.NumberField:case l.Switch:case l.DateTimeField:case l.TimeField:a("update:modelValue",t.toString());break;case l.TimeStepField:a("update:modelValue",JSON.stringify(t));break;case l.PlotPerField:a("update:modelValue",t.toString());break;default:a("update:modelValue",t);break}},get:u}}});function U(e,a,u,m,p,S){const t=d("FSTranslateField"),T=d("FSButtonRemoveIcon"),C=d("FSButtonAddIcon");return b(),g(r,{class:"fs-magic-config-field"},{default:s(()=>[(b(),g(V(e.get(e.$props.type)),{class:"fs-magic-config-field-value",label:e.$tr("ui.common.value","Value"),editable:e.$props.editable,required:!0,rules:e.rules,modelValue:e.valueToInput,"onUpdate:modelValue":e.inputToValue},null,8,["label","editable","rules","modelValue","onUpdate:modelValue"])),n(r,{gap:"24px"},{default:s(()=>[n(t,{label:e.$tr("ui.common.label","Label"),editable:e.$props.editable,modelValue:e.$props.labelDefault,translations:e.$props.translations,"onUpdate:modelValue":a[0]||(a[0]=o=>e.$emit("update:labelDefault",o)),"onUpdate:translations":a[1]||(a[1]=o=>e.$emit("update:translations",o))},null,8,["label","editable","modelValue","translations"]),n(r,{class:"fs-magic-config-field-actions",width:"hug",wrap:!1},{default:s(()=>[n(T,{onClick:a[2]||(a[2]=o=>e.$emit("click:remove"))}),n(C,{onClick:a[3]||(a[3]=o=>e.$emit("click:add"))})]),_:1})]),_:1})]),_:1})}const D=A(y,[["render",U]]);y.__docgenInfo={displayName:"FSMagicConfigField",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"MagicFieldType"},required:!1,defaultValue:{func:!1,value:"MagicFieldType.TextField"}},{name:"labelDefault",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:"{ languageCode: string; label: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:labelDefault"},{name:"update:translations"},{name:"click:remove"},{name:"click:add"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSMagicConfigField.vue"]};const Ye={title:"Foundation/Shared/Input fields/MagicConfigField",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{labelDefault1:"NumberField",translations1:[],value1:"",labelDefault2:"Switch",translations2:[],value2:"",labelDefault3:"TextField",translations3:[],value3:"",labelDefault4:"DateTimeField",translations4:[],value4:"",labelDefault5:"IconField",translations5:[],value5:"",labelDefault6:"TimeField",translations6:[],value6:"",labelDefault7:"TimeStepField",translations7:[],value7:"",labelDefault8:"PlotPerField",value8:3,translations8:[]}},render:(e,{argTypes:a})=>({components:{FSMagicConfigField:D,FSCol:O},props:Object.keys(a),setup(){return{...e}},template:`
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
      value8: 3,
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
}`,...(F=(v=i.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const Ze=["Variations"];export{i as Variations,Ze as __namedExportsOrder,Ye as default};
