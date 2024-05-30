import{f as F,g as b,J as r,K as o,L as s,V as i,A as S,Z as u,O as d,P as g,N as f,X as h,Y as C,Q as N,R as _,B}from"./vue.esm-bundler-cd768bc3.js";import{_ as t}from"./FSSpan-da6dde8e.js";import{_ as V}from"./FSCol-ff457bc3.js";import{_ as $}from"./FSRow-1d7c2545.js";import{C as p,u as w}from"./useColors-91ab292c.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{V as P}from"./VSlider-d1ff3fb5.js";const q=F({name:"FSSlider",components:{FSSpan:t,FSCol:V,FSRow:$},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:[String,Number],required:!1,default:null},color:{type:String,required:!1,default:p.Dark},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{getColors:l}=w(),n=b(()=>l(e.color)),a=l(p.Light),m=l(p.Dark);return{style:b(()=>e.editable?{"--fs-slider-cursor":"pointer","--fs-slider-track-color":n.value.light,"--fs-slider-thumb-color":n.value.base,"--fs-slider-color":m.base}:{"--fs-slider-cursor":"default","--fs-slider-track-color":a.base,"--fs-slider-thumb-color":a.base,"--fs-slider-color":a.dark})}}});function R(e,l,n,a,m,k){return r(),o(V,null,{default:s(()=>[i(e.$slots,"label",{},()=>[S($,{wrap:!1},{default:s(()=>[e.$props.label?(r(),o(t,{key:0,class:"fs-slider-label",font:"text-overline",style:u(e.style)},{default:s(()=>[d(g(e.$props.label),1)]),_:1},8,["style"])):f("",!0),e.$props.label&&e.$props.required?(r(),o(t,{key:1,class:"fs-slider-label",style:u([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:s(()=>[d(" * ")]),_:1},8,["style"])):f("",!0)]),_:1})]),S(P,B({class:"fs-slider","hide-details":"",tickSize:4,style:e.style,elevation:0,ripple:!1,disabled:!e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=c=>e.$emit("update:modelValue",c))},e.$attrs),h({_:2},[C(e.$slots,(c,y)=>({name:y,fn:s(v=>[i(e.$slots,y,N(_(v)))])}))]),1040,["style","disabled","modelValue"]),i(e.$slots,"description",{},()=>[e.$props.description?(r(),o(t,{key:0,class:"fs-slider-description",font:"text-underline",style:u(e.style)},{default:s(()=>[d(g(e.$props.description),1)]),_:1},8,["style"])):f("",!0)])]),_:3})}const O=D(q,[["render",R]]);q.__docgenInfo={displayName:"FSSlider",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSlider.vue"]};export{O as F};