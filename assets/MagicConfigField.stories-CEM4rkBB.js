import{d as V,c as f,B as g,E as s,I as d,J as b,H as h,k as n,l as w}from"./vue.esm-bundler-CocPPKUI.js";import{F as M}from"./FSButtonRemoveIcon-CXBv4FI_.js";import{F as k}from"./FSButtonAddIcon-Cw8HkxpC.js";import{F as I}from"./FSTranslateField-BCXXWmj_.js";import{_ as r}from"./FSRow-BvJ7lU5E.js";import{M as l,u as q}from"./useMagicFieldProvider-CfR9uprL.js";import{A as N,d as $,b as P,I as R,D as x,a as B,N as A}from"./rules-B-1MsapQ.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as U}from"./FSCol-79-COv64.js";import"./FSButton-Ct7NP3WY.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-CqIDwjuA.js";import"./FSCard-2KUMcI8D.js";import"./useColors-C1aD-Kb6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1Gcptw7.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./VProgressCircular-k_tOz5gX.js";import"./color-D50-hVV_.js";import"./resizeObserver-DDOqpSMx.js";import"./VIcon-ZjKwFcqe.js";import"./FSSpan-DrSEJIpr.js";import"./useSlots-D4bv69lA.js";import"./FSIcon-BGuuL0jz.js";import"./FSDialogSubmit-Ci0vx-bZ.js";import"./FSFadeOut-BcV7cYL5.js";import"./uuid-DTaye2KM.js";import"./FSDialog-C0efXi09.js";import"./FSText-Bxdad9rN.js";import"./VDialog-BOSWAwdu.js";import"./VOverlay-C9rlmtj8.js";import"./easing-DY7PVvcf.js";import"./proxiedModel-DW1FRKBO.js";import"./anchor-D4EnoweD.js";import"./dimensions-Cv9Fwl7U.js";import"./display-23tZl-3U.js";import"./lazy-Dahsm7lL.js";import"./locale-_fONYh-8.js";import"./router-CKzlklLc.js";import"./scopeId-BfaO37qo.js";import"./transition-bMLtH-b3.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-CV4ffwSK.js";import"./useTranslations-DJaIYmO0.js";import"./FSTextField-qizlxjKF.js";import"./FSBaseField-DIVf3PoW.js";import"./useRules-C3-AmzzE.js";import"./VField-C42QHTgn.js";import"./index-hd-xIizf.js";import"./VLabel-yrR5w-fx.js";import"./VInput-JSCg5nQs.js";import"./density-2KuMGYl6.js";import"./loader-BDqRCawj.js";import"./rounded-CBYChxif.js";import"./index-5LM_ZUPq.js";import"./useAppLanguages-YxeLYIRF.js";import"./iframe-BB4bGfN7.js";import"../sb-preview/runtime.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-DjiI-HV9.js";import"./useDateFormat-DIxFAYu6.js";import"./useAppTimeZone-CyFP2jUy.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-yNRdweo3.js";const y=V({name:"FSMagicConfigField",components:{FSButtonRemoveIcon:M,FSTranslateField:I,FSButtonAddIcon:k,FSRow:r},props:{type:{type:Number,required:!1,default:l.TextField},labelDefault:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1,default:!1}},emits:["click:remove","click:add","update:modelValue","update:labelDefault","update:translations"],setup(e,{emit:a}){const{get:u}=q(),m=f(()=>{switch(e.type){case l.NumberField:return[A.required()];case l.TextField:return[B.required()];case l.DateTimeField:return[x.required()];case l.IconField:return[R.required()];case l.TimeField:return[P.required()];case l.TimeStepField:return[$.required()];case l.PlotPerField:return[N.required()]}return[]}),p=f(()=>{if(!e.modelValue)return null;switch(e.type){case l.NumberField:case l.DateTimeField:case l.TimeField:return isNaN(parseFloat(e.modelValue))?null:parseFloat(e.modelValue);case l.Switch:return e.modelValue==="true";case l.TimeStepField:return JSON.parse(e.modelValue);case l.PlotPerField:return parseInt(e.modelValue);default:return e.modelValue}});return{MagicFieldType:l,valueToInput:p,rules:m,inputToValue:t=>{switch(t||a("update:modelValue",null),e.type){case l.NumberField:case l.Switch:case l.DateTimeField:case l.TimeField:a("update:modelValue",t.toString());break;case l.TimeStepField:a("update:modelValue",JSON.stringify(t));break;case l.PlotPerField:a("update:modelValue",t.toString());break;default:a("update:modelValue",t);break}},get:u}}});function J(e,a,u,m,p,S){const t=d("FSTranslateField"),T=d("FSButtonRemoveIcon"),C=d("FSButtonAddIcon");return b(),g(r,{class:"fs-magic-config-field"},{default:s(()=>[e.$props.type?(b(),g(w(e.get(e.$props.type)),{key:0,class:"fs-magic-config-field-value",label:e.$tr("ui.common.value","Value"),disabled:e.$props.disabled,required:!0,rules:e.rules,modelValue:e.valueToInput,"onUpdate:modelValue":e.inputToValue},null,8,["label","disabled","rules","modelValue","onUpdate:modelValue"])):h("",!0),n(r,{gap:"24px"},{default:s(()=>[n(t,{label:e.$tr("entity.common.label","Label"),disabled:e.$props.disabled,modelValue:e.$props.labelDefault,translations:e.$props.translations,"onUpdate:modelValue":a[0]||(a[0]=o=>e.$emit("update:labelDefault",o)),"onUpdate:translations":a[1]||(a[1]=o=>e.$emit("update:translations",o))},null,8,["label","disabled","modelValue","translations"]),n(r,{class:"fs-magic-config-field-actions",width:"hug",wrap:!1},{default:s(()=>[n(T,{onClick:a[2]||(a[2]=o=>e.$emit("click:remove"))}),n(C,{onClick:a[3]||(a[3]=o=>e.$emit("click:add"))})]),_:1})]),_:1})]),_:1})}const D=O(y,[["render",J]]);y.__docgenInfo={displayName:"FSMagicConfigField",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"MagicFieldType"},required:!1,defaultValue:{func:!1,value:"MagicFieldType.TextField"}},{name:"labelDefault",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:"{ languageCode: string; label: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:labelDefault"},{name:"update:translations"},{name:"click:remove"},{name:"click:add"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/fields/FSMagicConfigField.vue"]};const ll={title:"Foundation/Core/Input fields/MagicConfigField",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{labelDefault1:"NumberField",translations1:[],value1:"",labelDefault2:"Switch",translations2:[],value2:"",labelDefault3:"TextField",translations3:[],value3:"",labelDefault4:"DateTimeField",translations4:[],value4:"",labelDefault5:"IconField",translations5:[],value5:"",labelDefault6:"TimeField",translations6:[],value6:"",labelDefault7:"TimeStepField",translations7:[],value7:"",labelDefault8:"PlotPerField",value8:3,translations8:[]}},render:(e,{argTypes:a})=>({components:{FSMagicConfigField:D,FSCol:U},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(F=(v=i.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const al=["Variations"];export{i as Variations,al as __namedExportsOrder,ll as default};
