import{d as l,c as t,z as u,A as i,B as f,m as c,I as d}from"./vue.esm-bundler-gWFTcvUr.js";import{u as m,s as p}from"./css-Bc8dJONt.js";import{u as g}from"./useColors-vfWFlOSD.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as v}from"./VIcon-BiBYr0XY.js";const n=l({name:"FSIcon",props:{size:{type:[Array,String,Number],required:!1,default:"m"},color:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"base"}},setup(e){const{isMobileSized:s}=m(),{getColors:o}=g(),a=t(()=>{if(e.color)return o(e.color)[e.variant]}),r=t(()=>{switch(e.size){case"s":return{"--fs-icon-font-size":s.value?"14px":"16px"};case"m":return{"--fs-icon-font-size":s.value?"16px":"20px"};case"l":return{"--fs-icon-font-size":s.value?"20px":"24px"};default:return{"--fs-icon-font-size":p(e.size)}}});return{color:a,style:r}}});function z(e,s,o,a,r,_){return u(),i(v,c({class:"fs-icon",color:e.color,style:e.style},e.$attrs),{default:f(()=>[d(e.$slots,"default")]),_:3},16,["color","style"])}const I=y(n,[["render",z]]);n.__docgenInfo={displayName:"FSIcon",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:'"s" | "m" | "l" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"m"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["base","baseContrast","soft","softContrast","light","lightContrast","dark","darkContrast"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"base"'}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSIcon.vue"]};export{I as _};