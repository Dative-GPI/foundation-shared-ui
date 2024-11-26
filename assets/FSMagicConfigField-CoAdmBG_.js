import{d as S,c as p,A as o,B as f,C as c,E as i,v as T,P as n}from"./vue.esm-bundler-Zcuj-zyO.js";import{M as a,u as y}from"./useMagicFieldProvider-DwU1zOk0.js";import{F as v}from"./FSButtonRemoveIcon-DGvsyVY3.js";import{F as q}from"./FSButtonAddIcon-B9srL075.js";import{F as $}from"./FSTranslateField-EtEh5EGw.js";import{_ as r}from"./FSRow-4Qz6Bbpg.js";import{A as k,d as I,b as N,I as C,D,T as R,N as w}from"./rules-LGZSNZpJ.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const F=S({name:"FSMagicConfigField",components:{FSButtonRemoveIcon:v,FSTranslateField:$,FSButtonAddIcon:q,FSRow:r},props:{type:{type:Number,required:!1,default:a.TextField},labelDefault:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["click:remove","click:add","update:modelValue","update:labelDefault","update:translations"],setup(e,{emit:l}){const{get:d}=y(),s=p(()=>{switch(e.type){case a.NumberField:return[w.required()];case a.TextField:return[R.required()];case a.DateTimeField:return[D.required()];case a.IconField:return[C.required()];case a.TimeField:return[N.required()];case a.TimeStepField:return[I.required()];case a.PlotPerField:return[k.required()]}return[]}),m=p(()=>{if(!e.modelValue)return null;switch(e.type){case a.NumberField:case a.DateTimeField:case a.TimeField:return isNaN(parseFloat(e.modelValue))?null:parseFloat(e.modelValue);case a.Switch:return e.modelValue==="true";case a.TimeStepField:return JSON.parse(e.modelValue);case a.PlotPerField:return parseInt(e.modelValue);default:return e.modelValue}});return{MagicFieldType:a,valueToInput:m,rules:s,inputToValue:t=>{switch(t||l("update:modelValue",null),e.type){case a.NumberField:case a.Switch:case a.DateTimeField:case a.TimeField:l("update:modelValue",t.toString());break;case a.TimeStepField:l("update:modelValue",JSON.stringify(t));break;case a.PlotPerField:l("update:modelValue",t.toString());break;default:l("update:modelValue",t);break}},get:d}}});function M(e,l,d,s,m,g){const t=o("FSTranslateField"),V=o("FSButtonRemoveIcon"),b=o("FSButtonAddIcon");return f(),c(r,{class:"fs-magic-config-field"},{default:i(()=>[(f(),c(T(e.get(e.$props.type)),{class:"fs-magic-config-field-value",label:e.$tr("ui.common.value","Value"),editable:e.$props.editable,required:!0,rules:e.rules,modelValue:e.valueToInput,"onUpdate:modelValue":e.inputToValue},null,8,["label","editable","rules","modelValue","onUpdate:modelValue"])),n(r,{gap:"24px"},{default:i(()=>[n(t,{label:e.$tr("ui.common.label","Label"),editable:e.$props.editable,modelValue:e.$props.labelDefault,translations:e.$props.translations,"onUpdate:modelValue":l[0]||(l[0]=u=>e.$emit("update:labelDefault",u)),"onUpdate:translations":l[1]||(l[1]=u=>e.$emit("update:translations",u))},null,8,["label","editable","modelValue","translations"]),n(r,{class:"fs-magic-config-field-actions",width:"hug",wrap:!1},{default:i(()=>[n(V,{onClick:l[2]||(l[2]=u=>e.$emit("click:remove"))}),n(b,{onClick:l[3]||(l[3]=u=>e.$emit("click:add"))})]),_:1})]),_:1})]),_:1})}const j=B(F,[["render",M]]);F.__docgenInfo={displayName:"FSMagicConfigField",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"MagicFieldType"},required:!1,defaultValue:{func:!1,value:"MagicFieldType.TextField"}},{name:"labelDefault",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:"{ languageCode: string; label: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:labelDefault"},{name:"update:translations"},{name:"click:remove"},{name:"click:add"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSMagicConfigField.vue"]};export{j as F};