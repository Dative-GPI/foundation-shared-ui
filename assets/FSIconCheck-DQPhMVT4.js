import{d as l,c as r,z as s,A as u,B as i,E as f,G as d}from"./vue.esm-bundler-DjjVIdVI.js";import{F as n}from"./FSIcon-BCbpBdVG.js";import{C as a}from"./useColors-CdvgF10X.js";import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";const t=l({name:"FSIconCheck",components:{FSIcon:n},props:{value:{type:Boolean,required:!1,default:!1},withColor:{type:Boolean,required:!1,default:!0}},setup(e){const o=r(()=>e.value?"mdi-check-circle-outline":"mdi-close-circle-outline");return{color:r(()=>e.withColor?e.value?a.Success:a.Error:null),icon:o}}});function p(e,o,c,h,C,_){return s(),u(n,{color:e.color},{default:i(()=>[f(d(e.icon),1)]),_:1},8,["color"])}const y=m(t,[["render",p]]);t.__docgenInfo={displayName:"FSIconCheck",exportName:"default",description:"",tags:{},props:[{name:"value",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"withColor",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSIconCheck.vue"]};export{y as F};