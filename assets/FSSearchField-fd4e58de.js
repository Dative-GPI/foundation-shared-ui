import{f as q,j as V,g as f,w as g,E as h,F as v,U as S,G as t,V as $,A as I,X as C,R as o,M as m,N as F,O as k}from"./vue.esm-bundler-838daa40.js";import{F as c}from"./FSTextField-5838a9fc.js";import{F as s}from"./FSButton-b3e7898e.js";import{C as d}from"./useColors-8c9c4d1e.js";import{u as P}from"./useTranslations-419c1021.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const b=q({name:"FSSearchField",components:{FSTextField:c,FSButton:s},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},placeholder:{type:String,required:!1,default:null},prependInnerIcon:{type:String,required:!1,default:"mdi-magnify"},variant:{type:String,required:!1,default:"instant"},buttonPrependIcon:{type:String,required:!1,default:null},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},color:{type:String,required:!1,default:d.Dark},buttonColor:{type:String,required:!1,default:d.Primary},hideHeader:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{$tr:u}=P(),n=V(e.modelValue),i=f(()=>e.placeholder??u("ui.search.placeholder","Search...")),p=f(()=>e.buttonLabel??u("ui.button.search","Search")),r=l=>{l.stopImmediatePropagation(),l.preventDefault(),a("update:modelValue",n.value)};return g(n,()=>{["instant"].includes(e.variant)&&a("update:modelValue",n.value)}),{placeholder:i,buttonLabel:p,innerValue:n,ColorEnum:d,onSearch:r}}});function w(e,a,u,n,i,p){return h(),v(c,I({label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,placeholder:e.placeholder,onKeydown:C(e.onSearch,["enter"]),modelValue:e.innerValue,"onUpdate:modelValue":a[0]||(a[0]=r=>e.innerValue=r)},e.$attrs),S({_:2},[e.$props.prependInnerIcon?{name:"prepend-inner",fn:t(()=>[o(e.$slots,"prepend-inner",{},()=>[m(s,{variant:"icon",icon:e.$props.prependInnerIcon,editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.onSearch},null,8,["icon","editable","color","onClick"])])]),key:"0"}:void 0,["instant"].includes(e.$props.variant)?void 0:{name:"append",fn:t(()=>[o(e.$slots,"append",{},()=>[m(s,{prependIcon:e.$props.buttonPrependIcon,label:e.buttonLabel,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,editable:e.$props.editable,onClick:e.onSearch},null,8,["prependIcon","label","appendIcon","variant","color","editable","onClick"])])]),key:"1"},$(e.$slots,(r,l)=>({name:l,fn:t(y=>[o(e.$slots,l,F(k(y)))])}))]),1040,["label","description","color","hideHeader","required","editable","placeholder","onKeydown","modelValue"])}const K=B(b,[["render",w]]);b.__docgenInfo={displayName:"FSSearchField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"placeholder",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"prependInnerIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"mdi-magnify"'}},{name:"variant",values:["standard","instant"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"instant"'}},{name:"buttonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"append"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSSearchField.vue"]};export{K as F};