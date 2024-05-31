import{f as k,j as g,g as i,D as V,E as h,H as B,M as u,U as R,V as E,G as m,J as H,R as y,N as T,O as w}from"./vue.esm-bundler-838daa40.js";import{F as A,a as O}from"./FSCalendarTwin-e499eb3b.js";import{F}from"./FSTextField-5838a9fc.js";import{F as S}from"./FSButton-b3e7898e.js";import{C as n,u as U}from"./useColors-8c9c4d1e.js";import{u as N}from"./useRules-cda8e231.js";import{u as P}from"./useAppTimeZone-a305acc7.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";const C=k({name:"FSDateRangeField",components:{FSDialogSubmit:A,FSCalendarTwin:O,FSTextField:F,FSButton:S},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:n.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:f,blurred:p,getMessages:c}=N(),{epochToShortDateFormat:b}=P(),{getColors:o}=U(),s=o(n.Error),l=o(n.Light),t=o(n.Dark),r=g(!1),d=g(e.modelValue),v=i(()=>e.editable?{"--fs-date-field-color":t.base,"--fs-date-field-error-color":s.base}:{"--fs-date-field-color":l.dark}),q=i(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(D=>b(D)).join(" - ")),$=i(()=>c(e.modelValue,e.rules,!0));return{ColorEnum:n,validateOn:f,messages:$,blurred:p,style:v,dialog:r,toShortDateFormat:q,innerDateRange:d,onClick:()=>{e.editable&&(r.value=!0)},onClear:()=>{a("update:modelValue",null),d.value=null},onSubmit:()=>{a("update:modelValue",d.value),r.value=!1}}}});function L(e,a,f,p,c,b){const o=V("FSCalendarTwin"),s=V("FSDialogSubmit");return h(),B(H,null,[u(F,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortDateFormat,onClick:e.onClick,"onUpdate:modelValue":e.onClear,onBlur:a[0]||(a[0]=l=>e.blurred=!0)},R({"prepend-inner":m(()=>[y(e.$slots,"prepend-inner",{},()=>[u(S,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[E(e.$slots,(l,t)=>({name:t,fn:m(r=>[y(e.$slots,t,T(w(r)))])}))]),1032,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick","onUpdate:modelValue"]),u(s,{title:e.$props.label,submitButtonColor:e.$props.color,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":a[2]||(a[2]=l=>e.dialog=l)},{body:m(()=>[u(o,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":a[1]||(a[1]=l=>e.innerDateRange=l)},null,8,["color","modelValue"])]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const _=j(C,[["render",L]]);C.__docgenInfo={displayName:"FSDateRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateRangeField.vue"]};export{_ as F};