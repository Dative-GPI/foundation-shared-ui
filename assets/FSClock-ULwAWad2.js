import{d as w,c as b,b as y,w as k,y as B,z as h,A as v,B as f,L as s,O as C,E as H,D as U}from"./vue.esm-bundler-Vj2X7okO.js";import{F as D}from"./FSSlider-DXORIiHR.js";import{_ as c}from"./FSCol-Bk577joi.js";import{_ as g}from"./FSRow-BuYwVvwM.js";import{C as i,u as E}from"./useColors-ClJ5KOuK.js";import{u as I}from"./useDateFormat-DZcIDWp6.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as S}from"./FSTextField-BxQZ_6yr.js";const F=w({name:"FSClock",components:{FSSlider:D,FSCol:c,FSRow:g},props:{modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:i.Primary},date:{type:Number,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},slider:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){const{epochToLongDateFormat:p}=I(),{getColors:t}=E(),d=b(()=>t(e.color)),V=t(i.Background),a=t(i.Light),u=t(i.Dark),r=y(0),n=y(0),M=b(()=>e.editable?{"--fs-clock-field-cursor":"text","--fs-clock-field-background-color":d.value.light,"--fs-clock-field-border-color":d.value.base,"--fs-clock-field-color":u.base,"--fs-clock-field-active-border-color":d.value.dark}:{"--fs-clock-field-cursor":"default","--fs-clock-field-background-color":V.base,"--fs-clock-field-border-color":a.base,"--fs-clock-field-color":a.dark,"--fs-clock-field-active-border-color":a.base}),$=m=>{let l=parseInt(m);isNaN(l)||!isFinite(l)||(l=Math.min(23,Math.max(0,l)),r.value=l)},N=m=>{let l=parseInt(m);isNaN(l)||!isFinite(l)||(l=Math.min(59,Math.max(0,l)),n.value=l)},q=()=>{r.value=e.modelValue?Math.floor(e.modelValue/(60*60*1e3)):0,n.value=e.modelValue?Math.floor(e.modelValue%(60*60*1e3)/(60*1e3)):0};return k(()=>e.modelValue,()=>{(r.value!==(e.modelValue?Math.floor(e.modelValue/(60*60*1e3)):0)||n.value!==(e.modelValue?Math.floor(e.modelValue%(60*60*1e3)/(60*1e3)):0))&&q()},{immediate:!0}),k([r,n],()=>{o("update:modelValue",r.value*60*60*1e3+n.value*60*1e3)}),{style:M,innerHours:r,innerMinutes:n,onChangeHours:$,onChangeMinutes:N,epochToLongDateFormat:p}}});function T(e,o,p,t,d,V){const a=B("FSSlider");return h(),v(c,null,{default:f(()=>[s(g,{align:"center-center",wrap:!1},{default:f(()=>[s(S,{class:"fs-clock-field",variant:"outlined",type:"number","hide-details":"",style:C(e.style),readonly:!e.$props.editable,modelValue:e.innerHours.toString().padStart(2,"0"),"onUpdate:modelValue":e.onChangeHours},null,8,["style","readonly","modelValue","onUpdate:modelValue"]),H(" : "),s(S,{class:"fs-clock-field",variant:"outlined",type:"number","hide-details":"",style:C(e.style),readonly:!e.$props.editable,modelValue:e.innerMinutes.toString().padStart(2,"0"),"onUpdate:modelValue":e.onChangeMinutes},null,8,["style","readonly","modelValue","onUpdate:modelValue"])]),_:1}),e.$props.slider?(h(),v(c,{key:0},{default:f(()=>[s(a,{label:e.$tr("ui.clock.hours","Hours"),readonly:!e.$props.editable,color:e.$props.color,step:1,max:23,min:0,modelValue:e.innerHours,"onUpdate:modelValue":o[0]||(o[0]=u=>e.innerHours=u)},null,8,["label","readonly","color","modelValue"]),s(a,{label:e.$tr("ui.clock.minutes","Minutes"),readonly:!e.$props.editable,color:e.$props.color,step:1,max:59,min:0,modelValue:e.innerMinutes,"onUpdate:modelValue":o[1]||(o[1]=u=>e.innerMinutes=u)},null,8,["label","readonly","color","modelValue"])]),_:1})):U("",!0)]),_:1})}const K=L(F,[["render",T]]);F.__docgenInfo={displayName:"FSClock",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"date",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"slider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSClock.vue"]};export{K as F};