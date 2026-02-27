import{d as V,c as f,B as g,D as s,I as d,J as b,x as h,H as w,q as n}from"./vue.esm-bundler-D5n7z5qz.js";import{F as M}from"./FSButtonRemoveIcon-Ckyqv8HZ.js";import{F as k}from"./FSButtonAddIcon-BFj7j2Pt.js";import{F as I}from"./FSTranslateField-DGvptx67.js";import{_ as r}from"./FSRow-DIk8KFbG.js";import{M as l,u as N}from"./useMagicFieldProvider-BSBvx8hP.js";import{A as q,d as $,b as P,I as x,D as R,a as B,N as O}from"./rules-2-0C43Mt.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as J}from"./FSCol-D_lbFmZy.js";import"./FSButton-M9GMz66l.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-015IEZHy.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./useBreakpoints-CEzKC_o8.js";import"./useSlots-CoecqEnp.js";import"./FSIcon-DFkRD0af.js";import"./css-CxcvJboa.js";import"./VIcon-C3cN4B51.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./icons-DbptYgqQ.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSCard-DENSLTM_.js";import"./VProgressCircular-BsmUxqlD.js";import"./resizeObserver-CpF7iUII.js";import"./FSSpan-BN7wkmby.js";import"./FSDialogSubmit-B04Ucw_W.js";import"./FSFadeOut-YXyyFCAB.js";import"./uuid-DTaye2KM.js";import"./FSDialog-dI-hxJaf.js";import"./VDialog-C5WNai-3.js";import"./VOverlay-BApTxsTF.js";import"./proxiedModel-Cv3qT1cZ.js";import"./easing-DY7PVvcf.js";import"./anchor-tlySGI4g.js";import"./dimensions-D_nx6Jbk.js";import"./display-DvHDH61C.js";import"./lazy-Bqido2cx.js";import"./locale-n4v42L7l.js";import"./router-R_WRJyUs.js";import"./scopeId-DI6aT8IG.js";import"./transition-gfLL8RoD.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-CBLjbvr6.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./useTranslations-CFCS6HA-.js";import"./FSTextField-DVC6JxU9.js";import"./FSBaseField-C_kMSpMl.js";import"./useRules-R3Ldkrx4.js";import"./VField-BWZy72Xk.js";import"./index-Bo6vw90T.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./density-BTT1solu.js";import"./loader-CAuY8UYG.js";import"./VProgressLinear-CI-Q4csR.js";import"./rounded-BSNeeq4o.js";import"./index-u79WnTSR.js";import"./useAppLanguages-Bn8V9U-N.js";import"./iframe-BoMHXoox.js";import"./time-C045-Osl.js";import"./times-CqUFey1a.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-Be4eIA50.js";import"./useAppTimeZone-tx8M1w-h.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CWFK3Ooe.js";const y=V({name:"FSMagicConfigField",components:{FSButtonRemoveIcon:M,FSTranslateField:I,FSButtonAddIcon:k,FSRow:r},props:{type:{type:Number,required:!1,default:l.TextField},labelDefault:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1,default:!1}},emits:["click:remove","click:add","update:modelValue","update:labelDefault","update:translations"],setup(e,{emit:a}){const{get:u}=N(),m=f(()=>{switch(e.type){case l.NumberField:return[O.required()];case l.TextField:return[B.required()];case l.DateTimeField:return[R.required()];case l.IconField:return[x.required()];case l.TimeField:return[P.required()];case l.TimeStepField:return[$.required()];case l.PlotPerField:return[q.required()]}return[]}),p=f(()=>{if(!e.modelValue)return null;switch(e.type){case l.NumberField:case l.DateTimeField:case l.TimeField:return isNaN(parseFloat(e.modelValue))?null:parseFloat(e.modelValue);case l.Switch:return e.modelValue==="true";case l.TimeStepField:return JSON.parse(e.modelValue);case l.PlotPerField:return JSON.parse(e.modelValue);default:return e.modelValue}});return{MagicFieldType:l,valueToInput:p,rules:m,inputToValue:t=>{switch(t||a("update:modelValue",null),e.type){case l.NumberField:case l.Switch:case l.DateTimeField:case l.TimeField:a("update:modelValue",t.toString());break;case l.TimeStepField:a("update:modelValue",JSON.stringify(t));break;case l.PlotPerField:a("update:modelValue",JSON.stringify(t));break;default:a("update:modelValue",t);break}},get:u}}});function U(e,a,u,m,p,S){const t=d("FSTranslateField"),T=d("FSButtonRemoveIcon"),C=d("FSButtonAddIcon");return b(),g(r,{class:"fs-magic-config-field"},{default:s(()=>[e.$props.type?(b(),g(h(e.get(e.$props.type)),{key:0,class:"fs-magic-config-field-value",label:e.$tr("ui.common.value","Value"),disabled:e.$props.disabled,required:!0,rules:e.rules,modelValue:e.valueToInput,"onUpdate:modelValue":e.inputToValue},null,8,["label","disabled","rules","modelValue","onUpdate:modelValue"])):w("",!0),n(r,{gap:"24px"},{default:s(()=>[n(t,{label:e.$tr("entity.common.label","Label"),disabled:e.$props.disabled,modelValue:e.$props.labelDefault,translations:e.$props.translations,"onUpdate:modelValue":a[0]||(a[0]=o=>e.$emit("update:labelDefault",o)),"onUpdate:translations":a[1]||(a[1]=o=>e.$emit("update:translations",o))},null,8,["label","disabled","modelValue","translations"]),n(r,{class:"fs-magic-config-field-actions",width:"hug",wrap:!1},{default:s(()=>[n(T,{onClick:a[2]||(a[2]=o=>e.$emit("click:remove"))}),n(C,{onClick:a[3]||(a[3]=o=>e.$emit("click:add"))})]),_:1})]),_:1})]),_:1})}const D=A(y,[["render",U]]);y.__docgenInfo={displayName:"FSMagicConfigField",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"MagicFieldType"},required:!1,defaultValue:{func:!1,value:"MagicFieldType.TextField"}},{name:"labelDefault",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:"{ languageCode: string; label: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:labelDefault"},{name:"update:translations"},{name:"click:remove"},{name:"click:add"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/fields/FSMagicConfigField.vue"]};const nl={title:"Foundation/Core/Input fields/MagicConfigField",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{labelDefault1:"NumberField",translations1:[],value1:"",labelDefault2:"Switch",translations2:[],value2:"",labelDefault3:"TextField",translations3:[],value3:"",labelDefault4:"DateTimeField",translations4:[],value4:"",labelDefault5:"IconField",translations5:[],value5:"",labelDefault6:"TimeField",translations6:[],value6:"",labelDefault7:"TimeStepField",translations7:[],value7:"",labelDefault8:"PlotPerField",value8:'{"plotPer":3,"groupingId":null}',translations8:[]}},render:(e,{argTypes:a})=>({components:{FSMagicConfigField:D,FSCol:J},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(F=(v=i.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const il=["Variations"];export{i as Variations,il as __namedExportsOrder,nl as default};
