import{d as C,c as m,y as f,z as p,A as c,B as F,O as b,C as t,D as E,K as g,L as h,M as v,N as n,H as S,I as $,F as T,m as z,J as _}from"./vue.esm-bundler-l-siv0w9.js";import{F as q}from"./FSButton-DcUuAZqz.js";import{F as I}from"./FSCard-DL4SLpmS.js";import{F as P}from"./FSText-BwKgSTLP.js";import{_ as V}from"./FSRow-CbEgVN08.js";import{C as y}from"./useColors-Bs2u1_6J.js";import{u as w}from"./useBreakpoints-C5IzU8MC.js";import{s as R}from"./css-CP2C2-Fe.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as L}from"./FSCol-BvqytbKT.js";import{V as M}from"./VDialog-BXBtUIC2.js";const k=C({name:"FSDialogContent",components:{FSButton:q,FSCard:I,FSText:P,FSRow:V},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"fit-content"},cardClasses:{type:[Array,String],required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:y.Dark}},emits:["update:modelValue"],setup(e){const{isExtraSmall:a}=w(),s=m(()=>{const o=[];return a.value?o.push("fs-dialog-mobile"):o.push("fs-dialog"),o}),d=m(()=>a.value?"100%":R(e.width));return{isExtraSmall:a,cardWidth:d,ColorEnum:y,classes:s}}});function U(e,a,s,d,o,B){const r=f("FSText"),l=f("FSCard");return p(),c(l,{padding:["24px","16px","16px 12px"],gap:"24px",class:E(e.$props.cardClasses),color:e.$props.color,width:e.cardWidth},F({header:t(()=>[n(L,null,{default:t(()=>[n(V,{align:"center-left",wrap:!1},{default:t(()=>[n(r,{font:"text-h2"},{default:t(()=>[S($(e.$props.title),1)]),_:1}),n(V,{align:"center-right"},{default:t(()=>[n(q,{icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:a[0]||(a[0]=u=>e.$emit("update:modelValue",!1))},null,8,["color"])]),_:1})]),_:1}),e.$props.subtitle?(p(),c(r,{key:0},{default:t(()=>[S($(e.$props.subtitle),1)]),_:1})):T("",!0)]),_:1})]),_:2},[b(e.$slots,(u,i)=>({name:i,fn:t(A=>[g(e.$slots,i,h(v(A)))])}))]),1032,["class","color","width"])}const W=D(k,[["render",U]]);k.__docgenInfo={displayName:"FSDialogContent",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"cardClasses",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogContent.vue"]};const N=C({name:"FSDialog",components:{FSDialogContent:W},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"fit-content"},cardClasses:{type:[Array,String],required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1}},emits:["click","update:modelValue"],setup(){const{isExtraSmall:e}=w();return{classes:m(()=>{const s=[];return e.value?s.push("fs-dialog-mobile"):s.push("fs-dialog"),s})}}});function H(e,a,s,d,o,B){const r=f("FSDialogContent");return p(),c(M,z({transition:"dialog-bottom-transition",class:e.classes,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[2]||(a[2]=l=>e.$emit("update:modelValue",l)),onClick:a[3]||(a[3]=l=>e.$emit("update:modelValue",!1))},e.$attrs),{default:t(()=>[g(e.$slots,"default",{},()=>[n(r,{title:e.$props.title,subtitle:e.$props.subtitle,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=l=>e.$emit("update:modelValue",l)),onClick:a[1]||(a[1]=_(l=>e.$emit("click",l),["stop"]))},F({_:2},[b(e.$slots,(l,u)=>({name:u,fn:t(i=>[g(e.$slots,u,h(v(i)))])}))]),1032,["title","subtitle","width","modelValue"])])]),_:3},16,["class","modelValue"])}const ae=D(N,[["render",H]]);N.__docgenInfo={displayName:"FSDialog",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"cardClasses",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"click"}],slots:[{name:"default"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialog.vue"]};export{ae as F};