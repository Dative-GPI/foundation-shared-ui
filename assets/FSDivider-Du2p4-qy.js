import{d as y,c as s,y as g,z as r,E as d,P as t,A as h,C as f,N as l,K as S,H as b,I as F}from"./vue.esm-bundler-l-siv0w9.js";import{F as q}from"./FSText-4yVUx1mI.js";import{C as z,u as C}from"./useColors-Bs2u1_6J.js";import{u as k}from"./useSlots-C_N_WAus.js";import{s as o}from"./css-C_oz6kYw.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as m}from"./FSCol-DD5MeAoT.js";import{_ as x}from"./FSRow-BjeBkMPV.js";const c=y({name:"FSDivider",components:{FSText:q},props:{label:{type:String,required:!1,default:null},size:{type:[Array,String,Number],required:!1,default:"100%"},font:{type:String,required:!1,default:"text-body"},variant:{type:String,required:!1,default:"base"},vertical:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:z.Light}},setup(e){const{getColors:n}=C(),{slots:i}=k(),a=s(()=>n(e.color)),u=s(()=>{switch(e.variant){case"base":return{"--fs-divider-size":o(e.size),"--fs-divider-color":a.value.base};case"light":return{"--fs-divider-size":o(e.size),"--fs-divider-color":a.value.light};case"dark":return{"--fs-divider-size":o(e.size),"--fs-divider-color":a.value.dark}}});return{isEmpty:s(()=>!i.default&&!e.label),style:u}}});function E(e,n,i,a,u,p){const v=g("FSText");return e.isEmpty&&!e.vertical?(r(),d("div",{key:0,class:"fs-divider-horizontal",style:t(e.style)},null,4)):e.isEmpty&&e.vertical?(r(),d("div",{key:1,class:"fs-divider-vertical",style:t(e.style)},null,4)):(r(),h(x,{key:2,align:"center-center",gap:"24px"},{default:f(()=>[l(m,{class:"fs-divider-around",style:t(e.style)},null,8,["style"]),l(v,{variant:"soft",font:e.$props.font},{default:f(()=>[S(e.$slots,"default",{},()=>[b(F(e.$props.label),1)])]),_:3},8,["font"]),l(m,{class:"fs-divider-around",style:t(e.style)},null,8,["style"])]),_:3}))}const I=V(c,[["render",E]]);c.__docgenInfo={displayName:"FSDivider",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"size",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100%"'}},{name:"font",values:["text-h1","text-h2","text-h3","text-h4","text-body","text-button","text-overline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"text-body"'}},{name:"variant",values:["base","light","dark"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"base"'}},{name:"vertical",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDivider.vue"]};export{I as F};