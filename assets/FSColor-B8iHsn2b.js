import{d as n,c as t,A as l,B as d,C as u,E as i,j as p,M as c,N as f,O as m}from"./vue.esm-bundler-Zcuj-zyO.js";import{F as C}from"./FSCard-4bilSlvW.js";import{C as v,u as g}from"./useColors-Cz5tOQmp.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const r=n({name:"FSColor",components:{FSCard:C},props:{variant:{type:String,required:!1,default:"standard"},color:{type:String,required:!1,default:v.Primary},border:{type:Boolean,required:!1,default:!0}},setup(o){const{getColors:e}=g();return{colors:t(()=>e(o.color))}}});function S(o,e,a,$,b,y){const s=l("FSCard");return d(),u(s,p({variant:o.$props.variant,border:o.$props.border,color:o.$props.color},o.$attrs),{default:i(()=>[c(o.$slots,"default",f(m({color:o.$props.color,colors:o.colors})))]),_:3},16,["variant","border","color"])}const P=F(r,[["render",S]]);r.__docgenInfo={displayName:"FSColor",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"border",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSColor.vue"]};export{P as F};