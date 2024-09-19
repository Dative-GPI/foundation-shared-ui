import{d as B,c as n,z as t,A as i,B as u,C as a,m as k,v as o,G as c,H as g,E as q}from"./vue.esm-bundler-BwDfg4wG.js";import{F as v}from"./FSIconCard-B4Sv3DnZ.js";import{F}from"./FSImage-CtdLuckH.js";import{_ as d}from"./FSSpan-H3zJ0Cfa.js";import{F as V}from"./FSTile-_9-fb_kX.js";import{F as s}from"./FSCol-BEvj3we4.js";import{F as S}from"./FSRow-k5pgBhR1.js";import{C as r}from"./useColors-tmPxRJAs.js";import{u as $}from"./css-DTUiF03J.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";const C=B({name:"FSSimpleTileUI",components:{FSIconCard:v,FSImage:F,FSSpan:d,FSTile:V,FSCol:s,FSRow:S},props:{imageId:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},code:{type:String,required:!1,default:null},icon:{type:String,required:!1},iconBackgroundVariant:{type:String,required:!1,default:"background"},iconBackgroundColor:{type:[Array,String],required:!1,default:r.Background},iconBorder:{type:Boolean,required:!1,default:!0},activeColor:{type:String,required:!1,default:r.Primary},bottomColor:{type:[Array,String],required:!1,default:r.Light},width:{type:[Array,String,Number],required:!1,default:()=>[352,336]},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{isMobileSized:f}=$(),m=n(()=>e.iconBackgroundColor?e.bottomColor:r.Background),l=n(()=>f.value?90:100),p=n(()=>`calc(100% - ${l.value}px - 24px)`);return{iconBackgroundColor:m,ColorEnum:r,imageSize:l,infoWidth:p}}});function w(e,f,m,l,p,z){const y=t("FSImage"),b=t("FSIconCard"),h=t("FSTile");return i(),u(h,k({activeColor:e.$props.activeColor,bottomColor:e.$props.bottomColor,editable:e.$props.editable,width:e.$props.width,modelValue:e.$props.modelValue},e.$attrs),{default:a(()=>[o(s,{align:"center-center",width:"fill"},{default:a(()=>[o(S,{align:"center-left",gap:"24px",height:e.imageSize,wrap:!1},{default:a(()=>[o(s,{gap:"6px",width:e.infoWidth},{default:a(()=>[o(d,{font:"text-button",lineClamp:2},{default:a(()=>[c(g(e.$props.label),1)]),_:1}),o(d,{font:"text-overline",variant:"soft"},{default:a(()=>[c(g(e.$props.code),1)]),_:1})]),_:1},8,["width"]),e.$props.imageId?(i(),u(y,{key:0,imageId:e.$props.imageId,height:e.imageSize,width:e.imageSize},null,8,["imageId","height","width"])):e.$props.icon?(i(),u(b,{key:1,backgroundVariant:e.$props.iconBackgroundVariant,backgroundColor:e.$props.iconBackgroundColor,border:e.$props.iconBorder,icon:e.$props.icon,size:e.imageSize},null,8,["backgroundVariant","backgroundColor","border","icon","size"])):q("",!0)]),_:1},8,["height"])]),_:1})]),_:1},16,["activeColor","bottomColor","editable","width","modelValue"])}const G=I(C,[["render",w]]);C.__docgenInfo={displayName:"FSSimpleTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"code",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string"},required:!1},{name:"iconBackgroundVariant",values:["background","standard","full","gradient"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"background"'}},{name:"iconBackgroundColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Background"}},{name:"iconBorder",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"activeColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [352, 336]"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSSimpleTileUI.vue"]};export{G as F};