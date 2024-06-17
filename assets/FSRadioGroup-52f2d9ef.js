import{f as _,g as n,P as y,A as F,E as s,F as d,G as o,W as g,O as C,K as S,L as v,Q as q,I as R,R as E,S as A,H as G,V as k,U as z,J as L}from"./vue.esm-bundler-6f923154.js";import{_ as B}from"./FSIcon-93774118.js";import{_ as $}from"./FSSpan-7bb94541.js";import{_ as b}from"./FSCol-5ed907ac.js";import{_ as N}from"./FSRow-64caadb9.js";import{C as u,u as U}from"./useColors-9144d90e.js";import{u as j}from"./useRules-8e3c4a4a.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{m as D,V as M}from"./VSelectionControl-40c897c6.js";import{p as H}from"./theme-a8226b2e.js";import{g as J,u as K}from"./useRender-1cb09274.js";const w=_({name:"FSRadio",components:{FSIcon:B,FSSpan:$,FSCol:b,FSRow:N},props:{item:{type:Object,required:!1,default:null},label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:[String,Boolean,Number],required:!0},selected:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:u.Primary},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const{validateOn:t,getMessages:i}=j(),{getColors:a}=U(),f=n(()=>a(e.color)),r=a(u.Error),m=a(u.Light),p=a(u.Dark),c=n(()=>e.editable?h.value.length?{"--fs-radio-cursor":"pointer","--fs-radio-radio-color":r.base,"--fs-radio-color":p.base}:{"--fs-radio-cursor":e.selected?"default":"pointer","--fs-radio-radio-color":e.selected?f.value.base:p.base,"--fs-radio-color":p.base}:{"--fs-radio-cursor":"default","--fs-radio-radio-color":e.selected?f.value.light:m.base,"--fs-radio-color":m.dark}),V=n(()=>e.selected?"mdi-radiobox-marked":"mdi-radiobox-blank"),T=n(()=>e.selected?"text-button":"text-body"),h=n(()=>e.messages??i(e.modelValue,e.rules));return{validateOn:t,messages:h,style:c,icon:V,font:T,onToggle:()=>{e.editable&&(e.selected||l("update:modelValue",e.modelValue))}}}}),Q=H({...D({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),W=J()({name:"VRadio",props:Q(),setup(e,l){let{slots:t}=l;return K(()=>y(M,F(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),t)),{}}});function X(e,l,t,i,a,f){return s(),d(b,{width:"hug"},{default:o(()=>[y(W,F({"hide-details":"",ripple:!1,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.selected,onClick:l[0]||(l[0]=C(()=>{},["prevent","stop"]))},e.$attrs),{input:o(()=>[y(N,{class:"fs-radio-label",align:"center-left",width:"hug",style:g(e.style),onClick:C(e.onToggle,["prevent","stop"])},{default:o(()=>[y(B,{class:"fs-radio",size:"l",style:g(e.style)},{default:o(()=>[S(v(e.icon),1)]),_:1},8,["style"]),q(e.$slots,"label",E(A({item:e.$props.item,font:e.font})),()=>[e.$props.label?(s(),d($,{key:0,style:g(e.style),font:e.font},{default:o(()=>[S(v(e.$props.label),1)]),_:1},8,["style","font"])):R("",!0)])]),_:3},8,["style","onClick"])]),_:3},16,["rules","validateOn","modelValue"]),q(e.$slots,"description",{},()=>[e.$props.description?(s(),d($,{key:0,class:"fs-radio-description",font:"text-underline",style:g(e.style)},{default:o(()=>[S(v(e.$props.description),1)]),_:1},8,["style"])):R("",!0)])]),_:3})}const O=P(w,[["render",X]]);w.__docgenInfo={displayName:"FSRadio",exportName:"default",description:"",tags:{},props:[{name:"item",type:{name:"object | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string|boolean|number"},required:!0},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"font",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadio.vue"]};const I=_({name:"FSRadioGroup",components:{FSRadio:O,FSCol:b},props:{gap:{type:[Array,String,Number],required:!1,default:"8px"},values:{type:Array,required:!0,default:null},modelValue:{type:[String,Boolean,Number],required:!1,default:0},color:{type:String,required:!1,default:u.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){return{isSelected:a=>a==e.modelValue,onToggle:a=>{a!=e.modelValue&&l("update:modelValue",a)}}}});function Y(e,l,t,i,a,f){return s(),d(b,{width:"hug",gap:e.$props.gap},{default:o(()=>[(s(!0),G(L,null,k(e.$props.values,(r,m)=>(s(),d(O,{selected:e.isSelected(r.value),description:r.description,editable:e.$props.editable,color:e.$props.color,label:r.label,item:r.item,key:m,modelValue:r.value,"onUpdate:modelValue":e.onToggle},z({_:2},[k(e.$slots,(p,c)=>({name:c,fn:o(V=>[q(e.$slots,c,F({ref_for:!0},V))])}))]),1032,["selected","description","editable","color","label","item","modelValue","onUpdate:modelValue"]))),128))]),_:3},8,["gap"])}const ie=P(I,[["render",Y]]);I.__docgenInfo={displayName:"FSRadioGroup",exportName:"default",description:"",tags:{},props:[{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"values",type:{name:"{ value: string | boolean | number, label?: string, description?: string, item: any | null }[]"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string|boolean|number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadioGroup.vue"]};export{ie as F};