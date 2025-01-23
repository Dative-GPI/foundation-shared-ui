import{d as h,c as f,A as s,B as g,D as d,I as b,k as V,R as n}from"./vue.esm-bundler-CTTOvLCD.js";import{M as l,u as w}from"./useMagicFieldProvider-DVEi2RVU.js";import{F as M}from"./FSButtonRemoveIcon-D2-ficmS.js";import{F as k}from"./FSButtonAddIcon-DjCYzzGi.js";import{F as I}from"./FSTranslateField-CeFy4qaC.js";import{_ as r}from"./FSRow-C8EFLcn9.js";import{A as q,d as N,b as $,I as P,D as R,a as x,N as B}from"./rules-DkrQAdil.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as O}from"./FSCol-BPr0jVzk.js";import"./iframe-DTzrVirw.js";import"../sb-preview/runtime.js";import"./FSButton-B2X9DGvb.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSClickable-DznopAj9.js";import"./FSCard-DxhVm8H0.js";import"./useColors-D7R-CyI7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./css-D46r6e5F.js";import"./useBreakpoints-Bm7CjYdd.js";import"./VProgressCircular-it35si_v.js";import"./color-DTA1Qd0w.js";import"./resizeObserver-Bwa55KU2.js";import"./VIcon-DzkIKThE.js";import"./FSSpan-QNtf4e4q.js";import"./useSlots-NXmwCOLw.js";import"./FSIcon-yzGYQgqh.js";import"./FSDialogSubmit-C9CBWnXJ.js";import"./FSFadeOut-C2gEJSut.js";import"./uuid-DTaye2KM.js";import"./FSDialog-B6Z2dUh0.js";import"./FSText-zXSXSnZG.js";import"./VDialog-Cr2bmOLC.js";import"./VOverlay-Bysvo4NF.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-Da7OD98r.js";import"./anchor-KPAVzGxJ.js";import"./dimensions-DIR9-JzD.js";import"./display-BWFgSvI7.js";import"./scopeId-DGVhnfG2.js";import"./locale-Guk_W035.js";import"./router-SvtovJtL.js";import"./transition-C1y9a89u.js";import"./VDefaultsProvider-45AVpOQL.js";import"./useTranslations-Dol6kQeQ.js";import"./FSTextField-Cq5SV0et.js";import"./FSBaseField-BJJzXcrO.js";import"./useRules-DE909mL5.js";import"./VField-Bi2n7Ebd.js";import"./index-B698eGq-.js";import"./VLabel-DjEMOXzE.js";import"./VInput-BgFKWDn-.js";import"./density-n-hig0Tg.js";import"./form-gxFDX6UX.js";import"./loader-BcXzPxbu.js";import"./rounded-5tkyiosR.js";import"./index-CK42gwlP.js";import"./useAppLanguages-BsjZv4mU.js";import"./useDateFormat-Cunhon6k.js";import"./useAppLanguageCode-DIMcCLwL.js";import"./useAppTimeZone-Cju-Nbag.js";import"./datesTools-CNM18gr4.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./time-LFtvL5m_.js";const y=h({name:"FSMagicConfigField",components:{FSButtonRemoveIcon:M,FSTranslateField:I,FSButtonAddIcon:k,FSRow:r},props:{type:{type:Number,required:!1,default:l.TextField},labelDefault:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["click:remove","click:add","update:modelValue","update:labelDefault","update:translations"],setup(e,{emit:a}){const{get:u}=w(),m=f(()=>{switch(e.type){case l.NumberField:return[B.required()];case l.TextField:return[x.required()];case l.DateTimeField:return[R.required()];case l.IconField:return[P.required()];case l.TimeField:return[$.required()];case l.TimeStepField:return[N.required()];case l.PlotPerField:return[q.required()]}return[]}),p=f(()=>{if(!e.modelValue)return null;switch(e.type){case l.NumberField:case l.DateTimeField:case l.TimeField:return isNaN(parseFloat(e.modelValue))?null:parseFloat(e.modelValue);case l.Switch:return e.modelValue==="true";case l.TimeStepField:return JSON.parse(e.modelValue);case l.PlotPerField:return parseInt(e.modelValue);default:return e.modelValue}});return{MagicFieldType:l,valueToInput:p,rules:m,inputToValue:t=>{switch(t||a("update:modelValue",null),e.type){case l.NumberField:case l.Switch:case l.DateTimeField:case l.TimeField:a("update:modelValue",t.toString());break;case l.TimeStepField:a("update:modelValue",JSON.stringify(t));break;case l.PlotPerField:a("update:modelValue",t.toString());break;default:a("update:modelValue",t);break}},get:u}}});function U(e,a,u,m,p,S){const t=s("FSTranslateField"),T=s("FSButtonRemoveIcon"),C=s("FSButtonAddIcon");return b(),g(r,{class:"fs-magic-config-field"},{default:d(()=>[(b(),g(V(e.get(e.$props.type)),{class:"fs-magic-config-field-value",label:e.$tr("ui.common.value","Value"),editable:e.$props.editable,required:!0,rules:e.rules,modelValue:e.valueToInput,"onUpdate:modelValue":e.inputToValue},null,8,["label","editable","rules","modelValue","onUpdate:modelValue"])),n(r,{gap:"24px"},{default:d(()=>[n(t,{label:e.$tr("ui.common.label","Label"),editable:e.$props.editable,modelValue:e.$props.labelDefault,translations:e.$props.translations,"onUpdate:modelValue":a[0]||(a[0]=o=>e.$emit("update:labelDefault",o)),"onUpdate:translations":a[1]||(a[1]=o=>e.$emit("update:translations",o))},null,8,["label","editable","modelValue","translations"]),n(r,{class:"fs-magic-config-field-actions",width:"hug",wrap:!1},{default:d(()=>[n(T,{onClick:a[2]||(a[2]=o=>e.$emit("click:remove"))}),n(C,{onClick:a[3]||(a[3]=o=>e.$emit("click:add"))})]),_:1})]),_:1})]),_:1})}const D=A(y,[["render",U]]);y.__docgenInfo={displayName:"FSMagicConfigField",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"MagicFieldType"},required:!1,defaultValue:{func:!1,value:"MagicFieldType.TextField"}},{name:"labelDefault",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:"{ languageCode: string; label: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:labelDefault"},{name:"update:translations"},{name:"click:remove"},{name:"click:add"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSMagicConfigField.vue"]};const Ze={title:"Foundation/Shared/Input fields/MagicConfigField",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{labelDefault1:"NumberField",translations1:[],value1:"",labelDefault2:"Switch",translations2:[],value2:"",labelDefault3:"TextField",translations3:[],value3:"",labelDefault4:"DateTimeField",translations4:[],value4:"",labelDefault5:"IconField",translations5:[],value5:"",labelDefault6:"TimeField",translations6:[],value6:"",labelDefault7:"TimeStepField",translations7:[],value7:"",labelDefault8:"PlotPerField",value8:3,translations8:[]}},render:(e,{argTypes:a})=>({components:{FSMagicConfigField:D,FSCol:O},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(F=(v=i.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const el=["Variations"];export{i as Variations,el as __namedExportsOrder,Ze as default};
