import{d as h,c as u,y as t,z as f,A as m,B as a,K as o,E as c,G as g,m as $}from"./vue.esm-bundler-BLBBrD1D.js";import{F as I}from"./FSCard-fA5aX9kp.js";import{_ as b}from"./FSIcon-CgTCRlvx.js";import{C as n}from"./useColors-CxkvBPqy.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as C}from"./FSRow-BZVvIgLd.js";import{F as B}from"./FSImage-DCiPMM8N.js";import{F as V}from"./FSText-DOaWXjiL.js";import{F as w}from"./FSTile-DZj0ToBy.js";import{_ as S}from"./FSCol-OnQTHx6W.js";import{u as z}from"./css-DU1X_fj1.js";const y=h({name:"FSIconCard",components:{FSCard:I,FSIcon:b},props:{size:{type:[Array,String,Number],required:!1,default:null},backgroundColor:{type:[Array,String],required:!1,default:null},icon:{type:String,required:!1,default:"mdi-shape"},iconColor:{type:String,required:!1,default:n.Dark}},setup(e){const r=u(()=>{switch(e.backgroundColor){case n.Background:return"background";default:return"gradient"}}),l=u(()=>{switch(e.backgroundColor){case n.Background:return!0;default:return!1}});return{variant:r,border:l}}});function T(e,r,l,i,p,s){const d=t("FSCard");return f(),m(d,{color:e.$props.backgroundColor,height:e.$props.size,width:e.$props.size,variant:e.variant,border:e.border},{default:a(()=>[o(C,{align:"center-center"},{default:a(()=>[o(b,{variant:"dark",size:"56",color:e.$props.iconColor},{default:a(()=>[c(g(e.$props.icon),1)]),_:1},8,["color"])]),_:1})]),_:1},8,["color","height","width","variant","border"])}const N=F(y,[["render",T]]);y.__docgenInfo={displayName:"FSIconCard",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"backgroundColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-shape"'}},{name:"iconColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSIconCard.vue"]};const k=h({name:"FSSimpleTileUI",components:{FSIconCard:N,FSImage:B,FSTile:w,FSText:V,FSCol:S,FSRow:C},props:{label:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},code:{type:String,required:!1,default:null},bottomColor:{type:[Array,String],required:!1,default:n.Light},iconBackgroundColor:{type:Boolean,required:!1,default:!1},icon:{type:String,required:!1,default:"mdi-ab-testing"},imageId:{type:String,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{isMobileSized:r}=z(),l=u(()=>e.iconBackgroundColor?e.bottomColor:n.Background),i=u(()=>r.value?90:100),p=u(()=>{let s=r.value?288:304;return e.icon&&(s-=i.value),s});return{iconBackgroundColor:l,ColorEnum:n,imageSize:i,infoWidth:p}}});function A(e,r,l,i,p,s){const d=t("FSText"),_=t("FSImage"),v=t("FSIconCard"),q=t("FSTile");return f(),m(q,$({bottomColor:e.$props.bottomColor,editable:e.$props.editable,modelValue:e.$props.modelValue},e.$attrs),{default:a(()=>[o(S,{align:"center-center",width:"fill"},{default:a(()=>[o(C,{align:"center-center",gap:"24px",height:e.imageSize,wrap:!1},{default:a(()=>[o(S,{gap:"6px"},{default:a(()=>[o(d,{font:"text-button",lineClamp:2},{default:a(()=>[c(g(e.$props.label),1)]),_:1}),o(d,{font:"text-overline",variant:"soft"},{default:a(()=>[c(g(e.$props.code),1)]),_:1})]),_:1}),e.$props.imageId?(f(),m(_,{key:0,height:e.imageSize,width:e.imageSize,imageId:e.$props.imageId},null,8,["height","width","imageId"])):(f(),m(v,{key:1,backgroundColor:e.iconBackgroundColor,icon:e.$props.icon,size:e.imageSize},null,8,["backgroundColor","icon","size"]))]),_:1},8,["height"])]),_:1})]),_:1},16,["bottomColor","editable","modelValue"])}const H=F(k,[["render",A]]);k.__docgenInfo={displayName:"FSSimpleTileUI",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"code",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"iconBackgroundColor",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-ab-testing"'}},{name:"imageId",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSSimpleTileUI.vue"]};export{H as F};