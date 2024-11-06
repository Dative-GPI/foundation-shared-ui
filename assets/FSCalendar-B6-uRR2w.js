import{d as B,b as C,c as f,g as E,y as A,z as U,A as _,C as r,N as n,H as z,I as H,V as I,P as y}from"./vue.esm-bundler-l-siv0w9.js";import{F as L}from"./FSSelectField-BS0bweoG.js";import{F as p}from"./FSButton-v1WOpc1k.js";import{_ as F}from"./FSSpan-Di50moR2.js";import{F as k}from"./FSCol-BvqytbKT.js";import{_ as h}from"./FSRow-CbEgVN08.js";import{C as c,u as R}from"./useColors-Bs2u1_6J.js";import{u as j}from"./useDateFormat-BROYdARO.js";import{u as G}from"./useAppLanguageCode-BzH56rSm.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as K,a as O}from"./VLocaleProvider-DMII1C8e.js";const V=B({name:"FSCalendar",components:{FSSelectField:L,FSButton:p,FSSpan:F,FSCol:k,FSRow:h},props:{modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:c.Primary},limit:{type:String,required:!1,default:"none"}},emits:["update:modelValue"],setup(e,{emit:d}){const{epochToPicker:m,pickerToEpoch:t,todayToEpoch:g}=j(),{languageCode:v}=G(),{getColors:s}=R(),o=C(new Date().getMonth()),u=C(new Date().getFullYear()),i=f(()=>s(e.color)),b=s(c.Background),S=s(c.Light),D=s(c.Dark),w=f(()=>({"--fs-calendar-background-color":b.base,"--fs-calendar-hover-background-color":i.value.light,"--fs-calendar-active-background-color":i.value.base,"--fs-calendar-border-color":S.dark,"--fs-calendar-hover-border-color":i.value.base,"--fs-calendar-active-border-color":i.value.base,"--fs-calendar-color":D.base,"--fs-calendar-hover-color":i.value.base,"--fs-calendar-active-color":i.value.light})),Y=f(()=>{const a=new Date(0);return a.setMonth(o.value),a.setFullYear(u.value),new Intl.DateTimeFormat(v.value,{month:"long",year:"numeric"}).format(a)}),M=f(()=>{const a=[];switch(e.limit){case"past":for(let l=1900;l<new Date().getFullYear();l++)a.push({label:l.toString(),id:l});break;case"future":for(let l=new Date().getFullYear();l<2100;l++)a.push({label:l.toString(),id:l});break;default:for(let l=1900;l<2100;l++)a.push({label:l.toString(),id:l});break}return a}),N=()=>{o.value>0?o.value--:(u.value--,o.value=11)},P=()=>{o.value<11?o.value++:(u.value++,o.value=0)},T=a=>{!Array.isArray(a)||!(a[0]instanceof Date)||d("update:modelValue",t(a[0]))},$=()=>{const a=new Date;o.value=a.getMonth(),u.value=a.getFullYear(),a.setHours(0,0,0,0),d("update:modelValue",t(a))},q=a=>{if(!(a instanceof Date))return!1;switch(e.limit){case"past":return t(a)<=g();case"future":return t(a)>=g();default:return!0}};return E(()=>{e.modelValue&&(o.value=m(e.modelValue).getMonth(),u.value=m(e.modelValue).getFullYear())}),{ColorEnum:c,languageCode:v,style:w,text:Y,innerMonth:o,innerYear:u,years:M,epochToPicker:m,pickerToEpoch:t,onClickPrevious:N,onClickNext:P,onClickDate:T,onClickToday:$,allowedDates:q}}});function Q(e,d,m,t,g,v){const s=A("FSSelectField");return U(),_(k,{width:"hug"},{default:r(()=>[n(h,null,{default:r(()=>[n(s,{hideHeader:!0,clearable:!1,items:e.years,modelValue:e.innerYear,"onUpdate:modelValue":d[0]||(d[0]=o=>e.innerYear=o)},null,8,["items","modelValue"]),n(h,{align:"center-right"},{default:r(()=>[n(p,{label:e.$tr("ui.calendar.today","Today"),onClick:e.onClickToday},null,8,["label","onClick"])]),_:1})]),_:1}),n(k,{class:"fs-calendar",height:["380px","375px"],style:y(e.style)},{default:r(()=>[n(h,{class:"fs-calendar-header",align:"center-center"},{default:r(()=>[n(p,{size:"l",variant:"icon",icon:"mdi-chevron-left",color:e.ColorEnum.Dark,onClick:e.onClickPrevious},null,8,["color","onClick"]),n(F,{class:"fs-calendar-text",font:"text-h3"},{default:r(()=>[z(H(e.text),1)]),_:1}),n(p,{size:"l",variant:"icon",icon:"mdi-chevron-right",color:e.ColorEnum.Dark,onClick:e.onClickNext},null,8,["color","onClick"])]),_:1}),I("div",{class:"fs-calendar-divider",style:y(e.style)},null,4),n(K,{locale:e.languageCode},{default:r(()=>[n(O,{month:e.innerMonth,year:e.innerYear,multiple:!1,showAdjacentMonths:!0,allowedDates:e.allowedDates,modelValue:[e.epochToPicker(e.$props.modelValue)],"onUpdate:modelValue":e.onClickDate,"onUpdate:month":o=>null,"onUpdate:year":o=>null},null,8,["month","year","allowedDates","modelValue","onUpdate:modelValue"])]),_:1},8,["locale"])]),_:1},8,["style"])]),_:1})}const se=J(V,[["render",Q]]);V.__docgenInfo={displayName:"FSCalendar",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"limit",values:["none","past","future"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"none"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCalendar.vue"]};export{se as F};