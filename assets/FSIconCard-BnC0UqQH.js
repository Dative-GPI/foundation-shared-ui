import{d as u,c as s,A as i,B as d,C as f,E as a,P as r,J as c,K as p}from"./vue.esm-bundler-Zcuj-zyO.js";import{F as m}from"./FSCard-4bilSlvW.js";import{F as n}from"./FSIcon-CKEWDmaC.js";import{C as g}from"./useColors-Cz5tOQmp.js";import{s as C}from"./css-YWErTUWV.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as S}from"./FSRow-4Qz6Bbpg.js";const o=u({name:"FSIconCard",components:{FSCard:m,FSIcon:n},props:{size:{type:[Array,String,Number],required:!1,default:null},backgroundColor:{type:[Array,String],required:!1,default:null},backgroundVariant:{type:String,required:!1,default:"background"},icon:{type:String,required:!1,default:"mdi-shape"},iconColor:{type:String,required:!1,default:g.Dark},iconVariant:{type:String,required:!1,default:"base"},iconSize:{type:[Array,String,Number],required:!1,default:null},border:{type:Boolean,required:!1,default:!0}},setup(e){return{actualIconSize:s(()=>e.iconSize?e.iconSize:e.size?`calc(${C(e.size)} * 0.42)`:"42px")}}});function y(e,t,h,V,k,q){const l=i("FSCard");return d(),f(l,{variant:e.$props.backgroundVariant,color:e.$props.backgroundColor,border:e.$props.border,height:e.$props.size,width:e.$props.size},{default:a(()=>[r(S,{align:"center-center"},{default:a(()=>[r(n,{variant:e.$props.iconVariant,color:e.$props.iconColor,size:e.actualIconSize},{default:a(()=>[c(p(e.$props.icon),1)]),_:1},8,["variant","color","size"])]),_:1})]),_:1},8,["variant","color","border","height","width"])}const N=b(o,[["render",y]]);o.__docgenInfo={displayName:"FSIconCard",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"backgroundColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"backgroundVariant",values:["background","standard","full","gradient"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"background"'}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-shape"'}},{name:"iconColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"iconVariant",values:["base","baseContrast","soft","softContrast","light","lightContrast","dark","darkContrast"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"base"'}},{name:"iconSize",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"border",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSIconCard.vue"]};export{N as F};